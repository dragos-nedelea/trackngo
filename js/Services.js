// =============================== Page refresh on resize ======================================

// define the breakpoint where the screen width changes
const breakpoint = 768;

// add an event listener for the resize event
window.addEventListener('resize', function() {
  // check if the screen width is below the breakpoint
  if (window.innerWidth <= breakpoint || window.innerWidth >= breakpoint) {
    // reload the page to update the mobile view
    location.reload();
  }
});

// =============================== calendar implementation ======================================

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
    });
    calendar.render();
  });


// =============================== Firebase import ======================================

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpeQVFb_9JcVX2QQyPoEeJiZoD_FlM7yE",
    authDomain: "mostenitoriiproject.firebaseapp.com",
    databaseURL: "https://mostenitoriiproject-default-rtdb.firebaseio.com",
    projectId: "mostenitoriiproject",
    storageBucket: "mostenitoriiproject.appspot.com",
    messagingSenderId: "794883265687",
    appId: "1:794883265687:web:a830d463e8f34a8cac05d2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

// =============================== Form submission ======================================

// Get a reference to the form and the form fields
const form = document.querySelector('#formular');
const nameField = form.querySelector('#Name');
const phoneField = form.querySelector('#Pnumb');
const dancersNumber = form.querySelector('#dancers');
const zoneField = form.querySelector('#region');
const date = form.querySelector('#date');



// Add an event listener to the form's submit button
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the form from submitting normally

    // Get the values of the form fields
    const name = nameField.value;
    const phone = phoneField.value;
    const dancers = dancersNumber.value;
    const zone = zoneField.value;
    const dateValue = date.value;

    // Create a new Date object from the picked date
    const pickedDate = new Date(dateValue);


    // Push the form data to Firebase
    database.ref('form-submissions').push({
        name,
        phone,
        dancers,
        zone,
        date: pickedDate.toISOString() // Store the date as a timestamp in Firebase
    });

    // Clear the form fields
    nameField.value = '';
    phoneField.value = '';
    dancersNumber.value = '';
    zoneField.value = '';
    date.value = '';

    // Display a success message to the user
    alert('Form submitted successfully!');
    location.reload(); // refresh the page
});

// =============================== Price calculation in service form ======================================
  document.addEventListener('DOMContentLoaded', function() {
    // Get the necessary elements
    const dancersSelect = document.getElementById('dancers');
    const regionSelect = document.getElementById('region');
    const priceDisplay = document.getElementById('price');
    const dateInput = document.getElementById('date');

    // Define the price values for each dancer option and region
    const prices = {
      dancers: {
        '2': 100,
        '4': 200,
        '6': 300
      },
      regions: {
        'Râșcani': 50,
        'Bălți': 100,
        'Drochia': 150
      }
    };

    // Calculate and display the price
    function calculatePrice() {
      const selectedDancers = dancersSelect.value;
      const selectedRegion = regionSelect.value;
      const dancersPrice = prices.dancers[selectedDancers];
      const regionPrice = prices.regions[selectedRegion];
      const totalPrice = dancersPrice + regionPrice;
      priceDisplay.innerHTML = `${totalPrice}`;
    }

    // Calculate the price whenever the dancer selection or region selection changes
    dancersSelect.addEventListener('change', calculatePrice);
    regionSelect.addEventListener('change', calculatePrice);

  // Check if the date is picked in the Firebase database
  function checkDateAvailability() {
    const selectedDate = new Date(date.value).toISOString().split('T')[0];
    const language = window.location.hash.substring(1); // Get the language from the URL hash
  
    database.ref('form-submissions').once('value', (snapshot) => {
      const submissions = snapshot.val();
  
      if (submissions) {
        const isDateBooked = Object.values(submissions).some((submission) => submission.date.includes(selectedDate));
        if (isDateBooked) {
          // Date is already booked, display the corresponding text based on the language
          const bookedText = getBookedText(language); // Assuming you have a function to get the booked text based on language
          document.getElementById('dateCheck').textContent = bookedText;
        } else {
          // Date is available, restore the original message based on the language
          const originalText = getOriginalText(language); // Assuming you have a function to get the original text based on the language
          document.getElementById('dateCheck').textContent = originalText;
        }
      } else {
        // No form submissions found
        document.getElementById('dateCheck').textContent = 'No form submissions found.';
      }
    });
  }
  
  // Check the date availability whenever the date input changes
  date.addEventListener('change', checkDateAvailability);
  
  // Function to get the booked text based on the selected language
  function getBookedText(language) {
    if (language === 'ro') {
      return 'Această dată este deja rezervată. Vă rugăm să alegeți o altă dată.';
    } else if (language === 'ru') {
      return 'Эта дата уже забронирована. Пожалуйста, выберите другую дату.';
    } else {
      return 'This date is already booked. Please choose another date.';
    }
  }
  
  // Function to get the original text based on the selected language
  function getOriginalText(language) {
    if (language === 'ro') {
      return 'După trimitere, veți fi contactat și data selectată va fi afișată în calendarul nostru.';
    } else if (language === 'ru') {
      return 'После отправки вы будете связаны, и выбранная вами дата будет отображаться в нашем календаре.';
    } else {
      return 'After submitting, you will be contacted, and your picked date will be displayed in our calendar.';
    }
  }
  
});


// =============================== New Date array (picked dates) ======================================

database.ref('form-submissions').once('value')
  .then((snapshot) => {
    const submissions = snapshot.val();
    // loop through the submissions and create a new array with the date timestamps
    const dates = Object.keys(submissions).map((key) => {
      return submissions[key].date;
    });
    // call the function to create the calendar
    createCalendar(dates);
  });

  function createCalendar(dates) {
    // initialize the FullCalendar
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
  
    // loop through the dates and add them as events to the calendar
    dates.forEach((timestamp) => {
        const date = new Date(timestamp);
        calendar.addEvent({
          title: 'Booked',
          start: date,
          allDay: true
        });
      });
  
    // render the calendar
    calendar.render();
  }

// =============================== scroll animation ======================================
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
    }
});

// =============================== Preloader animation ======================================

const preloaderWrapper = document.querySelector('.preloader-wrapper');

window.addEventListener('load', function () {
    preloaderWrapper.classList.add('fade-out-animation');
})

// =============================== Text apprearance animation ============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ================================= Translation ========================================
// define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

// Language translations
var language = {
    ro: {
        // navbar
        "home": "Acasă",
        "OurCalendar": "Calendarul Nostru",
        "navDancers": "Dansatori la evenimente",
        "traditions": "Dansuri ceremoniale",
        "serv": "Servicii",


        //footer section 
        "footercitate": "Noi, cei ieșiți din popor, care am crescut legănati de aceste cântece, suntem datori a le păstra cu sfințenia cu care se păstrează moştenirea venită de la o națiune întreagă, trebuie să veghem lângă această comoară, căci ea fiind a poporului este şi a noastră. este a întregii suflări românești",
        "usefullinks": "Linkuri utile",
        "products": "Produse",
        "fcontact": "Contactează-ne",
        "oword": "Noi spunem",
        "disclaim": "Acest website a fost realizat în cadrul competiției ”Tekwill Junior Ambassadors” organizată de proiectul ”Tekwill în Fiecare Școală” și nu reflectă neapărat opinia proiectului.",
        "formTitle": "Completează formularul și devin-o dansator alături de noi",
        "formDesc": "Avem nevoie de tine pentru a ne ajuta să menținem tradițiile.",
        "morevids": "Videouri",
        "galId": "Galerie",

        //Form Section
        "Nameform": "Nume:",
        "Pform": "Nr.Telefon:",
        "Dform": "Alegeți numărul dansatorilor",
        "Rform": "Alegeți regiunea:",
        "Dateform": "Alegeți data:",
        "Tform": "Angajează dansatori pentru ceremonia ta",
        "Bform": "Trimite",
        "title3": "Dacă ai nevoie ca cineva să-ți înveselească ceremonia",
        "subtitle3": "Contactează-ne, te putem ajuta cu asta!",
        "SectionTitle3": "Dansatori la evenimente",
        "titleBtn": "Contactează",
        "priceText": "Preț:",
        "currency": "Euro",

        //Our Calendar Section
        "SectionTitle2": "Calendarul nostru",
        "Map1": "Dățile",
        "Map2": "ocupate:",

        //Traditions Section
        "SectionTitle4": "Dansuri ceremoniale",
        "podul": "Tradiția podului de flori la nunți este o practică populară în multe culturi și țări din întreaga lume. Aceasta presupune crearea unui pod decorativ, din flori sau alte materiale decorative, pe care mirii îl traversează în timp ce se îndreaptă spre altar sau în timpul petrecerii de nuntă. Podul de flori simbolizează trecerea de la viața de burlac sau de la viața unei fete la viața unui cuplu căsătorit. În timp ce trec prin podul florilor, mirii sunt încurajați să se concentreze asupra dragostei și angajamentului lor unul față de celălalt, deoarece simbolizează o tranziție importantă în viața lor. Această tradiție poate fi personalizată în funcție de gusturile și preferințele fiecărui cuplu cu diferite tipuri de flori, culori și stiluri de decorare. Podul de flori poate fi amplasat în diferite locații – în afara bisericii sau în interiorul sălii de nuntă – și poate fi realizat cu ajutorul familiei sau prietenilor, care pot contribui cu flori sau alte materiale decorative.",
        "incuscr": "Traditia incuscririi este una dintre cele mai vechi si mai importante traditii ale nuntilor romanesti si presupune ca un barbat din familia mirelui merge la casa miresei pentru a o cere in casatorie. Această ceremonie are loc înainte de nuntă și este considerată un simbol al respectului, tradiției și unității familiei. În ceremonia de consfințire, bărbatul care o cere în căsătorie aduce cu el cadouri pentru familia ei, precum pâine și sare, simboluri ale prosperității și bunăstării. Înainte de a fi lăsat să intre în casă, bărbatul trebuie să treacă prin mai multe teste pregătitoare, care pot include dansul cu mireasa sau chiar negocierea unui preț pentru a lua mireasa. Daca barbatul reuseste sa duca la bun sfarsit toate aceste probe, atunci mireasa este data in casatorie si cei doi isi vor uni destinele intr-un mod festiv la nunta. În acest fel, tradiția celor consacrat este un moment deosebit de important pentru ambele familii și este considerată o modalitate de întărire a legăturilor dintre ele.",
        "colacul": "Colacul miresei este o traditie la nuntile romanesti, care reprezinta un simbol al unitatii si al legaturii dintre miri. Cola este de obicei un inel din pâine, decorat cu flori, panglici și alte elemente decorative. În timpul ceremoniei nunții, mirii iau colacul în mâini și îl rup împreună, simbolizând astfel că vor fi uniți și vor împărtăși totul în viața lor împreună. După ce colacul este rupt, fiecare dintre cei doi va lua o bucată și o va pune în gura celuilalt, simbolizând astfel promisiunea de a se hrăni și de a se sprijini reciproc pentru tot restul vieții. In unele regiuni ale tarii, prajitura miresei este facuta dintr-un aluat dulce, decorat cu stafide sau alte fructe uscate, iar in alte regiuni se face dintr-un aluat mai simplu, fara adaos de zahar. Tradiția cocului miresei este o practică veche care datează din cele mai vechi timpuri și este încă respectată și practicată în multe zone ale României. Această tradiție este considerată un moment important al ceremoniei nunții și un simbol al iubirii și unității dintre mire și mireasă."



    },

    ru: {
        // navbar
        "home": "Домой",
        "OurCalendar": "Наш календар",
        "navDancers": "Танцоры на церемониях",
        "traditions": "Церемониальные танцы",
        "serv": "Сервисы",

        //footer section 
        "footercitate": "Мы, выходцы из народа, выросшие на этих песнях, обязаны хранить их с той святостью, с какой сохраняется наследие целого народа, мы должны беречь это сокровище, ибо оно народное и это наше. это всего румынского дыхания",
        "usefullinks": "Ссылки",
        "products": "Продукты",
        "fcontact": "Связаться с нами",
        "oword": "Мы говорим",
        "disclaim": "Этот веб-сайт был создан в рамках конкурса «Tekwill Junior Ambassadors», организованного проектом «Tekwill в каждой школе», и не обязательно отражает мнение проекта.",
        "formTitle": "Заполните форму и станьте танцором вместе с нами",
        "formDesc": "Нам нужно, чтобы вы помогли нам сохранить традиции.",
        "morevids": "Видео",
        "galId": "Галерея",

        //Form Section
        "Nameform": "Имя:",
        "Pform": "Номер:",
        "Dform": "Выберите, сколько танцоров:",
        "Rform": "Выберите свой регион:",
        "Dateform": "Установить дату:",
        "Tform": "Закажите танцоров на вашу церемонию",
        "Bform": "Отправить",
        "title3": "Если вам нужно поднять настроение на церемонии",
        "subtitle3": "Свяжитесь с нами, мы можем вам в этом помочь!",
        "SectionTitle3": "Танцоры на церемониях",
        "titleBtn": "Связаться",
        "priceText": "Цена:",
        "currency": "Евро",

        //Our Calendar Section
        "SectionTitle2": "Наш календарь",
        "Map1": "Занятые",
        "Map2": "даты:",

        //Traditions Section
        "SectionTitle4": "Церемониальные танцы",
        "podul": "Традиция моста из цветов на свадьбах популярна во многих культурах и странах мира. Это включает в себя создание декоративного моста из цветов или других декоративных материалов, который жених и невеста пересекают, направляясь к алтарю или во время свадебной вечеринки. Мост из цветов символизирует переход от жизни холостяка или от жизни девушки к жизни супружеской пары. Когда они идут по мосту из цветов, жениху и невесте предлагается сосредоточиться на своей любви и приверженности друг другу, поскольку они символизируют важный переход в их жизни. Эта традиция может быть изменена в соответствии со вкусами и предпочтениями каждой пары с использованием различных видов цветов, цветов и стилей оформления. Цветочный мостик можно разместить в разных местах — за пределами церкви или внутри свадебного зала — и его можно создать с помощью семьи или друзей, которые могут предоставить цветы или другие декоративные материалы.",
        "incuscr": "Традиция incuscrire - одна из старейших и наиболее важных традиций румынских свадеб, когда мужчина из семьи жениха идет в дом невесты, чтобы сделать ей предложение. Эта церемония проходит перед свадьбой и считается символом уважения, традиции и единства семьи. На церемонии освящения мужчина, делающий предложение невесте, приносит с собой подарки для ее семьи, такие как хлеб и соль, символы процветания и благополучия. Прежде чем его впустят в дом, мужчина должен пройти несколько подготовительных испытаний, которые могут включать в себя танцы с невестой или даже переговоры о цене, чтобы взять невесту. Если мужчине удается успешно пройти все эти испытания, то невеста выдается замуж, и на свадьбе они празднично соединят свои судьбы. Таким образом, традиция хранимого является особенно важным моментом для обеих семей и считается способом укрепить связи между ними.",
        "colacul": "Colacul Mireser - это традиция румынских свадеб, которая представляет собой символ единства и связи между женихом и невестой. Кола обычно представляет собой кольцо из хлеба, украшенное цветами, лентами и другими декоративными элементами. Во время свадебной церемонии жених и невеста берут в руки моток и вместе разрывают его, символизируя тем самым, что они будут едины и будут делить все в своей жизни вместе. После того, как катушка будет сломана, каждый из двоих возьмет кусок и положит его в рот другому, что символизирует обещание кормить и поддерживать друг друга до конца своей жизни. В одних регионах страны торт невесты делают из сладкого теста, украшая изюмом или другими сухофруктами, а в других - из более простого теста, без добавления сахара. Традиция булочки невесты - это старинная практика, которая восходит к древним временам и до сих пор соблюдается и практикуется во многих районах Румынии. Эта традиция считается важным моментом свадебной церемонии и символом любви и единства между женихом и невестой."
       



    }
}

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#ro") {

        langshow.textContent = "RO";

        // navbar
        home.textContent = language.ro.home;
        OurCalendar.textContent = language.ro.OurCalendar;
        navDancers.textContent = language.ro.navDancers;
        traditions.textContent = language.ro.traditions;
        serv.textContent = language.ro.serv;

        // footer section
        footercitate.textContent = language.ro.footercitate;
        usefullinks.textContent = language.ro.usefullinks;
        products.textContent = language.ro.products;
        fcontact.textContent = language.ro.fcontact;
        oword.textContent = language.ro.oword;
        disclaim.textContent = language.ro.disclaim;
        morevids.textContent = language.ro.morevids;
        galId.textContent = language.ro.galId;

        // Form Section
        Nameform.textContent = language.ro.Nameform;
        Pform.textContent = language.ro.Pform;
        Dform.textContent = language.ro.Dform;
        Rform.textContent = language.ro.Rform;
        Dateform.textContent = language.ro.Dateform;
        Tform.textContent = language.ro.Tform;
        Bform.textContent = language.ro.Bform;
        title3.textContent = language.ro.title3;
        subtitle3.textContent = language.ro.subtitle3;
        SectionTitle3.textContent = language.ro.SectionTitle3;
        titleBtn.textContent = language.ro.titleBtn;
        priceText.textContent = language.ro.priceText;
        currency.textContent = language.ro.currency;

        //Our Calendar Section
        SectionTitle2.textContent = language.ro.SectionTitle2;
        Map1.textContent = language.ro.Map1;
        Map2.textContent = language.ro.Map2;

        //Dances Section
        SectionTitle4.textContent = language.ro.SectionTitle4;
        podul.textContent = language.ro.podul;
        incuscr.textContent= language.ro.incuscr;
        colacul.textContent = language.ro.colacul;

    } else if (window.location.hash === "#ru") {

        langshow.textContent = "РУ";

        // navbar
        home.textContent = language.ru.home;
        OurCalendar.textContent = language.ru.OurCalendar;
        navDancers.textContent = language.ru.navDancers;
        traditions.textContent = language.ru.traditions;
        serv.textContent = language.ru.serv;

        // footer section
        footercitate.textContent = language.ru.footercitate;
        usefullinks.textContent = language.ru.usefullinks;
        products.textContent = language.ru.products;
        fcontact.textContent = language.ru.fcontact;
        oword.textContent = language.ru.oword;
        disclaim.textContent = language.ru.disclaim;
        morevids.textContent = language.ru.morevids;
        galId.textContent = language.ru.galId;

        // Form Section
        Nameform.textContent = language.ru.Nameform;
        Pform.textContent = language.ru.Pform;
        Dform.textContent = language.ru.Dform;
        Rform.textContent = language.ru.Rform;
        Dateform.textContent = language.ru.Dateform;
        Tform.textContent = language.ru.Tform;
        Bform.textContent = language.ru.Bform;
        title3.textContent = language.ru.title3;
        subtitle3.textContent = language.ru.subtitle3;
        SectionTitle3.textContent = language.ru.SectionTitle3;
        titleBtn.textContent = language.ru.titleBtn;
        priceText.textContent = language.ru.priceText;
        currency.textContent = language.ru.currency;

        //Our Calendar Section
        SectionTitle2.textContent = language.ru.SectionTitle2;
        Map1.textContent = language.ru.Map1;
        Map2.textContent = language.ru.Map2;

        //Dances Section
        SectionTitle4.textContent = language.ru.SectionTitle4;
        podul.textContent = language.ru.podul;
        incuscr.textContent= language.ru.incuscr;
        colacul.textContent = language.ru.colacul;



    }
}


// define language onclick illiteration
for (let i = 0; i <= dataReload.length; i++) {

  const rolang = document.getElementById("ro");
  const englang = document.getElementById("eng");
  const rulang = document.getElementById("ru");


  rolang.onclick = function () {
      window.location.hash = "#ro";
      location.reload(true);

  }
  englang.onclick = function () {
      window.location.hash = "#eng";
      location.reload(true);

  }
  rulang.onclick = function () {
      window.location.hash = "#ru";
      location.reload(true);

  }
}

// ======================================================================================

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

// =============================== scroll animation ======================================
const navEl = document.querySelector('.navbar');
navEl.classList.add('navbar-scrolled');

// =============================== Preloader animation ======================================

const preloaderWrapper = document.querySelector('.preloader-wrapper');

window.addEventListener('load', function() {
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
        "about": "Despre Noi",
        "tour": "Turul Lumii",
        "staff": "Membrii Ansamblului",
        "repert": "Repertoriu",
        "contact": "Alătură-te echipei",
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

    },

    ru: {
        // navbar
        "home": "Домой",
        "about": "Про нас",
        "tour": "Мировое турне",
        "staff": "Участники ансамбля",
        "repert": "Репертуар",
        "contact": "Связаться",
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
    }
}

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#ro") {

        langshow.textContent = "RO";

        // navbar
        home.textContent = language.ro.home;
        about.textContent = language.ro.about;
        tour.textContent = language.ro.tour;
        staff.textContent = language.ro.staff;
        repert.textContent = language.ro.repert;
        contact.textContent = language.ro.contact;

        // footer section
        footercitate.textContent = language.ro.footercitate;
        usefullinks.textContent = language.ro.usefullinks;
        products.textContent = language.ro.products;
        fcontact.textContent = language.ro.fcontact;
        oword.textContent = language.ro.oword;
        disclaim.textContent = language.ro.disclaim;
        morevids.textContent = language.ro.morevids;
        galId.textContent = language.ro.galId;
        serv.textContent = language.ro.serv;

    } else if (window.location.hash === "#ru") {

        langshow.textContent = "РУ";

        // navbar
        home.textContent = language.ru.home;
        about.textContent = language.ru.about;
        tour.textContent = language.ru.tour;
        staff.textContent = language.ru.staff;
        repert.textContent = language.ru.repert;
        contact.textContent = language.ru.contact;

        // footer section
        footercitate.textContent = language.ru.footercitate;
        usefullinks.textContent = language.ru.usefullinks;
        products.textContent = language.ru.products;
        fcontact.textContent = language.ru.fcontact;
        oword.textContent = language.ru.oword;
        disclaim.textContent = language.ru.disclaim;
        morevids.textContent = language.ru.morevids;
        galId.textContent = language.ru.galId;
        serv.textContent = language.ru.serv;
    }
}


// define language onclick illiteration
for (i = 0; i <= dataReload.length; i++) {

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

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
document.addEventListener('DOMContentLoaded', () => {
    const navEl = document.querySelector('.navbar');

    function handleNavbarScroll() {
        if (window.scrollY >= 56) {
            navEl.classList.add('navbar-scrolled');
        } else {
            navEl.classList.remove('navbar-scrolled');
        }
    }

    // Run once in case page loads already scrolled
    handleNavbarScroll();

    // Run on scroll
    window.addEventListener('scroll', handleNavbarScroll);
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
        "about": "Despre Noi",
        "tour": "Turul Lumii",
        "staff": "Membrii Ansamblului",
        "repert": "Repertoriu",
        "contact": "Contactează-ne",

        //Staff section 
        "SectionTitle1": "Despre noi",
        "SectionTitle2": "Turul lumii",
        "SectionTitle3": "Membrii Ansamblului",
        "SectionTitle4": "Repertoriu",
        "SectionTitle5": "Alătură-te echipei",
        "elenaDesc": "Lider artistic/coregraf",
        "elenaCitate": "Dragostea pentru dansuri este răspândită de ea cu precauție.",
        "mihaiDesc": "Muzicant artistic",
        "mihaiCitate": "Muzica lui ne inspiră și ne luminează să dansăm.",
        "ninaDesc": "Lider coregraf",
        "ninaCitate": "Ea este cea care ne oferă exemplul de urmat.",



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
        "serv": "Servicii",



        //carousel section 
        "descr1": "Moștenitorii si Moștenirea",
        "descr2": "Noi suntem Moștenitorii, mândre fete și feciori.",
        "descr3": "Ansamblul Moștenitorii la 20 de ani de activitate.",
        "descr4": "Împreuna promovăm Ziua Agricultorului.",
        "descr5": "Urmașii lui Ștefan Cel Mare.",
        "descr6": "Toamna de Aur.",


        //Join section 
        "surname": "Nume",
        "Name": "Prenume",
        "email": "Adresa de e-mail",
        "Pnumb": "Nr.telefon",
        "YrMess": "Mesaj...",
        "chbText": "Accept termenii și condițiile",
        "btnText": "Trimite",




        //Repertory section 
        "coserHang": "Dans tradițional în care se prindeau bărbaţii, care într-adevăr aveau o coordonare a muşchilor, a braţelor, a picioarelor, a capului, foarte bună, foartedezvoltată. Se prindeau bărbaţii care ştiau foarte bine acest dans.",
        "ciuleandra": "Vechi dans popular, cu origini in Muntenia subcarpatica, este considerat un dans dionisiac, in care fiecare dintre participanti este atras incet-incet de frenezia ritmului.",
        "polca": "Dans ce are caracteristic pași înainte și înapoi, Însăși strigăturile acestui dans sună astfel Și-nainte și-napoi, c-așai polca pe la noi, Și la dreapta și la stânga, uite-așa se joacă mândra!.",
        "suita": "De felul său dans calm, cu pași înainte și înapoi, dansat în perechi, la finele căruia tempoul se modifică, așa numita Floricică- joc de doi.",
        "tiganescu": "La timpul său dansurile „Ţigăneasca au fost preluate de la bulgari, ruşi, armeni şi ţigani. Împrumutând elementele şi ritmurile separate din la dansurile altor popoare, moldovenii le interpretează în felul lor cu mult foc temperament şi într-un mod cu totul special. Nici unul dintre popoarele sus-numite nu au dansuri similare.",
        "jocMare": "Joc care reunește într-un cerc mare întreaga adunare. Dansatorii se țin de mână, mergând pe diagonală separându-se în 2 linii, urmat de joc în pereche, apoi plecare în spate,plecând la stânga dansatorii se închină publicului, apoi mișcarea se repetă până la formarea unui semicerc.",
        "horaSarb": "Este un dans țărănesc care reunește într-un cerc mare întreaga adunare. Dansatorii se țin de mână, făcând 3 pași pe diagonală în față, S-D-S, urmați de o bătaie cu dreptul, apoi în spate, trei pași D-S-D,o bătaie cu stângul, totodată învârtind cercul, în principiu invers sensului acelor ceasului.",
        "arcan": "Dansul Arcanul se executa in horă deschisă, pasul spre inainte făcându-se cu piciorul stâng ,mișcat prin spate ,tainic ,cu aceeași pași continua jocul cuprinzând in coregrafia sa mersul șarpelui si simbolul acestuia. Forma sa exprimă sacrificiul, şi o putem interpreta în mai multe feluri. Cele trei linii convergente pot reprezenta o suliţă, o rădăcină sau un om. Suliţa este arma zeului, şi în ipostaza sa de patron al războiului şi victoriei, promitea celor care purtau acest semn izbândă şi protecţie.",

        // About us section
        "H1": "Care este valoarea dansurilor și tradițiilor populare moldovenești?",
        "H2": "De ce este dansul pasiunea autorului?",
        "H3": "Cum a apărut ansamblul Moștenitorii?",
        "H4": "Cum contribuie ansamblul Mostenitorii la conservarea culturii moldovenesti?",

        "P1": "Autorul subliniază importanța dansurilor, cântecelor, legendelor și tradițiilor populare ca comoară națională moștenită de la strămoși. Pentru autor, dansul este o formă de limbaj ascuns care vizualizează ardoarea sufletului și impulsurile spirituale. Moldovenii folosesc dansul pentru a-și exprima sentimentele și pentru a-și păstra identitatea culturală. Autorul consideră că păstrarea și valorificarea folclorului este esențială pentru păstrarea Moldovei ca națiune distinctă.",
        "P2": "Autorul, care este coregraf, vede dansul ca pe o pasiune și dragoste care intră și în îndatoririle lor profesionale. Aceștia îi învață pe copii și adolescenți să se miște în ritm și să învețe pașii dansurilor tradiționale moldovenești. Autoarea găsește o bucurie enormă în a-și vedea elevii dansând profesionist și scălându-se în aplauzele pe care le primesc numai artiștii. Pentru autor, dansul satisface o nevoie spirituală și pofta sufletească, aducând bucurie trupului.",
        "P3": "Ansamblul Mostenitorii a fost infiintat in anul 1994 cu o echipa restransa de doar 16 copii si adolescenti. În trei ani, echipa a crescut la 48 de membri și a devenit câștigătoarea festivalului național pentru copii, Alunelul. Misiunea ansamblului este de a valorifica cultura tradițională, portul național, costumele, tradițiile populare și jocurile caracteristice regiunii pe care o reprezintă. Ansamblul a devenit unul dintre cele mai bune ansambluri pentru copii din Moldova, cu numeroase succese și premii la concursuri și festivaluri naționale și internaționale.",
        "P4": "Ansamblul Mostenitorii a predat peste 400 de copii in doua decenii si are in prezent 140 de copii cu varste intre 6-19 ani impartiti in trei grupe coregrafice. Echipa a prezentat sute de spectacole pe scene importante din Moldova și din străinătate, iar repertoriul lor include dansuri populare tradiționale moldovenești care reflectă tradiții, obiceiuri și obiceiuri celebre. Fiecare membru al ansamblului are un costum național autentic. Prin talentul, dăruirea și perseverența lor, ansamblul Mostenitorii contribuie la păstrarea și valorificarea bogăției culturale moldovenești și a valorilor coregrafice tradiționale.",

        "h1": "Care este valoarea dansurilor și tradițiilor populare moldovenești?",
        "h2": "De ce este dansul pasiunea autorului?",
        "h3": "Cum a apărut ansamblul Moștenitorii?",
        "h4": "Cum contribuie ansamblul Mostenitorii la conservarea culturii moldovenesti?",

        "p1": "Autorul subliniază importanța dansurilor, cântecelor, legendelor și tradițiilor populare ca comoară națională moștenită de la strămoși. Pentru autor, dansul este o formă de limbaj ascuns care vizualizează ardoarea sufletului și impulsurile spirituale. Moldovenii folosesc dansul pentru a-și exprima sentimentele și pentru a-și păstra identitatea culturală. Autorul consideră că păstrarea și valorificarea folclorului este esențială pentru păstrarea Moldovei ca națiune distinctă.",
        "p2": "Autorul, care este coregraf, vede dansul ca pe o pasiune și dragoste care intră și în îndatoririle lor profesionale. Aceștia îi învață pe copii și adolescenți să se miște în ritm și să învețe pașii dansurilor tradiționale moldovenești. Autoarea găsește o bucurie enormă în a-și vedea elevii dansând profesionist și scălându-se în aplauzele pe care le primesc numai artiștii. Pentru autor, dansul satisface o nevoie spirituală și pofta sufletească, aducând bucurie trupului.",
        "p3": "Ansamblul Mostenitorii a fost infiintat in anul 1994 cu o echipa restransa de doar 16 copii si adolescenti. În trei ani, echipa a crescut la 48 de membri și a devenit câștigătoarea festivalului național pentru copii, Alunelul. Misiunea ansamblului este de a valorifica cultura tradițională, portul național, costumele, tradițiile populare și jocurile caracteristice regiunii pe care o reprezintă. Ansamblul a devenit unul dintre cele mai bune ansambluri pentru copii din Moldova, cu numeroase succese și premii la concursuri și festivaluri naționale și internaționale.",
        "p4": "Ansamblul Mostenitorii a predat peste 400 de copii in doua decenii si are in prezent 140 de copii cu varste intre 6-19 ani impartiti in trei grupe coregrafice. Echipa a prezentat sute de spectacole pe scene importante din Moldova și din străinătate, iar repertoriul lor include dansuri populare tradiționale moldovenești care reflectă tradiții, obiceiuri și obiceiuri celebre. Fiecare membru al ansamblului are un costum național autentic. Prin talentul, dăruirea și perseverența lor, ansamblul Mostenitorii contribuie la păstrarea și valorificarea bogăției culturale moldovenești și a valorilor coregrafice tradiționale.",

        //Our Wolrd Tour section
        "Map1": "Festivaluri",
        "Map2": "mondiale",

    },

    ru: {
        // navbar
        "home": "Домой",
        "about": "Про нас",
        "tour": "Мировое турне",
        "staff": "Участники ансамбля",
        "repert": "Репертуар",
        "contact": "Связаться",

        //Staff section 
        "SectionTitle1": "Про нас",
        "SectionTitle2": "Мировое турне",
        "SectionTitle3": "Участники ансамбля",
        "SectionTitle4": "Репертуар",
        "SectionTitle5": "Присоединиться к команде",
        "elenaDesc": "Художественный руководитель/хореограф",
        "elenaCitate": "Любовь к танцам она распространяет с осторожностью.",
        "mihaiDesc": "Артистичный музыкант",
        "mihaiCitate": "Музыка вдохновляет и призывает нас танцевать.",
        "ninaDesc": "Хореограф-лидер",
        "ninaCitate": "Именно она дает нам пример для подражания.",



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
        "serv": "Сервисы",



        //carousel section 
        "descr1": "Наследники и наследство",
        "descr2": "Мы Moștenitorii, гордые дочери и сыновья.",
        "descr3": "Ансамбль «Moștenitorii» за 20 лет деятельности.",
        "descr4": "Вместе мы продвигаем День фермера.",
        "descr5": "Потомки Стефана Великого.",
        "descr6": "Золотая осень.",


        //Join section 
        "surname": "Имя",
        "Name": "Фамилия",
        "email": "Адрес электронной почты",
        "Pnumb": "Телефон",
        "YrMess": "Сообщение...",
        "chbText": "Я принимаю правила и условия",
        "btnText": "Отправить",



        //Repertory section 
        "coserHang": "Традиционный танец, в котором попадались мужчины, у которых действительно была очень хорошая, высокоразвитая координация мышц, рук, ног, головы. Мужчин, хорошо знавших этот танец, поймали.",
        "ciuleandra": "Старинный народный танец, зародившийся в Подкарпатской Мунтении, считается дионисийским танцем, в котором каждого из участников постепенно привлекает безумие ритма.",
        "polca": "Танец, в котором есть характерные шаги вперед и назад, Сами крики этого танца звучат так Взад-вперед, вот как у нас полька, И вправо-влево, смотри, - вот как играет прайд!.",
        "suita": "Это своего рода спокойный танец, с шагами вперед и назад, танцуемый парами, в конце которого меняется темп, так называемая флорика - игра двоих.",
        "tiganescu": "В его время «цыганские» танцы были заимствованы у болгар, русских, армян и цыган. Заимствуя отдельные элементы и ритмы из танцев других народов, молдаване интерпретируют их по-своему, с большим огнем и темпераментом и совершенно по-особому. Подобных танцев нет ни у одного из вышеупомянутых народов.",
        "jocMare": "Танец, который собирает всех собравшихся в большой круг. Танцоры берутся за руки, идя по диагонали, разделяясь на 2 линии, затем играют парами, затем идут спиной вперед, идут влево, танцоры кланяются зрителям, затем движение повторяется до образования полукруга.",
        "horaSarb": "Это крестьянский танец, который собирает все собравшихся в большой круг. Танцоры берутся за руки, делая 3 шага по диагонали вперед, С-Д-С, затем следует такт правой, затем сзади, три шага Р-С-Д, такт левой, одновременно поворачивая круг, в основном против часовой стрелки.",
        "arcan": "Танец Аркана исполнялся в открытом танце, шаг вперед делался левой ногой, отставал назад, тайком, теми же шагами игра продолжалась, включая в ее хореографию походку змеи и ее символ. Его форма выражает жертвенность, и мы можем интерпретировать ее по-разному. Три сходящиеся линии могут обозначать копье, корень или человека. Копье — оружие бога, и в своей роли покровителя войны и победы оно сулило победу и защиту тем, кто носил этот знак.",

        // About us section
        "H1": "В чем ценность молдавских народных танцев и традиций?",
        "H2": "Почему танец является страстью автора?",
        "H3": "Как появился ансамбль «Мостенитории»?",
        "H4": "Как ансамбль Мостенитории способствует сохранению молдавской культуры?",

        "P1": "Автор подчеркивает значение народных танцев, песен, легенд и традиций как национального достояния, унаследованного от предков. Для автора танец – это форма скрытого языка, визуализирующего душевный пыл и душевные порывы. Молдаване используют танец, чтобы выразить свои чувства и сохранить свою культурную самобытность. Автор считает, что сохранение и оценка фольклора необходимы для сохранения Молдовы как отдельной нации.",
        "P2": "Автор, хореограф, рассматривает танец как страсть и любовь, что также входит в их профессиональные обязанности. Они учат детей и подростков двигаться в ритме и разучивают па традиционных молдавских танцев. Автор находит огромную радость в том, что его ученики профессионально танцуют и купаются в аплодисментах, которые достаются только артистам. Для автора танец удовлетворяет духовную потребность и похоть души, принося радость телу.",
        "P3": "Ансамбль «Мостенитории» был основан в 1994 году небольшим коллективом из 16 детей и подростков. За три года коллектив вырос до 48 человек и стал победителем национального детского фестиваля «Алунелул». Миссия ансамбля - возвеличивать традиционную культуру, национальную одежду, костюмы, народные традиции и игры, характерные для региона, который они представляют. Ансамбль стал одним из лучших ансамблей для детей в Молдове, с многочисленными успехами и наградами на национальных и международных конкурсах и фестивалях.",
        "P4": "Ансамбль «Мостенитории» за два десятилетия обучил более 400 детей и в настоящее время насчитывает 140 детей в возрасте от 6 до 19 лет, разделенных на три хореографические группы. Коллектив представил сотни спектаклей на важных сценах Молдовы и за рубежом, а их репертуар включает традиционные молдавские народные танцы, отражающие известные традиции, обычаи и привычки. У каждого участника ансамбля настоящий национальный костюм. Благодаря своему таланту, самоотверженности и настойчивости ансамбль «Мостенитории» вносит свой вклад в сохранение и приумножение молдавского культурного богатства и традиционных хореографических ценностей.",

        "h1": "В чем ценность молдавских народных танцев и традиций?",
        "h2": "Почему танец является страстью автора?",
        "h3": "Как появился ансамбль «Мостенитории»?",
        "h4": "Как ансамбль Мостенитории способствует сохранению молдавской культуры?",

        "p1": "Автор подчеркивает значение народных танцев, песен, легенд и традиций как национального достояния, унаследованного от предков. Для автора танец – это форма скрытого языка, визуализирующего душевный пыл и душевные порывы. Молдаване используют танец, чтобы выразить свои чувства и сохранить свою культурную самобытность. Автор считает, что сохранение и оценка фольклора необходимы для сохранения Молдовы как отдельной нации.",
        "p2": "Автор, хореограф, рассматривает танец как страсть и любовь, что также входит в их профессиональные обязанности. Они учат детей и подростков двигаться в ритме и разучивают па традиционных молдавских танцев. Автор находит огромную радость в том, что его ученики профессионально танцуют и купаются в аплодисментах, которые достаются только артистам. Для автора танец удовлетворяет духовную потребность и похоть души, принося радость телу.",
        "p3": "Ансамбль «Мостенитории» был основан в 1994 году небольшим коллективом из 16 детей и подростков. За три года коллектив вырос до 48 человек и стал победителем национального детского фестиваля «Алунелул». Миссия ансамбля - возвеличивать традиционную культуру, национальную одежду, костюмы, народные традиции и игры, характерные для региона, который они представляют. Ансамбль стал одним из лучших ансамблей для детей в Молдове, с многочисленными успехами и наградами на национальных и международных конкурсах и фестивалях.",
        "p4": "Ансамбль «Мостенитории» за два десятилетия обучил более 400 детей и в настоящее время насчитывает 140 детей в возрасте от 6 до 19 лет, разделенных на три хореографические группы. Коллектив представил сотни спектаклей на важных сценах Молдовы и за рубежом, а их репертуар включает традиционные молдавские народные танцы, отражающие известные традиции, обычаи и привычки. У каждого участника ансамбля настоящий национальный костюм. Благодаря своему таланту, самоотверженности и настойчивости ансамбль «Мостенитории» вносит свой вклад в сохранение и приумножение молдавского культурного богатства и традиционных хореографических ценностей.",

        //Our Wolrd Tour section
        "Map1": "Глобальные",
        "Map2": "фестивали",



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
        // Staff section
        SectionTitle1.textContent = language.ro.SectionTitle1;
        SectionTitle2.textContent = language.ro.SectionTitle2;
        SectionTitle3.textContent = language.ro.SectionTitle3;
        SectionTitle4.textContent = language.ro.SectionTitle4;
        SectionTitle5.textContent = language.ro.SectionTitle5;
        elenaDesc.textContent = language.ro.elenaDesc;
        elenaCitate.textContent = language.ro.elenaCitate;
        mihaiDesc.textContent = language.ro.mihaiDesc;
        mihaiCitate.textContent = language.ro.mihaiCitate;
        ninaDesc.textContent = language.ro.ninaDesc;
        ninaCitate.textContent = language.ro.ninaCitate;
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
        // carousel section
        descr1.textContent = language.ro.descr1;
        descr2.textContent = language.ro.descr2;
        descr3.textContent = language.ro.descr3;
        descr4.textContent = language.ro.descr4;
        descr5.textContent = language.ro.descr5;
        descr6.textContent = language.ro.descr6;
        // join section
        surname.placeholder = language.ro.surname;
        Name.placeholder = language.ro.Name;
        email.placeholder = language.ro.email;
        Pnumb.placeholder = language.ro.Pnumb;
        YrMess.placeholder = language.ro.YrMess;
        chbText.textContent = language.ro.chbText;
        formTitle.textContent = language.ro.formTitle;
        formDesc.textContent = language.ro.formDesc;
        btnText.textContent = language.ro.btnText;
        // Repertory section
        coserHang.textContent = language.ro.coserHang;
        ciuleandra.textContent = language.ro.ciuleandra;
        polca.textContent = language.ro.polca;
        suita.textContent = language.ro.suita;
        tiganescu.textContent = language.ro.tiganescu;
        jocMare.textContent = language.ro.jocMare;
        horaSarb.textContent = language.ro.horaSarb;
        arcan.textContent = language.ro.arcan;
        //About us section
        H1.textContent = language.ro.H1;
        H2.textContent = language.ro.H2;
        H3.textContent = language.ro.H3;
        H4.textContent = language.ro.H4;
        P1.textContent = language.ro.P1;
        P2.textContent = language.ro.P2;
        P3.textContent = language.ro.P3;
        P4.textContent = language.ro.P4;

        h1.textContent = language.ro.h1;
        h2.textContent = language.ro.h2;
        h3.textContent = language.ro.h3;
        h4.textContent = language.ro.h4;
        p1.textContent = language.ro.p1;
        p2.textContent = language.ro.p2;
        p3.textContent = language.ro.p3;
        p4.textContent = language.ro.p4;
        //Our World Tour secion
        Map1.textContent = language.ro.Map1;
        Map2.textContent = language.ro.Map2;

    } else if (window.location.hash === "#ru") {

        langshow.textContent = "РУ";

        // navbar
        home.textContent = language.ru.home;
        about.textContent = language.ru.about;
        tour.textContent = language.ru.tour;
        staff.textContent = language.ru.staff;
        repert.textContent = language.ru.repert;
        contact.textContent = language.ru.contact;
        // Staff section
        SectionTitle1.textContent = language.ru.SectionTitle1;
        SectionTitle2.textContent = language.ru.SectionTitle2;
        SectionTitle3.textContent = language.ru.SectionTitle3;
        SectionTitle4.textContent = language.ru.SectionTitle4;
        SectionTitle5.textContent = language.ru.SectionTitle5;
        elenaDesc.textContent = language.ru.elenaDesc;
        elenaCitate.textContent = language.ru.elenaCitate;
        mihaiDesc.textContent = language.ru.mihaiDesc;
        mihaiCitate.textContent = language.ru.mihaiCitate;
        ninaDesc.textContent = language.ru.ninaDesc;
        ninaCitate.textContent = language.ru.ninaCitate;
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
        // carousel section
        descr1.textContent = language.ru.descr1;
        descr2.textContent = language.ru.descr2;
        descr3.textContent = language.ru.descr3;
        descr4.textContent = language.ru.descr4;
        descr5.textContent = language.ru.descr5;
        descr6.textContent = language.ru.descr6;
        // join section
        surname.placeholder = language.ru.surname;
        Name.placeholder = language.ru.Name;
        email.placeholder = language.ru.email;
        Pnumb.placeholder = language.ru.Pnumb;
        YrMess.placeholder = language.ru.YrMess;
        chbText.textContent = language.ru.chbText;
        formTitle.textContent = language.ru.formTitle;
        formDesc.textContent = language.ru.formDesc;
        btnText.textContent = language.ru.btnText;
        // Repertory section
        coserHang.textContent = language.ru.coserHang;
        ciuleandra.textContent = language.ru.ciuleandra;
        polca.textContent = language.ru.polca;
        suita.textContent = language.ru.suita;
        tiganescu.textContent = language.ru.tiganescu;
        jocMare.textContent = language.ru.jocMare;
        horaSarb.textContent = language.ru.horaSarb;
        arcan.textContent = language.ru.arcan;
        //About us section
        H1.textContent = language.ru.H1;
        H2.textContent = language.ru.H2;
        H3.textContent = language.ru.H3;
        H4.textContent = language.ru.H4;
        P1.textContent = language.ru.P1;
        P2.textContent = language.ru.P2;
        P3.textContent = language.ru.P3;
        P4.textContent = language.ru.P4;
                // 
        h1.textContent = language.ru.h1;
        h2.textContent = language.ru.h2;
        h3.textContent = language.ru.h3;
        h4.textContent = language.ru.h4;
        p1.textContent = language.ru.p1;
        p2.textContent = language.ru.p2;
        p3.textContent = language.ru.p3;
        p4.textContent = language.ru.p4; 
        //Our World Tour secion
        Map1.textContent = language.ru.Map1;
        Map2.textContent = language.ru.Map2;

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

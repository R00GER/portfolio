let elements = {
    parentElements: {
        nav: document.querySelector(".navbar")
    },

    clickableElements: {
        nav_home: document.querySelector("#nav_home"),
        nav_projects: document.querySelector("#nav_projects"),
        nav_studies: document.querySelector("#nav_studies"),
        nav_work: document.querySelector("#nav_work"),
        nav_contact: document.querySelector("#nav_contact"),
        pager_home: document.querySelector("#pager_home"),
        pager_projects: document.querySelector("#pager_projects"),
        pager_studies: document.querySelector("#pager_studies"),
        pager_work: document.querySelector("#pager_work"),
        pager_contact: document.querySelector("#pager_contact"),
        arrow_projects: document.querySelector("#arrow-1"),
        arrow_studies: document.querySelector("#arrow-2"),
        arrow_work: document.querySelector("#arrow-3"),
        arrow_contact: document.querySelector("#arrow-4"),
        arrow_backToHome: document.querySelector("#arrow-5")
    },

    pages: {
        home: document.querySelector("#page_home"),
        projects: document.querySelector("#page_projects"),
        studies: document.querySelector("#page_studies"),
        work: document.querySelector("#page_work"),
        contact: document.querySelector("#page_contact"),
        pager_home: document.querySelector("#page_home"),
        pager_projects: document.querySelector("#page_projects"),
        pager_studies: document.querySelector("#page_studies"),
        pager_work: document.querySelector("#page_work"),
        pager_contact: document.querySelector("#page_contact"),
        arrow_projects: document.querySelector("#page_projects"),
        arrow_studies: document.querySelector("#page_studies"),
        arrow_work: document.querySelector("#page_work"),
        arrow_contact: document.querySelector("#page_contact"),
        arrow_backToHome: document.querySelector("#page_home"),
    },

    getActiveElements: function() {

        let activeNavElement = elements.clickableElements.nav_home;
        let activePagerElement = elements.clickableElements.pager_home;

        const homePos = elements.pages.home.offsetTop + (window.innerHeight * 0.6);
        const studiesPos = elements.pages.studies.offsetTop + (window.innerHeight * 0.6);
        const workPos = elements.pages.work.offsetTop + (window.innerHeight * 0.6);
        const contactPos = elements.pages.contact.offsetTop + (window.innerHeight * 0.6);
        const projectsPos = elements.pages.projects.offsetTop + (window.innerHeight * 0.95);

        // const projectsPos = elements.pages.projects.offsetTop + (window.innerHeight * 1.5);

        if (window.pageYOffset < homePos) {
            activePage = elements.pages.home;
            activeNavElement.classList.add("active-nav-link");
            activePagerElement.classList.add("active-pager");
            elements.clickableElements.nav_projects.classList.remove("active-nav-link");
            elements.clickableElements.pager_projects.classList.remove("active-pager");

        } else if (window.pageYOffset < projectsPos) {
            // LET PREVACTIVEELEMENTS = GETELEMENTBYCLASSNAME("ACTIVE-NAV-LINK, ACTIVE-PAGER")
            // NEW ACTIVE ELEMENTS
            // PASS PREV AND NEW ELEMENTS TO FUNCTION
            // FUNCTION TO REMOVE AND ADD ACTIVE CLASSES

            // activeNavElement.classList.remove("active-nav-link");
            // activePagerElement.classList.remove("active-pager");
            elements.clickableElements.nav_home.classList.remove("active-nav-link");
            elements.clickableElements.pager_home.classList.remove("active-pager");
            activePage = elements.pages.projects;
            activeNavElement = elements.clickableElements.nav_projects;
            activePagerElement = elements.clickableElements.pager_projects;
            activeNavElement.classList.add("active-nav-link");
            activePagerElement.classList.add("active-pager");
            elements.clickableElements.nav_studies.classList.remove("active-nav-link");
            elements.clickableElements.pager_studies.classList.remove("active-pager");

        } else if (window.pageYOffset < studiesPos) {
            elements.clickableElements.nav_projects.classList.remove("active-nav-link");
            elements.clickableElements.pager_projects.classList.remove("active-pager");
            activePage = elements.pages.studies;
            activeNavElement = elements.clickableElements.nav_studies;
            activePagerElement = elements.clickableElements.pager_studies;
            activeNavElement.classList.add("active-nav-link");
            activePagerElement.classList.add("active-pager");
            elements.clickableElements.nav_work.classList.remove("active-nav-link");
            elements.clickableElements.pager_work.classList.remove("active-pager");

        } else if (window.pageYOffset < workPos) {
            elements.clickableElements.nav_studies.classList.remove("active-nav-link");
            elements.clickableElements.pager_studies.classList.remove("active-pager");
            activePage = elements.pages.work;
            activeNavElement = elements.clickableElements.nav_work;
            activePagerElement = elements.clickableElements.pager_work;
            activeNavElement.classList.add("active-nav-link");
            activePagerElement.classList.add("active-pager");
            elements.clickableElements.nav_contact.classList.remove("active-nav-link");
            elements.clickableElements.pager_contact.classList.remove("active-pager");

        } else if (window.pageYOffset < contactPos) {
            elements.clickableElements.nav_work.classList.remove("active-nav-link");
            elements.clickableElements.pager_work.classList.remove("active-pager");
            activePage = elements.pages.contact;
            activeNavElement = elements.clickableElements.nav_contact;
            activePagerElement = elements.clickableElements.pager_contact;
            activeNavElement.classList.add("active-nav-link");
            activePagerElement.classList.add("active-pager");
        }
    }
}

document.addEventListener("click", scrollToElement);

function scrollToElement() {
    let element = event.target;
    console.log(element.tagName);

    if (element.tagName === "A" || element.tagName === "I") {
        const clickableElementsArr = Object.values(elements.clickableElements);
        const pagesArr = Object.values(elements.pages);
        let clickedElementIndex = clickableElementsArr.indexOf(element);
        element = pagesArr[clickedElementIndex];

        element.scrollIntoView({
            behavior: "smooth"
        });

    } else {
        return;
    }
}

function navColor() {
    let nav = elements.parentElements.nav;
    let offset = 0.92;
    let home = elements.pages.home.offsetHeight * offset;

    if (window.pageYOffset >= home) {
        nav.style.backgroundColor = "rgba(48, 46, 46, 0.7)";
    } else {
        nav.style.backgroundColor = "";
    }
}

let tempPosition = window.pageYOffset;

function hideNav() {
    position = window.pageYOffset;
    if (tempPosition > position) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-5vh";
    }
    tempPosition = position;
}

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    elements.getActiveElements();
    navColor();
    hideNav();
}
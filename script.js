window.addEventListener("load", function() {
    function showMobileMenu() {
        var nav = document.getElementById("mobile-nav-wrapper");
        nav.style.visibility = "visible";
        document
            .querySelector("#mobile-menu-button")
            .classList.add("is-active");
    }

    function hideMobileMenu() {
        var nav = document.getElementById("mobile-nav-wrapper");
        nav.style.visibility = "hidden";
        document
            .querySelector("#mobile-menu-button")
            .classList.remove("is-active");
    }

    function toggleMobileMenu() {
        var nav = document.getElementById("mobile-nav-wrapper");
        if (nav.style.visibility === "visible") {
            hideMobileMenu();
        } else {
            showMobileMenu();
        }
    }

    const workExperience = [
        {
            companyName: "Red Door Interactive",
            companyURL: "https://www.reddoor.biz/",
            title: "Technical Project Manager",
            dateRange: "February 2017 - November 2019",
            jobDetails: [
                "Managed planning, execution, team meetings, and client communications for multiple and concurrent cross-functional projects",
                "Developed detailed project plans for both Agile and Waterfall projects, coordinated project activities, and identified resourcesneeded to complete project tasks",
                "Oversaw the design, development, and launch of an e-commerce website for a skincare company"
            ]
        },
        {
            companyName: "RR Donnelley",
            companyURL: "https://www.rrd.com/",
            title: "Technical Project Manager",
            dateRange: "July 2012 - February 2017",
            jobDetails: [
                "Managed efforts on projects in a deadline driven environment that marries digital technology and physical production",
                "Consulted with clients to identify key requirements, define project scope, and develop project plans",
                "Acted as resolution point for change requests and clients concerns, and worked closely with department team leads to prioritizeissues and coordinate troubleshooting efforts"
            ]
        },
        {
            companyName: "Excedeo",
            companyURL: "https://www.rrd.com/",
            title: "Technical Project Manager",
            dateRange: "July 2012 - February 2017",
            jobDetails: [
                "Managed efforts on projects in a deadline driven environment that marries digital technology and physical production",
                "Consulted with clients to identify key requirements, define project scope, and develop project plans",
                "Acted as resolution point for change requests and clients concerns, and worked closely with department team leads to prioritizeissues and coordinate troubleshooting efforts"
            ]
        }
    ];

    const initExperienceSection = () => {
        for (let i = 0; i < workExperience.length; i++) {
            document.querySelector(
                "#jobList"
            ).innerHTML += `<li data-index=${i}>
                <div class="job-button">${workExperience[i].companyName}</div>
            </li>`;
        }

        document
            .querySelectorAll("#jobList > li div")[0]
            .classList.add("job-button-selected");

        document.querySelector(
            ".jobTitle"
        ).innerHTML = `${workExperience[0].title} <span class="at-symbol">@</span> <a href="${workExperience[0].companyURL}" target="_blank">${workExperience[0].companyName}</a>`;

        document.querySelector(".jobDateRange").textContent =
            workExperience[0].dateRange;

        workExperience[0].jobDetails.forEach(bullet => {
            document.querySelector(
                "#job-bulletpoints ul"
            ).innerHTML += `<li>${bullet}</li>`;
        });
    };

    function renderExperienceSection(event) {
        if (event.target.matches(".job-button-selected")) {
            return;
        } else {
            console.log(event);
            document.querySelector("#job-bulletpoints ul").innerHTML = "";

            let index =
                event.target.parentElement.attributes["data-index"].value;

            document.querySelector(
                ".jobTitle"
            ).innerHTML = `${workExperience[index].title} <span class="at-symbol">@</span> <a href="${workExperience[index].companyURL}" target="_blank">${workExperience[index].companyName}</a>`;

            document.querySelector(".jobDateRange").textContent =
                workExperience[index].dateRange;

            workExperience[index].jobDetails.forEach(bullet => {
                document.querySelector(
                    "#job-bulletpoints ul"
                ).innerHTML += `<li>${bullet}</li>`;
            });

            // document.querySelectorAll(".job-button").classList.remove("job-button-selected");

            document
                .querySelectorAll("#jobList li div")
                .forEach(el => el.classList.remove("job-button-selected"));
            event.target.classList.add("job-button-selected");
        }
    }

    document.addEventListener(
        "click",
        function(event) {
            if (event.target.matches(".job-button")) {
                renderExperienceSection(event);
            }
        },
        false
    );

    initExperienceSection();

    document
        .querySelector("#mobile-menu-button")
        .addEventListener("click", toggleMobileMenu);

    let mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    mobileNavLinks.forEach(el => el.addEventListener("click", hideMobileMenu));
});

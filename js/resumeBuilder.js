var bio = {
    "name": "Daisy Nova",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555 384 5504",
        "email": "myEmail@googlemail.com",
        "github": "myGit",
        "twitter": "@myTwitter",
        "location": "Portsmouth, UK"
    },
    "welcomingMsg": "Quasi necessitatibus, ducimus, deserunt ipsa.",
    "skills": [
        "awesomeness",
        "patience",
        "creating things",
        "cryogenic sleep",
        "saving the universe"
    ],
    "biopic": "images/me.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPicture);
        $(".biopic").attr("alt", "My picture");
        var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomingMsg);
        $("#header").append(formattedMsg);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formattedSkill);
        }
    }
}


var work = {
    "jobs": [
        {
            "employer": "Cosham ltd",
            "title": "assistant",
            "location": "Portsmouth, Hampshire, UK",
            "dates": "2014-2015",
            "description": "Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa.",
            "url": "http://www.portsmouth.co.uk/"
        },
        {
            "employer": "Kesh ltd",
            "title": "assistant",
            "location": "Boston, Lincolnshire, UK",
            "dates": "2012-2014",
            "description": "Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa.",
            "url": "http://www.bostontown.co.uk/"
        },
        {
            "employer": "PA Projects ltd",
            "title": "assistant",
            "location": "Bedford, Bedfordshire, UK",
            "dates": "2009-2012",
            "description": "Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa.",
            "url": "http://www.thebedford.co.uk/"
        }
    ],
    "display": function() {
        for (job in work.jobs) {
        //create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer).replace("#",work.jobs[job].url);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
            //concat employer and title
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%",
            work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%",
            work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%",
            work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);


        }
    }
}


var education = {
    "schools": [
        {
            "name": "University of Ruse",
            "location": "Ruse, BG",
            "degree": "BS",
            "majors": ["Electrical engineering"],
            "dates": 1981,
            "url": "http://www.uni-ruse.bg/en"
        },
        {
            "name": "RMG Akad. N. Obreshkov",
            "location": "Razgrad, BG",
            "degree": "Secondary school",
            "majors": ["Mathematics and nature sciences"],
            "dates": 1976,
            "url": "http://schools.guide-bulgaria.com/a/3306/akad.nikola_obreshkov_high_school.htm"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud775"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud304"
        }
    ],
   "display": function() {
        $("#education").append(HTMLschoolStart);

        for (school in education.schools) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            //concat school name and degree
            var formattedNameDegree = formattedSchoolName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
            var formattedName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            //concat course title and school name
            var formattedTitleName = formattedTitle + formattedName;
            $(".education-entry:last").append(formattedTitleName);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            $(".education-entry:last").append(formattedDate);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedUrl);
            // Operate on last element in last .project-entry
            $(".education-entry:last").children().last().attr('href', education.onlineCourses[course].url);

        }
    }
}


var projects = {
    "projects": [
        {
            "title": "HTML Website",
            "dates": "Jan 2015",
            "description": "Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates.",
            "images": [
                "images/project1.png"
            ],
            "url": "https://github.com/mira5619/project1"
        },
        {
            "title": "HTML Website",
            "dates": "Dec 2013",
            "description": "Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates.",
            "images": [
                "images/capture2.png"
            ],
            "url": "http://thefrog.me/"
        }

    ],
    "display": function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }

}

bio.display();
projects.display();
education.display();
work.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
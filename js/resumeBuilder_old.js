 $("#header").append();
 var bio={
 	name: "Jane Doe",
    role: "Baker",
    contacts: {
		mobile: "650-000-000",
		email:"jane@gmail.com",
		twitter: "@jane",
		github: "janedoe",
		location:"SFO"
	},
	biopic:"images/fry.jpg",
	welcomeMessage: "Welcome to my page!",
	skills: ["Buttercream","Fondant","Buttercream Transfer"]
};
bio.display=function()
{
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedSkills;
	$("#header").prepend(formattedMsg);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile,formattedEmail,formattedTwitter,
		formattedGithub,formattedLocation);
	$("#header").append(formattedPic);
	if(bio.skills.length===0)
	{
	  $("#header").append(HTMLskillsStart);
	}
	else
	{
		$("#header").append(HTMLskillsStart);
		for(var i=0;i<bio.skills.length;i++)
		{
			formattedSkills= HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkills);
		}
	}
};
bio.display();

var projects = {
projects:
[
	{
		title:"Birthday Cakes",
		dates:"2010",
		description:"Dopodichè, se vi rimangono alcuni passi poco chiari, posso spiegarveli: fatemi segno.",
		images:["images/IMG_0553.jpg","images/IMG_0553.jpg"]
	},
	{
		title:"Wedding Cakes",
		dates:"2011",
		description:"Ma come avrete notato non lo era la pagina dalla quale provenite",
		images:["images/IMG_0553.jpg","images/IMG_0553.jpg"]
	},
	{
	    title:"Townhall Events",
		dates:"2012",
		description:"Se avesse bisogno di aiuto in italiano, posso aiutarvi in una certa misura",
		images:["images/IMG_0553.jpg","images/IMG_0553.jpg"]
	}
]
};
projects.display=function()
{
	for(var i=0;i<projects.projects.length;i++)
	{
		$("#projects").append(HTMLprojectStart);
		var projectTitle=HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		var projectDesc= HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		var projectDates= HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDesc);
		for(var j=0;j<projects.projects[i].images.length;j++)
		{
			var projectImg= HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
			$(".project-entry:last").append(projectImg);
		}
	}
};
projects.display();

var work={
jobs: [
{
	title:"Baker",
	employer:"Kroger",
	dates:"2009-2012",
	location:"Columbus, OH",
	description:"Viste le mie difficoltà con la lingua italiana,le pagine tradotte non saranno molte, ma se posso, cercherò di tradurre almeno la pagina principale , le grandi pagine di orientamento, i principali indici e certe pagine 	 che potrebbero essere particolarmente interessanti per gli italiani."

},
{
	title:"Baker",
	employer:"Safeway",
	dates:"2005-2007",
	location:"Phoenix, AZ",
	description:"Viste le mie difficoltà con la lingua italiana, le pagine tradotte non saranno molte, ma se posso, cercherò di tradurre almeno la pagina principale , le grandi pagine di orientamento, i principali indici e certe pagine che potrebbero essere particolarmente interessanti per gli italiani."
}
]
};
work.display=function()
{
	for(var i=0;i<work.jobs.length;i++)
	{
		$("#workExperience").append(HTMLworkStart);
		var workEmployer=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var workTitle=HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var formattedEmployerTitle = workEmployer+workTitle;
		var workDescription= HTMLworkDescription.replace("%data%",work.jobs[i].description);
		var workDates= HTMLworkDates.replace("%data%",work.jobs[i].dates);
		var workLocation= HTMLworkLocation.replace("%data%",work.jobs[i].location);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(workDates);
		$(".work-entry:last").append(workDescription);
		$(".work-entry:last").append(workLocation);
	}
};
work.display();

var education={
schools:[
{
	name:"The Art Institute of California",
    location:"San Franciso, CA",
    dates:"2007-2009",
    degree:"Masters",
    majors:["Baking","major2"]
   
},
{
	name:"University of Texas",
    location:"Dallas, TX",
    dates:"2001-2005",
    degree:"Bachelors",
    majors:["Baking","major2"]
    
}
],
onlineCourses:[
{
	title: "Nutrition",
	school:"Vanderbilt University",
	dates:"Oct 2012-Feb 2013",
	url:"www.coursera.edu"
},
{
	title: "Behavioral Economics",
	school:"Duke University",
	dates:"Jan 2014-May 2014",
	url:"www.coursera.edu"
}
]
};
education.display=function()
{
	var schoolMajor;
	for(var i=0;i<education.schools.length;i++)
	{
		$("#education").append(HTMLschoolStart);
		var schoolDegree= HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		var schoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedSchoolName=schoolName+schoolDegree;
		var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
	    var schoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
	    $(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(schoolLocation);
		for(var j=0;j<education.schools[i].majors.length;j++)
		{
			schoolMajor= HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
			$(".education-entry:last").append(schoolMajor);
		}
	}
	$("#education").append(HTMLonlineClasses);
	for(var i=0;i<education.onlineCourses.length;i++)
	{
		$("#education").append(HTMLschoolStart);
		var onlineTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		var formattedCourseName=onlineTitle+onlineSchool;
		var courseURL= HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
	    var courseDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
	    $(".education-entry:last").append(formattedCourseName);
	    $(".education-entry:last").append(courseDates);
		$(".education-entry:last").append(courseURL);
	}
};
education.display();
	
function inName(name)
{
	var myArray=name.split(" ");
	var finalName=myArray[0].charAt(0).toUpperCase()+myArray[0].slice(1).toLowerCase()+" "+myArray[1].toUpperCase();
	return (finalName);
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

		










let crewName = [];
let destinationName = [];
let technologyName = [];

let crewRole = [];
let destinationDescription = [];
let technologyDescription = [];

let crewBio = [];
let crewImage = [];
let technologyImages = [];
let technologyImagesMobile = [];
let destinationImage = [];
let destinationDistance = [];
let destinationTravel = [];

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.crew.forEach((element) => {
      crewName.push(element.name);
      crewImage.push(element.images.webp);
      crewRole.push(element.role);
      crewBio.push(element.bio);
    });

    data.destinations.forEach((element) => {
      destinationName.push(element.name);
      destinationDescription.push(element.description);
      destinationImage.push(element.images.webp);
      destinationDistance.push(element.distance);
      destinationTravel.push(element.travel);
    });

    data.technology.forEach((element) => {
      technologyName.push(element.name);
      technologyDescription.push(element.description);
      technologyImages.push(element.images.portrait);
      technologyImagesMobile.push(element.images.landscape);
    });
  })
  .then(() => {
    let nav = document.querySelectorAll(".navDes");
    let imgDes = document.querySelector(".destinationImage");
    let title = document.querySelector(".title");
    let description = document.querySelector(".description");
    let distance = document.querySelector(".distance");
    let timeTravel = document.querySelector(".timeTravel");

    for (i = 0; i <= nav.length - 1; i++) {
      nav[i].innerHTML = destinationName[i];
      distance.innerHTML = destinationDistance[0];
      timeTravel.innerHTML = destinationTravel[0];
      imgDes.innerHTML = `<img src='${destinationImage[0]}'>`;

      title.innerHTML = nav[0].innerHTML;
      description.innerHTML = destinationDescription[0];
    }

    nav.forEach((e) => {
      e.addEventListener("click", () => {
        nav.forEach((e) => {
          e.classList.remove("active-nav");
        });
        e.classList.add("active-nav");

        if (e.innerHTML === "Moon") {
          distance.innerHTML = destinationDistance[0];
          title.innerHTML = destinationName[0];
          description.innerHTML = destinationDescription[0];
          timeTravel.innerHTML = destinationTravel[0];
          imgDes.innerHTML = `<img src='${destinationImage[0]}'>`;
        } else if (e.innerHTML === "Mars") {
          distance.innerHTML = destinationDistance[1];
          title.innerHTML = destinationName[1];
          description.innerHTML = destinationDescription[1];
          timeTravel.innerHTML = destinationTravel[1];
          imgDes.innerHTML = `<img src='${destinationImage[1]}'>`;
        } else if (e.innerHTML === "Europa") {
          distance.innerHTML = destinationDistance[2];
          title.innerHTML = destinationName[2];
          description.innerHTML = destinationDescription[2];
          timeTravel.innerHTML = destinationTravel[2];
          imgDes.innerHTML = `<img src='${destinationImage[2]}'>`;
        } else {
          distance.innerHTML = destinationDistance[3];
          title.innerHTML = destinationName[3];
          description.innerHTML = destinationDescription[3];
          timeTravel.innerHTML = destinationTravel[3];
          imgDes.innerHTML = `<img src='${destinationImage[3]}'>`;
        }
      });
    });

    let crew_name = document.querySelector(".crew-name");
    let crew_role = document.querySelector(".role");
    let crew_image = document.querySelector(".crew-image");
    let crew_bio = document.querySelector(".crew-bio");

    let crewNav = document.querySelectorAll(".crew-nav");

    for (i = 0; i <= crewNav.length - 1; i++) {
      crew_name.innerHTML = crewName[0];
      crew_bio.innerHTML = crewBio[0];
      crew_image.innerHTML = `<img src="${crewImage[0]}">`;
      crew_role.innerHTML = crewRole[0];
    }

    crewNav.forEach((e) => {
      e.addEventListener("click", () => {
        crewNav.forEach((c) => {
          c.classList.remove("active-crew");
        });
        if (e.classList.contains("active-crew")) {
          return;
        } else {
          e.classList.add("active-crew");
        }

        if (e === crewNav[0]) {
          crew_name.innerHTML = crewName[0];
          crew_bio.innerHTML = crewBio[0];
          crew_image.innerHTML = `<img src="${crewImage[0]}">`;
          crew_role.innerHTML = crewRole[0];
        } else if (e === crewNav[1]) {
          crew_name.innerHTML = crewName[1];
          crew_bio.innerHTML = crewBio[1];
          crew_image.innerHTML = `<img src="${crewImage[1]}">`;
          crew_role.innerHTML = crewRole[1];
        } else if (e === crewNav[2]) {
          crew_name.innerHTML = crewName[2];
          crew_bio.innerHTML = crewBio[2];
          crew_image.innerHTML = `<img src="${crewImage[2]}">`;
          crew_role.innerHTML = crewRole[2];
        } else {
          crew_name.innerHTML = crewName[3];
          crew_bio.innerHTML = crewBio[3];
          crew_image.innerHTML = `<img src="${crewImage[3]}">`;
          crew_role.innerHTML = crewRole[3];
        }
      });
    });

    let tech_name = document.querySelector(".tech-name");
    let tech_description = document.querySelector(".tech-description");
    let tech_image_desktop = document.querySelector(".desktop");
    let tech_image_mobile = document.querySelector(".mobile");
    let navBtn = document.querySelectorAll(".nav-num");

    for (i = 0; i <= navBtn.length - 1; i++) {
      tech_name.innerHTML = technologyName[0];
      tech_description.innerHTML = technologyDescription[0];
      tech_image_desktop.innerHTML = `<img src="${technologyImages[0]}">`;
      tech_image_mobile.innerHTML = `<img src="${technologyImagesMobile[0]}">`;
    }

    navBtn.forEach((e) => {
      e.addEventListener("click", () => {
        navBtn.forEach((b) => {
          b.classList.remove("active-tech");
        });
        if (e.classList.contains("active-tech")) {
          return;
        } else {
          e.classList.add("active-tech");
        }

        if (e.innerHTML === "1") {
          tech_name.innerHTML = technologyName[0];
          tech_description.innerHTML = technologyDescription[0];
          tech_image_desktop.innerHTML = `<img src="${technologyImages[0]}">`;
          tech_image_mobile.innerHTML = `<img src="${technologyImagesMobile[0]}">`;
        } else if (e.innerHTML === "2") {
          tech_name.innerHTML = technologyName[1];
          tech_description.innerHTML = technologyDescription[1];
          tech_image_desktop.innerHTML = `<img src="${technologyImages[1]}">`;
          tech_image_mobile.innerHTML = `<img src="${technologyImagesMobile[1]}">`;
        } else {
          tech_name.innerHTML = technologyName[2];
          tech_description.innerHTML = technologyDescription[2];
          tech_image_desktop.innerHTML = `<img src="${technologyImages[2]}">`;
          tech_image_mobile.innerHTML = `<img src="${technologyImagesMobile[2]}">`;
        }
      });
    });
  });

let menuBtn = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  const visibility = menuBtn.getAttribute("data-visibility");
  if (visibility == "false") {
    mobileMenu.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("data-visibility", "true");
    console.log(visibility);
  } else {
    mobileMenu.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("data-visibility", "false");
  }
});

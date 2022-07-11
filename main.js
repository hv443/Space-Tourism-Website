let crewName = [];
let destinationName = [];
let technologyName = [];

let crewRole = [];
let destinationDescription = [];
let technologyDescription = [];

let crewBio = [];
let technologyImages = [];
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
      crewRole.push(element.role);
      crewBio.push(element.bio);
    });

    data.destinations.forEach((element) => {
      destinationName.push(element.name);
      destinationDescription.push(element.description);
      destinationImage.push(element.images.png);
      destinationDistance.push(element.distance);
      destinationTravel.push(element.travel);
      console.log(element);
    });

    data.technology.forEach((element) => {
      technologyName.push(element.name);
      technologyDescription.push(element.description);
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
      distance.innerHTML = destinationDistance[i];
      timeTravel.innerHTML = destinationTravel[i];
      imgDes.innerHTML = `<img src='${destinationImage[i]}'>`;

      title.innerHTML = nav[i].innerHTML;
      description.innerHTML = destinationDescription[i];
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

          console.log(destinationDistance);
        } else if (e.innerHTML === "Mars") {
          distance.innerHTML = destinationDistance[1];
          title.innerHTML = destinationName[1];
          description.innerHTML = destinationDescription[1];
          timeTravel.innerHTML = destinationTravel[1];
          imgDes.innerHTML = `<img src='${destinationImage[1]}'>`;

          console.log(destinationDistance);
        } else if (e.innerHTML === "Europa") {
          distance.innerHTML = destinationDistance[2];
          title.innerHTML = destinationName[2];
          description.innerHTML = destinationDescription[2];
          timeTravel.innerHTML = destinationTravel[2];
          imgDes.innerHTML = `<img src='${destinationImage[2]}'>`;

          console.log(destinationDistance);
        } else {
          distance.innerHTML = destinationDistance[3];
          title.innerHTML = destinationName[3];
          description.innerHTML = destinationDescription[3];
          timeTravel.innerHTML = destinationTravel[3];
          imgDes.innerHTML = `<img src='${destinationImage[3]}'>`;
        }
      });
    });
  });

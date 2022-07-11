let crewName = [];
let destinationName = [];
let technologyName = [];

let crewRole = [];
let destinationDescription = [];
let technologyDescription = [];

let crewBio = [];
let technologyImages = [];

fetch("./starter-code/data.json")
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
    });

    data.technology.forEach((element) => {
      technologyName.push(element.name);
      technologyDescription.push(element.description);

      console.log(element.images);
    });
  });

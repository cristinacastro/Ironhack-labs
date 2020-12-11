// ASYNC - AWAIT

// Iteración 1

const astroUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

async function getProfiles() {
  const getAstro = await fetch(astroUrl);
  //aqui no podem accedir perquè és la promesa fins al moment
  //console.log(getAstro);
  const getAstroJson = await getAstro.json();
  //console.log(getAstroJson);
  
  let wiki = []; // aquí cridarem pel nom (aconseguit previament i mitjançant el nom guardarem tota la informació de la wiki)
  for ( let i= 0 ; i< getAstroJson.people.length; i++){
  const person = await fetch(wikiUrl + getAstroJson.people[i].name)
  const getWikiJson = await person.json();
 
  wiki[i] = getWikiJson
  }
  return wiki
  console.log(getWikiJson);
  
  
};
getProfiles();



// Iteración 2

function generateHTML() {
  let bodyTag = document.getElementById('people')
  let section = document.createElement('section')
  section.setAttribute('div', 'id')
  section.innerHTML = 
  `<section>
      <span> <nombre-del-craft> </span>
      <h2> <nombre-de-la-persona> </h2>
      <img src= <source-de-la-imagen> />
      <p> <descripción> </p>
      <p> <extract> /p>
  </section>`
  
bodyTag.append(section);



}

// Iteración 3

// Aquí escribiremos el addEventListener que 'escuchará' a nuestro botón


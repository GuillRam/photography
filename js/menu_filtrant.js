const Card = class {
  constructor(name, type, imgLink, price) {
    this.name = name;
    this.type = type;
    this.imgLink = imgLink;
    this.price = price;
  }
};

const cardArray = [];

const card1 = new Card(
  "Acropole de Lindos",
  "Rhodes",
  "../img/rhodes/rhodes_acropolis_lindos.jpg",
  "29.99€"
);
cardArray.push(card1);

const card2 = new Card(
  "Village de Lindos",
  "Rhodes",
  "../img/rhodes/rhodes_lindos_city.jpg",
  "29.99€"
);
cardArray.push(card2);

const card3 = new Card(
  "Mer de Lindos",
  "Rhodes",
  "../img/rhodes/rhodes_sea.jpg",
  "29.99€"
);
cardArray.push(card3);

const card4 = new Card(
  "Colisée de Rome",
  "Rome",
  "../img/rome/rome_coliseum.jpg",
  "29.99€"
);
cardArray.push(card4);

const card5 = new Card(
  "Fontaine de Trevi",
  "Rome",
  "../img/rome/rome_trevi.jpg",
  "29.99€"
);
cardArray.push(card5);

const card6 = new Card(
  "Vatican",
  "Rome",
  "../img/rome/rome_vatican.jpg",
  "29.99€"
);
cardArray.push(card6);
const card7 = new Card(
  "Théâtre Antique de Bodrum",
  "Bodrum",
  "../img/bodrum/bodrum_ancient_theater.jpg",
  "29.99€"
);
cardArray.push(card7);

const card8 = new Card(
  "Plage de Bodrum",
  "Bodrum",
  "../img/bodrum/bodrum_beach.jpg",
  "29.99€"
);
cardArray.push(card8);

const card9 = new Card(
  "Ville de Bodrum",
  "Bodrum",
  "../img/bodrum/bodrum_city.jpg",
  "29.99€"
);
cardArray.push(card9);

const card10 = new Card(
  "Burj Al Arab",
  "Dubaï",
  "../img/dubai/dubai_burj_al_arab.jpg",
  "29.99€"
);
cardArray.push(card10);

const card11 = new Card(
  "Burj Khalifa",
  "Dubaï",
  "../img/dubai/dubai_burj_khalifa.jpg",
  "29.99€"
);
cardArray.push(card11);

const card12 = new Card(
  "Désert de Dubaï",
  "Dubaï",
  "../img/dubai/dubai_desert.jpg",
  "29.99€"
);
cardArray.push(card12);

const card13 = new Card(
  "Tour Eiffel de Las Vegas",
  "Las Vegas",
  "../img/las_vegas/las_vegas_eiffel_tower.jpg",
  "29.99€"
);
cardArray.push(card13);

const card14 = new Card(
  "Hôtel Flamingo",
  "Las Vegas",
  "../img/las_vegas/las_vegas_flamingo.jpg",
  "29.99€"
);
cardArray.push(card14);

const card15 = new Card(
  "Ville de Las Vegas",
  "Las Vegas",
  "../img/las_vegas/las_vegas_sky_view.jpg",
  "29.99€"
);
cardArray.push(card15);

const card16 = new Card(
  "Pont Charles à Prague",
  "Prague",
  "../img/prague/prague_charles_bridge.jpg",
  "29.99€"
);
cardArray.push(card16);

const card17 = new Card(
  "Maison dansante",
  "Prague",
  "../img/prague/prague_dancing_house.jpg",
  "29.99€"
);
cardArray.push(card17);

const card18 = new Card(
  "Place Venceslas",
  "Prague",
  "../img/prague/prague_wenceslas_square.jpg",
  "29.99€"
);
cardArray.push(card18);
const card19 = new Card(
  "Mer de Punta Cana",
  "Punta Cana",
  "../img/punta_cana/punta_cana_beach_01.jpg",
  "29.99€"
);
cardArray.push(card19);

const card20 = new Card(
  "Plage de Punta Cana",
  "Punta Cana",
  "../img/punta_cana/punta_cana_beach_02.jpg",
  "29.99€"
);
cardArray.push(card20);

const card21 = new Card(
  "Cascade gelée en Islande",
  "Reykjavik",
  "../img/reykjavik/reykjavik_frozen_waterfall.jpg",
  "29.99€"
);
cardArray.push(card21);

const card22 = new Card(
  "Geyser en Islande",
  "Reykjavik",
  "../img/reykjavik/reykjavik_geyser.jpg",
  "29.99€"
);
cardArray.push(card22);

const card23 = new Card(
  "Aurores boréales",
  "Reykjavik",
  "../img/reykjavik/reykjavik_northern_lights.jpg",
  "29.99€"
);
cardArray.push(card23);

function displayCards(arr) {
  for (const element of arr) {
    // Création d'une div Card
    const card = document.createElement("div");
    card.classList.add("card");

    // Remplissage avec l'image
    const cardImg = document.createElement("img");
    cardImg.src = element.imgLink;
    cardImg.width = 200;
    cardImg.alt = element.name;
    cardImg.title = element.name;
    card.append(cardImg);

    // Ajout d'une div dans lequel il y aura le nom, le prix
    const infoDiv = document.createElement("div");

    const cardName = document.createElement("p");
    cardName.classList.add("card-name");
    cardName.innerText = element.name;
    infoDiv.append(cardName);

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-price");
    cardPrice.innerText = element.price;
    infoDiv.append(cardPrice);

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerText = "Ajouter au panier";
    infoDiv.append(cardButton);

    card.append(infoDiv);
    document.getElementById("card-container").append(card);
  }
}

displayCards(cardArray);

const buttons = document.querySelectorAll(".filter button");
for (const button of buttons) {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "Tout afficher") {
      document.getElementById("card-container").innerHTML = "";
      displayCards(cardArray);
      return;
    }
    document.getElementById("card-container").innerHTML = "";
    const filteredArr = cardArray.filter((x) => x.type === e.target.innerText);
    displayCards(filteredArr);
  });
}

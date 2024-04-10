const starters = [
    ["Krämig hummersoppa med saffranscroutonger", "https://img.koket.se/standard-mega/hummersoppa-med-currykrutonger.jpg", "120 kr"],
    ["Carpaccio med parmesan och rucola", "https://img.koket.se/standard-mega/carpaccio.jpg", "140 kr"],
    ["Avokado- och räksallad", "https://img.koket.se/standard-mega/avokado-och-raksallad.jpg", "160 kr"]
];

const mainCourses = [
    ["Rostad anka med äppelcidersås och rotsaker", "https://img.koket.se/standard-mega/rostad-anka.jpg", "220 kr"],
    ["Svamppasta med tryffelolja och parmesan", "https://img.koket.se/standard-mega/svamppasta.jpg", "260 kr"],
    ["Grillad entrecote med rödvinssås och potatisgratäng", "https://img.koket.se/standard-mega/grillad-entrecote-med-rodvinssas.jpg", "300 kr"]
];

const desserts = [
    ["Vit chokladpannacotta med passionsfruktskräm", "https://img.koket.se/standard-mega/pannacotta-med-jordgubbssas.jpg", "100 kr"],
    ["Crème brûlée med skogsbär", "https://img.koket.se/standard-mega/creme-brulee.jpg", "115 kr"],
    ["Chokladfondant med vaniljglass", "https://img.koket.se/standard-mega/chokladfondant.jpg", "130 kr"]
];

const drinks = [
    ["Gin & Tonic med gurka och fläder", "", "90 kr"],
    ["Mojito med färsk mynta", "", "105 kr"],
    ["Whiskey Sour med citron och sockerlag", "", "120 kr"]
];

const generateHTML = (category, categoryTitle, priceRange) => {
    let categoryHTML = "<div><h2>" + categoryTitle + "</h2><p>Pris: " + priceRange + "</p><div class='row'>";
    category.forEach((item) => {
        categoryHTML += "<div class='col-md-4 text-left'>" +
            "<p>" + item[0] + "</p>" +
            "<img src='" + item[1] + "' alt='Bild på " + item[0] + "' style='width:100%;'>" +
            "<p>" + item[2] + "</p>" +
            "</div>";
    });
    categoryHTML += "</div></div>";
    return categoryHTML;
};

const startersHTML = generateHTML(starters, "Förrätter", "120-160 kr");
const mainCoursesHTML = generateHTML(mainCourses, "Huvudrätter", "220-300 kr");
const dessertsHTML = generateHTML(desserts, "Efterrätter", "100-130 kr");
const drinksHTML = generateHTML(drinks, "Drinkar", "90-120 kr");

const menuDiv = document.createElement('div');
menuDiv.innerHTML = startersHTML + mainCoursesHTML + dessertsHTML + drinksHTML;

document.body.appendChild(menuDiv);

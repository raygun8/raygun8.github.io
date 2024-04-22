const starters = [
    ["Krämig hummersoppa med saffranscroutonger", "images/hummer.jpg", "120kr"],
    ["Carpaccio med parmesan och rucola", "images/rucola.webp", "140kr"],
    ["Avokado- och räksallad", "images/avoka.jpg", "160kr"]
];

const mainCourses = [
    ["Rostad anka med äppelcidersås och rotsaker", "images/anka.jpg", "220kr"],
    ["Svamppasta med tryffelolja och parmesan", "images/pasta.jpg", "260kr"],
    ["Grillad entrecote med rödvinssås och potatisgratäng", "images/entre.jpg", "300kr"]
];

const desserts = [
    ["Vit chokladpannacotta med passionsfruktskräm", "images/panna.jpg", "100kr"],
    ["Crème brûlée med skogsbär", "images/creme.jpg", "115kr"],
    ["Chokladfondant med vaniljglass", "images/choklad.jpg", "130kr"]
];

const drinks = [
    ["Gin & Tonic med gurka och fläder", "images/gin.jpg", "90kr"],
    ["Mojito med färsk mynta", "images/mojito.jpg", "105kr"],
    ["Whiskey Sour med citron och sockerlag", "images/whiskey.jpg", "120kr"]
];

const generateHTML = (category, categoryTitle, priceRange) => {
    let categoryHTML = "<div><h2>" + categoryTitle + "</h2><p>Pris: " + priceRange + "</p><div class='row'>";
    category.forEach((item) => {
        categoryHTML += "<div class='col-md-4'>" +
            "<div class='card'>" +
            "<img src='" + item[1] + "' class='card-img-top' alt='Bild på " + item[0] + "' style='max-width:20%; height:auto;'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + item[0] + "</h5>" +
            "<p class='card-text'>" + item[2] + "</p>" +
            "</div>" +
            "</div>" +
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

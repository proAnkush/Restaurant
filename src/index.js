import { homeDiv } from "./homePage.js";
import { aboutDiv } from "./aboutPage.js";
import { menuDiv } from "./menuPage.js";

var div = document.getElementById("content");
var myHeading = document.createElement("h1");
myHeading.setAttribute('id', 'heading')
// links
// chefs image: https://cdn.pixabay.com/photo/2016/05/26/14/11/chef-1417239_1280.png
// restaurant image: https://banner2.cleanpng.com/20190226/gje/kisspng-clip-art-restaurant-vector-graphics-illustration-b-5c75868baec140.2635704815512060277158.jpg 

// head start ;-)
myHeading.textContent = "Schooner or Later Restaurant";
myHeading.style = "text-shadow: black 2px 3px 2px; text-align: center; color: #00b3ff; font-family: Cookie, cursive; font-size: 5vmax;margin: 0; margin-top: 30px; letter-spacing: 0.2vmin;";
var myHr = document.createElement('hr');
myHr.style = "border-top: 3px double red; margin-top: 0;"
// head end

// nav start
var myNav = document.createElement('div');
myNav.setAttribute("id", "nav");
myNav.style = "background: #00b3ff; display: flex; flex-direction: row; justify-content: flex-end; padding-right: 3vmin; margin-bottom: 3%; margin-top: 0;";

var myHomeButton = document.createElement("p");
myHomeButton.textContent = "Home";
myHomeButton.style = "font-size: 24px; color: white; margin-left: 3vmin; cursor: pointer;";
myHomeButton.setAttribute('id', "homeButton");
myHomeButton.onclick = function(){
    homeDiv();
}

var myMenuButton = document.createElement("p");
myMenuButton.textContent = "Menu";
myMenuButton.style = "font-size: 24px; color: black; margin-left: 3vmin; cursor: pointer;";
myMenuButton.setAttribute('id', "menuButton");
myMenuButton.onclick = function(){
    menuDiv();
}

var myAboutButton = document.createElement("p");
myAboutButton.textContent = "About";
myAboutButton.style = "font-size: 24px; color: black; margin-left: 3vmin; cursor: pointer;";
myAboutButton.setAttribute('id', "aboutButton");
myAboutButton.onclick = function(){
    aboutDiv();
}

myNav.appendChild(myHomeButton);
myNav.appendChild(myMenuButton);
myNav.appendChild(myAboutButton);
// nav end

// Description
var myDesc = document.createElement("p");
myDesc.setAttribute("id", "desc");
myDesc.textContent = "Cupcake ipsum dolor sit amet. Sugar plum I love tiramisu brownie tiramisu shortbread. Gingerbread marzipan wafer gummi bears icing sugar plum carrot cake. Chocolate soufflé sweet roll I love pastry bear claw macaroon. Topping fruitcake tiramisu fruitcake carrot cake tart macaroon cookie shortbread. Chupa chups shortbread gummies tart fruitcake marzipan tiramisu. Cookie lemon drops soufflé dragée I love chocolate. Candy bonbon I love toffee cookie muffin. Chocolate cake toffee tart pie pie biscuit lollipop. Sugar plum cookie marzipan chocolate cake jelly-o sugar plum gummi bears. Dessert I love jelly beans jujubes jelly beans. I love icing chocolate cake candy wafer chupa chups I love tootsie roll candy canes. Lollipop liquorice cookie marzipan candy tart donut cake.";
myDesc.style = "font-size: 24px;";
// Description end

// image start
var myImage = document.createElement("img");
myImage.setAttribute("id", "image");
myImage.src = "https://live442.com/wp-content/uploads/2020/01/Schooner-or-Later2.jpg";
myImage.style = "background-color: white; border-radius: 50px; float: center; display: block; margin: 0px auto; bottom: 0;"
// image end
div.appendChild(myHeading);
div.appendChild(myHr);
div.appendChild(myNav);
div.appendChild(myDesc);
div.appendChild(myImage);

function homeDiv(){
    document.getElementById("homeButton").style = "font-size: 24px; color: white; margin-left: 3vmin; cursor: pointer;";
    document.getElementById("menuButton").style = "font-size: 24px; color: black; margin-left: 3vmin; cursor: pointer;";
    document.getElementById("aboutButton").style = "font-size: 24px; color: black; margin-left: 3vmin; cursor: pointer;";
    document.getElementById("image").src = "https://live442.com/wp-content/uploads/2020/01/Schooner-or-Later2.jpg";
    document.getElementById("desc").textContent = "Cupcake ipsum dolor sit amet. Sugar plum I love tiramisu brownie tiramisu shortbread. Gingerbread marzipan wafer gummi bears icing sugar plum carrot cake. Chocolate soufflé sweet roll I love pastry bear claw macaroon. Topping fruitcake tiramisu fruitcake carrot cake tart macaroon cookie shortbread. Chupa chups shortbread gummies tart fruitcake marzipan tiramisu. Cookie lemon drops soufflé dragée I love chocolate. Candy bonbon I love toffee cookie muffin. Chocolate cake toffee tart pie pie biscuit lollipop. Sugar plum cookie marzipan chocolate cake jelly-o sugar plum gummi bears. Dessert I love jelly beans jujubes jelly beans. I love icing chocolate cake candy wafer chupa chups I love tootsie roll candy canes. Lollipop liquorice cookie marzipan candy tart donut cake.";
    if(document.getElementById("address")){
        document.getElementById("content").removeChild(document.getElementById("address"));
    }
}
export{ homeDiv };
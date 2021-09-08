function menuDiv(){
    document.getElementById("homeButton").style = "font-size: 24px; color: black; margin-left: 3vmin; cursor: pointer;";
    document.getElementById("menuButton").style = "font-size: 24px; color: white; margin-left: 3vmin; cursor: pointer;";
    document.getElementById("aboutButton").style = "font-size: 24px; color: black; margin-left: 3vmin; cursor: pointer;";
    document.getElementById("image").src = "https://image.freepik.com/free-vector/vector-cartoon-illustration-design-fast-food-restaurant-menu_1441-334.jpg";
    document.getElementById("desc").textContent = "Our menu consists of many tasty treats, Have a good look first, Order second";
    if(document.getElementById("address")){
        document.getElementById("content").removeChild(document.getElementById("address"));
    }

}
export{ menuDiv };
//Search by cocktail name hide
$(".user-chose-cocktail").hide();
$("#cocktail-name-btn").click(function(){
    $(".user-chose-cocktail").show();
    $("#cocktail-name-btn").hide();
  });
  //Search by ingredient name hide
  $(".user-chose-ingredient").hide();
$("#ingredient-name-btn").click(function(){
    $(".user-chose-ingredient").show();
    $("#ingredient-name-btn").hide();
  });

$(document).ready(function () {
    var apiKey = "9973533"
    var popularDrinkUrl = "https://www.thecocktaildb.com/api/json/v2/" + apiKey + "/popular.php";
    var randomUrl = "https://www.thecocktaildb.com/api/json/v2/" + apiKey + "/randomselection.php";
function searchbyName (nameInput) {
    var drinkNameUrl = "https://www.thecocktaildb.com/api/json/v2/" + apiKey + "/search.php?s=" + nameInput;
        console.log(nameInput);
        $.ajax({
            type: "GET",
            url: drinkNameUrl
        }).then(function (response) {
            console.log(response)
        for (var i = 0; i <= response.drinks.length; i++){
        var glass = response.drinks[i].strGlass;
        var instruction = response.drinks[i].strInstructions;
        var drinkName = response.drinks[i].strDrink;
        var image = response.drinks[i].strDrinkThumb;
        var video = response.drinks[i].strVideo;
        var drinkNameEl = $("<h1>").text("Name of the drink :" + drinkName);
        var glassEl = $("<div>").text("Best glass for this drink :" + glass)
        var instructionEl = $("<div>").text("Instruction :" + instruction);
        var imageUrl = $("<img>").attr("src", image);
        $("#contents").append($("<div>"));
        $("#contents").append(drinkNameEl, glassEl, instructionEl, imageUrl);
    }
})
}
// need for loop for(strIngredients && strMesure)
function searchbyIngredient (ingInput) {
    var ingNameUrl = "https://www.thecocktaildb.com/api/json/v2/" + apiKey + "/search.php?i=" + ingInput;
        console.log(ingInput);
        console.log(ingNameUrl);
        $.ajax({
            type: "GET",
            url: ingNameUrl
}).then(function (response) {
        // console.log(response);
   })
};
$("#cocktail-search").on("keypress click", function(event) {
    event.preventDefault();
    var nameInput = $(".search-by-cocktail").val().trim()
    searchbyName(nameInput);
});
        $(".search-by-cocktail").keypress(function(event){
            if(event.which == 13){//Enter key pressed
                $('#cocktail-search').click();//Trigger search button click event
            }
});
$("#ingredient-search").on("click", function(event) {
    event.preventDefault();
    var ingInput = $(".search-by-ingredient").val().trim();
    searchbyIngredient(ingInput);
});
        $(".search-by-ingredient").keypress(function(event){
            if(event.which == 13){//Enter key pressed
                $('#ingredient-search').click();//Trigger search button click event
            }
        });
});
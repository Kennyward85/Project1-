//Search by cocktail name hide
$(".user-chose-cocktail").hide();
$("#cocktail-name-btn").click(function(){
    $(".user-chose-cocktail").show();
    $("#cocktail-name-btn").hide();
  });
  //Search by ingredient name hide
  $(".user-chose-ingredient").hide();
$("#ingredient-name-btn").click(function(){
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
            $("#contents").empty();

            $("#deck").empty();
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
        
        
    

        $("#deck").append(cardBuilder(instruction,drinkName,image, response.drinks[i].strMeasure1, response.drinks[i].strMeasure2, response.drinks[i].strMeasure3, response.drinks[i].strMeasure4, response.drinks[i].strMeasure5, response.drinks[i].strMeasure5, response.drinks[i].strMeasure7, response.drinks[i].strMeasure8, response.drinks[i].strMeasure9, response.drinks[i].strMeasure10, response.drinks[i].strMeasure11, response.drinks[i].strMeasure12, response.drinks[i].strMeasure13, response.drinks[i].strMeasure14, response.drinks[i].strMeasure15, response.drinks[i].strIngredient1, response.drinks[i].strIngredient2, response.drinks[i].strIngredient3, response.drinks[i].strIngredient4, response.drinks[i].strIngredient5, response.drinks[i].strIngredient6, response.drinks[i].strIngredient7, response.drinks[i].strIngredient8, response.drinks[i].strIngredient9, response.drinks[i].strIngredient10, response.drinks[i].strIngredient11, response.drinks[i].strIngredient12, response.drinks[i].strIngredient13, response.drinks[i].strIngredient14, response.drinks[i].strIngredient15));
      
    }
})
}

function cardBuilder(xinstructions, xdrinkName, ximgUrl, m1,m2,	m3,	m4,	m5,	m6,	m7,	m8,	m9,	m10,m11,m12,m13,m14,m15,i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15)
{

    var cardstring = ' <div style="width: 18rem;" class="card"><img class="card-img" src="'+ ximgUrl +'" alt="Drink"><div class="card-body"><h5 class="card-title">'+xdrinkName+'</h5><p class="card-text">'+xinstructions+'</p>';

    var ingreds= '<ul class="list-group list-group-flush">';
    var fact="";
    if(i1!=null){
        fact += "<li class='list-group-item'>"+ m1+ " " + i1+"</li>"
    }
    if(i2!=null){
        fact += "<li class='list-group-item'>"+ m2+ " " + i2+"</li>"
    }
    if(i3!=null){
        fact += "<li class='list-group-item'>"+ m3+ " " + i3+"</li>"
    }
    if(i4!=null){
        fact += "<li class='list-group-item'>"+ m4+ " " + i4+"</li>"
    }
    if(i5!=null){
        fact += "<li class='list-group-item'>"+ m5+ " " + i5+"</li>"
    }
    if(i6!=null){
        fact += "<li class='list-group-item'>"+ m6+ " " + i6+"</li>"
    }
    if(i7!=null){
        fact += "<li class='list-group-item'>"+ m7+ " " + i7+"</li>"
    }
    if(i8!=null){
        fact += "<li class='list-group-item'>"+ m8+ " " + i8+"</li>"
    }
    if(i9!=null){
        fact += "<li class='list-group-item'>"+ m9+ " " + i9+"</li>"
    }
    if(i10!=null){
        fact += "<li class='list-group-item'>"+ m10+ " " + i10+"</li>"
    }
    if(i11!=null){
        fact += "<li class='list-group-item'>"+ m11+ " " + i11+"</li>"
    }
    if(i12!=null){
        fact += "<li class='list-group-item'>"+ m12+ " " + i12+"</li>"
    }
    if(i13!=null){
        fact += "<li class='list-group-item'>"+ m13+ " " + i13+"</li>"
    }
    if(i14!=null){
        fact += "<li class='list-group-item'>"+ m14+ " " + i14+"</li>"
    }
    if(i15!=null){
        fact += "<li class='list-group-item'>"+ m15+ " " + i15+"</li>"
    }
   fact += "</ul>";

cardstring += fact+"</div>";


  
 
      
return cardstring;

}


var x = document.getElementById("deck");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
   
    const callUrl = "https://api.tomtom.com/search/2/search/liquor.json?limit=7&countrySet=US&lat=" + lat + "&lon=" + lon + "&radius=24000&idxSet=POI&key=BO3DEG2RkU2YkDwYIQ02rcQRRdtnl972";
    
    var json = httpGet(callUrl);

    var storeListing = JSON.parse(json);
           
    var html = "<div class='card'><div class='card-header'><h2>Local Stores</h2></div><div class='card-body'><ul>";
    for (var i = 0; i < storeListing.results.length; i++) {
        
        //var maplink = "http://maps.google.com/maps?q=" + storeListing.results[i].position.lat + "," + storeListing.results[i].position.lon;
        var maplink = "http://maps.google.com/maps?q=" + storeListing.results[i].poi.name + "/@@" + storeListing.results[i].position.lat + "," + storeListing.results[i].position.lon;
        html += "<div class='card'><li><strong><a href='"+ maplink + "'>" + storeListing.results[i].poi.name +
            "</a></strong><br/>" + storeListing.results[i].address.freeformAddress +
            "</li> </div>";
        
        
    }

    html += "</ul></div>";
    x.innerHTML="";
    x.innerHTML = html;

}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;

}


function searchRandom() {
    $("#deck").empty();
    var randomDrink = "https://www.thecocktaildb.com/api/json/v2/" + apiKey + "/randomselection.php";
    
        $.ajax({
            url: randomDrink,
            method: "GET"
        }).then(function (response) {
            $("#contents").empty();
            for (var i = 0; i <= response.drinks.length; i++){
            console.log(response);
            

            var glass = response.drinks[i].strGlass;
            var instruction = response.drinks[i].strInstructions;
            var drinkName = response.drinks[i].strDrink;
            var image = response.drinks[i].strDrinkThumb;
            var video = response.drinks[i].strVideo;
            var drinkNameEl = $("<h1>").text("Name of the drink :" + drinkName);
            var glassEl = $("<div>").text("Best glass for this drink :" + glass) 
            var instructionEl = $("<div>").text("Instruction :" + instruction);
            var imageUrl = $("<img>").attr("src", image);

            $("#deck").append(cardBuilder(instruction,drinkName,image, response.drinks[i].strMeasure1, response.drinks[i].strMeasure2, response.drinks[i].strMeasure3, response.drinks[i].strMeasure4, response.drinks[i].strMeasure5, response.drinks[i].strMeasure5, response.drinks[i].strMeasure7, response.drinks[i].strMeasure8, response.drinks[i].strMeasure9, response.drinks[i].strMeasure10, response.drinks[i].strMeasure11, response.drinks[i].strMeasure12, response.drinks[i].strMeasure13, response.drinks[i].strMeasure14, response.drinks[i].strMeasure15, response.drinks[i].strIngredient1, response.drinks[i].strIngredient2, response.drinks[i].strIngredient3, response.drinks[i].strIngredient4, response.drinks[i].strIngredient5, response.drinks[i].strIngredient6, response.drinks[i].strIngredient7, response.drinks[i].strIngredient8, response.drinks[i].strIngredient9, response.drinks[i].strIngredient10, response.drinks[i].strIngredient11, response.drinks[i].strIngredient12, response.drinks[i].strIngredient13, response.drinks[i].strIngredient14, response.drinks[i].strIngredient15));

            $("#contents").append($("<div>"));
//            $("#contents").append(drinkNameEl, glassEl, instructionEl, imageUrl);
        }
    })
} 
    
 
// need for loop for(strIngredients && strMesure)

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

$(".random-name").on("click", function(event) {
    event.preventDefault();
  
  searchRandom();
});
 });       
 $(".find-store").on("click", function(event) {
    event.preventDefault();
  
  getLocation();
});
 

const x = document.getElementById("deck");

 function getLocation() {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
     } else {
         x.innerHTML = "Geolocation is not supported by this browser.";
     }
 }


 function showPosition(position) {
     const lat = position.coords.latitude;
     const lon = position.coords.longitude;
    
     const callUrl = "https://api.tomtom.com/search/2/search/liquor.json?limit=7&countrySet=US&lat=" + lat + "&lon=" + lon + "&radius=24000&idxSet=POI&key=BO3DEG2RkU2YkDwYIQ02rcQRRdtnl972";
     
     var json = httpGet(callUrl);

     var storeListing = JSON.parse(json);
            
     var html = "<div class='card col-lg-12'><div class='card-header'><h2>Local Stores</h2></div><div class='card-body'><ul>";
     for (var i = 0; i < storeListing.results.length; i++) {
         
         //var maplink = "http://maps.google.com/maps?q=" + storeListing.results[i].position.lat + "," + storeListing.results[i].position.lon;
         var maplink = "http://maps.google.com/maps?q=" + storeListing.results[i].poi.name + "/@@" + storeListing.results[i].position.lat + "," + storeListing.results[i].position.lon;
         html += "<div class='card'><li><strong><a href='"+ maplink + "'>" + storeListing.results[i].poi.name +
             "</a></strong><br/>" + storeListing.results[i].address.freeformAddress +
             "</li> </div>";
         
         
     }

     html += "</ul>";
     x.innerHTML="";
     x.innerHTML = html;

 }

 function httpGet(theUrl) {
     var xmlHttp = new XMLHttpRequest();
     xmlHttp.open("GET", theUrl, false); 
     xmlHttp.send(null);
     return xmlHttp.responseText;

 }

    
var caption = '<div class="carousel-caption d-none d-md-block" style="vertical-align: baseline;"><h5 style="text-align: center;">Visit Georgia</h5>';



var img = new Image();
var arr = ["Alaverdi","stGeorgeStabbingDragon","gergeti-church", "Diri-Baba-Mausoleum-Maraza", "Kazbegi"];

for(var i=0; i<arr.length; i++){                                   
    img.src = "images/" + arr[i] + ".jpg";    
    var div = document.getElementById('imgRead');
    var ind = document.getElementById('indicator');   
    i===0 ? div.innerHTML += '<div class="carousel-item carousel item active"><img style="width:100%" class="d-block w-100" src="' + img.src + '" alt="First slide">' + caption + '</div>' : 
    div.innerHTML += '<div class="carousel-item carousel item"><img style="width:100%" class="d-block w-100" src="' + img.src + '" alt="First slide">' + caption + '</div>'; 
    i===0 ? ind.innerHTML += '<li data-target="#carouselExampleIndicators" data-slide-to="' + i + '" class="active"></li>': 
    ind.innerHTML += '<li data-target="#carouselExampleIndicators" data-slide-to="' + i +'"></li>'; 
   
}
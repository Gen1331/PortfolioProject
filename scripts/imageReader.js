
    
<<<<<<< HEAD
=======
var caption = '<div class="carousel-caption d-none d-md-block" style="vertical-align: baseline;"><h5 style="text-align: center;">Visit Georgia</h5>';
>>>>>>> a7c0552afc2ec02e99dbe83534c4b9561fbe399f



var img = new Image();
var arr = ["Alaverdi","stGeorgeStabbingDragon","gergeti-church", "Diri-Baba-Mausoleum-Maraza"];

for(var i=0; i<arr.length; i++){                                   
    img.src = "images/" + arr[i] + ".jpg";    
    var div = document.getElementById('imgRead');
    var ind = document.getElementById('indicator');   
<<<<<<< HEAD
    i===0 ? div.innerHTML += '<div class="carousel-item active"><img style="width:100%" class="d-block w-100" src="' + img.src + '" alt="First slide"></div>' : 
    div.innerHTML += '<div class="carousel-item"><img style="width:100%" class="d-block w-100" src="' + img.src + '" alt="First slide"></div>'; 
=======
    i===0 ? div.innerHTML += '<div class="carousel-item active"><img style="width:100%" class="d-block w-100" src="' + img.src + '" alt="First slide">' + caption + '</div>' : 
    div.innerHTML += '<div class="carousel-item"><img style="width:100%" class="d-block w-100" src="' + img.src + '" alt="First slide">' + caption + '</div>'; 
>>>>>>> a7c0552afc2ec02e99dbe83534c4b9561fbe399f
    i===0 ? ind.innerHTML += '<li data-target="#carouselExampleIndicators" data-slide-to="' + i + '" class="active"></li>': 
    ind.innerHTML += '<li data-target="#carouselExampleIndicators" data-slide-to="' + i +'"></li>'; 
   
}
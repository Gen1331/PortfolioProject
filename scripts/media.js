$(document).ready(function(){
    var header = ['Georgia Adventure',
                'Wine in Georgia',
                'Georgian Caucasus Mountain Ski Paradise',
                'Svaneti Highlands'
                ];
    
    var image = ['Church',
                'WineTaste',
                'Caucasus',
                'Svaneti'
                ]

    var tour = ["Start and end in Tbilisi! With the discovery tour Georgia Adventure, you have a 11 day tour package taking you through Tbilisi, Georgia and 3 other destinations in Georgia. Georgia Adventure is a small group tour that includes accommodation in a hotel as well as an expert guide, meals, transport and more.",
                "Start and end in Tbilisi! With the wine tasting tour Wine in Georgia - Limited Edition, you have a 8 day tour package taking you through Tbilisi, Georgia and 2 other destinations in Georgia. Wine in Georgia - Limited Edition is a small group tour that includes accommodation in a hotel as well as an expert guide, meals, transport and more.",
                "Start and end in Tbilisi! With the cable skiing tour Georgian Caucasus Mountain Ski Paradise, you have a 7 day tour package taking you through Tbilisi, Georgia and 2 other destinations in Georgia. Georgian Caucasus Mountain Ski Paradise is a small group tour that includes accommodation as well as an expert guide, meals, transport.",
                "Start and end in Tbilisi! With the discovery tour 4 Day Svaneti Highlands, you have a 4 day tour package taking you through Tbilisi, Georgia and 2 other destinations in Georgia. 4 Day Svaneti Highlands is a small group tour that includes accommodation as well as an expert guide, meals, transport and more."
                ];
    var html = "";

    for (var i = 0; i < tour.length; i++){
        $("#media").html(() => html += "<div class='media'><img class='d-flex mr-3 img-thumbnail align-self-center' src='images/Tours/" + image[i] + ".jpg' alt='Uthappizza'><div class='media-body'><h2 class='mt-0'>" + header[i] + "</h2><p class='d-none d-sm-block'>" + tour[i] + "</p></div></div>");
    }
});
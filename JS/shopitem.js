window.addEventListener('load', () => {

    // Haald de data op uit de parameters 
    var params = (new URL(document.location)).searchParams;
    var id = params.get('beerid');
  
    
    var i = id.replace(' ','');
    console.log(bieren[i].naam);

    //Zet de data op de pagina
    document.getElementById('biernaam').innerHTML = bieren[i].naam ;
    document.getElementById('bierprijs').innerHTML = "€ " + bieren[i].price+"0";
    document.getElementById('bierimg').src = bieren[i].image;



    //inladne van de reviews
    var review="";
    var i;
  
    for (i = 0; i < 3; i++) {
        review += "<div class='review'><h3 class='reviewnaam'>"+reviews[i].naam+"</h3><p class='reviewtekst'>"+reviews[i].tekst+"</p></div>"
    }
    document.getElementById("reviews").innerHTML = review;
  

    //het laten werken van de accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            
            this.classList.toggle("activeaccordion");
    
            var panel = this.nextElementSibling;
            
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } 
            else {
                panel.style.display = "block";
            }
        });
    }



    //inladen van de aanbevolen bieren
    var Bieraanbevolenimg="";
    var aanbevolennamen ="";
    var aanbevolenprijzen ="";
    var i;
  
    for (i = 0; i < 5; i++) {
        Bieraanbevolenimg += "<div class='bierimg'><img src=' "+ bieren[i].image +"' id='Bierimage' alt='Een bier'></div>"
        aanbevolennamen += "<div class='biernaam'><h1>"+bieren[i].naam+"</h1></div>"
        aanbevolenprijzen += "<div class='bierprijs'><h1>"+bieren[i].price+"</h1></div>"
    }
    document.getElementById("aanbevolenimgs").innerHTML += Bieraanbevolenimg;
    document.getElementById("aanbevolennamen").innerHTML += aanbevolennamen;
    document.getElementById("aanbevolenprijzen").innerHTML += aanbevolenprijzen;

})

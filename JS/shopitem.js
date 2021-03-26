
window.addEventListener('load', () => {
    // Haald de data op uit de parameters 
    var params = (new URL(document.location)).searchParams;
    var name = params.get('name');
    var beerprice = params.get('beerprice');
    var beerimg = params.get('beerimg');  
    
    console.log(name);

    //Zet de data op de pagina
    document.getElementById('biernaam').innerHTML = name;
    document.getElementById('bierprijs').innerHTML = beerprice;
    document.getElementById('bierimg').src = beerimg;

})



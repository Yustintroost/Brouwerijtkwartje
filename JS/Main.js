
var Bieren = [
    {
      id: 1,
      naam: "Brute force",
      image: "../Images/bieren/Brute Force Single.jpg",
      price: 5.40,
    },
    {
        id: 2,
        naam: "Refresh",
        image: "../images/bieren/Refresh Single.jpg",
        price: 5.40,
      },
      {
        id: 3,
        naam: "Anykey",
        image: "../Images/bieren/anykey.jpg",
        price: 5.40,
      },
      {
        id: 4,
        naam: "Ddos",
        image: "../Images/bieren/Ddos.jpg",
        price: 5.40,
      },
      {
        id: 5,
        naam: "Firewire",
        image: "../Images/bieren/Firewire.jpg",
        price: 5.40,
      },
      {
        id: 6,
        naam: "Rsi",
        image: "../Images/bieren/Rsi.jpg",
        price: 5.40,
      }
  ];
   
  var Bier="";
  var Bieraanbevolen="";
  var i;

  for (i = 0; i < 3; i++) {
    Bieraanbevolen += " <div class='Shopitem'> <img src=' "+ Bieren[i].image +"' id='Bierimage' alt='Een bier'><div class='Shopitemtekst'><h3 id='Biernaam'>"+ Bieren[i].naam +"</h3><p id='Bierprijs'>€"+ Bieren[i].price +"0</p> <form action='shopitem.html' method='get'><input type='hidden' id='beerimg' name='beerimg' value='"+ Bieren[i].image  +" '/><input type='hidden' id='name' name='name' value='"+ Bieren[i].naam  +" '/><input type='hidden' id='beerprice' name='beerprice' value='"+ Bieren[i].price  +" '/><input type='submit' onclick='handleSubmit()'/></form></div></div>"
  }
  document.getElementById("Shopitems1").innerHTML = Bieraanbevolen;


  for (i = 0; i < Bieren.length; i++) {
    Bier += " <div class='Shopitem'> <img src=' "+ Bieren[i].image +"' id='Bierimage' alt='Een bier'><div class='Shopitemtekst'><h3 id='Biernaam'>"+ Bieren[i].naam +"</h3><p id='Bierprijs'>€"+ Bieren[i].price +"0</p><form action='shopitem.html' method='get'><input type='hidden' id='beerimg' name='beerimg' value='"+ Bieren[i].image  +" '/><input type='hidden' id='name' name='name' value='"+ Bieren[i].naam  +" '/><input type='hidden' id='beerprice' name='beerprice' value='"+ Bieren[i].price  +" '/><input type='submit' onclick='handleSubmit()'/></form></div></div>"
  }
  document.getElementById("Shopitems").innerHTML = Bier;

  






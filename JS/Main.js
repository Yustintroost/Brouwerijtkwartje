
  
  var Bier="";
  var Bieraanbevolen="";
  var i;

  for (i = 0; i < 3; i++) {
    Bieraanbevolen += " <div class='Shopitem'> <img src=' "+ bieren[i].image +"' id='Bierimage' alt='Een bier'><div class='Shopitemtekst'><h3 id='Biernaam'>"+ bieren[i].naam +"</h3><p id='Bierprijs'>€"+ bieren[i].price +"0</p><form action='shopitem.html' method='get'><input type='hidden' id='beerid' name='beerid' value='"+ bieren[i].id  +" '/><input type='submit' class='button' value='Bekijken' onclick='handleSubmit()'/></form></div></div>"
  }
  document.getElementById("Shopitems1").innerHTML = Bieraanbevolen;


  for (i = 0; i < bieren.length; i++) {
    Bier += " <div class='Shopitem'> <img src=' "+ bieren[i].image +"' id='Bierimage' alt='Een bier'><div class='Shopitemtekst'><h3 id='Biernaam'>"+ bieren[i].naam +"</h3><p id='Bierprijs'>€"+ bieren[i].price +"0</p><form action='shopitem.html' method='get'><input type='hidden' id='beerid' name='beerid' value='"+ bieren[i].id  +" '/><input type='submit' class='button' value='Bekijken' onclick='handleSubmit()'/></form></div></div>"
  }
  document.getElementById("Shopitems").innerHTML = Bier;














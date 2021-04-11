

  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var age = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(age) == 0) {
        return c.substring(age.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user=getCookie("leeftijd");
    if (user != "" && user >= 18) {

    } else if (user <= 18 && user != "") {
        window.location.replace("https://www.alcoholinfo.nl/opvoeding/leeftijdsgrens-alcohol-van-16-naar-18");
      } else{
       user = prompt("Vul je leeftijd in, bij 18 jaar of ouder mag je verder:","");
       if (user != "" && user != null) {
         setCookie("leeftijd", user, 30);
       }
    }
  }
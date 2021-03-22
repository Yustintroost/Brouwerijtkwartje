var firebaseConfig = {
    apiKey: "AIzaSyBM1v1Blv9o---znO4KTwfjTTbvZye-ZiI",
    authDomain: "yustpics-acebf.firebaseapp.com",
    databaseURL: "https://yustpics-acebf-default-rtdb.firebaseio.com",
    projectId: "yustpics-acebf",
    storageBucket: "yustpics-acebf.appspot.com",
    messagingSenderId: "621490924729",
    appId: "1:621490924729:web:c42df0dc72dc8da42eff68",
    measurementId: "G-39FDMZP60J"
};
// const storage = firebase.storage();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



        const imglist = document.getElementById('photogrid');
        const dbRefImg = firebase.database().ref().child('images');
       

            dbRefImg.on('child_added', snap=>{
                const img = document.createElement('div');
                const str = document.createElement('p');
                img.innerHTML = "<p> <img src='" + snap.val().photographerpic + "' class='photographerimg' alt=" + snap.val().icon + "> " + snap.val().photographer + " <i class='fas " + snap.val().icon + "'></i></p>";
                img.setAttribute("style", "background-image: url(" + snap.val().image + ");")
                img.setAttribute("class", "col-12 latestitem " + snap.val().tag + " "); 
                
                imglist.appendChild(img); 
            });
           
           


  

       

        
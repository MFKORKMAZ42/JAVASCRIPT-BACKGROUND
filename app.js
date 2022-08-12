const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = 
["black","yellow", "green","purple",
"#42f5da","#42f5da","#42f5da"];

button.addEventListener("click", changeBackground);

let sıra = 0;


function changeBackground() {
    //rastgele bir renk
  /*  const rastgeleSayi = Math.floor(Math.random() * colors.length);
    const secilenRenk = colors[rastgeleSayi];
    console.log(rastgeleSayi);

    //console.log("butona tıklandı");
    body.style.backgroundColor = secilenRenk; */

    //sırayla arkaplan rengi seç 
    console.log(sıra);
    if (sıra == 7 ) sıra = 0;
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;
    

}


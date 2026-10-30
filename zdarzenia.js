
let kontener = document.getElementById("kontener");


kontener.addEventListener("click", function() {
    let kolor = "#" + Math.floor(Math.random() * 16777215)
        .toString(16).padStart(6, "0");

    kontener.style.backgroundColor = kolor;
});


kontener.addEventListener("mouseenter", function() {
    kontener.style.fontSize = "32px";
});

kontener.addEventListener("mouseleave", function() {
    kontener.style.fontSize = "16px";
});



let paragraf = document.querySelector(".wyroznione");


paragraf.addEventListener("dblclick", function() {
    paragraf.textContent = "powiat radomski";
});


paragraf.addEventListener("mouseenter", function() {
    console.log(paragraf.textContent);
});



let artykul = document.getElementById("artykul");
let liczba = document.getElementById("liczba");


artykul.addEventListener("keydown", function(event) {
    artykul.size += 1;


    if (event.key >= "0" && event.key <= "9") {
        liczba.textContent += event.key;
    }
});

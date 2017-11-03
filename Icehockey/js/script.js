function berekenSubTotaal(a, b, c) {
    var prijs = parseFloat(a.textContent);
    var aantal = parseInt(b.value);
    var subtotaalprijs = prijs * aantal;
    console.log(subtotaalprijs);
    c.textContent = subtotaalprijs;
}

var svensson_price = document.getElementById("svensson_price");
var svensson_aantal = document.getElementById("svensson_aantal");
var svensson_totaal = document.getElementById("svensson_totaal");

svensson_aantal.addEventListener("change", function () {
    console.log(svensson_totaal);
    berekenSubTotaal(svensson_price, svensson_aantal, svensson_totaal);
});

var benson_price = document.getElementById("benson_price");
var benson_aantal = document.getElementById("benson_aantal");
var benson_totaal = document.getElementById("benson_totaal");

benson_aantal.addEventListener("change", function () {
    console.log(benson_totaal);
    berekenSubTotaal(benson_price, benson_aantal, benson_totaal);
});
var karlson_price = document.getElementById("karlson_price");
var karlson_aantal = document.getElementById("karlson_aantal");
var karlson_totaal = document.getElementById("karlson_totaal");

karlson_aantal.addEventListener("change", function () {
    console.log(karlson_totaal);
    berekenSubTotaal(karlson_price, karlson_aantal, karlson_totaal);
});

totaalknop.addEventListener("click", function () {
    console.log(totaalknop);
    var totaalprijs = parseFloat(svensson_totaal.textContent) + parseFloat(benson_totaal.textContent) + parseFloat(karlson_totaal.textContent);
    console.log(totaalprijs);
    var totaalaantal = parseInt(svensson_aantal.value) + parseInt(benson_aantal.value) + parseInt(karlson_aantal.value);
    console.log(totaalaantal);
    var veters = 0;
    if(document.getElementById("veters").checked) {
        veters = 1.25 * totaalaantal;
    }
    console.log(veters);
    var beschermers = 0;
    if(document.getElementById("beschermers").checked) {
        beschermers = 2.35 * totaalaantal;
    }
    console.log(beschermers);
    document.getElementById("totaalprijs").textContent = totaalprijs + (veters + beschermers);
});
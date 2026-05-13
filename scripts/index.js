var allTab = document.getElementById('all');
var phoneCaseTab = document.getElementById('phoneCase');
var chargerTab = document.getElementById('charger');
var powerBankTab = document.getElementById('powerBank');
var allCollection = document.getElementById('allCol');
var phoneCaseTabCollection = document.getElementById('phoneCaseCol');
var chargerCollection = document.getElementById('chargerCol');
var powerBankCollection = document.getElementById('powerBankCol');
var searchInp = document.getElementById("search");
allTab.onclick = allTabClick;
phoneCaseTab.onclick = phoneCaseTabClick;
chargerTab.onclick = chargerTabClick;
powerBankTab.onclick = powerBankTabClick;

function allTabClick(){
    allCollection.style.display="grid";
    phoneCaseTabCollection.style.display="none";
    chargerCollection.style.display="none";
    powerBankCollection.style.display="none";
    allCollection.style.gridTemplateColumns='50% 50%';
    allCollection.style.columnGap= '0.5em';
    allCollection.style.rowGap= '1em';
}

function phoneCaseTabClick(){
    allCollection.style.display="none";
    phoneCaseTabCollection.style.display="grid";
    chargerCollection.style.display="none";
    powerBankCollection.style.display="none";
    phoneCaseTabCollection.style.gridTemplateColumns= '50% 50%';
    phoneCaseTabCollection.style.columnGap= '0.5em';
    phoneCaseTabCollection.style.rowGap= '1em';
}

function chargerTabClick(){
    allCollection.style.display="none";
    phoneCaseTabCollection.style.display="none";
    chargerCollection.style.display="grid";
    powerBankCollection.style.display="none";
    chargerCollection.style.gridTemplateColumns= '50% 50%';
    chargerCollection.style.columnGap= '0.5em';
    chargerCollection.style.rowGap= '1em';
}

function powerBankTabClick(){
    allCollection.style.display="none";
    phoneCaseTabCollection.style.display="none";
    chargerCollection.style.display="none";
    powerBankCollection.style.display="grid";
    powerBankCollection.style.gridTemplateColumns= '50% 50%';
    powerBankCollection.style.columnGap= '0.5em';
    powerBankCollection.style.rowGap= '1em';
}
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
var randevuBtn = document.getElementById("randevuBtn");
const cards = document.querySelectorAll(".item");

var allitems = new Array();
allitems.push(item1);
allitems.push(item2);
allitems.push(item3);
allitems.push(item4);
allitems.push(item5);
/* -------------------- functions -------------------- */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function btnClick() {
    item4.removeEventListener("mouseover", item4open);
    let counter = 0;
    while (allitems[counter]){
        allitems[counter].setAttribute("style", "width: 5%");
        allitems[counter++].querySelector(".item .content").style.display = "none";
    }
    item5.querySelector(".item .content").style.display = "block";
    item5.setAttribute("style", "width: 100%;");
    await sleep(1800);
    item4.addEventListener("mouseover", item4open);
}

function item4open() {
    let counter = 0;
    while (allitems[counter]){
        allitems[counter].setAttribute("style", "width: 5%");
        allitems[counter++].querySelector(".item .content").style.display = "none";
    }
    item4.querySelector(".item .content").style.display = "block";
    item4.setAttribute("style", "width: 100%;");
}
/* ---------- ------------------------------- ---------- */
let counter = 0;
while (allitems[counter])
    allitems[counter++].setAttribute("style", "width: 5%");
item1.setAttribute("style", "width: 100%;");

item1.addEventListener("mouseover", any => {
    let counter = 0;
    while (allitems[counter]){
        allitems[counter].setAttribute("style", "width: 5%");
        allitems[counter++].querySelector(".item .content").style.display = "none";
    }
    item1.querySelector(".item .content").style.display = "block";
    item1.setAttribute("style", "width: 100%;");
});

item2.addEventListener("mouseover", any => {
    let counter = 0;
    while (allitems[counter]){
        allitems[counter].setAttribute("style", "width: 5%");
        allitems[counter++].querySelector(".item .content").style.display = "none";
    }
    item2.querySelector(".item .content").style.display = "block";
    item2.setAttribute("style", "width: 100%;");
});

item3.addEventListener("mouseover", any => {
    let counter = 0;
    while (allitems[counter]){
        allitems[counter].setAttribute("style", "width: 5%");
        allitems[counter++].querySelector(".item .content").style.display = "none";
    }
    item3.querySelector(".item .content").style.display = "block";
    item3.setAttribute("style", "width: 100%;");
});

item4.addEventListener("mouseover", item4open);

item5.addEventListener("mouseover", any => {
    let counter = 0;
    while (allitems[counter]){
        allitems[counter].setAttribute("style", "width: 5%");
        allitems[counter++].querySelector(".item .content").style.display = "none";
    }
    item5.querySelector(".item .content").style.display = "block";
    item5.setAttribute("style", "width: 100%;");
});

randevuBtn.addEventListener("click", btnClick);

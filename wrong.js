/* 1 */
const logoTxt = document.querySelector('.logo-text');
console.log(logoTxt);
logoTxt.style.color = "#384241";

/* 2 */
const header = logoTxt.parentElement;
header.style.justifyContent = "flex-start";

/* 3 */
header.style.borderColor = "lightgray";

/* 4 */
const h1 = document.getElementById('recipe-name');
h1.innerText = "Frozen Cheescake";

/* 5 */
const timeContainer = document.querySelector(".time-container");
timeContainer.children[0].classList.add('material-icons');

/* 6 */
timeContainer.children[1].innerText = "60+ min";

/* 7 */
const img = document.querySelector(".image-container img");
img.src = "assets/frozen-cheesecake-slice.jpg";

/* 8 */
const ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "#f9f9f9";

/* 9 */
const listBottom = document.querySelector(".ingredients-list-bottom");
// Remove text
listBottom.removeChild(listBottom.children[0]);

// Create first li
const first = document.createElement('li');
first.innerText = "15st digistivetex";

// Create second li
const second = document.createElement("li");
second.innerText = "Lite smör";

// Append elements
listBottom.append(first);
listBottom.append(second);

/* 10 */
const listPaste = document.querySelector(".ingredients-list-paste");
listPaste.children[2].innerText = "3tsk vaniljsocker";

/* 11 */
const lastItem = document.createElement('li');
lastItem.innerText = "400g naturell philadelphiaost";
listPaste.append(lastItem);

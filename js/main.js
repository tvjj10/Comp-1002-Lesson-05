const items = document.querySelectorAll(".price");
const total = document.querySelector("#total");

// let sum = 0;
// for (const item of items){
//     sum = sum + Number(item.textContent);
// }
// Math.round(sum)
// total.textContent = Math.round(sum * 100)/100;

const val = Array.from(items).reduce(sum, 0);
total.textContent = Math.round(val * 100) / 100;

function sum (accum, ele) {
    const eleVal = Number(ele.textContent) || 0;

    return accum + eleVal;
}
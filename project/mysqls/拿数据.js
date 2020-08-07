// 获取任意范围随机数
function randomNumber(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}

let oLi = document.querySelectorAll(".product-item");
let arr = [];

for (let item of oLi) {
  let imgUrl = item.querySelector(".item-link img")
    ? item.querySelector(".item-link img")
    : "";
  let title = item.querySelector(".item-name");
  let price = item.querySelector(".price") ? item.querySelector(".price") : "";
  let salesVolume = randomNumber(10, 10000);
  let evaluate = item.querySelector(".comment")
    ? item.querySelector(".comment")
    : "";

  let obj = {};
  obj.imgUrl = imgUrl.src;
  obj.title = title.innerText;
  obj.price = price.innerText.slice(1);
  obj.salesVolume = salesVolume;
  obj.evaluate = Number(evaluate.innerText.replace(/[^0-9]/gi, ""));

  arr.push(obj);
}

JSON.stringify(arr);

const addbtn = document.getElementById('addbtn');
const counting = document.getElementById('number');
const deletebtn = document.getElementById('deletebtn');

addbtn.addEventListener("click", function () {
  if (counting.innerHTML < 20) {
      counting.innerHTML = addzero(+counting.innerHTML + 1);
  }
});

deletebtn.addEventListener("click", function () {
  if (counting.innerHTML > 1) {
      counting.innerHTML = addzero(counting.innerHTML - 1);
  }
});

function addzero(num) {
  return num < 10 ? "0" + num : num;
}




// navtabs
let imgs = document.getElementById("images");
  let change1 = document.getElementById("change1");
  let change2 = document.getElementById("change2");
  let change3 = document.getElementById("change3");
  let change4 = document.getElementById("change4");
  let change5 = document.getElementById("change5");
  let change6 = document.getElementById("change6");
  let change7 = document.getElementById("change7");
  let change8 = document.getElementById("change8");
  let change9 = document.getElementById("change9");
  let change10 = document.getElementById("change10");
  change1.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/wSfkS5y/Hugh-left-big-img.png";

  });
  change2.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/gtWwVLm/Rambo-left-big-img-2.png";

  });
  change3.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/Yy21NX4/Albert-left-big-img-3.png";

  });
  change4.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/nmWY2m6/Prince-left-big-img-4.png";

  });
  change5.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/vzgkzNv/Royals-left-big-img-5.png";

  });
  change6.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/RQgJvBp/right-side-big-1.png";

  });
  change7.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/XxY0bXJ/right-side-big-2.png";

  });
  change8.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/wzxmH82/right-side-big-3.png";

  });
  change9.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/kc3CML8/right-side-4-big.png";

  });
  change10.addEventListener("click", () => {
    imgs.src =
      "https://i.ibb.co/wSfkS5y/Hugh-left-big-img.png";

  });
 

  document.body.querySelector(".change1").click();
 
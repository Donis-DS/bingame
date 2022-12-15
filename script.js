const controls1 = document.querySelectorAll(".controljs1");
let currentItem1 = 1;
const items1 = document.querySelectorAll(".itempjs1");
const maxItems1 = items1.length;

controls1.forEach((control) => {
  control.addEventListener("click", (e) => { 
    isLeft = e.target.classList.contains("arrow-leftjs1");

    if (isLeft) {
      currentItem1 -= 1;
    } else {
      currentItem1 += 1;
    }

    if (currentItem1 >= maxItems1 - 1) {
      currentItem1 = 1;
    }

    if (currentItem1 < 0) {
      currentItem1 = maxItems1 - 1;
    }

    items1.forEach((item) => item.classList.remove("current-itemjs1"));

    items1[currentItem1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items1[currentItem1].classList.add("current-itemjs1");
    items1[currentItem1 - 1].classList.add("current-itemjs1");
    items1[currentItem1 + 1].classList.add("current-itemjs1");
    
  });
});


const controls2 = document.querySelectorAll(".controljs2");
let currentItem2 = 1;
const items2 = document.querySelectorAll(".itempjs2");
const maxItems2 = items2.length;

controls2.forEach((control) => {
  control.addEventListener("click", (e) => { 
    isLeft = e.target.classList.contains("arrow-leftjs2");

    if (isLeft) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 1;
    }

    if (currentItem2 >= maxItems2 - 1) {
      currentItem2 = 1;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item) => item.classList.remove("current-itemjs2"));

    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items2[currentItem2].classList.add("current-itemjs2");
    items2[currentItem2 - 1].classList.add("current-itemjs2");
    items2[currentItem2 + 1].classList.add("current-itemjs2");
    
  });
});


const controls3 = document.querySelectorAll(".controljs3");
let currentItem3 = 1;
const items3 = document.querySelectorAll(".itempjs3");
const maxItems3 = items3.length;

controls3.forEach((control) => {
  control.addEventListener("click", (e) => { 
    isLeft = e.target.classList.contains("arrow-leftjs3");

    if (isLeft) {
      currentItem3 -= 1;
    } else {
      currentItem3 += 1;
    }

    if (currentItem3 >= maxItems3 - 1) {
      currentItem3 = 1;
    }

    if (currentItem3 < 0) {
      currentItem3 = maxItems3 - 1;
    }

    items3.forEach((item) => item.classList.remove("current-itemjs3"));

    items3[currentItem3].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items3[currentItem3].classList.add("current-itemjs3");
    items3[currentItem3 - 1].classList.add("current-itemjs3");
    items3[currentItem3 + 1].classList.add("current-itemjs3");
    
  });
});


const controls4 = document.querySelectorAll(".controljs4");
let currentItem4 = 1;
const items4 = document.querySelectorAll(".itempjs4");
const maxItems4 = items4.length;

controls4.forEach((control) => {
  control.addEventListener("click", (e) => { 
    isLeft = e.target.classList.contains("arrow-leftjs4");

    if (isLeft) {
      currentItem4 -= 1;
    } else {
      currentItem4 += 1;
    }

    if (currentItem4 >= maxItems4 - 1) {
      currentItem4 = 1;
    }

    if (currentItem4 < 0) {
      currentItem4 = maxItems4 - 1;
    }

    items4.forEach((item) => item.classList.remove("current-itemjs4"));

    items4[currentItem4].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items4[currentItem4].classList.add("current-itemjs4");
    items4[currentItem4 - 1].classList.add("current-itemjs4");
    items4[currentItem4 + 1].classList.add("current-itemjs4");
    
  });
});


let btn = document.querySelectorAll(".button");
let arrBtn = Array.from(btn);
let modal=document.querySelector(".modal");

for (i = 0; i < arrBtn.length; ++i) {
    arrBtn[i].addEventListener("click", () => {
        modal.classList.toggle("modal--active");
    })
}

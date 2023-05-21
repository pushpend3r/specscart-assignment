const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; ++i) {
  cards[i].addEventListener("click", () => {
    // remove active class from other card
    for (let i = 0; i < cards.length; ++i) {
      cards[i].classList.remove("active");
    }
    cards[i].classList.add("active");
  });
}

function slide() {
  let slideValue = document.getElementById("slider").value;
  document.getElementById("anti-glare-image-active").style.clipPath =
    "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

// monkey event listeners
function showMonkey() {
  let monkeyElement = document.getElementById("monkey");
  monkeyElement.style.display = "block";
}

function hideMonkey() {
  let monkeyElement = document.getElementById("monkey");
  monkeyElement.style.display = "none";
}

// clouds/rain event listener
let cloudsElement = document.getElementById("clouds");
let rainElement = document.getElementById("rain");

cloudsElement.addEventListener("mouseover", function () {
  rainElement.style.display = "block";
});

cloudsElement.addEventListener("mouseleave", function () {
  rainElement.style.display = "none";
});

// banana event listener
let bananaElement = document.getElementById("banana");

bananaElement.addEventListener("mouseover", function (event) {
  bananaElement.style.transform = "translateY(300px)";
  bananaElement.style.transition = "transform 0.5s ease-in";
});

// border color event listener
let colorSelectorElement = document.getElementById("colors");
let updateButton = document.getElementById("");
let jungleImage = document.getElementById("jungle");

function updateBorderColor() {
  console.log(colorSelectorElement.value);
  jungleImage.style.borderColor = colorSelectorElement.value;
}

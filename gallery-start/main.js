const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Present
const presentBtn = document.querySelector(".present");

/* Declaring the array of image filenames */
const filenames = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];
/* Declaring the alternative text for each image file */
const alternative = {
  1: "Picture one",
  2: "Picture two",
  3: "Picture three",
  4: "Picture four",
  5: "Picture five",
};
/* Looping through images */
for (let i = 0; i < filenames.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", filenames[i]);
  newImage.setAttribute("alt", alternative[i + 1]);
  newImage.addEventListener("click", () =>
    updateSrcAlt(filenames[i], alternative[i + 1])
  );
  thumbBar.appendChild(newImage);
}

function updateSrcAlt(src, alt) {
  displayedImage.src = src;
  displayedImage.alt = alt;
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Light";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Dark";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

// Present function
presentBtn.addEventListener("click", () => {
  let i = 0;

  setInterval(() => {
    if (i < filenames.length) {
      updateSrcAlt(filenames[i], alternative[i + 1]);
      i++;
    } else if (i === filenames.length - 1) {
      i = 0;
    }
  }, 700);
});

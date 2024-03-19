const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currActive = 1;

prev.addEventListener("click", () => {
  currActive--;
  console.log(currActive);
  if (currActive < 1) {
    currActive = 1;
  }
  if (currActive === 1) {
    prev.disabled = true;
  } else if (currActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  update();
});

next.addEventListener("click", () => {
  currActive++;
  console.log(currActive);
  if (currActive > circles.length) {
    currActive = circles.length;
  }

  if (currActive === 1) {
    prev.disabled = true;
  } else if (currActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }

    const actives = document.querySelectorAll("active");
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  });
};

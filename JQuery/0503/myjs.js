window.onload = function () {
  const sounds = document.querySelectorAll("audio");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const title = document.querySelector(".title");
  const colors = ["red", "orange", "yellow", "green", "blue", "plum"];

  sounds.forEach(function (soundFile) {
    soundFile.onended = function () {
      visual.innerHTML = "";
      title.innerHTML = "";
    };
  });

  pads.forEach(function (pad, index) {
    pad.addEventListener("click", function () {
      sounds.forEach(function (inx) {
        inx.pause();
      });
      if (sounds[index]) {
        sounds[index].currentTime = 0;
        sounds[index].play();
        const strArray = sounds[index].src.split("sound/");
        title.innerHTML = strArray[1].split(".")[0];
      }
      createBubbles(index);
    });
  });

  const createBubbles = function (index) {
    visual.innerHTML = "";
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.top = "300px";
    bubble.style.animation = "animation 2000ms linear infinite both";
  };
};

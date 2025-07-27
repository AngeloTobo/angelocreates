
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const hour = parseInt(new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    hour: "2-digit", hour12: false
  }));

  let bg;
  if (hour >= 6 && hour < 12) bg = "linear-gradient(to right, #001F3F, #0074D9)";
  else if (hour >= 12 && hour < 18) bg = "linear-gradient(to right, #2E8B57, #3CB371)";
  else if (hour >= 18 && hour < 21) bg = "linear-gradient(to right, #FFA500, #FF4500)";
  else bg = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
  document.body.style.background = bg;
});

// glitter trail
document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.style.position = "fixed";
  dot.style.width = "4px";
  dot.style.height = "4px";
  dot.style.borderRadius = "50%";
  dot.style.background = "rgba(255,255,255,0.3)";
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  dot.style.pointerEvents = "none";
  dot.style.zIndex = "9999";
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 300);
});


document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.width = "3px";
  sparkle.style.height = "3px";
  sparkle.style.borderRadius = "50%";
  sparkle.style.background = "rgba(255,255,255,0.4)";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkle.style.zIndex = 9999;
  sparkle.style.pointerEvents = "none";
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 400);
});

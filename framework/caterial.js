/* Caterial
 * 
 * Made by TheClashFruit a member of ThatCakeID.
 *
 * Copyright 2021 ThatCakeID
 * Licensed Under Apache-2.0 License
 */

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.pageX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.pageY - button.offsetTop - radius}px`;
  circle.classList.add("mr-ripple");

  const ripple = button.getElementsByClassName("mr-ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}

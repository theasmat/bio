// Example: Display an alert when a link is clicked
document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", () => {
    alert(`You clicked on ${link.textContent}`);
  });
});

// Function to open a URL in a new window
function openLink(url) {
  if (url) {
    window.open(url, "_blank");
  }
}

// Attach event listeners to all buttons with the class 'price-btn' and 'real-btn'
document.querySelectorAll(".price-btn, .real-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    openLink(url);
  });
});

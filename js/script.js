// Function to open a URL in a new window
function openLink(url) {
  if (url) {
    window.open(url, "_blank");
  }
}

// Attach event listeners to all buttons with the class 'btn'
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    openLink(url);
  });
});

// Simulate loading screen animation
setTimeout(() => {
  document.querySelector(".loading-screen").style.display = "none";
  document.querySelector(".container").style.display = "block";
}, 2000);

setTimeout(() => {
  const debugIcon = document.getElementById("debug");

  // Get the position of the debug icon
  const rect = debugIcon.getBoundingClientRect();
  const cursor = document.createElement("i");
  cursor.classList.add("fake-cursor", "bi", "bi-hand-index-fill");
  document.body.appendChild(cursor);

  // Position the fake cursor at the starting position (slightly offset from the top-left of the screen)
  cursor.style.position = "absolute";
  cursor.style.left = `20px`;
  cursor.style.top = `20px`;

  // Move the cursor to the debug icon position
  setTimeout(() => {
    cursor.style.left = `${rect.left + rect.width / 2}px`; // Center it horizontally on the icon
    cursor.style.top = `${rect.top + rect.height / 2}px`; // Center it vertically on the icon

    // Simulate a click animation
    setTimeout(() => {
      debugIcon.classList.add("click-animation");

      // Remove the cursor after the animation
      setTimeout(() => {
        document.body.removeChild(cursor);
        debugIcon.classList.remove("click-animation");
      }, 300);
    }, 400);
  }, 200);
}, 1100);

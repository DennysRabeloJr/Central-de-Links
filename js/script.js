function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // Se tiver light mode
    img.setAttribute("src", "./assets/avatar_light.png")
  } else {
    // Se tiver dark mode
    img.setAttribute("src", "./assets/profile-avatar.png")
  }
}

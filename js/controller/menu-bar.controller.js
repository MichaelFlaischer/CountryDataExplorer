'use strict'

function menuRender() {
  const elNnav = document.querySelector('nav')
  elNnav.innerHTML = `
        <input type="checkbox" id="active" />
        <label for="active" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <div class="nav-container">
          <ul>
            <li><a href="index.html" data-i18n="home">Home</a></li>
          </ul>
        </div>
      `
  // onInitPage() // Initialize translations and styles
}

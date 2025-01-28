const menu_open = document.getElementById('nav-menu-open');
const nav_container = document.getElementById('nav-container');
const nav_logo = document.getElementById('nav-logo');
const nav_close = document.getElementById('nav-close');
const nav_items = document.querySelectorAll('.nav-item');

function mobile_menu_open() {
  nav_logo.style.display = 'none';
  nav_items.forEach((item) => {
    item.style.display = 'flex';
  });
  menu_open.style.display = 'none';
  nav_close.style.display = 'block';
  nav_container.style.justifyContent = 'space-evenly';
}

function mobile_menu_close() {
  nav_logo.style.display = 'block';
  nav_items.forEach((item) => {
    item.style.display = 'none';
  });
  menu_open.style.display = 'block';
  nav_close.style.display = 'none';
  nav_container.style.justifyContent = 'space-between';
}

function adjust_nav() {
  if (window.innerWidth > 600) {
    menu_open.style.display = 'none';
    nav_items.forEach((item) => {
      item.style.display = 'flex';
    });
  } else if (window.innerWidth < 600) {
    menu_open.style.display = 'flex';
    nav_items.forEach((item) => {
      item.style.display = 'none';
    });
  }
}

window.addEventListener('resize', adjust_nav);

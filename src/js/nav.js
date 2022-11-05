function mobileMenu() {
  var navBarNav = document.getElementById("navBarNavMobile");
  var mobileMenu = document.getElementById("mobileMenu");
  var searchForm = document.getElementById("searchForm");
  if (navBarNav.classList.contains('navbr-nav_show')) {
    navBarNav.classList.remove('navbr-nav_show');
    mobileMenu.classList.remove('icon-cross');
    searchForm.style.display = 'none';
  }
  else {
    navBarNav.classList.toggle("navbr-nav_show");
    mobileMenu.classList.toggle('icon-cross');
    searchForm.style.display = 'block';
  }
}

document.querySelectorAll('.toggle-dropdown').forEach(funcDropDown);

function funcDropDown(dropDown) {
  if(dropDown.classList.contains('click-dropdown') === true){
    dropDown.addEventListener('click', function (e) {
      e.preventDefault();        

      if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
        this.parentElement.classList.remove('dropdown-open');
        this.nextElementSibling.classList.remove('dropdown-active');

      } else {
        closeDropdown();
        this.parentElement.classList.add('dropdown-open');
        this.nextElementSibling.classList.add('dropdown-active');
      }
    });
  }
};

window.addEventListener('click', function (e) {
  if (e.target.closest('.navbr-nav__item') === null) {
    closeDropdown();
  }
});

function closeDropdown() {   
  document.querySelectorAll('.navbr-nav__item').forEach(function (container) { 
      container.classList.remove('dropdown-open')
  });
  document.querySelectorAll('.navbr-nav__dropdown').forEach(function (menu) { 
      menu.classList.remove('dropdown-active');
  });
}

document.querySelectorAll('.navbr-nav__dropdown').forEach(function (dropDownList) { 
  dropDownList.onmouseleave = closeDropdown;
});


function mobileMenu() {
  var navBarNav = document.getElementById("navBarNavMobile");
  var mobileMenu = document.getElementById("mMenu");
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
document.addEventListener('DOMContentLoaded', function(){

  // Select all buttons that trigger the search bar
  const allButtons = document.querySelectorAll('.searchBtn');
  // Select the search bar
  const searchBar = document.querySelector('.searchBar');
  // Select the search input field
  const searchInput = document.getElementById('searchInput');
  // Select the close button for the search bar
  const searchClose = document.getElementById('searchClose');

  // Add click event listeners to each search button
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
      // Make the search bar visible
      searchBar.style.visibility = 'visible';
      // Add the 'open' class to animate the search bar
      searchBar.classList.add('open');
      // Set aria-expanded attribute to true for accessibility
      this.setAttribute('aria-expanded', 'true');
      // Focus on the search input field
      searchInput.focus();
    });
  }

  // Add click event listener to the close button
  searchClose.addEventListener('click', function() {
    // Hide the search bar
    searchBar.style.visibility = 'hidden';
    // Remove the 'open' class to hide the search bar with animation
    searchBar.classList.remove('open');
    // Set aria-expanded attribute to false for accessibility
    this.setAttribute('aria-expanded', 'false');
  });

});

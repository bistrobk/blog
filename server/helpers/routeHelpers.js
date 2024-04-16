// Define a function named isActiveRoute that checks if a given route is the current active route
function isActiveRoute(route, currentRoute) {
  // If the given route matches the current route, return 'active', otherwise return an empty string
  return route === currentRoute ? 'active' : '';
}

// Export the isActiveRoute function so that it can be used in other parts of the application
module.exports = { isActiveRoute };

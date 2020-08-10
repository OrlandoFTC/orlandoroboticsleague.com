/**
 * Insert the year after the (c) in the footer.
 */
function updateCopyrightYear() {
  var span = document.getElementById("year");
  span.innerText = (new Date()).getFullYear();
}

// Run the following after the document loads.

updateCopyrightYear();

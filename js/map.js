// Fetch the SVG and insert it into the container
document.addEventListener('DOMContentLoaded', function () {
  // Your existing JS code here
  
  fetch('/trackngo/resources/pics/md.svg')
    .then(res => res.text())
    .then(svg => {
      document.getElementById('svg-container').innerHTML = svg;

      // Once the SVG is loaded, add event listeners to the paths
      const regions = document.querySelectorAll('path.region');

      regions.forEach(region => {
        region.addEventListener('click', () => {
          const regionName = region.dataset.name; // Get the region name from the data-name attribute
          handleRegionClick(); // Open the modal
          handlePathClick(regionName); // Update the modal content with the region name
        });
      });
    });
});

// -----------------------------------------------------------------------------------------------------------------------------------

// Function to handle region click
function handleRegionClick() {

  // Show the region card
// Show the modal with transition
document.getElementById('interactiveModal').classList.remove('d-none');

// Apply the transition to the modal
setTimeout(() => {
  document.getElementById('interactiveModal').classList.add('show');
}, 50); // small delay to ensure class is added after removing d-none
  document.getElementById('mapTitle').classList.add('d-none');

  document.querySelector('#SectionTitle2 .badge').classList.add('d-none');

}

// -----------------------------------------------------------------------------------------------------------------------------------

function handlePathClick(regionName) {
console.log(regionName);
  // Find the HTML element in the modal where you want to update the name
  const modalElement = document.getElementById('regionID'); // Replace with the actual ID of your modal element

  // Update the content of the modal element with the path name
  modalElement.textContent = `${regionName}`;
}

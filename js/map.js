document.addEventListener('DOMContentLoaded', function () {
  const isGitHubPages = location.hostname.includes('github.io');
  const repoName = isGitHubPages ? location.pathname.split('/')[1] : '';
  const filePath = `${isGitHubPages ? '/' + repoName : ''}/resources/pics/md.svg`;

  fetch(filePath)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.text();
    })
    .then(svg => {
      document.getElementById('svg-container').innerHTML = svg;

      const regions = document.querySelectorAll('path.region');
      regions.forEach(region => {
        region.addEventListener('click', () => {
          const regionName = region.dataset.name;
          handleRegionClick();
          handlePathClick(regionName);
        });
      });
    })
    .catch(err => {
      console.error('Error loading SVG:', err);
      document.getElementById('svg-container').textContent = 'Failed to load SVG';
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

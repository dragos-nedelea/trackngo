// This function fetches data from your .NET API
function fetchProducts() {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        const products = response.data;
        console.log("Products received:", products);
  
        // TODO: Use the 'products' array to populate your HTML
      })
      .catch(error => {
        console.error("Failed to connect to the API:", error);
      });
  }
  
  // Run on page load
  document.addEventListener("DOMContentLoaded", fetchProducts);
  
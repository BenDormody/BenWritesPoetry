// Sample collections data (you can modify this later)
const collections = [
  { title: "With Zoo as Background", file: "collections/zoo.html" },
  { title: "Urban Rhythms", file: "collectionsurban.html" },
  { title: "Love and Loss", file: "love.html" },
];

// Function to populate the collections list
function populateCollections() {
  const collectionsList = document.getElementById("collections-list");
  collections.forEach((collection) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = collection.file;
    a.textContent = collection.title;
    li.appendChild(a);
    collectionsList.appendChild(li);
  });
}

// Call the function when the page loads
window.onload = populateCollections;

// Functions for collection pages
function initializeCollection() {
  let currentPage = 0;
  const pages = document.querySelectorAll(".page");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageNumberDisplay = document.getElementById("pageNumberDisplay");

  function updatePageNumberDisplay() {
    pageNumberDisplay.textContent = currentPage + 1; // Display 1-based index
  }

  function updateButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
  }

  function changePage(direction) {
    pages[currentPage].classList.remove("active");
    currentPage += direction;
    pages[currentPage].classList.add("active");
    updateButtons();
    updatePageNumberDisplay();
  }

  // Event listeners for the buttons
  prevBtn.addEventListener("click", () => changePage(-1));
  nextBtn.addEventListener("click", () => changePage(1));

  // Initialize button states
  updateButtons();
  updatePageNumberDisplay();
}

// Check if we're on a collection page and initialize if so
if (document.querySelector(".book")) {
  initializeCollection();
}

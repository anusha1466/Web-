const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// Load saved content
editor.value = localStorage.getItem("markdown") || "";

// Update preview
function updatePreview() {
  const markdownText = editor.value;
  preview.innerHTML = marked.parse(markdownText);

  // Save to localStorage
  localStorage.setItem("markdown", markdownText);
}

// Event listener
editor.addEventListener("input", updatePreview);

// Initial render
updatePreview();
document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".sidebar a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      loadPage(page);
    });
  });

  // Default page
  loadPage("overview");
});

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("mainContent").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("mainContent").innerHTML =
        "<p>Error loading page</p>";
    });
}

if (userRole === "admin") {
  document.getElementById("sidebar").insertAdjacentHTML(
    "beforeend",
    `<a href="#" data-page="admin">Admin Panel</a>`
  );
}

// ===============================
// SIDEBAR TOGGLE LOGIC
// ===============================
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

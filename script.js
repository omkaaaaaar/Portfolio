function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ✅ GitHub Contribution Calendar via working proxy (cors-anywhere)
GitHubCalendar(".calendar", "omkaaaaaar", {
  responsive: true,
  proxy(username) {
    return fetch(`https://cors.bridged.cc/https://github.com/users/${username}/contributions`)
      .then((res) => res.text());
  },
});

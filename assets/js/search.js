let posts = [];

fetch("/search.json")
  .then(response => response.json())
  .then(data => posts = data);

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

input.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  results.innerHTML = "";

  if (query.length < 2) return;

  const matches = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query)
  );

  matches.slice(0, 10).forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${post.url}">${post.title}</a>`;
    results.appendChild(li);
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    // Load posts from Jekyll JSON data
    fetch("/search.json")
        .then(response => response.json())
        .then(posts => {
            searchInput.addEventListener("keyup", function () {
                const query = this.value.toLowerCase();
                searchResults.innerHTML = "";

                if (query.length < 2) return; // Start searching after 2 characters

                const results = posts.filter(post => post.title.toLowerCase().includes(query));

                results.forEach(post => {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = post.url;
                    a.textContent = post.title;
                    li.appendChild(a);
                    searchResults.appendChild(li);
                });
            });
        })
        .catch(error => console.error("Error loading search data:", error));
});

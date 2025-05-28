document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cardContainer");

  // movie.html 에서만 동작
  if (container) {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5317c72646ca9337dc6d1e74095e4fc7&language=ko-KR&page=1"
    )
      .then((res) => res.json())
      .then((posts) => {
        posts.results.forEach((movie) => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            <div class="overlay">
              <h4>${movie.title}</h4>
              <p>⭐ ${movie.vote_average}</p>
              <p>📅 ${movie.release_date} 개봉</p>
            </div>
          `;
          container.appendChild(card);
        });
      });
  }

  // index.html 에서 home 버튼 클릭 시 새로고침
  const homeBtn = document.getElementById("home");
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});

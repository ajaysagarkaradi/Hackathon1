const reposBtn = document.getElementById("search-btn");

reposBtn.onclick = requestUserRepos;

function requestUserRepos() {
  const username = document.getElementById("username").value;
  const xhr = new XMLHttpRequest();
  const url = `https://api.github.com/users/${username}/repos`;
  xhr.open("GET", url);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    for (let i in data) {
      let ul = document.getElementById("userRepos");
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = `
            <img src="${data[i].avatar_url}" />
            <p>Repo: ${data[i].name}</p>
            <p>stargazers_count: ${data[i].stargazers_count}</p>
            <p>forks_count: ${data[i].forks_count}</p>
            <p>URL: <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            `;
      ul.appendChild(li);
    }
  };
  xhr.send();
}
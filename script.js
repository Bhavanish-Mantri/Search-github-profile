const inputUser = document.querySelector(".input_user");
const btnSubmit = document.querySelector(".btn_submit");

const userImg = document.querySelector(".user_img");
const userName = document.querySelector(".user_name h1");
const followers = document.querySelector(".followers_ span");
const following = document.querySelector(".follow_ span");
const repoDetails = document.querySelector(".repo_details");

function resetUI() {
    userImg.innerHTML = `<img src="images/github_logo.png">`;
    userName.textContent = "Not Found";
    followers.textContent = "-";
    following.textContent = "-";
    repoDetails.innerHTML = "";
}

async function fetchUser(username) {
    try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("User not found");

        const userData = await userRes.json();

        userImg.innerHTML = `<img src="${userData.avatar_url}">`;
        userName.textContent = userData.login;
        followers.textContent = userData.followers;
        following.textContent = userData.following;

        fetchRepos(username);
    } catch (err) {
        alert("User not found");
        resetUI();
    }
}

async function fetchRepos(username) {
    try {
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await repoRes.json();

        if (!repos.length) {
            repoDetails.innerHTML = `<div class="item_"><div class="repo_name">No Repositories</div></div>`;
            return;
        }

        repoDetails.innerHTML = repos
            .slice(0, 6)
            .map(repo => `
                <div class="item_">
                    <div class="repo_name">${repo.name}</div>
                    <div class="repo_details_">
                        <div><i class="fa fa-star-o"></i> ${repo.watchers}</div>
                        <div><i class="fa fa-code-fork"></i> ${repo.forks}</div>
                        <div><i class="fa fa-file"></i> ${repo.size}kb</div>
                    </div>
                </div>
            `)
            .join("");
    } catch {
        repoDetails.innerHTML = "";
    }
}

function handleSearch() {
    const username = inputUser.value.trim();

    if (!username) {
        alert("Please enter a GitHub username");
        inputUser.focus();
        return;
    }

    fetchUser(username);
    inputUser.value = "";
}

btnSubmit.addEventListener("click", handleSearch);

inputUser.addEventListener("keyup", (e) => {
    if (e.key === "Enter") handleSearch();
});

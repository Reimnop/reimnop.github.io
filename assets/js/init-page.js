$.getJSON("https://api.github.com/users/Reimnop/repos", function(repos, status) {
    let content = document.getElementById("repo-area");
    for (let i = 0; i < repos.length; i++) {
        let msec = Date.parse(repos[i].pushed_at);
        let date = new Date(msec);

        content.innerHTML += 
            `<a class="repo-btn" href="` + repos[i].html_url + `">
                <div class="repo-btn-line"></div>
                <div class="repo-btn-name">` + repos[i].name + `</div>
                <div class="repo-btn-description">` + (repos[i].description == null ? "No description" : repos[i].description) + `</div>
                <div class="repo-btn-last-commit">Last commit: ` + date.ddmmyyyy() + `</div>
            </a>`
    }
});

Date.prototype.ddmmyyyy = function() {
    let d = this.getDate();
    let m = this.getMonth() + 1;

    let day = (d > 9 ? "" : "0") + d;
    let month = (m > 9 ? "" : "0") + m;

    return day + "/" + month + "/" + this.getFullYear();
}
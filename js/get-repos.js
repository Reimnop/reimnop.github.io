$.getJSON("https://api.github.com/users/Reimnop/repos", function(repos, status) {
    let content = document.getElementsByClassName("content")[0];
    for (let i = 0; i < repos.length; i++) {
        let msec = Date.parse(repos[i].pushed_at);
        let date = new Date(msec);

        content.innerHTML += 
            `<a href="` + repos[i].html_url + `" class="repo-button">
                <div class="repo-red-line"></div>
                <div class="repo-text-container">
                    <b class="repo-name">` + repos[i].name + `</b>
                    <i class="repo-desc">` + (repos[i].description == null ? "No description" : repos[i].description) + `</i>
                    <i class="repo-last-commit">Last commit: ` + date.ddmmyyyy() + `
                </div>
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
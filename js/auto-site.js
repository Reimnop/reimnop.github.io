let pages = [
    ["About me!", "index.html"],
    ["LeaderEngine", "leaderengine.html"],
    ["UnImage Object v2", "unimageobjectv2.html"],
    ["PA Animator", "paanimator.html"],
    ["PA Prefab Toolkit", "paprefabtoolkit.html"],
    ["All repositories", "allrepos.html"],
    ["ol6", "ol6.html"],
    ["lefil", "lefil.html"]
];

let sidebar = document.getElementById("sidebar");
for (let i = 0; i < pages.length; i++) {
    let page = pages[i];
    sidebar.innerHTML +=
        `<a class="sidebar-button" href="` + page[1] + `">
            <div class="red-line-sidebar-btn" ></div>
            <div class="scramble">` + page[0] + `</div>
        </a>`;
}
let currentPagePath = window.location.pathname;
let currentPageIndex = 0;
for (let i = 0; i < pages.length; i++) {
    if (currentPagePath.endsWith(pages[i][1])) {
        currentPageIndex = i;
        break;
    }
}
document.title = pages[currentPageIndex][0] + " | Reimnop";
document.getElementById("header-text").innerHTML = pages[currentPageIndex][0];

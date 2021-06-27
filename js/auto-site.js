let pages = [
    ["About me!", "/index.html"],
    ["LeaderEngine", "/leaderengine.html"],
    ["UnImage Object v2", "/unimageobjectv2.html"],
    ["PA Animator", "/paanimator.html"],
    ["PA Prefab Toolkit", "/paprefabtoolkit.html"]
];

function init() {
    let sidebar = document.getElementById("sidebar");
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        sidebar.innerHTML += "<div class=\"sidebar-button\" onclick=\"window.location.href = '" + page[1] + "';\"><div class=\"red-line-sidebar-btn\" ></div><div class=\"sidebar-text\"><span>" + page[0] + "</span></div></div>";
    }

    let indexStr = document.getElementsByTagName("idx")[0];
    let index = parseInt(indexStr.innerHTML);

    document.title = pages[index][0] + " | Reimnop";
    document.getElementById("header-text").innerHTML = pages[index][0];
}
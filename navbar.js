
(function () {

    window.onload = function () {
        navBar();
    };
    
    function navBar() {
        let a = document.createElement("a");
        a.classList.add("category");
        a.innerHTML = "Bullet";
        a.href = "";
        document.getElementsByClassName("side-navigation")[0].appendChild(a);
        let b = document.createElement("section");
        b.classList.add("links");
        let c = document.createElement("a");
        c.href = "ARUW_BulletLife.html";
        c.innerHTML = "BulletLife";
        b.appendChild(c);
        document.getElementsByClassName("side-navigation")[0].appendChild(b);
    }

})();


(function () {

    const HTML = `<!--Lol it doesn't like it when I don't use an href, so I'll just make it redirect to the current page-->
            <!--Bullet-->
            <a href="" class="category">Bullet</a>
            <section class="links">
                <a href="ARUW_BulletLife.html"> BulletLife</a>
            </section>
            <!--Camera-->
            <a href="" class="category">Camera</a>
            <section class="links">
                <a href="ARUW_CameraControl.html"> CameraControl</a>
            </section>
            <!--Field-->
            <a href="" class="category">Field</a>
            <section class="links">
                <a href="ARUW_CoolingBuffZone.html"> CoolingBuffZone</a>
                <a href="ARUW_DefenseBuffZone.html"> DefenseBuffZone</a>
                <a href="ARUW_Refill17MMZone.html"> Refill17MMZone</a>
                <a href="ARUW_Refill42MMZone.html"> Refill42MMZone</a>
                <a href="ARUW_Regeneration.html"> Regeneration</a>
            </section>
            <!--Managers-->
            <a href="" class="category">Managers</a>
            <section class="links">
                <a href="ARUW_GameManager.html"> GameManager</a>
                <a href="ARUW_TankManager.html"> TankManager</a>
            </section>
            <!--Menu-->
            <a href="" class="category">Menu</a>
            <section class="links">
                <a href="ARUW_HostSettings.html"> HostSettings</a>
                <a href="ARUW_MainMenu.html"> MainMenu</a>
            </section>
            <!--Other-->
            <a href="" class="category">Other</a>
            <section class="links">
                <a href="ARUW_BaseBehavior.html"> BaseBehavior</a>
                <a href="ARUW_CustomNetworkManager.html"> CustomNetworkManager</a>
                <a href="ARUW_DynamicCamera.html"> DynamicCamera</a>
                <a href="ARUW_Player.html"> Player</a>
                <a href="ARUW_PlayerEntry.html"> PlayerEntry</a>
                <a href="ARUW_Store.html"> Store</a>
                <a href="ARUW_SyncablePlayer.html"> SyncablePlayer</a>
                <a href="ARUW_Utils.html"> Utils</a>
            </section>
            <!--Tank-->
            <a href="" class="category">Tank</a>
            <section class="links">
                <a href="ARUW_TankHealth.html"> TankHealth</a>
                <a href="ARUW_TankMovement.html"> TankMovement</a>
                <a href="ARUW_TankNetworking.html"> TankNetworking</a>
                <a href="ARUW_TankShooting.html"> TankShooting</a>
                <a href="ARUW_TankXP.html"> TankXP</a>
            </section>
            <!--TargetPlate-->
            <a href="" class="category">TargetPlate</a>
            <section class="links">
                <a href="ARUW_RobotDamage.html"> RobotDamage</a>
            </section>
            <!--UI-->
            <a href="" class="category">UI</a>
            <section class="links">
                <a href="ARUW_Billboard.html"> Billboard</a>
                <a href="ARUW_PlayerHealthBar.html"> PlayerHealthBar</a>
                <a href="ARUW_TestingUI.html"> TestingUI</a>
                <a href="ARUW_UIDirectionControl.html"> UIDirectionControl</a>
            </section>
        </div>
`;
    window.onload = function () {
        navBarStyling();
        navBar();
    };

    function navBar() {
        document.querySelector(".side-navigation").innerHTML = HTML;
    }

    function navBarStyling() {
        let h = window.innerHeight;
        let body = document.body,
            html = document.documentElement;

        let height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        document.querySelector(".side-navigation").style.height = (height - 55) + "px";
    }

})();

document.addEventListener("DOMContentLoaded", function () {
    const snowflakeContainer = document.querySelector(".snowflakes");

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

        snowflakeContainer.appendChild(snowflake);

        snowflake.addEventListener("animationend", function () {
            snowflake.remove();
            createSnowflake();
        });
    }

    function generateSnowflakes() {
        for (let i = 0; i < 25; i++) {
            createSnowflake();
        }
    }

    generateSnowflakes();


})
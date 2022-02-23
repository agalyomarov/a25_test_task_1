document.addEventListener("DOMContentLoaded", () => {
    let start = Math.ceil(Date.now() / 1000);
    const alert_window = document.querySelector(".alert-window");
    document.querySelector("body").addEventListener("mouseleave", (e) => {
        if (e.clientY < 0 && Math.ceil(Date.now() / 1000) > start + 5) {
            alert_window.style.opacity = "1";
            alert_window.style.visibility = "visible";
            alert_window.querySelector(".body .content").style.opacity = "1";
            alert_window.querySelector(".body .content").style.transform =
                "perspective(600px) translate(0px, 0%) rotateX(0deg)";
        }
    });

    document.querySelector(".close-alert").addEventListener("click", () => {
        closeAlert();
    });
    document.querySelector(".bg-alert-window").addEventListener("click", () => {
        closeAlert();
    });

    function closeAlert() {
        alert_window.querySelector(".body .content").style.transform =
            "perspective(600px) translate(0px, -100%) rotateX(45deg)";
        alert_window.querySelector(".body .content").style.opacity = "0";
        alert_window.style.opacity = "0";
        alert_window.style.visibility = "hidden";
        start = Math.ceil(Date.now() / 1000);
    }
});
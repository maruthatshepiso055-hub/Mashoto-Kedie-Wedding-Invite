const guests = [
    "tshepiso marutha",
    "paul makgoba",
    "dipuo makgoba",
    "morongwa ntlemo",
    "morton ntlemo",
    "leons mathibela",
    "gadifeli mathibela",
    "nthabiseng marutha",
    "tlogedi chokwe",
    "mpho mokgosi",
    "reamogetse gunene",
    "namadzavho rakhunwana",
    "winnifred maahlo",
    "junior maponya",
    "tshegofatso motloutsi",
    "adam mohale",
    "keneiloe ramalepe",
    "martha bila",
    "phindile zuma",
    "mr zuma",
    "lindokuhle gwala",
    "mr gwala",
    "jennifer msomi",
    "jennifer's partner",
    "siphesihle kubheka",
    "lindiwe nkosi",
    "california makhubela",
    "selaelo serumela",
    "onalenna makgoba",
    "thabiso mvelase"
];

// ==========================
// LOGIN PAGE
// ==========================

function checkPassword() {

    const password = document
        .getElementById("guestPassword")
        .value
        .trim()
        .toLowerCase();

    if (guests.includes(password)) {

        window.location.href =
            "invitation.html?guest=" +
            encodeURIComponent(password);

    } else {

        alert("Invitation not found.");
    }
}

// ==========================
// PAGE LOAD
// ==========================

window.onload = function () {

    // Show guest name
    const params =
        new URLSearchParams(window.location.search);

    const guest =
        params.get("guest");

    if (guest && document.getElementById("guestName")) {

        const formatted =
            guest.charAt(0).toUpperCase() +
            guest.slice(1).toLowerCase();

        document.getElementById("guestName").innerHTML =
            "Dear " + formatted + ",";
    }

    // Video end event
    const video =
        document.getElementById("weddingVideo");

    const videoIntro =
        document.getElementById("videoIntro");

    const invitation =
        document.getElementById("invitationContainer");

    if (video) {

        video.addEventListener("ended", () => {

    videoIntro.style.opacity = "0";

    setTimeout(() => {

        videoIntro.style.display = "none";

        invitation.style.display = "block";

        invitation.classList.add("fade-in");

        startSlideshow();

        setTimeout(() => {
            autoScrollInvitation();
        }, 3000);

    }, 1500);

});

    }

};

// ==========================
// ENVELOPE OPEN
// ==========================

function openEnvelope() {

    const sound =
        document.getElementById("openSound");

    if (sound) {

        sound.currentTime = 0;

        sound.play().catch(() => {});

    }

    const flap =
        document.querySelector(".envelope-flap");

    const letter =
        document.querySelector(".letter");

    if (flap) {
        flap.style.transform =
            "rotateX(180deg)";
    }

    if (letter) {
        letter.style.transform =
            "translateY(-180px)";
    }

    setTimeout(() => {

        document.getElementById("envelopeSection").style.display =
            "none";

        document.getElementById("videoIntro").style.display =
            "flex";

        const video =
            document.getElementById("weddingVideo");

        if (video) {

            video.currentTime = 0;

            video.play().catch(() => {});

        }

    }, 1500);

}

// ==========================
// INVITATION SLIDESHOW
// ==========================

function startSlideshow() {

    const slides =
        document.querySelectorAll(".slide-step");

    slides.forEach((slide, index) => {

        setTimeout(() => {

            slide.classList.add("show");

        }, index * 2500);

    });

}
function autoScrollInvitation() {

    let currentPosition = 0;

    const scrollInterval = setInterval(() => {

        currentPosition += 1;

        window.scrollTo({
            top: currentPosition
        });

        if (
            currentPosition >=
            document.body.scrollHeight - window.innerHeight
        ) {
            clearInterval(scrollInterval);
        }

    }, 50);

}
// ==========================
// RSVP BUTTON
// ==========================

function rsvp() {

    const guest =
        new URLSearchParams(window.location.search)
            .get("guest") || "";

    const formURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSdSN-m9EfOWC4fbO9caaqEEZjlcMaOp7FWVWLxMcOGn89b19Q/viewform?usp=pp_url&entry.1416813886=" +
        encodeURIComponent(guest);

    window.open(formURL, "_blank");

}

function autoScrollInvitation() {

    const invitation =
        document.getElementById("invitationContainer");

    let scrollAmount = 0;

    const scrollTimer = setInterval(() => {

        scrollAmount += 1;

        invitation.scrollTop = scrollAmount;

        if (
            scrollAmount >=
            invitation.scrollHeight - invitation.clientHeight
        ) {
            clearInterval(scrollTimer);
        }

    }, 50);

}
function openInvitation() {

    const guest =
        document.getElementById("guestInput")
        .value
        .trim()
        .toLowerCase();

    if (!guest) {
        alert("Please enter your name and surname.");
        return;
    }

    if (guest.split(" ").length < 2) {
        alert("Please enter both your name and surname.");
        return;
    }

    if (!guests.includes(guest)) {
        alert("Name not found on the guest list.");
        return;
    }

    window.location.href =
        "invitation.html?guest=" +
        encodeURIComponent(guest);
}
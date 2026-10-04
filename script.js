const guests = [
    "tshepiso",
    "kedi",
    "mashoto",
    "dipuo",
    "morongwa",
    "morton",
    "sphe",
    "gadifeli",
    "martha",
    "tshego",
    "sydwel",
    "keneilwe",
    "winnie"
];

// LOGIN PAGE
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

// INVITATION PAGE
window.onload = function () {

    // Show guest name
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("guest");

    if (guest && document.getElementById("guestName")) {

        const formatted =
            guest.charAt(0).toUpperCase() +
            guest.slice(1).toLowerCase();

        document.getElementById("guestName").innerHTML =
            "Dear " + formatted + ",";
    }

    const card = document.getElementById("invitationContainer");

    if (card) {

        card.style.display = "block";

        // Hide sections first
        document.querySelectorAll(".fade-scroll").forEach((el) => {
            el.classList.remove("show");
        });

        // Reveal sections one by one
        setTimeout(() => {
            document.querySelector(".celebration-section")
                ?.classList.add("show");
        }, 500);

        setTimeout(() => {
            document.querySelector(".details")
                ?.classList.add("show");
        }, 1200);

        setTimeout(() => {
            document.querySelector(".important-info")
                ?.classList.add("show");
        }, 1900);

        setTimeout(() => {
            document.querySelector(".wedding-rules")
                ?.classList.add("show");
        }, 2600);

        setTimeout(() => {
            document.querySelector(".rsvp-btn")
                ?.classList.add("show");
        }, 3300);
    }
};

// RSVP BUTTON
function rsvp() {

    const guest =
        new URLSearchParams(window.location.search)
            .get("guest") || "";

    const formURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSdSN-m9EfOWC4fbO9caaqEEZjlcMaOp7FWVWLxMcOGn89b19Q/viewform?usp=pp_url&entry.1416813886="
        + encodeURIComponent(guest);

    window.open(formURL, "_blank");
}
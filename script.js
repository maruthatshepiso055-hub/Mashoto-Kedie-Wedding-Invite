const guests = [
    "tshepiso",
    "kedi",
    "sydwel",
    "dipuo",
    "morongwa",
    "morton",
    "sphe",
    "gadifeli",
    "martha",
    "tshego",
    "mashoto",
    "keneilwe",
    "winnie",
];

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

    const params = new URLSearchParams(
        window.location.search
    );

    const guest = params.get("guest");

    if (guest && document.getElementById("guestName")) {

        const formatted =
            guest.charAt(0).toUpperCase() +
            guest.slice(1).toLowerCase();

        document.getElementById("guestName").innerHTML =
            "Dear " + formatted + ",";
    }

    const card =
        document.getElementById("invitationContainer");

    if (card) {

        card.style.display = "block";

        card.classList.add("fade-in");

        card.style.transform =
            "translateY(100px)";

        setTimeout(() => {

            card.style.transition =
                "transform 1.5s ease";

            card.style.transform =
                "translateY(0)";

        }, 100);
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
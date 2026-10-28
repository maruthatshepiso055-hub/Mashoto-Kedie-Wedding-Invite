const guests = [
    "tshepiso marutha",
    "nduduzo hadebe",
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
    "sphesihle kubheka",
    "lindiwe nkosi",
    "california makhubela",
    "selaelo serumela",
    "onalenna makgoba",
    "thabiso mvelase",
    "sydwell mohlaloganyi",
    "khomotso mohlaloganyi",
    "keneilwe motau",
    "divine-love mwale",
    "sf mohlaloganyi",
    "bl mohlaloganyi",
    "tshegofatso mohlaloganyi",
    "thapelo malapane",
    "daniel ramawele",
    "tebogo machaba",
    "thako mohale",
    "mogale malapane",
    "samuel manyama",
    "lydia manyama",
    "radisegwane makoeng",
    "likkie ramawele",
    "madidimalo lenyanyabedi",
    "sejabaledi leshiba",
    "sati chosi",
    "neo sodi",
    "lucky ramothwala",
    "tebatso mashao",
    "mr ceo photography",
    "cynthia matuba",
    "mpumi malapane",
    "zenhlanhla hlongwane",
    "dikeledi liz odd",
    "will odd",
    "khalipha mazibuko",
    "paballo maphalala",
    "ntokozo mazibuko",
    "thabiso manyama",
    "thabang manyama",
    "hulisani photographer",
    "tshilidzi videographer",
    "mafune videographer/drone",
    "timothy mphaphuli",
    "mahlatse mashego",
    "kimberly cossa",
    "hezekiel mogale masekane",
    "khomotso marutha",
    "smarty marutha",
    "rakgadi mankwana",
    "bethuel marutha",
    "kamo modiba",
    "oupa modiba",
    "pilwane modiba",
    "hlogi",
    "bommahlogi",
    "kabelo masekela",
    "khuthi",
    "rebotile mampeule",
    "enoch marutha",
    "michelle marutha",
    "jessica marutha",
    "koko mampeule",
    "moeketsi khechane",
    "lethabo mampeule",
    "thabang mothapo",
    "mapoti keamogetswe",
    "rosinah maake",
    "lucas ramalatswa",
    "zikhona mvinqi-bakumeni",
    "zikhona's husband",
    "matome manyama",
    "delisiwe ndlhovu",
    "abigail mohlaloganyi",
    "cecilia monaiwa",
    "raseala bethuel",
    "bamoratile rangongo",
    "portia ramalatswa",
    "mamohale kgashane",
    "mokete mtema",
    "tshegofatso  m mohlaloganyi", 
    "mohlatlego mohlaloganyi", 
    "refilwe Mohlaloganyi",
    "ruth  mohlaloganyi",
    "cecilia monaiwa",
    "lizzy ramothwala",
    "sarah phosa",
    "malakia phosa",
    "justice mohlaloganyi",
    "thapelo masekane",
    "stanley mailula",
    "dorothy mailula",
    "brian mailula",
    "sarah mohale",
    "given dzialwa",
    "eunice malinda",
    "simon dzialwa",
    "jane manoko"
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
    const input = document.getElementById("guestInput");

    if (!input) {
        alert("Guest name input not found.");
        return;
    }

    // Clean up the entered name
    const enteredName = input.value
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

    // Check whether the name exists in the guest list
    const guestFound = guests.some(function(name) {
        return name
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase() === enteredName;
    });

    if (guestFound) {
        // Open the invitation using the guest's name
        window.location.href =
            "invitation.html?guest=" +
            encodeURIComponent(enteredName);
    } else {
        alert("Name not found on the guest list. Please enter your full name and surname as provided on your invitation.");
    }
}




document.addEventListener("DOMContentLoaded", function () {
    const popFile = document.getElementById("popFile");
    const popFileName = document.getElementById("popFileName");
    const sendButton = document.getElementById("sendPOPWhatsApp");

    if (!popFile || !popFileName || !sendButton) {
        return;
    }

    popFile.addEventListener("change", function () {
        const file = popFile.files[0];

        if (!file) {
            popFileName.textContent = "No file selected";
            sendButton.disabled = true;
            return;
        }
 
        popFileName.textContent = "Selected: " + file.name;
        sendButton.disabled = false;
    });

    sendButton.addEventListener("click", function () {
        const file = popFile.files[0];

        if (!file) {
            alert("Please select your proof of payment first.");
            return;
        }

        const guest =
            new URLSearchParams(window.location.search)
                .get("guest") || "Guest";

        const message =
            "Hello Mashoto and Kedie 💙\n\n" +
            "Please find my proof of payment for the wedding.\n" +
            "Guest name: " + guest + "\n" +
            "File: " + file.name;

        const whatsappURL =
            "https://wa.me/27686811797?text=" +
            encodeURIComponent(message);

        window.location.href = whatsappURL;
    });
});

function sendPOPWhatsApp() {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("guest") || "Guest";

    const message =
        "Hello Mashoto and Kedie 💙\n\n" +
        "I am sending my proof of payment for my wedding gift.\n" +
        "Guest name: " + guest + "\n\n" +
        "Please find my POP attached.";

    const whatsappURL =
        "https://wa.me/27686811797?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}

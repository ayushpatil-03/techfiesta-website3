// This file will handle future dynamic functionality
// Currently used for navigation control and login checks

console.log("Krishak Saarthi Frontend Loaded");

// Future: Add login check for Auction page
// ================================
// Krishak Saarthi Frontend Logic
// ================================

console.log("Krishak Saarthi Loaded");

// -------------------------------
// CHECK LOGIN FOR AUCTION PAGE
// -------------------------------

if (window.location.pathname.includes("auction.html")) {

    const userRole = localStorage.getItem("role");

    if (!userRole) {
        alert("Please login to access auctions.");
        window.location.href = "login/login.html";
    } else {
        loadDemoCrops();
    }
}


// -------------------------------
// LOAD DEMO CROPS (MVP)
// -------------------------------

function loadDemoCrops() {

    const container = document.getElementById("auctionContainer");

    const crops = [
        {
            name: "Wheat",
            quantity: "500 kg",
            basePrice: "₹22/kg",
            grade: "A"
        },
        {
            name: "Rice",
            quantity: "800 kg",
            basePrice: "₹30/kg",
            grade: "B"
        }
    ];

    crops.forEach(crop => {

        const card = document.createElement("div");
        card.className = "feature-card";

        card.innerHTML = `
            <h3>${crop.name}</h3>
            <p><strong>Quantity:</strong> ${crop.quantity}</p>
            <p><strong>Base Price:</strong> ${crop.basePrice}</p>
            <p><strong>Grade:</strong> ${crop.grade}</p>
            <button class="btn-primary">Place Bid</button>
        `;

        container.appendChild(card);
    });
}
// -------------------------------
// LOGIN FUNCTION
// -------------------------------

function loginUser() {

    const role = document.getElementById("role").value;

    if (!role) {
        alert("Please select a role");
        return;
    }

    // Store role temporarily
    localStorage.setItem("role", role);

    // Redirect based on role
    if (role === "farmer") {
        window.location.href = "../dashboard/farmer.html";
    }
    else if (role === "trader") {
        window.location.href = "../dashboard/trader.html";
    }
    else if (role === "officer") {
        window.location.href = "../dashboard/officer.html";
    }
}

function goToAuction() {
    window.location.href = "../auction.html";
}
// Dynamic Counter Animation

function animateValue(id, end) {
    let start = 0;
    let duration = 2000;
    let increment = end / (duration / 50);

    let obj = document.getElementById(id);

    let timer = setInterval(() => {
        start += increment;
        obj.innerText = Math.floor(start);

        if (start >= end) {
            obj.innerText = end;
            clearInterval(timer);
        }
    }, 50);
}

if (window.location.pathname.includes("index.html")) {
    animateValue("farmersCount", 1200);
    animateValue("auctionsCount", 350);
    animateValue("tradersCount", 480);
}
// Show popup after 3 seconds
if (window.location.pathname.includes("index.html")) {
    setTimeout(() => {
        document.getElementById("newsletterModal").style.display = "flex";
    }, 3000);
}

function closeModal() {
    document.getElementById("newsletterModal").style.display = "none";
}
// Scroll reveal effect
const cards = document.querySelectorAll('.feature-card');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.8;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

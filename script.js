// ===== SLIDER =====
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

function next(){
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prev(){
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// ===== DARK/LIGHT MODE =====
const themeBtn = document.getElementById('themeToggle');
themeBtn && themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// ===== PAGE TRANSITION =====
document.querySelectorAll('a.nav-link').forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        const href = link.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(()=>{ window.location = href; }, 600);
    });
});

// ===== WHATSAPP ENQUIRY =====
const whatsappNumber = "918921283941";

function sendRadiatorEnquiry(){
    const brand = document.getElementById("radBrand").value.trim();
    const model = document.getElementById("radModel").value.trim();
    const year = document.getElementById("radYear").value.trim();
    if(!brand || !model || !year){
        alert("Please fill all details");
        return;
    }
    const message = `Hello, I need a radiator.\nBrand: ${brand}\nModel: ${model}\nYear: ${year}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function sendTankEnquiry(){
    const brand = document.getElementById("tankBrand").value.trim();
    const model = document.getElementById("tankModel").value.trim();
    const year = document.getElementById("tankYear").value.trim();
    const tank = document.getElementById("tankType").value;
    if(!brand || !model || !year || !tank){
        alert("Please fill all details");
        return;
    }
    const message = `Hello, I need a radiator tank.\nBrand: ${brand}\nModel: ${model}\nYear: ${year}\nTank: ${tank}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}
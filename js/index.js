const startDate = new Date(2025, 4, 15, 0, 0); 
    
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
        
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
    animateFlip('days', days);
    animateFlip('hours', hours);
    animateFlip('minutes', minutes);
    animateFlip('seconds', seconds);
}
    
function animateFlip(id, newValue) {
    const element = document.getElementById(id);
    if (element.lastValue !== newValue) {
        element.classList.add('flipping');
        setTimeout(() => {
            element.textContent = String(newValue).padStart(2, '0');
            element.classList.remove('flipping');
        }, 300);
        element.lastValue = newValue;
    }
}
updateTimer();
setInterval(updateTimer, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('emailInput');
    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close');

    subscribeBtn.addEventListener('click', function() {
        if (emailInput.value && emailInput.value.includes('@')) {

            modal.style.display = 'block';
            
            emailInput.value = '';
        } else {
            alert('Пожалуйста, введите корректный email');
        }
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
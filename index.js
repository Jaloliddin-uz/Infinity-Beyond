function updatePlan(planType) {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('featured');
        card.querySelector('.signup-btn').classList.remove('purple');
        card.querySelector('.price').style.color = '#555'; 
    });

    document.getElementById('btn-' + planType).classList.add('active');

    const selectedCard = document.getElementById('card-' + planType);
    selectedCard.classList.add('featured');
    
    const cardBtn = selectedCard.querySelector('.signup-btn');
    cardBtn.classList.add('purple');
    
    const cardPrice = selectedCard.querySelector('.price');
    cardPrice.style.color = '#6200ea';
}

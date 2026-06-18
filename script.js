// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // Efeito de interação nos cards
    const cards = document.querySelectorAll('.interactive-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = '0.3s';
            console.log("Você interagiu com um card informativo!");
        });
    });

    // Exemplo de função: Alerta ao clicar no card de Fake News
    const fakeNewsCard = document.querySelector('.interactive-card[style*="red"]');
    if (fakeNewsCard) {
        fakeNewsCard.addEventListener('dblclick', () => {
            alert("Lembre-se: Sempre verifique fontes oficiais antes de compartilhar!");
        });
    }
});

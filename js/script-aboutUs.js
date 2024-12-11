document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal");

    // Abrir modal correspondente
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const cardId = card.getAttribute("data-id");
            const modal = document.getElementById(`modal-${cardId}`);
            if (modal) {
                modal.classList.add("active");
            }
        });
    });

    // Fechar modal
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            modal.classList.remove("active");
        });
    });

    // Fechar modal clicando fora do conteúdo
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    });
});


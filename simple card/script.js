


let buttons = document.querySelectorAll('.btn');
let closeModalButtons = document.querySelectorAll('.closeModal');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let card = this.closest('.card');
    let description = card.querySelector('.description');
    let text = description.querySelector('.description-text').textContent;

    if (description.style.display === 'block') {
      // Ako je opis već prikazan, sakrijemo ga
      description.style.display = 'none';
    } else {
      // Inače, prikažemo ga
      description.style.display = 'block';
      description.querySelector('.description-text').textContent = text;
    }
  });
});

closeModalButtons.forEach(function(closeModalButton) {
  closeModalButton.addEventListener('click', function() {
    let description = this.closest('.description');
    description.style.display = 'none';
  });
});

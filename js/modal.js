const modalBtns = document.querySelectorAll('.modal_open');
const modals = document.querySelectorAll('.modal');
const bodyModal = document.body;



function openModal(elem) {
   elem.classList.add('active')
   stopScroll()
}
function closeModal(e) {
   if (e.target.classList.contains('close') || e.target.closest('.close') || e.target.classList.contains('modal-bg')) { // 1 проверка проверяем что нажимаем на крестик, вторая на случай если кнопка крестика будет лежать внутри блока, то тогда проверяем ближайший класс родители .close  и 3 проверка чтобы закрываолсь по нажатию по области
      e.target.closest('.modal').classList.remove('active')
      goScroll()
   }

}


function stopScroll() {
   let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'; // фиксим баг, когда при открытии модалки происходит сдвиг
   bodyModal.style.paddingRight = paddingOffset;
   bodyModal.classList.add('locked');

}

function goScroll() {
   bodyModal.classList.remove('locked');
   bodyModal.style.paddingRight = '0px';
}



modalBtns.forEach(btn => {  // если у нас будет много модальных окон, то их нужно связать с помощью дата атрибут
   btn.addEventListener('click', e => {
      let data = e.target.dataset.modalOpen;
      console.log(data)
      modals.forEach(modal => {
         if (modal.dataset.modal === data || modal.dataset.modal === e.target.closest('.modal_open').dataset.modalOpen) { // еще одно условие чтобы мы могли нажимать на картинку рядом с текстом
            openModal(modal);
         }
      })
   })
})

modals.forEach(modal => { // всегда перебираем все кнопки и модальные окна, потому что это универсальный код для модальных окон, где мы проверяем все кнопки и модалки
   modal.addEventListener('click', e => {
      closeModal(e)
   })
})

window.addEventListener('keydown', e => {  // закрытие по клавише escape
   modals.forEach(modal => {
      if (e.key === "Escape" && modal.classList.contains('active')) {
         modal.classList.remove('active')
         bodyModal.classList.remove('locked')
      }
   })
})
const body = document.body
const burger = document.getElementById('burger')
const downList = document.getElementById('down-list');

if (downList && burger) {
   burger.addEventListener('click', () => {
      downList.classList.toggle('active')
      burger.classList.toggle('active')
      body.classList.toggle('lock')
   })

   downList.addEventListener('click', e => {                         // закрытие бургера по нажатию вне его области
      if (e.target.classList.contains('header-down__nav')) {
         downList.classList.remove('active')
         burger.classList.remove('active')
         body.classList.remove('lock');
      };
   })
   downList.querySelector('.header-down__link').forEach((link) => {
      link.addEventListener('click', () => {
         downList.classList.remove('active')
         burger.classList.remove('active')
         body.classList.remove('lock')
      })
   })


}






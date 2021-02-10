// Work
// const initMenu = () => {
//   const menuEls = document.querySelectorAll('.navbar .slide-button');
//   const bodyContainer = document.querySelector('.body-container');
//   const menuContainer = document.querySelector('.menu-container');
//   const menuContent = menuContainer.querySelector('.menu-container-content');
//   console.log(menuEls)
//   menuEls.forEach( el => {
//     el.addEventListener('click', () => {
//       event.preventDefault()
//       const timeout = menuContent.classList.contains('d-none') ? 0 : 400
//       setTimeout(() => {
//         menuContent.classList.toggle('d-none');
//       }, timeout)
//       bodyContainer.classList.toggle('width70');
//       menuContainer.classList.toggle('width30');
//       console.log(el)
//     });
//   });
// }

//It work now!

const initMenu = () => {
  const buttons = document.querySelectorAll('.navbar li');
  const menuContent = document.querySelector('.test');
  buttons.forEach( el => {
    el.addEventListener('click', (event) => {
      event.preventDefault()
      menuContent.classList.toggle('menu-open')
    });
  });
}

export { initMenu };

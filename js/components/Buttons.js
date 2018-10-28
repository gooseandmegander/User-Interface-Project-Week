let buttons = document.querySelectorAll('.btn');
console.log(buttons);

buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    alert('Coming Soon!');
  })
);

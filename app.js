(() => {
  const button = document.querySelector('#atc');
  const hint = document.querySelector('#hint');
  const replay = document.querySelector('#replay');
  let timers = [];

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function reset() {
    clearTimers();
    document.body.classList.remove(
      'is-packing', 'is-launching', 'is-rolling', 'is-ordered'
    );
    button.disabled = false;
    button.setAttribute('aria-label', 'Buy now');
    hint.textContent = 'Click to place your order';
    replay.hidden = true;
  }

  function order() {
    if (button.disabled) return;
    button.disabled = true;
    button.setAttribute('aria-label', 'Packing your order');
    hint.textContent = 'Packing your order…';
    document.body.classList.add('is-packing');

    // Cart icon takes the button label's place.
    timers.push(setTimeout(() => {
      document.body.classList.add('is-launching');
      hint.textContent = 'On its way…';
    }, 620));

    // The delivery truck rolls out of the button.
    timers.push(setTimeout(() => {
      document.body.classList.add('is-rolling');
    }, 1050));

    // Confirm the order after the truck has crossed the scene.
    timers.push(setTimeout(() => {
      document.body.classList.add('is-ordered');
      document.body.classList.remove('is-rolling');
      button.setAttribute('aria-label', 'Order placed');
      hint.textContent = 'Your order has been placed';
      replay.hidden = false;
    }, 2250));
  }

  button.addEventListener('click', order);
  replay.addEventListener('click', reset);
  document.querySelector('.cart-indicator').addEventListener('click', () => {
    if (document.body.classList.contains('is-ordered')) reset();
    else order();
  });
})();
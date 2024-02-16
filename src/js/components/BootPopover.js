export default function createBootStarpElements() {
  const button3 = document.createElement('button');
  button3.classList.add('btn_bootstrap');
  button3.classList.add('btn-lg');
  button3.classList.add('btn-danger');
  button3.dataset.bsToggle = 'popover';
  button3.dataset.bsTitle = 'Popover title';
  button3.dataset.bsContainer = 'body';
  button3.dataset.bsContent = 'And here\'s some amazing content. It\'s very engaging. Right?';
  button3.dataset.bsPlacement = 'top';
  button3.textContent = 'Click to toggle popover';
  document.body.appendChild(button3);
}

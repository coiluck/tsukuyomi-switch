// message.ts
export function showConfirmWindow(message: string, isNeedCancel: boolean, options: {
  onOk?: () => void;
  onCancel?: () => void;
}) {
  const otherConfirmWindow = document.querySelector('.confirm-window');
  if (otherConfirmWindow) {
    otherConfirmWindow.classList.add('active');
    setTimeout(() => {
      otherConfirmWindow.classList.remove('active');
    }, 300);
    return;
  }
  const confirmWindow = document.createElement('div');
  confirmWindow.classList.add('confirm-window');
  confirmWindow.innerHTML = `
    <div class="confirm-window-content">
      <p>${message}</p>
    </div>
    <div class="confirm-window-buttons">
      ${isNeedCancel ? `<button class="confirm-window-button-cancel">Cancel</button>` : ''}
      <button class="confirm-window-button-ok">OK</button>
    </div>
  `;
  const cancelButton = confirmWindow.querySelector('.confirm-window-button-cancel');
  const okButton = confirmWindow.querySelector('.confirm-window-button-ok');
  cancelButton?.addEventListener('click', () => {
    document.body.removeChild(confirmWindow);
    options.onCancel?.();
  });
  okButton?.addEventListener('click', () => {
    document.body.removeChild(confirmWindow);
    options.onOk?.();
  });
  document.body.appendChild(confirmWindow);
}
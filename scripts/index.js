const mainTextarea = document.querySelector('.main__textarea');
const mainKeyboard = document.querySelector('.main__keyboard');
const spaceKey = document.querySelector('.Space');
const tabKey = document.querySelector('.Tab');
const enterKey = document.querySelector('.Enter');
const backspaceKey = document.querySelector('.Backspace');
const shiftLeftKey = document.querySelector('.Shift-Left');
const shiftRightKey = document.querySelector('.Shift-Right');
const altLeftKey = document.querySelector('.Alt-Left');
const altRightKey = document.querySelector('.Alt-Right');
const controlLeftKey = document.querySelector('.Control-Left');
const controlRightKey = document.querySelector('.Control-Right');
const capsLockKey = document.querySelector('.Caps-Lock');
const deleteKey = document.querySelector('.Delete');
const arrowUpKey = document.querySelector('.Arrow-Up');
const arrowDownKey = document.querySelector('.Arrow-Down');
const arrowLeftKey = document.querySelector('.Arrow-Left');
const arrowRightKey = document.querySelector('.Arrow-Right');
const metaKey = document.querySelector('.Meta-Key');
const keyboardKeys = document.querySelectorAll('.key');
const engKeys = document.querySelectorAll('.eng');
const ruKeys = document.querySelectorAll('.ru');

let selectionStart;

mainKeyboard.addEventListener('click', (e) => {
  e.stopPropagation();
});

mainTextarea.addEventListener('click', () => {
  selectionStart = this.selectionStart;
});

function returnFocus() {
  setTimeout(() => {
    mainTextarea.focus();
  }, 0);
}

function removeLastChar() {
  mainTextarea.value = mainTextarea.value.slice(0, -1);
}

function removeLeftChar() {
  selectionStart = mainTextarea.selectionStart;
  if (selectionStart !== 0) {
    mainTextarea.value =
      mainTextarea.value.slice(0, selectionStart - 1) +
      mainTextarea.value.slice(selectionStart);
  }
}

function removeRightChar() {
  selectionStart = mainTextarea.selectionStart + 1;
  if (mainTextarea.value.slice(selectionStart).length === 0) {
    mainTextarea.value = mainTextarea.value.slice(0, selectionStart - 1);
  } else {
    mainTextarea.value =
      mainTextarea.value.slice(0, selectionStart) +
      mainTextarea.value.slice(selectionStart + 1);
  }
}

function capsLockToggle() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (
      !keyboardKeys[i]
        .getElementsByClassName('shiftCaps')[0]
        .classList.contains('hidden')
    ) {
      keyboardKeys[i]
        .getElementsByClassName('caseUp')[0]
        .classList.toggle('hidden');
      keyboardKeys[i]
        .getElementsByClassName('shiftCaps')[0]
        .classList.toggle('hidden');
    } else if (
      typeof keyboardKeys[i].getElementsByClassName('key__aside')[0] !==
        'undefined' &&
      keyboardKeys[i]
        .getElementsByClassName('caseUp')[0]
        .classList.contains('hidden')
    ) {
      keyboardKeys[i]
        .getElementsByClassName('caseDown')[0]
        .classList.toggle('hidden');
      keyboardKeys[i]
        .getElementsByClassName('caps')[0]
        .classList.toggle('hidden');
    } else if (
      !keyboardKeys[i]
        .getElementsByClassName('caseUp')[0]
        .classList.contains('hidden')
    ) {
      keyboardKeys[i]
        .getElementsByClassName('caseUp')[0]
        .classList.add('hidden');
      keyboardKeys[i]
        .getElementsByClassName('shiftCaps')[0]
        .classList.toggle('hidden');
    }
  }
}

function shiftUp() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (
      !keyboardKeys[i]
        .getElementsByClassName('caseDown')[0]
        .classList.contains('hidden')
    ) {
      keyboardKeys[i]
        .getElementsByClassName('caseDown')[0]
        .classList.add('hidden');
    }
    if (
      !keyboardKeys[i]
        .getElementsByClassName('caps')[0]
        .classList.contains('hidden')
    ) {
      keyboardKeys[i].getElementsByClassName('caps')[0].classList.add('hidden');
      keyboardKeys[i]
        .getElementsByClassName('shiftCaps')[0]
        .classList.remove('hidden');
    } else if (
      keyboardKeys[i]
        .getElementsByClassName('shiftCaps')[0]
        .classList.contains('hidden')
    ) {
      keyboardKeys[i]
        .getElementsByClassName('caseUp')[0]
        .classList.remove('hidden');
    }
  }
}

function shiftDown() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (
      !keyboardKeys[i]
        .getElementsByClassName('shiftCaps')[0]
        .classList.contains('hidden')
    ) {
      keyboardKeys[i]
        .getElementsByClassName('caseDown')[0]
        .classList.add('hidden');
      keyboardKeys[i]
        .getElementsByClassName('caps')[0]
        .classList.remove('hidden');
      keyboardKeys[i]
        .getElementsByClassName('shiftCaps')[0]
        .classList.add('hidden');
    } else {
      keyboardKeys[i]
        .getElementsByClassName('caseDown')[0]
        .classList.remove('hidden');
      keyboardKeys[i]
        .getElementsByClassName('shiftCaps')[0]
        .classList.add('hidden');
      keyboardKeys[i].getElementsByClassName('caps')[0].classList.add('hidden');
      keyboardKeys[i]
        .getElementsByClassName('caseUp')[0]
        .classList.add('hidden');
    }
  }
}

let isFirstClick = true;

function handleFirstKeyDown(el) {
  const isCapsLockOn = el.getModifierState('CapsLock');
  if (isFirstClick) {
    isFirstClick = false;
    if (isCapsLockOn) {
      capsLockKey.classList.toggle('active');
      capsLockToggle();
      mainTextarea.value = mainTextarea.value.toUpperCase();
    }
  } else {
    window.removeEventListener('keydown', handleFirstKeyDown);
    window.removeEventListener('mousedown', handleFirstKeyDown);
  }
}

window.addEventListener('load', () => {
  window.addEventListener('mousedown', handleFirstKeyDown);
  window.addEventListener('keydown', handleFirstKeyDown);
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'eng');
  }
  if (localStorage.getItem('language') === 'ru') {
    ruKeys.forEach((e) => {
      e.classList.remove('hidden');
      e.parentNode.insertBefore(e, e.parentNode.firstChild);
    });
    engKeys.forEach((e) => {
      e.classList.add('hidden');
    });
  } else if (localStorage.getItem('language') === 'eng') {
    ruKeys.forEach((e) => {
      e.classList.add('hidden');
    });
    engKeys.forEach((e) => {
      e.classList.remove('hidden');
    });
  }
});

function pressKeyDown(el) {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (el.code !== 'Delete' && el.code !== 'Backspace') {
      el.preventDefault();
    }
    if (
      (el.code === 'ShiftLeft' && altLeftKey.classList.contains('active')) ||
      (el.code === 'AltLeft' && shiftLeftKey.classList.contains('active'))
    ) {
      shiftLeftKey.classList.add('active');
      altLeftKey.classList.add('active');
      shiftUp();
      if (localStorage.getItem('language') === 'eng') {
        localStorage.setItem('language', 'ru');
        ruKeys.forEach((e) => {
          e.classList.remove('hidden');
        });
        engKeys.forEach((e) => {
          e.classList.add('hidden');
        });
      } else if (localStorage.getItem('language') === 'ru') {
        localStorage.setItem('language', 'eng');
        ruKeys.forEach((e) => {
          e.classList.add('hidden');
        });
        engKeys.forEach((e) => {
          e.classList.remove('hidden');
        });
      }
      location.reload();
      break;
    }
    if (el.code === 'Space') {
      spaceKey.classList.add('active--space');
      mainTextarea.value += ' ';
      break;
    } else if (el.code === 'Backspace') {
      backspaceKey.classList.add('active');
      if (!mainTextarea.classList.contains('active--textarea')) {
        removeLastChar();
      }
      break;
    } else if (el.code === 'Tab') {
      tabKey.classList.add('active');
      mainTextarea.value += '    ';
      break;
    } else if (el.code === 'Enter') {
      enterKey.classList.add('active');
      mainTextarea.value += '\n';
      break;
    } else if (el.code === 'ShiftLeft') {
      shiftLeftKey.classList.add('active');
      shiftUp();
      break;
    } else if (el.code === 'ShiftRight') {
      shiftRightKey.classList.add('active');
      shiftUp();
      break;
    } else if (el.code === 'AltLeft') {
      altLeftKey.classList.add('active');
    } else if (el.code === 'AltRight') {
      altRightKey.classList.add('active');
    } else if (el.code === 'ControlLeft') {
      controlLeftKey.classList.add('active');
      break;
    } else if (el.code === 'ControlRight') {
      controlRightKey.classList.add('active');
    } else if (el.code === 'CapsLock') {
      if (isFirstClick) {
        break;
      } else {
        capsLockKey.classList.toggle('active');
        capsLockToggle();
        break;
      }
    } else if (el.code === 'Delete') {
      deleteKey.classList.add('active');
    } else if (el.code === 'ArrowUp') {
      arrowUpKey.classList.add('active');
      mainTextarea.value += '↑';
      break;
    } else if (el.code === 'ArrowDown') {
      arrowDownKey.classList.add('active');
      mainTextarea.value += '↓';
      break;
    } else if (el.code === 'ArrowLeft') {
      arrowLeftKey.classList.add('active');
      mainTextarea.value += '←';
      break;
    } else if (el.code === 'ArrowRight') {
      arrowRightKey.classList.add('active');
      mainTextarea.value += '→';
      break;
    } else if (el.code === 'MetaLeft') {
      metaKey.classList.add('active');
    } else if (
      el.key ===
      keyboardKeys[i].getElementsByClassName('key__center')[0].textContent
    ) {
      keyboardKeys[i].classList.add('active');
      mainTextarea.value +=
        keyboardKeys[i].getElementsByClassName('key__center')[0].textContent;
    } else if (
      typeof keyboardKeys[i].getElementsByClassName('key__aside')[0] !==
      'undefined'
    ) {
      if (
        el.key ===
        keyboardKeys[i].getElementsByClassName('key__aside')[0].textContent
      ) {
        keyboardKeys[i].classList.add('active');
        mainTextarea.value +=
          keyboardKeys[i].getElementsByClassName('key__aside')[0].textContent;
      }
    }
  }
}

function releaseKeyUp(el) {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (el.code !== 'Delete' && el.code !== 'Backspace') {
      el.preventDefault();
    }
    if (el.code === 'Space') {
      spaceKey.classList.remove('active--space');
    } else if (el.code === 'ShiftLeft') {
      shiftLeftKey.classList.remove('active');
      shiftDown();
      break;
    } else if (el.code === 'ShiftRight') {
      shiftRightKey.classList.remove('active');
      shiftDown();
      break;
    } else if (el.code === 'AltLeft') {
      altLeftKey.classList.remove('active');
    } else if (el.code === 'AltRight') {
      altRightKey.classList.remove('active');
    } else if (el.code === 'ControlLeft') {
      controlLeftKey.classList.remove('active');
    } else if (el.code === 'ControlRight') {
      controlRightKey.classList.remove('active');
    } else if (el.code === 'Delete') {
      deleteKey.classList.remove('active');
    } else if (el.code === 'ArrowUp') {
      arrowUpKey.classList.remove('active');
    } else if (el.code === 'ArrowDown') {
      arrowDownKey.classList.remove('active');
    } else if (el.code === 'ArrowLeft') {
      arrowLeftKey.classList.remove('active');
    } else if (el.code === 'ArrowRight') {
      arrowRightKey.classList.remove('active');
    } else if (el.code === 'MetaLeft') {
      metaKey.classList.remove('active');
    } else if (
      el.key ===
      keyboardKeys[i].getElementsByClassName('key__center')[0].textContent
    ) {
      keyboardKeys[i].classList.remove('active');
    } else if (
      typeof keyboardKeys[i].getElementsByClassName('key__aside')[0] !==
      'undefined'
    ) {
      if (
        el.key ===
        keyboardKeys[i].getElementsByClassName('key__aside')[0].textContent
      ) {
        keyboardKeys[i].classList.remove('active');
      }
    }
  }
}

let elementClassAside = '';

function pressMouseDown(e) {
  const targetElement = e.target;
  let target = targetElement.parentElement;
  if (target.tagName === 'DIV') {
    target = e.target;
  } else if (target.tagName === 'SPAN') {
    target = e.target.parentElement.parentElement.parentElement;
  }
  const elementClassCenter =
    target.getElementsByClassName('key__center')[0].textContent;
  if (typeof target.getElementsByClassName('key__aside')[0] !== 'undefined') {
    elementClassAside =
      target.getElementsByClassName('key__aside')[0].textContent;
  }
  if (
    elementClassCenter === 'Backspace' &&
    !mainTextarea.classList.contains('active--textarea')
  ) {
    removeLastChar();
  } else if (
    elementClassCenter === 'Backspace' &&
    mainTextarea.classList.contains('active--textarea')
  ) {
    removeLeftChar();
  } else if (elementClassCenter === 'Del') {
    removeRightChar();
  } else if (elementClassCenter === 'Tab') {
    tabKey.classList.add('active');
    mainTextarea.value += '    ';
  } else if (elementClassCenter === 'Enter') {
    mainTextarea.value += '\n';
  } else if (elementClassCenter === 'Shift') {
    shiftUp();
  } else if (elementClassCenter === 'Caps Lock') {
    if (!isFirstClick) {
      capsLockKey.classList.toggle('active');
      capsLockToggle();
    }
  } else if (
    capsLockKey.classList.contains('active') === true &&
    (shiftLeftKey.classList.contains('active') ||
      shiftRightKey.classList.contains('active'))
  ) {
    mainTextarea.value += elementClassAside.toLowerCase();
  } else if (capsLockKey.classList.contains('active') === true) {
    mainTextarea.value += elementClassCenter.toUpperCase();
  } else if (
    shiftLeftKey.classList.contains('active') ||
    shiftRightKey.classList.contains('active')
  ) {
    mainTextarea.value += elementClassAside.toUpperCase();
  } else {
    mainTextarea.value += elementClassCenter;
  }
}

function releaseMouseUp(e) {
  const targetElement = e.target;
  let target = targetElement.parentElement;
  if (target.tagName === 'DIV') {
    target = e.target;
  }
  const elementClassCenter =
    target.getElementsByClassName('key__center')[0].textContent;
  if (typeof target.getElementsByClassName('key__aside')[0] !== 'undefined') {
    elementClassAside =
      target.getElementsByClassName('key__aside')[0].textContent;
  }
  if (elementClassCenter === 'Shift') {
    shiftDown();
  }
}

window.addEventListener('keydown', pressKeyDown);
keyboardKeys.forEach((e) => {
  e.addEventListener('mousedown', pressMouseDown);
});

keyboardKeys.forEach((e) => {
  e.addEventListener('mouseup', releaseMouseUp);
});

window.addEventListener('keyup', releaseKeyUp);

mainTextarea.addEventListener('click', () => {
  mainTextarea.classList.add('active--textarea');
  mainTextarea.addEventListener('blur', returnFocus);
});

window.addEventListener('click', (clickOutsideTextarea) => {
  if (!mainTextarea.contains(clickOutsideTextarea.target)) {
    mainTextarea.classList.remove('active--textarea');
    mainTextarea.removeEventListener('blur', returnFocus);
    mainTextarea.blur();
  }
});

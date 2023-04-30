let mainContainer = document.querySelector('.main__container');
let mainTextarea = document.querySelector('.main__textarea');
let mainKeyboard = document.querySelector('.main__keyboard');
let spaceKey = document.querySelector('.Space');
let tabKey = document.querySelector('.Tab');
let enterKey = document.querySelector('.Enter');
let backspaceKey = document.querySelector('.Backspace');
let shiftLeftKey = document.querySelector('.Shift-Left');
let shiftRightKey = document.querySelector('.Shift-Right');
let altLeftKey = document.querySelector('.Alt-Left');
let altRightKey = document.querySelector('.Alt-Right');
let controlLeftKey = document.querySelector('.Control-Left');
let controlRightKey = document.querySelector('.Control-Right');
let capsLockKey = document.querySelector('.Caps-Lock');
let deleteKey = document.querySelector('.Delete');
let arrowUpKey = document.querySelector('.Arrow-Up');
let arrowDownKey = document.querySelector('.Arrow-Down');
let arrowLeftKey = document.querySelector('.Arrow-Left');
let arrowRightKey = document.querySelector('.Arrow-Right');
let metaKey = document.querySelector('.Meta-Key');
let keyboardKeys = document.querySelectorAll('.key');
let engKeys = document.querySelectorAll('.eng');
let ruKeys = document.querySelectorAll('.ru');
let caseDownKeys = document.querySelectorAll('.caseDown');
let caseUpKeys = document.querySelectorAll('.caseUp');
let capsKeys = document.querySelectorAll('.caps');
let shiftCapsKeys = document.querySelectorAll('.shiftCaps');

let selectionStart;

mainKeyboard.addEventListener('click', function (e) {
  e.stopPropagation();
});

mainTextarea.addEventListener('click', function () {
  selectionStart = this.selectionStart;
  selectionEnd = this.selectionEnd;
});

function returnFocus() {
  setTimeout(function () {
    mainTextarea.focus();
    mainTextarea.selectionEnd = selectionStart - 1;
  }, 0);
}

function removeLastChar() {
  mainTextarea.value = mainTextarea.value.slice(0, -1);
}

function removeLeftChar() {
  selectionStart = mainTextarea.selectionStart;
  if (selectionStart !== 0) {
    mainTextarea.value = mainTextarea.value.slice(0, selectionStart - 1) + mainTextarea.value.slice(selectionStart);
  }
  console.log(selectionStart);
}

function removeRightChar() {
  selectionStart = mainTextarea.selectionStart + 1;
  if (mainTextarea.value.slice(selectionStart).length === 0) {
    mainTextarea.value = mainTextarea.value.slice(0, selectionStart - 1);
  } else {
    mainTextarea.value = mainTextarea.value.slice(0, selectionStart) + mainTextarea.value.slice(selectionStart + 1);
  }
  console.log(selectionStart);
}

function capsLockToggle() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (!keyboardKeys[i].getElementsByClassName('shiftCaps')[0].classList.contains('hidden')) {
      keyboardKeys[i].getElementsByClassName('caseUp')[0].classList.toggle('hidden');
      keyboardKeys[i].getElementsByClassName('shiftCaps')[0].classList.toggle('hidden');
    } else if (typeof keyboardKeys[i].getElementsByClassName('key__aside')[0] !== 'undefined' && keyboardKeys[i].getElementsByClassName('caseUp')[0].classList.contains('hidden')) {
      keyboardKeys[i].getElementsByClassName('caseDown')[0].classList.toggle('hidden');
      keyboardKeys[i].getElementsByClassName('caps')[0].classList.toggle('hidden');
    } else if (!keyboardKeys[i].getElementsByClassName('caseUp')[0].classList.contains('hidden')) {
      keyboardKeys[i].getElementsByClassName('caseUp')[0].classList.add('hidden');
      keyboardKeys[i].getElementsByClassName('shiftCaps')[0].classList.toggle('hidden');
    }
  }
}

function shiftUp() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (!keyboardKeys[i].getElementsByClassName('caseDown')[0].classList.contains('hidden')) {
      keyboardKeys[i].getElementsByClassName('caseDown')[0].classList.add('hidden');
    }
    if (!keyboardKeys[i].getElementsByClassName('caps')[0].classList.contains('hidden')) {
      keyboardKeys[i].getElementsByClassName('caps')[0].classList.add('hidden');
      keyboardKeys[i].getElementsByClassName('shiftCaps')[0].classList.remove('hidden');
    } else if (keyboardKeys[i].getElementsByClassName('shiftCaps')[0].classList.contains('hidden')) {
      keyboardKeys[i].getElementsByClassName('caseUp')[0].classList.remove('hidden');
    }
  }
}

function shiftDown() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (!keyboardKeys[i].getElementsByClassName('shiftCaps')[0].classList.contains('hidden')) {
      keyboardKeys[i].getElementsByClassName('caseDown')[0].classList.add('hidden');
      keyboardKeys[i].getElementsByClassName('caps')[0].classList.remove('hidden');
      keyboardKeys[i].getElementsByClassName('shiftCaps')[0].classList.add('hidden');
    } else {
      keyboardKeys[i].getElementsByClassName('caseDown')[0].classList.remove('hidden');
      keyboardKeys[i].getElementsByClassName('shiftCaps')[0].classList.add('hidden');
      keyboardKeys[i].getElementsByClassName('caps')[0].classList.add('hidden');
      keyboardKeys[i].getElementsByClassName('caseUp')[0].classList.add('hidden');
    }
  }
}

let isFirstClick = true;

function handleFirstKeyDown(el) {
  let isCapsLockOn = el.getModifierState('CapsLock');
  if (isCapsLockOn) {
    console.log('Caps Lock is turned on');
  } else {
    console.log('Caps Lock is turned off');
  }
  if (isFirstClick) {
    console.log('This is the first click!');
    isFirstClick = false;
    if (isCapsLockOn) {
      capsLockKey.classList.toggle('active');
      capsLockToggle();
      mainTextarea.value = mainTextarea.value.toUpperCase();
    }
  } else {
    console.log('This is not the first click.');
    window.removeEventListener('keydown', handleFirstKeyDown);
    window.removeEventListener('mousedown', handleFirstKeyDown);
  }
}

window.addEventListener('load', function () {
  window.addEventListener('mousedown', handleFirstKeyDown);
  window.addEventListener('keydown', handleFirstKeyDown);
});

let currentLanguage = 'eng';

// TODO!: Add language switching + save lang in local storage
// TODO!: Add mouse events for all buttons
// TODO: Add ES Lint / ES6 features ?

function pressKeyDown(el) {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (el.code !== 'Delete' && el.code !== 'Backspace') {
      el.preventDefault();
    }
    if ((el.code === 'ShiftLeft' && altLeftKey.classList.contains('active')) || (el.code === 'AltLeft' && shiftLeftKey.classList.contains('active'))) {
      console.log('test 1');
      shiftLeftKey.classList.add('active');
      altLeftKey.classList.add('active');
      shiftUp();
      if (currentLanguage === 'eng') {
        currentLanguage = 'ru';
        ruKeys.forEach((e) => {
          e.classList.remove('hidden');
        });
        engKeys.forEach((e) => {
          e.classList.add('hidden');
        });
      } else if (currentLanguage === 'ru') {
        currentLanguage = 'eng';
        ruKeys.forEach((e) => {
          e.classList.add('hidden');
        });
        engKeys.forEach((e) => {
          e.classList.remove('hidden');
        });
      }
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
    } else if (el.key === keyboardKeys[i].getElementsByClassName('key__center')[0].textContent) {
      keyboardKeys[i].classList.add('active');
      mainTextarea.value += keyboardKeys[i].getElementsByClassName('key__center')[0].textContent;
    } else if (typeof keyboardKeys[i].getElementsByClassName('key__aside')[0] !== 'undefined') {
      if (el.key === keyboardKeys[i].getElementsByClassName('key__aside')[0].textContent) {
        keyboardKeys[i].classList.add('active');
        mainTextarea.value += keyboardKeys[i].getElementsByClassName('key__aside')[0].textContent;
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
    } else if (el.key === keyboardKeys[i].getElementsByClassName('key__center')[0].textContent) {
      keyboardKeys[i].classList.remove('active');
    } else if (typeof keyboardKeys[i].getElementsByClassName('key__aside')[0] !== 'undefined') {
      if (el.key === keyboardKeys[i].getElementsByClassName('key__aside')[0].textContent) {
        keyboardKeys[i].classList.remove('active');
      }
    }
  }
}

function pressMouseDown(e) {
  console.log(e.target);
  const targetElement = e.target;
  let target = targetElement.parentElement;
  if (target.tagName === 'DIV') {
    target = e.target;
  }
  let elementClassCenter = target.getElementsByClassName('key__center')[0].textContent;
  let elementClassAside = '';
  console.log(elementClassCenter + ` - key_center`);
  if (typeof target.getElementsByClassName('key__aside')[0] !== 'undefined') {
    elementClassAside = target.getElementsByClassName('key__aside')[0].textContent;
  }
  console.log(elementClassAside + ` - key_aside`);
  if (elementClassCenter === 'Backspace' && !mainTextarea.classList.contains('active--textarea')) {
    removeLastChar();
  } else if (elementClassCenter === 'Backspace' && mainTextarea.classList.contains('active--textarea')) {
    removeLeftChar();
  } else if (elementClassCenter === 'Del') {
    removeRightChar();
  } else if (elementClassCenter === 'Tab') {
    mainTextarea.value += '    ';
  } else if (elementClassCenter === 'Enter') {
    mainTextarea.value += '\n';
  } else if (elementClassCenter === 'Shift') {
    shiftUp();
  } else if (elementClassCenter === 'Ctrl') {
    return;
  } else if (elementClassCenter === 'Alt') {
    return;
  } else if (elementClassCenter === '⊞') {
    return;
  } else if (elementClassCenter === 'Caps Lock') {
    if (isFirstClick) {
      return;
    } else {
      capsLockKey.classList.toggle('active');
      capsLockToggle();
    }
  } else if (capsLockKey.classList.contains('active') === true) {
    mainTextarea.value += elementClassCenter.toUpperCase();
  } else if (capsLockKey.classList.contains('active') === false) {
    mainTextarea.value += elementClassCenter.toLowerCase();
  } else if (shiftLeftKey.classList.contains('active') === true || shiftRightKey.classList.contains('active') === true) {
    mainTextarea.value += elementClassAside;
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
  let elementClassCenter = target.getElementsByClassName('key__center')[0].textContent;
  let elementClassAside = '';
  if (typeof target.getElementsByClassName('key__aside')[0] !== 'undefined') {
    elementClassAside = target.getElementsByClassName('key__aside')[0].textContent;
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

mainTextarea.addEventListener('click', function () {
  mainTextarea.classList.add('active--textarea');
  mainTextarea.addEventListener('blur', returnFocus);
});

window.addEventListener('click', function (clickOutsideTextarea) {
  console.log(clickOutsideTextarea.target);
  if (!mainTextarea.contains(clickOutsideTextarea.target)) {
    mainTextarea.classList.remove('active--textarea');
    mainTextarea.removeEventListener('blur', returnFocus);
    mainTextarea.blur();
  }
});

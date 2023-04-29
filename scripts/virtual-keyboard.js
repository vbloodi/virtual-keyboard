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
let keyboardRows = document.querySelectorAll('.row');
let keyboardKeys = document.querySelectorAll('.key');
let engKeys = document.querySelectorAll('.eng');
let ruKeys = document.querySelectorAll('.ru');
let caseDownKeys = document.querySelectorAll('.caseDown');
let caseUpKeys = document.querySelectorAll('.caseUp');
let capsKeys = document.querySelectorAll('.caps');
let shiftCapsKeys = document.querySelectorAll('.shiftCaps');

function removeLastChar() {
  mainTextarea.value = mainTextarea.value.slice(0, -1);
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

window.addEventListener('keydown', function (el) {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (el.code !== 'Delete' && el.code !== 'Backspace') {
      el.preventDefault();
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
      capsLockKey.classList.toggle('active');
      capsLockToggle();
      break;
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
});

// TODO: fix initial Caps Lock wrong symbols bug

window.addEventListener('keyup', function (el) {
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
});

mainTextarea.addEventListener('click', function () {
  mainTextarea.classList.add('active--textarea');
});

window.addEventListener('click', function (clickOutsideTextarea) {
  if (!mainTextarea.contains(clickOutsideTextarea.target)) {
    mainTextarea.classList.remove('active--textarea');
  }
});

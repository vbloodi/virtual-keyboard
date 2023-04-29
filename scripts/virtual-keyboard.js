let mainContainer = document.querySelector('.main__container');
let mainTextarea = document.querySelector('.main__textarea');
let mainKeyboard = document.querySelector('.main__keyboard');
let spaceKey = document.querySelector('.Space');
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

// console.log(caseDownKeys[i].getElementsByClassName('key__center')[0].textContent);

window.addEventListener('keydown', function (el) {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (el.code === 'Space') {
      spaceKey.classList.add('active--space');
    } else if (el.code === 'ShiftLeft') {
      shiftLeftKey.classList.add('active');
    } else if (el.code === 'ShiftRight') {
      shiftRightKey.classList.add('active');
    } else if (el.code === 'AltLeft') {
      altLeftKey.classList.add('active');
    } else if (el.code === 'AltRight') {
      altRightKey.classList.add('active');
    } else if (el.code === 'ControlLeft') {
      controlLeftKey.classList.add('active');
    } else if (el.code === 'ControlRight') {
      controlRightKey.classList.add('active');
    } else if (el.code === 'CapsLock') {
      capsLockKey.classList.add('active');
    } else if (el.code === 'Delete') {
      deleteKey.classList.add('active');
    } else if (el.code === 'ArrowUp') {
      arrowUpKey.classList.add('active');
    } else if (el.code === 'ArrowDown') {
      arrowDownKey.classList.add('active');
    } else if (el.code === 'ArrowLeft') {
      arrowLeftKey.classList.add('active');
    } else if (el.code === 'ArrowRight') {
      arrowRightKey.classList.add('active');
    } else if (el.code === 'MetaLeft') {
      metaKey.classList.add('active');
    } else if (el.key === keyboardKeys[i].getElementsByClassName('key__center')[0].textContent) {
      console.log(keyboardKeys[i]);
      keyboardKeys[i].classList.add('active');
    }
  }
});

window.addEventListener('keyup', function (el) {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (el.code === 'Space') {
      spaceKey.classList.remove('active--space');
    } else if (el.code === 'ShiftLeft') {
      shiftLeftKey.classList.remove('active');
    } else if (el.code === 'ShiftRight') {
      shiftRightKey.classList.remove('active');
    } else if (el.code === 'AltLeft') {
      altLeftKey.classList.remove('active');
    } else if (el.code === 'AltRight') {
      altRightKey.classList.remove('active');
    } else if (el.code === 'ControlLeft') {
      controlLeftKey.classList.remove('active');
    } else if (el.code === 'ControlRight') {
      controlRightKey.classList.remove('active');
    } else if (el.code === 'CapsLock') {
      capsLockKey.classList.remove('active');
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
      console.log(keyboardKeys[i]);
      keyboardKeys[i].classList.remove('active');
    }
  }
});

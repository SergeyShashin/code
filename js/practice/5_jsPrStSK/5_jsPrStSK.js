'use strict';

/**
 * Давайте реализуем экранную клавиатуру. 
 * На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. 
 * Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.
*/

const screenKeyboard = {
  screenKeyboardEl: null,
  keyboard: null,
  monitorEl: null,
  keysElements: null,
  functionKeys: null,
  capsLock: null,

  init() {
    this.screenKeyboardEl = document.getElementById('screenKeyboard');
    this.monitorEl = document.getElementById('monitor');
    this.capsLock = false;
    this.keyboard = {
      0: [
        { keyEngMax: 'Esc', key: 'Esc', code: 'Escape' },
        { keyEngMax: 'F1', key: 'F1', code: 'F1' },
        { keyEngMax: 'F2', key: 'F2', code: 'F2' },
        { keyEngMax: 'F3', key: 'F3', code: 'F3' },
        { keyEngMax: 'F4', key: 'F4', code: 'F4' },
        { keyEngMax: 'F5', key: 'F5', code: 'F5' },
        { keyEngMax: 'F6', key: 'F6', code: 'F6' },
        { keyEngMax: 'F7', key: 'F7', code: 'F7' },
        { keyEngMax: 'F8', key: 'F8', code: 'F8' },
        { keyEngMax: 'F9', key: 'F9', code: 'F9' },
        { keyEngMax: 'F10', key: 'F10', code: 'F10' },
        { keyEngMax: 'F11', key: 'F11', code: 'F11' },
        { keyEngMax: 'PrtSc', key: 'PrtSc', code: '' },
        { keyEngMax: 'Pause', key: 'Pause', code: 'Pause' },
        { keyEngMax: 'Ins', key: 'Ins', code: 'Insert' },
        { keyEngMax: 'Del', key: 'Del', code: 'Delete' },
        { keyEngMax: 'Home', key: 'Home', code: 'Home' },
        { keyEngMax: 'PageUp', key: 'PageUp', code: 'PageUp' },
        { keyEngMax: 'PageDown', key: 'PageDown', code: 'PageDown' },
        { keyEngMax: 'End', key: 'End', code: 'End' },
      ],
      1: [
        { keyEngMax: '`', key: '`', code: 'Backquote' },
        { keyEngMax: '1', key: '1', code: 'Digit1' },
        { keyEngMax: '2', key: '2', code: 'Digit2' },
        { keyEngMax: '3', key: '3', code: 'Digit3' },
        { keyEngMax: '4', key: '4', code: 'Digit4' },
        { keyEngMax: '5', key: '5', code: 'Digit5' },
        { keyEngMax: '6', key: '6', code: 'Digit6' },
        { keyEngMax: '7', key: '7', code: 'Digit7' },
        { keyEngMax: '8', key: '8', code: 'Digit8' },
        { keyEngMax: '9', key: '9', code: 'Digit9' },
        { keyEngMax: '0', key: '0', code: 'Digit0' },
        { keyEngMax: 'Backspace', key: 'Backspace', code: 'Backspace' },
        { keyEngMax: 'NumLock', key: 'NumLock', code: 'NumLock' },
        { keyEngMax: '/', key: '/', code: 'NumpadDivide' },
        { keyEngMax: '*', key: '*', code: 'NumpadMultiply' },
        { keyEngMax: '-', key: '-', code: 'NumpadSubtract' },
      ],
      2: [
        { keyEngMax: 'Tab', key: 'Tab', code: 'Tab' },
        { keyEngMax: 'Q', key: 'q', code: 'KeyQ' },
        { keyEngMax: 'W', key: 'w', code: 'KeyW' },
        { keyEngMax: 'E', key: 'e', code: 'KeyE' },
        { keyEngMax: 'R', key: 'r', code: 'KeyR' },
        { keyEngMax: 'T', key: 't', code: 'KeyT' },
        { keyEngMax: 'Y', key: 'y', code: 'KeyY' },
        { keyEngMax: 'U', key: 'u', code: 'KeyU' },
        { keyEngMax: 'I', key: 'i', code: 'KeyI' },
        { keyEngMax: 'O', key: 'o', code: 'KeyO' },
        { keyEngMax: 'P', key: 'p', code: 'KeyP' },
        { keyEngMax: '[', key: '[', code: 'BracketLeft' },
        { keyEngMax: ']', key: ']', code: 'BracketRight' },
        { keyEngMax: '\\', key: '\\', code: 'Backslash' },
        { keyEngMax: '7', key: '7', code: 'Numpad7' },
        { keyEngMax: '8', key: '8', code: 'Numpad8' },
        { keyEngMax: '9', key: '9', code: 'Numpad9' },
        { keyEngMax: '+', key: '+', code: 'NumpadAdd' },
      ],
      3: [
        { keyEngMax: 'CapsLock', key: 'CapsLock', code: 'CapsLock' },
        { keyEngMax: 'A', key: 'a', code: 'KeyA' },
        { keyEngMax: 'S', key: 's', code: 'KeyS' },
        { keyEngMax: 'D', key: 'd', code: 'KeyD' },
        { keyEngMax: 'F', key: 'f', code: 'KeyF' },
        { keyEngMax: 'G', key: 'g', code: 'KeyG' },
        { keyEngMax: 'H', key: 'h', code: 'KeyH' },
        { keyEngMax: 'J', key: 'j', code: 'KeyJ' },
        { keyEngMax: 'K', key: 'k', code: 'KeyK' },
        { keyEngMax: 'L', key: 'l', code: 'KeyL' },
        { keyEngMax: ';', key: ';', code: 'Semicolon' },
        { keyEngMax: "'", key: "'", code: 'Quote' },
        { keyEngMax: 'Enter', key: 'Enter', code: 'Enter' },
        { keyEngMax: '4', key: '4', code: 'Numpad4' },
        { keyEngMax: '5', key: '5', code: 'Numpad5' },
        { keyEngMax: '6', key: '6', code: 'Numpad6' },
        { keyEngMax: '', key: '', code: '' },
      ],
      4: [
        { keyEngMax: 'Shift', key: 'Shift', code: 'ShiftLeft' },
        { keyEngMax: 'Z', key: 'z', code: 'KeyZ' },
        { keyEngMax: 'X', key: 'x', code: 'KeyX' },
        { keyEngMax: 'C', key: 'c', code: 'KeyC' },
        { keyEngMax: 'V', key: 'v', code: 'KeyV' },
        { keyEngMax: 'B', key: 'b', code: 'KeyB' },
        { keyEngMax: 'N', key: 'n', code: 'KeyN' },
        { keyEngMax: 'M', key: 'm', code: 'KeyM' },
        { keyEngMax: ',', key: ',', code: 'Comma' },
        { keyEngMax: '.', key: '.', code: 'Period' },
        { keyEngMax: '/', key: '/', code: 'Slash' },
        { keyEngMax: 'Shift', key: 'Shift', code: 'ShiftRight' },
        { keyEngMax: '1', key: '1', code: 'Numpad1' },
        { keyEngMax: '2', key: '2', code: 'Numpad2' },
        { keyEngMax: '3', key: '3', code: 'Numpad3' },
        { keyEngMax: '', key: '', code: '' },
      ],
      5: [
        { keyEngMax: 'Control', key: 'Control', code: 'ControlLeft' },
        { keyEngMax: 'Fn', key: 'Fn', code: '' },
        { keyEngMax: 'Meta', key: 'Meta', code: 'MetaLeft' },
        { keyEngMax: 'Alt', key: 'Alt', code: 'AltLeft' },
        { keyEngMax: 'Space', key: 'Space', code: 'Space' },
        { keyEngMax: 'Alt', key: 'Alt', code: 'AltRight' },
        { keyEngMax: 'ContextMenu', key: 'ContextMenu', code: 'ContextMenu' },
        { keyEngMax: 'Control', key: 'Control', code: 'ControlRight' },
        { keyEngMax: 'ArrowLeft', key: 'ArrowLeft', code: 'ArrowLeft' },
        { keyEngMax: 'ArrowDown', key: 'ArrowDown', code: 'ArrowDown' },
        { keyEngMax: 'ArrowRight', key: 'ArrowRight', code: 'ArrowRight' },
        { keyEngMax: 'ArrowUp', key: 'ArrowUp', code: 'ArrowUp' },
        { keyEngMax: '0', key: '0', code: 'Numpad0' },
        { keyEngMax: '.', key: '.', code: 'NumpadDecimal' },
        { keyEngMax: 'Enter', key: 'Enter', code: 'NumpadEnter' }
      ],
    };
    this.functionKeys = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9',
      'F10', 'F11', 'PrtSc', '', 'Pause', 'Ins', 'Del', 'Home', 'PageUp', 'PageDown', 'End',
      'Backspace', 'NumLock', 'Tab', 'CapsLock', 'Enter', 'Shift',
      'Control', 'Fn', 'Meta', 'Alt', 'Space', 'ContextMenu', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];
    this.keysElements = {};
    this.setEventHandlers();
    this.createKeyboard();
  },

  setEventHandlers() {
    this.screenKeyboardEl.addEventListener('click', e => this.handlerClick(e));
  },

  handlerClick(e) {
    let contentKey = e.target.textContent;
    let tagName = e.target.tagName;

    if (contentKey === 'Backspace') {
      this.deleteLastChar();
    }

    if (contentKey === 'CapsLock') {
      this.capsLock = !this.capsLock;
      this.createKeyboard();
    }

    if (tagName !== 'TD' || this.functionKeys.includes(contentKey)) {
      return
    }

    this.monitorEl.value += this.capsLock ? contentKey.toUpperCase() : contentKey;
  },

  createKeyboard() {
    this.screenKeyboardEl.innerHTML = '';
    let rowsKeyboard = Object.values(this.keyboard);

    for (let rowArr of rowsKeyboard) {
      let trEl = document.createElement('tr');
      for (let keyObj of rowArr) {
        let tdEl = document.createElement('td');
        tdEl.textContent = this.capsLock ? keyObj.keyEngMax : keyObj.key;
        tdEl.dataset.code = keyObj.code;
        tdEl.dataset.key = keyObj.key;
        this.keysElements[keyObj.key] = tdEl;
        trEl.appendChild(tdEl);
      }
      this.screenKeyboardEl.appendChild(trEl)
    }
  },

  deleteLastChar() {
    this.monitorEl.value = this.monitorEl.value.replace(/[\w\sа-яё`]$/i, '');
  }
}

window.onload = () => screenKeyboard.init();
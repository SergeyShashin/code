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
        { key: 'Esc', code: 'Escape' },
        { key: 'F1', code: 'F1' },
        { key: 'F2', code: 'F2' },
        { key: 'F3', code: 'F3' },
        { key: 'F4', code: 'F4' },
        { key: 'F5', code: 'F5' },
        { key: 'F6', code: 'F6' },
        { key: 'F7', code: 'F7' },
        { key: 'F8', code: 'F8' },
        { key: 'F9', code: 'F9' },
        { key: 'F10', code: 'F10' },
        { key: 'F11', code: 'F11' },
        { key: 'PrtSc', code: '' },
        { key: 'Pause', code: 'Pause' },
        { key: 'Ins', code: 'Insert' },
        { key: 'Del', code: 'Delete' },
        { key: 'Home', code: 'Home' },
        { key: 'PageUp', code: 'PageUp' },
        { key: 'PageDown', code: 'PageDown' },
        { key: 'End', code: 'End' },
      ],
      1: [
        { key: '`', code: 'Backquote' },
        { key: '1', code: 'Digit1' },
        { key: '2', code: 'Digit2' },
        { key: '3', code: 'Digit3' },
        { key: '4', code: 'Digit4' },
        { key: '5', code: 'Digit5' },
        { key: '6', code: 'Digit6' },
        { key: '7', code: 'Digit7' },
        { key: '8', code: 'Digit8' },
        { key: '9', code: 'Digit9' },
        { key: '0', code: 'Digit0' },
        { key: 'Backspace', code: 'Backspace' },
        { key: 'NumLock', code: 'NumLock' },
        { key: '/', code: 'NumpadDivide' },
        { key: '*', code: 'NumpadMultiply' },
        { key: '-', code: 'NumpadSubtract' },
      ],
      2: [
        { key: 'Tab', code: 'Tab' },
        { key: 'q', code: 'KeyQ' },
        { key: 'w', code: 'KeyW' },
        { key: 'e', code: 'KeyE' },
        { key: 'r', code: 'KeyR' },
        { key: 't', code: 'KeyT' },
        { key: 'y', code: 'KeyY' },
        { key: 'u', code: 'KeyU' },
        { key: 'i', code: 'KeyI' },
        { key: 'o', code: 'KeyO' },
        { key: 'p', code: 'KeyP' },
        { key: '[', code: 'BracketLeft' },
        { key: ']', code: 'BracketRight' },
        { key: '\\', code: 'Backslash' },
        { key: '7', code: 'Numpad7' },
        { key: '8', code: 'Numpad8' },
        { key: '9', code: 'Numpad9' },
        { key: '+', code: 'NumpadAdd' },
      ],
      3: [
        { key: 'CapsLock', code: 'CapsLock' },
        { key: 'a', code: 'KeyA' },
        { key: 's', code: 'KeyS' },
        { key: 'd', code: 'KeyD' },
        { key: 'f', code: 'KeyF' },
        { key: 'g', code: 'KeyG' },
        { key: 'h', code: 'KeyH' },
        { key: 'j', code: 'KeyJ' },
        { key: 'k', code: 'KeyK' },
        { key: 'l', code: 'KeyL' },
        { key: ';', code: 'Semicolon' },
        { key: "'", code: 'Quote' },
        { key: 'Enter', code: 'Enter' },
        { key: '4', code: 'Numpad4' },
        { key: '5', code: 'Numpad5' },
        { key: '6', code: 'Numpad6' },
        { key: '', code: '' },
      ],
      4: [
        { key: 'Shift', code: 'ShiftLeft' },
        { key: 'z', code: 'KeyZ' },
        { key: 'x', code: 'KeyX' },
        { key: 'c', code: 'KeyC' },
        { key: 'v', code: 'KeyV' },
        { key: 'b', code: 'KeyB' },
        { key: 'n', code: 'KeyN' },
        { key: 'm', code: 'KeyM' },
        { key: ',', code: 'Comma' },
        { key: '.', code: 'Period' },
        { key: '/', code: 'Slash' },
        { key: 'Shift', code: 'ShiftRight' },
        { key: '1', code: 'Numpad1' },
        { key: '2', code: 'Numpad2' },
        { key: '3', code: 'Numpad3' },
        { key: '', code: '' },
      ],
      5: [
        { key: 'Control', code: 'ControlLeft' },
        { key: 'Fn', code: '' },
        { key: 'Meta', code: 'MetaLeft' },
        { key: 'Alt', code: 'AltLeft' },
        { key: 'Space', code: 'Space' },
        { key: 'Alt', code: 'AltRight' },
        { key: 'ContextMenu', code: 'ContextMenu' },
        { key: 'Control', code: 'ControlRight' },
        { key: 'ArrowLeft', code: 'ArrowLeft' },
        { key: 'ArrowDown', code: 'ArrowDown' },
        { key: 'ArrowRight', code: 'ArrowRight' },
        { key: 'ArrowUp', code: 'ArrowUp' },
        { key: '0', code: 'Numpad0' },
        { key: '.', code: 'NumpadDecimal' },
        { key: 'Enter', code: 'NumpadEnter' }
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
    }

    if (tagName !== 'TD' || this.functionKeys.includes(contentKey)) {
      return
    }

    this.monitorEl.value += this.capsLock ? contentKey.toUpperCase() : contentKey;
  },

  createKeyboard() {
    let rowsKeyboard = Object.values(this.keyboard);

    for (let rowArr of rowsKeyboard) {
      let trEl = document.createElement('tr');
      for (let keyObj of rowArr) {
        let tdEl = document.createElement('td');
        tdEl.textContent = keyObj.key;
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
const bindKey = (key: String, callback: Function): void => {
  window.addEventListener('keyup', (evt) => {
    if (evt.key == key) {
      callback()
    }
  })
}

export { bindKey }

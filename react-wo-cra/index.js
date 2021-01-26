

const HelloButton = () => {
  const message = "Hello React!"

  return React.createElement('button', null, message)
}

const domConatiner = document.querySelector('#main')

ReactDOM.render(React.createElement(HelloButton), domConatiner)
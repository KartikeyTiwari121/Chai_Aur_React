import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type:"a",
//   props:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children:"Click me ro go google"
// }
const newUser = "Who I am"
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  "Google Visit", 
  newUser
)

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

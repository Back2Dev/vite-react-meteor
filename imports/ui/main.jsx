import React from "react"
import ReactDOM from "react-dom/client"
import Hello from "./Hello"

Meteor.startup(() => {
  ReactDOM.createRoot(document.getElementById("react-target")).render(
    <Hello></Hello>
  )
})

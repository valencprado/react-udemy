import React from "react"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/AppContext"
export const H1  = () => {
  const theContext = useContext(GlobalContext)
  const { contextState: {title} } = theContext
  return (
    <h1>{title}</h1>
  )
}

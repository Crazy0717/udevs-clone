"use client"
import React, { useState } from "react"
import "./Input.scss"

interface propsTypes {
  placeholder: string
  textarea?: boolean
}

const Input = ({ placeholder, textarea }: propsTypes) => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState("")

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(e.target.value)

  return (
    <div className="input-field">
      <input
        type="text"
        className="google-input"
        id={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        style={{ display: textarea ? "none" : "inline-block" }}
      />
      <textarea
        style={{ display: textarea ? "inline-block" : "none" }}
        className="google-input"
        name=""
        id={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      ></textarea>
      <label
        className={`g-label ${isFocused || value ? "active" : ""}`}
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
    </div>
  )
}

export default Input

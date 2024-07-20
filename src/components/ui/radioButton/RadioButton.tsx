import "./RadioButton.scss"

interface propsTypes {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

const RadioButton = ({ options, value, onChange }: propsTypes) => {
  return (
    <>
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name="radio"
            value={option.value}
            checked={value === option.value}
            onClick={() => onChange(option.value)}
            className="radio-input"
          />
          <span className="radio-button"></span>
          {option.label}
        </label>
      ))}
    </>
  )
}

export default RadioButton

import "./Dropdown.scss"

interface propsTypes {
  linkText: string
  dropdownTitle?: string
  children: React.ReactNode
}

const Dropdown = ({ linkText, dropdownTitle, children }: propsTypes) => {
  return (
    <div className="dropdown">
      <p className="dropdown_trigger" role="button" tabIndex={0}>
        {linkText}
      </p>
      <ul className="dropdown_menu">
        <p className="dropdown_title">{dropdownTitle}</p>
        {children}
      </ul>
    </div>
  )
}

export default Dropdown

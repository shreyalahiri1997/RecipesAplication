import React from 'react'
import './style.scss'

const Dropdown = (props) => {
    return (
        <div>
            <div className="dropdown">
                <span className="dropdown-title">
                    {props.dropdownTitle.toUpperCase()}
                </span>
                <div className="dropdown-content">
                    <ul className="dropdown-list">
                        {props.dropdownValues.map((val) => (
                            <li
                                className={
                                    props.selectedValue === val
                                        ? 'dropdown-menu selected'
                                        : 'dropdown-menu'
                                }
                                onClick={() => {
                                    props.selectedValue === val
                                        ? props.clickHandler('')
                                        : props.clickHandler(val)
                                }}
                            >
                                {val}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown

import React from 'react'
import './style.scss'

const FilterBarHoc = (ChildComponent) => {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <div className="sidenav"></div>
                    <div className="content">
                        <ChildComponent />
                    </div>
                </div>
            )
        }
    }
}

export default FilterBarHoc

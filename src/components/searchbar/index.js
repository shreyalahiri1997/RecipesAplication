import React from 'react'
import './style.scss'
import searchLogo from '../../assets/search-icon.png'
import Dropdown from '../dropdown'
import { difficultyValues, typeValues } from '../../constants/filterOptions'
import ClearButton from '../clearButton'
import { useNavigate } from 'react-router-dom'

const Searchbar = (props) => {
    const [searchValue, setSearchValue] = React.useState('')
    const [searchList, setSearchList] = React.useState([])

    React.useEffect(() => {
        setSearchList(
            props.allRecipes.filter((val) =>
                val.title.match(new RegExp(searchValue, 'ig'))
            )
        )
    }, [searchValue, props])

    const navigate = useNavigate()

    const searchClickHandler = (val) => {
        props.setCurrentRecipe(val)
        navigate(`/recipes/${val.sys.id}`)
        setSearchList([])
        setSearchValue('')
    }

    const homeNavigator = () => {
        props.clearAllFilters()
        navigate('/')
    }

    return (
        <div className="searchbar">
            <div>
                <input
                    placeholder="Search what you wish to cook today..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <img alt="search-logo" src={searchLogo} />

                {searchValue &&
                    (searchList.length !== 0 ? (
                        <ul id="myUL">
                            {searchList.map((val) => (
                                <li onClick={() => searchClickHandler(val)}>
                                    {val.title}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul id="myUL">
                            <li>No results are found matching your query</li>
                        </ul>
                    ))}
            </div>

            {props.currentRecipe === null ? (
                <div className="filter-bar">
                    <ClearButton
                        clickHandler={props.clearAllFilters}
                        buttonText="CLEAR"
                    />
                    <Dropdown
                        dropdownValues={difficultyValues}
                        selectedValue={props.categoryFilter}
                        clickHandler={props.setCategoryFilter}
                        dropdownTitle="Difficulty Level"
                    />
                    <Dropdown
                        dropdownValues={typeValues}
                        selectedValue={props.typeFilter}
                        clickHandler={props.setTypeFilter}
                        dropdownTitle="Category"
                    />
                </div>
            ) : (
                <ClearButton clickHandler={homeNavigator} buttonText="HOME" />
            )}
        </div>
    )
}
export default Searchbar

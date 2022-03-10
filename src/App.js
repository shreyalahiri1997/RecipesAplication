import './App.css'
import RecipeCollectionView from './containers/recipeCollectionView'
import RecipeDescription from './containers/recipeDescription'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import HeaderComponent from './components/header'

function App() {
    return (
        <Router>
            <Fragment>
                <HeaderComponent />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<RecipeCollectionView />}
                    ></Route>
                    <Route
                        path="/recipes/:id"
                        element={<RecipeDescription />}
                    />
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './root'
import styled from 'styled-components'
import { JobsList } from './containers'
import { Header } from './modules/Header'
import { Vacancy } from './containers'
import { FavouriteList } from './modules/FavouriteList'

const MainContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
`

const App = () => {
  return (
    <MainContainer>
      <Provider store={store}>
        <>
          <Router>
            <Header />
            <Route path="/" exact component={JobsList} />
            <Route path="/favourites" component={FavouriteList} />
            <Route path="/positions/:id" component={Vacancy} />
          </Router>
        </>
      </Provider>
    </MainContainer>
  )
}

export default App

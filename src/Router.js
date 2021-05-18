import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Editor from './components/Editor'
import Footer from './components/Footer'
import Home from './components/Home'
import ThemeToggler from './components/ThemeToggler'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: window.innerHeight
  }
}))

export default function Router() {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <Switch>
        <Container maxWidth='md' className={classes.container}>
          {/* <ThemeToggler /> */}
          <Route path='/' exact component={Home} />
          <Route path='/p/new' component={Editor} />
          <Footer />
        </Container>
      </Switch>
    </BrowserRouter>
  )
}

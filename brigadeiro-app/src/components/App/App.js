import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import FirebaseService from '../../services/firebaseService'
import HistoryList from '../HistoryList'
import CandyCard from '../CandyCard'

import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Fab from '@material-ui/core/Fab'
import CartIcon from '@material-ui/icons/ShoppingCart'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    margin: '30px 0px',
    width: '100%'
  },
  center: {
    textAlign: 'center'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
})

const App = props => {
  const { classes } = props

  const [sell, setSells] = useState([])
  const [loading, setLoading] = useState(false)
  const [types, setTypes] = useState({
    preto: 0,
    branco: 0,
    churros: 0
  })

  useEffect(() => {
    FirebaseService.getDataList('historico', data => {
      setSells(data)
      console.log(data)
    })
  }, [])

  function handleTypeChange (type, qtd) {
    let toUpdate = types
    toUpdate[type] = qtd
    setTypes({ ...toUpdate })
  }

  function handleBuy () {
    setLoading(true)

    const d = new Date()
    const currDate = d.getDate()
    const currMonth = d.getMonth() + 1
    const currYear = d.getFullYear()

    const newData = {
      nome: 'Arthur',
      sabores: {
        ...types
      },
      createdAt: `${currDate}/${currMonth}/${currYear}`
    }
    FirebaseService.pushData('historico', newData, () => {
      setLoading(false)
    })
  }

  return (
    <div>
      <CssBaseline />
      <Grid container justify='center' spacing={24} className={classes.root}>
        <Grid item xs={12} sm={3}>
          <CandyCard
            candyType='preto'
            candyQtd={types.preto}
            changeQtd={event => handleTypeChange('preto', event)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CandyCard
            candyType='branco'
            candyQtd={types.branco}
            changeQtd={event => handleTypeChange('branco', event)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CandyCard
            candyType='churros'
            candyQtd={types.churros}
            changeQtd={event => handleTypeChange('churros', event)}
          />
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Grid item xs={12} sm={8}>
          <Typography gutterBottom variant='h5' component='h2'>
            Últimas vendas
          </Typography>
          <HistoryList items={sell} />
        </Grid>
      </Grid>

      {loading ? (
        <CircularProgress className={classes.fab} />
      ) : (
        <Fab
          color='secondary'
          size='large'
          aria-label='Add'
          className={classes.fab}
          onClick={handleBuy}
        >
          <CartIcon />
        </Fab>
      )}
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)

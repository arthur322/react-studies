import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({})

const CandyCard = props => {
  const { classes } = props

  const types = {
    preto: [
      'Brigadeiro Tradicional',
      'O doce típico da culinária brasileira no seu mais popular sabor chocolate.',
      'images/tradicional.jpg'
    ],
    branco: [
      'Brigadeiro Branco',
      'Receita fora do comum, delicioso e nada enjoativo.',
      'images/branco.png'
    ],
    churros: [
      'Brigadeiro de Churros',
      'A mistura de dois deliciosos doces em uma explosão de sabor!',
      'images/churros.jpg'
    ]
  }

  function handleType (event) {
    props.changeQtd(Number(event.target.value))
  }

  function handleClick (type) {
    console.log(props.changeQtd)
    props.changeQtd(
      type === '-'
        ? props.candyQtd > 0
          ? props.candyQtd - 1
          : 0
        : props.candyQtd + 1
    )
  }

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          image={types[props.candyType][2]}
          title={types[props.candyType][0]}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {types[props.candyType][0]}
          </Typography>
          <Typography component='p'>{types[props.candyType][1]}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          color='primary'
          size='small'
          aria-label='Add'
          disabled={props.loading}
          onClick={() => handleClick('-')}
        >
          <RemoveIcon />
        </IconButton>

        <TextField
          id='outlined-name'
          label='Quantidade'
          margin='normal'
          type='number'
          value={props.candyQtd}
          onChange={handleType}
          className={classes.input}
          variant='outlined'
          disabled={props.loading}
        />

        <IconButton
          color='primary'
          size='small'
          aria-label='Add'
          disabled={props.loading}
          onClick={() => handleClick('+')}
        >
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

CandyCard.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.bool,
  candyQtd: PropTypes.number,
  changeQtd: PropTypes.func,
  candyType: PropTypes.string
}

export default withStyles(styles)(CandyCard)

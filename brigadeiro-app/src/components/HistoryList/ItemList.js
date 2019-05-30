import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import Badge from '@material-ui/core/Badge'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    fontWeight: 'bold'
  },
  flavors: {
    marginLeft: '20px'
  },
  item: {
    background: 'white'
  },
  itemText: {
    textTransform: 'capitalize'
  }
})

const ItemList = props => {
  const { classes } = props
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <ListItem className={classes.root} onClick={() => setOpen(!isOpen)}>
        <ListItemText primary={props.item.nome} />
      </ListItem>
      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem className={classes.item}>
            {Object.keys(props.item.sabores).map((sabor, index) => {
              if (props.item.sabores[sabor] !== 0) {
                return (
                  <Badge
                    key={index}
                    badgeContent={props.item.sabores[sabor]}
                    color='primary'
                    className={classes.flavors}
                  >
                    <ListItemText
                      primary={sabor}
                      className={classes.itemText}
                    />
                  </Badge>
                )
              }
            })}
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </>
  )
}

ItemList.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.object
}

export default withStyles(styles)(ItemList)

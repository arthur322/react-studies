import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'
import ItemList from './ItemList'

const HistoryList = props => {
  return (
    <List>
      {props.items.map(item => (
        <ItemList key={item.key} item={item} />
      ))}
    </List>
  )
}

HistoryList.propTypes = {
  items: PropTypes.array
}

export default HistoryList

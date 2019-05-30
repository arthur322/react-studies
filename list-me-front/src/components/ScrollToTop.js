import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const ScrollToTop = props => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.location.pathname])

  return props.children
}
/*
class ScrollToTop extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}
 */
export default withRouter(ScrollToTop)

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Header({ text, bgColor, fgColor }) {
  const headerStyles = { backgroundColor: bgColor, color: fgColor }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link style={{ color: fgColor }} to='/'>
          <h1>{text}</h1>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI title',
  bgColor: 'rgba(0,0,0,.4)',
  fgColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
}

export default Header

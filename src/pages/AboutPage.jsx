import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <p>Version 1.0.0</p>
        <p>
          <Link to='/'>Back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage

import spinner from '../assets/loading.gif'

function Spinner() {
  return <img style={{ width: '50px', margin: '2rem auto 0', display: 'block' }} src={spinner} alt='loading...'></img>
}

export default Spinner

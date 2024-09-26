import { Link } from 'react-router-dom'


import Lighthouse01 from './lighthouse01'
import Lighthouse03 from './lighthouse03'
import Lighthouse02 from './lighthouse02'
import Lighthouse04 from './lighthouse04'

const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'> 
    <Link to='/lighthouse01' className='links'>
    <figure className='thumbnail-image-size'>
    <Lighthouse01/>
    <figcaption>lighthouse01</figcaption>
    </figure>
    </Link>
    <Link to='/lighthouse02' className='links'>
    <figure className='thumbnail-image-size'>
    <Lighthouse02/>
    <figcaption>lighthouse02</figcaption>
    </figure>
    </Link>
    <Link to='/lighthouse03' className='links'>
    <figure className='thumbnail-image-size'>
    <Lighthouse03/>
    <figcaption>lighthouse03</figcaption>
    </figure>
    </Link>
    <Link to='/lighthouse04' className='links'>
    <figure className='thumbnail-image-size'>
    <Lighthouse04/>
    <figcaption>lighthouse04</figcaption>
    </figure>
    </Link>
    
    </div>
  )
}

export default Navigation

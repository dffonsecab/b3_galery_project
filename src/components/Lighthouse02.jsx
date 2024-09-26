
import lighthouse02 from '../assets/img/02.jpeg';
import PropTypes from 'prop-types';


const Lighthouse02 = (className) => {
  return (
   <img src={lighthouse02} alt="lighthouse 01" className={className } />
  )
}

export default Lighthouse02

Lighthouse02.PropTypes={

className:PropTypes.string

}
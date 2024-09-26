
import lighthouse01 from '../assets/img/01.jpg';
import PropTypes from 'prop-types';


const Lighthouse01 = ( className ) => {
  return (
   <img src={lighthouse01} alt="lighthouse 01" className={className} />
  )
}

export default Lighthouse01
Lighthouse01.PropTypes={

className:PropTypes.string

}
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faVideo } from '@fortawesome/free-solid-svg-icons'

const Camera = ({ image }) => {
    return (
        <section>
            <h2>Camera</h2>
            <div className='camera'>
                <img src={image} alt='' />
                <button><FontAwesomeIcon icon={faStop} className='fa-icon' /></button>
                <button><FontAwesomeIcon icon={faVideo} className='fa-icon' /></button>
            </div>
        </section>
    )
}

Camera.propTypes = {
    image: PropTypes.string.isRequired
}

export default Camera
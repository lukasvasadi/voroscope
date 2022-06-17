import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faVideo } from '@fortawesome/free-solid-svg-icons'

const Camera = ({ image }) => {
    let imageElement
    if (image) {
        console.log('Inside camera element')
        // console.log(image)
        imageElement = <img src={'data:image/jpeg;base64, ' + image} alt='' />
    } else {
        console.log('Display default image')
        imageElement = <img src={process.env.PUBLIC_URL + '/images/cancer-cells.jpg'} alt='No image default' />
    }
    return (
        <section>
            <h2>Camera</h2>
            <div className='camera'>
                {imageElement}
                <button><FontAwesomeIcon icon={faStop} className='fa-icon' /></button>
                <button><FontAwesomeIcon icon={faVideo} className='fa-icon' /></button>
            </div>
        </section>
    )
}

// Camera.propTypes = {
//     image: PropTypes.string.isRequired
// }

export default Camera
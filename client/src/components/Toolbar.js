import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faRobot, faFileCode, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Toolbar = ({ iconColor }) => {
    return (
        <header>
            <button><FontAwesomeIcon icon={faCog} className='fa-icon' /></button>
            <button><FontAwesomeIcon icon={faRobot} className='fa-icon' /></button>
            <button><FontAwesomeIcon icon={faFileCode} className='fa-icon' /></button>
            <button><FontAwesomeIcon icon={faQuestionCircle} className='fa-icon' /></button>
        </header>
    )
}

export default Toolbar

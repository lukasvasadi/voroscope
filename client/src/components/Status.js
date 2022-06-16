import PropTypes from 'prop-types';

const Status = ({ status }) => {
    return (
        <div className='statusbar'>
            <h3>Status: <span style={{ color: status === 'connected' ? 'green' : 'red'}}>{status}</span></h3>
        </div>
    )
}

Status.defaultProps = {
    status: 'disconnected'
}

Status.propTypes = {
    status: PropTypes.string
}

export default Status

import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,showAdd,toggleShowTask}) => {
    const location=useLocation()
    console.log(location)
    return (
        <header className="header">
            <h1>{title}</h1>
            {
                location.pathname==='/about'
                ?null
                :<Button color={showAdd?"red":"green"} text={showAdd?"Cancel":"Add"} onClick={toggleShowTask}/>
            }
        </header>
    )
}
Header.defaultProps={
    title:'Task Tracker'
}
Header.propTypes={
    title: PropTypes.string.isRequired,
    showAdd:PropTypes.bool.isRequired,
    toggleShowTask:PropTypes.func
}
// const headingStyle={
//     color:'red',
//     backgroundColor:'black'
// }
export default Header

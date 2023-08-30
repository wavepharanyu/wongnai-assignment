import { Link, useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = (props: {name : string}) => {
  return (
    <div className='header-container'>
        <Link to='/' className='header-link'>
            <div className='header-group'>
                <div className='header-logo'>
                    <img className='logo' src="/images/cup.png" alt="logo"/>
                </div>
                <div className='header-name'>
                    <h1 className='text'>{props.name}</h1>
                </div>
            </div>
        </Link>
       
    </div>
  )
}

export default Header
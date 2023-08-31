import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import './Header.scss'

const Header = (props: {name : string, open : string, close: string}) => {
    const {name, open, close} = props
    const calIsOpen = () => {
        const format = 'hh:mm'

        const openTime = moment(open, format)
        const closeTime = moment(close, format)

        if(moment().isBetween(openTime, closeTime)){
            return true;
        }
        else{
            return false;
        }
    }

  return (
    <div className='header-container'>
        <div className='header-group'>
            <Link to='/' className='header-link'>
                <div className='header-logo'>
                    <img className='logo' src="/images/cup.png" alt="logo"/>
                </div>
                <div className='header-name'>
                    <h1 className='text'>{name}</h1>
                    
                </div>
            </Link>
        </div>
        <div className={calIsOpen() ? 'header-open' : 'header-close'}>
            <h3 className='text'>{calIsOpen() ? 'เปิด' : 'ปิด'}</h3>
        </div>
    </div>
  )
}

export default Header
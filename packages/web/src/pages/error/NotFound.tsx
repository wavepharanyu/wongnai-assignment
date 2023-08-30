import Layout from "../../components/Layout"
import { Link } from "react-router-dom";
import './NotFound.scss'

const NotFound = () => {
  return (
    <Layout>
        <div className='notfound-container'>
            <h1 className='title'>404</h1>
            <h2 className='subtitle'>Not Found</h2>
            <p className='detail'>ขออภัยไม่พบหน้าที่คุณค้นหา</p>
            <Link className='button-link' to='/'><button className='button'>กลับหน้าแรก</button></Link>
        </div>
    </Layout>
  )
}

export default NotFound
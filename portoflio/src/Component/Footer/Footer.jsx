import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook , faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Footer() {
  return (
    <>

        <div className='parent position-relative t'>
            <div className='main-bg-color py-5'>
                <div className='container'>
                    <div className='d-flex flex-wrap align-items-center justify-content-between text-center'>

                        <div className='mx-auto'>
                            <p className='mb-0 text-white text-uppercase fw-bold fs-5'>location</p>
                            <p className='mb-0 text-white'>2215 John Daniel Drive</p>
                            <p className='mb-0 text-white'>Clark, MO 65243</p>
                        </div>

                        <div className='d-flex flex-column mx-auto my-md-0 my-5'>
                            <p className='mb-0 text-white text-uppercase fw-bold fs-5'>around the web</p>
                            <ul className='d-flex'>
                                <li className='text-white border rounded-circle px-2 py-1 m-2'>  <FontAwesomeIcon icon={faFacebook} /></li>
                                <li className='text-white border rounded-circle px-2 py-1 m-2'>  <FontAwesomeIcon icon={faTwitter} /></li>
                                <li className='text-white border rounded-circle px-2 py-1 m-2'>  <FontAwesomeIcon icon={faLinkedin} /></li>
                                <li className='text-white border rounded-circle px-2 py-1 m-2'>  <FontAwesomeIcon icon={faGlobe} /></li>
                            </ul>
                        </div>

                        <div className=''>
                            <p className='mb-0 text-white text-uppercase fw-bold fs-5'>about freelance</p>
                            <p className='mb-0 text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center footer-bg-color text-white py-4'>Copyright &copy; Your Website 2021</div>

        </div>
    </>
  )
}

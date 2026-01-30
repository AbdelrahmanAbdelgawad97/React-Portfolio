import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
export default function NotFound() {
  return (
    <>
        <div className='section-hight lightGreen-bg-color'>
            <h1 className='transition50 text-center text-white'>Pag Not Found <FontAwesomeIcon className='text-danger' icon={faBan} /></h1>
        </div>
    
    </>
  )
}

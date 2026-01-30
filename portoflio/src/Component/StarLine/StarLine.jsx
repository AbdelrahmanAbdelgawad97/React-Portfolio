import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import style from './starline.module.css'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)


export default function StarLine({color,bgColor}) {
  return (
    <>
      <div className='text-center d-flex justify-content-center align-items-center'>
        <div className={ `${style[bgColor]} ${style.right}` }></div>
        <div className={`${style[bgColor]} bg-transparent  mx-3  ${style[color]}`}><FontAwesomeIcon icon={faStar} /></div>
        <div className={`${style[bgColor]} ${style.left}`}></div>
      </div>
    </>
  )
}

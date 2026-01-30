import style from './contacts.module.css'
import StarLine from '../StarLine/StarLine'

export default function Contacts() {
  return (
    <>
        <div className={`${style.hightSection} w-50 mx-auto`}>
            <title>Contacts</title>
            <div className="top-15">
                <p className='fs-1 fw-bold text-uppercase text-dark-color'>contacts</p>
                <StarLine color="textDark" bgColor="darkColor"/>
            </div>

            <div className={`${style.inputSelector}`}>
                <input className='w-100 my-4' type="text" placeholder='userName' />
                <input className='w-100 my-4' type="text" placeholder='userAge' />
                <input className='w-100 my-4' type="text" placeholder='userEmail' />
                <input className='w-100 my-4' type="text" placeholder='userPassword' />
                <button className='rounded-3'>send Message</button>
            </div>

        </div>
    
    
    </>
  )
}

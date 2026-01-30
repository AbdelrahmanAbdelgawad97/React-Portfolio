
import photo from "../../assets/face.jpg"
import StarLine from '../StarLine/StarLine'

export default function StartPoint() {
  return (
    <>
        <div className="section-hight lightGreen-bg-color">
            <title>Home</title>
            <div className={`transition50 text-center`}>
                <img src={photo} className='rounded-circle' alt="" />
                <p className=' text-white text-uppercase fw-bold fs-2 mt-3'>start Framework</p>
                <StarLine color="textWhit" bgColor="whiteColor"/>
                <p className=' text-white text-capitalize'>graphic artist - web designer - illustrator</p>
            </div>
        </div>
    </>
  )
}

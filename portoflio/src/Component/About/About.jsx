import StarLine from "../StarLine/StarLine";

export default function About() {
  return (
    <>
        <div className='section-hight lightGreen-bg-color'>
            <title>About</title>
            <div className="transition50 text-center w-100">
                <div className="w-25 mx-auto">
                    <p className="text-uppercase text-white fw-bold fs-2">about component</p>
                    <StarLine color="textWhit" bgColor="whiteColor"/>
                </div>
                 <div className="d-flex justify-content-between align-items-center flex-md-nowrap flex-wrap w-75 mx-auto gap-4 text-white">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                 </div>
            </div>

        </div>
    </>
  )
}

import Bike from '../assets/bike.jpg'
import Cat from  '../assets/cat.jpg'

function About() {
    return (
      <>
      <div className="w-full grid md:grid-cols-[80%,20%]"> 


        <div className="max-w-[700px] flex flex-col space-y-10 m-5" id="about">
            <div>
                <h5>a little bit about me </h5>
                <p className="xl:text-xl">
                    i am an aspiring software engineer who's current interests
                    lie in <span className="font-extrabold">full-stack</span> and <span className="font-extrabold">devops</span>. when i'm
                    not coding, you can probably find me learning
                    new songs on my piano, riding my bike, or petting
                    the stray cat in my neighbourhood! (major cat lover over here)
            </p>
            </div>

            <div>
                <h5>right now, i'm </h5>
                <ul className="xl:text-xl list-disc list-outside marker:text-sm flex flex-col items-start">
                    <li>writing backend code for an internal tool at RBC as a software developer intern</li>
                    <li>currently developing the front-end for an online game of spyfall as a fun mini side project :)</li>
                    <li><span className="font-extrabold">searching for fall 2024 opportunities!</span></li>
                </ul>
            </div>

            <div>
                <h5>previously, </h5>
                <ul className="xl:text-xl list-disc list-outside marker:text-sm flex flex-col items-start">
                    <li>worked as a research assistant developer at mcmaster to develop an online assignment submission system for first year cs students</li>
                    <li>provided lessons for over 100+ elementary students across canada to introduce them into the world of coding!</li>
                </ul>
            </div>
            
            </div>
        
            <div className='m-5 flex md:flex-col md:justify-center xs:flex-row xs:justify-center  gap-20'>
                <img src={Cat} alt="Cat picture" className='h-[180px] w-[200px] bg-muted-grey-80 p-5 shadow-sm' />
                <img src={Bike} alt="Bike picture" className='h-[180px] w-[200px] bg-muted-grey-80 p-5 shadow-sm' />
            </div>
      </div>
      </>
    )
}
  
export default About
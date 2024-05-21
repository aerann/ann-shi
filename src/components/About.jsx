function About() {
    return (
      <>
      <div className="max-w-[950px] flex flex-col space-y-10 m-5">
        <div>
            <h5 className="text-3xl font-extrabold pb-2">a little bit about me </h5>
            <p className="xl:text-xl">
                i am an aspiring software engineer who's current interests
                lie in <span className="font-extrabold">full-stack</span> and <span className="font-extrabold">devops</span>. when i'm
                not coding, you can probably find me learning
                new songs on my piano, riding my bike, or petting
                the stray cat in my neighbourhood! (major cat lover over here)
        </p>
        </div>

        <div>
            <h5 className="text-3xl pb-2 font-extrabold">right now, i'm </h5>
            <ul className="xl:text-xl list-disc list-outside marker:text-sm flex flex-col items-start">
                <li>writing backend code for an internal tool at RBC as a software developer intern</li>
                <li>currently developing the front-end for an online game of spyfall as a fun mini side project :)</li>
                <li>searching for fall 2024 opportunities!</li>
            </ul>
        </div>

        <div>
            <h5 className="text-3xl pb-2 font-extrabold">previously, </h5>
            <ul className="xl:text-xl list-disc list-outside marker:text-sm flex flex-col items-start">
                <li>worked as a research assistant developer at mcmaster to develop an online assignment submission system for first year cs students</li>
                <li>provided lessons for over 100+ elementary students across canada to introduce them into the world of coding!</li>
            </ul>
        </div>
        
      </div>
      </>
    )
}
  
export default About
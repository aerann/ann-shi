const Contact = () => {
    return (
      <>
        <div className="flex flex-col items-center">
          <h5>let's get in touch!</h5>
        
          <div className="grid grid-cols-3 grid-rows-1 gap-6">
            <a href="https://www.linkedin.com/in/annshi1/"><i class="contact-icon i-mdi-linkedin"></i></a>
            <a href="https://github.com/aerann"><i class="contact-icon i-mdi-github"></i></a>
            <a href="mailto:shia15@mcmaster.ca"><i className="contact-icon i-mdi-email"></i></a>
          </div>
        </div>
      </>
    )
}
  
export default Contact
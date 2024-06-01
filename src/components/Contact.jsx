const Contact = () => {
    return (
      <>
        <div className="flex flex-col items-center" id="contact">
          <h5>let's get in touch!</h5>
        
          <div className="grid grid-cols-3 grid-rows-1 gap-6">
            <a href="https://www.linkedin.com/in/annshi1/" target="_blank"><i class="contact-icon i-mdi-linkedin "></i></a>
            <a href="https://github.com/aerann" target="_blank"><i class="contact-icon i-mdi-github"></i></a>
            <a href="mailto:shia15@mcmaster.ca" target="_blank"><i className="contact-icon i-mdi-email"></i></a>
          </div>
        </div>
      </>
    )
}
  
export default Contact
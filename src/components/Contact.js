export default function Contact(person){
    return (
        <section id="contact">
            <div className="row">
                <div className="col" id="contactInfo">
                    <h2>Get In Touch</h2>
                    <p className="contact-message">
                    If you think I would be a good fit for your company, I am currently
                    looking for internship and junior web development or software engineering positions!
                    </p>
                    <a className="btn" href={`mailto:${person.email}`}>CONTACT ME</a>
                </div>
            </div>
      </section>
    )
}
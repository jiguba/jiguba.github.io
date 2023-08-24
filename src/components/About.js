export default function About(props) {
    return (
    <section id="about">
        <div className="row">
            <div className="col col-lg-12" id="profile">
                <img className="image" id="profile_picture" src={props.image} alt =""/>
                <h2>Hello!</h2>
                <p>
                I am a recent graduate of the University of Chicago where I studied computer science! 
                Prior to my studies, I served in the United States Marine Corps as an electronics 
                technician. I am currently interested in pursuing a career in full-stack development.
                </p>
            </div>
        </div>
    </section>
    )
}
export default function About(props) {
    return (
    <section id="about">
        <div className="row">
            <div className="col col-lg-12" id="profile">
                <img className="image" id="profile_picture" src={props.image} alt =""/>
                <h2>Hello!</h2>
                <p>
                I am currently a fourth year student studying computer science at
                the University of Chicago! Prior to my studies, I served in the
                United States Marine Corps as an electronics technician. I am
                currently interested in pursuing a career in full-stack web
                development.
                </p>
            </div>
        </div>
    </section>
    )
}
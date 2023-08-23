export default function SkillDescription(props) {
    return (
    <div className="skill-row">
        <img className={props.class} src={props.image} alt="" />
        <h3>{props.skill}</h3>
        <p className="skill-desc">{props.description}</p>
    </div>)
}


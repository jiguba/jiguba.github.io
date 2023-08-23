export default function Header(basicInfo) {
  return (
    <section id={basicInfo.id}>
      <div className="row">
        <div className="col col-lg-12">
          <img className="top-cloud" src="images/cloud.png" alt="" />
          <h1 id="greeting">I'm {basicInfo.name}</h1>
          <h2 id="statement">a {basicInfo.title} at {basicInfo.company}</h2>
          <img className="bottom-cloud" src="images/cloud.png" alt="" />
          <img id="city" src="images/city.svg" alt="" />
        </div>
      </div>
    </section>
  )
}
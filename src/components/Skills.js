import SkillDescription from "./SkillDescriptions"

const webDescription = "As a web developer, I strive to develop websites that are visually appealing and user friendly. From front-end development to back-end programming, I am committed  to learning and experimenting with the latest technologies that will help bring myclient's vision to life. I am currently working on developing my skills in back-end programming by learning Node.js, Express, and MongoDB."
const userInterfaceDescription = "User design and user experience directly impact the ways users interact with andperceive digital products. Good user design and good user experience can improvecustomer satisfaction, engagement, and retention. With the customer in mind, I aimto create websites and applications that keep important design practices in mind, so that companies can create products that are enjoyable and effective for its users."
const photoDescription = " In my free time I like to create pictures that require patience, skill, and an attention to detail. I am constantly honing my skills incomposition, lighting, and post-processing to create images that capturethe essence of the moment. In particular, I love shooting portraits, landscapes,and when conditions permit, the Milky Way. "

export default function Skills() {
    return (
    <div className="row">
        <div className="col col-lg-12" id="skills">
            <h2>My Skills</h2>

            <SkillDescription 
                class="image image-left"
                image="images/web.png"
                skill="Web Development"
                description={webDescription}
            />
            <SkillDescription 
                class="image image-right"
                image="images/design.png"
                skill="User Interface/User Experience Design"
                description={userInterfaceDescription}
            />
            <SkillDescription 
                class="image image-left"
                image="images/camera.png"
                skill="Photography"
                description={photoDescription}
            />
        </div>
    </div>)
}

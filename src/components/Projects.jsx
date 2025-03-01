import workimg1 from "../assets/images/work-img1.png"
import workimg2 from "../assets/images/work-img2.png"
import workimg3 from "../assets/images/work-img3.png"


function Project() {
    return (
        <section>
            <div className="container">
                <div className="cont-child">
                    <h1 className="head-1 head-mar"><span style={{ color: "#878CFF" }}>My</span> Work</h1>
                    <div className="works">
                        <ProjectCard key="1" img={workimg1} text="Making a design system from scratch" link="https://google.com" />
                        <ProjectCard key="2" img={workimg2} text="Stunning portfolio website design using React" link="https://youtube.com" />
                        <ProjectCard key="3" img={workimg3} text="A powerful blog app designed using Vue JS" link="https://facebook.com" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project

function ProjectCard(props) {
    const { img, text, link } = props;
    return (
        <div className="work">
            <img src={img} alt="work" />
            <p>{text}</p>
            <a className="link" href={link} target="_blank">Learn More</a>
        </div>
    );
}

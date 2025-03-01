import john from '../assets/images/john.png'

function Person() {
    return (
        <section>
            <div className="container">
                <div className="cont-child">
                    <div className="person">
                        <img className="hero-img" src={john} alt="John" />
                        <h1>Hi, I am <span style={{ color: "#878CFF" }}>John.
                            Creative</span> Developer</h1>
                        <p>How do you know you are a web developer? A: You spend more time debugging than developing. 😂
                        </p>
                        <a className="btn-2" href="#">Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Person
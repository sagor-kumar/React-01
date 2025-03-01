
function Feature() {

    return (
        <section>
            <div className="container">
                <div className="cont-child">
                    <h1 className="head-2">Insights</h1>
                    <div className="featured">
                        <FeatureCard />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature



function FeatureCard() {

    const featureData = [
        {
            title: "Making a design system from scratch",
            text: "JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
        },
        {
            title: "Vertically Spaced &amp; Dynamic Elements",
            text: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."
        }
    ];


    return (
        <>
            {featureData.map((item, index) => (
                <div className="feature" key={index}>
                    <p className="txt-1">FEATURED</p>
                    <h3>{item.title}</h3>
                    <p className="txt-2">{item.text}</p>
                    <a className="link" href="#">Learn More</a>
                </div>
            ))}
        </>
    );
}
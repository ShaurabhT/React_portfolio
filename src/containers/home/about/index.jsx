const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section section-padding mt-n3 mb-n1">
                <div
                    className="about-images"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-images.png)`,
                    }}
                ></div>

                <div className="container">
                    <div
                        className="row justify-content-end"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2 className="title">Shaurabh R. Tuladhar</h2>
                                <p className="about-text">
                                    I am Shaurabh R. Tuladhar ,with a strong
                                    focus in design and programming.I&rsquo;m
                                    highly experienced in crafting websites,
                                    interactive designs and graphics for brands
                                    and companies worldwide.
                                </p>
                                <p>
                                    {/* I specialise in complex and prestigious
                                    construction and infrastructure <br /> */}
                                    Together with my collaborators, I help my
                                    clients stand out by combining first-class
                                    visual & brand design, thoughtful UX & UI,
                                    tasteful animation, technical innovation,
                                    optimal performance, and always keeping your
                                    audience in mind.{" "}
                                </p>
                                {/* <p>
                                    We have compiled an extensive list of other
                                    area clinics and health resources, so that
                                    when someone calls
                                </p> */}
                                <img
                                    className="signechar"
                                    src="/images/signechar.png"
                                    alt=""
                                />
                                <h6 className="name">Shaurabh R. Tuladhar</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;

import ContactForm from "../../components/contact-form";


const ContactContainer = () => {
    return (
        <div className="section contact-section bg-dark">
            <div
                className="contact-bg"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/contact-bg.jpg)`,
                }}
            ></div>

            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7">
                        <div className="contact-section-wrapper">
                            <div className="contact-info" data-aos="fade-up">
                                <span className="mail">
                                    <a href="mailto:shaurabh19@gmail.com">
                                        shaurabh19@gmail.com
                                    </a>
                                </span>
                                <span className="number">
                                    <a href="tel:+977 9843641268">
                                        (+977) 9843641268
                                    </a>
                                </span>
                            </div>

                            <div
                                className="contact-form"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >

                                <ContactForm />
                            </div>

                            <div
                                className="contact-social"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <ul>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="dribbble"
                                            href="https://instagram.com/shaurabh_"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="behance"
                                            href="https://www.facebook.com/shaurabht"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="twitter"
                                            href="https://twitter.com/shaurabh19"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;

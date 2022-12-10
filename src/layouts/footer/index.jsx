const Footer = () => {
    return (
        <div className="section bg-dark">
            <div className="container">
                <div className="footer-info-box text-center">
                    <h4 className="title">Let’s work together</h4>
                    <h2 className="mail">
                        <a href="mailto:shaurabh19@gmail.com">
                            shaurabh19@gmail.com
                        </a>
                    </h2>
                </div>

                <div className="footer-copyright-social">
                    <div className="footer-copyright">
                        <p>
                            &copy; 2022 <span></span> Made By{" "}
                            {/* {" "}by{" "} */}
                            <a
                                href="https://instagram.com/Shaurabh_"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Shaurabh
                            </a>{" "}
                            <i className="icofont-heart" aria-hidden="true"></i>
                        </p>
                    </div>
                    <div className="footer-social">
                        <ul className="social">
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
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="behance"
                                    href="https://www.facebook.com/ShaurabhT"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="dribbble"
                                    href="https://instagram.com/Shaurabh_"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="github"
                                    href="https://github.com/ShaurabhT"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

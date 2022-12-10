/* eslint-disable jsx-a11y/media-has-caption */
import PropTypes from "prop-types";
import SocialIcon from "../../components/social-icon";
import { Link } from "react-router-dom";
import ProjectForm from "../../components/project-form";

const ProjectDetailsContainer = ({ data }) => {
    return (
        <div className="section project-details-section">
            <div className="custom-container container-fluid">
                <div
                    className="details-images"
                    data-aos="fade-up"
                    data-aos-duration="600"
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/${data.media.image}`}
                        alt="Project Details"
                    />
                </div>
            </div>

            <div className="container">
                <div
                    className="details-challenge section-padding-02 mt-n1"
                    data-aos="fade-up"
                    data-aos-duration="900"
                >
                    <h5 className="details-label">{data.cate}</h5>

                    <h1 className="title">{data.title}</h1>
                </div>

                <div className="details-info section-padding mt-n10">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="single-info">
                                <h5 className="details-label">the challenge</h5>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: data.challenge,
                                    }}
                                ></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-info">
                                <h5 className="details-label">Date</h5>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: data.date,
                                    }}
                                ></p>
                            </div>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className="single-info">
                                <h5 className="details-label">team</h5>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: data.team,
                                    }}
                                ></p>
                            </div>
                        </div> */}
                        <div className="col-lg-3">
                            <div className="single-info">
                                <h5 className="details-label">Done Using</h5>
                                <p>{data.service}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="details-middle-content section-padding-02 mt-n2"
                    data-aos="fade-up"
                >
                    <h2 className="title">{data.subTitle}</h2>
                    {data.body.map((value, i) => {
                        return (
                            <div
                                key={i}
                                className="desc"
                                dangerouslySetInnerHTML={{
                                    __html: value,
                                }}
                            />
                        );
                    })}
                </div>
                {/* <div className="blockquote section-padding-02  mt-n3">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data.quote,
                        }}
                    ></p>
                </div> */}
                <div className="author-info">
                    <h4 className="name">{data.name}</h4>
                    <p>{data.designation}</p>
                    {data.link ?
                        <a
                            href={data.link}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Link
                            <SocialIcon icon="icofont-link" />
                        </a> :
                        null}
                </div>
            </div>

            <div className="custom-container container-fluid">
                <div className="column-images">
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <div
                                className="details-images mt-6 wow fadeInLeft"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`}
                                    alt="Project Details"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div
                                className="details-images mt-6 wow fadeInRight"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`}
                                    alt="Project Details"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data.gallery ? data.gallery.imageThree != undefined ?
                <div className="custom-container container-fluid">
                    <div className="column-images">
                        <div className="row">
                            <div
                                className="col-lg-6"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                <div
                                    className="details-images mt-6 wow fadeInLeft"
                                    data-wow-delay="0.3s"
                                    data-wow-duration="1.5s"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`}
                                        alt="Project Details"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            </div>
                            <div
                                className="col-lg-6"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <div
                                    className="details-images mt-6 wow fadeInRight"
                                    data-wow-delay="0.3s"
                                    data-wow-duration="1.5s"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${data.gallery.imageFour}`}
                                        alt="Project Details"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                null :
                null
            }
            {data.gallery ? data.gallery.imageFive != undefined ?
                <div className="custom-container container-fluid">
                    <div className="column-images">
                        <div className="row">
                            <div
                                className="col-lg-6"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                <div
                                    className="details-images mt-6 wow fadeInLeft"
                                    data-wow-delay="0.3s"
                                    data-wow-duration="1.5s"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${data.gallery.imageFive}`}
                                        alt="Project Details"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            </div>
                            <div
                                className="col-lg-6"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <div
                                    className="details-images mt-6 wow fadeInRight"
                                    data-wow-delay="0.3s"
                                    data-wow-duration="1.5s"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${data.gallery.imageSix}`}
                                        alt="Project Details"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                null :
                null
            }
            {/* FOR VIDEOS */}
            <div className="custom-container container-fluid">
                <div className="column-images">
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <div
                                className="details-images mt-6 wow fadeInLeft"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                {data.video ?
                                    data.id == 9 ?
                                        <iframe
                                            width="80%" height="290 rem"
                                            src={data.video.One}
                                            title="videos"
                                            allowfullscreen>
                                        </iframe>
                                        :
                                        data.video.One != undefined ?
                                            <video
                                                width="80%" height="100%"
                                                src={`${process.env.PUBLIC_URL}/${data.video.One}`}
                                                controls
                                                onError={(e) => e.target.style.display = 'none'}
                                            >
                                            </video>
                                            :
                                            null :
                                    null
                                }
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div
                                className="details-images mt-6 wow fadeInRight"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                {data.video ? data.video.Two != undefined ?
                                    data.id == 9 ?
                                        <iframe
                                            width="80%" height="290 rem"
                                            src={data.video.Two}
                                            title="videos"
                                            allowfullscreen>
                                        </iframe>
                                        :
                                        <video
                                            width="80%" height="80%"
                                            src={`${process.env.PUBLIC_URL}/${data.video.Two}`}
                                            controls
                                            onError={(e) => e.target.style.display = 'none'}
                                        >
                                        </video> :
                                    null :
                                    null
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-container container-fluid">
                <div className="column-images">
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <div
                                className="details-images mt-6 wow fadeInLeft"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                {data.video ? data.video.Three != undefined ?
                                    data.id == 9 ?
                                        <iframe
                                            width="80%" height="290 rem"
                                            src={data.video.Three}
                                            title="videos"
                                            allowfullscreen>
                                        </iframe>
                                        :
                                        <video
                                            width="80%" height="80%"
                                            src={`${process.env.PUBLIC_URL}/${data.video.Three}`}
                                            controls
                                            onError={(e) => e.target.style.display = 'none'}
                                        >
                                        </video> :
                                    null :
                                    null
                                }
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div
                                className="details-images mt-6 wow fadeInRight"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                {data.video ? data.video.Four != undefined ?
                                    data.id == 9 ?
                                        <iframe
                                            width="80%" height="290 rem"
                                            src={data.video.Four}
                                            title="videos"
                                            allowfullscreen>
                                        </iframe>
                                        :
                                        <video
                                            width="80%" height="80%"
                                            src={`${process.env.PUBLIC_URL}/${data.video.Four}`}
                                            controls
                                            onError={(e) => e.target.style.display = 'none'}
                                        >
                                        </video> :
                                    null :
                                    null
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-container container-fluid">
                <div className="column-images">
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <div
                                className="details-images mt-6 wow fadeInLeft"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                {data.video ? data.video.Five != undefined ?
                                    data.id == 9 ?
                                        <iframe
                                            width="80%" height="290 rem"
                                            src={data.video.Five}
                                            title="videos"
                                            allowfullscreen>
                                        </iframe>
                                        :
                                        <video
                                            width="80%" height="80%"
                                            src={`${process.env.PUBLIC_URL}/${data.video.Five}`}
                                            controls
                                            onError={(e) => e.target.style.display = 'none'}
                                        >
                                        </video> :
                                    null :
                                    null
                                }
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div
                                className="details-images mt-6 wow fadeInRight"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                {data.video ? data.video.Six != undefined ?
                                    data.id == 9 ?
                                        <iframe
                                            width="80%" height="290 rem"
                                            src={data.video.Six}
                                            title="videos"
                                            allowfullscreen>
                                        </iframe>
                                        :
                                        <video
                                            width="80%" height="80%"
                                            src={`${process.env.PUBLIC_URL}/${data.video.Six}`}
                                            controls
                                            onError={(e) => e.target.style.display = 'none'}
                                        >
                                        </video> :
                                    null :
                                    null
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                {/* horizontal image */}
                {/* <div className="details-images section-padding-02 mt-n2">
                    <img
                        src={`${process.env.PUBLIC_URL}/${data.gallery.imageSeven}`}
                        alt="Project Details"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                </div> */}

                <div className="details-social" data-aos="fade-up">
                    <h5 className="details-label">Share on social</h5>
                    <ul className="social">
                        <li>
                            <SocialIcon
                                icon="icofont-twitter"
                                path="https://twitter.com/"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                icon="icofont-facebook"
                                path="https://facebook.com/"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                icon="icofont-google-plus"
                                path="https://myaccount.google.com/"
                            />
                        </li>
                    </ul>
                </div>
                <div className="reservation-form-wrapper section-padding-02 section-padding-03">
                    <h3
                        className="title"
                        data-aos="fade-up"
                        data-aos-duration="600"
                    >
                        Let’s start work together
                    </h3>

                    <div
                        className="reservation-form"
                        data-aos="fade-up"
                        data-aos-duration="900"
                    >
                        <ProjectForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default ProjectDetailsContainer;

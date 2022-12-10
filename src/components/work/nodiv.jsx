/* eslint-disable  */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Work2 = ({ data }) => {
    const cate = data.categories.map((value, idx) => {
        return (
            <span className="d-inline" key={idx}>
                {value}
                {idx !== data.categories.length - 1 && " , "}
            </span>
        );
    });
    return (
        <div className="single-project-slide">
            <div className="thumb">
                <div className="image">
                    <img
                        className="fit-image"
                        src={process.env.PUBLIC_URL + data.media.thumb}
                        alt="Product"
                    />
                </div>
            </div>

            <div className="content">
                <h4 className="subtitle" >{cate}</h4>
                <h3 className="title" style={{ color: "Black" }}>
                </h3>
            </div>
        </div>
    );
};

Work2.propTypes = {
    data: PropTypes.object,
};

export default Work2;

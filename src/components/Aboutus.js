import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
export default function AboutUs() {
    return (
        <div className="MainDiv">
            <div className="container">
                <div className="row featurette" d-flex="" justify-content-center="">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Hello Everyone,<span className="text-muted"></span></h2>
                        <p className="lead"> I am Piyush Paradkar I am currently persuing computer science engineering form LNCT Bhopal currently I am in 3rd year .I am currently working on web development I have good knowledge about data structures and algorithms  and some programming languages like C++ , Python ,JavaScript . </p>
                        <h2 className="featurette-heading">Connect me<span className="text-muted"></span></h2>
                        <div >
                            <span>
                                <a href="https://www.youtube.com/channel/UC8q49GXf7bPlJOwsU3In6jA"
                                    className="youtube social">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                            </span>

                            <span>
                                <a href="https://m.facebook.com/100066435712972/"
                                    className="facebook social">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </span>
                            <span>
                                <a href="https://www.instagram.com/piyushp_007/"
                                    className="instagram social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </span>
                        </div>
                    </div>
                    <br></br>
                    <div className="col-md-2">
                        <br></br>
                        <img
                            className="w-1000"
                            src="https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/230187873_168733375351185_5063258339636921753_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=4ZuwYFBqwKkAX9sddc3&_nc_ht=scontent.fbho4-2.fna&oh=8b6dd5f10d2f264fdb92b3e060a8def6&oe=613810D9"
                            alt="First slide"
                            style={styles.image}
                        />

                    </div>
                </div>
            </div>
        </div >
    )
}
const styles = {
    image: {
        height: 200,
        width: 290,
    }
}
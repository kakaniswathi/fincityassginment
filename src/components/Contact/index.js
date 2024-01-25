import "./index.css"
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
const Contact = () => (
    <div className="contact-container" id="contactSection">
        <AiFillInstagram className="logo-style"/>
        <FaLinkedin className="logo-style"/>
        <FaEnvelope className="logo-style"/>
        <p className="contact-paragraph">Copyright © 2024.  All rights reserved</p>
    </div>
)
export default Contact
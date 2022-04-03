import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
                <footer>
                    <div className="footer-content">
                        <h3>Saksham</h3>
                        <p>about</p>
                        <p>contact us:-  <span>saksham121@gmail.com</span>  <span>+91 8883346578</span></p>
                        <ul className="socials">
                            <li><a href="https://www.linkedin.com/in/bansi-patel-156a63195/" target="_blank"><span className="iconify-inline" data-icon="entypo-social:linkedin-with-circle" data-width="30" data-height="30"></span></a></li>
                            <li><a href="https://www.linkedin.com/in/priti-agatkar-15324519b/" target="_blank"><span className="iconify-inline" data-icon="entypo-social:facebook-with-circle" data-width="30" data-height="30"></span></a></li>
                            <li><a href="https://www.linkedin.com/in/shreyashree-dasgupta-7026b01b4" target="_blank"><span className="iconify-inline" data-icon="entypo-social:twitter-with-circle" data-width="30" data-height="30"></span></a></li>
                            <li><a href="https://www.linkedin.com/in/khushi-malviya-0694a319b" target="_blank"><span className="iconify-inline" data-icon="entypo-social:instagram-with-circle" data-width="30" data-height="30"></span></a></li>
                            <li><a href="https://github.com/Bansi32/Secreto_352" target="_blank"><span className="iconify-inline" data-icon="entypo-social:github-with-circle" data-width="30" data-height="30"></span></a></li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <p>Copyright &copy;2022 Designed by team Saksham</p>
                    </div>
                </footer>
        </>
    )
}

export default Footer;

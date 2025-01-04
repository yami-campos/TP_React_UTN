import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
    return (
        <>
            <div className='footer-redes'>
                <footer>
                    <div className="text">
                        <h3>CONTACT</h3>
                        <hr />
                        <p className='text-contacto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est rem, ducimus voluptatibus cupiditate reprehenderit voluptates</p>
                        <p className='e-mail'>hola@hola.com.ar</p>
                        <p className='telefono'>000-000</p>
                    </div>

                    <div className='iconos-footer'>
                        <p><FontAwesomeIcon icon={faTwitter} /></p>
                        <p><FontAwesomeIcon icon={faFacebook} /></p>
                        <p><FontAwesomeIcon icon={faGithub} /></p>
                        <p><FontAwesomeIcon icon={faLinkedin} /></p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default footer

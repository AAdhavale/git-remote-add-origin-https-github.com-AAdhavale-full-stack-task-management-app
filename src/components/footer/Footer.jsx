import React from 'react'
import './Footer.css'
import { assets } from '../../assets/Assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <p>
                        &copy; 2025 Delicious Bites. All rights reserved. We are committed to serving you the best quality food with exceptional service.
                        Visit us at our various locations or order online to enjoy your favorite meals delivered to your doorstep.
                        By using our website, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                        For any queries, feel free to contact our support team at <a href="mailto:support@deliciousbites.com">support@deliciousbites.com</a>.
                        Follow us on <a href="#">Facebook</a>, <a href="#">Instagram</a>, and <a href="#">Twitter</a> for updates, offers, and more.
                    </p>
                    <div className="footer-social-icons">
                        
                    </div>

                

                </div>

                <div className="footer-content-center">
                    <h2>Company</h2>

                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>private Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+917558720997</li>
                        <li>adityadhavale22@gmail.com</li>
                        <li>gitHub - AAdhavale</li>
                    </ul> 
                </div>
            </div>
            <hr/>

            <p className="footer-copy-right">copyRight 2025 @ OniFood.com - All rights reserved</p>

        </div>
    )
}

export default Footer

import './Footer.css'
import slack from '../assets/slack.jpeg'
import world from '../assets/world.jpeg'
import twitter from '../assets/twitter.jpeg'
import youtube from '../assets/youtube.jpeg'
import face from '../assets/face.jpeg'
import linkedin from '../assets/linkedin.jpeg'
import blue from '../assets/blue.jpg'
import cloud from '../assets/cloud.jpeg'



function Footer () {
    return (
        <div className="footer">
            <div className="footercolor">
                <h2>See all you can accomplish with Slack</h2>
                <div className="text1a">
                    <p>TRY FOR FREE</p>
                    <span>TALK TO SALES</span>
                </div>
            </div>
            <div className="middlefooter">
                <div className="footerlogo">
                    <img src={slack} alt="slack" />
                </div>
                <div className="middlefootertext">
                <div className="slack1a">
                    <h3>WHY SLACK?</h3>
                    <p>Slack vs. Email</p>
                    <p>Channels</p>
                    <p>Engagement</p>
                    <p>Scale</p>
                    <p>Watch the Demo</p>
                </div>
                <div className="product1a">
                    <h3>PRODUCT</h3>
                    <p>Features</p>
                    <p>Integrations</p>
                    <p>Enterprise</p>
                    <p>Solutions</p>
                </div>
                <div className="pricing">
                    <h3>PRICING</h3>
                    <p>Plans</p>
                    <p>Paid vs. Free</p>
                </div>
                <div className="resources1a">
                    <h3>RESOURCES</h3>
                    <p>Partners</p>
                    <p>Developers</p>
                    <p>Community</p>
                    <p>Apps</p>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Events</p>
                </div>
                <div className="company">
                    <h3>COMPANY</h3>
                    <p>About Us</p>
                    <p>Leadership</p>
                    <p>News</p>
                    <p>Media Kit</p>
                    <p>Careers</p>
                    <p>Swag Store</p>
                </div>
                
                </div>
                
            </div>
            <div className="space-container">
            <div className="space">
            </div>
            </div>
            <div className="lastfooter">
                <div className="lastfooterleft">
                    <div className="lastfooter-first-content">
                    <div className="status">
                        <h5>Status</h5>
                    </div>
                    <div className="privacy">
                        <h5>Privacy</h5>
                    </div>
                    <div className="terms1a">
                        <h5>Terms</h5>
                    </div>
                    <div className="yourprivacy">
                        <img src={blue} alt="privacy" />
                        <h5>Your Privacy Choices</h5>
                    </div>
                    <div className="cookie">
                        <h5>Cookie Preferences</h5>
                    </div>
                    <div className="contact">
                        <h5>Contact Us</h5>
                    </div>
                    </div>
                    <div className="change">
                        <img src={world} alt="globe" />
                        <h5>Change Region</h5>
                    </div>

                </div>
                <div className="lastfooterlright">
                    <div className="cloud">
                        <img src={cloud} alt="cloud" />
                        <h5>Download Slack</h5>
                    </div>
                   <div className="lastfooter-logos">
                     <div className="twitter">
                        <img src={twitter} alt="twitter" />
                    </div>
                    <div className="facbook">
                        <img src={face} alt="facebook" />
                    </div>
                    <div className="youtube"> 
                    <img src={youtube} alt="" /></div>
                    <div className="in1a">
                        <img src={linkedin} alt="linked" />
                    </div>
                   </div>

                </div>

            </div>
            <div className="least">
                <p>©2023 Slack Technologies, LLC, a Salesforce 
                    company. 
                    All rights reserved. 
                    Various trademarks held 
                    by their respective owners.
                </p>
            </div>

        </div>

    )
}
export default Footer
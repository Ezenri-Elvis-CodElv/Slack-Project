import './colab.css'
import eight from '../assets/eight.jpeg'
import eleven from '../assets/eleven.jpeg'
import five from '../assets/five.jpeg'
import nine from '../assets/nine.jpeg'
import twelve from '../assets/twelve.jpeg'
import twenty from '../assets/twenty.jpeg'


export function Collaboration(){
    return(
        <div className='colab'>
            <img src={eleven} alt="11" className='image'/>
            <img src={five} alt="5" className='image2'/>
            <img src={twenty} alt="27" className='image3'/>
            <img src={twelve} alt="12" className='image4'/>
            <img src={nine} alt="9" className='image5'/>
            <img src={eight} alt="8" className='image6'/>
            <div className='team'>
                <div className='a1'>
                    <h1>Teams Large and small rely on Slack</h1>
                    <p>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
                </div>
                <div className='b1'>
                    <button className='me'>MEET SLACK FOR ENTERPRICE</button>
                    <button className='talk'>TALK TO SALES</button>
                </div>
            </div>
            <div className='percent'>
                <div>
                    <h1>85%</h1>
                    <p>of users says Slack has</p>
                    <p>improved commuinication*</p>
                </div>
                <div>
                    <h1>86%</h1>
                    <p>feel their ability to work</p>
                    <p>remotely has improved*</p>
                </div>
                <div>
                    <h1>88%</h1>
                    <p>feel more connected to their</p>
                    <p>teams*</p>
                </div>
            </div>
        </div>
    )
}

export function Video(){
    return(
        <div className='preview'>
            <div className='slack'>
                <div className='videoholder'>
                    <video src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/IBM_08.mp4" className='mp4p' preload='metadata' playsInline autoPlay muted loop type="video/mp4">
                    </video>
                </div>
                <div className='customer'>
                    <div className='write'>
                        <p>“Whether you’re a small or large organization,</p>
                        <p>executing anything from a discrete modernization</p>
                        <p>program to a digital transformation initiative,</p>
                        <p>Slack is an incredibly powerful tool in the hybrid</p>
                        <p>world.”</p>
                    </div>
                    <div className='partner'>
                        <h3>Jennifer Quinlan</h3>
                        <p>Managing Partner, IBM iX Americas Leader - Customer and Experience</p>
                        <p>Transformation, IBM</p>
                    </div>
                    <div className='story'>
                        <span>See more customer stories</span>
                    </div>
                </div>
            </div>
            <div className='base'>
                <p>
                    * Weighted average. Based on 2,707 survey responses from weekly Slack users in the U.S., UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).
                </p>
            </div>
        </div>
    )
}
import './heropage.css'
import google from '../assets/google.png'
import Section1 from './section1'
import { IoMdArrowForward } from "react-icons/io";
import video from '../assets/slackvideo.mp4'

export function HeroPage() {
    return (
        <>
            <main>

                <div className='work'>
                    
                      <video src="https://a.slack-edge.com/1023c55/marketing/img/homepage/revamped-24/headline/hp-headline.en-GB@2x.mp4"
                            className='slackvideo' preload='metadata' playsInline autoPlay muted loop type="video/mp4"></video>
                    <div className='worker'>
                        <button className='workbtn'>Get Started </button>
                        <button className='buttt'>Find your plan <IoMdArrowForward /></button>

                    </div>
                </div>

                <Section1/>

                <div className='vid'>
                    <div className='vidhold'>
                        <video src="https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/animations/mp4/ia4-hero-product-ui.mp4"
                            className='vivid' preload='metadata' playsInline autoPlay muted loop type="video/mp4"></video>
                    </div>
                </div>

            </main>

            {/* <ScrollComponent /> */}
        </>
    )
}
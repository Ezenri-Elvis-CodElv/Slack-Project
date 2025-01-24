import {HiOutlineArrowRight} from 'react-icons/hi'
import dream from  '../assets/dream.png'
import tour from  '../assets/tour.jpg'
import puzzle from  '../assets/puzzle.jpg'
import peach from '../assets/peach.jpg'


const Cards = () => {
    const isSmallScreen = window.innerWidth <= 71
    return(

        <>
        
        <div className='container'>
            <div className="deeper">
            <h1>Take a deeper dive into a new way to work</h1>

            <div className="cWrap">
                <div className="Cards">
                    <div className="cImg">
                        <img src={dream} alt="dream"/>
                    </div>
                    <div className="midText">
                    <p>Event</p>
                    <h2>Ready For The Future Of AI in Slack?</h2>
                    </div>
                    <div className="lastText">
                        <span>WATCH ON-DEMAND</span>
                        <HiOutlineArrowRight  style={{width: "50px", fontSize: "25px"}}/>

                    </div>
                </div>
                <div className="Cards">
                    <div className="cImg">
                        <img src={tour} alt="tour image"/>
                    </div>
                    <div className="midText">
                    <p>On-Demand</p>
                    <h2>Big things are launching. Relive the highlight of world tour New York.</h2>
                    </div>
                    <div className="lastText">
                        <span>WATCH NOW</span>
                        <HiOutlineArrowRight  style={{width: "50px", fontSize: "25px"}}/>

                    </div>
                </div>
                <div className="Cards">
                    <div className="cImg">
                        <img src={puzzle} alt="puzzle"/>
                    </div>
                    <div className="midText">
                    <p>Customer Story</p>
                    <h2>How openAI expands chatgpt with Slack</h2>
                    </div>
                    <div className="lastText">
                        <span>READ MORE</span>
                        <HiOutlineArrowRight  style={{width: "50px", fontSize: "25px"}}/>

                    </div>
                </div>
                <div className="Cards">
                    <div className="cImg">
                        <img src={peach} alt="123" />
                    </div>
                    <div className="midText">
                    <p>Webiner</p>
                    <h2>Top Slack tips to boost productivity</h2>
                    </div>
                    <div className="lastText">
                        <span>WATCH NOW</span>
                        <HiOutlineArrowRight  style={{width: "50px", fontSize: "25px"}}/>

                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}



export default Cards
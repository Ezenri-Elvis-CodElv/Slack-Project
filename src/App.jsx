
import './App.css'
import Cards from './Components/Cards'
import { Collaboration, Video } from './Components/Collaboration'
import Footer from './Components/Footer'
import { Header } from './Components/Header'
import { HeroPage } from './Components/HeroPage'
import  SecondSection1  from './Components/SecondSection1'
import Section3 from './Components/Section3'
import Section1  from './Components/section1'

function App() {
 
  return (
    <>

    <Header/>
    <HeroPage/>
    <SecondSection1
        title=" Move faster with your tools in one place"
        content="Automate away routine tasks with the power of generative AI and
              simplify your workflow with all your favorite apps ready to go in
              Slack."
        link="Learn more about the Slack platform"
        video="https://a.slack-edge.com/7460822/marketing/img/homepage/e2e-prospects/inline/animations/mp4/speed.mp4"
      />
       <Section3
        title="Choose how you want to work"
        content=" In Slack, you’ve got all the flexibility to work when, where and
              how it’s best for you. You can easily chat, send audio and video
              clips, or hop on a huddle to talk things out live."
        link="Learn more about flexibility communication"
        video="https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/animations/mp4/ia4-flexibility.mp4"
        // video="https://a.slack-edge.com/7460822/marketing/img/homepage/e2e-prospects/inline/animations/mp4/speed.mp4"
       />
      <SecondSection1
        title="Bring your team together"
        content="At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies."
        link="Learn more about channels"
        video="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness-mobile.mp4"
      />
    <Collaboration/>
    <Video/>
     <Cards/>
     <Footer/>
      
    </>
  )
}

export default App

function Section3({link, title, content, video}) {
    return (
      <div className="second-section1-container">
        <div className="first-div" id="first-div2">
          <div className="text-holder" id="text-holder-section3">
            <div className="text-holder-container">
              <h2 className="head-title">{title} </h2>
              <p className="description-text">
               {content}
              </p>
              <a
                href="https://slack.com/engage-users"
                className="my-link"
                data-clog-click=""
                data-clog-ui-element="link_integrations"
              >
                {link}
              </a>
            </div>
          </div>
          <div className="video-holder">
            <video
              className="video-desktop"
              playsInline
              autoPlay
              muted
              loop
              type="video/mp4"
            >
              <source
                src={video}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    );
  }
  
  export default Section3;
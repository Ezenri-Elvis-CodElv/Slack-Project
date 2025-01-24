import "./Second-Section1.css";
function SecondSection1({title,content,link, video}) {
  return (
    <div className="second-section1-container">
      <div className="first-div">
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
        <div className="text-holder">
          <div className="text-holder-container">
            <h2 className="head-title">
             {title}
            </h2>
            <p className="description-text">
              {content}
            </p>
            <a
              href="https://slack.com/integrations"
              className="my-link"
              data-clog-click=""
              data-clog-ui-element="link_integrations"
            >
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection1;
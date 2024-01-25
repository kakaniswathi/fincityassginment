import "./index.css"

const Home = ()=>(
    <div className="home-main-bg-container" id="aboutSection">
        <div className="home-page-image">
            <img src="https://res.cloudinary.com/drjim6cqm/image/upload/v1704391366/image_w7pqh9.png" alt="home-page-logo"/>
        </div>
        <div className="home-page-title-container">
            <p className="home-page-title-paragraph">
                UI/UX Designer
            </p>
            <h1 className="home-page-heading">
                Hello,  my name is Madelyn Torff
            </h1>
            <p className="home-page-paragraph">Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
            <div> 
                <a href="#addProjectSection">
                    <button className="project-button">Projects</button>
                </a>
                <button className="linkdin-button">Linkdin</button>
            </div>
        </div>
    </div>
)

export default Home
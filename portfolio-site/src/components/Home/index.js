import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container homePage">
      <div className="textArea">
        <h1>Idris Drouiche</h1>
        <h2>
          Software Engineer / Full Stack Developer / Cyber Security Analyst
        </h2>
        <Link to="/contact" className="contactButton">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home

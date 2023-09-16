import React ,{Component} from 'react'
import Social from '../components/Social'
import profilepic from '../img/image0.jpg'
import "../Styles/Home.css";
import ReactTypingEffect from 'react-typing-effect';



class Home extends Component {
    render() {
        return(
            <div className='condiv home' id='home'>
                <div className='shrink'><img src={profilepic} alt="profile" className='profilepic'/>
                </div>
                <ReactTypingEffect text={['I am Kritsada Prasertsin ','I am Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social/>
            </div>
        )
    }
}

export default Home
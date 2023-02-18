import React from 'react';
import { Row} from 'react-bootstrap';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

class LandingPage extends React.Component {
    constructor(props){
        super(props);
    }
    handleRedirectToSignUp = () => {
        this.props.history.push("/signup");
    }
    
    render() {
        return(
            <div style={{backgroundImage: "url('/logo_bg_home.jpg')",color:"white"}}>
              <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginRight:'20px'}}>
               <Row style={{alignSelf: 'flex-end', marginRight: '80px'}}>
               <Player
                autoplay
                keepLastFrame={true}
                src="https://lottie.host/ff2f9522-a3fd-4dc6-8635-79eded37678a/vasBZB9UBf.json"
                style={{ height: '400px', width: '400px' }}
                >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
               </Row>
               <Row style={{paddingLeft: '50px', marginRight: '`175`px', alignSelf: 'center',justifyContent: 'flex-start'}}>
                <div style={{padding:'20px'}}>
                    <h1>Quran Quiz Competition</h1>
                    <h6 style={{marginTop:'25px'}}>This is just a simple Quran competition for the people who love quran and enthusiast. we are giving rewards for the winner of the quiz.</h6>
                </div>
               </Row>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Player
                autoplay
                keepLastFrame={true}
                src="https://lottie.host/8b37c69b-3f24-469f-bcae-97871becda2f/QoywbDUH0h.json"
                style={{ height: '400px', width: '400px' }}
                >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            <div style={{alignSelf: 'center', marginRight: '100px'}}>
                <h2>Be a winner and get your rewards</h2>
                <h6>What are you waiting for ! come on Join it Now...</h6>
            </div> 
            </div>
            <button onClick={() => {this.handleRedirectToSignUp()}}style={{width: '150px', height: '40px', marginLeft: '80%', marginBottom: '100px', border: 'none', borderRadius: '5px', backgroundColor: '#F3D724'}}>Sign Up Now</button>
            </div>
        )
    }
}
export default LandingPage;
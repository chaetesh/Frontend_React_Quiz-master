import React from 'react';
import { Row} from 'react-bootstrap';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

class DisclaimerPage extends React.Component {
    handleNextPage = () => {
        this.props.handleClose();
    }
    
    render() {
        const btnStyle = {
            marginLeft: '36%',
            width: '80px',
            borderRadius: '5px',
            border: 'none',
            padding: '2px',
            lineHeight: '26px',
            backgroundColor: '#93FFC9'
        }
        const name = this.props?.userData?.name
        return(
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
               <Row>
               <Player
                autoplay
                keepLastFrame={true}
                src="https://assets9.lottiefiles.com/packages/lf20_M9p23l.json"
                style={{ height: '300px', width: '300px' }}
                >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
               </Row>
               <Row>
                <h3 style={{marginTop:'5px', fontSize:'18px'}}>Hey, {`${name}`}👋</h3>
               </Row>
               <Row>
                <h3 style={{fontSize:'18px'}}>Welcome to our Quran Quiz Competition</h3>
               </Row>
               <Row style={{width: '40%', textAlign: 'justify'}}>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
               </Row>
               <button 
                style={btnStyle} onClick={() => this.handleNextPage()}>Next</button>
            </div>
        )
    }
}
export default DisclaimerPage;
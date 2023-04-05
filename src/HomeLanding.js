import { Container, Row, Button} from "react-bootstrap";
import React from 'react'
import './HomeLanding.css';
function HomeLanding() {
    localStorage.setItem("loginstatus","false");
    localStorage.clear();

    return (
        <>
        <div className="main center-screen">

        <Container>
            <Row>

                <div className="auth-inner">
                    <div className="intro-text">
                        <h1 className='title' style={{color:'black'}}>Welcome</h1>
                    </div>
                    <div className = "buttonContainer">
                        < a href ="/signin">
                            <Button size='lg' className='landingButton' variant='outline-primary' > Signin </Button>
                        </a>
                        < a href ="/signup">
                            <Button size='lg' className='landingButton' > Signup </Button>
                        </a>
                    </div>
                </div>
            </Row>
        </Container>
        </div>
        </>
    );
  }
  
  export default HomeLanding;
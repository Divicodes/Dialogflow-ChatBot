import { Button} from "react-bootstrap";

function handleLogOut(){
    localStorage.setItem("loginstatus", "false");
  }


function ChatbotLanding() {
    localStorage.setItem("loginstatus", "true");
    console.log(localStorage.getItem("loginstatus"));

    return (

<>
<div style={{ backgroundPosition: 'center', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center',
  backgroundSize: 'cover', backgroundImage:'url(https://media.istockphoto.com/photos/hand-touching-digital-chat-bot-for-provide-access-to-information-and-picture-id1206801125?k=20&m=1206801125&s=612x612&w=0&h=uNDaahSPq2C-n8CjNnekbr9O5818FuFoF6MfOi7yBuw=)'}} >
      <div style={{color:'white', textAlign:'center'}} >
      Hello {localStorage.getItem("name")}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div style={{backgroundPosition: 'center', height:'100vh', display:'flex', justifyContent:'center'}}>
    <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/82a60312-7f51-491b-b0e7-a8154c6ef956">
    </iframe>
    </div>

        <a href="/" style={{display:'flex', justifyContent:'center'}}>
        <Button onClick={handleLogOut} variant='primary'>
        Logout
        </Button>
        </a>
</div>
        </>
    );
  }
  
  export default ChatbotLanding;
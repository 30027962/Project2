import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './footer.css';

function Footer(){
    return(
        <div className="footer-component"  >
        <button >
         <FacebookIcon  style={{ 'color': "#3b5998"}}/>
        </button>
        
         <button>
        <YouTubeIcon style={{ 'color': "red"}}/>
         </button>

         <button>
         <TwitterIcon style={{ 'color': "#00ACEE"}}/>
         </button>
         
         <button>
         <WhatsAppIcon style={{ 'color': "#00E676" }}/>
         </button>
         </div>
    );
}
// padding="10px"
export default Footer;

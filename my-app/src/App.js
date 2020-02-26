import React from 'react';
import './App.css';

// inline css things...probably not the best practise? but *shrug* Future Me will fix this later//
let style ={
  width:"100%",
   height:"550px",
};
let style2 ={
  position: 'absolute', 
  top: '55%', 
  left: '10px', 
  width: '80%', 
  padding: '4px', 
  backgroundColor: 'transparent', 
  fontWeight: 'bold', 
  color: '#fff', 
  fontWeight: '600',
};
let style3 = {
  borderRadius:'50%',
  display:'block',
  marginLeft: 'auto', 
  marginRight: 'auto', 
  height:"250px", 
  width:"250px",
};

let style4 ={
  width:"300px",
  height:"200px",
};
// end of css things//

class App extends React.Component{
  render(){
  return (
    <div className="App">
  <nav>
    <ul>
      <li style={{letterSpacing: "3px"}}><a className="active" href="#home"><b>ROSEMARY LY</b></a></li>
      <li style={{float:"right"}}><a href="#Contact">Contact</a></li>
      <li style={{float:"right"}}><a href="#Portfolio">Portfolio</a></li>
      <li style={{float:"right"}}><a href="#AboutMe">About Me</a></li>
    </ul>
  </nav>
  <header>
    <div className="a" id="home">
      <img src="images/Coffeestir.gif" alt={"coffeeStir"} style={style}/>
      <h6 style={style2}>
        Freelance Web Developer | Coffee Lover | Casual Toronto Raptors Fan
      </h6>

    </div>
  </header>

  <div className="b" id="AboutMe">
    <h1><span>ABOUT ME</span></h1>
  </div>
  <div className="b">
    <img src="images/baliMorningUserpic.jpg" alt={"Userpic"} style={style3}/>
    <br/>
    <p>I'm a freelance web developer with a love for food, coffee and learning. Writing code and designing websites is actually my second career, before doing this I was an accounts manager for a neuro-technology company.
      <br/><br/> I'm a big believer in technology and its ablitity to connect people, and how when it comes to learning and mastering skills in technology, there is no discrimination, just a commitment of time and a willingness to learn. 
      <br/><br/>Young or old, as long as one is willing they can master anything. Trust me, for a brief while one of my jobs was teaching people how to clear their cookies and cache over the phone.

      <br/><br/><strong>
        Proficient in:</strong> HTML, CSS, JavaScript
      <br/><br/><strong>Currently Learning:</strong> Conversational Spanish
      <br/><br/><strong>Education:</strong> York University - BA Hons Psychology | York University -
      Full-Stack Development  Certificate
      <br/><br/><strong> Notable facts:</strong> 10 years of customer service experience, quick learner, self-starter
    </p>
  </div>
  
  <div className="c" id="Portfolio">
    <h1><span>PORTFOLIO</span></h1>
    <p style={{textAlign: "center"}}> Click on the image to expand!</p>
    <img className="myImages" id="myImg" src="images/cupcakewebdesign.png" alt={"Cupcake Store - WireFrame One | Sept '19"} style={style4}/>
    <img className="myImages" id="myImg" src="images/FS1000_GroupProject.png" alt={"Vacation Rental Website | Oct '19"} style={style4}/>
    <img className="myImages" id="myImg" src="images/dogmodelwebsite.png" alt={"Dog Model Portfolio Website | Sept '19"} style={style4}/>
    <div id="myModal" className="modal">
      <span className="close">&times;</span>
      <img className="modal-content" id="img01"/>
      <div id="caption"></div>
    </div>
  </div>
    <div className="footer">
<a href="https://github.com/RosemaryLy"><img src="images/GitHub-Mark-64px.png" alt ={"GitHubLogo"} style={{height:"25px"}}/> </a>
Rosemary Ly
</div>  
</div>

  );
}
}
export default App;

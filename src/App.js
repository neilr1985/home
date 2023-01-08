import './styling/css.css';
import neil from './assets/neilr.png';
import LinkedInLogo from "./assets/linkedin-logo.svg";


function App() {
  return (
    <div className="App">
      <div className="App-header">
      <h1>Neil Robertson</h1>
        <img id="image"  src={neil} className="Photo" alt="logo" />
        <ul id="social-media-icons">
        <li>
          <a
            href="https://uk.linkedin.com/in/neil-robertson-83811762"
            target="_blank"
            ><img class="icon" src={LinkedInLogo}
          /></a>
        </li>
      </ul>
      <p>Software engineer from Edinburgh, working in London 
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/> 
      </div>
    </div>
  );
}

export default App;

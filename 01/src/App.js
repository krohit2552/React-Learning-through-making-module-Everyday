
import './App.css'
function App() {
    let name = "Rohit"
    let a=3
    let styleObj = { color: "red", fontSize: "20px",background:"yellow" };
    return(
        <div>
        <h1 className='box'>Hello {name}</h1>
        <p style={{background:"blue"}}>{name}</p>
        {a+2}
        <p style={styleObj}>Welcome</p>
        
      </div>
    );
  }
  export default App
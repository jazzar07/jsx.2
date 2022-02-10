import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">BASSEM JAZZAR</h1>

        <br />

        <img src="/src/images/a.jpg.jpg" className="Photo1" alt="myPhoto" />

        <br />

        <img src="/src/images/z.jpg.jpg" className="Photo2" alt="myImage" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
    


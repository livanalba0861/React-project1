import "./App.css";

function App() {
  return (
    <div id="body">
      <Header />
      <Card />
      <Footer/>
    </div>
  );
}

export function Header() {
  return (
    <>
      <div className="header">
        <span className="header-title">Company</span>
        <br />
        <span className="header-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iusto
          facilis vitae eveniet eos excepturi unde temporibus alias fugit! Ut
          delectus eaque eveniet earum tenetur officia fugiat? Quo, quam
          nostrum.
        </span>
      </div>
    </>
  );
}

export const Card = (props) => {
  return (
    <div>
      <div className="small-div">
        <i></i>
        <img
          src="C:\Users\livan\OneDrive\Documents\coding course\React project1\src\logo.jpg"
          alt=""
        />
      </div>
      <div className="section, bg-grey">
        <span className="div-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          possimus sint neque laudantium vitae delectus aspernatur blanditiis
          sequi rem accusamus quos necessitatibus velit ullam sunt quas quod.
          Et, accusantium dolorem.
        </span>
      </div>
      <div className="section">
        <span className="div-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          possimus sint neque laudantium vitae delectus aspernatur blanditiis
          sequi rem accusamus quos necessitatibus velit ullam sunt quas quod.
          Et, accusantium dolorem.
        </span>
      </div>
      <div className="section, bg-grey">
        <span className="div-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          possimus sint neque laudantium vitae delectus aspernatur blanditiis
          sequi rem accusamus quos necessitatibus velit ullam sunt quas quod.
          Et, accusantium dolorem.
        </span>
      </div>
    </div>
  );
};

export function Footer() {
  return (
    <>
      <div className="section">
        <span className="footer">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam iusto
          facilis vitae eveniet eos excepturi unde temporibus alias fugit! Ut
          delectus eaque eveniet earum tenetur officia fugiat? Quo, quam
          nostrum.
        </span>
      </div>
    </>
  );
}

export default App;

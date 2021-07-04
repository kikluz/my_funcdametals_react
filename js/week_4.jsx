
class InstructionRender extends React.Component {
  constructor(props){
    super(props);
    this.state ={
    JSX_title: "use native JSX",
    JSX_url: "https://react-cn.github.io/react/docs/tags-and-attributes.html",

    React_title: "thinking in React",
    React_url: "https://reactjs.org/docs/thinking-in-react.html",
      
    reactjs_title: "reactjs" ,
    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png"
    }
  };
  
  render(){
    return (
    <div>
      <p>
  Time for a back-to-basics drill! Take the code in the HTML section of this Codepen and React-ify it in the JS section. Use at least <strong>two</strong> components. No need for Reactstrap - 
        <a href={this.state.JSX_url} target="_blank"><strong>{this.state.JSX_title}</strong></a>. And don't worry about the CSS section right now. When you are done, the rendered view with the white background should look the same, but the HTML section should contain nothing but the 'root' div.
</p>
<p>Are you <a href={this.state.React_url} target="_blank">{this.state.React_title}</a> yet?</p>
<img src={this.state.img_url} alt={this.state.reactjs_title} />
    </div>
      )
  }
}

function App() { 
  return ( 
    <div> 
      <PageTitle /> 
      <InstructionRender />
    </div> 
  ); 
}
        
function PageTitle() {
  return (
    <h1>Instructions</h1>
  );
}



// Uncomment the below line.
ReactDOM.render(<App />, document.getElementById("root"));
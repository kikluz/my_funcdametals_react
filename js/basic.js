// //----------------------------------------------------------------------
// // React Router Params
// //----------------------------------------------------------------------
// // No need to pay attention to the code below this comment. You have learned to use 'import' to bring in components from libraries in your React project. This is another way to do it that works better in Codepen. HashRouter is also used here instead of BrowserRouter due to Codepen. Do not be concerned about the differences. 
// const { HashRouter, Switch, Route, Link } = ReactRouterDOM

// // Add a component that displays albums by year, using a router parameter/match param for the year

// const ALBUMSDATA = [
//   { 
//     id: 1, 
//     title: "Mezzanine", 
//     artist: "Massive Attack", 
//     year: 1998 
//   },
//   { 
//     id: 2, 
//     title: "The Ruminant Band", 
//     artist: "Fruit Bats", 
//     year: 2009 
//   },
//   {
//     id: 3,
//     titlle: "Spanish Bombs",
//     artist: "the Clash",
//      year:  1979 
//   }
// ];

// function Home() {
//   return (
//     <h1>Home</h1>
//   );
// }

// function Albums(props) {
//   return (
//     <div>
//       <h1>Albums</h1>
//       <ul>
//         {props.albumsData.map(album => (
//             <li key={album.id}>
//               <Link to={`/albums/${album.id}`} >           
//                 Album {album.id}
//               </Link>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// // displays albums 


// function MyNav() {
//   return (
//     <ul>
//       <li><Link to='/'>Home</Link></li>
//       <li><Link to='/albums'>Albums</Link></li>
//     </ul>
//   );
// }

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       albumsData: ALBUMSDATA
//     };
//   };
  
//   render() {
    
//     const AlbumInfo = ({match}) => {
//       const album = this.state.albumsData.filter(album => album.id === +match.params.albumId)[0];
//       return (
//         <div>
//           {album.title} - {album.artist} - {album.year}
//         </div>
//       );
//     };

//     return (
//       <Switch>
//        <Route exact path='/' component={Home}/>
//        <Route path='/albums/:albumId' component={AlbumInfo}/>        
//        <Route exact path='/albums' render={() => <Albums albumsData={this.state.albumsData} />} />        
//       </Switch>
//     );
//   };
// }

// function App() {
//   return (
//     <div>
//       <MyNav />
//       <br />
//       <Main />
//     </div>
//   );
// }

// // Stop paying attention here. Below code is just to make React Router work with Codepen.
// // We are using HashRouter here, but outside of here you would use BrowserRouter for a web app.
// ReactDOM.render((
//   <HashRouter>
//     <App />
//   </HashRouter>
// ), document.getElementById('root'));
//------------------------------------------------------------------------------------------------
// Higher-order functions
// function that create functions

// function greaterThan(n){
//   return m => m > n;
// }

// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// And we can have functions that change other functions.
function noisy(f){
  return (... args) => {
    console.log("calling with", args);
    let result = f(... args);
    console.log("called with", args, ", returned", result);
  };
}
noisy(Math.min)(3, 2, 1);

// This way you can simply use a function to find (for instance) the highest value in a list of numbers:
x = findMax(1, 2, 34, 104, 7, 178, 700);

function findMax(){
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++){
    if(arguments[i] > max) {
      max = arguments[i];
    }
  }
  // return max
  console.log(max);
}



// --------------------------------------------------------------------------------
// AboutComponent.js probles <RenderPartner partner={partner} /> returns
// --------------------------------------------------------------------------------
import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
​
function RenderPartner({ partner }) {
  if (partner) {
    <React.Fragment>
      <Media object src={partner.image} alt={partner.name} width="150" />
      <Media body className="ml-5 mb-4"><Media heading >{partner.name}{partner.description}</Media></Media>
    </React.Fragment>
  } else {
    <div></div>
  }
}
​
function About(props) {
​
  const partners = props.partners.map(partner => {
    return (
      <Media tag="li" key={partner.id}>{RenderPartner(partner)}</Media>
    );
  });
​
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <h2>About Us</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-sm-6">
          <h3>Our Mission</h3>
          <p>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</p>
        </div>
        <div className="col-sm-6">
          <Card>
            <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">February 3, 2016</dd>
                <dt className="col-6">No. of Campsites in 2019</dt>
                <dd className="col-6">563</dd>
                <dt className="col-6">No. of Reviews in 2019</dt>
                <dd className="col-6">4388</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">42</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                <footer className="blockquote-footer">Muriel Strode,{' '}
                  <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                    The Open Court, 1903</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Community Partners</h3>
        </div>
        <div className="col mt-4">
          <Media list>
            {partners}
          </Media>
        </div>
      </div>
    </div>
  );
}

export default About;
// --------------------------------------------------------------------------------
// partners.js
// --------------------------------------------------------------------------------
export const PARTNERS = [
  {
    id: 0,
    name: "Bootstrap Outfitters",
    image: "/assets/images/bootstrap-logo.png",
    featured: false,
    description: "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."
  },
  {
    id: 1,
    name: "Git Out Expeditions",
    image: "/assets/images/git-logo.png",
    featured: false,
    description: "Join Git Out Expeditions to explore new horizons with a group of other adventurers!"
  },
  {
    id: 2,
    name: "Mongo Fly Shop",
    image: "/assets/images/mongo-logo.png",
    featured: false,
    description: "Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."
  },
  {
    id: 3,
    name: "Node Outdoor Apparel",
    image: "/assets/images/node-logo.png",
    featured: true,
    description: "From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered."
  }
]

// --------------------------------------------------------------------------------
// App.js
// --------------------------------------------------------------------------------
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
​
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
​
export default App;
// --------------------------------------------------------------------------------
// index.js
// --------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-lobster';
import 'typeface-open-sans';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// --------------------------------------------------------------------------------
// index.js
// --------------------------------------------------------------------------------

import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { isCompositeComponent } from 'react-dom/test-utils';
import About from './AboutComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS
    };
  }


  render() {

    const HomePage = () => {
      return (
        <Home
          campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          partner={this.state.partners.filter(partner => partner.featured)[0]}
        />
      );
    };

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
          comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
        />
      );
    };

    //acts as a switch statement, it looks for a matching path which in this case is home
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />
          } />
          <Route path='/directory/:campsiteId' component={CampsiteWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Route path="/aboutus" render={() => <About partners={this.state.partners} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
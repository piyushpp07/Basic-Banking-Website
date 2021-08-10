import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Transfer from './Transfer';
import Header from './ui/Header';
import theme from "./ui/Theme";
import Users from './Users';
import CreateUser from './CreateUser';
import AllTransactions from './AllTransactions';
import { Button, Carousel } from 'react-bootstrap';
import AboutUs from './Aboutus'
import StickyFooter from './ui/footer';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div style={{ marginBottom: '3em', marginTop: '0' }}>
      <h1 style={styles.hea}>𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝔹𝕒𝕟𝕜</h1>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://paysend.com/images/BL019_01_credit_1200.png"
            alt="First slide"
            style={styles.image1}
          />
          <Carousel.Caption>
            <h5>Send Money</h5>
            <p>Transfer money from your existing Account</p>
            <Link to="/Transfer">
              <Button renderas="button" variant="danger">
                <span>Transfer Money</span>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.investopedia.com/thmb/DTr-SL4TLMIBpJOD1564wNW-OjI=/1254x837/filters:fill(auto,1)/iStock-682395884.tashka2000.online.banking-5c6c9639c9e77c00018ccac8.jpg"
            alt="Second slide"
            style={styles.image1}
          />
          <Carousel.Caption>
            <h5>Create New Account</h5>
            <p>Create new account to avail all facilities</p>
            <Link to="/CreateUser">
              <Button renderas="button" variant="success">
                <span>Create Account</span>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://osome.com/content/images/2020/10/Osome-SG-Electronics-Transaction-Act.png"
            alt="Third slide"
            style={styles.image1}
          />
          <Carousel.Caption>
            <h5>Transactions</h5>
            <p>Show Previous Transactions done</p>
            <Link to="/AllTransactions">
              <Button renderas="button" variant="warning">
                <span>Show Transactions</span>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>

  );
}

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />

        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/createUser' component={CreateUser} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/allTransactions' component={AllTransactions} />
          <Route exact path='/transfer' component={Transfer} />
          <Route exact path='/Aboutus' component={AboutUs} />
        </Switch>
        <br></br>
      </BrowserRouter>
      <StickyFooter />

    </ThemeProvider >

  );
}
const styles = {
  hea: {
    color: "#7DEDFF",
  },
  image: {
    height: 200,
    width: 300,
  },
  image1: {
    height: 500
  }
}

export default App;

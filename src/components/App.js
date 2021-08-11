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
    <div style={{ marginBottom: '1em', marginTop: '0.1em' }}>

      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1655&q=80"
            alt="First slide"
            style={styles.image1}
          />
          <Carousel.Caption>
            <h5 style={{ color: `#9AB3F5` }}>Send Money</h5>
            <p style={{ color: `#9AB3F5` }}>Transfer money from your existing Account</p>
            <Link to="/Transfer">
              <Button renderas="button" style={{ backgroundColor: `#0F4C75`, color: `#B9FFFC` }}>
                <span>Transfer Money</span>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://osome.com/content/images/2020/10/Osome-SG-Electronics-Transaction-Act.png"
            alt="Second slide"
            style={styles.image1}
          />
          <Carousel.Caption>
            <h5 style={{ color: `black` }}>Create New Account</h5>
            <p style={{ color: `black` }}>Create new account to avail all facilities</p>
            <Link to="/CreateUser">
              <Button renderas="button" style={{ backgroundColor: `#88FFF7`, color: `#5C33F6` }} >
                <span>Create Account</span>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"

            src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
            alt="Third slide"
            style={styles.image1}
          />
          <Carousel.Caption>
            <h5 style={{ color: `white` }}>Transactions</h5>
            <p style={{ color: `white` }}>Show Previous Transactions done</p>
            <Link to="/AllTransactions">
              <Button renderas="button" style={{ backgroundColor: `#88FFF7`, color: `#5C33F6` }}>
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

import React from "react";
import Navbar from "../component/navbar.jsx";
import Container from "../component/container.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Card from "../component/cards.jsx";
import Footer from "../component/footer.jsx"

class App extends React.Component{
    render(){
        return(
            <>
            <Navbar></Navbar>
            <Container></Container>
            <Jumbotron></Jumbotron>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Footer></Footer>
            </>
        )
    }
}
    

export default App;
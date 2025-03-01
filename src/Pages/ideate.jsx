import About from '../components2/About'
import PrizePool from "../components2/PrizePool"
import Rules from '../components2/Rules'
import Hero from '../components2/Hero'
import Theme from '../components2/Theme'
import Footer from '../components2/Footer'
import Timeline from '../components2/Timeline'
// import NavBar2 from '../components2/Navbar2'
import Form from '../components2/Form'


export default () => {

    return (
        <>
            {/* <NavBar2 /> */}
            <Hero />
            <About />
            <Theme />
            <Timeline />
            <Rules />
            <PrizePool />
            <Footer />
            <Form />
        </>
    )
}
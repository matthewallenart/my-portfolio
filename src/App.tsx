import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
// import Approach from './components/Approach' // hidden for now
import About from './components/About'
import ContactFooter from './components/ContactFooter'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <SelectedWork />
        {/* Approach section hidden for now — re-enable when ready */}
        {/* <Approach /> */}
        <About />
      </main>
      <ContactFooter />
    </>
  )
}

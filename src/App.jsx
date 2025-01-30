import { Routes, Route } from "react-router-dom"
import { Header, Footer } from "@components"
import { MainLayout } from "@components/layouts"
import { Home, About, Contact, Service, Error } from "@pages"


const App = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  )
}

export default App;
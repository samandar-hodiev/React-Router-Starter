import { Routes, Route } from "react-router-dom"
import { Header, Footer } from "@components"
import { MainLayout } from "@components/layouts"
import routerLinks from "./mocks/router"

const App = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Routes>
          {
            routerLinks.length
             &&
             routerLinks.map((item=> <Route key={item.id} path={item.path} element={item.component}/>))
          }
        </Routes>
      </MainLayout>
      <Footer />
    </>
  )
}

export default App;
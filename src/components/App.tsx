import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "pages/Home"
import Posts from "pages/Posts"
import Post from "pages/Post"

import Navbar from "components/Navbar"

import { Provider } from "react-redux"
import { store } from "redux/store"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Router>
  )
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper

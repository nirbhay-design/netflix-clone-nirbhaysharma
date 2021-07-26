import './App.css';
import Row from './Row'
import requests from './request'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      
      <Nav/>

      <Banner />

      <Row  title = "Netflix original" fetchUrl = {requests.fetchNeflixOriginals} islarge = {true}/>
      <Row  title = "Trending Now" fetchUrl = {requests.fetchtrending}  islarge={false}/>
      <Row  title = "Top Rated" fetchUrl = {requests.fetchTopRated} islarge={false}/>
      <Row  title = "Action" fetchUrl = {requests.fetchActionMovies} islarge={false}/>
      <Row  title = "Comedy" fetchUrl = {requests.fetchComedyMovies} islarge={false}/>
      <Row  title = "Horror" fetchUrl = {requests.fetchHorrorMovies} islarge={false}/>


      
      

      
    </div>
  );
}

export default App;

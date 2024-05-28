import Main from "../components/Main"
import Row from "../components/Row"
import Requests from '../Requests'
const Home = () => {
  return ( 
    <>
      <Main/>
      <Row rowID='1' title='Trending' fetchUrl={Requests.requestTrending} />
      <Row rowID='2' title='Popular' fetchUrl={Requests.requestPopular} />
      <Row rowID='3' title='TopRated' fetchUrl={Requests.requestTopRated} />
      <Row rowID='4' title='Upcoming' fetchUrl={Requests.requestUpcoming} />
      <Row rowID='5' title='Horror' fetchUrl={Requests.requestHorror} />

    </>
  )
}

export default Home
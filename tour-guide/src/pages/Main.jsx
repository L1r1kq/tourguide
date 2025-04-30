import ActivityCardContainer from './containers/ActivityCardContainer'
import Header from './components/Header'
import Main from './containers/Main';
import ActivitiesContainer from './containers/ActivitiesContainer';
import Footer from './components/Footer';
import GalleryContainer from './containers/GalleryContainer';
import Wrapper from './containers/Wrapper';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <ActivitiesContainer />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;

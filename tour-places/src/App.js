import Card from './components/cards/Card';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

import data from './helper/data';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card data={data} />
    </>
  );
}

export default App;
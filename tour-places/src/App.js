import Card from './components/cards/Card';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

import data from './helper/data';

function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Navbar />
    </>
  );
}

export default App;
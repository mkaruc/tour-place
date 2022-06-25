import headerStyle from './Header.module.css';

const Header = () => {
  return (
    <header>
    <h1 className={headerStyle['title']}>POPULAR TOUR PLACES</h1>
  </header>
  );
};

export default Header;
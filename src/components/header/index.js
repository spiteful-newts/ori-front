import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => {
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    fetch('http://localhost:1337/contacts')
      .then((data) => data.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);
  return (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav>
      <Link activeClassName={style.active} href="/">Home</Link>
      <p>{ contacts?.email }</p>
      <Link activeClassName={style.active} href="/profile">Me</Link>
      <Link activeClassName={style.active} href="/profile/john">John</Link>
    </nav>
  </header>
)};

export default Header;

import { h } from 'preact';
import Developments from '../../components/developments'
import Engineering from '../../components/engineering';

import style from './style.css';

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <Developments />
    <Engineering />
  </div>
);

export default Home;

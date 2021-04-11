import { h } from 'preact';
import Engineering from '../../components/engineering';
import style from './style.css';

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <Engineering />
  </div>
);

export default Home;

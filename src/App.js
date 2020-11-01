import Greeting from './Greetings/Greeting';
import Calculator from './Calculator/Calculator';
import Card from './Netflix/Card';

function App() {
  return (
    <div>
      <Greeting />
      <Calculator />
      <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg" category="Netflix Original Series" title="DARK" link="https://www.netflix.com/in/title/80990668?source=35" />
      <Card imgSrc="https://wallpapercave.com/wp/wp1917154.jpg" category="Netflix Original Series" title="Extra Curicular" link="" />
      <Card imgSrc="https://wallpapercave.com/wp/wp4056410.jpg" category="Netflix Original Series" title="Stranger Things" link="" />
    </div>
  );
}

export default App;

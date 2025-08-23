import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <div>
      <Heading attr={123} attr2='string'>
        Olá mundo!
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo
        maxime velit soluta perferendis expedita accusantium officia modi
        nesciunt officiis fuga sunt distinctio praesentium, accusamus iusto
        aperiam laborum! Vero, laudantium?
      </p>
    </div>
  );
}

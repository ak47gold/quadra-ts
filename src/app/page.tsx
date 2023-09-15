"use client"
import { Provider } from 'react-redux';
import store from '../redux/store';
import NumberDisplay from '../components/NumberDisplay';

const Home = () => {
  return (
    <Provider store={store}>
      <div>
        <NumberDisplay />
      </div>
    </Provider>
  );
};

export default Home;

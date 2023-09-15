import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receiveNumber } from '../redux/actions';
import { RootState } from '../redux/types';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const NumberDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const currentNumber = useSelector((state: RootState) => state.number);

  const [previousNumber, setPreviousNumber] = useState<number | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onmessage = (event) => {
      const receivedNumber = parseInt(event.data, 10);
      if (!isNaN(receivedNumber)) {
        dispatch(receiveNumber(receivedNumber));
        setPreviousNumber(currentNumber);
      }
    };

    return () => {
      socket.close();
    };
  }, [dispatch, currentNumber]);

  let numberColor: string = 'white';

  if (previousNumber !== null) {
    if (currentNumber && currentNumber > previousNumber) {
      numberColor = 'green';
    } else if (currentNumber && currentNumber < previousNumber) {
      numberColor = 'red';
    }
  }

  return (
    <>
      <div className="w-screen h-screen grid items-center justify-center">
        <div className="w-96">
          <h1 className="font-medium mb-3 ml-1 text-lg text-center">Received Number:</h1>
          <p className="tracking-widest bg-gray-800 p-4 rounded-lg relative text-2xl font-bold grid items-center justify-center" style={{ color: numberColor }}>
            {currentNumber !== null ? currentNumber : 'Waiting data'}
            <span className="rounded-sm p-4 absolute right-2">
              {currentNumber && previousNumber !== null && (
                <>
                  {currentNumber > previousNumber ? (
                    <ArrowUpIcon className="text-green-500 h-5 w-5" />
                  ) : (
                    <ArrowDownIcon className="text-red-500 h-5 w-5" />
                  )}
                </>
              )}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default NumberDisplay;
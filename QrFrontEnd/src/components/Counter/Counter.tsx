import React, { useState } from 'react';
import Button from '../Buttons/ProjButton/ProjButton';
import styles from './Counter.module.css';
interface CounterProps {
  initialValue: number;
  onCountChange: (count: number) => void;
  maxValue: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue, onCountChange, maxValue }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count === maxValue) {
      return;
    }
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const decrement = () => {
    if (count === 0) {
      return;
    }
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <>
      <Button onClick={decrement} size="small" border="1px solid black" text="-"/>
            <div className={styles.countDisplay}>
              <span>Кількість</span>
              <span>{count}</span>
            </div>
        <Button onClick={increment} size="small" border="1px solid black" text="+"/>
    </>
  );
};

export default Counter;
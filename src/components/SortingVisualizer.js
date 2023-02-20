import React, { useEffect } from "react";
import { useState } from "react";
import cls from "./SortingVisualizer.module.css";

const SortingVisualizer = () => {
  const [arr, setArr] = useState([]);
  const [arrSwap, setArrSwap] = useState([]);
  const [completed, setCompleted] = useState([]);

  const genArr = () => {
    let min = 10,
      max = 400;
    let randomArr = [];
    for (let i = 0; i < 50; i++) {
      const randomNum = Math.floor(Math.random() * max + min);
      randomArr.push(randomNum);
    }
    setArr(randomArr);
    setArrSwap([]);
    setCompleted([]);
  };

  const bubbleSort = () => {
    if (arr.length === 0) genArr();
    else {
      let currArr = [...arr];
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          setTimeout(() => {
            const b = [];
            b.push(j);
            b.push(j + 1);
            if (currArr[j] > currArr[j + 1]) {
              let temp = currArr[j];
              currArr[j] = currArr[j + 1];
              currArr[j + 1] = temp;
            }
            setArrSwap([...b]);
            setArr([...currArr]);
          }, 50);
        }
        setTimeout(() => {
          let com = [];
          for (let k = arr.length; k >= arr.length - i - 1; k--) {
            com.push(k);
          }
          setCompleted([...com]);
        }, 50);
      }
      setTimeout(() => {
        setCompleted([]);
        setArrSwap([]);
      }, 50);
    }
  };

  const selectionSort = () => {
    if (arr.length === 0) genArr();
    else {
      let currArr = [...arr];
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          setTimeout(() => {
            const b = [];
            b.push(i);
            b.push(j);
            if (currArr[i] > currArr[j]) {
              let swap1 = currArr[i];
              let swap2 = currArr[j];
              currArr[i] = swap2;
              currArr[j] = swap1;
            }
            setArrSwap([...b]);
            setArr([...currArr]);
          }, 50);
        }
        setTimeout(() => {
          let com = [];
          for (let k = arr.length; k >= arr.length - i - 1; k--) {
            com.push(k);
          }
          setCompleted([...com]);
        }, 50);
      }
      setTimeout(() => {
        setCompleted([]);
        setArrSwap([]);
      }, 50);
    }
  };

  const insertionSort = async () => {
    if (arr.length === 0) genArr();
    else {
      let currArr = [...arr];
      for (let i = 1; i < arr.length; i++) {
        let current = currArr[i];
        let j = i - 1;
        setTimeout(() => {
          const b = [];
          b.push(i);
          b.push(j);
          while (j >= 0 && currArr[j] > current) {
            currArr[j + 1] = currArr[j];
            j--;
          }
          currArr[j + 1] = current;
          setArrSwap([...b]);
          setArr([...currArr]);
        }, 50);

        setTimeout(() => {
          let com = [];
          for (let k = arr.length; k >= arr.length - i - 1; k--) {
            com.push(k);
          }
          setCompleted([...com]);
        }, 50);
      }

      setTimeout(() => {
        setCompleted([]);
        setArrSwap([]);
      }, 50);
    }
  };

  useEffect(() => {
    genArr();
  }, []);

  return (
    <div className={cls.sortingV}>
      <div className={cls.header}>
        <div className={cls.left}>
          <h2>SORTING VISUALIZER</h2>
        </div>
        <div className={cls.right}>
          <button onClick={genArr}>Generate array</button>
          <button onClick={bubbleSort}>BubbleSort</button>
          <button onClick={selectionSort}>SelectionSort</button>
          <button onClick={insertionSort}>InsertionSort</button>
        </div>
      </div>

      <div className={cls.array}>
        <div className={cls.arrContainer}>
          {arr.map((value, idx) => (
            <div
              key={idx}
              className={cls.arrBar}
              style={{
                height: `${value}px`,
                backgroundColor: arrSwap.includes(idx)
                  ? "blue"
                  : completed.includes(idx)
                  ? "crimson"
                  : "black",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;

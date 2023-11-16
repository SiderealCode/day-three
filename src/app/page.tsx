"use client";
import React from "react";

function CountButton(props: {
  title: string;
  plusminus: string;
  setCount: (count: number) => void;
  count: number;
}) {
  function handleClick(whatdo: string) {
    if (whatdo == "plus") {
      props.setCount(props.count + 1);
    } else if (whatdo == "minus") {
      props.setCount(props.count - 1);
    }
  }

  return (
    <button
      onClick={() => {
        handleClick(props.plusminus);
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
    >
      {props.title}
    </button>
  );
}

export default function CounterPage() {
  const nameAndCount = {
    name: "guydude",
    countReview: "equisde",
  };
  const [count, setCount] = React.useState(0);

  return (
    <div className="text-center flex h-screen">
      <div className="m-auto">
        <p className="text-3xl font-semibold text-white-900 w-full">
          {nameAndCount.name}
        </p>

        <p className="text-3xl font-semibold text-white-900 w-full">{count}</p>
        <p className="text-3xl font-semibold text-white-900 w-full">
          {nameAndCount.countReview}
        </p>
        <CountButton
          title={"+1"}
          plusminus={"plus"}
          setCount={setCount}
          count={count}
        />
        <CountButton
          title={"-1"}
          plusminus={"minus"}
          setCount={setCount}
          count={count}
        />
      </div>
    </div>
  );
}

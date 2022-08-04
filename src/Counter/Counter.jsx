import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(10);

  React.useEffect(() => {
    const id = setInterval(() => {
      console.log("inside set interval");
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(id);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    // cleanup
    return () => {
      console.log("cleaning up any set intervals");
      clearInterval(id);
    };
  }, []);
  // useEffect has an empty dependancy
  // it will get called when the component gets unmounted

  // if it has a dependency, count
  // it will get called, everytime count gets updated,
  //  but before the useEffect callback is triggered

  return (
    <>
      <h1>Counter {count}</h1>
    </>
  );
}

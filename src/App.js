import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyWord] = useState("");
  const onClick = () => setValue((v) => v + 1)
  console.log("항상 실행됨")
  const onChange = (e) => {
    setKeyWord(e.target.value)
  }
  useEffect(() => {
    console.log('앱실행 후 한번만 실행')
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 6) {
      console.log("serach for", keyword)
    }
  }, [keyword]);
  useEffect(() => {
    console.log('counter가 변화할때만 실행')
  }, [counter]);

  useEffect(() => {
    console.log('keyword & counter 변화시 실행')
  }, [keyword, counter]);

  return (
    <>
      <input onChange={onChange} type="text" placeholder="search bar" />
      <div>{counter}</div>
      <button onClick={onClick}>hello</button>
      <CleanUp/>
    </>
  )
}

const Hello = () => {

  useEffect(() => {
    console.log('hello')
    return () => {console.log('bye bye')}
  }, []);
  return <h1>Hello ^^&</h1>
}

const CleanUp = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(!showing)

  return (
      <>
        {showing ? <Hello /> : <h1>HIDE</h1>}
        <button onClick={onClick}>{showing ? "show" : "hide"}</button>
      </>
  )
}

export default App;



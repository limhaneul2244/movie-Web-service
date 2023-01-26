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

const CleanUp = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(!showing)
  // useEffect(() => {
  //   console.log('Im here!!')
  // }, [showing]);

  const Test = () => {
    useEffect(() => {
      console.log('Im here!!')
    }, [showing]);
    return <div>cleanUp hide</div>
  }

  return (
      <>
        {showing ? <div>cleanUp showing</div> : Test()}
        <button onClick={onClick}>{showing ? "show" : "hide"}</button>
      </>
  )
}

export default App;



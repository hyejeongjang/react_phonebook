import React, { Component } from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { dummyData, nextId, setNextId } from "./lib/dummyData.js";

class App extends Component {
  state = {
    dummyData,
    name: "",
    phone: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { dummyData, name, phone } = this.state;

    if (name === "" || phone === "") return;

    this.setState({
      dummyData: {
        ...dummyData,
        [nextId]: {
          id: nextId,
          name,
          phone
        }
      },
      name: "",
      phone: ""
    });

    setNextId();
  };

  //ID를 통해 제거하고 싶은 아이템을  _변수에 할당.
  //앞에서 제외한 아이템을 뺀 데이터를 dummyData에 저장
  handelRemove = id => {
    const { [id]: _, ...dummyData } = this.state.dummyData;

    this.setState({ dummyData });
  };

  render() {
    const { handleInput, handleSubmit, handelRemove } = this;
    const { dummyData, name, phone } = this.state;

    return (
      <div className="container">
        <button onClick="location.href='https://wordballoon.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Video_20200507_1618_23_914.mp4'">
          버튼
        </button>
        <InputBox
          name={name}
          phone={phone}
          onChange={handleInput}
          onSubmit={handleSubmit}
        />
        <PhoneList list={dummyData} deleteItem={handelRemove} />
      </div>
    );
  }
}

export default App;

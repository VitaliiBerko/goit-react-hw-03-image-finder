import { Fragment } from "react";
import { Component } from "react";
import { Modal } from "./Modal/Modal";


export class App extends Component {

  state ={
    showModal: false
  }

  toggleModal =()=> {
    this.setState(({showModal})=> ({showModal: !showModal}))
  }
  render() {
    const {showModal} = this.state
    return (
      <Fragment>
        <button type="button" onClick={this.toggleModal}>Open</button>
        {showModal && <Modal onClose={this.toggleModal}/>}
      </Fragment>
      
    );
  }
  
};

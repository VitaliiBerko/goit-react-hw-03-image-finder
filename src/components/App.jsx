import { Fragment } from 'react';
import { Component } from 'react';
import { Modal } from './Modal/Modal';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    showModal: false,
    images: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { hits },
      } = await axios.get(
        'https://pixabay.com/api/?q=cat&page=1&key=31315876-ebaad9cfb6f2dd991d80baf37&image_type=photo&orientation=horizontal&per_page=12'
      );

      return hits;
    } catch (error) {
      console.log(error);
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Fragment>
        
         <Searchbar onSubmit={this}/>
        
       {/* // <ImageGallery />

        // <Loader />
        // <Button /> */}

        {/* <button type="button" onClick={this.toggleModal}>Open</button>
        {showModal && <Modal onClose={this.toggleModal}/>} */}
      </Fragment>
    );
  }
}

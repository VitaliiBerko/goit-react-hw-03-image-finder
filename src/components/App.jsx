import { Fragment } from 'react';
import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
    // console.log(searchQuery);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal, images, searchQuery } = this.state;
    
    return (
      <Fragment>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {searchQuery && <ImageGallery searchQuery={searchQuery} />}
        {/* // <Button /> */
        /* <button type="button" onClick={this.toggleModal}>Open</button>
    {showModal && <Modal onClose={this.toggleModal}/>}  */}
      </Fragment>
    );
  }
}

import { Component, Fragment } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import s from '../styles.module.css';
import { fetchApiImages } from '../services/images-api.services';

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape(
//       {
//         id: PropTypes.number.isRequired,
//         webformatURL: PropTypes.string.isRequired,
//         tags: PropTypes.string.isRequired
//       }
//     )
//   ).isRequired
// }

export class ImageGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };

  state = {
    images: null,
    // loading: false,
    status: 'idle',
  };
  componentDidMount(prevProps) {
    // fetchApiImages(.searchQuery);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      try {
        this.setState({ status: 'pending' });
        const response = await fetchApiImages(this.props.searchQuery);
        console.log(response);
        if (response.total !== 0) {
          this.setState({ images: response.hits, status: 'resolved'});
        } else {
          this.setState({ status: 'rejected'})
        }
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, status } = this.state;

    if (status === 'pending') {
      return Loader;
    }

    if (status === 'rejected') {
      Notiflix.Notify.failure(
        `Sorry, there are no images ${this.props.searchQuery}  matching your search query. Please try again.`
      );
    }

    if (status === 'resolved') {
      return (
        <ul className={s.gallery}>
          {images.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem key={id} id={id} src={webformatURL} alt={tags} />
          ))}
        </ul>
      );
    }
  }
}

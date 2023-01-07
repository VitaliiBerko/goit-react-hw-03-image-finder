import PropTypes from "prop-types"
import s from '../styles.module.css'

export const ImageGalleryItem = ({id, src, alt}) => {
  return (
      <li  className={s.gallery__item}>
      <img src={src} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

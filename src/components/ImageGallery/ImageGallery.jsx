import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from '../styles.module.css'

export const ImageGallery = () => {
  return (
      <ul className={s.gallery}>
      <ImageGalleryItem />
    </ul>
  );
};

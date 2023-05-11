/* eslint-disable jsx-a11y/img-redundant-alt */
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
function ImageGallery({ Images }) {
  return (
    <Gallery>
      {Images.map(card => (
        <ImageGalleryItem key={card.id} Card={card} />
      ))}
    </Gallery>
  );
}
export default ImageGallery;

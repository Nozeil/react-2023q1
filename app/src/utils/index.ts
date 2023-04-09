import { BookResponse } from '@/models';
import { ImageLinks } from '@/types';

export function createNewImgLinks(links: ImageLinks) {
  const thumbnailLink = '/svg/question.svg';

  return {
    smallThumbnail: links?.smallThumbnail || thumbnailLink,
    thumbnail: links?.thumbnail || thumbnailLink,
    small: links?.small || thumbnailLink,
    medium: links?.medium || thumbnailLink,
    large: links?.large || thumbnailLink,
    extraLarge: links?.extraLarge || thumbnailLink,
  };
}

export function adaptBook(book: BookResponse) {
  const volumeInfo = book.volumeInfo;
  const imageLinks = book.volumeInfo?.imageLinks || {};
  const newImageLinks = createNewImgLinks(imageLinks);

  return {
    id: book.id,
    title: volumeInfo?.title || '',
    subtitle: volumeInfo?.subtitle || '',
    authors: volumeInfo?.authors || '',
    publisher: volumeInfo?.publisher || '',
    publishDate: volumeInfo?.publishedDate || '',
    imageLinks: newImageLinks,
    description: volumeInfo?.description || '',
  };
}

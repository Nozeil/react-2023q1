import { Card } from '../Card/Card';
import cl from './Cards.module.css';
import { TestIds } from '@/enums';
import { useSearchBookQuery } from '@/hooks/useSearchBookQuery';
import { SearchResponse } from '@/models';
import { ImageLinks } from '@/types';

interface Props {
  search: string;
}

function createNewImgLinks(links: ImageLinks) {
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

function mapBooksItems(books: SearchResponse) {
  return books.items
    ? books.items.map((item) => {
        const volumeInfo = item.volumeInfo;
        const imageLinks = item.volumeInfo?.imageLinks || {};
        const newImageLinks = createNewImgLinks(imageLinks);

        return {
          id: item.id,
          title: volumeInfo?.title || '',
          subtitle: volumeInfo?.subtitle || '',
          authors: volumeInfo?.authors || '',
          publisher: volumeInfo?.publisher || '',
          publishDate: volumeInfo?.publishedDate || '',
          imageLinks: newImageLinks,
          description: volumeInfo?.description || '',
        };
      })
    : [];
}

export function Cards({ search }: Props) {
  const { data: books, isLoading, isError } = useSearchBookQuery(search);

  let content;

  if (books) {
    const mappedBooks = mapBooksItems(books);
    content = mappedBooks.map((book) => <Card key={book.id} {...book} />);
  }

  return (
    <ul className={cl.list} data-testid={TestIds.CARDS_LIST_ID}>
      {content}
    </ul>
  );
}

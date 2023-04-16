import { Card } from '../Card/Card';
import cl from './Cards.module.css';
import { TestIds } from '@/enums';
import { SearchResponse } from '@/models';
import { Loader } from '../Loader';
import { adaptBook } from '@/utils';
import { VPNMessage } from '../Messages/VPN';
import { NoResultsMessage } from '../Messages/NoResults';
import { useSearchBooksQuery } from '@/services/books';
import { useAppSelector } from '@/redux/hooks';
import { ErrorMessage } from '../Messages/Error';

function mapBooksItems(books: SearchResponse) {
  return books.items ? books.items.map((item) => adaptBook(item)) : [];
}

export function Cards() {
  const { value, initialValue } = useAppSelector((state) => state.search);
  const { data: books, isFetching, isError } = useSearchBooksQuery(value || initialValue);

  let content;

  if (isFetching) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorMessage />;
  } else if (books) {
    if (!('items' in books)) {
      return <VPNMessage />;
    }
    const mappedBooks = mapBooksItems(books);
    content = mappedBooks.length ? (
      <ul className={cl.list} data-testid={TestIds.CARDS_LIST_ID}>
        {mappedBooks.map((book) => (
          <Card
            key={book.id}
            id={book.id}
            title={book.title}
            subtitle={book.subtitle}
            imageLinks={book.imageLinks}
          />
        ))}
      </ul>
    ) : (
      <NoResultsMessage />
    );
  }

  return content || null;
}

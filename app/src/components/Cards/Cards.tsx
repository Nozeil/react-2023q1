import { Card } from '../Card/Card';
import cl from './Cards.module.css';
import { TestIds } from '@/enums';
import { useSearchBookQuery } from '@/hooks/useSearchBookQuery';
import { SearchResponse } from '@/models';
import { Loader } from '../Loader';
import { adaptBook } from '@/utils';
import { VPNMessage } from '../Messages/VPN';
import { NoResultsMessage } from '../Messages/NoResults';

interface Props {
  search: string;
}

function mapBooksItems(books: SearchResponse) {
  return books.items ? books.items.map((item) => adaptBook(item)) : [];
}

export function Cards({ search }: Props) {
  const { data: books, isLoading, isError } = useSearchBookQuery(search);

  let content;

  if (isLoading) {
    content = <Loader />;
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
  } else if (isError) {
    content = <div className={cl.message}>Oops... something went wrong</div>;
  }

  return content || null;
}

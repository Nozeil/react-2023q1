import cl from './Modal.module.css';
import { Loader } from '../Loader';
import { adaptBook } from '@/utils';
import { BookThumbnail } from '../BookThumbnail';
import { ErrorMessage } from '../Messages/Error';
import { useGetSpecificBookQuery } from '@/services/books';
import { TestIds } from '@/enums';

interface Props {
  id: string;
  closeModal: () => void;
}

export function Modal({ id, closeModal }: Props) {
  const { data: book, isFetching, isError } = useGetSpecificBookQuery(id);

  let content;

  if (isFetching) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorMessage />;
  } else if (book) {
    const adaptedBook = adaptBook(book);
    const { title, subtitle, authors, publishDate, publisher, description, imageLinks } =
      adaptedBook;
    content = (
      <>
        <div className={cl['content-wrapper']}>
          <BookThumbnail src={imageLinks.thumbnail} title={title} />
          <div className={cl.content}>
            <h5 className={cl.title}>{title}</h5>
            <h6 className={cl.subtitle}>{subtitle}</h6>
            <p className={cl.paragraph}>{authors}</p>
            <p className={cl.paragraph}>
              Published in {publishDate} by {publisher}
            </p>
            <p className={cl.paragraph}>{description}</p>
          </div>
        </div>
        <button className={cl.button} onClick={closeModal} />
      </>
    );
  }

  return (
    <div className={cl.modal} data-testid={TestIds.MODAL}>
      <div className={cl['modal-wrapper']}>
        {content}
        <button className={cl.button} onClick={closeModal} />
      </div>
      <div className={cl.overlay} onClick={closeModal} />
    </div>
  );
}

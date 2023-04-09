import cl from './Modal.module.css';
import { useGetSpecificBookQuery } from '@/hooks/useGetSpecificBookQuery';
import { Loader } from '../Loader';
import { adaptBook } from '@/utils';
import { BookThumbnail } from '../BookThumbnail';
import { ErrorMessage } from '../Messages/Error';

interface Props {
  id: string;
  closeModal: () => void;
}

export function Modal({ id, closeModal }: Props) {
  const { data: book, isLoading, isError } = useGetSpecificBookQuery(id);

  let content;

  if (isLoading) {
    content = <Loader />;
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
  } else if (isError) {
    content = <ErrorMessage />;
  }

  return (
    <div className={cl.modal}>
      <div className={cl['modal-wrapper']}>
        {content}
        <button className={cl.button} onClick={closeModal} />
      </div>
      <div className={cl.overlay} onClick={closeModal} />
    </div>
  );
}

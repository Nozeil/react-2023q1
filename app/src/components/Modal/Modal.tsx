import { PropsWithChildren } from 'react';
import cl from './Modal.module.css';
import { Book } from '@/types';

interface Props extends Book {
  closeModal: () => void;
}

export function Modal({
  title,
  subtitle,
  authors,
  publishDate,
  publisher,
  description,
  closeModal,
  children: image,
}: PropsWithChildren<Props>) {
  return (
    <div className={cl.modal}>
      <div className={cl['modal-wrapper']}>
        <div className={cl['content-wrapper']}>
          {image}
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
      </div>
      <div className={cl.overlay} onClick={closeModal} />
    </div>
  );
}

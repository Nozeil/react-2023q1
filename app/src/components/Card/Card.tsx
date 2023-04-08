import { TestIds } from '@/enums';
import cl from './Card.module.css';
import { createPortal } from 'react-dom';
import { Modal } from '../Modal/Modal';
import { Book } from '@/types';
import { useState } from 'react';

export function Card(book: Book) {
  const { title, subtitle, imageLinks } = book;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const image = <img className={cl.img} src={imageLinks.thumbnail} alt={`${title}-image`} />;

  const modal = isOpen
    ? createPortal(
        <Modal {...book} closeModal={closeModal}>
          {image}
        </Modal>,
        document.body
      )
    : null;

  return (
    <>
      <li className={cl.item} data-testid={TestIds.CARD_ID} onClick={openModal}>
        <div className={cl['img-wrapper']}>{image}</div>
        <div className={cl.content}>
          <h3 className={cl.title}>{title}</h3>
          <h4 className={cl.subtitle}>{subtitle}</h4>
        </div>
      </li>
      {modal}
    </>
  );
}

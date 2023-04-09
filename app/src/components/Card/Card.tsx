import { TestIds } from '@/enums';
import cl from './Card.module.css';
import { createPortal } from 'react-dom';
import { Modal } from '../Modal/Modal';
import { BookImageLinks } from '@/types';
import { useState } from 'react';
import { BookThumbnail } from '../BookThumbnail';

interface Props {
  id: string;
  title: string;
  subtitle: string;
  imageLinks: BookImageLinks;
}

export function Card({ id, title, subtitle, imageLinks }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modal = isOpen
    ? createPortal(<Modal id={id} closeModal={closeModal} />, document.body)
    : null;

  return (
    <>
      <li className={cl.item} data-testid={TestIds.CARD_ID} onClick={openModal}>
        <div className={cl['img-wrapper']}>
          <BookThumbnail src={imageLinks.thumbnail} title={title} />
        </div>
        <div className={cl.content}>
          <h3 className={cl.title}>{title}</h3>
          <h4 className={cl.subtitle}>{subtitle}</h4>
        </div>
      </li>
      {modal}
    </>
  );
}

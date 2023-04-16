import { Modal } from '@/components/Modal/Modal';
import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { book } from '../__mocks__/data/data';
import { wrapWithProvider } from './utils/wrapWithProvider';

describe('modal', () => {
  it('should render modal with mock data', async () => {
    const { title, subtitle, authors, publishedDate, publisher, description } = book.volumeInfo;
    const closeModal = vi.fn();

    const { findByText } = render(wrapWithProvider(<Modal id={book.id} closeModal={closeModal} />));

    expect(await findByText(title)).toBeInTheDocument();
    expect(await findByText(subtitle)).toBeInTheDocument();
    expect(await findByText(authors.join(' '))).toBeInTheDocument();
    expect(await findByText(`Published in ${publishedDate} by ${publisher}`)).toBeInTheDocument();
    expect(await findByText(description)).toBeInTheDocument();
  });
});

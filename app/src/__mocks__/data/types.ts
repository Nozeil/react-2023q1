import { BookImageLinks } from '@/types';

interface Item {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publishedDate: string;
    publisher: string;
    description: string;
    imageLinks: BookImageLinks;
  };
}

export interface Data {
  items: Item[];
}

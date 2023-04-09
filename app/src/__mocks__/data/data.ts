import { Data } from './types';

export const data: Data = {
  items: [
    {
      id: '0',
      volumeInfo: {
        title: 'Title',
        subtitle: 'Subtitle',
        authors: ['Author'],
        publishedDate: 'Date',
        publisher: 'Publisher',
        description: 'Description',
        imageLinks: {
          smallThumbnail: 'smallThumbnail',
          thumbnail: 'thumbnail',
          small: 'small',
          medium: 'medium',
          large: 'large',
          extraLarge: 'extraLarge',
        },
      },
    },
  ],
};

export const book = data.items[0];

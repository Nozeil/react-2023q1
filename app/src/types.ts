export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}

export interface BookImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishDate: string;
  imageLinks: BookImageLinks;
  description: string;
}

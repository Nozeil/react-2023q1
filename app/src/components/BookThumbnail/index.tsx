import cl from './index.module.css';

interface Props {
  src: string;
  title: string;
}

export function BookThumbnail({ src, title }: Props) {
  return <img className={cl.img} src={src} alt={`${title}-image`} />;
}

import { TestIds } from '@/enums';
import cl from './NotFound.module.css';

export function NotFound() {
  return (
    <section className={cl.section} data-testid={TestIds.NOT_FOUND_ID}>
      <img className={cl.img} src="/svg/page-not-found.svg" alt="not-found" />
    </section>
  );
}

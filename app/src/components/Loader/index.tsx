import { TestIds } from '@/enums';
import './index.style.css';

export function Loader() {
  return (
    <div data-testid={TestIds.LOADER} className="loader__container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

import { routes } from '@/router/router';
import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Paths } from '@/enums';
import { wrapWithProvider } from './wrapWithProvider';

export function renderWithRouter(initialIndex = 0) {
  const router = createMemoryRouter(routes, {
    initialEntries: [Paths.HOME, Paths.ABOUT, Paths.NOT_FOUND, '/unknownPath'],
    initialIndex,
  });
  return {
    user: userEvent.setup(),
    ...render(wrapWithProvider(<RouterProvider router={router} />)),
  };
}

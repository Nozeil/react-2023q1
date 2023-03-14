import { ComponentType } from 'react';
import { useLocation } from 'react-router-dom';

export interface WithLocationProps {
  location: ReturnType<typeof useLocation>;
}

export function withLocation<Props extends WithLocationProps>(
  WrappedComponent: ComponentType<Props>
) {
  return (props: Omit<Props, keyof WithLocationProps>) => {
    const location = useLocation();
    return <WrappedComponent {...(props as Props)} location={location} />;
  };
}

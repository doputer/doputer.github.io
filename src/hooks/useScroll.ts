import { useCallback } from 'react';

interface ScrollOption {
  id?: string;
  page?: 'top' | 'bottom' | false;
}

const useScroll = () => {
  return useCallback(({ id, page = false }: ScrollOption) => {
    if (page === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    } else if (page === 'bottom') {
      window.scrollTo({ top: window.document.documentElement.scrollHeight, behavior: 'smooth' });
      return;
    }

    if (!id) return;

    const element = document.querySelector<HTMLHeadingElement>('#' + id);

    if (!(element instanceof HTMLHeadingElement)) return;

    element.scrollIntoView({ behavior: 'smooth' });
  }, []);
};

export default useScroll;

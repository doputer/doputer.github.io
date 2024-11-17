import { useCallback } from 'react';

interface ScrollOption {
  id?: string;
  toTop?: boolean;
}

const useScroll = () => {
  return useCallback(({ id, toTop = false }: ScrollOption) => {
    if (toTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!id) return;

    const element = document.querySelector<HTMLHeadingElement>('#' + id);

    if (!(element instanceof HTMLHeadingElement)) return;

    element.scrollIntoView({ behavior: 'smooth' });
  }, []);
};

export default useScroll;

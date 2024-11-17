import { useCallback, useEffect, useState } from 'react';

const useMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  return [open, toggleMenu] as const;
};

export default useMenu;

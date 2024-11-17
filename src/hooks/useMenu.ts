import { useCallback, useEffect, useState } from 'react';

const useMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [open]);

  return [open, toggleMenu] as const;
};

export default useMenu;

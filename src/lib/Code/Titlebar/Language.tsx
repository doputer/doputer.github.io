interface LanguageProps {
  lang: string;
}

const Language = ({ lang }: LanguageProps) => {
  return (
    <div
      className={`absolute left-0 top-full z-10 ml-4 rounded-b px-2 py-1 text-xs uppercase text-dark bg-language-${lang.toLowerCase()}`}
    >
      {lang}
    </div>
  );
};

export default Language;

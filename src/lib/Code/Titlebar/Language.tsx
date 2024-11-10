interface LanguageProps {
  lang: string;
}

const Language = ({ lang }: LanguageProps) => {
  return (
    <div
      className={`absolute left-0 top-full ml-4 rounded-b text-dark bg-language-${lang.toLowerCase()} px-2 py-1 text-xs uppercase`}
    >
      {lang}
    </div>
  );
};

export default Language;
const Page = async () => {
  return (
    <>
      <p className="mb-8 animate-flip rounded-full text-center text-6xl">🔥</p>
      <p className="mb-8 text-center text-lg">안녕하세요. 개발자 김도현 입니다.</p>
      <p className="flex justify-center gap-8 text-center text-lg">
        <a
          className="link"
          href="https://github.com/doputer"
          target="_blank"
          rel="noreferrer"
          aria-label="github_anchor"
        >
          GitHub
        </a>
        <a
          className="link"
          href="mailto:swputer@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="github_anchor"
        >
          Email
        </a>
      </p>
    </>
  );
};

export default Page;

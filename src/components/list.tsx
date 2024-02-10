import { Link } from 'gatsby';

function List({ allMdx }: Queries.PostsQuery) {
  return (
    <>
      {allMdx.nodes.map(({ fields, frontmatter }) => (
        <div
          key={frontmatter.title}
          className="group flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex w-full items-center justify-center rounded-lg bg-background-light p-12 text-6xl dark:bg-background-dark xs:w-fit">
            <div className="group-hover:animate-flip">{frontmatter.emoji}</div>
          </div>
          <div className="flex-1">
            <Link to={fields.slug} className="text-2xl font-semibold">
              {frontmatter.title}
            </Link>
            <div className="flex flex-wrap gap-2 text-sm text-link-light dark:text-link-dark">
              {frontmatter.tags.map((tag) => (
                <Link key={tag} to={`/tags/${tag}`}>
                  {tag.toUpperCase()}
                </Link>
              ))}
            </div>
            <div className="my-4 text-mute-light dark:text-mute-dark">
              {frontmatter.description}
            </div>
            <div>{frontmatter.date}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;

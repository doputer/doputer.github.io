import { Link } from 'gatsby';

function List({ allMdx }: Queries.PostsQuery) {
  return (
    <>
      {allMdx.nodes.map(({ fields, frontmatter }) => (
        <div
          key={frontmatter.title}
          className="group flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex w-full items-center justify-center rounded-lg bg-light-background p-12 text-6xl dark:bg-dark-background xs:w-fit">
            <div className="pointer-events-none select-none group-hover:animate-flip">
              {frontmatter.emoji}
            </div>
          </div>
          <div className="flex-1">
            <Link to={fields.slug} className="text-2xl font-semibold">
              {frontmatter.title}
            </Link>
            <div className="flex flex-wrap gap-2 text-sm uppercase text-light-link dark:text-dark-link">
              {frontmatter.tags.map((tag) => (
                <Link key={tag} to={`/tags/${tag.replace(/\s/g, '-')}`}>
                  {tag}
                </Link>
              ))}
            </div>
            <div className="my-4 text-light-mute dark:text-dark-mute">
              {frontmatter.description}
            </div>
            <time>{frontmatter.date}</time>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;

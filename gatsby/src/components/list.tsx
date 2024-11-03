import { Link } from 'gatsby';

function List({ allMdx }: Queries.PostsQuery) {
  return (
    <>
      {allMdx.nodes.map(({ fields, frontmatter }) => (
        <div
          key={frontmatter.title}
          className="group flex flex-wrap items-center justify-center gap-4"
        >
          <div className="box flex w-full items-center justify-center p-12 text-6xl xs:w-fit">
            <div className="pointer-events-none select-none group-hover:animate-flip">
              {frontmatter.emoji}
            </div>
          </div>
          <div className="flex-1">
            <Link to={fields.slug} className="text-2xl font-semibold">
              {frontmatter.title}
            </Link>
            <div className="link flex flex-wrap gap-2 text-sm uppercase">
              {frontmatter.tags.map((tag) => (
                <Link key={tag} to={`/tags/${tag.replace(/\s/g, '-')}`}>
                  {tag}
                </Link>
              ))}
            </div>
            <div className="mute my-4">{frontmatter.description}</div>
            <time>{frontmatter.date}</time>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;

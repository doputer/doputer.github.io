const slugify = (slug: string) => slug.replace(/[^가-힣\w\s-.~]/g, '').replace(/ /g, '-');

export default slugify;

const encode = (uri: string) => encodeURIComponent(uri.replace(/\s/g, '-'));

const decode = (uri: string) => decodeURIComponent(uri.replace(/-/g, ' '));

export { encode, decode };

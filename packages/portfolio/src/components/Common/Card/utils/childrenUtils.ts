export const isNil = (children) =>
  children === null ||
  children === undefined ||
  (Array.isArray(children) && children.length === 0)

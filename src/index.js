export * from 'ramda'

export const mapIndexed =
  addIndex(map)

export const forEachIndexed =
  addIndex(forEach)

const getPath =
  path

export const list =
  unapply(identity)

export const defaults =
  flip(merge)

export const removeIndex =
  remove(__, 1)

export const trace =
  tap(console.log)

export const targetValue =
  (e) => e.target.value

export const preventDefault =
  (e) => {
    e.preventDefault()
    return e
  }

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
  path(['target', 'value'])

export const invoke =
  invoker(0)

export const preventDefault =
  tap(invoke('preventDefault'))

export const otherwise =
  T

export const notFn =
  compose(not, equals('Function'), type)

export const guard =
  conds => cond(map(map(when(notFn, always)), conds))

import {
  type IBaseDef,
  type MergeIntersection,
  type ToKeyMap,
  type ToKeyName,
  type ToKeyValue,
  type ToKeys,
  type ToProperty,
  type ToValueKey,
  type ToValueMap,
  type ToValueName,
  type ToValues,
} from './type/core'

export function defineConstants<
  T extends readonly IBaseDef[],
  N extends string = '',
>(defs: T, labelspace?: N) {
  const prefix = labelspace ? `${labelspace}_` : ''
  return {
    [`${prefix}KEYS`]: defs.map((item) => item.key),
    [`${prefix}VALUES`]: defs.map((item) => item.value),
    [`${prefix}KV`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item.value,
      }),
      {}
    ),
    [`${prefix}VK`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.value]: item.key,
      }),
      {}
    ),
    [`${prefix}MAP_BY_KEY`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item,
      }),
      {}
    ),
    [`${prefix}MAP_BY_VALUE`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.value]: item,
      }),
      {}
    ),
    [`${prefix}MAP`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item.value,
      }),
      {}
    ),
    [`${prefix}KN`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.key]: item.name,
      }),
      {}
    ),
    [`${prefix}VN`]: defs.reduce(
      (map, item) => ({
        ...map,
        [item.value]: item.name,
      }),
      {}
    ),
    [`${prefix}LIST`]: defs,
  } as MergeIntersection<
    {
      [Key in ToProperty<'KV', N>]: ToKeyValue<T>
    } & {
      [Key in ToProperty<'KN', N>]: ToKeyName<T>
    } & {
      [Key in ToProperty<'VK', N>]: ToValueKey<T>
    } & {
      [Key in ToProperty<'VN', N>]: ToValueName<T>
    } & {
      [Key in ToProperty<'KEYS', N>]: ToKeys<T>
    } & {
      [Key in ToProperty<'VALUES', N>]: ToValues<T>
    } & {
      [Key in ToProperty<'MAP_BY_KEY', N>]: ToKeyMap<T>
    } & {
      [Key in ToProperty<'MAP_BY_VALUE', N>]: ToValueMap<T>
    } & {
      [Key in ToProperty<'MAP', N>]: ToKeyValue<T>
    } & {
      [Key in ToProperty<'LIST', N>]: T
    }
  >
}

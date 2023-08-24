import {
  type ExtractListProperty,
  type ToPropertyPrefix,
  type ToSingleKeyMap,
  type ToSingleKeyName,
  type ToSingleKeyValue,
  type ToSingleValueKey,
  type ToSingleValueMap,
  type ToSingleValueName,
} from './helper'

export { IBaseDef } from './helper'

export type ToProperty<
  Property extends string,
  N extends string = '',
> = `${ToPropertyPrefix<N>}${Property}`

export type ToValueKey<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
  ? ToSingleValueKey<A>
  : MergeIntersection<ToSingleValueKey<A> & ToValueKey<B>>
  : []

export type ToValueName<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
  ? ToSingleValueName<A>
  : MergeIntersection<ToSingleValueName<A> & ToValueName<B>>
  : []

export type MergeIntersection<A> = A extends infer T
  ? { [Key in keyof T]: T[Key] }
  : never

export type ToKeyMap<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
  ? ToSingleKeyMap<A>
  : MergeIntersection<ToSingleKeyMap<A> & ToKeyMap<B>>
  : []

export type ToValueMap<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
  ? ToSingleValueMap<A>
  : MergeIntersection<ToSingleValueMap<A> & ToValueMap<B>>
  : []

export type ToKeys<T> = ExtractListProperty<T, 'key'>

export type ToValues<T> = ExtractListProperty<T, 'value'>

export type ToKeyValue<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
  ? ToSingleKeyValue<A>
  : MergeIntersection<ToSingleKeyValue<A> & ToKeyValue<B>>
  : []

export type ToKeyName<T> = T extends readonly [infer A, ...infer B]
  ? B['length'] extends 0
  ? ToSingleKeyName<A>
  : MergeIntersection<ToSingleKeyName<A> & ToKeyName<B>>
  : []

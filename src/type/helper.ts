export interface IBaseDef {
  key: PropertyKey
  value: string | number
  name?: string
}

type ReadonlyRecord<K extends keyof any, T> = {
  readonly [P in K]: T
}

export type ToPropertyPrefix<N extends string = ''> = N extends ''
  ? ''
  : `${N}_`

export type ToSingleKeyMap<T> = T extends {
  readonly key: infer K
}
  ? K extends PropertyKey
    ? ReadonlyRecord<K, T>
    : never
  : never

export type ToSingleValueMap<T> = T extends {
  readonly value: infer K
}
  ? K extends PropertyKey
    ? ReadonlyRecord<K, T>
    : never
  : never

export type ToSingleKeyValue<T> = T extends {
  readonly key: infer K
  readonly value: infer V
}
  ? K extends PropertyKey
    ? ReadonlyRecord<K, V>
    : never
  : never

export type ToSingleKeyName<T> = T extends {
  readonly key: infer K
  readonly name: infer V
}
  ? K extends PropertyKey
    ? ReadonlyRecord<K, V>
    : never
  : never

export type ToSingleValueKey<T> = T extends {
  readonly key: infer K
  readonly value: infer V
}
  ? V extends PropertyKey
    ? ReadonlyRecord<V, K>
    : never
  : never
export type ToSingleValueName<T> = T extends {
  readonly name: infer K
  readonly value: infer V
}
  ? V extends PropertyKey
    ? ReadonlyRecord<V, K>
    : never
  : never

export type ExtractListProperty<
  T,
  Prop extends keyof IBaseDef,
> = T extends readonly [infer A, ...infer B]
  ? A extends {
      readonly [p in Prop]: infer K
    }
    ? B['length'] extends 0
      ? [K]
      : [K, ...ExtractListProperty<B, Prop>]
    : never
  : []

export interface IDictionary<V> {
  [Key: string]: V;
}

export type Dictionary<K, V> = { [P in keyof Required<K>]: V };

export type KeysOfDict<T> = keyof T
export type ValuesOfDict<Dict, KeysOf extends KeysOfDict<Dict>> = Dict[KeysOf]

<h1 align="center">constant-sage</h1>

<p align="center">constant-sage可以通过你定义的常量字典，生成类型完善的各种常用的
数据结构</p>

## Features

- ✨ 方便便捷
- 🦾 完善的 TypeScript 支持

## Install

```bash
npm i constant-sage
pnpm i constant-sage
yarn add constant-sage
```

## 使用方法

```typescript
import { defineConstants } from 'constant-sage';

// 定义常量的基本结构
const defs = [
  { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
  { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
  { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
] as const;

// 生成常量集合
const { KEYS, VALUES } = defineConstants(defs);

// 使用常量
console.log(KEYS); // ['KEY_1', 'KEY_2', 'KEY_3']
console.log(VALUES); // ['VALUE_1', 'VALUE_2', 'VALUE_3']
// ...
```

## API

```typescript
defineConstants(defs: readonly IBaseDef[], labelspace?: string)
```

### 生成常量集合。

- defs: 定义常量的基本结构的数组，每个元素包含 key、value 和 name 字段。
- labelspace (可选): 常量集合的命名空间。

返回值: 包含生成常量的对象。

### 常量集合对象

- KEYS: 所有常量的键数组。
- VALUES: 所有常量的值数组。
- KV: 常量键值对的对象。
- VK: 常量值键对的对象。
- MAP_BY_KEY: 以键为索引的常量映射对象。
- MAP_BY_VALUE: 以值为索引的常量映射对象。
- MAP: 常量键值对的对象。
- KN: 以键为索引的常量名称映射对象。
- VN: 以值为索引的常量名称映射对象。
- LIST: 包含所有常量的数组。

## License

[MIT](./LICENSE) License © 2023 [4xii](https://github.com/4xii)

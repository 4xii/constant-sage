<h1 align="center">constant-sage</h1>

<p align="center">constant-sage can generate various commonly used data structures with complete types based on the constant dictionary you define.</p>

<p align="center">
  <a href="https://github.com/4xii/constant-sage">GitHub</a>
    &nbsp; | &nbsp;
    <a href="https://github.com/4xii/constant-sage/blob/main/README.zh-CN.md">简体中文文档</a>
</p>

## Features

- ✨ Convenient and easy to use
- 🦾 Full TypeScript support

## Install

```bash
npm i constant-sage
pnpm i constant-sage
yarn add constant-sage
```

## Usage

```typescript
import { defineConstants } from 'your-module-name';

// Define the basic structure of constants
const defs = [
  { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
  { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
  { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
] as const;

// Generate the constant collection
const { KEYS, VALUES } = defineConstants(defs);

// Use the constants
console.log(KEYS); // ['KEY_1', 'KEY_2', 'KEY_3']
console.log(VALUES); // ['VALUE_1', 'VALUE_2', 'VALUE_3']
// ...
```

## API

```typescript
defineConstants(defs: readonly IBaseDef[], labelspace?: string)
```

### Generate a constant collection

- defs: An array defining the basic structure of constants, where each element contains the key, value, and name fields.
- labelspace (optional): The namespace of the constant collection.

Returns: An object containing the generated constants.

### Constant Collection Object

- KEYS: An array of all constant keys.
- VALUES: An array of all constant values.
- KV: An object mapping constant keys to values.
- VK: An object mapping constant values to keys.
- MAP_BY_KEY: A constant mapping object indexed by key.
- MAP_BY_VALUE: A constant mapping object indexed by value.
- MAP: An object mapping constant keys to values.
- KN: An object mapping constant keys to names.
- VN: An object mapping constant values to names.
- LIST: An array containing all the constants.

## License

[MIT](./LICENSE) License © 2023 [4xii](https://github.com/4xii)

---
nav:
  path: /hooks
---
# useToggle

用于在两个状态值间切换的 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

### 高级用法
<code src="./demo/demo2.tsx" />

## `code`

```
code
```

### `code`

| 参数         | 说明                     | 类型  | 默认值    |
| ------------ | ------------------------ | ----- | --------- |
| defaultValue | 可选项，传入默认的状态值 | `T` | `false` |
| reverseValue | 可选项，传入取反的状态值 | `U` | -         |

### `code`

| 参数    | 说明     | 类型        |
| ------- | -------- | ----------- |
| state   | 状态值   | -           |
| actions | 操作集合 | `Actions` |

### `code`

| 参数     | 说明                                                                            | 类型                       |
| -------- | ------------------------------------------------------------------------------- | -------------------------- |
| toggle   | 切换 state                                                                      | `() => void`             |
| set      | 修改 state                                                                      | `(state: T \| U) => void` |
| setLeft  | 设置为 defaultValue                                                             | `() => void`             |
| setRight | 如果传入了 reverseValue, 则设置为 reverseValue。 否则设置为 defaultValue 的反值 | `() => void`             |

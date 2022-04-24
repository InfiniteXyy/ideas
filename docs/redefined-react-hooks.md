# redefined-react-hooks
a collection of rooks with a little difference from official hooks

target: remove the verbose things, make hooks easier (and faster)

```ts
import { useState, useEffect, useMemo, useCallback, useContext, createContext } from 'redefined-react-hooks'
```


1. **useState & useReducer**

same as `use-immer`

```tsx
const [store, setStore] = useState({count: 0, input: ""})
setStore(draft => draft.count = 1)
```

2. **useCallback**

remove the deps array, always return the function with a same pointer

```tsx
const onChangeAmount = useCallback(() => {
  setAmount(data.length + 1)
})
```

3. **useEffect & useLayoutEffect**

make deps array optional (auto collect deps)

add the option param, { ignoreFirstRender: boolean }.

```tsx
const onChangeKeyword = useEffect(() => {
  console.log(keyword) 
}, {ignoreFirstRender: true})
```

4. **useMemo**

make deps array optional (auto collect deps)

```tsx
const doubled = useMemo(() => {
  return count * 2
})
```

5. **useContext**

add selector for context (same as `use-context-selector`)

```tsx
const counterContext = createContext()

const count = useContext(counterContext, (state) => state.count)
```

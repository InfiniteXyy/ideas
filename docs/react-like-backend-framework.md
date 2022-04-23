# The backend framework <br> A React Developer may create

## Basic Handlers

> Built on function and hooks

```ts
export function postBuyBook() {
  const user = useAuth();
  const { bookId } = useBody();
  const { walletEntity, bookEntity } = useDb();
  const { money } = walletEntity.get({ userId: user.id });
  const book = bookEntity.get({ id: bookId });

  if (book.price > money) {
    sendResponse(400, { body: { message: "Not enough money" } });
  } else {
    wallet.update({ userId: user.id, money: money - book.price });
    book.update({ id: bookId, status: "sold" });
    sendResponse(200, { body: { message: "Success" } });
  }
}
```

```ts
// of course hooks are composable
export function useBuyBook(bookId: string) {
  const user = useAuth();
  const { walletEntity, bookEntity } = useDb();
  ...
  return function buy() {
    ...
  };
}
```

## API Routing

> based on File system

```ts
// the following functions will be mapped to
// 1. GET /todos
// 2. POST /todos
// 3. GET /todo/[id]

// routes/todos.tsx
export function getTodos() {
  return ...
}

export function postTodos() {
  return ...
}

// routes/todos/[id].tsx
export function getTodo(props: { id: string }) {
  return ...
}


```

## Middleware & route

> in JSX?

```jsx
// routes/[...].tsx
export function getIndex() {
  return (
    <CORS>
      <Route handlers={{ get: () => {}, post: () => {} }} path="/not-include-in-filesystem">
      <Route handlers={fileBasedHandlers} path="/">
      <Route handlers={handler404} />
    </CORS>
  );
}
```

## Data structure

> with define-like API

```jsx
// stores/book.tsx
export const bookEntity = defineEntity({
  name: "book",
  fields: {
    id: { type: "string", primaryKey: true },
    title: { type: "string" },
    price: { type: "number" },
    status: { type: "string" },
  },
});

// stores/index.tsx
export const useDb = defineStore({
  provider: "sqlite",
  config: {},
  entities: [bookEntity],
});
```

## Cache

> with useEffect & useMemo

```tsx
// routes/fibonacci/[index].tsx
export function getFibonacci(props: { index: number }) {
  const { index } = props;
  // the computed result is cached for index
  const result = useMemo(() => {
    // compute
  }, [index]);

  sendResponse(200, { body: { result } });
}

export function useExternalAPI(target) {
  const externalConnection = useMemo(() => {
    // do some init stuff
  }, [target]);

  useEffect(() => {
    externalConnection.connect();
    return () => externalConnection.disconnect();
  }, [externalConnection]);

  return externalConnection;
}
```

## Multi-endpoint deployment

> with createPortal

```jsx
export function getXXX() {
  sendResponse(200, { body: "Hello" });
  return createPortal({ target: "/xxx/xxx" });
}
```

## And more

- Suspense?
- HTTP Stream / concurrent mode?
- IDK

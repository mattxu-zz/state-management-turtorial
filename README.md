
## A simple state management tool leveraging closure.

### Create a store
```js
import Store from 'state-management-turtorial';

const store = new Store({
	message: 'init message',
});
```

### Update state
```js
store.next({
	message: 'new message'
});
```

### Subscribe to state changes
```js
store.subscribe((state) => {
	console.log(`Receive Message: ${state.message}`)
});
```

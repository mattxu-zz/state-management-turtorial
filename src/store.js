function Store(initState) {
	const observers = new Map();
	let state = { ...initState };

	function next(nextState) {
		const newState = {
			...state,
			...nextState,
		}
		const oldState = { ...state };
		state = newState;

		for (const [, observer] of observers.entries()) {
			if (observer(oldState) !== observer(newState)) {
				observer(JSON.parse(JSON.stringify(newState)));
			}
		}
	}

	function subscribe(cb) {
		const key = Symbol(cb);
		observers.set(key, cb);
		return key;
	}

	function unsubscribe(key) {
		observers.delete(key)
	}

	function getState() {
		return state;
	}

	return {
		next,
		subscribe,
		unsubscribe,
		getState,
	}
}

export default Store;

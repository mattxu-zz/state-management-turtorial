function Store(initState) {
	var observers = [];
	var state = {...initState};

	function next(nextState) {
		const newState = {
			...state,
			...nextState,
		}

		state = newState;

		observers.map((observer) => observer(JSON.parse(JSON.stringify(newState))));
	}

	function subscribe(cb) {
		if (!observers.includes(cb)) {
			observers.push(cb);
		}
	}

	function getState() {
		return state;
	}

	return {
		next,
		subscribe,
		getState,
	}
}

export default Store;

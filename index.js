/**
 * Create a promise and corresponding resolution functions in the same scope
 * 
 * @example 

    `const { promise, fullfil, reject } = promiser()`

    Or 
    
    ```
      const promise = promiser(); 
      promise.fullfil('foo');
    ```
 * 
 */
export const promiser = () => {
	const resolve = {}
    const promise = new Promise(function(fullfil, reject) {
        Object.assign(resolve, { fullfil, reject })
    })
	Object.assign(promise, resolve, { promise })
	return promise
}

export default promiser

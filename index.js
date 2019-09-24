/**
 * Create a promise and corresponding resolution functions in the same scope
 * 
 * @example 

    `const { promise, fulfill, reject } = promiser()`

    Or 
    
    ```
      const promise = promiser(); 
      promise.fulfill('foo');
    ```
 * 
 */
export const promiser = () => {
    const resolve = {}
    const promise = new Promise(function(fulfill, reject) {
        Object.assign(resolve, { fulfill, reject })
    })
    Object.assign(promise, resolve, { promise })
    return promise
}

export default promiser

# promiser

Promise and resolution in the same scope

The syntax for fulfilling a promise is verbose: 

```
  const promise = new Promise((fulfill, reject) => {
    fulfill('foo')
  })
  console.log('fulfilled promise', promise)
```

And requires fulfillment within the scope of the passed in callback function. 

The promiser utility is consise and within the same scope. 

## Examples

 ```
  const { promise, fulfill, reject } = promiser()
  fulfill('foo')
  console.log('fulfilled promise', promise)
 ```
    Or 
    
```
  const promise = promiser(); 
  promise.fulfill('foo');
  console.log('fulfilled promise', promise)
```

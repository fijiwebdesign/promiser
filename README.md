# promiser

Promise and resolution in the same scope

The syntax for fullfilling a promise is verbose: 

```
  const promise = new Promise((fullfil, reject) => {
    fullfil('foo')
  })
  console.log('fullfilled promise', promise)
```

And requires fullfillment within the scope of the passed in callback function. 

The promiser utility is consise and within the same scope. 

## Examples

 ```
  const { promise, fullfil, reject } = promiser()
  fullfil('foo')
  console.log('fullfilled promise', promise)
 ```
    Or 
    
```
  const promise = promiser(); 
  promise.fullfil('foo');
  console.log('fullfilled promise', promise)
```

let a = setTimeout(() => {
    console.log('promise')
}, 1000);
clearTimeout(a)
console.log('hello')
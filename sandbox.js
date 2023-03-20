const obj = {
    name: 'affad',
    age: 22,
    detail: {
        score: 100
    },
    sayHello: ()=>{
        return 'Hello World'
    }
}

const {score} = obj.detail
console.log(obj.detail.score)
console.log(score)
console.log(obj.sayHello())
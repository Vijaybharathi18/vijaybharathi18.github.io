/*console.log(0.1+0.2===0.3)
console.log(0.1+0.2)

const obj ={
    name:'vijay',
    age:22,
    location:'chennai'

}
a=JSON.stringify(obj)
console.log(a)
b=JSON.parse(a)
console.log(b)
console.log(typeof(a))
console.log(typeof(b))
*/
const obj ={
    name:'vijay',
    age:22,
    city:'chennai',
    degree:{
        course:'msc'
    }
    
}
let copy={...obj};
copy.name='virat';
copy.city='cbe';
copy.degree.course='bsc';
console.log(obj.name)
console.log(obj.city)
console.log(obj.degree.course)

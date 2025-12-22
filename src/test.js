let x=[

    {name:'ajay',city:'agra'},
    {name:'bimal',city:'delhi'},
    {name:'jack',city:'delhi'},
    {name:'dipak',city:'agra'},
    {name:'raja',city:'dubai'},

]


let p=x.reduce((acc, curr) => {

    let r=curr.city
    acc[curr.city] =Array.isArray(acc[r]) ? [...acc[curr.city],curr.name]  :[curr.name]
    return acc


},{})

console.log(p)




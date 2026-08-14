export const borderLinks=(codes?:string[])=>{
    if(!codes || codes.length===0){
        return []
    }
const result=codes.map((code)=>{
return {code,href:`/country/${code}`}
})
return result
}

console.log(borderLinks(['FRA','ESP']))
console.log(borderLinks(['FRA'])[0].href === '/country/FRA')
type Result={
    label:string;
    href:string;
}

const crumbs=(pathname:string)=>{
   if(pathname==='/'){
    return []
   }
    const result=pathname.split('/').filter(Boolean).reduce((accu,curr,idx)=>{
    let temp=curr;
    let finalLabel=temp.charAt(0).toUpperCase()+temp.slice(1);
    //deeper
    let updatedLabel=finalLabel.includes('-')?finalLabel.split('-'):[];
    let updatedLabel1=updatedLabel.length!==0?updatedLabel.map((ele)=>{
        return ele.charAt(0).toUpperCase()+ele.slice(1);
    }).join(" "):""

    let insnatce={
        label:updatedLabel1?updatedLabel1:finalLabel,
        href:idx===0 ? '/'+curr:accu[idx-1].href+'/'+curr
    }
    return [...accu,insnatce]

    },[] as Result[])
    return result
}

console.log(crumbs('/dashboard/settings').length===2);
console.log(crumbs('/'));
//deeper
console.log(crumbs('/dashboard/settings/user-profile'));



function CompileCode(code,testcase,language){
    fetch("http://localhost:8001/api/compile",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            code:code,
            input:testcase,
            language:language
        })
    })
    .then((res)=>{
        console.log(res);
        // res = res.json();
        return res;
    })
    .catch((err)=>{
        throw err;
    })
}

export default CompileCode;
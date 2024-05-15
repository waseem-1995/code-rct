
const url="http://localhost:3000/masai"


window.addEventListener("load",()=>{
    getData();

    document.getElementById("sort-low-to-high").onclick=()=>{
        sortLowToHigh();
    };

    document.getElementById("sort-high-to-low").onclick=()=>{
        sortHighToLow();
    };

    document.getElementById("greater-than").onclick=()=>{
        greaterThan();
    };

    document.getElementById("less-than").onclick=()=>{
        lessThan();
    };
});

let getData = async () =>{
    let res=await fetch(url);
    //console.log(res)
    res=await res.json();
    renderDom(res)
    console.log(res)
};
getData()
let postData = async () =>{
    let name=document.getElementById("name");
    let batch=document.getElementById("batch");
    let section=document.getElementById("section");
    let score=document.getElementById("eval_score")
    let image=document.getElementById("image");

    let data={
        name: name.value,
        batch:batch.value,
        section:section.value,
        score:+score.value,
        image:image.value,
    }

    data = JSON.stringify(data)

    let res=await fetch(url,{
        method:"POST",
        body:data,
        headers:{
            "Content-Type":"application/json",
        },
    });

    name.value = null;
    batch.value = null;
    section.value = null;
    score.value = null;
    image.value = null;

    getData();

}


let item = ({id,name,batch,section,score,image}) => {
    let div = document.createElement("div");
    div.setAttribute("class", "student");
    let img = document.createElement("img");
    img.src = image;
    let h3 = document.createElement("h3");
    h3.innerText = name;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "student_score");
    p1.innerText = score;

    let p2 = document.createElement("p");
    p2.innerText = section;

    let p3 = document.createElement("p");
    p3.innerText =batch;

    let button_div=document.createElement("div");
    let remove_btn=document.createElement("button");
    remove_btn.setAttribute("class","remove_student");
    remove_btn.innerText="Remove";
    remove_btn.onclick=()=>{
       removeStudent(id)
    };

    let update_btn=document.createElement("button");
    update_btn.setAttribute("class","update_score");
    update_btn.innerText="Update score";
    update_btn.onclick=()=>{
       submitNewScore(id)
    };

    button_div.append(remove_btn,update_btn);
    div.append(img,h3,p1,p3,p2,button_div);

    return div
};

let renderDom = (data) => {
    let container = document.getElementById("container");
    container.innerHTML=null;
    data.forEach((el)=>{
        container.append(item(el));
    });
}

let removeStudent=async(id)=>{
    let res=await fetch(`${url}/${id}`,{
        method:"DELETE",
    });
    getData();
}

let submitNewScore=async(id)=>{
    let score =document.getElementById("new_score");
    score.removeAttribute("disabled")
    score.onkeypress=()=>{
        updatescore(event,id)
    }
}


let updatescore=async(e,id)=>{
    let new_score=document.getElementById("new_score");
    let product = await fetch(`${url}/${id}`);
    product = await product.json();
    if(e.key==="Enter"){
        let data={score: +new_score.value || +product.score} 
        let res=await fetch(`${url}/${id}`,{
            method:"PATCH",
            body:JSON.stringify(data),
            headers:{
                "content-Type":"application/json",
            },
        });
        new_score.value=null;
        new_score.setAttribute("disabled","true");
        getData()
    }
}

let sortLowToHigh = async() =>{
    let res=await fetch(`${url}?_sort=score&_order=asc`);
    res= await res.json();
    renderDom(res);
}

let sortHighToLow = async() =>{
    let res=await fetch(`${url}?_sort=score&_order=desc`);
    res= await res.json();
    renderDom(res);
}

let greaterThan = async() =>{
    let res=await fetch(`${url}?score_gte=6`);
    res= await res.json();
    renderDom(res);
}

let lessThan = async() =>{
    let res=await fetch(`${url}?score_lte=5`);
    res= await res.json();
    renderDom(res);
}

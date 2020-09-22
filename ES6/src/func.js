const f1 = (...e) => {
    return e.map(e => e*e);
}

const f2 = (e1, e2) => (
    e1.map(
        (ele, i) => ele + e2[i]
    )
)
      

export {f1, f2 };


//app.js
// import {f1, f2} from "./func";

// const a1 = [1,2,3,4];
// const a2 = [...a1];
// const a3 = a2.map((e)=> e*e);

// console.log(a1, a2, a3, f1(...a3), f2(a1, a2));

// document.querySelector('.info').innerHTML = `${a1}<br/>${a2}<br/>${a3}<br/>${f1(...a3)}<br/>${f2(a2,a3)}`;

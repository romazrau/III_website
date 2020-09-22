let info;
if(document && document.querySelector && document.querySelector('.info')){
    info = document.querySelector('.info');
}

function output(...msg){
    if(info){
        info.innerHTML +=  "<br/>" + msg.join(' ') + "<br/>"
    }else{
        console.log(...msg);
    }
}

export default {
    log: output
}


//app
// import fakeLog from './fakeConsole';


// fakeLog.log(a1);
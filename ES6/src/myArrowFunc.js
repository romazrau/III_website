document.querySelectorAll('.container > button').forEach(
    (e) => {
        e.addEventListener(
            'click',
            function(ele){
                console.group('button click');
                    console.log('this:',this);
                    console.log('e.target:', ele.target);
                    console.log('e.currenttarget', ele.currentTarget);
                console.groupEnd();
            }
        )
    }
)

document.querySelector('.container').addEventListener(
            'click',
            function(e){
                console.group('container click');
                    console.log('this:',this);
                    console.log('e.target:', e.target);
                    console.log('e.currenttarget', e.currentTarget);
                console.groupEnd();
            }
        )



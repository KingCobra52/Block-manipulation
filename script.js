//This makes sure the page is always listening
window.addEventListener('load', function(){
    let block = document.getElementById('block');
    let scaleCoef = 1;
    let rotateDeg = 0;
     //Pos Y manipulation
    let posY = document.getElementById('pos-y');
    posY.addEventListener('input', function(){ //When slider is slid input occurs 
        block.style.top = posY.value + 'px';
    })
    //Pos X manipulation
    let posX = document.getElementById('pos-x');
    posX.addEventListener('input', function(){
        block.style.left = posX.value + 'px';
    })
    //Size manipulation
    let size = document.getElementById('size');
    size.addEventListener('input', function(){
        scaleCoef = size.value;
        block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`
    })
     //Opacity manipulation
     let opacity = document.getElementById('opacity');
     opacity.addEventListener('input', function(){
         block.style.opacity = opacity.value;
     })
      //Shape choice
    let shape = document.getElementById('shape-select')
    let submitShape = document.getElementById('ok-shape');
    submitShape.addEventListener('click', function(){
        let option = shape.value;
        if(option == '1'){
            block.style.borderRadius = '0';
            rotateDeg = 0;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`
        } else if(option == '2'){
            block.style.borderRadius = '50%'
        }else{
            block.style.borderRadius = '0';
            rotateDeg = 45;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`
        }
    })
    //hex code choice 
    let hex = document.getElementById('hex');
    hex.addEventListener('keyup', function(event){
        if (event.keyCode === 13) {
            block.style.backgroundColor = `#${hex.value}`
          }
    })
    //RGBA manipulation
    let rgbaR = document.getElementById('rgba-r');
    let rgbaG = document.getElementById('rgba-g');
    let rgbaB = document.getElementById('rgba-b');
    let rgbaA = document.getElementById('rgba-a');

    let rgbaInputs = document.querySelectorAll('.rgba-container input') 

    rgbaInputs.forEach(function(element){
        element.addEventListener('input', function(){
            block.style.backgroundColor = `rgba(${rgbaR.value},${rgbaG.value},${rgbaB.value},${rgbaA.value})`;
        })
    })
})

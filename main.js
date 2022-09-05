const init=()=>{
    // function Evaluate(str){
    //     return eval(str)
     
    // }
    document.getElementById('comment_form').addEventListener('submit', post)
    function post(e){
        e.preventDefault()
        console.log(e.target)
        let comment={
            comment:e.target.input_comment.value
        }
        postComment(comment)
    }
    function postComment(commentSent){
        fetch('http://localhost:3000/comments',{
            method:'POST',
        headers:{
            'Conntent-Type':'application/json',
            Accept:'application/json'
        },
        body:JSON.stringify(commentSent)
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }
    }
    
    
    
    document.addEventListener('DOMContentLoaded', init)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function calculate(e){
    //     e.preventDefault();
    //     let num1=e.target.btn_1.value;
    //     let num2=e.target.btn_2.value;
    //     let num3=e.target.btn_3.value;
    //     let num4=e.target.btn_4.value;
    //     let num5=e.target.btn_5.value;
    //     let num6=e.target.btn_6.value;
    //     let num7=e.target.btn_7.value;
    //     let num8=e.target.btn_8.value;
    //     let num9=e.target.btn_9.value;
    //     let add=e.target.btn_add.value;
    //     console.log(add)
    //     let subtract=e.target.btn_subtract.value;
    //     let divide=e.target.btn_divide.value;
    //     let multiply=e.target.btn_multiply.value;
    //     let equal=e.target.btn_equal.value;
    //     let decimal=e.target.btn_decimal.value;
    //     let btn_clear=e.target.btn_clear.value;
    
    //     let numbersArray=[num1, num2,num3,num4, num5,num6, num7,num8,num9]
    //     let operands=[add, subtract,divide,multiply]
    //     for(let i=0; i<numbersArray.length; i++){
    //         for(let j=i+1; j<numbersArray.length; j++){
                
    //         }}
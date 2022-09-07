document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('comment_form').addEventListener('submit', postComment)
  });
  function postComment(e) {
    e.preventDefault()
    let postedComment = {
      content: e.target.input_comment.value,
    }
    postToJson(postedComment)

  }
  function postToJson(postedComment) {
    return fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(postedComment)
      })
      .then(response => response.json())
      .then(comment => console.log(comment))
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
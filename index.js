// document.getElementById("btn_1").addEventListener(click(),function () {
//    var screen= document.getElementById("screen");
//    screen.innerHTML(1);
// })

const screen=$("#screen");
let res="";
$(()=>{
    $(".btn").click(function () {
        var btn=$(this).html().trimEnd();
        let val=screen.val()+btn;
        
        if(btn === "CE")
        {
            screen.val("")
            
        }   
        else if(btn === "=")
        {
        try {
            res=eval(screen.val());
            screen.val(res)
        
        } catch (error) {
            screen.val("Err!!")
                   
        }    
        }   
 
        else     
        {
             screen.val(val);
             
        }
     

    })
    // $(document).keypress((e)=>{

    // })
   
})
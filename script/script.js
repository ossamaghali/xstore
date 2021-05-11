
              /*Click slider bar*/ 
       function Home(){
          window.scrollTo(0,0);
       }
        document.getElementById("Sign_in").addEventListener("click", ()=>{
           window.location="Login.html";
        })

       /*function btn_Icon_Search*/
       var Search = false;
   document.getElementById("btn_Icon_Search").addEventListener("click", ()=>{
        if(!Search){
           Search = true;
           document.getElementById("btn_Icon_Search").style.webkitMaskImage="url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzVGNjM2OCI+PHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnoiLz48L3N2Zz4=)";
           document.getElementById("back_Search_bar").style.top="50px";
           document.getElementById("Home").style.bottom='40px';
           document.getElementById("Search_bar").focus();
           document.getElementById("header_bar").style.boxShadow="none";
        }

            else {
               Search = false;
               document.getElementById("btn_Icon_Search").style.webkitMaskImage="url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzVGNjM2OCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIvPjwvc3ZnPg==)";
               document.getElementById("back_Search_bar").style.top="0px";
               document.getElementById("Home").style.bottom='40px';
               document.getElementById("header_bar").style.boxShadow="0px 0px 10px grey";
            }
   });
   document.getElementById("Search_bar").addEventListener("input", ()=>{
     if(!document.getElementById("Search_bar").value == ""){
      document.getElementById("Icon_delete_Search").style.display="block";
     }
     else {
      document.getElementById("Icon_delete_Search").style.display="none";
     }
   })
    
        /*Icon_delete_Search*/
      document.getElementById("Icon_delete_Search").addEventListener("click", ()=>{
         document.getElementById("Search_bar").value="";
         document.getElementById("Icon_delete_Search").style.display="none";
      })

          /*Send_Comment*/
          var Input_Comment = document.getElementById("Input_Comment");
          function Send_Comment(){
            if(Input_Comment.value !== ""){
               document.getElementById("dialog_comment").setAttribute("open", "true");
               Input_Comment.value="";
               document.getElementById("header_bar").style.filter="blur(2px)";
               document.getElementById("Home").style.filter="blur(2px)";
               document.getElementById("section").style.filter="blur(2px)";  
               document.getElementById("About").style.filter="blur(2px)";
          }
         
       }
       function close_dialog(){
         document.getElementById("dialog_comment").removeAttribute("open");
         document.getElementById("header_bar").style.filter="none";
         document.getElementById("Home").style.filter="none";
         document.getElementById("section").style.filter="none";  
         document.getElementById("About").style.filter="none";
       }
      



      /*dark Mode
  
function select_Theme(){
   if(document.querySelector(".select_Theme").value == "Dark"){

   document.getElementById("header_bar").style.background="#333";
   document.getElementById("header_bar").style.boxShadow="0px 0px 1px black";
   document.getElementById("logo_bar").style.color="white";
   document.querySelector("a").style.color="white";
   document.getElementById("btn_Icon_Search").style.background="white";
   document.getElementById("Icon_Sala").style.background="white";
   document.querySelector(".section").style.background="#333";
   document.getElementById("Text_cover_slider").style.color="white";
   document.getElementById("text_many_slider").style.color="white";
   document.getElementById("text_feedback_slider").style.color="white";
}
else {      
   document.getElementById("header_bar").style.background="white";
}
  localStorage.setItem("Theme",document.querySelector(".select_Theme").value);
};

if(localStorage.getItem("Theme") == "Dark"){
  
   document.getElementById("header_bar").style.background="#333";
   document.getElementById("header_bar").style.boxShadow="0px 0px 1px black";
   document.getElementById("logo_bar").style.color="white";
   document.querySelector("a").style.color="white";
   document.getElementById("btn_Icon_Search").style.background="white";
   document.getElementById("Icon_Sala").style.background="white";
   document.querySelector(".section").style.background="#333";
   document.getElementById("Text_cover_slider").style.color="white";
   document.getElementById("text_many_slider").style.color="white";
   document.getElementById("text_feedback_slider").style.color="white";
   document.getElementById("Icon_btn_left").style.fill="white";
   document.getElementById("Icon_btn_right").style.fill="white";

             
    document.getElementById("text_trend_2").style.color="white";
    document.getElementById("back_cover_trend").style.display="none";
}
document.querySelector(".select_Theme").value = localStorage.getItem("Theme");
*/
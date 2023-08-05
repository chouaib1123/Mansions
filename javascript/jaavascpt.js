const b1 = document.getElementById('bt1');
        const b2 = document.getElementById('bt2');
        const b3 = document.getElementById('bt3');
        function bn1(){
         b1.style.backgroundColor = "rgba(217, 217, 217, 0.51)";
         b2.style.backgroundColor = "transparent";
         b3.style.backgroundColor = "transparent";
        }
        function bn2(){
         b2.style.backgroundColor = "rgba(217, 217, 217, 0.51)";
         b1.style.backgroundColor = "transparent";
         b3.style.backgroundColor = "transparent";
        }
        function bn3(){
         b3.style.backgroundColor = "rgba(217, 217, 217, 0.51)";
         b2.style.backgroundColor = "transparent";
         b1.style.backgroundColor = "transparent";
        }
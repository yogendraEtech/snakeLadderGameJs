n=0;n1=0;n2=0;
m=0;m1=0;m2=0;
b=1;
           
function roll(){
 
    if(b==1){
        document.getElementById("dice_src").src = "dice.mp3";
        document.getElementById("dice_sound").load();
        document.getElementById("dice_sound").play();
                        
        var n=  Math.ceil(6*Math.random());
        document.getElementById("z").innerHTML=n;
        n1=n1+n;
        if(n1>100){
            n1=n2;
        }
        document.getElementById("id"+n2).setAttribute('class','dice-position-before');
       
        if(n1==4){
            n1=56;
            document.getElementById("applause_src").src = "applause_big.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(n1==12){
            n1=50;
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(n1==14){
            n1=55;
            document.getElementById("applause_src").src = "applause.mp3"
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(n1==22){
            n1=58;
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(n1==28){
            n1=10;
            document.getElementById("hiss").play();
        }
        if(n1==37){
            n1=3
            document.getElementById("hiss").play();
        }
        if(n1==41){
            n1=79
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(n1==47){
            n1=16
            document.getElementById("hiss_src").src = "hiss.mp3";
            document.getElementById("hiss").load();
            document.getElementById("hiss").play();
        }
        if(n1==54){
            n1=88
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(n1==75){
            n1=32
            document.getElementById("hiss_src").src = "hiss.mp3";
            document.getElementById("hiss").load();
            document.getElementById("hiss").play();
        }
        if(n1==94){
            n1=71
            document.getElementById("hiss_src").src = "hiss.mp3";
            document.getElementById("hiss").load();
            document.getElementById("hiss").play();
        }
        if(n1==96){
            n1=42;
            document.getElementById("hiss_src").src = "hiss_big.mp3";
            document.getElementById("hiss").load();
            document.getElementById("hiss").play();
        }
        if(n2==m2){
            document.getElementById("id"+n2).setAttribute('class','dice-position-clash');  
        }

        n2=n1;
        document.getElementById("id"+n1).setAttribute('class','dice-position');
                    
        if(n1==100){
            alert('congratulations! 1st Player won')
            document.getElementById("firework").setAttribute('class','pyro');
            document.getElementById("firework_sound").play();
            document.getElementById('y').disabled=true
            document.getElementById('y1').disabled=true
        }
        b=0;     
    }
    else
        alert("Now 2nd Player's Turn ");
}

function roll2(){
    if(b==0){
        document.getElementById("dice_src").src = "dice.mp3";
        document.getElementById("dice_sound").load();
        document.getElementById("dice_sound").play();

        var m=  Math.ceil(6*Math.random());
        document.getElementById("z").innerHTML=m;
        m1=m1+m;
        if(m1>100){
            m1=m2;
        }
        document.getElementById("id"+m2).setAttribute('class','dice-position-before2');
        if(m1==4){
            m1=56
            document.getElementById("applause_src").src = "applause_big.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(m1==12){
            m1=50
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(m1==14){
            m1=55
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(m1==22){
            m1=58
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
         if(m1==28){
            m1=10
            document.getElementById("hiss").play();
        }
        if(m1==37){
            m1=3
            document.getElementById("hiss").play();
        }
        if(m1==41){
            m1=79
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(m1==47){
            m1=16;
            document.getElementById("hiss_src").src = "hiss.mp3";
            document.getElementById("hiss").load();
            document.getElementById("hiss").play();
        }
        if(m1==54){
            m1=88 ;
            document.getElementById("applause_src").src = "applause.mp3";
            document.getElementById("applause").load();
            document.getElementById("applause").play();
        }
        if(m1==75){
            m1=32
            document.getElementById("hiss_src").src = "hiss.mp3";
            document.getElementById("hiss").load();
            document.getElementById("hiss").play();
        }
        if(m1==94){
            m1=71
            document.getElementById("hiss_src").src = "hiss.mp3";
            document.getElementById("hiss").load();
            document.getElementById("hiss").play();
        }
        if(m1==96){
            m1=42
            document.getElementById("hiss_src").src = "hiss_big.mp3"
            document.getElementById("hiss").load();
            document.getElementById("hiss").play();
        }
        if(m2==n2){
            document.getElementById("id"+m2).setAttribute('class','dice-position-clash2');  
        }
                    
        m2=m1;
        document.getElementById("id"+m1).setAttribute('class','dice-position2');
        if(m1==100){
            alert('congratulations! 2nd Player won');
            document.getElementById("firework").setAttribute('class','pyro');
            document.getElementById("firework_sound").play();
            document.getElementById('y').disabled=true
            document.getElementById('y1').disabled=true
        }
        b=1;
    }
    else
        alert("Now 1st Player's Turn ");         
}
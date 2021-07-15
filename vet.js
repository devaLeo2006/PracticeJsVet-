    
    var D,Ph,Di,Dn,Dg,De,Rc,Dc,Da,Dw,Ow;
    
    
    var dt = function () {
    
    Ow  = document.getElementById("ow").value;
    let some = document.createElement("p");

    let sometext = document.createTextNode(Ow);
    some.appendChild(sometext);
    document.getElementsByTagName("div")[0].appendChild(some);
    "<br>"
     D = document.getElementById("d").value;
     Ph = document.getElementById("ph").value;
     Di = document.getElementById("di").value;
     Dn = document.getElementById("dn").value;
     Dg = document.getElementById("dg").value;
     De = document.getElementById("de").value;
     Rc = document.getElementById("rc").value;
     Dc = document.getElementById("dc").value;
     Da = document.getElementById("da").value;
     Dw = document.getElementById("dw").value;

    document.getElementById("p1").value = OW 

    }

    var getInfo= function(){
        alert(Ow);
    }
    


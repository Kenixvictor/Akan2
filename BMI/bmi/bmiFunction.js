function bmiFunction (){
    var markName = prompt("enter your name");
    var markMass = parseInt(prompt("enter the  Mass"));
    var markHeight =parseInt(prompt("enter the Height"));
    var markBMI = markMass / (markHeight *markHeight);
    
    alert ("your BMIs"+""+ markBMI  )
    var johnName = prompt("enter your name");
    var johnMass = parseInt(prompt("enter the Mass"));
    var johnHeight = parseInt(prompt("enter the Height"));
    var johnBMI = johnMass / (johnHeight * johnHeight);
    
    
    
    alert ("your BMIs"+""+ johnBMI  )
    
    if (markBMI>johnBMI)
    { alert(markName+" "+ "is greater than"+" "+ johnName)}
    else if (johnBMI>markBMI){    
         alert(johnName+" "+ "is greater than"+ " "+markName)
    }
    else {
        alert(johnName+ "" +" is equal to"+" "+markName)
    }

    }
    
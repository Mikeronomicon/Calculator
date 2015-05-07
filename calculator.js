var a, b, result;
     function setValues()
     {
          a = Number(document.getElementById(“a”).value);
          b = Number(document.getElementById(“b”).value);
     }

     function addition()
     {
          setValues();
          result = a + b;
          alert(“The result is = ” + result);
     }
     function subtraction()
     {
          setValues();
          result = a - b;
          alert(“The result is = ” + result);
     }
     function multiplication()
     {
          setValues();
          result = a * b;
          alert(“The result is = ” + result);
     }
     function division()
     {
          setValues();
          result = a / b;
          alert(“The result is = ” + result);
     }
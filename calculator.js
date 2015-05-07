var a, b, result;
     function setValues()
     {
          a = Number(document.getElementById("a").value);
          b = Number(document.getElementById("b").value);
     }

     function addition()
     {
          setValues();
          result = a + b;
          alert(result);
     }
     function subtraction()
     {
          setValues();
          result = a - b;
          alert(result);
     }
     function multiplication()
     {
          setValues();
          result = a * b;
          alert(result);
     }
     function division()
     {
          setValues();
          result = a / b;
          alert(result);
     }
     function clear()
     {
          document.getElementById("a").value = "";
          document.getElementById("a").value = "";
     }
     
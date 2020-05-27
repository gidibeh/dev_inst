document.getElementById("calculate").addEventListener("click",calculateTip);

function calculateTip(){
  let billAmt =parseFloat(document.getElementById("billamt").value);
  let serviceQual =parseFloat(document.getElementById("serviceQual").value);
  let numOfPeople =parseInt(document.getElementById("peopleamt").value);
  if (isNaN(billAmt) || serviceQual==0){
    alert("Bill and Service fields are empty");
    return;
  }
  if(numOfPeople <=0 || isNaN(numOfPeople)){
    numOfPeople=1;
    document.getElementById("each").style.display="none";
  }
  let total = (billAmt*serviceQual)/numOfPeople;
  total =  total.toFixed(2);

  document.getElementById("tip").innerHTML = total;
}


var checkEmail = function(value) {

    var valid = true;

    if (value.indexOf('@') == -1) {
        valid = false;
    } else {

        var parts = value.split('@');
        var domain = parts[1];

        if (domain.indexOf('.') == -1) {

            valid = false;

        } else {

            var domainParts = domain.split('.');
            var ext = domainParts[1];

            if (ext.length > 4 || ext.length < 2) {

                valid = false;
            }
        }

    }


    return valid;

};

var form = document.getElementById('test');

var validate = function(event) {
    event.preventDefault();
    var val = document.getElementById('email').value;
    var valid = checkEmail(val);

    if (!valid) {

        alert('Not a valid e-mail address');
    } else {

        alert('Valid e-mail address');

    }
};

form.addEventListener('submit', validate, false);

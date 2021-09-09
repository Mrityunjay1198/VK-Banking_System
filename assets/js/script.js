let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 50000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).text()) + enterAmount;

      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount

      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com.`)

      // transaction history
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

function mySendMoney(){

   var AccNo = $('#enterAccNo').val();
   var enterAmount = $('#enterAmount').val();
   var enterName = $('#enterName').val()+AccNo;
   
   var emailClass = "email" + AccNo;

   // Get data for verify account
   var getAcc = $('#'+AccNo+' #srno').text();
   var getEmail = $('.'+emailClass).text();
   var EnterEmail = $('#enterName').val()+"@gmail.com";

console.log(getAcc)
   if(getAcc === AccNo && getEmail === EnterEmail){
      //alert("Your Account Verified"+getEmail)

      if (enterAmount > myAccountBalance) {
         alert("Insufficient Balance.")
      } else {
         //alert(AccNo)
         var availamt = $('#'+enterName).text()
         var total = parseInt(availamt)+parseInt(enterAmount)
         $('#'+enterName).text(total);
         var datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
         alert("Acc "+AccNo+" Credited with Rs."+enterAmount+".00, "+datetime+" From VK Bank . Aval Bal Rs."+total+" CR. Helpline 18001802222-VK-Kotak")

         // Clear fields
         $('#enterName').val('');
         $('#enterAmount').val('');

         // Debit from account
         myAccountBalance = parseInt(myAccountBalance) - parseInt(enterAmount);
         $('#myAccountBalance').text(myAccountBalance);

         // Transaction History

         var dateObj = new Date();
         var month = dateObj.getUTCMonth() + 1; //months from 1-12
         var day = dateObj.getUTCDate();
         var year = dateObj.getUTCFullYear();

         newdate = day + "/" + month + "/" + year;

         var tableRow = '<tr>'+
                           '<th scope="row">'+AccNo+'</th>'+
                           '<td>₹'+enterAmount+'</td>'+
                           '<td>'+newdate+'</td>'+
                         '</tr>';
                         
         $('#transaction-history').append(tableRow);
      }
   }else{
      alert("Sorry Account not found. Please check credentials")
      $('#enterName').val('');
         $('#enterAmount').val('');
   }

   
}

function depositeMoney(){
   var dipamt = $('#depositeamount').val();
   var availbal = $('#myAccountBalance').text();
   var total = parseInt(dipamt) + parseInt(availbal); 
   var datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
   alert("Ac 672500 Credited with Rs."+dipamt+".00, "+datetime+" Direct Bank . Aval Bal Rs."+total+" CR. Helpline 18001802222-VK-Kotak");
   $('#myAccountBalance').text(total);
   myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
   $('#depositeamount').val('');
}

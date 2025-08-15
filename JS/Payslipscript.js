   // Get the payslip data from localStorage
   const payslip = JSON.parse(localStorage.getItem("payslipData"));

   if (payslip) {
document.getElementById("payslipData").innerHTML = `
   <div class="payslip-header">
       <div>
           <p><strong>Employee Name:</strong> ${payslip.name}</p>
           <p><strong>Employee ID:</strong> ${payslip.id}</p>
           <p><strong>Role:</strong> ${payslip.role}</p>
       </div>
       <div class="date-section">
           <p><strong>Date:</strong> ${payslip.date}</p>
           <p><strong>Month:</strong> ${payslip.month}</p>
       </div>
   </div>

   <table class="payslip-table">
       <thead>
           <tr>
               <th colspan="2">Employee Details</th>
               <th colspan="2">Earnings</th>
               <th rowspan="2">Additions</th>
               <th rowspan="2">Deductions</th>
           </tr>
           <tr>
               <th>Employee ID</th>
               <th>Employee Name</th>
               <th>Basic Salary</th>
               <th>Total Salary</th>
               
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>${payslip.id}</td>
               <td>${payslip.name}</td>
               <td>₹${payslip.basic}</td>
               <td>₹${payslip.total}</td>
               <td>₹${payslip.allowances}</td>
               <td>₹${payslip.deductions}</td>
           </tr>
       </tbody>
   </table>

   <h3 class="total-earnings">Total Earnings: ₹${payslip.netSalary}</h3>
`;
}

else {
       document.getElementById("payslipData").innerHTML = "<p>No payslip data found.</p>";
   }
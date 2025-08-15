function submitPayslip() {
    let name = document.getElementById("empName").value;
    let role = document.getElementById("empRole").value;
    let id = document.getElementById("empId").value;
    let date = document.getElementById("date").value;
    let basic = parseFloat(document.getElementById("basicSalary").value) || 0;
    let total = parseFloat(document.getElementById("totalSalary").value) || 0;
    let allowances = parseFloat(document.getElementById("allowances").value) || 0;
    let deductions = parseFloat(document.getElementById("deductions").value) || 0;

    let grossSalary = basic + allowances;
    let netSalary = grossSalary - deductions;

    // Store the payslip data in localStorage
    localStorage.setItem("payslipData", JSON.stringify({
        name,
        role,
        id,
        date,
        month: new Date(date).toLocaleString('default', { month: 'long' }),
        basic,
        total,
        allowances,
        deductions,
        netSalary
    }));

    // Redirect to payslip page
    window.location.href = "Payslip.html";


    let payslipHTML = `
Payslip for ${name}
Role: ${role}
Employee ID: ${id}
Month: ${new Date(date).toLocaleString('default', { month: 'long' })}
Basic Salary: ${basic}
Allowances: ${allowances}
Deductions: ${deductions}
Net Salary: ${netSalary}
`;

localStorage.setItem("payslipHTML", payslipHTML);

}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let payslipText = localStorage.getItem("payslipHTML") || "No payslip data found";

    doc.setFontSize(12);
    doc.text(payslipText, 10, 10);
    doc.save("payslip.pdf");
}


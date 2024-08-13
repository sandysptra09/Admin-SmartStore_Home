// utils for xlsx
import * as XLSX from 'xlsx';

// utils for pdf
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'

// export to xlsx
export const exportCustomerExcel = (data, fileName) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
};

// export to pdf
export const exportCustomerPdf = (data, fileName) => {
    console.log("Creating PDF...");
    const doc = new jsPDF();
    doc.autoTable({
        head: [['Username', 'Phone', 'Address', 'Province', 'City', 'Email']],
        body: data.map(customer => [
            customer.username,
            customer.phone,
            customer.address1,
            customer.province,
            customer.city,
            customer.email,
        ]),
    });
    doc.save(`${fileName}.pdf`);
    console.log("PDF created and saved successfully");
}

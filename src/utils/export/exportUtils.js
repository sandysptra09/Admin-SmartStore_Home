// utils for xlsx
import * as XLSX from 'xlsx';

// utils for pdf
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'

// export to xlsx
export const exportExcel = (data, fileName) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data.map(product => ({
        ...product,
        price: formatRupiah(product.price), // Format harga disini
    })));
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
};

// export to pdf
function formatRupiah(angka) {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });

    return formatter.format(angka);
}

export const exportPdf = (data, fileName) => {
    console.log("Creating PDF...");
    const doc = new jsPDF();
    doc.autoTable({
        head: [['Product Name', 'Price', 'Short Description']],
        body: data.map(product => [
            product.product_name,
            formatRupiah(product.price),
            product.short_description
        ]),
    });
    doc.save(`${fileName}.pdf`);
    console.log("PDF created and saved successfully");
}

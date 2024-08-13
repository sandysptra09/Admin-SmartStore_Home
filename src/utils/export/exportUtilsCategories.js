// utils for xlsx
import * as XLSX from 'xlsx';

// utils for pdf
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'

// export to xlsx
export const exportCategoryToExcel = (data, fileName) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
};

// export to pdf
export const exporCategoryTotPdf = (data, fileName) => {
    console.log("Creating PDF...");
    const doc = new jsPDF();
    doc.autoTable({
        head: [['Category Name', 'Slug']],
        body: data.map(category => [
            category.category_name,
            category.slug
        ]),
    });
    doc.save(`${fileName}.pdf`);
    console.log("PDF created and saved successfully");
}

import { useEffect, useCallback } from 'react';
import XLSX from "xlsx";
import { saveAs } from 'file-saver';
import Head from 'next/head'

export default function ImportNganh() {
    useEffect(() => {
        // const spread = _spread;
        // const fileName = "SalesData.xlsx";
        // const sheet = spread.getSheet(0);
        // const excelIO = new Excel.IO();
        // const json = JSON.stringify(spread.toJSON({
        //     includeBindingSource: true,
        //     columnHeadersAsFrozenRows: true,
        // }));
        // excelIO.save(json, (blob) => {
        //     saveAs(blob, fileName);
        // }, function (e) {
        //     alert(e);
        // });
        if (process.browser) {
            // console.log(window);
        }
    }, [])

    const onChange = useCallback((e) => {
        const reader = new FileReader();
        if (reader.readAsBinaryString) {
            reader.onload = (e) => {
                const workbook = XLSX.read(reader.result, { type: 'binary' });
                const firstSheet = workbook.SheetNames[0];
                const excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
                console.log(firstSheet, excelRows);
            };
            reader.readAsBinaryString(e.target.files[0]);
        }
    }, [])

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <input type="file" onChange={onChange} />
            </div>
            <div className="dashboardRow">
                <button className="btn btn-primary dashboardButton"
                    onClick={() => { }}>Import from Excel</button>
            </div>
        </>
    )
}
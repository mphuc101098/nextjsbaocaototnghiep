import { useEffect, useCallback, useState } from 'react';
import XLSX from "xlsx";
import { saveAs } from 'file-saver';
import Head from 'next/head'
import { Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import firebase from '../config/firebase';

const columns = [
    {
        name: 'Mã Trường',
        selector: 'matruong',
        sortable: true,
    },
    {
        name: 'Tên Trường',
        selector: 'tentruong',
        sortable: true,
    },
    {
        name: 'Địa Chỉ',
        selector: 'diachi',
        sortable: true,
    },
];

export default function ImportTruong() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
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
                setData(excelRows)
            };
            reader.readAsBinaryString(e.target.files[0]);
        }
    }, [])
    const upload = useCallback(() => {
        console.log('Upload...')
        setIsLoading(true)
        const db = firebase.firestore();
        const batch = db.batch()
        data.forEach((doc) => {
            const docRef = db.collection("truong").doc();
            let manganh = [];
            try {
                manganh = JSON.parse(doc.manganh).map(item => item.toString())
            }
            catch{}
            batch.set(docRef, {
                ...doc,
                manganh,
            });
        });
        console.log('Commiting...' + data.length)
        batch.commit().then(() => {
            setIsLoading(false)
        })
    }, [data])


    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <input type="file" onChange={onChange} />
            </div>

            <div>
                <DataTable
                    columns={columns}
                    pagination
                    data={data}
                />
            </div>

            <div>
       
                <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={upload}
                >
                    {isLoading ? 'Loading…' : 'Import'}
                </Button>
            </div>
        </>
    )
}
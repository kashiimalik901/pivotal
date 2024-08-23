import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Import DataTables CSS
import 'datatables.net'; // Import DataTables JavaScript

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";


function ProductTableData() {
    useEffect(() => {
        // Initialize DataTable
        const table = $('#myTable').DataTable({
            responsive: true
        });

        // Cleanup on unmount
        return () => {
            table.destroy(true);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="caption" fontWeight="medium" color="text">
                <div className='card p-4 border rounded-lg'>
                    <table id="myTable" className="display">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Product Group ID</th>
                                <th>Product Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Wooden table</td>
                                <td>Product description...</td>
                                <td>1</td>
                                <td>Physical</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Laptop</td>
                                <td>Product description...</td>
                                <td>1</td>
                                <td>Physical</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mobile</td>
                                <td>Product description...</td>
                                <td>1</td>
                                <td>Physical</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </SoftTypography>
        </SoftBox>
    );
}

export default ProductTableData;

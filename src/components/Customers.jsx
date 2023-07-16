// import React from "react";
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Page,
//   Selection,
//   Inject,
//   Edit,
//   Toolbar,
//   Sort,
//   Filter,
// } from "@syncfusion/ej2-react-grids";
// import { Header } from "../components";

// const Customers = () => {
//   const customersData = [
//     {
//       type: "checkbox",
//       InvoiceID: "3066",
//       Customer: "LS",
//       Budget: "$1,000.00",
//       Date: "Jan 6, 2022",
//       status: "✓ Paid",
//     },
//     {
//       type: "checkbox",
//       InvoiceID: "3065",
//       Customer: "DW",
//       Budget: "$1,000.00",
//       Date: "Jan 6, 2022",
//       status: "✓ Paid",
//     },
//     {
//       type: "checkbox",
//       InvoiceID: "3064",
//       Customer: "Olivia Rhye",
//       Budget: "$1,000.00",
//       Date: "Jan 6, 2022",
//       status: "✓ Paid",
//     },
//     {
//       type: "checkbox",
//       InvoiceID: "3063",
//       Customer: "Phoenix Baker",
//       Budget: "$1,000.00",
//       Date: "Jan 5, 2022",
//       status: "✓ Paid",
//     },
//     {
//       type: "checkbox",
//       InvoiceID: "3062",
//       Customer: "Lana Steiner",
//       Budget: "$1,000.00",
//       Date: "Jan 5, 2022",
//       status: "Refunded",
//     },
//     {
//       type: "checkbox",
//       InvoiceID: "0000",
//       Customer: "Demi Wilkinson",
//       Budget: "$1,000.00",
//       Date: "Jan 1, 2022",
//       status: "Delete Edit",
//     },
//     {
//       type: "checkbox",
//       InvoiceID: "0000",
//       Customer: "Candice Wu",
//       Budget: "$1,000.00",
//       Date: "Jan 1, 2022",
//       status: "Delete Edit",
//     },
//   ];

//   //   const customersGrid = [
//   //     // Add the column configuration here
//   //   ];
//   const customersGrid = [
//     { type: "checkbox", width: "50" },

//     {
//       field: "InvoiceID",
//       headerText: "Invoice ⬇️",
//       width: "120",
//       textAlign: "Center",
//       isPrimaryKey: true,
//     },
//     {
//       headerText: "Customer",
//       width: "180",
    
//       textAlign: "Center",
//     },
//     {
//       field: "Budget",
//       headerText: "Budget",
//       width: "100",
//       format: "yMd",
//       textAlign: "Center",
//     },
//     {
//       field: "Date",
//       headerText: "Date",
//       width: "135",
//       format: "yMd",
//       textAlign: "Center",
//     },
//     {
//       field: "status",
//       headerText: "Status",
//       width: "135",
//       format: "yMd",
//       textAlign: "Center",
//     },
//     {
//       field: "HireDate",
//       headerText: "",
//       width: "135",
//       format: "yMd",
//       textAlign: "Center",
//     },
//   ];

//   const selectionsettings = { persistSelection: true };
//   const toolbarOptions = ["Delete"];
//   const editing = { allowDeleting: true, allowEditing: true };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Customers" />
//       <GridComponent
//         dataSource={customersData}
//         enableHover={false}
//         allowPaging
//         pageSettings={{ pageCount: 5 }}
//         selectionSettings={selectionsettings}
//         toolbar={toolbarOptions}
//         editSettings={editing}
//         allowSorting
//       >
//         <ColumnsDirective>
//           {customersGrid.map((item, index) => (
//             <ColumnDirective key={index} {...item} />
//           ))}
//         </ColumnsDirective>
//         <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default Customers;

import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
// import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* <Header category="Page" title="Customers" /> */}
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;




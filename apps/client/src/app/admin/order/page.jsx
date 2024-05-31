// import Image from "next/image";
// // import { orders } from "./OrderData";
// import { CiSearch } from "react-icons/ci";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../../components/ui/table";

// // import 'cloth' from "../../../../public/img/icons";

// const orders = [
//   {
//     id: 1,
//     title: "Product",
//     productImage: "cloth",
//     productName: "T-shirt",
//     orderId: "#7712309",
//     price: "$10",
//     quantity: 2,
//     status: "Success",
//   },
//   {
//     id: 2,
//     title: "OrderId",
//     productImage: "cloth",
//     productName: "Jacket",
//     orderId: "#7712308",
//     price: "$20",
//     quantity: 3,
//     status: "Pending",
//   },
//   {
//     id: 1,
//     title: "Price",
//     productImage: "cloth",
//     productName: "Smart Watch",
//     orderId: "#7712307",
//     price: "$30",
//     quantity: 2,
//     status: "Success",
//   },
//   {
//     id: 1,
//     title: "Quantity",
//     productImage: "cloth",
//     productName: "T-shirt",
//     orderId: "#7712306",
//     price: "$10",
//     quantity: 1,
//     status: "PAID",
//   },
//   {
//     id: 1,
//     title: "Status",
//     productImage: "cloth",
//     productName: "Shirt",
//     orderId: "#7712305",
//     price: "$15",
//     quantity: 4,
//     status: "Success",
//   },
//   {
//     id: 1,
//     productImage: "cloth",
//     productName: "Jacket",
//     orderId: "#7712304",
//     price: "$30",
//     quantity: 3,
//     status: "Pending",
//   },
//   {
//     id: 1,
//     productImage: "cloth",
//     productName: "Shirt",
//     orderId: "#7712303",
//     price: "$30",
//     quantity: 3,
//     status: "Success",
//   },
// ];
// export default function OrderList() {
//   return (
//     <div className="flex flex-col px-20">
//       <div className="px-24">
//         <p className="font-bold text-4xl pt-10 text-gray-600">Order List</p>
//       </div>
//       <div className="py-10 px-24 relative justify-center bg-gray-200">
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="border py-2.5 pr-60 px-4 rounded-xl onfocus:outline-none onfocus:border-none"
//         />
//         <CiSearch
//           size={24}
//           className="absolute left-[41%] top-[41%] text-gray"
//         />
//       </div>
//       <Table>
//         <TableCaption>A list of your recent invoices.</TableCaption>
//         <TableHeader>
//           <TableRow className="font-bold">
//             <TableHead className=" font-bold text-xl text-gray-800">
//               {" "}
//               Product
//             </TableHead>
//             <TableHead className="font-bold text-xl text-gray-800">
//               OrderId
//             </TableHead>
//             <TableHead className="font-bold text-xl text-gray-800">
//               Price
//             </TableHead>
//             <TableHead className="font-bold text-xl text-gray-800">
//               Quantity
//             </TableHead>
//             <TableHead className="font-bold text-xl text-gray-800">
//               Status
//             </TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {orders.map(
//             ({
//               id,
//               productImage,
//               productName,
//               price,
//               quantity,
//               orderId,
//               status,
//             }) => (
//               <TableRow
//                 key={id}
//                 className="border-b border-gray-400 font-semibold"
//               >
//                 {/* <TableCell><Image  src={productImage} className="w-14"/></TableCell> */}
//                 <TableCell className="flex gap-4 items-center">
//                   <img src={productImage} /> {productName}
//                 </TableCell>
//                 <TableCell className="text-start">{orderId}</TableCell>
//                 <TableCell>{price}</TableCell>
//                 <TableCell>{quantity}</TableCell>
//                 <TableCell>{status}</TableCell>
//               </TableRow>
//             )
//           )}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell colSpan={2}>Total</TableCell>
//             <TableCell className="text-right">$2,500.00</TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </div>
//   );
// }
"use client";
import AddProduct from "@app/client/components/forms/addProduct";
import CurrencyFormat from "@app/client/components/global/currencyFormater";
import { getManyOrders } from "@app/client/data/order.service";
import { getManyProducts } from "@app/client/data/products";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCoffee, FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import SelectPage from "@app/client/components/admin/SelectPage";
import PaginationButton from "@app/client/components/admin/PaginationButton";

export default function Page() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(10);

  const handleDownload = () => {
    // flatten object like this {id: 1, title:'', category: ''};
    const rows = filteredOrders.map((order) => ({
      id: order.id,
      customerName: order.user.name,
      email: order.user.email,
      price: order.totalPrice,
      status: order.paymentStatus,
      date: order.createdAt.split("T")[0],
    }));

    // create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

    // customize header names
    XLSX.utils.sheet_add_aoa(worksheet, [
      [
        "Order ID",
        "Customer Name",
        "Customer Email",
        "Total Price",
        "Payment Status",
        "Order Date",
      ],
    ]);

    XLSX.writeFile(workbook, "ReportFor2023.xlsx", { compression: true });
  }; // default products per page

  useEffect(() => {
    async function fetchProducts(page = 1, limit = 10) {
      const { orders, totalPages } = await getManyOrders(page, limit);
      setOrders(orders);
      setFilteredOrders(orders);
      setTotalPages(totalPages);
    }

    fetchProducts(currentPage, ordersPerPage);
  }, [currentPage, ordersPerPage]);

  useEffect(() => {
    setFilteredOrders(
      orders.filter((order) =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, orders]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleProductsPerPageChange = (event) => {
    setProductsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing products per page
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-color-heading font-bold my-4">Orders</h1>
        <div className="text-sm text-color-body flex items-center gap-3">
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/dashboard"}
          >
            Dashboard
          </Link>
          <span>{">"}</span>
          <span className="text-color-lightest">Orders</span>
        </div>
      </div>
      <div className="bg-white p-8 w-full">
        <p className="mb-4 flex text-sm items-center gap-3 text-color-body">
          <FaCoffee className="text-color-primary" />
          Tip search by Product ID: Each product is provided with a unique ID,
          which you can rely on to find the exact product you need.
        </p>
        <div className="flex w-full justify-between mb-8">
          <div className="flex items-center gap-2">
            <SelectPage
              value={ordersPerPage}
              handleProductsPerPageChange={handleProductsPerPageChange}
            />
            <div className="relative">
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search here..."
                className="border border-color-light py-2.5 px-4 rounded-xl focus:outline-none"
              />
              <CiSearch
                size={24}
                className="absolute top-1/2 -translate-y-1/2 right-4"
              />
            </div>
          </div>
          <button
            onClick={handleDownload}
            className=" flex items-center gap-2 px-10 py-3.5 border rounded border-color-primary text-color-primary transition-all ease-in-out duration-200 hover:bg-color-primary hover:text-color-border-light"
          >
            <FaDownload /> Export Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-screen border-collapse">
            <thead>
              <tr className="bg-[#f6f8fbcc] p-3">
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2">Payment Status</th>
                <th className="px-4 py-2">Ordered At</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b p-3 text-color-dark odd:bg-[#f6f8fbcc] hover:bg-[#EDF1F5] transition-all ease-out duration-300"
                >
                  <Link href={`/admin/order/${order.id}`}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {order.user.firstName}
                    </td>
                  </Link>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {order.user.email}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{order.id}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <CurrencyFormat amount={order.totalPrice} />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span
                      className={`ml-2 text-sm ${
                        order.paymentStatus === "PAID"
                          ? "text-color-success border border-color-success"
                          : "text-red-600 bg-red-100"
                      }  rounded font-medium py-0.5 px-2`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {order.createdAt.split("T")[0]}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">Nothing</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PaginationButton
          onClick={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

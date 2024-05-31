"use client";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { BsThreeDots } from "react-icons/bs";
import { GrDownload } from "react-icons/gr";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";
import { IoIosArrowRoundUp } from "react-icons/io";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import AddProduct from "@app/client/components/forms/addProduct";
import SignUp from "@app/client/components/forms/SignUp";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "PayPal",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Bank Transfer",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "PayPal",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Bank Transfer",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    paymentMethod: "Credit Card",
  },
];

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Customer = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const [options, setOptions] = useState({
    series: [
      {
        name: "series1",
        data: [80, 90, 85, 100, 90, 75, 95, 89],
      },
    ],
    chart: {
      height: 350,
      width: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Clean up the chart on component unmount (optional)
    return () => chart.destroy();
  }, [options]);

  return (
    <>
      <div className="flex mx-10 mt-16">
        <div className="flex justify-start w-3/4 h-3/4 shadow">
          <div id="chart" className="w-3/4 h-3/4">
            wws
          </div>
        </div>

        <div className="flex flex-col justify-end shadow-xl  w-2/4 h-1/4">
          <div className=" flex  gap-10 mx-5">
            <div className="my-10 flex justify-center mr-16 text-xl">
              Customer Rating
            </div>
            <div className="my-10 ">
              <BsThreeDots />
            </div>
          </div>

          <div className="text-2xl mb-5 mx-20 flex justify-center ">3.0</div>

          <div className="mb-8 mx-20">
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                // emptyIcon={
                //   <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                // }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </div>

          <div className="flex justify-center gap-3 mx-10 mb-5">
            <small className="text-2xl text-red-400">
              <IoIosArrowRoundUp style={{ fill: "blue" }} />
            </small>
            <small style={{ fill: "green" }} className="text-2xl">
              +35
            </small>
            <p className="text-xl text-red-400">Point from last month</p>
          </div>

          <div className="border-cyan-500 border-solid mx-20 flex gap-5 mb-10 text-xl text-red-400">
            <small>
              <GrDownload style={{ fill: "red" }} />
            </small>{" "}
            Download Report
          </div>
        </div>
      </div>

      <div className="flex justify-center text-2xl my-10">Customer Table</div>
      <div className="mx-10 mt-5">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="h-[100px] text-2xl">Invoice</TableHead>
              <TableHead className="h-[100px] text-2xl">Status</TableHead>
              <TableHead className="h-[100px] text-2xl">Method</TableHead>
              <TableHead className="h-[100px] text-2xl">Method</TableHead>
              <TableHead className="text-right h-[100px text-2xl">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium  h-[80px] text-lg">
                  {invoice.invoice}
                </TableCell>
                <TableCell className="h-[80px] text-lg">
                  {invoice.paymentStatus}
                </TableCell>
                <TableCell className="h-[80px] text-lg">
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell className="h-[80px] text-lg">
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell className="text-right  h-[80px] text-lg">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};
export default Customer;

"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { AiOutlineBarChart } from "react-icons/ai";
import { Progress } from "../../../components/ui/progress";
// import { Progress } from "@material-tailwind/react";
import { AiFillSignal } from "react-icons/ai";
import { PiCarProfileLight } from "react-icons/pi";
import { VscListUnordered } from "react-icons/vsc";
import { CiLocationArrow1 } from "react-icons/ci";

const page = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "order",
        data: [40, 30, 35, 40, 60, 65, 60, 81],
      },
    ],
  });
  const [chart, setChart] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["sales", "B", "C", "D", "E"],
  });
  return (
    <div>
      <div className="">
        <div className="flex justify-center gap-7 mb-6">
          <div className="shadow-xl p-4 bg-white">
            <h1 className="mb-3">Sales Chart</h1>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="450"
            />
          </div>
          <div className="shadow-xl bg-white p-4 ">
            <h1 className="my-3">Sales Chart</h1>
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="450"
            />
          </div>
        </div>
        <div className="justify-center flex gap-4">
          <div className="shadow-xl  bg-white p-4">
            <p>
              <AiOutlineBarChart />
            </p>
            <h2>Orders</h2>
            <h2>310</h2>
            <div>
              <Chart
                options={chart.options}
                series={chart.series}
                type="donut"
                width="300"
              />
            </div>
            <h3>Over last month 1.4% </h3>
          </div>

          <div className="shadow-xl  bg-white p-4">
            <p>
              <AiOutlineBarChart />
            </p>
            <h2>Sales</h2>
            <h2>$3.759,00</h2>
            <div>
              <Chart
                options={chart.options}
                series={chart.series}
                type="donut"
                width="300"
              />
            </div>
            <h3>Over last month 2.4% </h3>
          </div>

          <div className="shadow-xl  bg-white p-4">
            <p>
              <AiOutlineBarChart />
            </p>
            <h2>Orders</h2>
            <h2>310</h2>
            <div>
              <Chart
                options={chart.options}
                series={chart.series}
                type="donut"
                width="300"
              />
            </div>
            <h3>Over last month 1.4% </h3>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center m-10">
          <h1 style={{ transform: "scale(1.5)" }}>Activity Overview</h1>
        </div>
        <div className="flex justify-center gap-3">
          <div className="shadow-xl h-40 w-56">
            <div className="flex justify-center">
              <PiCarProfileLight
                className="my-5 w-40 text-blue-500"
                style={{ transform: "scale(4.5)" }}
              />
            </div>
            <div className="flex justify-center my-4">Delivered</div>
            <div className="flex justify-center"> 15 New Packages</div>
            <div className="flex w-full  gap-4">
              <Progress value={33} bg="amber-500" />
            </div>
          </div>

          <div className="shadow-xl w-56  bg-white p-4">
            <div className="flex justify-center">
              <VscListUnordered
                className="my-5 w-40 text-red-500"
                style={{ transform: "scale(4.5)" }}
              />
            </div>
            <div className="flex justify-center my-4">Ordered</div>
            <div className="flex justify-center">72 New Items</div>
            <div className="flex w-full flex-col gap-4">
              <Progress value={50} color="pink" />
            </div>
          </div>

          <div className="shadow-xl  w-56">
            <div className="flex justify-center">
              {" "}
              <AiFillSignal
                className="my-5 w-40 text-blue-500"
                style={{ transform: "scale(4.5)" }}
              />
            </div>
            <div className="flex justify-center my-4">Reported</div>
            <div className="flex justify-center">50 Support New Cases</div>
            <div className="flex w-full flex-col gap-4">
              <Progress value={50} color="red" />
            </div>
          </div>

          <div className="shadow-xl w-56 ">
            <div className="flex justify-center">
              <CiLocationArrow1
                className="my-5 w-40 text-green-500"
                style={{ transform: "scale(4.5)" }}
              />
            </div>
            <div className="flex justify-center my-4">Arrived</div>
            <div className="flex justify-center">34 Upgraded Boxed</div>
            <div className="flex w-full flex-col gap-4">
              <Progress value={50} color="purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import React, { PureComponent } from "react";
import { SlCalender } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jan",
    uv: 4000,
  },
  {
    name: "feb",
    uv: 3000,
  },
  {
    name: "mar",
    uv: 2000,
  },
  {
    name: "apr",
    uv: 2780,
  },
  {
    name: "may",
    uv: 1890,
  },
  {
    name: "jun",
    uv: 2390,
  },
  {
    name: "jul",
    uv: 3490,
  },
  {
    name: "aug",
    uv: 2780,
  },
  {
    name: "sep",
    uv: 1890,
  },
  {
    name: "oct",
    uv: 2390,
  },
  {
    name: "nov",
    uv: 3490,
  },
  {
    name: "dec",
    uv: 3490,
  },
];

export default function RevenuChart() {
  return (
    <>
      <div className="shadow-lg w-3/5 p-4">
        <div className="flex justify-between">
          <span className="text-[#0F1A31] text-base font-medium">Revenu</span>
          <button className="flex items-center border-solid border rounded-xl border-[#BBBBBB] h-10 w-32 justify-between">
            <span className="flex pl-2">
              <SlCalender className="mr-2 relative top-1" /> <span>2022</span>
            </span>{" "}
            <span className="pr-2">
              <MdKeyboardArrowDown className="text-[#979797] " />
            </span>
          </button>
        </div>
        <ResponsiveContainer width="100%" aspect={3} height={"100%"}>
          <BarChart
            width={50}
            height={20}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            stroke="#fff"
            className="font-[poppins] text-xs"
          >
            <CartesianGrid stroke={"#fff"} />
            <XAxis dataKey="name" fill="#fff" axisLine={{ stroke: "fff" }} />
            <YAxis fill="#fff" axisLine={false} />
            <Bar
              dataKey="pv"
              fill="#B695F8"
              maxBarSize={15}
              radius={[12, 12, 0, 0]}
              stroke={"#fff"}
            />
            <Bar
              dataKey="uv"
              fill="#B695F8"
              maxBarSize={15}
              radius={[12, 12, 0, 0]}
              stroke={"#fff"}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

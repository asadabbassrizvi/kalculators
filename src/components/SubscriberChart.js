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
    name: "Jan",
    uv: 4000,
    pv: 0,
    amt: 600,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 100,
    amt: 700,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 300,
    amt: 800,
  },
  {
    name: "April",
    uv: 2780,
    pv: 500,
    amt: 1200,
  },
  {
    name: "May",
    uv: 1890,
    pv: 700,
    amt: 1300,
  },
];

export default function SubscriberChart() {
  return (
    <>
      <div className="shadow-lg w-2/5 p-4">
        <div className="flex justify-between ">
          <span className="text-[#0F1A31] text-base font-medium">
            Subscribers
          </span>
          <button className="flex items-center border-solid border rounded-xl border-[#BBBBBB] h-10 w-38 justify-between">
            <span className="flex pl-2">
              <SlCalender className="mr-2 relative top-1" />{" "}
              <span>last 6 months</span>
            </span>{" "}
            <span className="pr-2">
              <MdKeyboardArrowDown className="text-[#979797] " />
            </span>
          </button>
        </div>
        <ResponsiveContainer width="100%" aspect={2} height={"100%"}>
          <BarChart
            width={50}
            height={20}
            data={data}
            layout={"vertical"}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            //   barCategoryGap={100}
            stroke="#fff"
            className="font-[poppins] text-xs"
          >
            <Legend />
            <CartesianGrid stroke={"#fff"} />
            <XAxis fill="#fff" axisLine={{ stroke: "fff" }} />
            <YAxis
              dataKey="name"
              type="category"
              fill="#fff"
              axisLine={false}
            />

            {/* <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
            <Bar
              dataKey="pv"
              fill="#000"
              maxBarSize={15}
              radius={[0, 12, 12, 0]}
              stroke={"#fff"}
            />
            <Bar
              dataKey="uv"
              fill="#B695F8"
              maxBarSize={15}
              radius={[0, 12, 12, 0]}
              stroke={"#fff"}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

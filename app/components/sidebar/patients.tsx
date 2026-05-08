import React from "react";
import { patients } from "@/app/components/constants/patients";

const Patients = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {patients.map((p) => (
          <div
            key={p.id}
            className="text-black p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
          >
            <h1 className='rounded-full border-2 w-12 h-fit p-2 flex items-center justify-center'>{p.init}</h1>
            <h2 className="font-bold">
              {p.name}{" "}
              <span className=" w-full flex-end font-medium">{p.time}</span>
            </h2>
            <p className="text-xs text-gray-400">{p.type}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Patients;

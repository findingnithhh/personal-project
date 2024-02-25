import React, { ReactNode } from "react";
import { Card } from "./Card";
import Image from "next/image";
const CardList = ({ user, setUser }) => {
  return (
    <>
      {user.map((items) => (
        <div className="flex justify-center items-center">
          <div className="card mt-5 bg-base-100 shadow-xl w-[500px] border-2 border-blue-300">
            <div className="card-body">
              <div className="flex items-center">
                <Image
                  src={items.image}
                  height={80}
                  width={80}
                  className="rounded-full w-[80px] h-[80px]"
                  alt="Avatar"
                />
                <div className="flex justify-center flex-col ml-2">
                  <h1 className="card-title">{items.name}</h1>
                  <h2 className="mb-2">{items.email}</h2>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-info w-[100px]">Preview</button>
                <button className="btn btn-error w-[100px]">Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { CardList };

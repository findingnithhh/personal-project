import React, { ReactNode } from "react";
import { Card } from "./Card";
import Image from "next/image";
import Swal from "sweetalert2";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface CardListProps {
  user: User[];
}
const CardList: React.FC<CardListProps> = ({ user, setUser }) => {
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setUser(user.filter((items) => items.id !== id));
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-y-2 mx-auto w-[56%] ">
        {user.map((items) => (
          <div className="flex justify-center items">
            <div className="card mt-5 bg-base-100 shadow-xl w-[500px] border-2 border-blue-300">
              <div className="card-body">
                <div className="flex items-center">
                  <Image
                    src={items.image}
                    height={80}
                    width={80}
                    className="rounded-full object-cover w-[80px] h-[80px] mr-2"
                    alt="Avatar"
                  />
                  <div className="flex justify-center flex-col ml-2">
                    <h1 className="card-title">{items.name}</h1>
                    <h2 className="mb-2">{items.email}</h2>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-info w-[100px]">Preview</button>
                  <button
                    className="btn btn-error w-[100px]"
                    onClick={() => handleDelete(items.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { CardList };

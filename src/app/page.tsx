"use client";
import { useEffect, useState } from "react";
import { Modal } from "@/components";
import { AddForm } from "@/components";
import { CardList } from "@/components";
import { Search } from "@/components";
interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

export default function Home() {
  const [user, setUser] = useState<User[]>(
    JSON.parse(localStorage.getItem("user") || "[]")
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <>
      <div>
        <Modal>
          <AddForm user={user} setUser={setUser} />
        </Modal>
        <Search search={search} setSearch={setSearch} />
        <CardList user={user} setUser={setUser} search={search} />
      </div>
    </>
  );
}

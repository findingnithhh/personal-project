"use client";
import {
  Button,
  FloatingButton,
  Typography,
  InputFile,
  InputText,
} from "@/components";
import { Modal } from "@/components";
import { AddForm } from "@/components";
import { useState } from "react";
import { CardList } from "@/components";

export default function Home() {
  const [user, setUser] = useState<User[]>([]);
  return (
    <>
      <Modal>
        <AddForm user={user} setUser={setUser} />
      </Modal>
      <CardList user={user} setUser={setUser} />
    </>
  );
}

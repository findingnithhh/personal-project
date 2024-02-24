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
export default function Home() {
  const [user, setUser] = useState<User[]>([]);
  return (
    <>
      <Modal>
        <AddForm user={user} setUser={setUser} />
      </Modal>
    </>
  );
}

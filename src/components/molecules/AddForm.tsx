import React, { useState, useRef, FormEventHandler, ChangeEvent } from "react";
import { InputFile, InputText, Button } from "../atoms";
import { v4 as uuidv4 } from "uuid";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface AddFormProps {
  user: User[];
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
}

const AddForm: React.FC<AddFormProps> = ({ user, setUser }) => {
  // Correct type for props
  const [enterValue, setEnterValue] = useState<User>({
    // Use 'User' instead of 'user'
    id: "",
    name: "",
    email: "",
    image: "",
  });
  const [nameError, setNameError] = useState<string>("");
  const inputFileRef = useRef<HTMLInputElement>(null); // Correct type for useRef

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!enterValue.name.trim()) {
      setNameError("Please enter a username.");
      return;
    } else {
      setNameError(""); // Clear the error when the input is valid
    }
    const newUser = { ...enterValue, id: uuidv4() };
    console.log(newUser);
    setUser((prevUsers) => [...prevUsers, newUser]);
    setEnterValue({
      id: "",
      name: "",
      email: "",
      image: "",
    });
    e.currentTarget.reset();
    if (inputFileRef.current) {
      inputFileRef.current.value = ""; // Reset the input file value to clear it
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Correct type for 'ChangeEvent'
    const { name, value } = e.target;
    setEnterValue({ ...enterValue, [name]: value });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Correct type for 'ChangeEvent'
    const imageFile = event.target.files && event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setEnterValue({ ...enterValue, image: imageUrl });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <InputText
            size="md"
            placeholder="Username"
            type="text"
            name="name"
            value={enterValue.name}
            onChange={onChangeInput}
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          <InputText
            size="md"
            placeholder="example@gmail.com"
            type="email"
            name="email"
            value={enterValue.email}
            onChange={onChangeInput}
          />

          <InputFile
            size="md"
            type="file"
            ref={inputFileRef}
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <div className="flex flex-col">
            <Button type="submit" className="mt-2" size="md" color="primary">
              Create
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export { AddForm };

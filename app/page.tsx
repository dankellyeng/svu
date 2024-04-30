"use client";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./page.module.scss";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function Home() {
  const [showTextFields, setShowTextFields] = useState(false);
  const [lineOne, setLineOne] = useState("LAW &");
  const [lineTwo, setLineTwo] = useState("ORDER");
  const [lineThree, setLineThree] = useState("SPECIAL VICTIMS UNIT");

  const playSound = () => {
    const audio = new Audio("/sounds/daadaa.mp3");
    audio.play();
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value.toUpperCase());
    };

  const toggleEditText = (): void => {
    setShowTextFields(!showTextFields);
  };

  const handleSave = (): void => {
    setShowTextFields(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.textContainer} onClick={playSound}>
        <div className={styles.textAndShadowContainer}>
          <div className={styles.law}>{lineOne}</div>
          <div className={styles.lawShadow}>{lineOne}</div>
        </div>

        <div className={styles.textAndShadowContainer}>
          <div className={styles.order}>{lineTwo}</div>
          <div className={styles.orderShadow}>{lineTwo}</div>
        </div>

        <div className={styles.textAndShadowContainer}>
          <div className={styles.svu}>{lineThree}</div>
          <div className={styles.svuShadow}>{lineThree}</div>
        </div>
        <IconButton
          sx={{
            color: showTextFields ? "transparent" : "white",
            position: "absolute",
            right: "5px",
            bottom: "5px",
          }}
          aria-label="edit"
          onClick={toggleEditText}
        >
          <EditIcon />
        </IconButton>
      </div>
      {showTextFields && (
        <div className={styles.textFieldContainer}>
          <TextField
            onChange={handleInputChange(setLineOne)}
            sx={{
              input: { color: "white", padding: "5px" },
              label: { color: "gray" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
            id="law"
            variant="outlined"
            placeholder={lineOne}
          />
          <TextField
            onChange={handleInputChange(setLineTwo)}
            sx={{
              input: { color: "white", padding: "5px" },
              label: { color: "gray" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
            id="order"
            variant="outlined"
            placeholder={lineTwo}
          />
          <TextField
            onChange={handleInputChange(setLineThree)}
            sx={{
              input: { color: "white", padding: "5px" },
              label: { color: "gray" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
            id="svu"
            variant="outlined"
            placeholder={lineThree}
          />
          <Button
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
            variant="outlined"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      )}
    </main>
  );
}

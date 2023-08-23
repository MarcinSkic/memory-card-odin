"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import DifficultyButton from "@/components/DifficultyButton";
import Link from "next/link";

export default function Home() {
    const [pickedDifficulty, setPickedDifficulty] = useState("easy");

    return (
        <main className={styles.main}>
            <h2>Pick difficulty</h2>
            <DifficultyButton
                title="Easy"
                selected={pickedDifficulty === "easy" ? styles.selected : ""}
                onClick={() => {
                    setPickedDifficulty("easy");
                }}
            />
            <DifficultyButton
                title="Medium"
                selected={pickedDifficulty === "medium" ? styles.selected : ""}
                onClick={() => {
                    setPickedDifficulty("medium");
                }}
            />
            <DifficultyButton
                title="Hard"
                selected={pickedDifficulty === "hard" ? styles.selected : ""}
                onClick={() => {
                    setPickedDifficulty("hard");
                }}
            />
            <Link href={`/game/${pickedDifficulty}`}>Start game!</Link>
        </main>
    );
}

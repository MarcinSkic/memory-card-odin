import React from "react";

export default function DifficultyButton({
    title,
    onClick,
    selected,
}: {
    title: string;
    onClick: () => void;
    selected: string;
}) {
    return (
        <button className={selected} onClick={onClick}>
            {title}
        </button>
    );
}

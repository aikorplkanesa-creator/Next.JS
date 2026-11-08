"use client";
import { useState } from "react";

export default function TombolTema() {
    const [gelap, setgelap] = useState(false);

    function gantiTema() {

        const statusGelap = document.documentElement.classList.toggle("dark");
        setgelap(statusGelap);
    }

    return (
        <button 
            type="button" 
            onClick={gantiTema} 
            className="rounded-lg border border-white px-3 py-1 text-sm font-bold text-white hover:border-aksen hover:bg-aksen"
        >

            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>
    );
}

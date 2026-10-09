import { useState } from 'react';
import './Emoji.css';
type EMOJIS_KEYS = "happy" | "sick" | "dead";
const EMOJIS_MAP = new Map<EMOJIS_KEYS, string>([
    ["happy", "😊​"],
    ["sick", "🤢​"],
    ["dead", "😵​"],
]);

export default function Emoji() {
    const [status, setStatus] = useState<EMOJIS_KEYS>
        ("sick")
    function HappyClick() {
        console.log("Status: ", status);
        console.log("Happy!!!");
        setStatus("happy");
        console.log("Status: ", status);
    }
    return (
        <>
            <div className="emoji">
                {EMOJIS_MAP.get(status) || "🤔"}
            </div>
            <div className="acoes">
                <button onClick={HappyClick}>Happy</button> 
            </div>
        </>

    );
}
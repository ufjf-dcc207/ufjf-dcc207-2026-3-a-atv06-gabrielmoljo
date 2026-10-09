import { useState } from 'react';
import './Emoji.css';
import Atributo from './Atributo';
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
    function SickClick() {
        console.log("Status: ", status);
        console.log("Sick!!!");
        setStatus("sick");
        console.log("Status: ", status);
    }
    function DeadClick() {
        console.log("Status: ", status);
        console.log("Dead!!!");
        setStatus("dead");
        console.log("Status: ", status);
    }

    function CicloClick(){
        switch (status){
            case "happy":
                setStatus("sick");
                break;
            case "sick":
                setStatus("dead");
                break;
            case "dead":
                setStatus("happy");
                break;
            default:
                setStatus("happy");
        }
    }
    return (
        <>
            <div className="emoji">
                {EMOJIS_MAP.get(status) || "🤔"}
            </div>
            <Atributo/>
            <div className="acoes">
                <button onClick={HappyClick}>Happy</button>
                <button onClick={SickClick}>Sick</button>
                <button onClick={DeadClick}>Dead</button> 
                <button onClick={CicloClick}>Ciclo</button>
            </div>
        </>

    );
}
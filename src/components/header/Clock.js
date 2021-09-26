import React, { useState ,useEffect} from "react";
import './header.css'

export default function Clock(props) {
    const {date} = props;
    const [stateDate, setStateDate] = useState(date);
    const timerID = setInterval(()=>setStateDate(new Date));


    useEffect(() => {
        return () => {
            clearInterval(timerID)
        }
    })

    return(
        <div className='clock'>
            <h2>Сейчас {stateDate.toLocaleString()}</h2>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import formatTime from './format'
import './Clock.css'

function Clock() {
    const [fullTime, setFullTime] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    useEffect(() => {
        const timeID = setInterval(() => {
            const now = new Date()
            const format = formatTime(now)
            setHours(format.hours)
            setMinutes(format.minutes)
            setSeconds(format.seconds)
            setFullTime(format.fullTime)
        }, 1000);

        return () => {
            clearInterval(timeID)
        }
    }, [])
    return (
        <div className="clock">
            <p>{fullTime ?? 'Can\'t update time'}</p>
            <div className="time">
                <span>{hours ?? '00'}</span>
                <span>:</span>
                <span>{minutes ?? '00'}</span>Y
                <span>:</span>
                <span>{seconds ?? '00'}</span>
            </div>
            <h3>Trần Văn Sĩ Create 16/7/2022</h3>
        </div>
    )
}
export default Clock
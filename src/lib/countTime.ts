import { useState, useEffect } from 'react';

export default function CountdownTimer({ minutes } : any) {
    const [timeRemaining, setTimeRemaining] = useState(minutes * 60); // Convert minutes to seconds

    useEffect(() => {
        // Exit early if no time is remaining
        if (timeRemaining <= 0) return;

        // Set up the timer
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);

        // Clear the interval on component unmount or when timer ends
        return () => clearInterval(timer);
    }, [timeRemaining]);

    // Calculate minutes and seconds
    const minutesLeft = Math.floor(timeRemaining / 60);
    const secondsLeft = timeRemaining % 60;

    // Format the time as MM:SS
    const formattedTime = `${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;

    return formattedTime;
}

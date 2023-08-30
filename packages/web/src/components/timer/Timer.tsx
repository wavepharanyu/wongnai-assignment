import { useEffect, useState } from 'react'
import './Timer.scss'

interface MyComponentProps { 
	endDate: string | undefined,
    setIsInPeriod: React.Dispatch<React.SetStateAction<boolean>>;
}


const Timer = ({endDate, setIsInPeriod} : MyComponentProps) => {
    const [hours, setHours] = useState(-1)
    const [minutes, setMinutes] = useState(-1)
    const [seconds, setSeconds] = useState(-1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if(endDate){
            const timer = setInterval(
                () =>
                    getTime(
                        endDate
                  ),
                1000
            );
            return () => {clearInterval(timer);}
        }
    },[])

    const getTime = (endDate: string) => {
        const date = new Date().getTime()
        const endTime = new Date(endDate).getTime()
        const diff = endTime - date
        const hourCompute = Math.floor(diff / 3.6e6);
        const minuteCompute = Math.floor((diff % 3.6e6) / 6e4);
        const secondCompute = Math.floor((diff % 6e4) / 1000);
        if(hourCompute > -1 && minuteCompute > -1 && secondCompute > -1){
            setHours(hourCompute)
            setMinutes(minuteCompute)
            setSeconds(secondCompute)
            setIsInPeriod(true)
        }
        else{
            setIsInPeriod(false)
        }
    }

    const leading0 = (num: number) => {
        return num < 10 ? "0" + num : num;
    }
    if(hours > -1 && minutes > -1 && seconds > -1){
        return (
            <div className='timer-container'>
                <p className='text'>เหลือเวลา {leading0(hours)}:{leading0(minutes)}:{leading0(seconds)} ชั่วโมง</p>
            </div>
        )
    }
    else{
        return null
    }
}

export default Timer
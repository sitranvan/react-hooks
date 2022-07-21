const formatTime = (time) => {
    const date = `0${time.getDate()}`.slice(-2)
    const month = `0${time.getMonth() + 1}`.slice(-2)
    const fullTime = `${time.getFullYear()} - ${month} - ${date}`
    const hours = `0${time.getHours()}`.slice(-2)
    const minutes = `0${time.getMinutes()}`.slice(-2)
    const seconds = `0${time.getSeconds()}`.slice(-2)
    return {
        hours,
        minutes,
        seconds,
        fullTime,
    }
}

export default formatTime
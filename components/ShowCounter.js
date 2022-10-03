const DateTimeDisplay = ({value, type}) => {
    return (
        <>
            {value} {type}
        </>        
    )
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div>
            <DateTimeDisplay value={days} type={'DAYS'}/> <DateTimeDisplay value={hours} type={'HOURS'}/> <DateTimeDisplay value={minutes} type={'MINUTES'}/> <DateTimeDisplay value={seconds} type={'SECONDS'}/>
        </div>
    );
};

export default ShowCounter;
import { useEffect, useState } from "react"

const LoadData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return data;

}
export default LoadData;
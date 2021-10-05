import { useEffect, useState } from "react"

const TestemonialData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/fakedata.JSON")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // const [testemonialdatas, coursedatas] = data

    return [data];
}
export default TestemonialData;
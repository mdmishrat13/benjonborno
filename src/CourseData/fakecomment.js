import { useEffect, useState } from "react";

const Fakecomment = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('./testemonial.JSON')
            .then(resp => resp.json())
            .then(datas => setComments(datas))
    }, []);
    return [comments];
}
export default Fakecomment;
import { useEffect, useState } from "react";
import { useBoardDispatch } from "./Context/BoardContext";

export default function Search() {
    const [searchTitle, setSearchTitle] = useState('');
    const dispatch = useBoardDispatch();

    async function getSearchItems(title) {
        const response = await fetch(`http://heojh.iptime.org:8003/board?title=${title}`);
        return response.json();
    }
    
    async function onClickSearch() {
        try {
            await getSearchItems(searchTitle)
            .then(res => {
                res.map((item) => {
                    item.id = window.crypto.randomUUID()
                })
                dispatch({
                    type: 'Search',
                    data: res
                });
            })
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <div>
            <input
                type="text"
                placeholder=""
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)} 
            />
            <button onClick={ onClickSearch }> 찾기 </button>
        </div>
    )
}

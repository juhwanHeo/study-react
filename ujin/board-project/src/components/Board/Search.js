import { useEffect, useState } from "react";

export default function Search({ setItems }) {
    const [searchTitle, setSearchTitle] = useState('')  

    async function getSearchItems(title) {
        const response = await fetch(`http://heojh.iptime.org:8003/board?title=${title}`);
        return response.json();
    }
    
    async function onClickSearch() {
        if (searchTitle) {
            try {
                await getSearchItems(searchTitle)
                .then(res => {
                    res.map((item) => {
                        item.id = window.crypto.randomUUID()
                    })
                    setItems(res)
                })
            } catch (err) {
                console.log(err)
            }
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

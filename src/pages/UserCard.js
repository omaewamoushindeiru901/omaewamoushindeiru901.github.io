import React, {useEffect,useState} from 'react'


function UserCard(probs) {

    useEffect(() =>{
        fetchdata();
        },[]);

    const [items,setItems] = useState([]);

    const fetchdata = async() =>{
        const data = await fetch(probs.url).then(response => response.json());
        setItems(data);
    };



    return(
        <div>
            <section className='reg'>
                {items.map(item => (
                    <article key={item.id} className='card'>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                     <p>{item.phone}</p>
                </article>
                ))}

            </section>
        </div>

)
}

export default UserCard;
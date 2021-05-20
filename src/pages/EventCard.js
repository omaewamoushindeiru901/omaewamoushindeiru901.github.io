import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

function EventCard(probs) {

    useEffect(() =>{
        fetchdata();
        },[]);

    const [items,setItems] = useState([]);

    const fetchdata = async() =>{
        const data = await fetch(probs.url).then(response => response.json());
        setItems(data);
    };

    return(
         <section className='notes'>
            {items.map(item => (
            <article>
                <ul>
                    <li>
                        <a>
                            <h2>{item.name}</h2>
                            <p>{item.content}</p>
                            <i>{item.date}</i>
                        </a>
                    </li>
                </ul>
            </article>
                ))}
        </section>
    )

}

export default EventCard;
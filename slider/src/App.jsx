import './App.css';

import star from "./assets/img_10.png";
import arrow from "./assets/arrow-up-right.svg";
import React from "react";

function App() {

    const items = [
        {
            id: 1,
            title: "Indebt",
            img: "img_1",
        },
        {
            id: 2,
            title: "Fayz Baraka",
            img: "img_2",
        },
        {
            id: 3,
            title: "Jizzax city",
            img: "img_3",
        },
        {
            id: 4,
            title: "Ideal Cleaning",
            img: "img_4",
        },
        {
            id: 5,
            title: "Lazydev",
            img: "img_5",
        },
        {
            id: 6,
            title: "Mamirov Group",
            img: "img_6",
        },
        {
            id: 7,
            title: "JS Ta'minot",
            img: "img_7",
        },
        {
            id: 8,
            title: "InReport",
            img: "img_8",
        },
        {
            id: 9,
            title: "Imba Studio",
            img: "img_9",
        }
        ]

  // infinity autoslide to left 340 px every 3 seconds
    React.useEffect(() => {

        const interval = setInterval(() => {
            const cards = document.querySelector('.cards');
            cards.style.transition = 'transform 0.5s ease-in-out';
            setTimeout(() => {
                cards.appendChild(cards.firstElementChild);
                cards.style.transition = 'transform 0.5s ease-in-out';
                cards.style.transform = 'translateX(0)';
            }, 4000);
        }, 4000);
    }, []);

    // drag cards
    React.useEffect(() => {
        const cards = document.querySelector('.cards');
        let isDown = false;
        let startX;
        let scrollLeft;
        cards.addEventListener('mousedown', (e) => {
            isDown = true;
            cards.classList.add('active');
            startX = e.pageX - cards.offsetLeft;
            scrollLeft = cards.scrollLeft;
        });
        cards.addEventListener('mouseleave', () => {
            isDown = false;
            cards.classList.remove('active');
        });
        cards.addEventListener('mouseup', () => {
            isDown = false;
            cards.classList.remove('active');
        });
        cards.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - cards.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            cards.scrollLeft = scrollLeft - walk;
        });
    }
    , []);






  return (
    <div className="container">
        <h3 className="text-start font-bold md:text-xl text-white">Works</h3>
        <div className="title">
            <span className=" text-white">Dotsoft -</span> <span className="blue_title ">things done</span>
        </div>
        <div className="cards overflow-hidden">
            {items.map((item) => (
                <div key={item.id} className={`card ${item.img} relative`}>
                    <div className="wrap">
                        <span className="border border-white-100 text-white bg-black p-1 px-2 rounded-full mt-2 ml-3 absolute">DEVELOPMENT</span>
                        <span className=" flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                            <img className=" w-1/6 mt-1 inline-block mx-8" src={star} alt="star"/>
                            <p>{item.title}</p>
                            <a className="inline-block up " href="">
                                <img src={arrow} alt="arrow"/>
                            </a>
                        </span>
                    </div>
                </div>
            ))}
        </div>



     </div>
  )

}


export default App

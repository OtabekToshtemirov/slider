import './App.css';
import star from './assets/img_10.png';
import arrow from './assets/arrow-up-right.svg';

function App() {
   const carousel = document.querySelector('.cards');

   let isDraggingStart = false, prevPage, scrollLeft;

   const dragStart = (e) => {
        isDraggingStart = true;
        prevPage = e.pageX;
        scrollLeft = carousel.scrollLeft;
   }
   const dragging = (e) => {
        if(!isDraggingStart) return;
        e.preventDefault();
        const x = e.pageX - prevPage;
        carousel.scrollLeft = scrollLeft - x;
   }
    const dragEnd = () => {
        isDraggingStart = false;
    }




    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('mouseup', dragEnd);



  return (
    <div className="container">
        <h3 className="text-start font-bold md:text-xl text-white">Works</h3>
        <div className="title">
            <span className=" text-white">Dotsoft -</span> <span className="blue_title ">things done</span>
        </div>
            <div className="cards overflow-hidden">
                <div className="card img_1 relative" >
                    <div className="wrap">
                        <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                        <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p>Indebt</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>

                </div>
                <div className="card img_2 relative" >
                    <div className="wrap">
                        <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                        <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p>Fayz Baraka</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>

                </div>
                <div className="card img_3 relative" >
                    <div className="wrap">

                    <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                    <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p>Jizzax city</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>
                </div>
                <div className="card img_4 relative" >
                    <div className="wrap">
                    <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                    <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p>Ideal Cleaning</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>
                </div>
                <div className="card img_5 relative" >
                    <div className="wrap">
                    <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                    <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p>Lazydev</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>
                </div>
                <div className="card img_6 relative" >
                    <div className="wrap">
                    <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                    <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p className="mr-8">Mamirov Group</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>
                </div>
                <div className="card img_7 relative" >
                    <div className="wrap">
                    <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                    <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p>JS Ta'minot</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>
                </div>
                <div className="card img_8 relative" >
                    <div className="wrap">
                    <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                    <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p>InReport</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>
                </div>
                <div className="card img_9 relative" >
                    <div className="wrap">
                    <span className="text-white bg-black p-1 rounded-lg mt-2 ml-3 absolute">DEVELOPMENT</span>
                    <span className="flex  bg-black text-white text-2xl absolute items-center w-full h-1/4 block bottom-0 rounded-b-3xl  ">
                        <img className=" w-1/6 mt-2 inline-block mx-8" src={star} alt="star"/>

                        <p>Imba studio</p>
                        <a className="inline-block up " href="">
                        <img src={arrow} alt="arrow"/>
                        </a>

                    </span>
                    </div>
                </div>

            </div>
    </div>
  )

}


export default App

"use client"
import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import Image from "next/image";
import PopUp from "./PopUp";

const Blogs = () => {
  const { data, error, loading } = useFetch("http://localhost:8000/data");

  type ItemType = {
    id: number;
    title: string;
    body: string;
    author: string;
    src: string;
    date: string;
  };

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<null | ItemType>(null);

  function open(id: number): void {
    const viewElement = data.find((item: ItemType) => item.id === id);
    setSelectedItem(viewElement);
    setIsPopupOpen(true);


  }
  

  return (
    <>
      {error && <h1 className="m-96">{error}</h1>}

      {loading && (
        <h1 className="absolute top-24 left-2/4 transform -translate-x-2/4">Loading...</h1>
      )}

      {isPopupOpen && selectedItem && (
        <PopUp  
          isPopupOpen={isPopupOpen}
          data={data}
          setIsPopupOpen={setIsPopupOpen}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      )}

      <div className="flex w-full justify-between mt-4 flex-wrap">
        {data &&
          data.map((item: ItemType) => {
            return (
              <div
                key={item.id}
                onClick={() => open(item.id)}
                className="card ani  my-3 cursor-pointer rounded-t-2xl rounded-b-md  flex flex-col justify-between items-center"
              >  
              <div className="date flex flex-col justify-start items-center">
                <Image
                  className="w-full i font-bold rounded-t-2xl"
                  width={200}
                  height={250}
                  alt="image"
                  src={item.src}
                  quality={100}
                />
                <div className="flex h-28 w-full items-center">
                  <h1 className="text-slate-200 font-bold ml-2 w-1/2 text-xl"> 
                    {item.title}
                  </h1>
                  <div className="flex flex-col px-2 w-1/4 justify-center items-center">
                    <h6 className="text-white text-sm">{item.author}</h6>
                    <h6 className="text-black date text-sm">{item.date}</h6>
                  </div>
                </div>
                </div>
                <button className='w-full font-bold h-24 text-xl rounded-b-md text-black bg-slate-300 border-black ' onClick={() => open(item.id)}> 
                  Read
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blogs;

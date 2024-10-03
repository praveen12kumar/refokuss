import React,{useState} from 'react';
import Input from '../../Input/Input'
import ListItem from '../../ListItem/ListItem';

const TopNav = () => {
  const [query, setQuery] = useState("");
  function onChangeHandler(e){
    console.log(e.target.value);
    setQuery(e.target.value);
  }
  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>
      <i class='text-zinc-400 text-3xl ri-search-line'></i>
      <Input
        type={"text"}
        value={query}
        placeholder={"Search anything"}
        onChangeHandler={onChangeHandler}
        styleType={"w-[50%] mx-10 border-none bg-transparent"}
      />
      {
        query?.length > 0 && (<i class='text-zinc-400 text-3xl ri-close-fill' onClick={() => setQuery("")} ></i>)
      }

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-800 top-[90%] overflow-auto">
        {/* <ListItem text={"Hello Everyone"}/> */}
        
      </div>
    </div>
  )
}

export default TopNav
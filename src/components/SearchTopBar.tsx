import {Search} from "lucide-react";

let SearchTopBar=()=>{



    return(

        <>
          <div className='flex items-center justify-center  p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg'>

              <Search />
              <input type='text' placeholder='Search by name' />


          </div>
        </>


    )




}

export default SearchTopBar;
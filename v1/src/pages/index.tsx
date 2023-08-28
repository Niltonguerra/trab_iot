
import { useState } from 'react';
import '../assets/css/tailwind/style.css';
import { Link } from 'react-router-dom';



type CounterState = {
  show: "hidden" | "block";
}

function Home() {


const [showMenu,setShowMenu] = useState<CounterState>({show:"hidden"});


const handleClick = () =>{
  if(showMenu.show === "hidden"){
    setShowMenu({show:"block"});
  }else{
    setShowMenu({show:"hidden"});
  }
}




  return (
    <div className='text-gray-600 font-body'>


    <div  className='grid md:grid-cols-3'>
      <div className='md:col-span-1 md:flex md:justify-self-end'>
        <nav className='text-right'>
          <div className='flex items-center justify-between'>
            
            <h1 className='p-4 font-bold uppercase border-b border-none'>
              <Link to="/" className='hover:text-gray-800 border-none'>Food Ninja</Link>
            </h1>
            <div className='px-4 cursor-pointer md:hidden' onClick={handleClick} id='btn_menu'>
              <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>

          </div>
          <ul className={`text-sm mt-6 ${showMenu.show} md:block`} id="menu">
            <li className='py-1 font-bold text-gray-700'>
              <Link to="/" className='flex justify-end px-4 border-none'>
                <span>Home</span>
                <svg className='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

              </Link>
            </li>
            <li className='py-1'>
              <Link to="/" className='flex justify-end px-4 border-none'>
                <span>About</span>
                <svg className='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>

              </Link>
            </li>
            <li className='py-1'>
              <Link to="/" className='flex justify-end px-4 border-none'>
                <span>Contact</span>
                <svg className='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

              </Link>
            </li>
          </ul>
        </nav>
      </div>
    
    {/* end of nav */}


<main className='px-16 py-6 bg-gray-100 md:col-span-2'>
  <div className='flex justify-center md:justify-end'>
    <Link to="/" className='transition duration-500 ease-out btn text-primary md:border-primary md:border-2 hover:primary hover:text-white border-none hover:bg-primary'>Log in</Link>
    <Link to="/" className='ml-2 transition duration-500 ease-out btn text-primary md:border-primary md:border-2 hover:primary hover:text-white border-none hover:bg-primary'>Sign up</Link>
  </div>

  <header >
    <h2 className='text-6xl font-semibold text-gray-700'>Recipes</h2>
    <h3 className='text-2xl font-semibold'>For ninjas</h3>
  </header>

<div>
  <h4 className='pb-2 mt-12 font-bold border-b border-gray-200'>Lastest Recipes</h4>

  <div className='grid gap-10 mt-8 lg:grid-cols-3'>

    {/* cads go here */}
  <Link to="http://localhost:5173/product">
    <div className='card'>
      <img src="../public/img/lettuce.jpg" className='object-cover w-full h-32 sm:h-48'  alt="anime-2" />
      <div className='m-4'>
        <span className='font-bold'>Warframe</span>
        <span className='block text-sm text-gray-500'>Recipe by Mario </span>
      </div>


      <div className='badge'>
      
      <svg className='inline-block w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

        <span>25 mins</span>
      </div>
    </div>
  </Link>

    
  <Link to="http://localhost:5173/product">
    <div className='card'>
      <img src="../public/img/tomato.jpg" className='object-cover w-full h-32 sm:h-48'  alt="anime-1" />
      <div className='m-4'>
        <span className='font-bold'>Tower of Fantasy</span>
        <span className='block text-sm text-gray-500'>Recipe by Mario </span>
      </div>
      <div className='badge'>
      
      <svg className='inline-block w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

        <span>25 mins</span>
      </div>
    </div>
  </Link>

  <Link to="http://localhost:5173/product">
    <div className='card'>
      <img src="../public/img/carrot.jpg" className='object-cover w-full h-32 sm:h-48'  alt="anime-1" />
      <div className='m-4'>
        <span className='font-bold'>Tower of Fantasy </span>
        <span className='block text-sm text-gray-500'>Recipe by Mario </span>
      </div>
      <div className='badge'>
      
      <svg className='inline-block w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

        <span>25 mins</span>
      </div>
    </div>
  </Link>

    
  </div>

  <h4 className='pb-2 mt-12 font-bold border-b border-gray-200'>Most Popular</h4>

<div className='grid gap-10 mt-8 lg:grid-cols-3'>

  {/* cads go here */}
  <Link to="http://localhost:5173/product">
  <div className='card'>
    <img src="../public/img/lettuce.jpg" className='object-cover w-full h-32 sm:h-48'  alt="anime-2" />
    <div className='m-4'>
      <span className='font-bold'>Warframe</span>
      <span className='block text-sm text-gray-500'>Recipe by Mario </span>
    </div>


    <div className='badge'>
    
    <svg className='inline-block w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

      <span>25 mins</span>
    </div>
  </div>
  </Link>


  <Link to="http://localhost:5173/product">
  <div className='card'>
    <img src="../public/img/tomato.jpg" className='object-cover w-full h-32 sm:h-48'  alt="anime-1" />
    <div className='m-4'>
      <span className='font-bold'>Tower of Fantasy</span>
      <span className='block text-sm text-gray-500'>Recipe by Mario </span>
    </div>
    <div className='badge'>
    
    <svg className='inline-block w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

      <span>25 mins</span>
    </div>
  </div>
  </Link>

  <Link to="http://localhost:5173/product">
    <div className='card'>
      <img src="../public/img/carrot.jpg" className='object-cover w-full h-32 sm:h-48'  alt="anime-1" />
      <div className='m-4'>
        <span className='font-bold'>Tower of Fantasy</span>
        <span className='block text-sm text-gray-500'>Recipe by Mario </span>
      </div>
      <div className='badge'>
      
      <svg className='inline-block w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

        <span>25 mins</span>
      </div>
    </div>
  </Link>

</div>  

    <div className='flex justify-center'>
      <div className='mt-5 transition duration-300 ease-out transform btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:scale-125 hover:bg-opacity-50'> load more</div>
    </div>


</div>

</main>

</div>


    </div>
  )





}

export default Home;

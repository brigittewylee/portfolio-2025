import Clock from "@/app/components/clock";

export default function Header() {
    return (
    <div>
        <section className="flex text-m font-[family-name:var(--font-arimo)] font-bold">
          <div className="flex-1 p-4 text-left">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="relative w-11 h-6 bg-gray-50 
			  				peer-focus:outline-none 
                            rounded-full peer 
                            dark:bg-gray-300 
                            peer-checked:after:translate-x-full 
                            rtl:peer-checked:after:-translate-x-full 
                            peer-checked:after:border-white after:content-[''] 
                            after:absolute after:top-[2px] 
                            after:start-[2px] 
                            after:bg-white after:border-gray-300
                            after:rounded-full 
                            after:h-5 
                            after:w-5 
                            after:transition-all 
                            dark:border-gray-600 
                            peer-checked:bg-black
                            dark:peer-checked:bg-black-600"></div>
            </label>
          </div>
          <div className="flex-1 p-4 text-center">
            <Clock />
          </div>
          <div className="flex-1 p-4 text-right">
            NAVIGATE
          </div>
        </section>
        
        <hr className="border-t-2 border-black"/>
    </div>
    )
};
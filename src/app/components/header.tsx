import Clock from "@/app/components/clock";

export default function Header() {
    return (
    <div>
        <section className="flex text-sm font-[family-name:var(--font-arimo)] font-bold">
          <div className="flex-1 p-4 text-left">
            MODE
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
import Clock from "@/app/components/clock";

export default function Header() {

    return (
		
    <div className="fixed w-screen top-0 z-[999]">
		<section className="flex text-m font-[family-name:var(--font-arimo)] font-bold">
			<div className="w-1/2 flex p-4 text-left gap-1">
				<p>brigittelee &apos;25</p>
          	</div>
			<div className="w-1/2 flex p-4 mr-4 gap-30 justify-end">
				<div className="flex gap-0">
					<a href="#work">work,</a>
					<a href="#site-design">site-design,</a>
					<a href="#contact">contact</a>
				</div>
				<div className="flex gap-1">
					<p>toronto,on</p><Clock />
				</div>
			</div>
        </section>
    </div>
    )
};
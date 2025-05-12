import styles from './styles.module.css';
import Clock from "@/app/components/clock";

export default function Header() {

    return (
	
    <div className="fixed top-0 right-0 left-0 w-full h-30 z-50 backdrop-blur-md bg-white/55 [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-size:100%_100%] pointer-events-none">
		<section className="flex text-m font-[family-name:var(--font-arimo)] font-bold drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)]">
			<div className="w-1/2 flex p-4 text-left gap-1 fade-up">
				<p>brigittelee &apos;25</p>
          	</div>
			<div className="w-1/2 flex p-4 mr-4 gap-30 justify-end">
				<div className="flex gap-0 fade-up">
					<a href="#work">work,</a>
					<a href="#site-design">site-design,</a>
					<a href="#contact">contact</a>
				</div>
				<div className="flex gap-1 fade-up">
					<p>toronto,on</p><Clock />
				</div>
			</div>
        </section>
    </div>
    )
};
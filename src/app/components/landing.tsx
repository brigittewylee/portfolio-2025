import styles from './styles.module.css';
export default function Landing() {
	return (
	  <div className={`${styles.hoverBlurEffect} flex flex-col gap-0 justify-right`}>
		<p className="w-full text-[170px]/40 font-[family-name:var(--arimo)] font-bold text-right m-0 pr-4">
		  Brigitte Lee
		</p>
		<p className="text-[44px] font-[family-name:var(--arimo)] font-normal tracking-wider text-right mr-18">
		  digital portfolio&apos;25  —interactive designer
		</p>
	  </div>
	);
  }
  
  
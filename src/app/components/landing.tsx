import styles from './styles.module.css';
export default function Landing() {
	return (
	  <div className={`${styles.hoverBlurEffect} flex flex-col gap-0 justify-right`}>
		<p className="w-full text-[170px]/30 font-[family-name:var(--arimo)] font-bold text-right m-0 pr-4">
		  BRIGITTE LEE
		</p>
		<p className="text-[45px] font-[family-name:var(--arimo)] font-normal tracking-wider text-right mr-73">
		  digital portfolio&apos;25  —interactive designer
		</p>
	  </div>
	);
  }
  
  
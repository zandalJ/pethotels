interface WrapperProps {
	children: React.ReactNode;
	styles?: string;
	sectionId?: string;
}

const SectionWrapper = ({
	children,
	styles = "",
	sectionId = "",
}: WrapperProps) => {
	return (
		<section
			id={sectionId}
			className={`px-6 md:px-11 py-12 lg:py-24 ${styles}`}>
			<div className='xl:w-[1200px] mx-auto'>{children}</div>
		</section>
	);
};

export default SectionWrapper;

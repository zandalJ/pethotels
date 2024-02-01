import SectionWrapper from "../wrapper/SectionWrapper";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import SearchForm from "./SearchForm";
import Image from "next/image";
import dogImg from "../../public/dog.jpg";

const SearchCard = () => {
	return (
		<SectionWrapper>
			<Card className='block lg:flex'>
				<CardContent className='p-6 lg:w-[60%]'>
					<CardTitle className='mb-4'>
						Find den næste sitter til dit kæledyr
					</CardTitle>
					<SearchForm />
				</CardContent>
				<CardContent className='relative hidden lg:block w-[40%] overflow-hidden'>
					<div className='absolute bg-white w-[200px] h-[120%] z-10 rotate-12 -translate-x-1/2 -translate-y-[10%]'></div>
					<Image src={dogImg} fill alt='dog image' />
				</CardContent>
			</Card>
		</SectionWrapper>
	);
};

export default SearchCard;

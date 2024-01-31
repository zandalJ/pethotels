import { Card, CardContent, CardTitle } from "@/components/ui/card";
import SearchForm from "./SearchForm";

const SearchCard = () => {
	return (
		<Card>
			<CardContent>
				<CardTitle>Find den næste sitter til dit kæledyr</CardTitle>
				<SearchForm />
			</CardContent>
		</Card>
	);
};

export default SearchCard;

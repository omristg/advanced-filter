import { SearchBar } from "./cmps/SearchBar"
import data from './data.json'

export const RootCmp = () => {
	return (
		<div>
			<SearchBar placeholder="Search jobs..." data={data} />
		</div>
	)
}
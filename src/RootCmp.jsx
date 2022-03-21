import { SearchBar } from "./cmps/SearchBar"
import data from './data.json'

export const RootCmp = () => {
	return (
		<div className="root-cmp">
			<SearchBar placeholder="Search jobs..." data={data} />
		</div>
	)
}
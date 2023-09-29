

const Search = (props:{isSearchOn:boolean}) => {
  const isSearchOn =props.isSearchOn
 
    return (
    <input className={isSearchOn ?"w-50 p-2 ":"w-0"}  type="search" />
  )
}

export default Search
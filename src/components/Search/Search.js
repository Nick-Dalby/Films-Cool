import { useRef, useState } from 'react'
import { SearchContainer, Input, Icon, Wrapper } from './styles'
import { Close } from '../../styles'

const Search = ({ filterMovies }) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(true)

  const handleChange = (event) => {
    console.log(event.target.value)
    filterMovies(event.target.value)
  }

  const clearSearch = () => {
    filterMovies('')
    inputEl.current.value = ''
    setShowOnDesktop(false)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input
          ref={inputEl}
          type="text"
          name="search"
          autocomplete="off"
          onChange={handleChange}
        />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search

import { useRef, useState } from 'react'
import { SearchContainer, Input, Icon, Wrapper } from './styles'
import { Close } from '../../styles'

const Search = ({ filterMovies }) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const handleChange = (event) => {
    filterMovies(event.target.value)
  }

  const clearSearch = () => {
    filterMovies('')
    inputEl.current.value = ''
  }

  const showSearch = () => {
    filterMovies('')
    setShowOnDesktop(!showOnDesktop)
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

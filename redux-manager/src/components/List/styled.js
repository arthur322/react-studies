import styled from 'styled-components'

export const StyledList = styled.ul`
  list-style: none;
`

export const StyledItem = styled.li`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin-right: 20px;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    i {
      opacity: 1;
      &:hover {
        color: #fff;
        cursor: pointer;
      }
    }
  }
`
export const StyledInput = styled.input`
  background: transparent;
  border: 1px solid transparent;
  padding: 5px 0;
  width: 80%;
  outline-color: #152642;
  color: var(--color-font);
  font-size: 16px;
  &:placeholder {
    color: #506680;
  }
  &:hover {
    border: 1px solid #353c51;
  }
`

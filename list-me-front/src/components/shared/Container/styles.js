import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  display: ${props => (props.flex ? 'flex' : 'block')};
  flex-direction: ${props => props.flexColumn && 'column'};
  flex-direction: ${props => props.flexRow && 'row'};
  align-items: ${props => (props.align ? props.align : '')};
  justify-content: ${props => (props.justify ? props.justify : '')};

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

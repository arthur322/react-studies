import React from 'react'

import MainTemplate from '../../components/templates/MainTemplate'
import Container from '../../components/shared/Container'
import { Content } from './styles'

const Noticias = () => (
  <MainTemplate>
    <Content>
      <Container style={{ paddingTop: '20px' }}>
        <article>
          <h1>Sobre</h1>
          <p>
            O projeto List-Me tem a finalidade de ajudar as pessoas em seus
            relacionamentos, seja ele familiar, conjulgal, etc. Através da
            ferramenta será possível visualizar sugestões, dicas e auxílio na
            relação do usuário por meio de conteúdos selecionados, interação em
            fórum ou por lembretes ou notificações diárias.
          </p>
        </article>
      </Container>
    </Content>
  </MainTemplate>
)

export default Noticias

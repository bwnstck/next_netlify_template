import ReactMarkdown from 'react-markdown'

import FooterWithImpress from '$components/layout/FooterWithImpress'

import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'

import HomeContent from '$meta/home.yml'


const LandingPage = () => {


  return (
    <>
      <ContentWrapper>
        <Body>{HomeContent.body}</Body>
      </ContentWrapper>
      <FooterWithImpress />

    </>
  )
}

export default LandingPage



const Body = styled(ReactMarkdown)`
  text-align: left;
  font-size: 40px;
  max-width: 600px;
  margin: auto;
  > p {
    line-height: 40px;
    padding-bottom: 1rem;
  }
`

const ContentWrapper = styled.div`
  background-color: var(--color-white);
  text-align: center;
  margin: 0 auto;
  padding: 1rem 0.5rem;
`

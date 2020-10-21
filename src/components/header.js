import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Head = styled.header({
  background: `green`,
  marginBottom: `1.45rem`,
})

const Div = styled.div({
  margin: `0 auto`,
  maxWidth: 1024,
  padding: `1.45rem 1.0875rem`,
})

const Title = styled.h1({
  margin: `0`,
})

const Header = ({ siteTitle }) => (
  <Head>
    <Div>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </Div>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

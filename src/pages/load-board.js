import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  background: #f4f4f4;
  color: #000000;
  display: block;
  padding: 1rem;
  text-decoration: none;
  &:hover {
    background: #e4e4e4;
    cursor: pointer;
  }
`

const Kanta = styled.div`
  margin: 7rem auto;
  padding: 1px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Posts = styled.li`
  list-style-type: none;
  margin: 0;
`
const Date = styled.p`
  color: #777777;
  font-size: 0.8rem;
  font-style: italic;
`

class Board extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    return (
      <Layout>
        <Kanta>
          <MDBContainer>
            <h2>Available Loads</h2>
            <ul>
              {edges.map(edge => {
                const { path, title } = edge.node.frontmatter
                return (
                  <Posts key={path}>
                    <StyledLink to={path}>
                      <Date>{title}</Date>
                    </StyledLink>
                  </Posts>
                )
              })}
            </ul>
          </MDBContainer>
        </Kanta>
      </Layout>
    )
  }
}

export default Board

export const query = graphql`
  query posts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

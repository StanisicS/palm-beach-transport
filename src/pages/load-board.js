import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"

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
  font-size: 3rem;
  font-style: italic;
`

const LoadBoard = ({ data }) => {
                 const { edges: posts } = data.allMarkdownRemark
                 return (
                   <Helmet>
                    <title>{"Load Board"}</title>
                    <Layout>
                      <SEO title="Load Board" />
                      <Kanta>
                        <MDBContainer>
                        <div className="blog-posts">
                          {" "}
                          {posts
                            .filter(post => post.node.frontmatter.title.length > 0)
                            .map(({ node: post }) => {
                              return (
                                <div className="blog-post-preview" key={post.id}>
                                  {" "}
                                  <h1>
                                    {" "}
                                    <Link to={post.frontmatter.path}>
                                      {post.frontmatter.title}
                                    </Link>{" "}
                                  </h1>{" "}
                                  <h2>{post.frontmatter.date}</h2>{" "}
                                  <p>{post.excerpt}</p>{" "}
                                </div>
                              )
                            })}{" "}
                        </div>
                      
                      </MDBContainer>
                        </Kanta>
                    </Layout>
                    </Helmet>
                    )
                  }
                  
                  export default LoadBoard
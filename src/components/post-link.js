import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  background: #f4f4f4;
  color: #000000;
  display: block;
  padding: 1rem;
  text-decoration: none;
  font-size: 3rem;
  font-style: italic;
  &:hover {
    background: #e4e4e4;
    cursor: pointer;
  }
`

const PostLink = ({ post }) => (
  <div>
    <StyledLink to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </StyledLink>
  </div>
)

export default PostLink

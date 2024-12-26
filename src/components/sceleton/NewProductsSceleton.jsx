import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={335}
    height={130}
    viewBox="0 0 335 130"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="16" ry="16" width="130" height="130" /> 
    <rect x="142" y="28" rx="12" ry="12" width="185" height="44" /> 
    <rect x="142" y="82" rx="8" ry="8" width="70" height="26" />
  </ContentLoader>
)

export default MyLoader
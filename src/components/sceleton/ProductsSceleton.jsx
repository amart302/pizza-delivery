import React from "react"
import ContentLoader from "react-content-loader"

const ProductsSceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={453}
    height={611}
    viewBox="0 0 453 611"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="20" rx="50" ry="50" width="413" height="413" /> 
    <rect x="20" y="450" rx="12" ry="12" width="340" height="40" /> 
    <rect x="20" y="500" rx="12" ry="12" width="300" height="40" /> 
    <rect x="20" y="551" rx="12" ry="12" width="200" height="40" />
  </ContentLoader>
)

export default ProductsSceleton
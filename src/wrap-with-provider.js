import TopLayout from "./components/top-layout"
import theme from "./modules/theme"

export default function wrapWithProvider({ element }) {
  return <TopLayout theme={theme}>{element}</TopLayout>
}

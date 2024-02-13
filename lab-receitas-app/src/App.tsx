import { Home } from "./pages/Home";

import { ContentWrapper, GlobalStyle } from "./global";
import { RecipesProvider } from "./contexts/RecipeContext";

function App() {
  return (
    <RecipesProvider>
      <ContentWrapper>
        <Home />
        <GlobalStyle />
      </ContentWrapper>
    </RecipesProvider>
  );
}

export default App;

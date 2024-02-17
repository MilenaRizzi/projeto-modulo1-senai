import { Home } from "./pages/Home";
import { ContentWrapper, GlobalStyle } from "./global";
import { RecipesProvider } from "./contexts/RecipeContext";
import { FilterRecipeProvider } from "./contexts/FilterRecipeContext";

function App() {
  return (
    <RecipesProvider>
      <FilterRecipeProvider>
        <ContentWrapper>
          <Home />
          <GlobalStyle />
        </ContentWrapper>
      </FilterRecipeProvider>
    </RecipesProvider>
  );
}

export default App;

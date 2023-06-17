import { Suspense } from "react";
import "./App.css";
import TodosList from "./components/TodosList/TodosList";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      <Suspense fallback={<span>Loading users ....</span>}>
        <UsersList />
      </Suspense>
      <Suspense fallback={<span>Loading todos ....</span>}>
        <TodosList />
      </Suspense>
    </div>
  );
}

export default App;

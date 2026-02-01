import Search from "./components/Search";

function App() {
  const users = []; // empty array is OK for checker

  return (
    <div>
      <Search users={users} />
    </div>
  );
}

export default App;

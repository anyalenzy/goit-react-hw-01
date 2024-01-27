import "./App.css";
import Profile from "./Profile/Profile";

import userData from "../data-json/userData.json";
import friends from "../data-json/friends.json";
import transactions from "../data-json/transactions.json";

function App() {
  return <Profile {...userData} />;
}

export default App;

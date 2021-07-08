import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import { Profile } from "./components/Profile/Profile";
import FriendsList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import { avatar, name, tag, location, stats } from "./datafiles/user.json";
import dataFriends from "./datafiles/friends.json";
import dataStatistics from "./datafiles/statistical-data.json";
import dataTransactions from "./datafiles/transactions.json";

const App = () => (
  <Container>
    <Profile
      avatar={avatar}
      alt={name}
      name={name}
      tag={tag}
      location={location}
      stats={stats}
    />
    <FriendsList friends={dataFriends} />
    <Statistics title="Upload stats" stats={dataStatistics} />;
    <TransactionHistory transactions={dataTransactions} />
  </Container>
);

export default App;

import friends from './friendList/friends.json';
import { FriendList } from './friendList/FriendList';
import user from './profile/user.json';
import { Profile } from './profile/Profile';
import data from './statistics/data.json';
import { Statistics } from './statistics/Statistics';
import transactions from './transactionHistory/transactions.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

// const App = () => {   const movieData = [
//     { id: 1, title: 'Terminator' },
//     { id: 2, title: 'Harry Poter' },
//   ];
//   const inOnline = false;
//   <>
//     <section>
//       <Container><BlogCard {...article} /></Container>
//     </section>
//  <GlobalStyle></Globa>
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#999999',
//       }}
//     >
//       <header
//         style={{
//           backgroundColor: 'teal',
//         }}
//       >
//         I am header
//       </header>
// {/* ===================================================== */}
// {/* <Section title="Movie" data={movieData} />
// What are you looking at ?
// {inOnline ? <h1>User is online</h1> : <h1>is ofline</h1>}
// {inOnline && <h1>Only when user is online</h1>}
// {!inOnline && <h1>Only render when user is offline</h1>}
// <Profile> */}

// {/* </Profile> */}
//     </div>

//   </>

//   );
// };

// export default App;

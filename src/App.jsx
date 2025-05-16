import React, { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup, onAuthStateChanged, signOut } from './firebase';

export default function App() {
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  const addToWatchlist = (item) => {
    if (!watchlist.find(i => i.id === item.id)) {
      setWatchlist([...watchlist, item]);
    }
  };

  const dummyItem = {
    id: '1',
    title: 'Sample Flip Item',
    price: '$20',
    link: 'https://www.ebay.com'
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
      <h1>Triple Flip</h1>
      {user ? (
        <>
          <p>Welcome, {user.displayName} <button onClick={handleSignOut}>Sign Out</button></p>
          <button onClick={() => addToWatchlist(dummyItem)}>Add Example Item to Watchlist</button>
          <h3>Watchlist:</h3>
          <ul>
            {watchlist.map(item => (
              <li key={item.id}><a href={item.link} target="_blank" style={{ color: '#4fc3f7' }}>{item.title}</a> - {item.price}</li>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
}
import ConnectWallet from './components/ConnectWallet';

function App() {
  
  return (
   <div>
    <div className='text-center'>
      <h1 className="py-10">Welcome to Ajay Game of Luck!</h1>
      <p>Try your luck and win big prizes!</p>
      <p>Connect your wallet to get started</p>
      <p>Guess the number and win!</p>
    </div>
   <ConnectWallet/>
   </div>
  );
}

export default App;

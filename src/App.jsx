// src/App.jsx
import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import './App.css'; // Import custom styles

function App() {
    const wallets = useMemo(
        () => [new UnsafeBurnerWalletAdapter()],
        []
    );

    return (
        <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/efUokoTbNefVt4jDO5LkUi6ss5U9P7MN">
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div className="app-container">
                        <header className="header">
                            <h1>Solana Faucet</h1>
                            <div className="wallet-buttons">
                                <WalletMultiButton />
                                <WalletDisconnectButton />
                            </div>
                        </header>
                        <main className="main-content">
                            <Airdrop />
                        </main>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;

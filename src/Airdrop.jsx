// src/Airdrop.jsx
import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import './Airdrop.css'; // Import custom styles

export function Airdrop() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const sendAirdropToUser = async () => {
        if (!publicKey) {
            setMessage('Please connect your wallet!');
            return;
        }

        // Convert SOL to lamports
        const lamports = Number(amount) * 1000000000;

        // Request airdrop
        await connection.requestAirdrop(publicKey, lamports);

        // Display success message and refresh page
        setMessage('Airdrop request successful!');
        window.location.reload(); // Refresh the page
    };

    return (
        <div className="airdrop-container">
            {message && <div className="message">{message}</div>}
            <input
                id="useramount"
                type="number"
                placeholder="Amount in SOL"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="amount-input"
            />
            <button onClick={sendAirdropToUser} className="airdrop-button">
                Request Airdrop
            </button>
        </div>
    );
}

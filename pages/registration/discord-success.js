import Head from 'next/head';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';


export default function Success () {
    const [name, setName] = useState('');
    const [timeLeft, setTimeLeft] = useState(5);
    const [error, setError] = useState(false);

    useEffect(() => {

        const info = JSON.parse(atob(new URLSearchParams(window.location.search).get('data')));

        if (!info) return setError(true);
        window.localStorage.setItem('hoc-discord-id', info.discordId);
        window.localStorage.setItem('hoc-discord-tag', info.discordTag);
        window.localStorage.setItem('hoc-discord-ts', Date.now());

        setName(info.discordTag);
    }, []);

    useEffect(() => {
        const start = Date.now();
        const timer = setInterval(() => {
            let t = Math.floor(5 - (Date.now() - start) / 1000);
            setTimeLeft(t);
            if (t <= 0) window.close();
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <div style={{
            width: '100vw',
            height: '100vh',
            background: '#5865F2'
        }}>
            <Head>
            <title>Hack OC</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Modal visible={true} setVisible={() => ''} hideCloseButton={true}>
            <div style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px',
                border: '2px solid #5865F2',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '40px',
                textAlign: 'center',
                position: 'relative'
            }}>
                <img src="/logo-full-light.png" style={{ height: '60px', position: 'absolute', bottom: '2rem', right: '2rem' }} />
                <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" style={{ height: '60px', position: 'absolute', bottom: '2rem', left: '2rem' }} />
                {error ? <>
                    <h1 style={{ marginBottom: '0px' }}>There was an error.</h1>
                    <p>Please try again. This tab will close in <strong>{timeLeft} seconds</strong>.</p>
                </> : <>
                    <h1 style={{ marginBottom: '0px' }}>You've been linked to <span style={{ color: '#5865F2' }}>{name}</span>!</h1>
                    <p>Return to the previous tab to finish registration. This tab will close in <strong>{timeLeft} seconds</strong>.</p>
                </>}
            </div>
            </Modal>
        </div>
        </>
    );

}
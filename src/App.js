import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import Confetti from 'react-dom-confetti';
import GiftLogo from './gift.png';
import ExplodedLogo from './exploded.png';

function App() {
    const [confetti, setConfetti] = useState();
    const config = {
        angle: 90,
        spread: '171',
        startVelocity: '60',
        elementCount: '250',
        dragFriction: '0.12',
        duration: '8670',
        stagger: '3',
        width: '10px',
        height: '10px',
        perspective: '500px',
        colors: ['#9A0910', '#F00F1A', '#E53844', '#E55038', '#E42E11'],
    };
    const handleConfetti = () => {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 800);
    };

    console.log(confetti);

    return (
        <div className='container'>
            <Box
                display='inline-flex'
                gridGap='10px'
                flexWrap='wrap'
                justifyContent='center'>
                <Typography component='span' variant='h5' className='first'>
                    WSZYSTKIEGO
                </Typography>
                <Typography component='span' variant='h5' className='second'>
                    NAJLEPSZEGO
                </Typography>
                <Typography component='span' variant='h5' className='third'>
                    Z OKAZJI
                </Typography>
                <Typography component='span' variant='h5' className='fourth'>
                    DNIA
                </Typography>
                <Typography component='span' variant='h5' className='fourth'>
                    MATKI !
                </Typography>
            </Box>
            <Box onClick={handleConfetti} className='confettibox'>
                <Confetti active={confetti} config={config} />
                <img
                    src={confetti ? ExplodedLogo : GiftLogo}
                    className={confetti ? 'exploded' : 'gift'}
                />
            </Box>
        </div>
    );
}

export default App;

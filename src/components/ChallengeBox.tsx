import React, { useContext } from 'react';
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
           {
               activeChallenge ? ( 
                   <div className={styles.challengeActive}>
                       <header>Ganhe {activeChallenge.amount} xp</header>

                       <main>
                           <img src={`icons/${activeChallenge.type}.svg`}/>

                           <strong>Novo desafio</strong>
                           <p>{activeChallenge.description}</p>
                       </main>

                       <footer>
                           <button type='button' onClick={handleChallengeFailed} className={styles.challengeFailedButton}>Falhei</button>
                           <button type='button' onClick={handleChallengeSucceded} className={styles.challengeSuccededButton}>Completei</button>
                       </footer>
                   </div>
                ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para recever desafios a serem completados</strong>
                    <p><img src="icons/level-up.svg" alt="Level Up"/>Avance de level completando desafios.</p>
                </div>
               )
           }
        </div>
    );
}
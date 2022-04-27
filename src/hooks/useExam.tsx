import { useState, useEffect } from "react"
import { Alert } from "react-native";
import { getRandomChord, getRandomNote, getRandomInterval } from "../helpers";
import { ValidDegree } from '../interfaces/index';

export interface State {
    elementary: string;
    professional: string;
    higher: string;
}

export const useExam = () => {

    const [gameOptions, setGameOptions] = useState({
        attempts: 0,
        score: 0,
        feedback: '',
        finish: false,
    })

    const [correctAnswer, setCorrectAnswer] = useState<State>({
        elementary: getRandomNote(),
        professional: getRandomChord(),
        higher: getRandomInterval(),
    })

    useEffect(() => {
        checkAttempts();
    }, [gameOptions.attempts]);


    const checkAnswer = (degree: ValidDegree, selectedAnswer: string) => {
        if (gameOptions.finish === true) {
            return
        }

        switch (degree) {
            case 'elementary':

                if (selectedAnswer == correctAnswer.elementary) {
                    setGameOptions(prev => ({
                        ...prev,
                        score: prev.score + 1
                    }));
                } else {
                    // TODO: play sound
                }

                setCorrectAnswer(prev => ({
                    ...prev,
                    elementary: getRandomNote()
                }));

                break;

            case 'professional':

                if (selectedAnswer == correctAnswer.professional) {
                    setGameOptions(prev => ({
                        ...prev,
                        score: prev.score + 1
                    }));
                } else {
                    // TODO: play sound
                }

                setCorrectAnswer(prev => ({
                    ...prev,
                    professional: getRandomChord()
                }));

                break;

            case 'higher':

                if (selectedAnswer == correctAnswer.higher) {
                    setGameOptions(prev => ({
                        ...prev,
                        score: prev.score + 1
                    }));
                } else {
                    // TODO: play sound
                }

                setCorrectAnswer(prev => ({
                    ...prev,
                    higher: getRandomInterval()
                }));

                break;

            default:
                break;
        }

        setGameOptions(prev => ({
            ...prev,
            attempts: prev.attempts + 1
        }));
    }

    const checkAttempts = () => {
        if (gameOptions.attempts >= 15) {
            setGameOptions(prev => ({
                ...prev,
                finish: true
            }));

            giveFeedback()
        }
    }

    const giveFeedback = () => {
        let feedback = ''

        if (gameOptions.score <= 8) {
            feedback = 'You have not passed the test, you must re-read the theory and apply the test again before continuing to the next lesson.'
        } else if (gameOptions.score <= 14) {
            feedback = 'You have passed the test, even so we would recommend you to review the theory a little more.'
        } else if (gameOptions.score == 15) {
            feedback = 'Perfect! You made it amazing. you can skip to the next lesson with no problems'
        }

        Alert.alert('Results', feedback)
    }

    return {
        gameOptions,
        correctAnswer,
        checkAnswer,
    }
}

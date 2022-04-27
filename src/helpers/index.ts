import { elementaryExamOptions, higherExamOptions, professionalExamOptions } from "../data"
import { ValidDegree } from '../interfaces/index';
import { State as useExamState } from "../hooks/useExam";
import * as assets from '../assets'

export const getRandomNote = () => {
    const notes = elementaryExamOptions
    const note = notes[Math.floor(Math.random() * notes.length)]

    return note
}

export const getRandomChord = () => {
    const chords = professionalExamOptions
    const chord = chords[Math.floor(Math.random() * chords.length)]

    return chord
}

export const getRandomInterval = () => {
    const intervals = higherExamOptions
    const interval = intervals[Math.floor(Math.random() * intervals.length)]

    return interval
}

export const getExamImage = (degree: ValidDegree, correctAnswer: useExamState) => {
    switch (degree) {
        case 'elementary':
            return getElementaryExamImage(correctAnswer.elementary)

        case 'professional':
            return getProfessionalExamImage(correctAnswer.professional)

        case 'higher':
            return getHigherExamImage(correctAnswer.higher)

        default:
            return []
    }
}

const getElementaryExamImage = (correctAnswer: string) => {
    const { noteC, noteD, noteE, noteF, noteG, noteA, noteB } = assets

    switch (correctAnswer) {
        case 'C':
            return noteC

        case 'D':
            return noteD

        case 'E':
            return noteE

        case 'F':
            return noteF

        case 'G':
            return noteG

        case 'A':
            return noteA

        case 'B':
            return noteB

        default:
            break;
    }
}

const getProfessionalExamImage = (correctAnswer: string) => {

    const { chordCMajor, chordCMinor, chordDMajor, chordDMinor, chordEMajor, chordEMinor, chordFMajor, chordFMinor, chordGMajor, chordGMinor, chordAMajor, chordAMinor, chordBMajor, chordBMinor } = assets

    switch (correctAnswer) {
        case 'C major':
            return chordCMajor

        case 'C minor':
            return chordCMinor

        case 'D major':
            return chordDMajor

        case 'D minor':
            return chordDMinor

        case 'E major':
            return chordEMajor

        case 'E minor':
            return chordEMinor

        case 'F major':
            return chordFMajor

        case 'F minor':
            return chordFMinor

        case 'G major':
            return chordGMajor

        case 'G minor':
            return chordGMinor

        case 'A major':
            return chordAMajor

        case 'A minor':
            return chordAMinor

        case 'B major':
            return chordBMajor

        case 'B minor':
            return chordBMinor

        default:
            break;
    }
}

const getHigherExamImage = (correctAnswer: string) => {
    const { interval2Major, interval2Minor, interval3Major, interval3Minor, interval4Augmented, interval4Perfect, interval5Augmented, interval5Perfect, interval6Major, interval7Major, interval7Minor, intervalUnison } = assets

    switch (correctAnswer) {
        case '2 Maj':
            return interval2Major

        case '2 Min':
            return interval2Minor

        case '3 Maj':
            return interval3Major

        case '3 Min':
            return interval3Minor

        case '4 Aug':
            return interval4Augmented

        case '4 Per':
            return interval4Perfect

        case '5 Aug':
            return interval5Augmented

        case '5 Per':
            return interval5Perfect

        case '6 Maj':
            return interval6Major

        case '7 Maj':
            return interval7Major

        case '7 Min':
            return interval7Minor

        case 'Unison':
            return intervalUnison

        default:
            break;
    }
}

export const getExamOptions = (degree: ValidDegree) => {
    switch (degree) {
        case 'elementary':
            return elementaryExamOptions

        case 'professional':
            return professionalExamOptions

        case 'higher':
            return higherExamOptions

        default:
            return []
    }
}

export const getExamDescription = (degree: ValidDegree) => {
    switch (degree) {
        case 'elementary':
            return 'note'

        case 'professional':
            return 'chord'

        case 'higher':
            return 'interval'

        default:
            return ''
    }
}
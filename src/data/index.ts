import { DegreeOptions, HomeCards, Onboarding } from '../interfaces/index';

export const onboarding: Onboarding[] = [
    {
        id: 0,
        title: 'BASIC ASPECTS',
        description: 'With this app you will learn a lot about music theory, even if you are a beginner.'
    },
    {
        id: 1,
        title: 'LEARN BY YOURSELF',
        description: 'With this app you learn on your own, without the need for teachers.'
    },
    {
        id: 2,
        title: 'RAPID PROGRESS',
        description: 'With our learning method, you will notice significant progress in a matter of days.'
    },
    {
        id: 3,
        title: 'EASY ACCESS',
        description: 'The app is very flexible to your schedule, you can start studying practically whenever you want.'
    },
    {
        id: 4,
        title: 'ENJOY',
        description: 'Take your instrument and start learning, but do not forget the most important thing, enjoy it.'
    },
]

const iconPlus = require('../assets/icon-plus.png')
const iconSongs = require('../assets/icon-pieces.png')
const redGradient = require('../assets/red-gradient.png')
const blueGradient = require('../assets/blue-gradient.png')
const purpleGradient = require('../assets/purple-gradient.png')
const pinkGradient = require('../assets/pink-gradient.png')

export const homeCards: HomeCards[] = [
    {
        page: 'Degree',
        title: 'elementary',
        description: 'Learn what it takes to play the melodies of many of your favorite songs to impress your friends.',
        icon: iconPlus,
        gradient: redGradient,
    },
    {
        page: 'Degree',
        title: 'professional',
        description: 'Here you will learn new concepts and put into practice what you learned in the previous lesson.',
        icon: iconPlus,
        gradient: blueGradient,
    },
    {
        page: 'Degree',
        title: 'higher',
        description: 'You will put the previously learned theory into practice and learn advanced tips.',
        icon: iconPlus,
        gradient: purpleGradient,
    },
    {
        page: 'Songs',
        title: 'songs',
        description: 'Here you will find tutorials of some of the best songs to learn on the piano.',
        icon: iconSongs,
        gradient: pinkGradient,
    }
]

const iconTheory = require('../assets/icon-theory.png')
const iconExercises = require('../assets/icon-exercises.png')
const iconPieces = require('../assets/icon-pieces.png')
const iconExam = require('../assets/icon-exam.png')

export const degreeOptions: DegreeOptions[] = [
    {
        icon: iconTheory,
        text: 'Theory',
    },
    {
        icon: iconExercises,
        text: 'Exercises',
    },
    {
        icon: iconPieces,
        text: 'Pieces',
    },
    {
        icon: iconExam,
        text: 'Exam',
    },
]

export const elementaryExamOptions: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

export const professionalExamOptions: string[] = ['C major', 'C minor', 'D major', 'D minor', 'E major', 'E minor', 'F major', 'F minor', 'G major', 'G minor', 'A major', 'A minor', 'B major', 'B minor']

export const higherExamOptions: string[] = ['2 Maj', '2 Min', '3 Maj', '3 Min', '4 Aug', '4 Per', '5 Aug', '5 Per', '6 Maj', '7 Maj', '7 Min', 'Unison']
import { Onboarding } from '../interfaces/index';

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
const redGradient = require('../assets/red-gradient.png')
const blueGradient = require('../assets/blue-gradient.png')
const purpleGradient = require('../assets/purple-gradient.png')

export const homeCards: any[] = [
    {
        title: 'Elementary',
        description: 'Learn a lot of songs to impress your friends.',
        icon: iconPlus,
        gradient: redGradient
    },
    {
        title: 'Professional',
        description: 'Here you will learn new concepts and put into practice what you learned in the previous lesson.',
        icon: iconPlus,
        gradient: blueGradient
    },
    {
        title: 'Higher',
        description: 'You will put the previously learned theory into practice and learn advanced tips.',
        icon: iconPlus,
        gradient: purpleGradient
    },
]
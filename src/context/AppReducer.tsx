export interface AppState {
    showSplashScreen: Boolean;
    onboardingStep: number;
}

type AppAction =
    | { type: 'setSplashScreen', payload: { show: Boolean } }
    | { type: 'setOnboardingStep', payload: { step: number } }

export const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'setSplashScreen':
            return {
                ...state,
                showSplashScreen: action.payload.show
            }

        case 'setOnboardingStep':
            return {
                ...state,
                onboardingStep: action.payload.step
            }
        default:
            return state;
    }
}
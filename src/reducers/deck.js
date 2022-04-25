import { createSlice } from '@reduxjs/toolkit'

const suits = ['C', 'H', 'S', 'D'];
const values = ['AA', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'JJ', 'QQ', 'KK'];
const generateCard = (suit, value) => ({
    suit,
    value,
    id: `${suit}${value}`,
})
const generateDeck = () => suits.map(s => values.map(v => generateCard(s, v))).reduce((acc, v) => acc.concat(v), []);

export const deckSlice = createSlice({
    name: 'deck',
    initialState: generateDeck(),
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        shuffle: (state) => {
            state.sort(() => Math.random() - 0.5); // TODO: Optimise;

        },
        draw: (state) => {
            console.log('draw')
        },
        sort: (state, action) => {
            console.log('sort')
            switch (action.payload) {
                case 'CHASE':
                    return;
                case 'INIT': //fall through
                default:
                    return;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { shuffle, draw, sort } = deckSlice.actions

export default deckSlice.reducer
// Had to use one reducer for draw/discard functionality

import { createSlice } from '@reduxjs/toolkit'

const suits = ['C', 'H', 'S', 'D'];
const values = ['AA', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'JJ', 'QQ', 'KK'];
const generateCard = (suit, value) => ({
    suit,
    value,
    id: `${suit}${value}`,
})
const generateDeck = () => suits.map(s => values.map(v => generateCard(s, v))).reduce((acc, v) => acc.concat(v), []);

export const fullSlice = createSlice({
    name: 'full',
    initialState: { deck: generateDeck(), hand: [] },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        shuffleDeck: ({ deck }) => {
            deck.sort(() => Math.random() - 0.5); // TODO: Optimise;

        },
        draw: ({ hand, deck }) => {
            console.log('draw')
            console.log(hand.push(deck.pop()));

            // dispatch(add());
        },
        sortDeck: ({ deck }, action) => {
            console.log('sort')
            switch (action.payload) {
                case 'CHASE':
                    return;
                case 'INIT': //fall through
                default:
                    // New Deck Order: A-K A-K K-A K-A HCDS
                    return;
            }
        },
        discard: ({ hand, deck }, action) => {
            const id = action.payload;
            const indexInHand = hand.findIndex(v => v.id === id);
            deck.unshift(hand.splice(indexInHand, 1)[0])
        }
    },

})

// Action creators are generated for each case reducer function
export const { shuffleDeck, draw, sortDeck, discard } = fullSlice.actions

export default fullSlice.reducer
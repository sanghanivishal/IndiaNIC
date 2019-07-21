import React from 'react';
import {Map} from 'immutable'
import {Modules} from './Actions';

const InitialState = new Map({
    jobDetails: null,
    uploadStatus: null
});

export const Reducer = (state = InitialState, action) => {
    const {payload, type} = action;
    switch (type) {

        case Modules.GET_JOB_DETAILS: {
            if (payload && payload.status === 1) {
                return state.set('jobDetails', payload)
            }
            return state
        }

        case Modules.UPLOAD_JOB: {
            if (payload) {
                return state.set('uploadStatus', payload)
            }
            return state
        }

        case Modules.RESET_UPLOAD_STATUS: {
            return state.set('uploadStatus', null)
        }

        default:
            return state;
    }
};

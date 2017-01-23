export const makeSubmission = payload => ({
    type: 'MAKE_SUBMISSION',
    payload
});

export const receiveSubmission = payload => ({
    type: 'RECEIVE_SUBMISSION',
    payload
});
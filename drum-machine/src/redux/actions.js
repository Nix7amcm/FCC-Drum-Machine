export const TRIGGER_PAD = 'TRIGGER_PAD';

export const triggerPad = ( padLabel ) => {
  return {
    type: TRIGGER_PAD,
    payload: {
      padLabel,
    },
  };
};
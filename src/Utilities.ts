export const serverURL = (): string => {
  return `${process.env.REACT_APP_SERVER_URL || '/api'}`;
};
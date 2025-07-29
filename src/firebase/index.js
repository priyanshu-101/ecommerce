// Firebase config and app
export { default as app, auth } from './config';

// Authentication utilities
export {
  signInWithGoogle,
  signUpWithEmail,
  signInWithEmail,
  resetPassword,
  signOutUser,
  onAuthStateChange,
  getCurrentUser
} from './auth';

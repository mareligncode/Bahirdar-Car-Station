import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  isLoading: false,

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      // FIXED ROLE DETECTION
      let role = 'passenger';
      
      if (email.includes('driver@')) {
        role = 'driver';
      } else if (email.includes('admin@') || email.includes('station_admin@')) {
        role = 'station_admin';
      }
      
      const mockUser = {
        id: '1',
        email,
        name: email.split('@')[0].replace('_', ' '),
        role: role,
        phone: '+251912345678'
      };
      
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      localStorage.setItem('token', mockToken);
      set({ 
        user: mockUser, 
        token: mockToken, 
        isAuthenticated: true,
        isLoading: false 
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ 
      user: null, 
      token: null, 
      isAuthenticated: false 
    });
  },

  setUser: (user) => set({ user }),
  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token, isAuthenticated: true });
  },
}));
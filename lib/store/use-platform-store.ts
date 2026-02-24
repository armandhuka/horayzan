import { create } from 'zustand';

interface PlatformState {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    setMobileMenuOpen: (open: boolean) => void;
}

export const usePlatformStore = create<PlatformState>((set) => ({
    isMobileMenuOpen: false,
    toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}));

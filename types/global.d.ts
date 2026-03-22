export {};

declare global {
  interface Window {
    crmTracker?: {
      track: (event: string, data?: Record<string, any>) => void;
      identify: (email: string, name?: string, phone?: string, city?: string) => Promise<void>;
    };
  }
}

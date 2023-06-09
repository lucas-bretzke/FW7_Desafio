declare module 'expo-clipboard' {
    export function getString(): Promise<string>;
    export function setString(content: string): Promise<void>;
  }
  
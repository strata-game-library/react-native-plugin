/**
 * @jbcom/strata-react-native-plugin
 * 
 * React Native plugin for Strata 3D games.
 * 
 * @packageDocumentation
 */

// TODO: Implement React Native native modules for iOS and Android

export interface DeviceProfile {
  deviceType: 'mobile' | 'tablet' | 'foldable' | 'desktop';
  platform: 'ios' | 'android';
  inputMode: 'touch' | 'keyboard' | 'gamepad' | 'hybrid';
  orientation: 'portrait' | 'landscape';
  hasTouch: boolean;
  hasGamepad: boolean;
  screenWidth: number;
  screenHeight: number;
  pixelRatio: number;
  safeAreaInsets: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export interface InputSnapshot {
  timestamp: number;
  leftStick: { x: number; y: number };
  rightStick: { x: number; y: number };
  buttons: Record<string, boolean>;
  triggers: { left: number; right: number };
}

export interface HapticsOptions {
  intensity?: 'light' | 'medium' | 'heavy';
  customIntensity?: number;
  duration?: number;
  pattern?: number[];
}

/**
 * Placeholder - not yet implemented
 */
export function useDevice(): DeviceProfile {
  throw new Error('Not implemented - React Native native modules required');
}

/**
 * Placeholder - not yet implemented
 */
export function useInput(): InputSnapshot {
  throw new Error('Not implemented - React Native native modules required');
}

/**
 * Placeholder - not yet implemented
 */
export function useHaptics(): { trigger: (options: HapticsOptions) => Promise<void> } {
  throw new Error('Not implemented - React Native native modules required');
}

/**
 * Placeholder - not yet implemented
 */
export function useControlHints(): { movement: string; action: string; camera: string } {
  throw new Error('Not implemented - React Native native modules required');
}

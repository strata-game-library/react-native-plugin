# @strata/react-native-plugin

[![npm version](https://img.shields.io/npm/v/@strata/react-native-plugin.svg)](https://www.npmjs.com/package/@strata/react-native-plugin)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React Native plugin for [Strata 3D](https://strata.game) - cross-platform input, device detection, and haptics for mobile games.

## 📚 Documentation

**Full documentation is available at [strata.game/mobile/react-native](https://strata.game/mobile/react-native/)**

---

## 🏢 Enterprise Context

**Strata** is the Games & Procedural division of the [jbcom enterprise](https://jbcom.github.io). This plugin is part of a coherent suite of specialized tools, sharing a unified design system and interconnected with sibling organizations like [Agentic](https://agentic.dev) and [Extended Data](https://extendeddata.dev).

## Features

- **Device Detection** - Identify device type, platform, and performance capabilities
- **Input Handling** - Unified touch input handling with `StrataInputProvider`
- **Haptic Feedback** - Cross-platform vibration with intensity control
- **Safe Area Insets** - Native safe area detection for notches
- **Orientation** - Get and set screen orientation
- **Performance Mode** - Detect low power mode and hardware levels

## Installation

```bash
npm install @strata/react-native-plugin
cd ios && pod install
```

## Quick Start

```tsx
import { useDevice, useInput, useHaptics } from '@strata/react-native-plugin';

function Game() {
  const device = useDevice();
  const input = useInput();
  const { trigger } = useHaptics();
  
  return (
    <View>
      <Text>Platform: {device.platform}</Text>
      <Button onPress={() => trigger({ intensity: 'medium' })} />
    </View>
  );
}
```

## Related

- [Strata Documentation](https://strata.game) - Full documentation
- [Strata Core](https://github.com/strata-game-library/core) - Main library
- [Capacitor Plugin](https://github.com/strata-game-library/capacitor-plugin) - Capacitor version

## License

MIT © [Jon Bogaty](https://github.com/jbcom)

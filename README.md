# @jbcom/strata-react-native-plugin

React Native plugin for [Strata 3D](https://github.com/jbcom/nodejs-strata) - cross-platform input, device detection, and haptics for mobile games.

> ⚠️ **Status: In Development** - This plugin is not yet functional. See [issues](https://github.com/jbcom/nodejs-strata-react-native-plugin/issues) for roadmap.

## Planned Features

- **Device Detection**: Identify device type (phone, tablet, foldable)
- **Input Handling**: Unified touch, keyboard, and gamepad input
- **Haptic Feedback**: Cross-platform vibration with intensity control
- **Safe Area**: Handle notches and system UI
- **Orientation**: Track device orientation changes

## Installation

```bash
# Not yet published - coming soon
npm install @jbcom/strata-react-native-plugin
```

## API (Planned)

```typescript
import { 
  useDevice, 
  useInput, 
  useHaptics,
  useControlHints 
} from '@jbcom/strata-react-native-plugin';

function Game() {
  const device = useDevice();
  const input = useInput();
  const { trigger } = useHaptics();

  // Device info
  console.log(device.type); // 'mobile' | 'tablet' | 'foldable'
  console.log(device.platform); // 'ios' | 'android'

  // Input state
  console.log(input.leftStick); // { x: 0, y: 0 }
  console.log(input.buttons.jump); // boolean

  // Haptic feedback
  trigger({ intensity: 'medium' });
}
```

## Related

- [@jbcom/strata](https://github.com/jbcom/nodejs-strata) - Main library
- [@jbcom/strata-capacitor-plugin](https://github.com/jbcom/nodejs-strata-capacitor-plugin) - Capacitor version (more complete)
- [@jbcom/strata-examples](https://github.com/jbcom/nodejs-strata-examples) - Example applications

## Contributing

Contributions welcome! This plugin needs:

1. Native iOS module (Swift)
2. Native Android module (Kotlin/Java)
3. React Native bridge
4. TypeScript API layer

See issues for specific tasks.

## License

MIT

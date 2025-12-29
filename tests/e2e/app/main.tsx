import React from 'react';
import { createRoot } from 'react-dom/client';
import { useDevice, StrataInputProvider } from '../../../src/index';

const App = () => {
    const device = useDevice();
    const [touchCount, setTouchCount] = React.useState(0);

    return (
        <div>
            <h1>Strata Plugin Showcase</h1>
            <p>Platform: <span id="platform">{device.platform}</span></p>
            <p>Orientation: <span id="orientation">{device.orientation}</span></p>
            <p>Touches: <span id="touch-count">{touchCount}</span></p>
            
            <StrataInputProvider onInput={(snapshot) => setTouchCount(snapshot.touches.length)}>
                <div className="touch-area">
                    Touch me!
                </div>
            </StrataInputProvider>
        </div>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

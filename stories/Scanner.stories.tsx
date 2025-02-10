import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import { Scanner as ScannerComp, IScannerProps, outline, boundingBox, centerText, useDevices } from '../src';

const styles = {
    container: {
        width: 400,
        margin: 'auto'
    },
    controls: {
        marginBottom: 8
    }
};

function Template(args: IScannerProps) {
    const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
    const [tracker, setTracker] = useState<string | undefined>('centerText');

    const [pause, setPause] = useState(false);

    const devices = useDevices();

    function getTracker() {
        return boundingBox;
    }

    return (
        <div style={styles.container}>
            <div style={styles.controls}>
                <select onChange={(e) => setDeviceId(e.target.value)}>
                    <option value={undefined}>Select a device</option>
                    {devices.map((device, index) => (
                        <option key={index} value={device.deviceId}>
                            {device.label}
                        </option>
                    ))}
                </select>
            </div>
            <ScannerComp
                {...args}
                formats={[
                    'qr_code',
                    'micro_qr_code',
                    'rm_qr_code',
                    'maxi_code',
                    'pdf417',
                    'aztec',
                    'data_matrix',
                    'matrix_codes',
                    'dx_film_edge',
                    'databar',
                    'databar_expanded',
                    'codabar',
                    'code_39',
                    'code_93',
                    'code_128',
                    'ean_8',
                    'ean_13',
                    'itf',
                    'linear_codes',
                    'upc_a',
                    'upc_e'
                ]}
                constraints={{
                    deviceId: deviceId
                }}
                onScan={(detectedCodes) => {
                    action('onScan')(detectedCodes);
                }}
                onError={(error) => {
                    console.log(`onError: ${error}'`);
                }}
                components={{
                    tracker: getTracker()
                }}
                allowMultiple={true}
                scanDelay={2000}
            />
        </div>
    );
}

export const Scanner = Template.bind({});

// @ts-ignore
Scanner.args = {};

export default {
    title: 'Scanner'
};

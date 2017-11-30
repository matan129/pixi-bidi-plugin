import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

// noinspection JSUnusedGlobalSymbols
export default [
    {
        input: 'src/main.js',
        output: {
            file: pkg.browser,
            format: 'umd'
        },
        name: 'pixiBidiPlugin',
        plugins: [
            resolve(),
            commonjs()
        ]
    },
    {
        input: 'src/main.js',
        external: [],
        output: [
            {
                file: pkg.main,
                format: 'cjs'
            },
            {
                file: pkg.module,
                format: 'es'
            }
        ]
    }
];

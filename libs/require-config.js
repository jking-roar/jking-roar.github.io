var require = {
    baseUrl: '/',
    paths: {
        react: 'libs/react-0.12.0',
        jquery: 'libs/jquery-1.11.1.min',
        JSXTransformer: 'libs/jsx-require-plugin/JSXTransformer-0.4.0',
        jsx: 'libs/jsx-require-plugin/jsx-0.4.0',
        text: 'libs/require-text-plugin'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        react: {
            exports: 'React'
        }
    },
    jsx: {
        fileExtension: '.jsx'
    }
};
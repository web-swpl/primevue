export default {
    surfaces: {
        ground: '#040d19',
        section: '#040d19',
        card: '#071426',
        overlay: '#071426',
        border: '#0b213f',
        hover: 'rgba(255,255,255,.03)'
    },
    general: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: '1rem',
        fontWeight: 'normal',
        textColor: '#495057',
        textSecondaryColor: '#6c757d',
        borderRadius: '6px',
        maskBg: 'rgba(0, 0, 0, 0.4)',
        transitionDuration: '.2s',
        disabledOpacity: '.6'
    },
    inputText: {
        padding: '.75rem .75rem',
        border: '1px solid #ced4da'
    },
    inputSwitch: {
        width: '3rem',
        height: '1.75rem',
        borderRadius: '30px',
        transitionProperty: 'background-color, color, box-shadow',
        handle: {
            width: '1.250rem',
            height: '1.250rem',
            borderRadius: '50%',
            offBg: '#ffffff',
            onBg: '#ffffff',
        },
        slider: {
            padding: '.25rem',
            offBg: '#ced4da',
            offHoverBg: '#b6bfc8',
            onBg: '#ff0000',
            onHoverBg: '#4F46E5'
        }
    }
}
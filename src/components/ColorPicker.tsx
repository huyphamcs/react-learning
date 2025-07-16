import { useState } from "react";

const ColorPicker = () => {
    const [colorValue, setColorValue] = useState("#ABCDEF");

    interface ColorChangeEvent {
        target: {
            value: string;
        };
    }

    const handleColorChange = (event: ColorChangeEvent) => {
        setColorValue(event.target.value);
    };

    const containerStyle = {
        width: '100%',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center'
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#2d3748',
        marginBottom: '2rem',
        textAlign: 'center' as const,
        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    const colorDisplayStyle = {
        width: '300px',
        height: '300px',
        backgroundColor: colorValue,
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
        border: '3px solid #fff',
        transition: 'all 0.3s ease',
        position: 'relative' as const,
        overflow: 'hidden'
    };

    const colorTextStyle = {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#fff',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '0.5rem 1rem',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)'
    };

    const inputSectionStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '1rem'
    };

    const labelStyle = {
        fontSize: '1.3rem',
        fontWeight: '600',
        color: '#4a5568',
        marginBottom: '0.5rem'
    };

    const inputStyle = {
        width: '80px',
        height: '80px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s ease',
        outline: '3px solid #fff',
        outlineOffset: '3px'
    };

    const hexDisplayStyle = {
        fontSize: '1.1rem',
        fontWeight: '500',
        color: '#718096',
        backgroundColor: '#fff',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontFamily: 'monospace',
        letterSpacing: '1px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>🎨 Color Picker</h1>
            
            <div style={colorDisplayStyle}>
                <p style={colorTextStyle}>
                    Current Color
                </p>
            </div>
            
            <div style={inputSectionStyle}>
                <label style={labelStyle}>Choose your color</label>
                <input 
                    type="color" 
                    value={colorValue} 
                    onChange={handleColorChange}
                    style={inputStyle}
                    onMouseEnter={(e) => (e.target as HTMLInputElement).style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => (e.target as HTMLInputElement).style.transform = 'scale(1)'}
                />
                <div style={hexDisplayStyle}>
                    {colorValue.toUpperCase()}
                </div>
            </div>
        </div>
    );
}

export default ColorPicker
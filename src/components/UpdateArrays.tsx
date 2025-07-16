import { useState } from "react";

const UpdateArrays: React.FC = () => {

    const [food, setFood] = useState(["Banana", "Apple", "Strawberry"]);
    const [inputValue, setInputValue] = useState("");
    
    const handleAddButton = () => {
        if (inputValue.trim()) {
            setFood([...food, inputValue.trim()]);
            setInputValue("");
        }
    }

    const handleRemove = (index: number) => {
        setFood(food.filter((_, i) => i !== index));
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddButton();
        }
    }

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        color: '#fff'
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        textAlign: 'center' as const,
        marginBottom: '2rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        color: '#fff'
    };

    const listContainerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '15px',
        padding: '1.5rem',
        marginBottom: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(10px)'
    };

    const listStyle = {
        listStyle: 'none',
        padding: '0',
        margin: '0'
    };

    const listItemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        marginBottom: '0.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        fontSize: '1.2rem',
        color: '#2d3748',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        border: '1px solid #e2e8f0'
    };

    const removeButtonStyle = {
        backgroundColor: '#e53e3e',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '0.5rem 1rem',
        fontSize: '0.9rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 4px rgba(229, 62, 62, 0.3)'
    };

    const inputSectionStyle = {
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem',
        flexWrap: 'wrap' as const
    };

    const inputStyle = {
        flex: '1',
        minWidth: '200px',
        padding: '1rem',
        fontSize: '1.1rem',
        border: '2px solid #e2e8f0',
        borderRadius: '10px',
        outline: 'none',
        transition: 'border-color 0.2s ease',
        backgroundColor: '#fff',
        color: '#2d3748'
    };

    const addButtonStyle = {
        backgroundColor: '#38a169',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 12px rgba(56, 161, 105, 0.3)',
        whiteSpace: 'nowrap' as const
    };

    const emptyStateStyle = {
        textAlign: 'center' as const,
        color: '#718096',
        fontSize: '1.1rem',
        fontStyle: 'italic',
        padding: '2rem'
    };

    return(
        <div style={containerStyle}>
           <h1 style={titleStyle}>🍎 Food List Manager</h1>
           
           <div style={listContainerStyle}>
                {food.length === 0 ? (
                    <div style={emptyStateStyle}>
                        No food items yet. Add some below! 🥗
                    </div>
                ) : (
                    <ul style={listStyle}>
                        {food.map((item, index)=>(
                            <li 
                                key={index} 
                                style={listItemStyle}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                                }}
                            >
                                <span>{item}</span>
                                <button 
                                    onClick={() => handleRemove(index)}
                                    style={removeButtonStyle}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#c53030';
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#e53e3e';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
           </div>

           <div style={inputSectionStyle}>
                <input
                    type="text"
                    style={inputStyle}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a food item..."
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                <button 
                    onClick={handleAddButton}
                    style={addButtonStyle}
                    disabled={!inputValue.trim()}
                    onMouseEnter={(e) => {
                        if (!e.currentTarget.disabled) {
                            e.currentTarget.style.backgroundColor = '#2f855a';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#38a169';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Add Food
                </button>
           </div>
        </div>
    );
};

export default UpdateArrays;
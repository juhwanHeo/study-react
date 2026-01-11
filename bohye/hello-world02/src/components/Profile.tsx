const titleStyle = {
    color: '#2c3e50',
    marginBottom: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    borderBottom: '3px solid #3498db',
    paddingBottom: '10px'
};

const textStyle = {
    fontSize: '18px',
    color: '#34495e',
    margin: '15px 0',
    padding: '8px 0',
    borderLeft: '4px solid #3498db',
    paddingLeft: '15px',
    lineHeight: '1.6'
};

export const Profile = () => {
    return (
        <div style={{
            maxWidth: '500px',
            margin: '50px auto',
            padding: '30px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
            <h1 style={titleStyle}>Profile</h1>
            <p style={textStyle}>Name: Bohye</p>
            <p style={textStyle}>Age: 32</p>
            <p style={textStyle}>Birthday: 1995/11/06</p>
        </div>
    )
}
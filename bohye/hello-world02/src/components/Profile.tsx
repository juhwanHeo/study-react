export const Profile = () => {
    return (
        <div style={{
            maxWidth: '500px',
            margin: '50px auto',
            padding: '30px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                color: '#2c3e50',
                marginBottom: '20px',
                fontSize: '32px',
                fontWeight: 'bold',
                textAlign: 'center',
                borderBottom: '3px solid #3498db',
                paddingBottom: '10px'
            }}>Profile</h1>
            <p style={{
                fontSize: '18px',
                color: '#34495e',
                margin: '15px 0',
                padding: '8px 0',
                borderLeft: '4px solid #3498db',
                paddingLeft: '15px',
                lineHeight: '1.6'
            }}>Name: Bohye</p>
            <p style={{
                fontSize: '18px',
                color: '#34495e',
                margin: '15px 0',
                padding: '8px 0',
                borderLeft: '4px solid #3498db',
                paddingLeft: '15px',
                lineHeight: '1.6'
            }}>Age: 32</p>
            <p style={{
                fontSize: '18px',
                color: '#34495e',
                margin: '15px 0',
                padding: '8px 0',
                borderLeft: '4px solid #3498db',
                paddingLeft: '15px',
                lineHeight: '1.6'
            }}>Birthday: 1995/11/06</p>
        </div>
    )
}
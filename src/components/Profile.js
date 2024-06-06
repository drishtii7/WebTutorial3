import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent, Avatar, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

/*Redirects user to Profile Page and displays FirstName, LastName and Email*/
function Profile() {
    const location = useLocation();
    const { firstName, lastName, email } = location.state || { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };

    return (
        <Container maxWidth="lg">
            <br></br>
            <Typography variant="h4" gutterBottom sx={{ color: deepPurple[500] }}>
                Welcome to your profile!
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ width: '100%', boxShadow: 3 }}>
                    <CardContent>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 80, height: 80 }}>
                                    {firstName.charAt(0)}{lastName.charAt(0)}
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" component="div">
                                    {firstName} {lastName}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                                    {email}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 4 }}>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="body1" sx={{ fontSize: '1.5rem' }}><strong>First Name:</strong> {firstName}</Typography>
                                <Typography variant="body1" sx={{ fontSize: '1.5rem' }}><strong>Last Name:</strong> {lastName}</Typography>
                                <Typography variant="body1" sx={{ fontSize: '1.5rem' }}><strong>Email:</strong> {email}</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default Profile;

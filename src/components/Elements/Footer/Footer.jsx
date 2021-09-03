import React from 'react';


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div>
                <Container maxWidth="x1" className={classes.container}>
                    <Typography variant="h5" component={Link} to="/">
                        ReactShop
                    </Typography>
                    <Typography component="span">
                        Copyright &copy; {new Date().getFullYear()}.
                    </Typography>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
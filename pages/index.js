import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import UAParser from 'ua-parser-js';
import { useState } from "react";
import Input from 'react-phone-number-input/input'
import { PhoneNumberInput } from "../components/PhoneNumberInput";
import { CountrySelect } from "../components/CountrySelect";
import { Button } from "@mui/material";

export default function Home({ isMobile }) {

    const [phoneFormatted, setPhoneFormatted] = useState('');
    const [country, setCountry] = useState(null);

    const handleOpen = () => {
        const queries = `phone=${encodeURIComponent(phoneFormatted)}&text&app_absent=0`;
        if(!country) {
            alert('Select a country');
            return
        }
        location.assign(isMobile ? `whatsapp://send/?${queries}` : `https://web.whatsapp.com/send?${queries}`)
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Container maxWidth="lg">
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        WSapp Me!
                    </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" style={{marginTop: '64px '}}>
                <Typography variant="h6" align="center">
                    Send a WSapp without saving the number in your contacts!
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                    <div style={{ display: 'flex', maxWidth: '400px' }}>
                        <CountrySelect onCountrySelected={setCountry} />
                        <Input
                            country={country}
                            inputComponent={PhoneNumberInput}
                            placeholder="Enter phone number"
                            value={phoneFormatted}
                            onChange={setPhoneFormatted}/>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                    <Button variant="contained" color='secondary' onClick={handleOpen}>Start Chatting</Button>
                </div>
                <Typography align="center" style={{ marginTop: '24px' }}>
                    We do not collect any entered data. You can consult the source code <Typography align="center" component="a" target="_blank" href="https://github.com/williamsantc/whatsapp-send">here</Typography>.
                </Typography>

            </Container>
        </>
    )
}

export const getServerSideProps = ({ req }) => {
    const userAgent =  req.headers['user-agent'];
    const parser = new UAParser(userAgent);
    const isMobile = ['iOS', 'Android'].includes(parser.getOS().name)
    return {
        props: {
            isMobile,
        }
    }
}

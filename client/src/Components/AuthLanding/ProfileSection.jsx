import * as React from "react"
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Button } from "@mui/material";
const ProfileSection = () => {
    return (
        <div>
            <div className="listing-container card-shadow flex-center-center">
                <Avatar sx={{ bgcolor: deepOrange[500],width:100,height:100}} className="profile-avtar">N</Avatar>
                <span className="font-secondary subtitle-font">@202001145</span>
                <span className="font-secondary margin-top-2rem subtitle-font">Harsh Prajapati</span>
                <div className="margin-top-2rem flex-center-center">
                    <span className="font-secondary subtitle-font">Contest participated : 8</span>
                    <span className="font-secondary subtitle-font">Question solved : 12</span>
                </div>
                <Button style={{marginTop:'5rem'}} variant="contained" className="margin-top-2rem button-font">Logout</Button>
            </div>
        </div>
    )
}

export default ProfileSection;
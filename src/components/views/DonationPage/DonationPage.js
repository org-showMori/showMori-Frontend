import React, {useEffect} from 'react';

function DonationPage(props) {

    const currentDonateInfo = props.match;
    const sPostId = currentDonateInfo.post_id;
    const sDate = currentDonateInfo.selected_date;
    const sMoney = currentDonateInfo.selected_money;

    
    useEffect(()=> {
        console.log(currentDonateInfo);
        
    
    }, []);


    return (
        <div>asdf</div>
    );
}

export default DonationPage;
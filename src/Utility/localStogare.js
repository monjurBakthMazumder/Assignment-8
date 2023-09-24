const getSaveDonation = () => {
    const getDonation = localStorage.getItem("donation");
    if(getDonation){
        return JSON.parse(getDonation)
    }
    return [];
}
    let have;
const setDonation = id => {
    const getDonation = getSaveDonation();
    have = getDonation.find(data=> data === id)
    if(!have){
        getDonation.push(id);
        localStorage.setItem("donation", JSON.stringify(getDonation))
    }
}

export {getSaveDonation, setDonation, have}
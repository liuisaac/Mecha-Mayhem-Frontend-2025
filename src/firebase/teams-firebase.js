import { db, doc, getDoc, updateDoc } from "@/config/firebaseConfig.mjs";

const filteredTeamsRef = doc(db, "2025", "teams-selected-for-interview");

// validates team is a team selected for an interview - using teamID (e.g. 123456)
export const validateSelectedTeamID = async (teamID) => {
    const filteredTeamsDoc = await getDoc(filteredTeamsRef);
    const filteredTeams = filteredTeamsDoc.data();

    let isSelectedTeam = false;
    let selectedTeamData = {};

    console.log(filteredTeams);
    
    for (const [key, values] of Object.entries(filteredTeams)) {
        if (key === teamID) {
            isSelectedTeam = true;
            selectedTeamData = {[key]: values};
        }
    }

    return {isSelectedTeam, selectedTeamData};
}

// gets a team selected for an interview based on teamID
export const getSelectedTeam = async (teamID) => {
    try {
        const { isSelectedTeam, selectedTeamData } = await validateSelectedTeamID(teamID);
        if (isSelectedTeam) {
            return selectedTeamData;
        } else {
            return undefined;
        }
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

// when a team wants to change their status
export const changeSelectedTeamStatus = async (teamID, newStatus) => {
    console.log(teamID);
    try {
        const { isSelectedTeam, selectedTeamData } = await validateSelectedTeamID(teamID);
        if (isSelectedTeam) {
            Object.values(selectedTeamData)[0].ready = newStatus;
            console.log(selectedTeamData);
            await updateDoc(filteredTeamsRef, selectedTeamData);
            return selectedTeamData;
        } else {
            return undefined; // you have not been selected for an interview
        }
    } catch (error) {
        console.log(error);
        return undefined;
    }
}
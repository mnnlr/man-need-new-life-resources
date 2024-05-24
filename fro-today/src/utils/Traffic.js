import UserPreferences from '../fakeData/UserPreferences';
import LanguageData from '../fakeData/LanguageData';

const languageCounts = {};

UserPreferences.forEach(preference => {
    preference.PreferdLanguagesId.forEach(languageId => {
        if (languageCounts[languageId]) {
            languageCounts[languageId]++;
        } else {
            languageCounts[languageId] = 1;
        }
    });
});

const languageCountsArray = Object.entries(languageCounts).map(([languageId, count]) => ({
    languageId: parseInt(languageId),
    count
}));

const studentTraffic = languageCountsArray.map(language => {
    const languageDetails = LanguageData.find(data => data.id === language.languageId);
    return {
        language: languageDetails.title,
        totalStudents: language.count,
    };
});

export default studentTraffic;
import UserPreferences from '../fakeData/UserPreferences';
import LanguageData from '../fakeData/LanguageData';


const languageData = {};

UserPreferences.forEach(preference => {

    preference.PreferdLanguagesId.forEach(languageId => {

        const languageDetails = LanguageData.find(data => data.id === languageId);

        const totalCost = (languageData[languageDetails.title] || 0) + languageDetails.cost;

        languageData[languageDetails.title] = totalCost;

    });

});

const languageDataArray = Object.entries(languageData).map(([language, cost]) => ({
    language,
    totalCost: cost
}));

languageDataArray.sort((a, b) => b.totalCost - a.totalCost);

export default languageDataArray;
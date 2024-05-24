import { useState } from "react";

        const GeneralSettings = () => {
            const [dark, setDark] = useState(false);
            const darkModeHandler = () => {
                setDark(!dark);
        };
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-[20px]">
            <div className="border border-[black] p-3 rounded" style={{backgroundColor:dark&&'black'}}>
                <h1 className="text-[1.5rem] font-bold  ">Select Mode</h1>
                <button
                onClick={() => darkModeHandler()}
                className="border px-2 py-1 rounded bg-white border-gray-200 dark:bg-gray-900 dark:text-white"
                >
                {
                    dark && "ToSunny" // render sunny when dark is true
                }
                {
                    !dark && "ToMoon" // render moon when dark is false
                }
                </button>
                <h1 className="text-[1.5rem] font-bold  ">Select Timeline</h1>

                <div class="flex items-center mb-4">
                <input
                    checked
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                    for="default-radio-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    New Delhi
                </label>
                </div>
                <div class="flex items-center">
                <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Kolkata
                </label>
               </div>
            </div>
        </div>
    );
}

export default GeneralSettings;
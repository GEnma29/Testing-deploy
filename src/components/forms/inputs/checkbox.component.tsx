import React from 'react'

const CheckBox: React.FC = () => {
    return (
        <div className="relative flex items-start">
            <div className="flex h-6 items-center">
                <input
                    id=""
                    aria-describedby="candidates-description"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
            </div>
            <div className="ml-3 text-sm leading-6">
                <label htmlFor="candidates" className="font-medium text-gray-900">
                    Candidates
                </label>
                <p id="candidates-description" className="text-gray-500">
                    Get notified when a candidate applies for a job.
                </p>
            </div>
        </div>

    )
}

export default CheckBox
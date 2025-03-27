import axios from 'axios'
import config from '../constant/config'


// Get all users
export const GetAllUsers = async authToken => {
    console.log(authToken)
    const response = await axios.get(config.apiUrl + '/user', {
        headers: {
            Authorization: authToken
        },
    })
    const { data } = response
    return data
}

// Get users
export const GetCandidates = async authToken => {
    const response = await axios.get(config.apiUrl + '/user/candidate', {
        headers: {
            Authorization: authToken
        }
    })
    const { data } = response
    return data
}

// Get Candidate by ID
export const GetCandidateByID = async (ID, authToken) => {
    const response = await axios.get(config.apiUrl + '/user/candidate/' + ID, {
        headers: {
            Authorization: authToken
        }
    })
    const { data } = response
    return data || null
}

export const GetProfileByID = async (params) => {
    try {


        const { ID, authToken } = params;
        console.log("api data:", ID, authToken)
        const response = await axios.get(config.apiUrl + '/content/userID', {
            headers: {
                Authorization: authToken
            }
        })
        console.log(response)
        const { data } = response
        return data || null
    }
    catch (error) {
        console.log({ Message: error })

    }
}

export const GetBrands = async (params) => {
    const {ID, title} = params;
    console.log("api data:" , ID, title)
    const response = await axios.get(config.apiUrl + '/brands', {
    
        headers: {
            Authorization: title
        }
    })
    console.log(response)
    const { data } = response
    return data
}

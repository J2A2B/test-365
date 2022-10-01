import axios from 'axios'

const findOneCompany = async (siren) => {
    return await axios.get(`company/find/${siren}`)
}
export default findOneCompany
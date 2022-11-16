
export const apiURL = "https://randomuser.me/api/?results=20"

export const getUsers = async (apiURL:string) => {
    try{
        const data = await fetch(apiURL)
        return await data.json()
    } catch (error) {
        throw new Error ('Unable to fetch user data')
    }
}

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { User, UserApi } from "../types/User"
import { getUsers, apiURL } from "../utils/apiService"

interface UsersDataState {
  users: User[]
  loading: boolean
  error: string
}

const initialState: UsersDataState = {
  users: [] as User[],
  loading: false,
  error: "",
}

export const getUsersData = createAsyncThunk("users/fetchUsers", () => {
  return getUsers(apiURL).then(({results}) => results)
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUsersData.fulfilled, (state, action: PayloadAction<UserApi[]>) => {
      state.users = action.payload
        .map((user: UserApi) => {
          return {
            id: user.id.value,
            firstName: user.name.first,
            lastName: user.name.last,
            username: user.login.username,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            age:user.dob.age,
            city: user.location.city,
            country: user.location.country,
            picture: user.picture.large,
          }
        })

      state.loading = false
    })
    builder.addCase(getUsersData.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message || "Something went wrong"
    })
  },
})

export default userSlice.reducer

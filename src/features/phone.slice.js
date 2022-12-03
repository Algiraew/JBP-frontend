import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    phones: [],
    error: null,
    loading: false
}

export const addPhone = createAsyncThunk('phone/post', async ({ manufacturer, model, resolution, diagonal, density, frequency, ram, rom, name, frequencyCPU, cores, camera, battery, wight, price }, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:4000/phones', {
            method: 'POST',
            body: JSON.stringify({
                manufacturer: manufacturer,
                model: model,
                price: price,
                specification: {
                    display: {
                        resolution: resolution,
                        diagonal: diagonal,
                        density: density,
                        frequency: frequency,
                    },
                    memory: {
                        ram: ram,
                        rom: rom,
                    },
                    processor: {
                        name: name,
                        frequencyCPU: frequencyCPU,
                        cores: cores
                    },
                    camera: camera,
                    battery: battery,
                    wight: wight
                }
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const phone = await res.json()
        if (phone.error) {
            return thunkAPI.rejectWithValue(phone.error)
        }
        return thunkAPI.fulfillWithValue(phone)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const getPhone = createAsyncThunk('phone/get', async ( thunkAPI) => {
    try {
        const res = await fetch('http://localhost:4000/phones')
        const phones = await res.json()
        if (phones.error) {
            return thunkAPI.rejectWithValue(phones.error)
        }
        return thunkAPI.fulfillWithValue(phones)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const phoneSlice = createSlice({
    name: 'phones',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhone.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPhone.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getPhone.fulfilled, (state, action) => {
                state.loading = false
                state.phones = action.payload
            })
            .addCase(addPhone.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(addPhone.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(addPhone.fulfilled, (state, action) => {
                state.phones.push(action.payload)
                state.loading = false
            })
    }
    }
)

export default phoneSlice.reducer
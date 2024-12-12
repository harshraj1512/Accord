import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api";
//  
export const useAuthStore = create((set) => ({
    tasklogs: [],
    tablemonths: [],
    tabledatas: [], 
    error:null,
    isLoading: false,

    tasklog: async() => {
        set({ isLoading:true, error:null })
        try {
            const response = await axios.get(`${API_URL}/tasklogs`);
            set({ isLoading: false, tasklogs: response.data  });
            return response.data;
        } catch (error) {
           set({error: "Error something went Wrong", isLoading: false});
           throw error; 
        }
    },
    tablemonth : async() => {
        set({ isLoading:true, error:null })
        try {
            const response = await axios.get(`${API_URL}/taskmonth`);
            set({ isLoading: false, tablemonths: response.data  });
            return response.data;
        } catch (error) {
           set({error: "Error something went Wrong", isLoading: false});
           throw error; 
        }
    },
    tabledata: async() => {
        set({ isLoading:true, error:null })
        try {
            const response = await axios.get(`${API_URL}/taskdata`);
            set({ isLoading: false, tabledatas: response.data  });
            return response.data;
        } catch (error) {
           set({error: "Error something went Wrong", isLoading: false});
           throw error; 
        }
    }
}))
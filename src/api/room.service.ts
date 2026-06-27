import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://localhost:3000/api",
  	headers: { 'Content-Type': 'application/json' }
});

export interface CreateRoomResponse {
    specialKey: string;
    roomCode: string;
}

export const RoomService = {
    async createRoom(username: string): Promise<CreateRoomResponse> {
        const response = await apiClient.post("/rooms/create", { username });
        return response.data.data; 
    }
};



















































// import { CreateRoomSchema, RoomResponseSchema } from '@/schema/room.schema';
// const apiClient = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   headers: { 'Content-Type': 'application/json' },
// });

// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('accessToken'); // or secure session cookies
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const RoomService = {
//   /**
//    * Creates a room, fetches data, and validates it structurally
//    */
//   async createRoom(username: string) {
//     const response = await apiClient.post('/rooms', { username, clientType: 'web' });
    
//     // PRODUCTION PRO-TIP: Validate the response body instantly.
//     // If the backend changed their data structure, this throws an explicit error 
//     // instead of letting 'undefined' properties silently poison your React components.
//     return RoomResponseSchema.parse(response.data);
//   }
// };


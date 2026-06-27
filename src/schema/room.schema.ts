import { z } from "zod";

export const CreateRoomSchema = z.object({
    username: z.string({ message: "Username must be text" })
               .min(4, "Username must be at least 4 characters long"),
});

export const CreateParticipantSchema = z.object({
	roomCode: z.string().min(8, "Room Code must be at least 8 characters long"),
	username: z.string({ message: "Username must be text" })
               .min(4, "Username must be at least 4 characters long"),
});

export const JoinRoomSchema = z.object({
	specialKey: z.string({})
});

// Schema for a single active collaborator
export const CollaboratorSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(1),
  clientType: z.enum(['web', 'vscode']),
});

export const RoomResponseSchema = z.object({
  roomKey: z.string(),
  createdAt: z.string().datetime(),
  collaborators: z.array(CollaboratorSchema),
});


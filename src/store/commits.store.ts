import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import axios from "axios";

// 1. Define what a single Commit looks like
export interface Commit {
    id: string;
    room_id: string;
    user_id: string;
    user_role: "admin" | "participant" | null;
    code: string;
    file_extension: "html" | "css" | "js" | null;
    type: "document" | "snippet" | null;
    created_at: string;
}

// 2. Update state to hold an array of Commits
interface CommitState {
    commits: Commit[];
}

interface CommitAction {
    fetchCommits: () => Promise<void>;
}

interface CommitStore extends CommitState {
    actions: CommitAction;
}

const useCommitStore = create<CommitStore>((set) => ({
    // Initialize as an empty array
    commits: [],

    // Actions
    actions: {
        fetchCommits: async () => {
            try {
                const response = await axios.get<Commit[]>("http://localhost:3000/api/rooms/commit");
                set({ commits: response.data }); // Save the array directly
            } catch (error) {
                console.error("Failed to fetch commits:", error);
            }
        }
    }
}));

// Hooks for use in components
export const useCommitActions = () => useCommitStore((state) => state.actions);
// In your commits.store.ts
export const useCommits = () => useCommitStore((state) => state.commits);
// Maps the raw array data into camelCase for clean frontend use
// export const useOldCommits = () => useCommitStore(
//     useShallow((state) => 
//         state.commits.map((commit) => ({
//             id: commit.id,
//             roomId: commit.room_id,
//             userId: commit.user_id,
//             userRole: commit.user_role,
//             code: commit.code,
//             fileExtension: commit.file_extension,
//             type: commit.type,
//             createdAt: commit.created_at,
//         }))
//     )
// );
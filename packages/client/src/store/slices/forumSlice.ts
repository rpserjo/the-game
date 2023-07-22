import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TTopicInfo } from '@/types/data-types';

type TForum = {
    forumTopics: TTopicInfo[] | null;
    topicComments: [] | null;
};

export type TState = {
    forum: TForum;
};

const initialState: TState = {
    forum: {
        forumTopics: null,
        topicComments: null,
    },
};

interface IForumService {
    getForumTopics(): Promise<TTopicInfo[]>;
}

const loadForumTopics = createAsyncThunk<TTopicInfo[]>('root/AuthUser', async (_, thunkApi) => {
    const service: IForumService = thunkApi.extra as IForumService;
    return service.getForumTopics();
});

const forumSlice = createSlice({
    name: 'forum',
    initialState,
    reducers: {
        setForumTopics(state, action) {
            state.forum.forumTopics = action.payload;
        },
    },
    extraReducers: builder => {
        /* builder.addCase(loadUser.pending, state => {
            state.isLoaded = false;
            state.isLoading = true;
        });
        builder.addCase(loadUser.rejected, state => {
            state.isLoaded = true;
            state.user = null;
            state.isLoading = false;
        }); */
        builder.addCase(loadForumTopics.fulfilled, (state, action) => {
            const { payload } = action;
            state.forum.forumTopics = payload;
        });
    },
});

export default forumSlice.reducer;
export const { setForumTopics } = forumSlice.actions;

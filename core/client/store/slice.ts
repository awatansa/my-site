import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatList, Message } from "core/commons/types";
import { v4 as uuid } from "uuid";

type InitialState = {
  chatFeed: ChatList,
  temp: {
    newMessage: string
  }
  meta: {
    settings: string
  }
}

const initialState: InitialState = {
  meta: { settings: "" },
  temp: {
    newMessage: ""
  },
  chatFeed: {
    messages: []
  }
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    loadChats(state) {
      state.chatFeed?.messages?.push({
        from: "admin",
        id: uuid(),
        message: "Stored Message",
        time: Date.now().toLocaleString()
      });
    },
    pushMessage(state, action: PayloadAction<Message>) {
      state.chatFeed?.messages?.push(action.payload);
    },
    clearChatHistory(state) {
      state.chatFeed?.messages?.splice(0, state.chatFeed?.messages?.length);
    },
    clearTextBox(state) {
      state.temp.newMessage = "";
    },
    updateTextBox(state, action: PayloadAction<string>) {
      state.temp.newMessage = action.payload;
    }
  }
});

const main = mainSlice.reducer;
export const { loadChats, pushMessage, clearChatHistory, clearTextBox, updateTextBox } = mainSlice.actions;
export default main;

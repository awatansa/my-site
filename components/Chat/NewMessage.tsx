import React, { ChangeEventHandler, FormEventHandler, useCallback } from "react";
import { useDispatch, useSelector } from "../../core/client/store";
import { clearTextBox, pushMessage, updateTextBox } from "../../core/client/store/slice";
import { ApiResponse, Message } from "../../core/commons/types";
import { createMessage } from "../../core/commons/utils";

const NewMessage: React.FC = () => {
  const { newMessage } = useSelector((state) => state.main.temp);
  const dispatch = useDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();

      // create new message object and add to Store
      const clientMessage: Message = createMessage(newMessage, "client");
      dispatch(pushMessage(clientMessage));

      // make api call
      const options: RequestInit = {
        body: JSON.stringify(clientMessage),
        method: "POST",
      };
      const response: ApiResponse = await fetch("/api/user/chat", options).then((result) => result.json());
      if (response.data) {
        dispatch(pushMessage(response.data));
      } else {
        dispatch(pushMessage(createMessage(response.error?.message, "admin")));
      }

      dispatch(clearTextBox());
    },
    [newMessage, dispatch]
  );

  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(updateTextBox(event.currentTarget.value));
  };

  return (
    <form className={"flex p-2 w-full gap-2"} onSubmit={handleSubmit}>
      <input
        className={"p-2 border rounded grow"}
        placeholder={"Type here..."}
        name={"message"}
        onChange={handleInput}
        value={newMessage}
      />
      <button className={"rounded border px-4 py-2"} type={"submit"}>
        Send
      </button>
    </form>
  );
};

export default NewMessage;

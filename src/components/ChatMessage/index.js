import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { Avtar, Clipboard, Retry, ThumbDown, ThumbUp } from "../../assets";

import { formatDate } from "../../helpers/dateHelper";
import {
  addMessageToChatHistory,
  messageList,
  updateChat,
  updateMessageAnswerInChatHistory,
} from "../../redux/slices/chatSlice";
import DataLoader from "../DataLoader";
import SendChatForm from "../SendChatForm";
import TellUsMore from "../chip";
// import { light } from "react-syntax-highlighter/dist/esm/styles/prism";

const ChatMessage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tellUsMore, setTellUsMore] = useState(true);

  const dispatch = useDispatch();
  const selectedChatHistory = useSelector(
    (state) => state.chat.selectedChatHistory
  );

  const chatHistory = useSelector((state) => state.chat.chatHistory);
  console.log("chatHistory: ", chatHistory);

  const { userDetails } = useSelector((state) => state.auth);

  console.log("selectedChatHistory: ", selectedChatHistory);
  useEffect(() => {
    const selectedChat = chatHistory.find(
      (chat) => chat.id === selectedChatHistory?.id
    );
    console.log("selectedChat: ", selectedChat);

    if (
      selectedChat &&
      (!selectedChat.messages || selectedChat.messages.length === 0)
    ) {
      // dispatch(messageList({ chatId: selectedChatHistory.id }));
    }
  }, [dispatch, selectedChatHistory, chatHistory]);

  // const selectedChat = chatHistory.find(
  //   (chat) => chat.id === selectedChatHistory?.id
  // );
  // const messagess = selectedChat?.messages || [];
  // console.log("messages: ", messages);

  const onSubmit = async (inputValue) => {
    // setIsRunning(true);
    // const message_uid = uuidv4();
    // const previousMessage = messages[messages.length - 1];
    // const addNewMessage = {
    //   id: message_uid,
    //   chat_id: selectedChatHistory.id,
    //   message_uid: message_uid,
    //   user_id: userDetails.id,
    //   question: inputValue,
    //   answer: "",
    //   related_questions: [],
    //   created_at: new Date().toISOString(),
    //   updated_at: new Date().toISOString(),
    //   loading: true,
    // };
    // dispatch(
    //   addMessageToChatHistory({
    //     chatId: selectedChatHistory.id,
    //     message: addNewMessage,
    //   })
    // );
    // await dispatch(
    //   updateChat({
    //     chatId: selectedChatHistory.id,
    //     message_uid: message_uid,
    //     prompt: inputValue,
    //     question: previousMessage.question,
    //     answer: previousMessage.answer,
    //   })
    // ).then(async (response) => {
    //   setIsRunning(false);
    //   if (
    //     response.payload.success === "True" ||
    //     response.payload.success === true
    //   ) {
    //     await dispatch(
    //       updateMessageAnswerInChatHistory({
    //         newConversation: false,
    //         chat_uid: null,
    //         chatId: selectedChatHistory.id,
    //         message_uid: message_uid,
    //         answer: response.payload.data.answer,
    //         related_questions: response.payload.data.related_questions,
    //       })
    //     );
    //   }
    // });
  };

  const messages = [
    {
      id: 1,
      created_at: new Date(),
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      created_at: new Date(),
      question: "What is Markdown?",
      answer: `Markdown is a lightweight markup language for creating formatted text using a plain-text editor. 
               Here is an example:
               \n# Heading 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. 
               \n## Heading 2\n\n1. First item\n2. Second item\n3. Third item
               \n### Heading 3\n\n**Bold text** and *italic text*.
               \n> Blockquote: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               \n### Code Block\n\n\`\`\`python\n def hello_world():\n     print("Hello, world!")\n\`\`\`
               \n### Unordered List\n\n- Item 1\n- Item 2\n- Item 3 \n\n\n`,
    },
  ];

  return (
    <div className="w-full px-4 xl:px-0 md:max-w=[800px] xl:max-w-[900px] 2xl:max-w-[1220px] m-auto h-full relative">
      <div className="flex flex-col h-full w-full  ">
        <div className=" h-full pt-10">
          {messages &&
            messages.map((message) => (
              <React.Fragment key={message.id}>
                <div className="mt-[40px]">
                  <div className="media">
                    <img src={Avtar} alt="avtar" />
                    <div className="media-content">
                      <div className="author">
                        {userDetails ? userDetails.full_name : "You"}
                        <span className="posted-time">
                          {formatDate(message.created_at)}
                        </span>
                      </div>
                      <div className="authorchat">
                        <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                          {message.question}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-bot mt-5">
                  <div className="media">
                    <img src={Avtar} alt="avtar" />
                    <div className="media-content">
                      <div className="author text-xl">
                        AI 50
                        <span className="posted-time">
                          {formatDate(message.created_at)}
                        </span>
                      </div>
                      <div className="authorchat markDown">
                        {message.loading ? (
                          <div className="text-center">
                            <DataLoader />
                          </div>
                        ) : (
                          <Markdown
                            children={message.answer}
                            components={{
                              code(props) {
                                const { children, className, node, ...rest } =
                                  props;
                                const match = /language-(\w+)/.exec(
                                  className || ""
                                );
                                return match ? (
                                  <SyntaxHighlighter
                                    {...rest}
                                    PreTag="div"
                                    children={String(children).replace(
                                      /\n$/,
                                      ""
                                    )}
                                    language={match[1]}
                                    // style={light}
                                  />
                                ) : (
                                  <code {...rest} className={className}>
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          />
                        )}{" "}
                      </div>
                      <div className="flex pb-4">
                        <button className="mr-2.5">
                          <ThumbUp />
                        </button>
                        <button className="mr-2.5">
                          <ThumbDown />
                        </button>
                        <button className="mr-2.5">
                          <Clipboard />
                        </button>
                        <button className="mr-2">
                          <Retry />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {message &&
                message?.related_questions &&
                message.related_questions.length > 0 ? (
                  <div className="mt-5">
                    <h2 className="text-2xl font-semibold mb-4">
                      Related Questions{" "}
                    </h2>
                    {message.related_questions.map((question, i) => (
                      <div className="mt-2" key={i}>
                        <div className="border border-[#ddd] p-3 rounded-lg">
                          <button
                            className="flex justify-between w-full hover:bg-gray-100 px-2 rounded-lg text-lg"
                            onClick={() => console.log(question)}
                          >
                            <span className="text-2xl font-medium text-left">
                              {question}
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </React.Fragment>
            ))}

          {tellUsMore && (
            <TellUsMore tellUsMore={tellUsMore} setTellUsMore={setTellUsMore} />
          )}
        </div>
        <SendChatForm isRunning={isRunning} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default ChatMessage;

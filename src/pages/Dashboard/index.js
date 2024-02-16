import { useState } from "react";
import {
  ArchiveIcon,
  Avtar,
  ChatBrandLogo,
  PaperClipIcon,
  SendIcon,
} from "../../assets";
import ChatAccordion from "../../components/ChatAccordion";
import DashboardLayout from "../../layout/DashboardLayout";

const data = [
  {
    id: 1,
    title: "What are the latest tech News Website?",
    answer:
      "TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life. With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.  Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!",
  },
  {
    id: 2,
    title: "How long does it take to download updates?",
    answer:
      "TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life. With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.  Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!",
  },
  {
    id: 3,
    title: "Do I need a designer to use this Admin Theme?",
    answer:
      "TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life. With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.  Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!",
  },
];

const data2 = [
  {
    title: "Help me Pick",
    description: " a gift for my dad who loves fishing",
  },
  {
    title: "Come up with concepts",
    description: "for a retro-style arcade game",
  },
  {
    title: "Help me Pick",
    description: " a gift for my dad who loves fishing",
  },
  {
    title: "Come up with concepts",
    description: "for a retro-style arcade game",
  },
];

export default function Dashboard() {
  const [Chat, setChat] = useState(false);
  console.log("Chat: ", Chat);

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected preventDefault
    setChat(true);
  };

  return (
    <DashboardLayout>
      <div className="max-w-[992px] m-auto h-full relative">
        <div className="flex flex-col h-full w-full  ">
          {Chat && (
            <div className=" h-full">
              {/* Logo  */}
              <div className="flex flex-col items-center mb-6">
                <ChatBrandLogo className="my-6" />
                <h1 className="text-2xl font-semibold">
                  Name, How Can I Help You Today?
                </h1>
              </div>
              {/*  */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {data2?.map((info, i) => (
                  <div className="col-span-1" key={i}>
                    <div className="bg-white rounded-xl border border-[#ccc] p-4">
                      <p className="text-lg font-semibold m-0">{info?.title}</p>
                      <span className="text-lg font-normal opacity-[0.7] mt-2">
                        {info?.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accordian */}
              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-4">
                  How can I assist?
                </h2>
                {data.map((question, i) => (
                  <div className="mt-2" key={question.id}>
                    <ChatAccordion
                      title={question?.title}
                      answer={question?.answer}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {!Chat && (
            <div className=" h-full pt-10">
              {/* user */}
              <div className="">
                <div class="media">
                  <img src={Avtar} alt="avtar" />
                  <div className="media-content">
                    <div class="author">
                      You
                      <span class="posted-time">1min Ago</span>
                    </div>
                    <div class="authorchat">
                      <p>hii </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Chat Bot */}
              <div className="chat-bot mt-5">
                <div class="media">
                  <img src={Avtar} alt="avtar" />
                  <div className="media-content">
                    <div class="author">
                      AI 50
                      <span class="posted-time">1min Ago</span>
                    </div>
                    <div class="authorchat">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum{" "}
                      </p>
                      <ul className="mt-1 ">
                        <li>
                          {" "}
                          <a href="#"> Lorem </a> Ipsum is simply dummy text of
                          the printing and typesetting industry. Lorem Ipsum has
                          been the
                        </li>
                        <li>
                          etraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing softwa
                        </li>

                        <li>
                          etraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing softwa
                        </li>

                        <li>
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passag
                        </li>
                      </ul>

                      <p>
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* chat  Input  */}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-center chat-input">
              <div className={`relative  inputWithIcon w-full mr-5`}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <PaperClipIcon />
                </span>
                <input
                  type="text"
                  className={`pl-10 p-4 border bg-white text-xl  rounded-lg focus:outline-none w-full focus:border-customGreen `}
                  placeholder="Enter a Prompt Here..."
                />
              </div>
              <button className="bg-customGreen rounded-2xl p-3">
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

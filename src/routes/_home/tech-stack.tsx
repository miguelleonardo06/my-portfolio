import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { TechStackIcons } from "@/components/icons";
import { TechStackHandler } from "@/components/tech-stacks-comp";
import { TechStackType } from "@/types/index";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import myPicture from "@/assets/myPicture.png";
export const Route = createFileRoute("/_home/tech-stack")({
  component: TechStackPage,
});

const mockTechStackApi: TechStackType[] = [
  {
    tech_name: "Typescript",
    icon: "typescriptIcon",
    category: "front-end",
    body: "This website is built using TypeScript. I utilize static types and mock data to enhance dynamic features and maintain code reliability.",
  },
  {
    tech_name: "Javascript",
    icon: "javascriptIcon",
    category: "front-end",
    body: "I am proficient in vanilla JavaScript. I can manipulate the DOM, create functional logic, and apply object-oriented programming principles effectively.",
  },
  {
    tech_name: "React JS",
    icon: "reactJsIcon",
    category: "front-end",
    body: "This website is developed using React JS. I use TanStack Router for navigation and have a solid understanding of React’s core concepts to build dynamic, interactive interfaces.",
  },
  {
    tech_name: "Tailwind CSS",
    icon: "tailWindIcon",
    category: "front-end",
    body: "I used Tailwind CSS for styling this website. I am comfortable with utility-first styling and can manage responsive design effectively using Tailwind's built-in features.",
  },
  {
    tech_name: "Shadncn UI",
    icon: "shadcnIcon",
    category: "front-end",
    body: "I am knowledgeable in creating reusable component with shadcn UI and make reusable forms and fields with it.",
  },
  {
    tech_name: "Git Hub",
    icon: "gitHubIcon",
    category: "front-end",
    body: "I am proficient in using GitHub as a version control platform. I gained practical experience working with it during my internship at Hiraya Technology.",
  },
  {
    tech_name: "PHP",
    icon: "phpIcon",
    category: "back-end",
    body: "I have basic knowledge of PHP and can perform standard CRUD operations. While I’m still learning best practices for security, I understand the core functionality of backend development with PHP.",
  },
  {
    tech_name: "HTML",
    icon: "htmlIcon",
    category: "front-end",
    body: "I am proficient in HTML and understand semantic tag structure, ensuring well-organized and accessible web pages.",
  },
  {
    tech_name: "CSS",
    icon: "cssIcon",
    category: "front-end",
    body: "I am skilled in CSS, including layout systems like Flexbox and Grid. I can create fully responsive designs using media queries and other modern CSS techniques.",
  },
  {
    tech_name: "MySQL",
    icon: "mysqlIcon",
    category: "back-end",
    body: "I am knowledgeable in relational databases using MySQL. I understand how to implement primary and foreign keys, and I can define constraints for better data integrity.",
  },
  {
    tech_name: "Postman",
    icon: "postmanIcon",
    category: "back-end",
    body: "I am knowledgeable in testing APIS, using postman and use it in front-end development.",
  },
];

function TechStackPage() {
  return (
    <main className="w-full h-full py-8">
      <Card className="flex flex-col space-y-3 justify-center items-center h-screen bg-primary dark:bg-primary ">
        <img
          src={myPicture}
          className="border-8 h-[50%] w-[80%] sm:h-[60%] sm:w-[45%]  p-4 rounded-full animate-pulse  transition-colors bg-white dark:bg-primary "
        />

        <div className="my-2 flex flex-col space-y-2 ">
          <h1 className="font-bold text-4xl text-slate-500 dark:text-slate-700">
            Miguel Leonardo
          </h1>
          <div className="flex justify-center gap-[5px]">
            {mockTechStackApi.map((icon) => {
              const TechstackIcon =
                TechStackIcons[icon.icon as keyof typeof TechStackIcons];

              return <img src={TechstackIcon} className="h-6 w-6" />;
            })}
          </div>
        </div>
      </Card>
      <div>
        <TechStackHandler techData={mockTechStackApi} />
      </div>
      <div
        className="w-full py-10 px-10 bg-primary mt-12 absolute left-0"
        id="about_section"
      >
        <h1 className="text-slate-50 font-bold text-3xl dark:text-black">
          FOR INQURIES
        </h1>
        <p className="text-muted-foreground">
          You can contact me with these platform:
        </p>
        <div className="mt-4 flex gap-2">
          <a href="https://www.facebook.com/miguel.leonaleudo" target="_blank">
            <Button
              variant="outline"
              className="hover:bg-[#1877F2] outline-none border-none *:hover:text-white  *:hover:animate-bounce "
            >
              <Icons.facebook />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-leonardo-226a41346/"
            target="_blank"
          >
            <Button
              variant="outline"
              className="hover:bg-[#0a66c2] outline-none border-none *:hover:text-white  *:hover:animate-bounce "
            >
              <Icons.linkin />
            </Button>
          </a>
        </div>
        <p className="mt-3 text-muted-foreground">More options:</p>
        <div className="my-2 grid sm:flex gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-white dark:bg-black border w-fit *:hover:animate-ping">
              <Icons.phone height="16px" width="16px" />
            </div>
            <span className="text-white dark:text-black text-sm font-thin">
              0927 521 0697
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-white dark:bg-black border w-fit *:hover:animate-ping">
              <Icons.mail height="16px" width="16px" />
            </div>
            <span className="text-white dark:text-black text-sm font-thin">
              miguelleonardo.basc@gmail.com
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

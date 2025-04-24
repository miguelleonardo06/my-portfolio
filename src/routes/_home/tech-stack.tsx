import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { TechStackIcons } from "@/components/icons";
import { TechStackHandler } from "@/components/tech-stacks-comp";
import { TechStackType } from "@/types/index";
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
];

function TechStackPage() {
  return (
    <main className="p-4">
      <Card className="flex flex-col space-y-3 justify-center items-center h-screen bg-primary dark:bg-primary ">
        <div className="animate-pulse bg-red-500  transition-colors duration-3000 p-6 rounded-full">
          <img src="vite.svg" className="border-8 h-60 p-4 rounded-full" />
        </div>
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
    </main>
  );
}

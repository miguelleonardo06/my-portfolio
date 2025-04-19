import { createFileRoute } from "@tanstack/react-router";
import myPicture from "@/assets/miguel_reshape.png";
import { Icons } from "@/components/icons";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { OverviewInfoType } from "@/types/";
export const Route = createFileRoute("/_home/personal")({
  component: PersonalPage,
});

function PersonalPage() {
  function overviewInfo({ title, body, icon }: OverviewInfoType) {
    const IconComponent = Icons[icon as keyof typeof Icons];

    return (
      <Card className="py-2">
        <CardContent>
          <CardTitle className="mb-2 fancy-font font-normal text-xl flex items-center gap-2">
            {IconComponent && <IconComponent height="18px" width="18px" />}
            {title}
          </CardTitle>
          <CardDescription className="font-thin">{body}</CardDescription>
        </CardContent>
      </Card>
    );
  }
  return (
    <main className="h-full w-full grid sm:grid-cols-2 py-10">
      <div className="bg-primary rounded-xl h-[100%] relative">
        <img
          src={myPicture}
          className="absolute left-[20%] min-h-full max-h-[100%]"
        />
      </div>
      <div className="pl-4 flex-col space-y-4">
        <div>
          {overviewInfo({
            title: "My Background",
            body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            quos! Velit impedit eum, debitis mollitia sapiente labore
            voluptatem, rerum voluptatibus a voluptate eos. Ipsum rerum placeat
            ipsa! Beatae, placeat eligendi.`,
            icon: "circleUser",
          })}
        </div>
        <div>
          {overviewInfo({
            title: "My Education",
            body: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            quos! Velit impedit eum, debitis mollitia sapiente labore
            voluptatem, rerum voluptatibus a voluptate eos. Ipsum rerum placeat
            ipsa! Beatae, placeat eligendi.`,
            icon: "bookOpenText",
          })}
        </div>
        <div>
          {overviewInfo({
            title: "My Dream",
            body: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            quos! Velit impedit eum, debitis mollitia sapiente labore
            voluptatem, rerum voluptatibus a voluptate eos. Ipsum rerum placeat
            ipsa! Beatae, placeat eligendi.`,
            icon: "cloud",
          })}
        </div>
      </div>
    </main>
  );
}

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { aboutMeMock } from "@/mock/aboutMe";
import { Button } from "./ui/button";
import { Icons } from "./icons";
export function MoreAboutMe() {
  return (
    <Tabs defaultValue="Project">
      <TabsList>
        <TabsTrigger value="Project">Project</TabsTrigger>
        <TabsTrigger value="Hobby">Hobby</TabsTrigger>
        <TabsTrigger value="Talent">Talent</TabsTrigger>
      </TabsList>
      <TabsContent value="Project">
        <div className="w-full sm:grid grid-cols-3 gap-3 ">
          {aboutMeMock
            .filter((aboutMe) => aboutMe.category == "Project")
            .map((info, index) => {
              const AboutIcon = Icons[info.icon as keyof typeof Icons];
              return (
                <Card className="pt-6 pb-2 my-4" key={index}>
                  <CardContent className="space-y-2">
                    <CardTitle className="flex gap-2">
                      <AboutIcon height="18px" width="18px" />
                      <h1>{info.title}</h1>
                    </CardTitle>
                    <CardDescription className="mt-4">
                      <p>{info.body}</p>
                      {info.view && (
                        <div className="flex justify-end">
                          <Button className="mt-4 px-10" asChild>
                            <a href={info.view} target="_blank">
                              View
                            </a>
                          </Button>
                        </div>
                      )}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </TabsContent>
      <TabsContent value="Hobby">
        <div className="w-full sm:grid grid-cols-3 gap-3 ">
          {aboutMeMock
            .filter((aboutMe) => aboutMe.category == "Hobby")
            .map((info, index) => {
              const HobbyIcon = Icons[info.icon as keyof typeof Icons];
              return (
                <Card className="pt-6 pb-2 my-4" key={index}>
                  <CardContent>
                    <CardTitle>{info.title}</CardTitle>
                    <CardDescription className="flex justify-center items-center my-4">
                      <HobbyIcon className="h-full w-full" />
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </TabsContent>
      <TabsContent value="Talent">
        <div className="w-full sm:grid grid-cols-3 gap-3 ">
          {aboutMeMock
            .filter((aboutMe) => aboutMe.category == "Talent")
            .map((info, index) => {
              const TalentIcon = Icons[info.icon as keyof typeof Icons];
              return (
                <Card className="pt-6 pb-2 my-4" key={index}>
                  <CardContent>
                    <CardTitle className="flex items-center gap-2">
                      <TalentIcon height="18px" width="18px" />
                      <h1>{info.title}</h1>
                    </CardTitle>
                    <CardDescription className="mt-4">
                      {info.body}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </TabsContent>
    </Tabs>
  );
}

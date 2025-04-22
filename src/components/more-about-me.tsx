import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { AboutMeType } from "@/types/index";
export function MoreAboutMe() {
  const aboutMeMock: AboutMeType[] = [
    {
      category: "Project",
      title: "Personal Web Porfolio",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
    {
      category: "Project",
      title: "Car Rental",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
    {
      category: "Project",
      title: "Dental Reservation and Information Management",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
    {
      category: "Hobby",
      title: "Online Games",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
    {
      category: "Hobby",
      title: "Sleeping",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
    {
      category: "Hobby",
      title: "Watching Movies",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
    {
      category: "Talent",
      title: "Playing Guitar",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
    {
      category: "Talent",
      title: "Cooking",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
    {
      category: "Talent",
      title: "Driving",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vel itaque voluptate, asperiores voluptatem eius iste debitis repellat laborum cupiditate minima obcaecati similique doloremque accusamus nobis id possimus. Eos, odit.",
    },
  ];
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
            .map((info, index) => (
              <Card className="py-2" key={index}>
                <CardContent>
                  <CardTitle>{info.title}</CardTitle>
                  <CardDescription>{info.body}</CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
      </TabsContent>
      <TabsContent value="Hobby">
        <div className="w-full sm:grid grid-cols-3 gap-3 ">
          {aboutMeMock
            .filter((aboutMe) => aboutMe.category == "Hobby")
            .map((info, index) => (
              <Card className="py-2" key={index}>
                <CardContent>
                  <CardTitle>{info.title}</CardTitle>
                  <CardDescription>{info.body}</CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
      </TabsContent>
      <TabsContent value="Talent">
        <div className="w-full sm:grid grid-cols-3 gap-3 ">
          {aboutMeMock
            .filter((aboutMe) => aboutMe.category == "Talent")
            .map((info, index) => (
              <Card className="py-2" key={index}>
                <CardContent>
                  <CardTitle>{info.title}</CardTitle>
                  <CardDescription>{info.body}</CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

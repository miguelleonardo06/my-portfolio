import { FilterTechStack } from "./filterTech";
import { TechStackType } from "@/types/index";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { TechStackIcons } from "./icons";
import { useState } from "react";
type TechStackHandlerProp = {
  techData: TechStackType[];
};
export function TechStackHandler({ techData }: TechStackHandlerProp) {
  const [filterTech, setFilterTech] = useState<string | null>(null);

  return (
    <main>
      <div className="flex justify-end my-4">
        <FilterTechStack setFilterTech={setFilterTech} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {filterTech && filterTech?.length > 0
          ? techData
              ?.filter((data) => data.category == filterTech)
              .map((item) => {
                const TechstackIcon =
                  TechStackIcons[item.icon as keyof typeof TechStackIcons];
                return (
                  <Card key={item.tech_name}>
                    <CardContent className="py-4 ">
                      <div className="w-full flex justify-center">
                        <img src={TechstackIcon} className="h-40  w-40 mb-3" />
                      </div>
                      <CardTitle className="font-semibold text-xl mb-2">
                        {item.tech_name.replace(/_/g, " ")}
                      </CardTitle>
                      <CardDescription className="text-justify">
                        {item.body}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })
          : techData.map((item) => {
              const TechstackIcon =
                TechStackIcons[item.icon as keyof typeof TechStackIcons];
              return (
                <Card key={item.tech_name}>
                  <CardContent className="py-4">
                    <div className="w-full flex justify-center">
                      <img src={TechstackIcon} className="h-40  w-40 mb-3" />
                    </div>
                    <CardTitle className="font-semibold text-xl text-center mb-2">
                      {item.tech_name.replace(/_/g, " ")}
                    </CardTitle>
                    <CardDescription>{item.body}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
      </div>
    </main>
  );
}

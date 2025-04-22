import { createFileRoute } from "@tanstack/react-router";
import { Icons } from "@/components/icons";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { OverviewInfoType } from "@/types/";
import { SlideShowCarousel } from "@/components/slideShowCarousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/_home/personal")({
  component: PersonalPage,
});

function PersonalPage() {
  const [openModalKey, setOpenModalKey] = useState<string | null>(null);

  function overviewInfo({ title, body, icon }: OverviewInfoType) {
    const IconComponent = Icons[icon as keyof typeof Icons];
    const isModalOpen = openModalKey === title;

    return (
      <Card className="py-2">
        <CardContent>
          <CardTitle className="mb-2 fancy-font font-normal text-xl flex items-center gap-2">
            {IconComponent && <IconComponent height="18px" width="18px" />}
            {title}
          </CardTitle>
          <CardDescription className="font-thin inline">
            <p>{body.substring(1, 180) + "..."}</p>
            <Button
              className="sm:mt-2"
              onClick={() => {
                setOpenModalKey(title);
              }}
            >
              See More
            </Button>
          </CardDescription>
        </CardContent>

        <SeeMoreModal
          isModalOpen={isModalOpen}
          setModalOpen={() => setOpenModalKey(null)}
          title={title}
          body={body}
        />
      </Card>
    );
  }
  return (
    <main className="h-full w-full grid sm:grid-cols-2 py-10">
      <SlideShowCarousel slideShowImages={["myPicture", "myPicture2"]} />
      <div className="pl-4 flex-col space-y-4">
        <div>
          {overviewInfo({
            title: "My Background",
            body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            quos! Velit impedit eum, debitis mollitia sapiente labore
            voluptatem, rerum voluptatibus a voluptate eos. Ipsum rerum placeat
            ipsa! Beatae, placeat eligendi.... `,
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

type SeeMoreModalProp = {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  body: string;
};
function SeeMoreModal({
  isModalOpen,
  setModalOpen,
  title,
  body,
}: SeeMoreModalProp) {
  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{body}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

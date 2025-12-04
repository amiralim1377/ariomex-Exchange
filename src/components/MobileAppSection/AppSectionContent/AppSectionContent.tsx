import AppContentDownloadBtn from "../AppContentDownloadBtn/AppContentDownloadBtn";
import AppContentQRCode from "../AppContentQRCode/AppContentQRCode";

export default function AppSectionContent() {
  return (
    <div className="space-y-8 flex flex-col items-center lg:items-start">
      <h2 className="text-md  lg:text-3xl text-foreground">
        با اطمینان معامله کنید، در هر زمان و هر مکان
      </h2>
      <p className=" text-base  lg:text-xl text-muted-foreground">
        هر آنچه از نسخه دسکتاپ انتظار دارید.
      </p>
      <AppContentQRCode />
      <AppContentDownloadBtn />
    </div>
  );
}

import Image from "next/image";

type TrackInfoProps = {
  imageSrc: string;
  songName: string;
  songArtist: string;
};

function TrackInfo() {
  return (
    <div className="flex flex-1 gap-6">
      <div className="h-16">
        <Image
          alt=""
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
          className="block w-auto h-full object-cover rounded-sm"
          width={325}
          height={325}
        />
      </div>
      <div className="flex flex-col items-start -mt-1 justify-center">
        <p className="text-gray-200 text-base font-normal p-0 m-0">
          Song Title Name
        </p>
        <p className="text-gray-200/75 text-sm font-medium p-0 m-0">Artist</p>
      </div>
    </div>
  );
}

export { TrackInfo };

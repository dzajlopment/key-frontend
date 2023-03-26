export const Key = (props: { name: string; takenBy: string | null }) => {
  return (
    <a href={ `/key/${props.name}` }>
      <div
        className="flex flex-col items-center cursor-pointer"
      >
        <div
          className={`h-[50px] w-[100px] ${
            props.takenBy === null ? "bg-[#9FE664]" : "bg-[#EA8A83]"
          } relative rounded-lg text-lg font-semibold text-[#212121]`}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {props.name}
          </span>
        </div>

        {props.takenBy === null ? (
          <></>
        ) : (
          <span className="text-xs">{props.takenBy}</span>
        )}
      </div>
    </a>
  );
};

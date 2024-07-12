const Tag = ({ tag }: { tag: string }) => {
  if (!tag) return null;

  return (
    <div className="text-white hover:text-black-300 bg-green-900 hover:bg-green-700 px-2 py-1 rounded-md cursor-pointer">
      {tag}
    </div>
  );
};

export default Tag;

import TreeNode from "./TreeNode";

const Tree = ({ tree }) => {
  return (
    <>
      <div>
        {tree.map((node) => (
          <TreeNode node={node} key={node.key} />
        ))}
      </div>
    </>
  );
};

export default Tree;

export const Ratings = ({ count }: { count: number }) => {
  return (
    <ul className="ratings my-2 text-muted">
      {Array.from({ length: count }, (v, i) => i).map((val) => {
        return (
          <li key={val} className="active">
            <i className="fa fa-star"></i>
          </li>
        );
      })}
    </ul>
  );
};

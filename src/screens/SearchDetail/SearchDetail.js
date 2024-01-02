import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import ComponentSearchDetail from "../../components/Search/ComponentSearchDetail";

export default function SearchDetail() {
  const { selected } = useSelector((state) => state.search);

  return (
    <>
      {!Object.keys(selected).length ? (
        <Loader />
      ) : (
        <ComponentSearchDetail selected={selected} />
      )}
    </>
  );
}

import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}- Real Tech`;
    }, [title]);
};

export default useTitle;

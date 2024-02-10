import { list, check, todo, home } from "./icons";

const menu = [
    {
        id: 1,
        title: "All Tasks",
        icon: home,
        link: "/",
    },
    {
        id: 2,
        title: "Important!",
        icon: list,
        link: "/important",
    },
    {
        id:3,
        title: "Completed!",
        icon: check,
        link: "/completed",
    },
    {
        id:4,
        title: "Do it now",
        icon: todo,
        link: "/incomplete",
    },
];

export default menu;
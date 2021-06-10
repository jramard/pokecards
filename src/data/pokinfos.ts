export interface Pokinfo {
    title: string;
    subtitle: string;
    content: string;
    id: number;
}

const pokinfos: Pokinfo[] = [
    {
        title: "Pikachu & Carapuce",
        subtitle: "Sed a bibendum sapien",
        content:
            "Nam ac felis sit amet nisi euismod auctor a vel urna. In a hendrerit sapien. Fusce sem mi, elementum vitae nulla a, venenatis iaculis quam.",
        id: 1,
    },
    {
        title: "Jolteon",
        subtitle: "Quisque dui erat",
        content:
            "Nullam luctus vitae est id congue. Nam condimentum ex vel blandit fermentum. Nam velit arcu, varius nec aliquam vel, venenatis et nisl.",
        id: 2,
    },
    {
        title: "Totodile",
        subtitle: "Morbi ultrices quis",
        content:
            "Curabitur porttitor tincidunt magna in congue. Nam aliquam, tortor non sagittis euismod, odio purus faucibus nisl, non congue nibh elit id diam.",
        id: 3,
    },
];

export const getPokinfos = () => pokinfos;

export const getPokinfo = (id: number) => pokinfos.find(i => i.id === id);

export const getPokimage = (id: number) => {
    return require(`../../resources/pokimages/pokimage${id}.jpg`);
};

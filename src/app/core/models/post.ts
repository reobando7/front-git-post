export interface Post{
    id: Number;
    img: String;
    description: String;
    topic: String;
    title: String;
    fk_author: String;
    date: String;
    name_authors ?: String;
}
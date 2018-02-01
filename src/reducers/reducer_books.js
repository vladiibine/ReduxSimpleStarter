let index =  0;
export default function () {

    console.log('reducer_books default called, and index was '+index);
    console.log(arguments);

    const original_list = [
        { title: "Javascript: The Good Parts", pages: 222},
        { title: "Harry Potter", pages: 122},
        { title: "THe Dark Tower", pages: 322},
        { title: "Eloquent Ruby", pages: 139},
        { title: "Javascript: The Bad Parts", pages: 991},
    ];

    original_list.push({title: 'Random title' + index++});

    return original_list;
}
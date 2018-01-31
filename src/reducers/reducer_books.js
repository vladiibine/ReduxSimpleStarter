let index =  0;
export default function () {

    console.log('reducer_books default called, and index was '+index);

    const original_list = [
        { title: "Javascript: The Good Parts"},
        { title: "Harry Potter"},
        { title: "THe Dark Tower"},
        { title: "Eloquent Ruby"},
        { title: "Javascript: The Bad Parts"},
    ];

    original_list.push({title: 'Random title' + index++});

    return original_list;
}
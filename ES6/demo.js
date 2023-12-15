let arr = [1,4,-3,6,9,10,20,8]

// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).
const newArr = [];
    arr.map(number =>{
    if (number > 5){
        return newArr.push(number);
    }
});

console.log("Mảng mới là: " + newArr);

// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.

const sum = arr.reduce((a,b) => a + b, 0);

console.log("Tổng các phần tử trong mảng là: " + sum);

// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).

let x = arr.some(number => number === 6);
if (x === true){
    console.log("Phần tử trên có xuất hiện trong mảng")
} else  {
    console.log("Phần tử trên không xuất hiện trong mảng")
}

// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).

let y = arr.every(number => number > 0);
if (y === true){
    console.log("Tất cả các phẩn tử trong mảng đều lớn hơn 0")
} else  {
    console.log("Có phần tử trong mảng nhỏ hơn 0")
}

// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.

let z = arr.find(number => number > 3)
console.log("Phần tử đầu tiên trong mảng lớn hơn 3 là: " + z);

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".

let [first,...rest] = arr;
console.log("Phần tử đầu tiên trong mảng là: "  + first);
console.log("Các phần tử còn lại là: " + rest)

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

const person = [
    {
        name : "Lê Văn A",
        age: 30
    },
    {
        name : "Lê Văn B",
        age: 35
    },
    {
        name : "Lê Văn C",
        age: 40
    },
]
const [person1,person2,person3] = person;

console.log(person1.name)
console.log(person2.name)
console.log(person3.name)

console.log(person1.age)
console.log(person2.age)
console.log(person3.age)


// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

const sumArray = ([...arrNumber]) => {
    return arrNumber.reduce((a,b) => a+b,0)
}
console.log("Tổng của mảng là " + sumArray([1,2,3,4]))

// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

const stringName = (...names) => {
    return names
}
console.log("Welcome: " + stringName("A", "B", "C"));
// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.

const book = {
    title : "Mắt biếc",
    author: "Nguyễn Nhật Ánh",
    pages: 500,
    displayInfo() {
        console.log(book.title, book.author, book.pages)
    }
}
book.displayInfo()
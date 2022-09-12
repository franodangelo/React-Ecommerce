const is_ok = true;

export default function getData(task) {
    return new Promise((res, rej) => {
        if (is_ok) {
            res(task);
        } else {
            rej("error")
        }
    })
}
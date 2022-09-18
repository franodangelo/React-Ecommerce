const is_ok = true;

export default function getData(task, time) {
    return new Promise((res, rej) => {
        if (is_ok) {
            setTimeout(() => {
                res(task);
            }, time)
        } else {
            rej("error");
        }
    })
}
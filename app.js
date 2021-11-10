function scalculator(numbers) {
    const sum = () => numbers.reduce ((acc, num) => acc + num);
    const sub = () => numbers.reduce ((acc, num) => acc - num);
    const mult = () => numbers.reduce ((acc, num) => acc * num);
    const div = () => numbers.reduce ((acc, num) => acc / num);
    const pow = () => numbers.reduce ((acc, num) => (acc[num] = Math.pow(num, 2), acc), {});
    // const pow = () => numbers.map (num =>Math.pow(num,2));

    // const sqrt = () => numbers.map (num => Math.sqrt (num));
    const sqrt = () => numbers.reduce ((acc, num) => (acc[num] = Math.sqrt(num, 2), acc), {});

    return {
        sum: sum(),
        sub: sub(),
        mult: mult(),
        div: div(),
        pow: pow(),
        sqrt: sqrt(),
    }
}
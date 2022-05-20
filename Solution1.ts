function main(): void {
	const arrSet: Array<number> = [10, 20, 10, 2, 1, 5, 10, 7, 6, 6, 6, 7, 6]; // change your set of number
	const mapCount: Map<number, number> = new Map<number, number>();
	arrSet.forEach((num) => {
		const previousValue = mapCount.get(num);
		if (previousValue) {
			mapCount.set(num, previousValue + 1);
		} else {
			mapCount.set(num, 1);
		}
	});
	let maxKey: number = 0;
	let maxCount: number = 0;
	mapCount.forEach((value, key) => {
		if (maxCount < value) {
			maxCount = value;
			maxKey = key;
		}
	});
	console.log(`no : ${maxKey}, count : ${maxCount}`);
}

main();

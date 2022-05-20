function isPrime(n: number, setOfPrime: Array<number>) {
	for (let i = 0; i < setOfPrime.length; i++) {
		const previousPrimeValue = setOfPrime[i];
		if (previousPrimeValue * previousPrimeValue > n) {
			break;
		} else {
			if (n % previousPrimeValue === 0) {
				return false;
			}
		}
	}
	return true;
}
function main(): void {
	const startDate = new Date();
	const setOfPrime: Array<number> = [2];
	let i = 3;
	while (setOfPrime.length !== 20000000) {
		if (isPrime(i, setOfPrime)) {
			setOfPrime.push(i);
		}
		i += 2;
	}
	console.log('primeAt 1234 is', setOfPrime[1233]);
	console.log('primeAt 12345 is', setOfPrime[12344]);
	console.log('primeAt 1000000 is', setOfPrime[999999]);
	console.log(`primeAt 20000000 is`, setOfPrime[19999999]);
	const endDate = new Date();
	console.log('finishedIn', (endDate.getTime() - startDate.getTime()) / 1000);
}
main();

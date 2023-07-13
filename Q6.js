function findAnagrams(s, p) {
	const result = [];
	const pCount = new Array(26).fill(0);
	const windowCount = new Array(26).fill(0);
	const aCharCode = 'a'.charCodeAt(0);
	for (let i = 0; i < p.length; i++) {
		pCount[p.charCodeAt(i) - aCharCode]++;
	}

	for (let i = 0; i < s.length; i++) {
		windowCount[s.charCodeAt(i) - aCharCode]++;

		if (i >= p.length) {
			windowCount[s.charCodeAt(i - p.length) - aCharCode]--;
		}

		if (i >= p.length - 1) {
			if (arraysAreEqual(pCount, windowCount)) {
				result.push(i - p.length + 1);
			}
		}
	}

	return result;
}

function arraysAreEqual(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

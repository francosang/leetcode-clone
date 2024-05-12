import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTwoSum = `function dosSuma(numeros, resultado) {
  // Escribe tu código aquí
};`;

// checks if the user has the correct code
const handlerTwoSum = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[2, 7, 11, 15],
			[3, 2, 4],
			[3, 3],
		];

		const targets = [9, 6, 6];
		const answers = [
			[0, 1],
			[1, 2],
			[0, 1],
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i], targets[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("twoSum handler function error");
		throw new Error(error);
	}
};

export const twoSum: Problem = {
	id: "two-sum",
	title: "1. Dos Suma",
	problemStatement: `<p class='mt-3'>
  Dado un array de enteros <code>numeros</code> y un entero <code>objetivo</code>, retorna los
  <em>indices</em> de los dos números que sumados den <code>objetivo</code>.
</p>
<p class='mt-3'>
  Puedes asumir que cada input tiene <strong>exactamente una solución</strong>, y no puedes
  usar el mismo elemento dos veces.
</p>`,
	examples: [
		{
			id: 1,
			inputText: "numeros = [2,7,11,15], objetivo = 9",
			outputText: "[0,1]",
			explanation: "Porque numeros[0] + numeros[1] == 9, retornamos [0, 1].",
		},
		{
			id: 2,
			inputText: "numeros = [3,2,4], objetivo = 6",
			outputText: "[1,2]",
			explanation: "Porque numeros[1] + numeros[2] == 6, retornamos [1, 2].",
		},
		{
			id: 3,
			inputText: "numeros = [3,3], objetivo = 6",
			outputText: "[0,1]",
		},
	],
	constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Solo existe una respuesta valida.</strong>
</li>`,
	handlerFunction: handlerTwoSum,
	starterCode: starterCodeTwoSum,
	order: 1,
	starterFunctionName: "function dosSuma(",
};

import express from "express";
import axios from "axios";



const app = express();


const externalApi = (number) => `http://www.numbersapi.com/${number}/math`;
function isPrime(n) {
    // Negative numbers, 0, and 1 are not prime.
    if (n <= 1) return false;

    // 2 and 3 are prime.
    if (n <= 3) return true;

    // Eliminate multiples of 2 and 3.
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check for factors from 5 to √n.
    // All primes greater than 3 are of the form 6k ± 1.
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}
function isPerfect(n) {
    // Perfect numbers are positive integers greater than 1.
    if (n <= 1) return false;

    let sum = 1; // Start with 1 since 1 is always a divisor (for n > 1)

    // Loop from 2 up to the square root of n.
    // If i divides n, then n/i is also a divisor.
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            const complement = n / i;
            // Avoid adding the same divisor twice for perfect squares.
            if (complement !== i) {
                sum += complement;
            }
        }
    }

    return sum === n;
}

function sumOfDigits(n) {
    // Convert n to its absolute value to handle negative numbers.
    n = Math.abs(n);
    
    let sum = 0;
    // Process each digit until n becomes 0.
    while (n > 0) {
      // Get the last digit by taking the remainder when divided by 10.
      sum += n % 10;
      // Remove the last digit.
      n = Math.floor(n / 10);
    }
    return sum;
  }


app.get("/api/classify-number", async (req, res) => {

    const number = req.query.number;

    if (!parseInt(number))
        return res.status(400).json(400).json({
            "number": "alphabet",
            "error": true
        });

    else {
    try {
        const response = await axios.get(externalApi(number));
        // console.log(response.data);

        res.status(200).json({
            "number": number,
            "is_prime": isPrime(number),
            "is_perfect": isPerfect(number),
            "properties": ["armstrong", "odd"],
            "digit_sum": sumOfDigits(number),  // sum of its digits
            "fun_fact": response.data
            // "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
        });
    } catch (err) {
        console.log(err)
        res.status(400).json({
            "number": "alphabet",
            "error": true
        });
    }
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
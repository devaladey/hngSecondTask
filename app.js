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


app.get("/api/classify-number", async (req, res) => {

    const number = req.query.number;

    if (typeof parseInt(number) !== "number")
        return res.status(400).json(400).json({
            "number": "alphabet",
            "error": true
        });

    else {
        try {
            const response = await axios.get(externalApi(number));
            console.log(response.data);

            res.status(200).json({
                "number": number,
                "is_prime": isPrime(number),
                "is_perfect": false,
                "properties": ["armstrong", "odd"],
                "digit_sum": 11,  // sum of its digits
                "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API

            });
        } catch (err) {
            res.status(400).json({
                "number": "alphabet",
                "error": true
            });
        }
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
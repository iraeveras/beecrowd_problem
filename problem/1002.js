export function problem (lines) {
    const n = 3.14159;
    const raio = lines[0];

    const area = n * (parseFloat(raio)**2);

    console.log(`A=${area.toFixed(4)}`);
}
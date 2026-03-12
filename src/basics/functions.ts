
function calculateFinalPrice(basePrice: number, discountPercent: number): number {
    const disCountAmount = (basePrice * discountPercent) / 100;
    return basePrice - disCountAmount;
}

const finalPrice = calculateFinalPrice(12000, 10);

function playChord(chordName: string): void {
  console.log(`Strumming the ${chordName} chord...`);
}

playChord("G Major");


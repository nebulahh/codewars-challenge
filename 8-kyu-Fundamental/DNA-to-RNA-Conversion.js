// 07-04-22
function DNAtoRNA(dna) {
  let rna = /T/g;
  return dna.replace(rna, "U");
}

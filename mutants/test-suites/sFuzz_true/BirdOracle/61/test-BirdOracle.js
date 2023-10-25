const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleB0JXIzJ = await BirdOracle.new({from: accounts[0]});
		const uintMYLyhyB = BigInt("1426")
		const stringjyP7cbF = "Fw6cSRniI0DLlQTvugNmg1bV3CCcfzbNajnCk2UcUsd1"
		const uintH2pw02o = BigInt("1462")
		const uintOyLFJN = BigInt("1381")
		const uintNt2wqFB = BigInt("650")
		const stringWz76Qo = "Hbmw4MscBQP5PdzuAU6MtSctLbsjRKcDagtiIrFpx1"
		const uintkLUWbQi = BigInt("950")
		const uintguwTx0x = BigInt("1589")
		const stringvB1Bdl = "30HVrJ"
		const stringISd9Sug = "kxXTYNoOu40nG"
		const stringxhyuWuB = await BirdOracleB0JXIzJ.substring.call(stringjyP7cbF, uintMYLyhyB, {from: accounts[4]});
		const 
fCHm3S2 = await BirdOracleB0JXIzJ.updatedChainRequest.call(uintOyLFJN, uintH2pw02o, {from: accounts[0]});
		const stringWomWlER = await BirdOracleB0JXIzJ.substring.call(stringWz76Qo, uintNt2wqFB, {from: accounts[3]});
		const stringsmbXzu = await BirdOracleB0JXIzJ.substring.call(stringvB1Bdl, uintguwTx0x, uintkLUWbQi, {from: accounts[0]});
		const stringk96MRkC = await BirdOracleB0JXIzJ.extractAddress.call(stringISd9Sug, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleZ68f2DR = await BirdOracle.new({from: accounts[4]});
		const stringyqT3efP = "QOM0CZesdiIzriGWM99UAfVen"
		const uintngQuLMM = BigInt("547")
		const uintpc2MvC9 = BigInt("1385")
		const stringGM9pYhU = "C9EAJvqrYbkf9zPx3aWscq0xPHSZAAcOy9mxlHWJ0WgqALwlSFFmIojPqs"
		const stringH9r2KvI = await BirdOracleZ68f2DR.extractAddress.call(stringyqT3efP, {from: accounts[1]});
		const stringRSATR1 = await BirdOracleZ68f2DR.substring.call(stringGM9pYhU, uintpc2MvC9, uintngQuLMM, {from: "0x0000000000000000000000000000000000000001"});
		const uintIyz4rqX = await BirdOracleZ68f2DR.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKF5EBa4 = await BirdOracle.new({from: accounts[3]});
		const addresszjRMdLF = "0x0000000000000000000000000000000000000001"
		const uintaYcVloE = BigInt("145")
		const stringVZNdQgA = "lOW2DydtcFq6Tkuyu4HSogUrsmjJXwO7FFV5wMK7HsQMI4lzvi1MHcRMNgpxzgmUbe59L64UtOW3TIZa9pvlslmaoTK3W3MYCL"
		const stringahtrP0l = ""
		const uintuKxF3Od = await BirdOracleKF5EBa4.getRatingByAddress.call(addresszjRMdLF, {from: accounts[4]});
		const stringmCBAzXX = await BirdOracleKF5EBa4.substring.call(stringVZNdQgA, uintaYcVloE, {from: accounts[5]});
		const stringJLhjFc7 = await BirdOracleKF5EBa4.extractAddress.call(stringahtrP0l, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclegP6rSWl = await BirdOracle.new({from: accounts[3]});
		const stringbBknJVu = "aXNZDgK3flKLBIxIkzy2YOWkVhlqfCoUP5aINrbR1uSbvCChrWBdKjBdorLdnClSnOUtf"
		const stringa9tGguT = "92rKXCGPcHpbbfKijGMWKaH5Cy8n"
		const stringcb7bKR0 = "t1br2oLFJaamLRH9EVkTX9U8qnsnTB1pm9x2groAVE2tpNRau6uyNL2IVcAv94Chcs92NvP9XV"
		const stringCMQA5zf = "9r0FsClMTy8af76wsM5DbUPtQrB84JYJ6vo10VUkzVSKkw44Svas9r3wCLOXUxpj2sps5lU"
		const uintZUCMAA2 = BigInt("445")
		const stringHEZhhRR = "deHW7amFgJJxBUqdmNO"
		const uintxM9Ni3A = BigInt("1057")
		const uintHaX2d1j = BigInt("1852")
		const uintq7c2HMZ = await BirdOraclegP6rSWl.getRatingByAddressString.call(stringbBknJVu, {from: accounts[3]});
		const uintl8CHHtf = await BirdOraclegP6rSWl.getRatingByAddressString.call(stringa9tGguT, {from: accounts[4]});
		const stringHeTS73 = await BirdOraclegP6rSWl.extractAddress.call(stringcb7bKR0, {from: accounts[1]});
		const uintAYHjyKk = await BirdOraclegP6rSWl.getRatingByAddressString.call(stringCMQA5zf, {from: accounts[4]});
		const stringakQomAM = await BirdOraclegP6rSWl.substring.call(stringHEZhhRR, uintZUCMAA2, {from: accounts[3]});
		const 
QhVyAgB = await BirdOraclegP6rSWl.updatedChainRequest.call(uintHaX2d1j, uintxM9Ni3A, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclesytzKj4 = await BirdOracle.new({from: accounts[1]});
		const uintCQcJ0R = BigInt("501")
		const stringfPVJhm = "0hRQ3fjPjjtTArKJlT5G3PyQ1jBpiFEU27P6zk4KN1EUHvJzYS1B4Y9o2yUTwxUM9tzVqaWdEl27fY8K"
		const stringBZB6Vqb = "UprmCgzJQ"
		const uintOKkH1H5 = BigInt("1899")
		const stringU2mu7ga = "vuayFfaaqDjtMKX5Fupj6dTUecc8IttXrXIQUK8Q3X4vmgdKUIy6aciEVbKHMg8CqSfxzNWYXspqnCs"
		const uintI6SDqf = BigInt("1342")
		const uintO8j7DZ = BigInt("1258")
		const stringiSZp9s4 = await BirdOraclesytzKj4.substring.call(stringfPVJhm, uintCQcJ0R, {from: accounts[0]});
		const stringQ6fNGBv = await BirdOraclesytzKj4.extractAddress.call(stringBZB6Vqb, {from: accounts[1]});
		const stringFgcQQ3E = await BirdOraclesytzKj4.substring.call(stringU2mu7ga, uintOKkH1H5, {from: accounts[5]});
		const 
OG12lZ = await BirdOraclesytzKj4.updatedChainRequest.call(uintO8j7DZ, uintI6SDqf, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefyzJeQ = await BirdOracle.new({from: accounts[2]});
		const uintnXpVbU = BigInt("1656")
		const stringe2044iy = "hm8z9rjrlwBHSa376PhsPWPBdNiCNGBZcaP8scRMWl"
		const uintZJb54k = await BirdOraclefyzJeQ.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const stringNoS9X1H = await BirdOraclefyzJeQ.substring.call(stringe2044iy, uintnXpVbU, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleXSvvwVR = await BirdOracle.new({from: accounts[3]});
		const uintvymzfcR = BigInt("1363")
		const uintfE3qHer = BigInt("1870")
		const stringh4Fay01 = "p75t0UC6X6ZmQPKJC8xPQ2HIpebTPZfIuxqUNa9Mzi1HAo5K37BFv"
		const stringc6x8lNK = "OZLH44akj6uRUjvVspnn4J1ksFq5bR3g3vcvGKphLXOXkchCMqf3BglQVPbAU"
		const addressrBeO4AA = accounts[3]
		const 
gmyw25 = await BirdOracleXSvvwVR.updatedChainRequest.call(uintfE3qHer, uintvymzfcR, {from: accounts[2]});
		const 
xZJH9hx = await BirdOracleXSvvwVR.newChainRequest.call(stringc6x8lNK, stringh4Fay01, {from: accounts[4]});
		const uintM7ODZYm = await BirdOracleXSvvwVR.getRatingByAddress.call(addressrBeO4AA, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclev7r6AYL = await BirdOracle.new({from: accounts[0]});
		const stringGy9i3hW = "FWe4NE0BNzDrHFaE9qSCnphyPDM0GbjfTmPEyZnrh7Na1EYhsEsk18XzwhngSQPl5g9IN"
		const stringxMhwSq = "a939wB5rQomDtOxUm1Cygz"
		const uintegUyZ3C = BigInt("552")
		const stringu3ph7OZ = "EH2XQxAQ4jD2RnodKJ"
		const uintK77J6R8 = BigInt("1552")
		const uintoHBpP6v = BigInt("13")
		const uinte1I8oHj = await BirdOraclev7r6AYL.getRating.call({from: accounts[4]});
		const 
xtF71Lz = await BirdOraclev7r6AYL.newChainRequest.call(stringxMhwSq, stringGy9i3hW, {from: accounts[0]});
		const stringgyiEru5 = await BirdOraclev7r6AYL.substring.call(stringu3ph7OZ, uintegUyZ3C, {from: accounts[0]});
		const 
KSGZlR2 = await BirdOraclev7r6AYL.updatedChainRequest.call(uintoHBpP6v, uintK77J6R8, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJqzZ4Er = await BirdOracle.new({from: accounts[1]});
		const uinthdPaKkf = BigInt("1758")
		const uinthgG906V = BigInt("1157")
		const stringc2jQ4m4 = "bWoBZmk2sKIrj9Tqrqz2iM3dxJR3ePYkUigOLQ"
		const uintrfpIPEN = BigInt("1457")
		const uintgOMRp0D = BigInt("950")
		const stringQSrcfQ6 = "WagMmiBsT4JhOczLrbSN2rAJKpuikpmMfTSC8lSfFx1Y84kwLSJVWvePnOMy5mXU02T7OIs9d2N1moKmRdqrekDyMkXaxb1W"
		const stringW9NdJyz = await BirdOracleJqzZ4Er.substring.call(stringc2jQ4m4, uinthgG906V, uinthdPaKkf, {from: accounts[1]});
		const stringBNvHen = await BirdOracleJqzZ4Er.substring.call(stringQSrcfQ6, uintgOMRp0D, uintrfpIPEN, {from: accounts[0]});
		const uintsug0lP = await BirdOracleJqzZ4Er.getRating.call({from: accounts[2]});
		const uintXbOlg5 = await BirdOracleJqzZ4Er.getRating.call({from: accounts[0]});
		const uintS0iU0E = await BirdOracleJqzZ4Er.getRating.call({from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefyzJeQ = await BirdOracle.new({from: accounts[2]});
		const uintiOO1JA = BigInt("1619")
		const uintCefGCV = BigInt("1891")
		const stringY235nHi = "LjTcKac6EuM81037Ki1sZOy"
		const stringuTSXJtH = "D5dEkMmAoJRXU5ZErCDi9DxlP7wjQiq3KEkmixGNPBkcqbmxrsPmJsKJ6RApKfWX7jeG57HjSg"
		const uinthjbnPvR = BigInt("835")
		const uint6EPMHc = BigInt("756")
		const uintRAdl09t = BigInt("1656")
		const stringe2044iy = "hm8z9rjrlwBHSa376PhsPWPBdNiCNGBZcaP8scRMWl"
		const stringTpLSrBN = await BirdOraclefyzJeQ.substring.call(stringY235nHi, uintCefGCV, uintiOO1JA, {from: accounts[0]});
		const uintZJb54k = await BirdOraclefyzJeQ.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const uintaKwn7A = await BirdOraclefyzJeQ.getRatingByAddressString.call(stringuTSXJtH, {from: accounts[5]});
		const 
cOysR66 = await BirdOraclefyzJeQ.updatedChainRequest.call(uint6EPMHc, uinthjbnPvR, {from: accounts[1]});
		const stringNoS9X1H = await BirdOraclefyzJeQ.substring.call(stringe2044iy, uintRAdl09t, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJqzZ4Er = await BirdOracle.new({from: accounts[1]});
		const uintKdYQ3ez = BigInt("1363")
		const stringwgPtEIN = "8zy9ExmgJGHQK2aDR6vq684pMqpckoErlWi58MibS"
		const stringlmVWpXX = "fsr2Gj8drMoGLA1g6e7vvXzObVJ8ccKeq7zzrFnIFkj87bmHTSP6huVgIk0OU0GHh6msx"
		const uintoSRXxgW = BigInt("782")
		const uintx1W7YFY = BigInt("664")
		const stringVG4wvqQ = "3rkWhEpAkENvzkEqA4vXGuUOD1dxOqTVjO8K9SlaymBO1pDRXbQqQnE6X9sr1DMdoq2QU3vZQqfshGhzaYIuCRts9XTg"
		const stringQz5efsk = "yi18OH1daJHmdxR6aiE1GEOvb7JRT9NLnltmeTcWFUG5e2qx4Y1EGGcpx6b5nAMFpEueiwo2gawYRkBKtOcOsz"
		const stringVhOxDSB = "yfvm3ubaNU2ursLFRlutybo3GlIJ1ny"
		const uintZmjQq7 = BigInt("1457")
		const uints7Vi8zV = BigInt("1000")
		const stringQSrcfQ6 = "WagMmiBsT4JhOczLrbSN2rAJKpuikpmMfTSC8lSfFx1Y84kwLSJVWvePnOMy5mXU02T7OIs9d2N1moKmRdqrekDyMkXaxb1W"
		const stringZ3gYw86 = await BirdOracleJqzZ4Er.substring.call(stringwgPtEIN, uintKdYQ3ez, {from: accounts[3]});
		const uint8DfTX1 = await BirdOracleJqzZ4Er.getRatingByAddressString.call(stringlmVWpXX, {from: accounts[3]});
		const string3lCV3k = await BirdOracleJqzZ4Er.substring.call(stringVG4wvqQ, uintx1W7YFY, uintoSRXxgW, {from: accounts[3]});
		const 
eJjAYdX = await BirdOracleJqzZ4Er.newChainRequest.call(stringVhOxDSB, stringQz5efsk, {from: "0x0000000000000000000000000000000000000001"});
		const stringBNvHen = await BirdOracleJqzZ4Er.substring.call(stringQSrcfQ6, uints7Vi8zV, uintZmjQq7, {from: accounts[0]});
		const uintXbOlg5 = await BirdOracleJqzZ4Er.getRating.call({from: accounts[0]});
		const uintS0iU0E = await BirdOracleJqzZ4Er.getRating.call({from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYtr3iYi = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringiijNm9 = "qYM7Ai5rNOCYavAfoQDPOnq8Y69JjfI35H8RVwnUnko1xab4LOODFmt"
		const uintDpjpHfg = BigInt("1671")
		const uintlt75ywZ = BigInt("1891")
		const stringSlXqQDX = "gGRxHYxs6BW6wl5jUWkdLY93"
		const stringp2A2ylX = "m8h7AkZYQWkSTrfRekiRUKkrJ3eQHk7oXprPcHIAHGMvaK9suxIdVXDqnKV4ePKfY"
		const stringOsFWetN = await BirdOracleYtr3iYi.extractAddress.call(stringiijNm9, {from: accounts[5]});
		const stringj1wY44e = await BirdOracleYtr3iYi.substring.call(stringSlXqQDX, uintlt75ywZ, uintDpjpHfg, {from: "0x0000000000000000000000000000000000000001"});
		const stringOEs6pwq = await BirdOracleYtr3iYi.extractAddress.call(stringp2A2ylX, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefyzJeQ = await BirdOracle.new({from: accounts[2]});
		const uintJ8HBsUk = BigInt("950")
		const stringNOPkoe0 = "iNBq5o42qZqEPwBhnqsufPTGSaybeekwi1zD69zG12XhPtKbs6XoB6QNaVOKIbhH7xk7YeQkAeduDQT4"
		const uintWfdM0Z0 = BigInt("423")
		const stringlQr0vjX = "4f6MiiEuTRJGWR9X2tv7KJEEUC9NSONoytla9HO2odkGQfw4del1R1BhAlj"
		const uintdW6k9y = BigInt("1612")
		const stringe2044iy = "hm8z9rjrlwBHSa376PhsPWPBdNiCNGBZcaP8scRMWl"
		const stringbl66bIx = await BirdOraclefyzJeQ.substring.call(stringNOPkoe0, uintJ8HBsUk, {from: accounts[1]});
		const stringVAILwMu = await BirdOraclefyzJeQ.substring.call(stringlQr0vjX, uintWfdM0Z0, {from: accounts[1]});
		const stringNoS9X1H = await BirdOraclefyzJeQ.substring.call(stringe2044iy, uintdW6k9y, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJqzZ4Er = await BirdOracle.new({from: accounts[1]});
		const uintIiElZ3i = BigInt("102")
		const stringaFfYf8A = "cTaClFhG77qUfJ"
		const addressiqQwjse = accounts[5]
		const uintSvqcHVD = BigInt("734")
		const uintpqjRaHq = BigInt("733")
		const stringVG4wvqQ = "3rkWhEpAkENvzkEqA4vXGuUOD1dxOqTVjO8K9SlaymBO1pDRXbQqQnE6X9sr1DMdoq2QU3vZQqfshGhzaYIuCRts9XTg"
		const stringu5hiRiD = await BirdOracleJqzZ4Er.substring.call(stringaFfYf8A, uintIiElZ3i, {from: "0x0000000000000000000000000000000000000001"});
		const uintmS6L6qT = await BirdOracleJqzZ4Er.getRatingByAddress.call(addressiqQwjse, {from: "0x0000000000000000000000000000000000000001"});
		const string3lCV3k = await BirdOracleJqzZ4Er.substring.call(stringVG4wvqQ, uintpqjRaHq, uintSvqcHVD, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleJqzZ4Er = await BirdOracle.new({from: accounts[1]});
		const uintK3QE33u = BigInt("734")
		const uintGzyE41h = BigInt("734")
		const stringVG4wvqQ = "3rkWhEpAkENvzkEqA4vXGuUOD1dxOqTVjO8K9SlaymBO1pDRXbQqQnE6X9sr1DMdoq2QU3vZQqfshGhzaYIuCRts9XTg"
		const stringny2A6fZ = "AuYf5nrzJPj2LYvxG2TSMRJqLaTpuT3VWwUU5TUTgFQOWd57qUwJXO9rfFIe3Q9Z1EOG1hFKtKA"
		const stringKQIxN0H = "1L2urhccZDRdFJaXDkRLGkQVawPk6Er7yWTJ3q51LHEMFWal9VsH8Btyn3TkBo8SNyGayf"
		const string3lCV3k = await BirdOracleJqzZ4Er.substring.call(stringVG4wvqQ, uintGzyE41h, uintK3QE33u, {from: accounts[3]});
		const 
cdugyN0 = await BirdOracleJqzZ4Er.newChainRequest.call(stringKQIxN0H, stringny2A6fZ, {from: accounts[4]});
	});
})
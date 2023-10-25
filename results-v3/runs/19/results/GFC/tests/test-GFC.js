const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintLJj3Pl = BigInt("1372")
		const stringa8WchEt = "3TFhhOVSrtn2ms6joja5HZ9NIM8jll1Y3fDsH"
		const stringVVeSnP = "fPRh8rDfLpvuI3lExz5lWoTGkjnqJvfS29xJS2zFKCsegG"
		const GFCJTj5P2k = await GFC.new(uintLJj3Pl, stringa8WchEt, stringVVeSnP, {from: accounts[4]});
		const bytei2806O7 = "0x1d1305200a1f00101b191814110c1b031a041708121a08081c"
		const uintVIxerVT = BigInt("593")
		const addresszhDDK5g = accounts[1]
		const uinthfzv9ec = BigInt("140")
		const addressS21SUK2 = accounts[0]
		const uintIaB33Qm = BigInt("530")
		const addresswPH7wKU = accounts[3]
		const uintps2WHLC = BigInt("572")
		const addressePCu6Nt = accounts[3]
		const addressWip7w7J = accounts[3]
		const uintvfmr0e = BigInt("884")
		const boollOPSnjP = await GFCJTj5P2k.approveAndCall.call(addresszhDDK5g, uintVIxerVT, bytei2806O7, {from: accounts[1]});
		const boolMZGVO1z = await GFCJTj5P2k.transfer.call(addressS21SUK2, uinthfzv9ec, {from: accounts[2]});
		const boolHi0rrQa = await GFCJTj5P2k.approve.call(addresswPH7wKU, uintIaB33Qm, {from: accounts[1]});
		const boolwQcmnt = await GFCJTj5P2k.transferFrom.call(addressWip7w7J, addressePCu6Nt, uintps2WHLC, {from: accounts[4]});
		const boolcDF8pt3 = await GFCJTj5P2k.burn.call(uintvfmr0e, {from: accounts[3]});

		await expect(GFCJTj5P2k.approveAndCall.call(addresszhDDK5g, uintVIxerVT, bytei2806O7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uinthAlKVcY = BigInt("1699")
		const stringXn2z7ex = "LT5AFqtQuG25aAbqd5ubagRw7Zp46MkXpyHB"
		const stringRkzBBQI = "m7zoNcoZczoMu7dM01lb9c06z2SCu4KCE4e1yPcYRegXxsgpLtLFHyvZmvYrbzf"
		const GFCuMXFezs = await GFC.new(uinthAlKVcY, stringXn2z7ex, stringRkzBBQI, {from: accounts[3]});
		const uintlXH3owJ = BigInt("1371")
		const addressBG5mqb1 = accounts[4]
		const uintonRIIfc = BigInt("1982")
		const uintgRXvBNE = BigInt("1191")
		const addressgt2UMVu = accounts[3]
		const boolVDwaH8B = await GFCuMXFezs.burnFrom.call(addressBG5mqb1, uintlXH3owJ, {from: accounts[4]});
		const boolHysBx7 = await GFCuMXFezs.burn.call(uintonRIIfc, {from: accounts[1]});
		const boolnU91Al = await GFCuMXFezs.approve.call(addressgt2UMVu, uintgRXvBNE, {from: accounts[3]});

		await expect(GFCuMXFezs.burnFrom.call(addressBG5mqb1, uintlXH3owJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintv68CFOA = BigInt("1194")
		const stringlMxtLUF = "JaDpF8RRcXDKmhvbRGLYKQ9Qi2IKxbwxclrHcl3zPNP"
		const stringUyMGtwD = "ucQewf2vOr4hzGKb55Hai0iOAvL"
		const GFCaaRbMZ = await GFC.new(uintv68CFOA, stringlMxtLUF, stringUyMGtwD, {from: accounts[1]});
		const uintxXZ5BPE = BigInt("1219")
		const addresspfaB5nB = accounts[1]
		const uintnxRBSxt = BigInt("898")
		const byteQAykxSs = "0x07190e0e021a2018180f1809030c0b100d000f1c03"
		const uint5nEYhS = BigInt("1083")
		const addressNGMuVSd = accounts[0]
		const boolLZNyiD7 = await GFCaaRbMZ.transfer.call(addresspfaB5nB, uintxXZ5BPE, {from: accounts[3]});
		const booljI8sVSw = await GFCaaRbMZ.burn.call(uintnxRBSxt, {from: accounts[0]});
		const boolEgTeyu = await GFCaaRbMZ.approveAndCall.call(addressNGMuVSd, uint5nEYhS, byteQAykxSs, {from: accounts[4]});

		await expect(GFCaaRbMZ.transfer.call(addresspfaB5nB, uintxXZ5BPE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintEqJjLWj = BigInt("1064")
		const stringmpEVGXB = "vViH5PAP3ee14Tj42"
		const string4GjuGH = "EmUPfCIIvJ3iTpRGcGoD8VC8g"
		const GFCvqO5zDf = await GFC.new(uintEqJjLWj, stringmpEVGXB, string4GjuGH, {from: "0x0000000000000000000000000000000000000001"});
		const uinteqdIAhu = BigInt("2020")
		const addressrNcBROY = accounts[2]
		const addressxyuHvB = accounts[2]
		const uintEoAaK7 = BigInt("1461")
		const addressCcSuJmn = accounts[1]
		const addressxrWg3t6 = accounts[0]
		const uintZVnJhzN = BigInt("1389")
		const addressyZ5JLPB = "0x0000000000000000000000000000000000000001"
		const uintFA0PW5J = BigInt("1509")
		const addressHO7ADfr = accounts[2]
		const uintEmFk1FP = BigInt("1590")
		const addresseoyG4Ua = accounts[3]
		const boolWageBto = await GFCvqO5zDf.transferFrom.call(addressxyuHvB, addressrNcBROY, uinteqdIAhu, {from: accounts[2]});
		const boolVAUfH4N = await GFCvqO5zDf.transferFrom.call(addressxrWg3t6, addressCcSuJmn, uintEoAaK7, {from: accounts[0]});
		const boolZlmQs0s = await GFCvqO5zDf.approve.call(addressyZ5JLPB, uintZVnJhzN, {from: accounts[0]});
		const boolP7lbpcw = await GFCvqO5zDf.approve.call(addressHO7ADfr, uintFA0PW5J, {from: accounts[4]});
		const boolnRVJq1n = await GFCvqO5zDf.burnFrom.call(addresseoyG4Ua, uintEmFk1FP, {from: accounts[0]});
	});

	it('test for GFC', async () => {
		const uints7BRxwW = BigInt("107")
		const stringCrwtpcp = "9s8D9woGq4tnRmelGSPptFvBKbnAw0MW8bdKwuDamlXPUEPi"
		const stringNMSSvfg = "U"
		const GFCasrlkph = await GFC.new(uints7BRxwW, stringCrwtpcp, stringNMSSvfg, {from: accounts[0]});
		const uint137zlB = BigInt("938")
		const addressCDuskzg = accounts[3]
		const addressJYbTsJQ = accounts[0]
		const uintzu6H8wo = BigInt("1414")
		const uintKxTTZC = BigInt("389")
		const addressFiKTdZQ = accounts[3]
		const uintEbBcouW = BigInt("1711")
		const addressWGjVdcT = accounts[2]
		const booln2OkSyS = await GFCasrlkph.transferFrom.call(addressJYbTsJQ, addressCDuskzg, uint137zlB, {from: accounts[0]});
		const boolc1EyYAu = await GFCasrlkph.burn.call(uintzu6H8wo, {from: "0x0000000000000000000000000000000000000001"});
		const boolimNmm5n = await GFCasrlkph.approve.call(addressFiKTdZQ, uintKxTTZC, {from: accounts[5]});
		const boolbZnwzLE = await GFCasrlkph.approve.call(addressWGjVdcT, uintEbBcouW, {from: accounts[5]});

		await expect(GFCasrlkph.transferFrom.call(addressJYbTsJQ, addressCDuskzg, uint137zlB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintCNrEm3G = BigInt("1194")
		const stringlMxtLUF = "JaDpF8RRcXDKmhvbRGLYKQ9Qi2IKxbwxclrHcl3zPNP"
		const stringUyMGtwD = "ucQewf2vOr4hzGKb55Hai0iOAvL"
		const GFCaaRbMZ = await GFC.new(uintCNrEm3G, stringlMxtLUF, stringUyMGtwD, {from: accounts[1]});
		const uintLwrfUvy = BigInt("161")
		const uintlEjCykY = BigInt("1219")
		const addressdCRPmTy = accounts[2]
		const uintoz37C93 = BigInt("898")
		const bytebj82f23 = "0x07190e0e021a2018180f1809030c0b100d000f1c03"
		const uintcNmeKI0 = BigInt("1083")
		const addressljPof3u = accounts[0]
		const boolRSZBl6c = await GFCaaRbMZ.burn.call(uintLwrfUvy, {from: accounts[3]});
		const boolLZNyiD7 = await GFCaaRbMZ.transfer.call(addressdCRPmTy, uintlEjCykY, {from: accounts[3]});
		const booljI8sVSw = await GFCaaRbMZ.burn.call(uintoz37C93, {from: accounts[0]});
		const boolEgTeyu = await GFCaaRbMZ.approveAndCall.call(addressljPof3u, uintcNmeKI0, bytebj82f23, {from: accounts[4]});

		await expect(GFCaaRbMZ.burn.call(uintLwrfUvy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressgkTCx7l = accounts[3]
		const addresseS7DDS2 = accounts[1]
		const addresss6seGi7 = accounts[1]
		const GardenContractV2kDFuprP = await GardenContractV2.new(addressgkTCx7l, addresseS7DDS2, addresss6seGi7, {from: accounts[3]});
		const uintlp07bag = BigInt("527")
		const uintvVJiDeu = BigInt("240")
		const stringwGK6mz3 = "OHN66lV9Xa7mJn2CP"
		const uintg1kEeKX = BigInt("194")
		const stringhNd2jqL = "WyNNKqUntq5VGamCn2uxEB0RYXTWS935bZoXWueqlexYgl3HhOH8JVSJ9SbWW18lpgQI802KJk4Rf7wSTqwBo0Pzf9jPHgg"
		const stringeZcf5OC = "CgPVbzLvKHuvfjdYVOTdnjombbGLIpgrhwP3MKd5sQKMlMGaAWkmSZm3YMuluaQWEsIc5WZI9SULwwbbx6xHCT"
		const stringzDK3Lm = "9hVHu9AVNdT1Jx6sxlN5jEaDwC4QT1xJ8P6JG5IusF9FlVz05yUAfX2764b2xMJgS"
		const uintQQfLe0Y = BigInt("137")
		const stringkNCS7NT = "8yrOpcC18C1tW7SxkNEDte8jAutBXuz4fcvPr1HJDB0A64mfim5KSc5splneXcyuaV8ThHlPwNAC"
		const uintA9TjjWx = BigInt("90")
		const stringOHk66r1 = "1q7qzkgsUjcO"
		const stringBm8uXoO = await GardenContractV2kDFuprP.decompose.call(stringwGK6mz3, uintvVJiDeu, uintlp07bag, {from: accounts[1]});
		const stringZzVtN3n = await GardenContractV2kDFuprP.withdraw.call(stringhNd2jqL, uintg1kEeKX, {from: accounts[1]});
		const uint256MxV4aLa = await GardenContractV2kDFuprP.totalTLPDecomposed.call(stringeZcf5OC, {from: accounts[3]});
		const uint256TxAKUlM = await GardenContractV2kDFuprP.totalTLPDecomposed.call(stringzDK3Lm, {from: accounts[5]});
		const stringjGubySP = await GardenContractV2kDFuprP.harvest.call(stringkNCS7NT, uintQQfLe0Y, {from: accounts[3]});
		const stringdjGvlJq = await GardenContractV2kDFuprP.claimDecompose.call(stringOHk66r1, uintA9TjjWx, {from: accounts[3]});

		await expect(GardenContractV2kDFuprP.decompose.call(stringwGK6mz3, uintvVJiDeu, uintlp07bag, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshiA1RwU = accounts[4]
		const addressH4BBx3z = accounts[4]
		const addressrybwzGF = accounts[0]
		const GardenContractV2RWJPAU5 = await GardenContractV2.new(addresshiA1RwU, addressH4BBx3z, addressrybwzGF, {from: accounts[2]});
		const uinta2bfm0W = BigInt("101")
		const stringhEgJxn1 = "dvUaFNFKzCiXpjKDzTtwmtmCo8pSjAd8Q20Hc9DrEUhEhgLG7xGtXJgfnveisxMEMmN7Ms9IuOGFOJWF7"
		const uintU9Uosdo = BigInt("92")
		const stringAn5OGgN = "FEUkncRsP0OOScRTrwbDecam1sY"
		const boolURBMv8 = false
		const uintUkcvOlS = BigInt("92")
		const stringNTJbVyB = "NVDtCPP9IeoQsNCa8xbEwBLBhBvMfVCbfy1uU2fdntAr7FgNbexy9cqvc44Ka0g93e5RcPCh2"
		const uintdZGGhb9 = BigInt("1143")
		await GardenContractV2RWJPAU5.totalBedSupply.call(stringhEgJxn1, uinta2bfm0W, {from: accounts[4]});
		const uint256FWL7drE = await GardenContractV2RWJPAU5.timeUntilNextTLP.call(stringAn5OGgN, uintU9Uosdo, {from: accounts[1]});
		const uint256zUlaYGE = await GardenContractV2RWJPAU5.plant.call(uintdZGGhb9, stringNTJbVyB, uintUkcvOlS, boolURBMv8, {from: accounts[3]});

		await expect(GardenContractV2RWJPAU5.totalBedSupply.call(stringhEgJxn1, uinta2bfm0W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspWDdIA0 = accounts[2]
		const addressElbjtT = accounts[1]
		const addressQSNe1pI = accounts[2]
		const GardenContractV2m9L6ZV = await GardenContractV2.new(addresspWDdIA0, addressElbjtT, addressQSNe1pI, {from: accounts[4]});
		const uintWWQcWKg = BigInt("108")
		const stringFHoCw8s = "famckW8ipS1jrOImKYQgW8AIOUT2MNJIEJRzaaU8BtlBIMzaPKNULpX1pF0cHlyRfbUWep4LfUylUTChG49o2g0Bopi"
		const stringZTp9b1Z = "tIQSONvfA4dTNB1pdl31K"
		const stringHg1pkSJ = "ckyQ08gFmK5TFrvxvFFJEupKMYlNNDEg7a4MkJfttTxp3gnR73kGlqXta78kNbAfyDnQaf7LGYlbIfu"
		const stringkGicpJm = await GardenContractV2m9L6ZV.claimDecompose.call(stringFHoCw8s, uintWWQcWKg, {from: accounts[0]});
		const uint256Nz9p6Vn = await GardenContractV2m9L6ZV.totalTLPBurnt.call(stringZTp9b1Z, {from: "0x0000000000000000000000000000000000000001"});
		const uint256U5z2Q9 = await GardenContractV2m9L6ZV.totalTLPGrowing.call(stringHg1pkSJ, {from: accounts[3]});

		await expect(GardenContractV2m9L6ZV.claimDecompose.call(stringFHoCw8s, uintWWQcWKg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssMIeJcG = accounts[2]
		const addressSfi1ZWI = accounts[0]
		const addressq8iwyZE = accounts[4]
		const GardenContractV2NIh81X = await GardenContractV2.new(addresssMIeJcG, addressSfi1ZWI, addressq8iwyZE, {from: accounts[3]});
		const addressxfwTQnK = accounts[2]
		const addressVSbpkQP = accounts[5]
		const stringv6SDnV1 = "oJmaZCp3uZBjX9m65MOfjJNdlGFE5sKXP0eiA"
		const uinttnkCaH0 = BigInt("195")
		const addressQeGYe5t = "0x0000000000000000000000000000000000000001"
		const uinthRaPrhy = BigInt("45")
		const addressUGUHxsj = await GardenContractV2NIh81X.addTokenOwner.call(addressVSbpkQP, addressxfwTQnK, {from: accounts[3]});
		const uint256QfIn8lg = await GardenContractV2NIh81X.totalTLPGrowing.call(stringv6SDnV1, {from: accounts[3]});
		const uint256Mv35Z93 = await GardenContractV2NIh81X.getTotalrTLPHarvest.call(uinttnkCaH0, {from: accounts[3]});
		const addressVwRRh8a = await GardenContractV2NIh81X.renounceTokenOwner.call(addressQeGYe5t, {from: accounts[3]});
		const uint256eqxnsMH = await GardenContractV2NIh81X.getTotalsTLPHarvest.call(uinthRaPrhy, {from: accounts[3]});

		await expect(GardenContractV2NIh81X.addTokenOwner.call(addressVSbpkQP, addressxfwTQnK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstZ9GEXG = accounts[2]
		const addressrMsBbE7 = accounts[4]
		const addressMid0DFt = accounts[5]
		const GardenContractV2T4Agz46 = await GardenContractV2.new(addresstZ9GEXG, addressrMsBbE7, addressMid0DFt, {from: accounts[2]});
		const addressfs06YcD = accounts[3]
		const addressVMOVRT = accounts[0]
		const addressNfnn5ia = accounts[5]
		const addressuikLmnv = accounts[4]
		const addressHHXNeeO = accounts[1]
		const uintHkBsLGb = BigInt("1951")
		const uintf758Neu = BigInt("162")
		const stringTHtUssj = "qvV6kg9GzOygmLdmarUXEjlVxFuv"
		const stringStqEnW = "oDUfN3a64My8PaVYx2z6kYiMREsUVTDFNZ1jaMpsufFtgfDpvF1YeLcfYiFvfq27KLWSkRw7ubdjFtLFs870uW"
		const addressfAwWCgt = accounts[2]
		const addressStkJFK6 = await GardenContractV2T4Agz46.addTokenOwner.call(addressVMOVRT, addressfs06YcD, {from: accounts[0]});
		const addressUhXXQRW = await GardenContractV2T4Agz46.addTokenOwner.call(addressuikLmnv, addressNfnn5ia, {from: accounts[3]});
		const address00gYAm = await GardenContractV2T4Agz46.changeBenefitiary.call(addressHHXNeeO, {from: accounts[4]});
		const string5RS3ab = await GardenContractV2T4Agz46.decompose.call(stringTHtUssj, uintf758Neu, uintHkBsLGb, {from: accounts[1]});
		const uint256ZWWH6Ws = await GardenContractV2T4Agz46.balanceOf.call(addressfAwWCgt, stringStqEnW, {from: accounts[4]});

		await expect(GardenContractV2T4Agz46.addTokenOwner.call(addressVMOVRT, addressfs06YcD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCxGvBcP = accounts[2]
		const addressNkPnzL3 = accounts[1]
		const addressIazlSIr = "0x0000000000000000000000000000000000000001"
		const GardenContractV2Vtuyr67 = await GardenContractV2.new(addressCxGvBcP, addressNkPnzL3, addressIazlSIr, {from: accounts[1]});
		const uintBGVyKsd = BigInt("102")
		const stringRaC0PpD = "K1n"
		const uintU7OtkiU = BigInt("143")
		const stringDw17SZi = "aR5OB18y6pClXSYnylQsnpm8T"
		const uintCKM6qVy = BigInt("1280")
		const uintBozAtrJ = BigInt("74")
		const stringmZt1GH = "SB54bHRrz4k16j1G8pefPbW2O2lwyLuEH6TqidTnqJ4dqYdxCnHsbubSN45uEnY"
		const stringkDR3lnx = "OiK2gI8X6VErQsmgDbPCdc60xu6rrZC55oPhfzhZXoGIcqF5K"
		const addressJJOJBJ = accounts[3]
		const addressT8Batl = accounts[2]
		const stringZA5dC6 = await GardenContractV2Vtuyr67.harvest.call(stringRaC0PpD, uintBGVyKsd, {from: accounts[2]});
		const stringQp1BIgw = await GardenContractV2Vtuyr67.claimDecompose.call(stringDw17SZi, uintU7OtkiU, {from: accounts[2]});
		const stringmj4u7h3 = await GardenContractV2Vtuyr67.decompose.call(stringmZt1GH, uintBozAtrJ, uintCKM6qVy, {from: accounts[3]});
		const uint256FEDsMH = await GardenContractV2Vtuyr67.totalTLPBurnt.call(stringkDR3lnx, {from: accounts[1]});
		const addressAwdzCBN = await GardenContractV2Vtuyr67.addTokenOwner.call(addressT8Batl, addressJJOJBJ, {from: accounts[2]});

		await expect(GardenContractV2Vtuyr67.harvest.call(stringRaC0PpD, uintBGVyKsd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address2JKCIL = accounts[2]
		const addressHVWKwup = accounts[1]
		const addressbg6ft80 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2Vtuyr67 = await GardenContractV2.new(address2JKCIL, addressHVWKwup, addressbg6ft80, {from: accounts[1]});
		const uintLNE2t7 = BigInt("92")
		const stringlatyRNl = "74XOJVQC8II4gAxxdegk2to8hKSLuJpdfQUpxlSdkfdPffkwMVxESxq4HPU6YmzSbyj5nezk8v8HiCDGD"
		const addressvpvGSj = accounts[5]
		const uintxXidUdQ = BigInt("102")
		const stringRaC0PpD = "K1W"
		const uintShTXypK = BigInt("143")
		const stringDw17SZi = "aR5OB18y6pClXSYnylQsnpm8T"
		const uintcWdoMNe = BigInt("1280")
		const uintVtYAWNs = BigInt("74")
		const stringmZt1GH = "SB54bHRrz4k16j1G8pefPbW2O2lwyLuEH6TqidTnqJ4dqYdxCnHsbubSN45uEnY"
		const stringkDR3lnx = "OiK2gI8X6VErQsmgDbPCdc60xu6rrZC55oPhfzhZXoGIcqF5K"
		const addressgUz7PP = accounts[3]
		const addressdDPus9m = accounts[2]
		const uint25659fpZX = await GardenContractV2Vtuyr67.growthRemaining.call(addressvpvGSj, stringlatyRNl, uintLNE2t7, {from: accounts[3]});
		const stringZA5dC6 = await GardenContractV2Vtuyr67.harvest.call(stringRaC0PpD, uintxXidUdQ, {from: accounts[2]});
		const stringQp1BIgw = await GardenContractV2Vtuyr67.claimDecompose.call(stringDw17SZi, uintShTXypK, {from: accounts[2]});
		const stringmj4u7h3 = await GardenContractV2Vtuyr67.decompose.call(stringmZt1GH, uintVtYAWNs, uintcWdoMNe, {from: accounts[3]});
		const uint256FEDsMH = await GardenContractV2Vtuyr67.totalTLPBurnt.call(stringkDR3lnx, {from: accounts[1]});
		const addressAwdzCBN = await GardenContractV2Vtuyr67.addTokenOwner.call(addressdDPus9m, addressgUz7PP, {from: accounts[2]});

		await expect(GardenContractV2Vtuyr67.growthRemaining.call(addressvpvGSj, stringlatyRNl, uintLNE2t7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressNwau2SQ = accounts[2]
		const addressPWoBI1Q = accounts[0]
		const addressNIAQ1ME = accounts[3]
		const GardenContractV2N76nt4 = await GardenContractV2.new(addressNwau2SQ, addressPWoBI1Q, addressNIAQ1ME, {from: accounts[2]});
		const boolnwmnn07 = true
		const uintPaP48LP = BigInt("14")
		const stringlODVCo0 = "VOqKhj9is7bRgZXtirjVeCPvyufdLSsdPAz1ABMyhrJURx5lt0soz2nMurEn8hQYok2wSDiOfNerXhoRhwDu7TZPtPfB9B"
		const uintMdYFIDi = BigInt("311")
		const uintYYKObiI = BigInt("150")
		const stringXDZGPQ = "ZLwz5LDGo6x3Frt325am79xi4vst4WrNNGTSbtNNQmzYRLrHEBGKF57CbiABpBHXelv2pomuCxhETBktD85VzfAo"
		const uintllp8NeC = BigInt("30")
		const stringb6fk3O = "DlHcnYcdbKITHkQHl"
		const stringKU5dzlo = "Qd37cooCVLjjVnSDk2Qu6Xv03gshSCJ6ZT"
		const uint1KKsG2 = BigInt("634")
		const uintufKT8Jg = BigInt("240")
		const stringjzFVTC3 = "HyEDInJ43pIJDdM49JjEqkujUCk4qE3tC6UTr"
		const addressfAGNhht = accounts[2]
		const uint256ULoMbm = await GardenContractV2N76nt4.plant.call(uintMdYFIDi, stringlODVCo0, uintPaP48LP, boolnwmnn07, {from: accounts[3]});
		await GardenContractV2N76nt4.totalBedSupply.call(stringXDZGPQ, uintYYKObiI, {from: accounts[1]});
		const uint256GzXttfg = await GardenContractV2N76nt4.timeUntilNextTLP.call(stringb6fk3O, uintllp8NeC, {from: accounts[1]});
		const uint256WHHx9D = await GardenContractV2N76nt4.totalTLPBurnt.call(stringKU5dzlo, {from: accounts[3]});
		const stringpqPnQp8 = await GardenContractV2N76nt4.decompose.call(stringjzFVTC3, uintufKT8Jg, uint1KKsG2, {from: accounts[0]});
		const addressgoaEDFC = await GardenContractV2N76nt4.renounceTokenOwner.call(addressfAGNhht, {from: accounts[2]});

		await expect(GardenContractV2N76nt4.plant.call(uintMdYFIDi, stringlODVCo0, uintPaP48LP, boolnwmnn07, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressIO8KHPj = accounts[0]
		const addressl6T8Yhr = accounts[2]
		const address7ER7mM = accounts[1]
		const GardenContractV2dphs4xv = await GardenContractV2.new(addressIO8KHPj, addressl6T8Yhr, address7ER7mM, {from: "0x0000000000000000000000000000000000000001"});
		const addressPKtK7Pw = accounts[4]
		const addressVKcf5l = await GardenContractV2dphs4xv.changeBenefitiary.call(addressPKtK7Pw, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressMyE4v5 = accounts[1]
		const addressf5zl7J0 = accounts[2]
		const addressLxrE5vN = accounts[3]
		const GardenContractV2a0FYu6s = await GardenContractV2.new(addressMyE4v5, addressf5zl7J0, addressLxrE5vN, {from: accounts[3]});
		const uinthyqC6W3 = BigInt("1030")
		const uintkK8YJEj = BigInt("199")
		const uintsPylyFC = BigInt("60")
		const uintgxKSz11 = BigInt("86")
		const uintMnoPSfa = BigInt("222")
		const uintkEivaw = BigInt("45")
		const stringx4KosRH = "WL1WvwS7vigVlT4wboRSpulessNgz5i2UXH2kGXH7WWe478h1nLAIb1RCq9ybNwGrI4"
		const uint8qvecyqy = await GardenContractV2a0FYu6s.operationBurnMint.call(uintsPylyFC, uintkK8YJEj, uinthyqC6W3, {from: "0x0000000000000000000000000000000000000001"});
		const uint8V5NGVNI = await GardenContractV2a0FYu6s.setTimeStamp.call(uintMnoPSfa, uintgxKSz11, {from: accounts[2]});
		const stringP4EMX2r = await GardenContractV2a0FYu6s.harvest.call(stringx4KosRH, uintkEivaw, {from: accounts[1]});

		await expect(GardenContractV2a0FYu6s.operationBurnMint.call(uintsPylyFC, uintkK8YJEj, uinthyqC6W3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressmK4lpHh = accounts[2]
		const addressegR0ck = accounts[1]
		const addressEd7o6uN = "0x0000000000000000000000000000000000000001"
		const GardenContractV2Vtuyr67 = await GardenContractV2.new(addressmK4lpHh, addressegR0ck, addressEd7o6uN, {from: accounts[1]});
		const uinteFqFOKU = BigInt("202")
		const uintngcHQsA = BigInt("2")
		const stringRaC0PpD = "K1n"
		const uintozI6vBM = BigInt("143")
		const stringDw17SZi = "aR5OB18y6pClXSYnylQsnpm8T"
		const uintSzJhnfx = BigInt("1280")
		const uintGmeDlj = BigInt("74")
		const stringmZt1GH = "SB54bHRrz4k16j1G8pefPbW2O2lwyLuEH6TqidTnqJ4dqYdxCnHsbubSN45uEnY"
		const uintRKL4j9n = BigInt("247")
		const uintQD25CZb = BigInt("119")
		const stringkDR3lnx = "OiK2gI8X6VErQsmgDbPCdc60xu6rrZC55oPhfzhZXoGIcqF5K"
		const addresso4WuuN0 = accounts[3]
		const addressOC2NYHd = accounts[2]
		const uint256d3a4KAq = await GardenContractV2Vtuyr67.getTotalsTLPHarvest.call(uinteFqFOKU, {from: accounts[4]});
		const stringZA5dC6 = await GardenContractV2Vtuyr67.harvest.call(stringRaC0PpD, uintngcHQsA, {from: accounts[2]});
		const stringQp1BIgw = await GardenContractV2Vtuyr67.claimDecompose.call(stringDw17SZi, uintozI6vBM, {from: accounts[2]});
		const stringmj4u7h3 = await GardenContractV2Vtuyr67.decompose.call(stringmZt1GH, uintGmeDlj, uintSzJhnfx, {from: accounts[3]});
		const uint8LLOgjgP = await GardenContractV2Vtuyr67.setTimeStamp.call(uintQD25CZb, uintRKL4j9n, {from: accounts[0]});
		const uint256FEDsMH = await GardenContractV2Vtuyr67.totalTLPBurnt.call(stringkDR3lnx, {from: accounts[1]});
		const addressAwdzCBN = await GardenContractV2Vtuyr67.addTokenOwner.call(addressOC2NYHd, addresso4WuuN0, {from: accounts[2]});

		await expect(GardenContractV2Vtuyr67.getTotalsTLPHarvest.call(uinteFqFOKU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressml0O0r8 = accounts[2]
		const addressaJhOjR = accounts[0]
		const addressJA5NMI = accounts[3]
		const GardenContractV2N76nt4 = await GardenContractV2.new(addressml0O0r8, addressaJhOjR, addressJA5NMI, {from: accounts[2]});
		const uintJN3KMoU = BigInt("118")
		const boolnwmnn07 = true
		const uintKK5YRNW = BigInt("14")
		const stringlODVCo0 = "VOqKhj9is7bRgZXtirjVeCPvyufdLSsdPAz1ABMyhrJURx5lt0soz2nMurEn8hQYok2wSDiOfNerXhoRhwDu7TZPtPfB9B"
		const uintpUY3bIy = BigInt("311")
		const uintzaDx7Xp = BigInt("159")
		const stringus1OaJ6 = "I7BFTJopZCSa0nn2IYEyGPt38MSSP0vrTRsPrhNGWxYxhg4662m67mBdu2Vr7mZKpIlp34hIEWUJJMSth"
		const uintTthGoFS = BigInt("159")
		const stringXDZGPQ = "ZLwz5LDGo6x3Frt325am79xi4vst4WrNNGTSbtNNQmzYRLrHEBGKF57CbiABpBHXelv2pomuCxhETBktD85VzfAo"
		const uintHqjkMQN = BigInt("30")
		const stringb6fk3O = "DlHcnYcdbKITHkQHl"
		const stringKU5dzlo = "Qd37cooCVLjjVnSDk2Qu6Xv03gshSCJ6ZT"
		const uintqJjgIVE = BigInt("634")
		const uintDxg8MMf = BigInt("240")
		const stringjzFVTC3 = "HyEDInJ43pIJDdM49JjEqkujUCk4qE3tC6UTr"
		const addresssVntFZO = accounts[2]
		const uint256LdxOViz = await GardenContractV2N76nt4.getTotalrTLPHarvest.call(uintJN3KMoU, {from: accounts[4]});
		const uint256ULoMbm = await GardenContractV2N76nt4.plant.call(uintpUY3bIy, stringlODVCo0, uintKK5YRNW, boolnwmnn07, {from: accounts[3]});
		const stringV6W8q8 = await GardenContractV2N76nt4.harvest.call(stringus1OaJ6, uintzaDx7Xp, {from: accounts[0]});
		await GardenContractV2N76nt4.totalBedSupply.call(stringXDZGPQ, uintTthGoFS, {from: accounts[1]});
		const uint256GzXttfg = await GardenContractV2N76nt4.timeUntilNextTLP.call(stringb6fk3O, uintHqjkMQN, {from: accounts[1]});
		const uint256WHHx9D = await GardenContractV2N76nt4.totalTLPBurnt.call(stringKU5dzlo, {from: accounts[3]});
		const stringpqPnQp8 = await GardenContractV2N76nt4.decompose.call(stringjzFVTC3, uintDxg8MMf, uintqJjgIVE, {from: accounts[0]});
		const addressgoaEDFC = await GardenContractV2N76nt4.renounceTokenOwner.call(addresssVntFZO, {from: accounts[2]});

		await expect(GardenContractV2N76nt4.getTotalrTLPHarvest.call(uintJN3KMoU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWKX9kSy = accounts[3]
		const addresstoHEpxh = accounts[1]
		const addressxjyhrzP = accounts[1]
		const GardenContractV2kDFuprP = await GardenContractV2.new(addressWKX9kSy, addresstoHEpxh, addressxjyhrzP, {from: accounts[3]});
		const uintVgP5G5B = BigInt("216")
		const stringQmjl7c = "eby8EpF2NO8KnSPCh1wtfr21KCsaLPDco9q3cFDQ8upmRxlQOwhfXgqkgIPBD6RNvphHc3DTrB17wvne47nU0j1X"
		const uintIeahDu = BigInt("527")
		const uintuUXjWn = BigInt("240")
		const stringwGK6mz3 = "OHN66lV9Xa7mJn2CP"
		const stringeZcf5OC = "CgPVbzLvKHuvfjdYVOTdnjombbGLIpgrhwP3MKd5sQKMlMGaAWkmSZm3YMuluaQWEsIc5WZI9SULwwbbx6xHCT"
		const uintAlbFGLd = BigInt("1742")
		const uintnd9cNBD = BigInt("157")
		const uint59j6F0 = BigInt("242")
		const uintzWg69Sj = BigInt("126")
		const stringkNCS7NT = "8yrOpcC18C1tW7SxkNEDte8jAutBXuz4fcvPr1HJDB0A64mfim5KSc5splneXcyuaV8ThHlPwNAC"
		const uintsXZnUjh = BigInt("90")
		const stringOHk66r1 = "1q7qzkgsUjcO"
		const stringirkE3gx = await GardenContractV2kDFuprP.withdraw.call(stringQmjl7c, uintVgP5G5B, {from: accounts[5]});
		const stringBm8uXoO = await GardenContractV2kDFuprP.decompose.call(stringwGK6mz3, uintuUXjWn, uintIeahDu, {from: accounts[1]});
		const uint256MxV4aLa = await GardenContractV2kDFuprP.totalTLPDecomposed.call(stringeZcf5OC, {from: accounts[3]});
		const uint8jBSNaMy = await GardenContractV2kDFuprP.operationBurnMint.call(uint59j6F0, uintnd9cNBD, uintAlbFGLd, {from: accounts[0]});
		const stringjGubySP = await GardenContractV2kDFuprP.harvest.call(stringkNCS7NT, uintzWg69Sj, {from: accounts[3]});
		const stringdjGvlJq = await GardenContractV2kDFuprP.claimDecompose.call(stringOHk66r1, uintsXZnUjh, {from: accounts[3]});

		await expect(GardenContractV2kDFuprP.withdraw.call(stringQmjl7c, uintVgP5G5B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxhYWiik = accounts[0]
		const addresscrkRIaO = accounts[1]
		const addressmGgOnhT = accounts[4]
		const GardenContractV2KBF0jrp = await GardenContractV2.new(addressxhYWiik, addresscrkRIaO, addressmGgOnhT, {from: accounts[1]});
		const stringY3rQfzc = "xPAAD8OfmJkkKFdnAjP21fJiGUaaGsEE5WDOwzeD3OdaBckV6ngCdUeoufEm53pwtG9TKC9oWxYyUnkOKJms"
		const addressesWrZeK = accounts[1]
		const addressVzpo4Pl = accounts[1]
		const stringxATZmIc = "8myvCRqwVT8MAEdvpeuK4C4VhRSsmAvPcfHGbxJmvutD8w8z8ExmhC8stNMwa5LplYzEv6php2INNdbyuqxM9JuD23TQZZb"
		const addressVWaMWEz = accounts[4]
		const uint2568mZhul = await GardenContractV2KBF0jrp.totalTLPGrown.call(stringY3rQfzc, {from: accounts[2]});
		const addressE8lR6z = await GardenContractV2KBF0jrp.addTokenOwner.call(addressVzpo4Pl, addressesWrZeK, {from: accounts[0]});
		const uint256Z4aEHKi = await GardenContractV2KBF0jrp.balanceOf.call(addressVWaMWEz, stringxATZmIc, {from: accounts[3]});

		await expect(GardenContractV2KBF0jrp.totalTLPGrown.call(stringY3rQfzc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspwhHbcS = accounts[2]
		const addressaQCemQ = accounts[1]
		const addressvMMSG2K = accounts[2]
		const GardenContractV2m9L6ZV = await GardenContractV2.new(addresspwhHbcS, addressaQCemQ, addressvMMSG2K, {from: accounts[4]});
		const stringrfHN8pM = "qpuEddGeoLllUQs5y2NDWj0gbG1xCJbAvOQAQYIhK3RFxe2O03"
		const uintT0JZi4e = BigInt("108")
		const stringFHoCw8s = "famckW8ipS1jrOImKYQgW8AIOUT2MNJIEJRzaaU8BtlBIMzaPKNULpX1pF0cHlyRfbUWep4LfUylUTChG49o2g0Bopi"
		const stringZTp9b1Z = "tIQSONmfA4dTNB1pdl31K"
		const addressybXycDl = accounts[3]
		const stringHg1pkSJ = "ckyQ08gFmK5TFrvxvFFJEupKMYlNNDEg7a4MkJfttTxp3gnR73kGlqXta78kNbAfyDnQaf7LGYlbIfu"
		const uint256kDuBbQ = await GardenContractV2m9L6ZV.totalTLPDecomposed.call(stringrfHN8pM, {from: accounts[3]});
		const stringkGicpJm = await GardenContractV2m9L6ZV.claimDecompose.call(stringFHoCw8s, uintT0JZi4e, {from: accounts[0]});
		const uint256Nz9p6Vn = await GardenContractV2m9L6ZV.totalTLPBurnt.call(stringZTp9b1Z, {from: "0x0000000000000000000000000000000000000001"});
		const addressiStoor = await GardenContractV2m9L6ZV.changeOwner.call(addressybXycDl, {from: accounts[1]});
		const uint256U5z2Q9 = await GardenContractV2m9L6ZV.totalTLPGrowing.call(stringHg1pkSJ, {from: accounts[3]});

		await expect(GardenContractV2m9L6ZV.totalTLPDecomposed.call(stringrfHN8pM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvSCf96z = accounts[2]
		const addresshYNpTac = accounts[1]
		const addressJJwrcIw = "0x0000000000000000000000000000000000000001"
		const GardenContractV2Vtuyr67 = await GardenContractV2.new(addressvSCf96z, addresshYNpTac, addressJJwrcIw, {from: accounts[1]});
		const stringf6pS4O = "cCgDmIAMxEaqUkULI8vggGSz9cHm8trqYBpy3DqYkWuDsnoImdpCjRdkw6WHH5OVqTiGj"
		const uintgAkPUe = BigInt("95")
		const stringRaC0PpD = "K1n"
		const stringkDR3lnx = "OiK2gI8X6VErQsmgDbPCdc60xu6rrZC55oPhfzhZXoGIcqF5K"
		const addressI32XnoE = accounts[1]
		const addresseDcqibx = accounts[2]
		const uint256Cah3f4K = await GardenContractV2Vtuyr67.totalTLPGrowing.call(stringf6pS4O, {from: accounts[4]});
		const stringZA5dC6 = await GardenContractV2Vtuyr67.harvest.call(stringRaC0PpD, uintgAkPUe, {from: accounts[2]});
		const uint256FEDsMH = await GardenContractV2Vtuyr67.totalTLPBurnt.call(stringkDR3lnx, {from: accounts[1]});
		const addressAwdzCBN = await GardenContractV2Vtuyr67.addTokenOwner.call(addresseDcqibx, addressI32XnoE, {from: accounts[2]});

		await expect(GardenContractV2Vtuyr67.totalTLPGrowing.call(stringf6pS4O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresseVHhbB9 = accounts[4]
		const addressNzblXC = accounts[4]
		const addressYlhaJg8 = accounts[0]
		const GardenContractV2RWJPAU5 = await GardenContractV2.new(addresseVHhbB9, addressNzblXC, addressYlhaJg8, {from: accounts[2]});
		const addressHeMTUyz = accounts[0]
		const stringxx3rJTW = "epCsKVioByoCvRQXioUJMJ0JA02Bngjyyh27pW3J0o4xeALis524un9AExKDtEHV8VvVGQoHSDqq48SMr"
		const uintzcbWXUt = BigInt("1134")
		const uintGhS7rIV = BigInt("147")
		const stringmmPgRd = "xL0cXzDa4XVWR2OUcLGfAtbQYI9ze8GyYtBeeqy5lP7YmCiEoNt4SpXeQNI"
		const addressmIbEKqs = await GardenContractV2RWJPAU5.renounceTokenOwner.call(addressHeMTUyz, {from: accounts[2]});
		const stringtbrXCmr = await GardenContractV2RWJPAU5.harvestAllBeds.call(stringxx3rJTW, {from: accounts[2]});
		const stringpsk3Zyf = await GardenContractV2RWJPAU5.decompose.call(stringmmPgRd, uintGhS7rIV, uintzcbWXUt, {from: accounts[1]});

		await expect(GardenContractV2RWJPAU5.renounceTokenOwner.call(addressHeMTUyz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHqhPMdo = accounts[0]
		const addressvfevjdq = accounts[0]
		const addressRU2E2F = accounts[2]
		const GardenContractV2HuYfbPw = await GardenContractV2.new(addressHqhPMdo, addressvfevjdq, addressRU2E2F, {from: accounts[4]});
		const addressWC5ih3C = accounts[6]
		const stringInFkL10 = "q3b7zStWzHHrWvJgqn2oeOfk0E3rGDb8cz533Ap5GjZWsjdWuF3"
		const addressCeI7Lh = await GardenContractV2HuYfbPw.changeOwner.call(addressWC5ih3C, {from: accounts[4]});
		const uint256GdpROBH = await GardenContractV2HuYfbPw.totalTLPBurnt.call(stringInFkL10, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2HuYfbPw.totalTLPBurnt.call(stringInFkL10, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressIOnuIuh = accounts[2]
		const addressDEIUBO1 = accounts[2]
		const addressj22R3kC = accounts[0]
		const GardenContractV2FMrG9tr = await GardenContractV2.new(addressIOnuIuh, addressDEIUBO1, addressj22R3kC, {from: accounts[4]});
		const stringiKGhqez = "292GwPLUWLwDe2FlVERkxromvJbYkvV8c6uFjBjXfHS9eZJN8MAEFQmmlDXwhycratQfvn1Y"
		const addresshPN5Cmf = accounts[4]
		const uintQjXHKu3 = BigInt("26")
		const stringzj2wXq = "4xiNYZSc9ylCvgzKF6APMvye6UwcMqyusXvQ2jCioGFQsFqJ4VTOhocShPWf"
		const stringJl3HEx6 = "KSrWo8x0cDkjliqoxmazNtL"
		const uintuuQq5sP = BigInt("208")
		const uintBjslNW5 = BigInt("87")
		const stringRpJXLIN = "IgLYveRGO1h7A7sBBYIaCmxKnLJurDbCswOaiALerRVD3cfgTVwPp8T6hlhxa9mh4mSx4fCrc8iPzE7OBinYxniB"
		const addressjHD7Rc0 = accounts[2]
		const uint256F7c0UY1 = await GardenContractV2FMrG9tr.balanceOf.call(addresshPN5Cmf, stringiKGhqez, {from: "0x0000000000000000000000000000000000000001"});
		const stringtX1R6uY = await GardenContractV2FMrG9tr.harvest.call(stringzj2wXq, uintQjXHKu3, {from: accounts[5]});
		const stringIrdK22w = await GardenContractV2FMrG9tr.harvestAllBeds.call(stringJl3HEx6, {from: accounts[0]});
		const uint8b5FR0U1 = await GardenContractV2FMrG9tr.zeroHoldings.call(uintBjslNW5, uintuuQq5sP, {from: accounts[5]});
		const uint256H35CBFN = await GardenContractV2FMrG9tr.totalTLPGrowing.call(stringRpJXLIN, {from: accounts[0]});
		const addresskCwzlcT = await GardenContractV2FMrG9tr.changeOwner.call(addressjHD7Rc0, {from: accounts[4]});

		await expect(GardenContractV2FMrG9tr.balanceOf.call(addresshPN5Cmf, stringiKGhqez, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfjSd31y = accounts[4]
		const addresshkwmZKh = accounts[4]
		const addressBBJPQi0 = accounts[0]
		const GardenContractV2RWJPAU5 = await GardenContractV2.new(addressfjSd31y, addresshkwmZKh, addressBBJPQi0, {from: accounts[2]});
		const stringmFpAuG3 = "5brrkYYhqKCo98Y4oXF7pdKwOa52Kp3xVOG5sqvLaQJ"
		const uintmEiGbx = BigInt("141")
		const stringd8hu6nw = "xJo4iil35YVVJndosbY"
		const addressaF0Wzlp = accounts[4]
		const uint256r46n8k = await GardenContractV2RWJPAU5.totalGardenSupply.call(stringmFpAuG3, {from: accounts[1]});
		const stringZAfsaJB = await GardenContractV2RWJPAU5.claimDecompose.call(stringd8hu6nw, uintmEiGbx, {from: accounts[2]});
		const addresslpwsPP3 = await GardenContractV2RWJPAU5.renounceTokenOwner.call(addressaF0Wzlp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2RWJPAU5.totalGardenSupply.call(stringmFpAuG3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressq5Agqw = accounts[3]
		const addresseJ3S3je = accounts[5]
		const addressgGxWlAt = accounts[0]
		const GardenContractV2qQLU5AQ = await GardenContractV2.new(addressq5Agqw, addresseJ3S3je, addressgGxWlAt, {from: accounts[3]});
		const uintkW9PwF = BigInt("56")
		const stringRm59nwr = "h7sQdoM1pX6ktNAPyOHazSH86PBhJ6QjwW"
		const uintGl7piUN = BigInt("62")
		const addressIZ3g7qA = accounts[4]
		const uintjF2iEDT = BigInt("203")
		const stringloW6sg = "K6Gf4dlDQp4qqA39ArbVz80w"
		const uintPNSYdIY = BigInt("970")
		const uintbSOpVaH = BigInt("87")
		const uintWiMlY4l = BigInt("203")
		const uint256k0Hinav = await GardenContractV2qQLU5AQ.timeUntilNextTLP.call(stringRm59nwr, uintkW9PwF, {from: accounts[1]});
		const uint256TXOaRra = await GardenContractV2qQLU5AQ.getTotalrTLPHarvest.call(uintGl7piUN, {from: accounts[2]});
		const addressl0V8ssU = await GardenContractV2qQLU5AQ.changeOwner.call(addressIZ3g7qA, {from: accounts[4]});
		const stringWXM61e = await GardenContractV2qQLU5AQ.claimDecompose.call(stringloW6sg, uintjF2iEDT, {from: accounts[1]});
		const uint8UxFOuy5 = await GardenContractV2qQLU5AQ.operationBurnMint.call(uintWiMlY4l, uintbSOpVaH, uintPNSYdIY, {from: accounts[1]});

		await expect(GardenContractV2qQLU5AQ.timeUntilNextTLP.call(stringRm59nwr, uintkW9PwF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressNQdMnwY = accounts[3]
		const addressTAoIhAc = accounts[5]
		const addressjnfk0pB = accounts[0]
		const GardenContractV2qQLU5AQ = await GardenContractV2.new(addressNQdMnwY, addressTAoIhAc, addressjnfk0pB, {from: accounts[3]});
		const stringYZ6N9WT = "6vELqjl9kAebc57wseKboRI7SptijZJ9btx2UShBXUuzEpXAxlhhTLyxNLKuTt8SlsVoVP9HUQ2U2FJdSP37NQ"
		const uintTyLpA8 = BigInt("970")
		const uintDrPu0Mp = BigInt("99")
		const uinttqwvxZt = BigInt("203")
		const stringxCJzs6b = await GardenContractV2qQLU5AQ.harvestAllBeds.call(stringYZ6N9WT, {from: accounts[1]});
		const uint8UxFOuy5 = await GardenContractV2qQLU5AQ.operationBurnMint.call(uinttqwvxZt, uintDrPu0Mp, uintTyLpA8, {from: accounts[1]});

		await expect(GardenContractV2qQLU5AQ.harvestAllBeds.call(stringYZ6N9WT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKAPWh3h = accounts[3]
		const addresshjKoiVX = accounts[5]
		const addressawuQuGs = accounts[0]
		const GardenContractV2qQLU5AQ = await GardenContractV2.new(addressKAPWh3h, addresshjKoiVX, addressawuQuGs, {from: accounts[3]});
		const uintYl66kZU = BigInt("0")
		const uintmYZrisw = BigInt("136")
		const stringe2nNUYj = "uVbiHXReztpy3mTCNa1Mowjk2y1TcU3gm5iCPBy888UQAx1vYAkDRquHNZWIbO5UVNIpWfot8gK"
		const stringdNSBvj7 = "CNfARzHXcpwflsDAZMyn6084vNcWOpuO09hmtRsqzrsnDQJsHykQb1o7iB5RuVBAKfOCF5VMgKIkA7k8Twzv9bRUIWHTsJi"
		const addresseA6P7Uq = accounts[2]
		const uint256TXOaRra = await GardenContractV2qQLU5AQ.getTotalrTLPHarvest.call(uintYl66kZU, {from: accounts[2]});
		const stringZdOlI8h = await GardenContractV2qQLU5AQ.withdraw.call(stringe2nNUYj, uintmYZrisw, {from: accounts[4]});
		const uint256jZ6vHSl = await GardenContractV2qQLU5AQ.balanceOf.call(addresseA6P7Uq, stringdNSBvj7, {from: accounts[4]});

		await expect(GardenContractV2qQLU5AQ.getTotalrTLPHarvest.call(uintYl66kZU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspbs9Q5x = accounts[4]
		const addressC7Ggz9H = accounts[4]
		const addressKu2Tsa7 = accounts[0]
		const GardenContractV2RWJPAU5 = await GardenContractV2.new(addresspbs9Q5x, addressC7Ggz9H, addressKu2Tsa7, {from: accounts[2]});
		const addressLvjdsD1 = accounts[3]
		const addressQyXZIzB = accounts[3]
		const uintN5J77WQ = BigInt("63")
		const stringhJBrvHB = "MuhwGMRll5EEal9YLFVXnhViL8iXIvkLZFsxRMckN2J6cqeKhSrpyOmaWBstH2uL4A2XmWlgww1T0eVyGhvO7ds2cZ12C4U"
		const addressOjRsaNF = await GardenContractV2RWJPAU5.changeBenefitiary.call(addressLvjdsD1, {from: accounts[2]});
		const addressHbXDY0 = await GardenContractV2RWJPAU5.changeBenefitiary.call(addressQyXZIzB, {from: accounts[2]});
		const stringNOk5UAv = await GardenContractV2RWJPAU5.withdraw.call(stringhJBrvHB, uintN5J77WQ, {from: accounts[0]});

		await expect(GardenContractV2RWJPAU5.withdraw.call(stringhJBrvHB, uintN5J77WQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
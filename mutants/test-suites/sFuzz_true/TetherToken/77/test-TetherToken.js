const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintNYa6pgV = BigInt("1835")
		const stringPGT32mp = "iBEcCVHgUAwETUAxsc9NtFiAQsRii8IwQPk28e8plugwTj1cAXiP4yT9UWCj4etHj6Oi8eaHQHIPD7VfCkvmzI7ULGY5iRp"
		const stringWho9qK7 = "ChtvUNaYwIOKgDYFweI2JUEP4plNE"
		const uintR3NPYtn = BigInt("683")
		const TetherTokenxVSI4b5 = await TetherToken.new(uintNYa6pgV, stringPGT32mp, stringWho9qK7, uintR3NPYtn, {from: accounts[3]});
		const uintV4hetq = BigInt("1202")
		const addressGS9PfA = accounts[0]
		const uintqR00BkP = BigInt("407")
//		const addressBcFub3a = await TetherTokenxVSI4b5.transfer.call(addressGS9PfA, uintV4hetq, {from: "0x0000000000000000000000000000000000000001"});
//		const uinteztJiIP = await TetherTokenxVSI4b5.redeem.call(uintqR00BkP, {from: accounts[0]});

		await expect(TetherTokenxVSI4b5.transfer.call(addressGS9PfA, uintV4hetq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintwDHnAK = BigInt("1066")
		const stringqz8VttY = "OFm4uDG2gs6JNHTRVM2DyGGQQIEQXEs6bUz5Xp5JjxvEI7h0kG1hUrR38QY604ar4btqNzJ3"
		const stringa8YKKUI = "UhAgOf4g3qTBS7lnqi45y144h64b"
		const uintdzgAaVR = BigInt("1847")
		const TetherTokeniIQOXq6 = await TetherToken.new(uintwDHnAK, stringqz8VttY, stringa8YKKUI, uintdzgAaVR, {from: accounts[3]});
		const addressbD7Bx1C = accounts[0]
		const addressS83nWyn = accounts[2]
		const uintsNeazIE = BigInt("147")
		const addressTdSaiWe = accounts[2]
		const addressZ8UzvBm = accounts[1]
		const addressmXiumSW = accounts[5]
		const addressAiuodK = accounts[5]
		const addressOsLNI0e = accounts[2]
		const uintfOfbrcs = await TetherTokeniIQOXq6.allowance.call(addressS83nWyn, addressbD7Bx1C, {from: accounts[4]});
//		const addresskTX5SJF = await TetherTokeniIQOXq6.transferFrom.call(addressZ8UzvBm, addressTdSaiWe, uintsNeazIE, {from: accounts[5]});
//		const uintsdQthkL = await TetherTokeniIQOXq6.allowance.call(addressAiuodK, addressmXiumSW, {from: accounts[2]});
//		const uintqSHHtAf = await TetherTokeniIQOXq6.balanceOf.call(addressOsLNI0e, {from: accounts[1]});
//		const uintvavZ6Qd = await TetherTokeniIQOXq6.totalSupply.call({from: accounts[3]});

		assert.equal(uintfOfbrcs, BigInt("0"))
		await expect(TetherTokeniIQOXq6.transferFrom.call(addressZ8UzvBm, addressTdSaiWe, uintsNeazIE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintHtrOLR = BigInt("1826")
		const stringKANHUSp = "vTCfIHlHHT7krAq8WioX4rfRC2DMgN8VDdB7yXRcjEwpB"
		const stringkF9ZPht = "hq4JyjhfPq9jtqx571mkLFqjxuOt8YxirFJA"
		const uintjGZBXHA = BigInt("672")
		const TetherTokenGDblmxj = await TetherToken.new(uintHtrOLR, stringKANHUSp, stringkF9ZPht, uintjGZBXHA, {from: accounts[1]});
		const addresshAIOxRj = accounts[4]
		const uintJzJr3L = BigInt("1559")
		const uintvKJ3WzN = await TetherTokenGDblmxj.totalSupply.call({from: accounts[4]});
		const uintklQcLHa = await TetherTokenGDblmxj.balanceOf.call(addresshAIOxRj, {from: accounts[2]});
		const uintz256UjT = await TetherTokenGDblmxj.totalSupply.call({from: accounts[4]});
//		const uintZyxjqIB = await TetherTokenGDblmxj.redeem.call(uintJzJr3L, {from: accounts[2]});

		assert.equal(uintklQcLHa, BigInt("0"))
		assert.equal(uintvKJ3WzN, BigInt("1826"))
		assert.equal(uintz256UjT, BigInt("1826"))
		await expect(TetherTokenGDblmxj.redeem.call(uintJzJr3L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintO7SqJkM = BigInt("1351")
		const stringRvdPBqN = "yhp7nHwnHwrg81oU"
		const stringRaFEUi = "cBkM7AC0OqHsyYBChd2Eq3u5XOj8dgzt3QC5Qk9PLu4"
		const uintopb0amM = BigInt("293")
		const TetherTokenXckwir = await TetherToken.new(uintO7SqJkM, stringRvdPBqN, stringRaFEUi, uintopb0amM, {from: accounts[3]});
		const addressUF1anU = accounts[0]
		const addressb0WWzNS = accounts[1]
		const uintxEc3264 = BigInt("100")
		const addressekqYLS = accounts[1]
		const addressqJpJrbN = "0x0000000000000000000000000000000000000001"
		const addressE8gxHY4 = accounts[2]
		const uintlep4gDV = await TetherTokenXckwir.allowance.call(addressb0WWzNS, addressUF1anU, {from: accounts[3]});
		const uintyV2MzKa = await TetherTokenXckwir.totalSupply.call({from: accounts[4]});
//		const uintqNzq5T8 = await TetherTokenXckwir.issue.call(uintxEc3264, {from: accounts[4]});
//		const uint4gIN3X = await TetherTokenXckwir.balanceOf.call(addressekqYLS, {from: accounts[0]});
//		const uintmEo8Mmq = await TetherTokenXckwir.allowance.call(addressE8gxHY4, addressqJpJrbN, {from: accounts[0]});

		assert.equal(uintlep4gDV, BigInt("0"))
		assert.equal(uintyV2MzKa, BigInt("1351"))
		await expect(TetherTokenXckwir.issue.call(uintxEc3264, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintc9Stvl2 = BigInt("1862")
		const stringwfi58Se = "uUDRtFCoYPd9sHUUrHfuzWPl7d4PROETuazZloYixwR7nTNTki9LB2PKxIqP4uax5YV3jOR7En80DTA4YHlEJls"
		const stringayCmu5R = "5rlV5K3BVpWuxFEQAoq4vQsQdgO9AUVe1Ky7g7GDB5qLO766TJnFxBuTKQlH9"
		const uintl9RP8oc = BigInt("756")
		const TetherTokenayiO9UE = await TetherToken.new(uintc9Stvl2, stringwfi58Se, stringayCmu5R, uintl9RP8oc, {from: accounts[0]});
		const uintIIjFOJ2 = BigInt("930")
		const addressLRaX9Eg = accounts[3]
		const uintUJgH4Cy = BigInt("1859")
		const uintV5GpiJT = BigInt("1618")
		const addressGlQRF8N = await TetherTokenayiO9UE.approve.call(addressLRaX9Eg, uintIIjFOJ2, {from: accounts[3]});
		const uintjRC0jAt = await TetherTokenayiO9UE.totalSupply.call({from: accounts[0]});
//		const uinthyhMQSZ = await TetherTokenayiO9UE.redeem.call(uintUJgH4Cy, {from: accounts[3]});
//		const uintiW71qaS = await TetherTokenayiO9UE.issue.call(uintV5GpiJT, {from: accounts[2]});

		assert.equal(uintjRC0jAt, BigInt("1862"))
		await expect(TetherTokenayiO9UE.redeem.call(uintUJgH4Cy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpUwtV9r = BigInt("1155")
		const stringOmxsqk6 = "RuGUo6"
		const stringAlX325h = "nEynRwGNoUuyuqIwUViJPf0RGh5Zow4woynfosqNoedPU62b3NI"
		const uint6gLyIc = BigInt("835")
		const TetherTokenrJkV4Je = await TetherToken.new(uintpUwtV9r, stringOmxsqk6, stringAlX325h, uint6gLyIc, {from: "0x0000000000000000000000000000000000000001"});
		const uintdg4XbqZ = BigInt("13")
		const uintKbhOcxB = BigInt("1450")
		const addressT5VT1Cf = accounts[2]
		const uintnqpooTp = BigInt("57")
		const addresstdU1w8u = accounts[1]
		const addresshfqiETC = accounts[2]
		const addressilrfzu6 = accounts[3]
		const addressjGUBLwB = "0x0000000000000000000000000000000000000001"
		const uintZJbpadr = await TetherTokenrJkV4Je.redeem.call(uintdg4XbqZ, {from: accounts[3]});
		const addressPpp8Pxo = await TetherTokenrJkV4Je.approve.call(addressT5VT1Cf, uintKbhOcxB, {from: accounts[1]});
		const addressbSR6oWa = await TetherTokenrJkV4Je.transferFrom.call(addresshfqiETC, addresstdU1w8u, uintnqpooTp, {from: accounts[4]});
		const uintOI8ywW = await TetherTokenrJkV4Je.allowance.call(addressjGUBLwB, addressilrfzu6, {from: accounts[4]});
	});

	it('test for TetherToken', async () => {
		const uinth8Eyrnf = BigInt("1960")
		const stringXjkGkHi = "Jrs8VjpQsCXgSK3Ir7CzlTYLEizosLiEc3gmQA8FEO4GCIKgUvALk"
		const stringcrLfpQp = "YCJB"
		const uintmm3BVMi = BigInt("901")
		const TetherTokenb52kMSW = await TetherToken.new(uinth8Eyrnf, stringXjkGkHi, stringcrLfpQp, uintmm3BVMi, {from: accounts[2]});
		const addressC14LANe = accounts[0]
		const addressjARemCl = accounts[2]
		const addressJP7Dxz9 = accounts[1]
		const uintvDH6v1D = BigInt("715")
		const uintj6UZnLH = BigInt("494")
		const addressy2o85x = accounts[0]
//		const addressKNX7NcJ = await TetherTokenb52kMSW.deprecate.call(addressC14LANe, {from: accounts[1]});
//		const uintH9pXSf = await TetherTokenb52kMSW.allowance.call(addressJP7Dxz9, addressjARemCl, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPnrPAwp = await TetherTokenb52kMSW.issue.call(uintvDH6v1D, {from: accounts[3]});
//		const uintB4wvb7v = await TetherTokenb52kMSW.issue.call(uintj6UZnLH, {from: accounts[4]});
//		const uintcRwwda0 = await TetherTokenb52kMSW.totalSupply.call({from: accounts[2]});
//		const uintQ8gEio = await TetherTokenb52kMSW.balanceOf.call(addressy2o85x, {from: accounts[5]});

		await expect(TetherTokenb52kMSW.deprecate.call(addressC14LANe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintftcUsAQ = BigInt("692")
		const stringQgwehMU = "DXiF3P1H7RPw8kCQHh2dUcUV"
		const stringm0lhDCr = "cB4Bs3F7mPNwkHQ8nxrIrKtruASJbogBndiue0gi5ANT46y7LXHNdMSXTdBj31MqKI"
		const uintAIFbPE = BigInt("1377")
		const TetherTokenwmmMzpZ = await TetherToken.new(uintftcUsAQ, stringQgwehMU, stringm0lhDCr, uintAIFbPE, {from: accounts[2]});
		const uintp8IPx8R = BigInt("397")
		const uintTQUaEnD = BigInt("1796")
		const uintu3LBbAl = BigInt("2040")
		const addressWLMcVzh = "0x0000000000000000000000000000000000000001"
		const addressgXKIlPU = accounts[1]
		const uintTPWts3s = BigInt("1109")
		const uintBiprOg6 = BigInt("1404")
		const addressE6qz71T = accounts[1]
//		const uintvxOVaPJ = await TetherTokenwmmMzpZ.setParams.call(uintTQUaEnD, uintp8IPx8R, {from: accounts[5]});
//		const addressnrYt0WA = await TetherTokenwmmMzpZ.transferFrom.call(addressgXKIlPU, addressWLMcVzh, uintu3LBbAl, {from: accounts[1]});
//		const uintOAcmhx8 = await TetherTokenwmmMzpZ.issue.call(uintTPWts3s, {from: accounts[0]});
//		const addressKLeaR1j = await TetherTokenwmmMzpZ.transfer.call(addressE6qz71T, uintBiprOg6, {from: accounts[2]});

		await expect(TetherTokenwmmMzpZ.setParams.call(uintTQUaEnD, uintp8IPx8R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintTzG5qxE = BigInt("1862")
		const stringwfi58Se = "uUDRtFCoYPd9sHUUrHfuzWPl7d4PROETuazZloYixwR7nTNTki9LB2PKxIqP4uax5YV3jOR7En80DTA4YHlEJls"
		const stringayCmu5R = "5rlV5K3BVpWuxFEQAoq4vQsQdgO9AUVe1Ky7g7GDB5qLO766TJnFxBuTKQlH9"
		const uintdPJYDJN = BigInt("756")
		const TetherTokenayiO9UE = await TetherToken.new(uintTzG5qxE, stringwfi58Se, stringayCmu5R, uintdPJYDJN, {from: accounts[0]});
		const uintSiSsWQ = BigInt("930")
		const addressCkI7X4Q = accounts[3]
		const uintPGD4L25 = BigInt("829")
		const uintbtKUFqT = BigInt("1859")
		const uintTdCkSbG = BigInt("1618")
		const addressGlQRF8N = await TetherTokenayiO9UE.approve.call(addressCkI7X4Q, uintSiSsWQ, {from: accounts[3]});
		const uintxcufGfw = await TetherTokenayiO9UE.totalSupply.call({from: accounts[2]});
		const uintjRC0jAt = await TetherTokenayiO9UE.totalSupply.call({from: accounts[0]});
		const uintfsKO8Yn = await TetherTokenayiO9UE.redeem.call(uintPGD4L25, {from: accounts[0]});
//		const uinthyhMQSZ = await TetherTokenayiO9UE.redeem.call(uintbtKUFqT, {from: accounts[3]});
//		const uintiW71qaS = await TetherTokenayiO9UE.issue.call(uintTdCkSbG, {from: accounts[2]});

		assert.equal(uintjRC0jAt, BigInt("1862"))
		assert.equal(uintxcufGfw, BigInt("1862"))
		await expect(TetherTokenayiO9UE.redeem.call(uintbtKUFqT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintgOlZei = BigInt("1038")
		const stringwZJfYlE = "0d4KuUFQyM8sbiyaIM7rOgjv1MN6DX0jEBpVpKNn0RlYGfmexg82yLy65IzhayB3VCeES1xcxeuiR7IWYO5hbEmv4HxppiyCK"
		const stringx3PJXyX = "sNxTZOy4TyQiEBko0e6ikdRkjwthr1ksVatGNPEo22EC2YErgw5hWPqDnhwVJWsosAShya0KjFsi5zJ"
		const uintbjJmVzI = BigInt("956")
		const TetherTokenWXkCvj5 = await TetherToken.new(uintgOlZei, stringwZJfYlE, stringx3PJXyX, uintbjJmVzI, {from: accounts[4]});
		const uint5NQykf = BigInt("1427")
		const addressi1SBbl2 = accounts[3]
		const addressXUqr0Dz = accounts[0]
		const addressfKvAQI3 = accounts[5]
		const addressno3tW7z = "0x0000000000000000000000000000000000000001"
		const uintRxUYcL = BigInt("557")
		const addresssosHEpy = accounts[2]
		const uinthf34sZR = await TetherTokenWXkCvj5.issue.call(uint5NQykf, {from: accounts[4]});
		const uint5T2h7b = await TetherTokenWXkCvj5.allowance.call(addressXUqr0Dz, addressi1SBbl2, {from: accounts[2]});
		const uintUSLk8KE = await TetherTokenWXkCvj5.allowance.call(addressno3tW7z, addressfKvAQI3, {from: accounts[4]});
//		const uintvVfCCNH = await TetherTokenWXkCvj5.issue.call(uintRxUYcL, {from: accounts[2]});
//		const uintP9KEuTs = await TetherTokenWXkCvj5.balanceOf.call(addresssosHEpy, {from: accounts[4]});
//		const uintF0BOUbs = await TetherTokenWXkCvj5.totalSupply.call({from: accounts[3]});

		assert.equal(uint5T2h7b, BigInt("0"))
		assert.equal(uintUSLk8KE, BigInt("0"))
		await expect(TetherTokenWXkCvj5.issue.call(uintRxUYcL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintlA1IfWR = BigInt("1835")
		const stringPGT32mp = "iBEcCVHgUAwETUAxsc9NtFiAQsRii8IwQPk28e8plugwTj1cAXiP4yT9UWCj4etHj6Oi8eaHQHIPD7VfCkvmzI7ULGY5iRp"
		const stringWho9qK7 = "ChtvUNaYwIOKgDYFweI2JUEP4plNE"
		const uinthZr2SF = BigInt("683")
		const TetherTokenxVSI4b5 = await TetherToken.new(uintlA1IfWR, stringPGT32mp, stringWho9qK7, uinthZr2SF, {from: accounts[3]});
		const addressl16TXqS = accounts[3]
		const addressob1BKC = accounts[1]
		const uintbA1KzM = BigInt("407")
		const uintcIW2alK = await TetherTokenxVSI4b5.balanceOf.call(addressl16TXqS, {from: accounts[1]});
		const addressAyyK1C = await TetherTokenxVSI4b5.deprecate.call(addressob1BKC, {from: accounts[3]});
//		const uinteztJiIP = await TetherTokenxVSI4b5.redeem.call(uintbA1KzM, {from: accounts[0]});

		assert.equal(uintcIW2alK, BigInt("1835"))
		await expect(TetherTokenxVSI4b5.redeem.call(uintbA1KzM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintVD26Ca8 = BigInt("1712")
		const stringl8dNadB = "NNRj5V66cWAtrdBkCmd6NndjRz1f"
		const stringRH69TYu = "fBzdzwqdnly"
		const uintngeXDU5 = BigInt("2021")
		const TetherTokenufz8eS = await TetherToken.new(uintVD26Ca8, stringl8dNadB, stringRH69TYu, uintngeXDU5, {from: accounts[1]});
		const uintLw6FUSk = BigInt("669")
		const uintT1F1vWO = BigInt("1187")
		const addressAC6n7DE = accounts[3]
		const addressm3JXnP9 = accounts[5]
		const addressCJUED4u = accounts[0]
//		const uintnOS8GSg = await TetherTokenufz8eS.setParams.call(uintT1F1vWO, uintLw6FUSk, {from: accounts[1]});
//		const addressOTJZB4B = await TetherTokenufz8eS.deprecate.call(addressAC6n7DE, {from: accounts[2]});
//		const uintLbVSeSH = await TetherTokenufz8eS.allowance.call(addressCJUED4u, addressm3JXnP9, {from: accounts[4]});

		await expect(TetherTokenufz8eS.setParams.call(uintT1F1vWO, uintLw6FUSk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintlSX2Rd4 = BigInt("692")
		const stringQgwehMU = "DXiF3P1H7RPw8kCQHh2dUcUV"
		const stringm0lhDCr = "cB4Bs3F7mPNwkHQ8nxrIrKtruASJbogBndiue0gi5ANT46y7LXHNdMSXTdBj31MqKI"
		const uintVL6hM0b = BigInt("1377")
		const TetherTokenwmmMzpZ = await TetherToken.new(uintlSX2Rd4, stringQgwehMU, stringm0lhDCr, uintVL6hM0b, {from: accounts[2]});
		const uintpMHiIPl = BigInt("2040")
		const addressIh2PEbI = "0x00000000000000000000000000000000000000-1"
		const addressk4O97wX = accounts[1]
		const uintZeYTOw3 = BigInt("513")
		const uintyfRrM88 = await TetherTokenwmmMzpZ.totalSupply.call({from: accounts[4]});
//		const addressnrYt0WA = await TetherTokenwmmMzpZ.transferFrom.call(addressk4O97wX, addressIh2PEbI, uintpMHiIPl, {from: accounts[1]});
//		const uintDQIqzSp = await TetherTokenwmmMzpZ.redeem.call(uintZeYTOw3, {from: accounts[1]});

		assert.equal(uintyfRrM88, BigInt("692"))
		await expect(TetherTokenwmmMzpZ.transferFrom.call(addressk4O97wX, addressIh2PEbI, uintpMHiIPl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
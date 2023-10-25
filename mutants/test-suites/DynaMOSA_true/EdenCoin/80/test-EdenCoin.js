const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinLyk2OUV = await EdenCoin.new({from: accounts[2]});
		const uintoZVEmyy = BigInt("807")
		const addressq4WmwQu = accounts[5]
		const uintXFFTMLu = BigInt("715")
		const addresshgcdyLq = accounts[5]
		const boolMrWQXX3 = await EdenCoinLyk2OUV.increaseApproval.call(addressq4WmwQu, uintoZVEmyy, {from: accounts[2]});
		const boolhPboHZU = await EdenCoinLyk2OUV.approve.call(addresshgcdyLq, uintXFFTMLu, {from: accounts[0]});

		assert.equal(boolMrWQXX3, true)
		assert.equal(boolhPboHZU, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinJSF6CJg = await EdenCoin.new({from: accounts[4]});
		const uintZQhEpx = BigInt("89")
		const addresse7KJaX = accounts[0]
		const uintHzId5QN = BigInt("1587")
		const addressUFjCZwy = accounts[4]
		const uintapfl1Kf = BigInt("1830")
		const addressDLG8pQR = accounts[2]
		const addressx7Mb2s = accounts[4]
		const boolBLp81qJ = await EdenCoinJSF6CJg.decreaseApproval.call(addresse7KJaX, uintZQhEpx, {from: accounts[5]});
		const boolR0aRXVo = await EdenCoinJSF6CJg.increaseApproval.call(addressUFjCZwy, uintHzId5QN, {from: accounts[3]});
//		const booltftkaFR = await EdenCoinJSF6CJg.transferFrom.call(addressx7Mb2s, addressDLG8pQR, uintapfl1Kf, {from: accounts[4]});

		assert.equal(boolBLp81qJ, true)
		assert.equal(boolR0aRXVo, true)
		await expect(EdenCoinJSF6CJg.transferFrom.call(addressx7Mb2s, addressDLG8pQR, uintapfl1Kf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoin0EsrfM = await EdenCoin.new({from: accounts[5]});
		const uintXFiVxWh = BigInt("773")
		const addressrskKaq7 = accounts[1]
		const addressxvMBBoP = accounts[1]
//		const boolaxrZe35 = await EdenCoin0EsrfM.transfer.call(addressrskKaq7, uintXFiVxWh, {from: accounts[2]});
//		const uint256yL42wE8 = await EdenCoin0EsrfM.balanceOf.call(addressxvMBBoP, {from: accounts[4]});

		await expect(EdenCoin0EsrfM.transfer.call(addressrskKaq7, uintXFiVxWh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinevh8Y5B = await EdenCoin.new({from: accounts[1]});
		const addressDtHKqdO = accounts[3]
		const uintX3nNCK3 = BigInt("1481")
		const addressFLGsBzc = accounts[0]
		const uintyK1sh93 = BigInt("93")
		const addressLoLylfy = accounts[3]
		const uintxOkA3MF = BigInt("964")
		const addressNvd3RiS = accounts[3]
		const addressQ6rsbpn = accounts[2]
		const uintaZF22L0 = BigInt("723")
		const addressHSsBIwD = accounts[4]
		const addressxYCPpK6 = "0x0000000000000000000000000000000000000001"
		const uintS7oikcS = BigInt("1495")
		const addressED8ncmj = accounts[1]
		const uint256pMXbSB5 = await EdenCoinevh8Y5B.balanceOf.call(addressDtHKqdO, {from: accounts[0]});
//		const boolkmKa8A = await EdenCoinevh8Y5B.transfer.call(addressFLGsBzc, uintX3nNCK3, {from: accounts[4]});
//		const boolDbkX5Tl = await EdenCoinevh8Y5B.approve.call(addressLoLylfy, uintyK1sh93, {from: accounts[5]});
//		const boolNQRQAl2 = await EdenCoinevh8Y5B.transferFrom.call(addressQ6rsbpn, addressNvd3RiS, uintxOkA3MF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqMuUt4b = await EdenCoinevh8Y5B.transferFrom.call(addressxYCPpK6, addressHSsBIwD, uintaZF22L0, {from: accounts[2]});
//		const boollLc5RV2 = await EdenCoinevh8Y5B.approve.call(addressED8ncmj, uintS7oikcS, {from: accounts[4]});

		assert.equal(uint256pMXbSB5, BigInt("0"))
		await expect(EdenCoinevh8Y5B.transfer.call(addressFLGsBzc, uintX3nNCK3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinPJxtnAl = await EdenCoin.new({from: accounts[3]});
		const addressaAPG9Pb = accounts[3]
		const addressFkYxdb = "0x0000000000000000000000000000000000000001"
		const addressRPNohyJ = accounts[0]
		const addressRV3wcL0 = accounts[2]
		const addressP3ghhX = accounts[3]
		const addressPot5Ba = accounts[0]
		const addressYpxqe9 = accounts[0]
		const addressdUNXvOS = accounts[5]
		const uint256wPLoy5U = await EdenCoinPJxtnAl.allowance.call(addressFkYxdb, addressaAPG9Pb, {from: accounts[4]});
		const uint2569uq1N9 = await EdenCoinPJxtnAl.allowance.call(addressRV3wcL0, addressRPNohyJ, {from: accounts[2]});
		const uint256pNkGwEt = await EdenCoinPJxtnAl.allowance.call(addressPot5Ba, addressP3ghhX, {from: accounts[4]});
		const uint256wzi8i4r = await EdenCoinPJxtnAl.allowance.call(addressdUNXvOS, addressYpxqe9, {from: accounts[2]});

		assert.equal(uint2569uq1N9, BigInt("0"))
		assert.equal(uint256pNkGwEt, BigInt("0"))
		assert.equal(uint256wPLoy5U, BigInt("0"))
		assert.equal(uint256wzi8i4r, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoint7UjXiz = await EdenCoin.new({from: accounts[0]});
		const uintAKV7ps = BigInt("1164")
		const addressRH9Akjx = accounts[2]
		const uintKovxpu = BigInt("105")
		const addressxaUH59S = accounts[3]
		const uintgIJB3n1 = BigInt("1211")
		const addressIgymsdB = accounts[3]
		const boolbs7bvlh = await EdenCoint7UjXiz.transfer.call(addressRH9Akjx, uintAKV7ps, {from: accounts[0]});
		const boolM6IGWOv = await EdenCoint7UjXiz.increaseApproval.call(addressxaUH59S, uintKovxpu, {from: accounts[4]});
		const boolHynHyv = await EdenCoint7UjXiz.approve.call(addressIgymsdB, uintgIJB3n1, {from: accounts[3]});

		assert.equal(boolHynHyv, true)
		assert.equal(boolM6IGWOv, true)
		assert.equal(boolbs7bvlh, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoiniwrI55V = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVWiB9TR = BigInt("1929")
		const addressWaSM8XO = accounts[0]
		const uintRArh89C = BigInt("433")
		const addressLwToUbX = accounts[2]
		const addressemoMDKC = accounts[5]
		const uintWib1JzQ = BigInt("489")
		const addressZ2B4GIb = accounts[5]
		const uintDJTYca = BigInt("748")
		const addresso1vpXin = accounts[4]
		const booloUUC9XA = await EdenCoiniwrI55V.decreaseApproval.call(addressWaSM8XO, uintVWiB9TR, {from: accounts[4]});
		const boolxlzzAR3 = await EdenCoiniwrI55V.transferFrom.call(addressemoMDKC, addressLwToUbX, uintRArh89C, {from: accounts[1]});
		const boolLI9XINy = await EdenCoiniwrI55V.decreaseApproval.call(addressZ2B4GIb, uintWib1JzQ, {from: accounts[0]});
		const boolG9ykmtb = await EdenCoiniwrI55V.decreaseApproval.call(addresso1vpXin, uintDJTYca, {from: accounts[0]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinJSF6CJg = await EdenCoin.new({from: accounts[4]});
		const uintrTh6btf = BigInt("656")
		const addressoYTvkyr = accounts[5]
		const uintCznUO4j = BigInt("1722")
		const addressasAEwtu = accounts[1]
		const uintaSQu6d3 = BigInt("0")
		const addressyiBWrI = accounts[1]
		const uintIrbPZZV = BigInt("1572")
		const addressIM4oJJX = accounts[5]
		const uintEyF17d = BigInt("1830")
		const addressbzIzuH = accounts[2]
		const addressFYYTBgQ = accounts[4]
		const uintfFLXXA = BigInt("841")
		const addressqs6TgA2 = accounts[3]
		const uinthwepmvE = BigInt("98")
		const addresslrqHPSC = accounts[4]
		const uintmSCOvvg = BigInt("1938")
		const addressZudYsOn = accounts[1]
		const boolcC0JFSf = await EdenCoinJSF6CJg.increaseApproval.call(addressoYTvkyr, uintrTh6btf, {from: accounts[0]});
		const boolXkGQLlm = await EdenCoinJSF6CJg.approve.call(addressasAEwtu, uintCznUO4j, {from: accounts[2]});
		const boolBLp81qJ = await EdenCoinJSF6CJg.decreaseApproval.call(addressyiBWrI, uintaSQu6d3, {from: accounts[5]});
		const boolR0aRXVo = await EdenCoinJSF6CJg.increaseApproval.call(addressIM4oJJX, uintIrbPZZV, {from: accounts[3]});
//		const booltftkaFR = await EdenCoinJSF6CJg.transferFrom.call(addressFYYTBgQ, addressbzIzuH, uintEyF17d, {from: accounts[4]});
//		const bool240gq4 = await EdenCoinJSF6CJg.transfer.call(addressqs6TgA2, uintfFLXXA, {from: accounts[0]});
//		const boolyZG5qOM = await EdenCoinJSF6CJg.transfer.call(addresslrqHPSC, uinthwepmvE, {from: accounts[4]});
//		const boolb6aYIK = await EdenCoinJSF6CJg.increaseApproval.call(addressZudYsOn, uintmSCOvvg, {from: accounts[5]});

		assert.equal(boolBLp81qJ, true)
		assert.equal(boolR0aRXVo, true)
		assert.equal(boolXkGQLlm, true)
		assert.equal(boolcC0JFSf, true)
		await expect(EdenCoinJSF6CJg.transferFrom.call(addressFYYTBgQ, addressbzIzuH, uintEyF17d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
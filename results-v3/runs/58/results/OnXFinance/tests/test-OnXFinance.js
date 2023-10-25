const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintSzoKd9G = BigInt("20")
		const OnXFinancemyeipVt = await OnXFinance.new(stringilTxZW4, stringvvDCZWk, uintSzoKd9G, {from: accounts[3]});
		const uintBglumA3 = BigInt("1898")
		const addressZ9ChT6 = accounts[0]
		const uintZZxYVts = BigInt("115")
		const addressHwitTs4 = accounts[3]
		const addressyXXEkUs = accounts[0]
		const uintcvvufUu = BigInt("1422")
		const addressTEbCnGU = accounts[0]
		const boolHiLKPkL = await OnXFinancemyeipVt.transfer.call(addressZ9ChT6, uintBglumA3, {from: accounts[0]});
		const boolXtmThxU = await OnXFinancemyeipVt.transferFrom.call(addressyXXEkUs, addressHwitTs4, uintZZxYVts, {from: accounts[3]});
		const boolZ0ZuK1V = await OnXFinancemyeipVt.approveAndCall.call(addressTEbCnGU, uintcvvufUu, {from: accounts[2]});

		await expect(OnXFinancemyeipVt.transfer.call(addressZ9ChT6, uintBglumA3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringIOnlbFz = "q2o2OLNClxyapaOdaRgzyjBRm8jyJKVKqn2JwPyyq3FPJnwvQEpS8fJUMjEQTLQ9jL0X7"
		const stringgfb74va = "bhOLS15NkGginWhSEI6WlGLmj3rT1G16g7EoIghxKndbJu1"
		const uinty1499b = BigInt("2010")
		const OnXFinancexiZkK7c = await OnXFinance.new(stringIOnlbFz, stringgfb74va, uinty1499b, {from: accounts[4]});
		const uintJOrOkV = BigInt("1803")
		const addressGlmzCvb = accounts[2]
		const uintimpKCJR = BigInt("990")
		const addressTS2dMFq = accounts[2]
		const addressVDkqxph = accounts[5]
		const boolox7Max4 = await OnXFinancexiZkK7c.transfer.call(addressGlmzCvb, uintJOrOkV, {from: accounts[4]});
		const boolWtjy2HC = await OnXFinancexiZkK7c.transferFrom.call(addressVDkqxph, addressTS2dMFq, uintimpKCJR, {from: accounts[5]});

		assert.equal(boolox7Max4, true)
		await expect(OnXFinancexiZkK7c.transferFrom.call(addressVDkqxph, addressTS2dMFq, uintimpKCJR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringFhRVSAx = "jjSSm8UB9Hmvxg8wYFsQX6RuCGLyo2SwfxGJ0Zc5cDIxzk5QWsvsF3WgfvQcrQKhbmZi"
		const stringtlrLvaG = "CWOFQmJWeLolpBVSitRicsOQJz8aLsSiNBJJBXpSh4qC56IcBDo596fDycWv3odj70tLfwSYx8DWpQ4cu6Mj1XGG8"
		const uintyT7m63X = BigInt("1669")
		const OnXFinancefvCXtN = await OnXFinance.new(stringFhRVSAx, stringtlrLvaG, uintyT7m63X, {from: accounts[4]});
		const addressKbqMoW = accounts[2]
		const addressQRtDntv = accounts[4]
		const uintLY4rd6u = await OnXFinancefvCXtN.balanceOf.call(addressKbqMoW, {from: accounts[0]});
		const uint8W8A8W3n = await OnXFinancefvCXtN.decimals.call({from: accounts[0]});
		const boolrSzBVvh = await OnXFinancefvCXtN.transferownership.call(addressQRtDntv, {from: accounts[1]});

		assert.equal(uint8W8A8W3n, BigInt("18"))
		assert.equal(uintLY4rd6u, BigInt("0"))
		await expect(OnXFinancefvCXtN.transferownership.call(addressQRtDntv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringwQwLws7 = "NAC22pAsY9O9ts3rwVkBjo1s"
		const stringFuxXlDx = "vRkB79b4AEtFNN7YCanfjTVqarmSSLbwCuZ9GfwQ93Ikf5G4DWbbi6r"
		const uintXVh7N40 = BigInt("27")
		const OnXFinanceKMLdhB = await OnXFinance.new(stringwQwLws7, stringFuxXlDx, uintXVh7N40, {from: accounts[2]});
		const uintX1tEtJ = BigInt("394")
		const addressGDC517 = accounts[0]
		const uintkdwhBgF = BigInt("963")
		const address10kUBE = "0x0000000000000000000000000000000000000001"
		const uintqLOO8ys = BigInt("1455")
		const address1NCyS3 = accounts[2]
		const addressA81VM3e = accounts[0]
		const uintMOrFq2o = BigInt("1765")
		const addressLnGmGF = accounts[2]
		const boolG2Wl4w = await OnXFinanceKMLdhB.approveAndCall.call(addressGDC517, uintX1tEtJ, {from: accounts[1]});
		const boolvMpqW8t = await OnXFinanceKMLdhB.decreaseAllowance.call(address10kUBE, uintkdwhBgF, {from: accounts[4]});
		const booleCjhjPk = await OnXFinanceKMLdhB.transferFrom.call(addressA81VM3e, address1NCyS3, uintqLOO8ys, {from: accounts[5]});
		const boolDuMQu09 = await OnXFinanceKMLdhB.approve.call(addressLnGmGF, uintMOrFq2o, {from: accounts[3]});

		await expect(OnXFinanceKMLdhB.approveAndCall.call(addressGDC517, uintX1tEtJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringwQwLws7 = "NAC22pAsY9O9ts3rwVkBjo1s"
		const stringFuxXlDx = "vRkB79b4AEtFNN7YCanfjTVqarmSSLbwCuZ9GfwQ93Ikf5G4DWbbi6r"
		const uintd0K3azo = BigInt("27")
		const OnXFinanceKMLdhB = await OnXFinance.new(stringwQwLws7, stringFuxXlDx, uintd0K3azo, {from: accounts[2]});
		const uintWhS75Sr = BigInt("963")
		const addresspnsdMSk = "0x0000000000000000000000000000000000000001"
		const uintTInOI2A = BigInt("1455")
		const addresstlRaAbZ = accounts[2]
		const addressIFqdkVN = accounts[0]
		const uintCUKHFPt = BigInt("1765")
		const addressQo5IjLa = accounts[2]
		const uint8NdMouNg = await OnXFinanceKMLdhB.decimals.call({from: accounts[4]});
		const boolvMpqW8t = await OnXFinanceKMLdhB.decreaseAllowance.call(addresspnsdMSk, uintWhS75Sr, {from: accounts[4]});
		const booleCjhjPk = await OnXFinanceKMLdhB.transferFrom.call(addressIFqdkVN, addresstlRaAbZ, uintTInOI2A, {from: accounts[5]});
		const boolDuMQu09 = await OnXFinanceKMLdhB.approve.call(addressQo5IjLa, uintCUKHFPt, {from: accounts[3]});

		assert.equal(uint8NdMouNg, BigInt("18"))
		await expect(OnXFinanceKMLdhB.decreaseAllowance.call(addresspnsdMSk, uintWhS75Sr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringIOnlbFz = "q2o2OLNClxyapaOdaRgzyjBRm8jyJKVKqn2JwPyyq3FPJnwvQEpS8fJUMjEQTLQ9jL0X7"
		const stringgfb74va = "bhOLS15NkGginWhSEI6WlGLmj3rT1G16g7EoIghxKndbJu1"
		const uintudW6Hq = BigInt("2010")
		const OnXFinancexiZkK7c = await OnXFinance.new(stringIOnlbFz, stringgfb74va, uintudW6Hq, {from: accounts[4]});
		const uintxYPJwVD = BigInt("1803")
		const addressNPnNLaw = accounts[2]
		const uintFcjTasQ = BigInt("189")
		const address169lUE = accounts[0]
		const boolox7Max4 = await OnXFinancexiZkK7c.transfer.call(addressNPnNLaw, uintxYPJwVD, {from: accounts[4]});
		const boolurgkFH2 = await OnXFinancexiZkK7c.approve.call(address169lUE, uintFcjTasQ, {from: accounts[3]});

		assert.equal(boolox7Max4, true)
		assert.equal(boolurgkFH2, true)
	});

	it('test for OnXFinance', async () => {
		const stringVP5dRhq = "5aIFWHGuPbtPfT8ciS7vQKyj5lCTgMNR246sCysRQoM1Vg"
		const stringG8lz906 = ""
		const uints3DPdez = BigInt("306")
		const OnXFinanceZ3Jy8aN = await OnXFinance.new(stringVP5dRhq, stringG8lz906, uints3DPdez, {from: accounts[3]});
		const uintZfpdkq = BigInt("0")
		const addressqrbWHk5 = accounts[4]
		const boolRZqO9OE = await OnXFinanceZ3Jy8aN.transfer.call(addressqrbWHk5, uintZfpdkq, {from: accounts[0]});

		assert.equal(boolRZqO9OE, true)
	});

	it('test for OnXFinance', async () => {
		const stringngcLmCI = "m2I3iAMQwcD6IWVMNfspck5qJ4QSt7FjJeA4sVrTYdO8j12kcwYWeOTLyS4yKB2Wtu2Twvl"
		const stringYN1b2hH = "eWoP78KAXG1qiggoWo5Xhd"
		const uintF8FgARC = BigInt("246")
		const OnXFinanceWqwuRHL = await OnXFinance.new(stringngcLmCI, stringYN1b2hH, uintF8FgARC, {from: "0x0000000000000000000000000000000000000001"});
		const uintsgi4qBc = BigInt("550")
		const addressLredRTw = accounts[2]
		const addressap3Vo0c = accounts[3]
		const uintYmWjeMK = BigInt("547")
		const addressH6fOlK = accounts[0]
		const addressDkr3ji8 = accounts[1]
		const booleFCbLlA = await OnXFinanceWqwuRHL.transferFrom.call(addressap3Vo0c, addressLredRTw, uintsgi4qBc, {from: accounts[3]});
		const booliY0bH62 = await OnXFinanceWqwuRHL.approveAndCall.call(addressH6fOlK, uintYmWjeMK, {from: accounts[2]});
		const boolcirSqx = await OnXFinanceWqwuRHL.transferownership.call(addressDkr3ji8, {from: "0x0000000000000000000000000000000000000001"});
		const stringCO48Y5j = await OnXFinanceWqwuRHL.name.call({from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const stringVP5dRhq = "5aIFWHGuPbtPfT8ciS7vQKyj5lCTgMNR246sCysRQoM1Vg"
		const stringG8lz906 = ""
		const uintx0mclzN = BigInt("306")
		const OnXFinanceZ3Jy8aN = await OnXFinance.new(stringVP5dRhq, stringG8lz906, uintx0mclzN, {from: accounts[3]});
		const uintSKRuq3z = BigInt("303")
		const addressoVfmA0 = accounts[1]
		const uintZgGqIlJ = BigInt("0")
		const addressvVuYKYM = accounts[4]
		const booljMcrj3L = await OnXFinanceZ3Jy8aN.approveAndCall.call(addressoVfmA0, uintSKRuq3z, {from: accounts[3]});
		const boolRZqO9OE = await OnXFinanceZ3Jy8aN.transfer.call(addressvVuYKYM, uintZgGqIlJ, {from: accounts[0]});

		assert.equal(boolRZqO9OE, true)
		assert.equal(booljMcrj3L, true)
	});

	it('test for OnXFinance', async () => {
		const stringIOnlbFz = "q2o2OLNClxyapaOdaRgzyjBRm8jyJKVKqn2JwPyyq3FPJnwvQEpS8fJUMjEQTLQ9jL0X7"
		const stringgfb74va = "bhOLS15NkGginWhSEI6WlGLmj3rT1G16g7EoIghxKndbJu1"
		const uintN5AaoHd = BigInt("2010")
		const OnXFinancexiZkK7c = await OnXFinance.new(stringIOnlbFz, stringgfb74va, uintN5AaoHd, {from: accounts[4]});
		const uintgJymISu = BigInt("0")
		const addressz2bWcMC = accounts[1]
		const uinten87yb8 = BigInt("1865")
		const addressmO0KtPO = accounts[3]
		const uintTAhA60F = BigInt("2016")
		const addressWjqmb7T = accounts[3]
		const boolBMNamW0 = await OnXFinancexiZkK7c.approveAndCall.call(addressz2bWcMC, uintgJymISu, {from: accounts[4]});
		const boolFM0XmNb = await OnXFinancexiZkK7c.approve.call(addressmO0KtPO, uinten87yb8, {from: accounts[1]});
		const boolA2OqwR5 = await OnXFinancexiZkK7c.increaseAllowance.call(addressWjqmb7T, uintTAhA60F, {from: accounts[0]});

		assert.equal(boolBMNamW0, true)
		assert.equal(boolFM0XmNb, true)
		await expect(OnXFinancexiZkK7c.increaseAllowance.call(addressWjqmb7T, uintTAhA60F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
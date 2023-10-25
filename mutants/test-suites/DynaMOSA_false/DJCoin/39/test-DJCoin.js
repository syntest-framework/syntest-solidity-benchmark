const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinjTDm1JC = await DJCoin.new({from: accounts[1]});
		const addressKe1GohV = accounts[3]
		const addressNE8cfqw = accounts[2]
		const addressFD2QcbJ = accounts[3]
//		await DJCoinjTDm1JC.renounceOwnership.call({from: accounts[3]});
//		const addressHnYKv1t = await DJCoinjTDm1JC.transferOwnership.call(addressKe1GohV, {from: accounts[4]});
//		const uint256C752P9g = await DJCoinjTDm1JC.allowance.call(addressFD2QcbJ, addressNE8cfqw, {from: accounts[4]});

		await expect(DJCoinjTDm1JC.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinGDs5lb = await DJCoin.new({from: accounts[1]});
		const addressxA8hxit = accounts[0]
		const addressyvsOieC = accounts[3]
		const uint256T2T7md2 = await DJCoinGDs5lb.balanceOf.call(addressxA8hxit, {from: accounts[3]});
		const uint256O1l9USq = await DJCoinGDs5lb.balanceOf.call(addressyvsOieC, {from: "0x0000000000000000000000000000000000000001"});
		const address6z5yzw = await DJCoinGDs5lb.owner.call({from: accounts[1]});

		assert.equal(address6z5yzw, 0xe3c8016Fca9d735A20a04b07E1d1ddf06460BB0a)
		assert.equal(uint256O1l9USq, BigInt("0"))
		assert.equal(uint256T2T7md2, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinhPDVBh = await DJCoin.new({from: accounts[3]});
		const uinttTFeKu = BigInt("641")
		const addressnHVGfgh = accounts[3]
		const uintBBx5swv = BigInt("1368")
		const uintYTWG6s = BigInt("1213")
		const uintcRT9cuJ = BigInt("1119")
		const addresst6KINpS = accounts[4]
//		const boolvoX8e6Z = await DJCoinhPDVBh.transfer.call(addressnHVGfgh, uinttTFeKu, {from: accounts[2]});
//		const uint256dQU46vH = await DJCoinhPDVBh.burn.call(uintYTWG6s, uintBBx5swv, {from: accounts[2]});
//		const bool3dGunV = await DJCoinhPDVBh.increaseAllowance.call(addresst6KINpS, uintcRT9cuJ, {from: accounts[0]});

		await expect(DJCoinhPDVBh.transfer.call(addressnHVGfgh, uinttTFeKu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinNK7YKbt = await DJCoin.new({from: accounts[3]});
		const addressJwgIIV = accounts[2]
		const addressvBAKGNJ = accounts[0]
//		const addressqwIOOta = await DJCoinNK7YKbt.validRecipient.call(addressJwgIIV, {from: accounts[2]});
//		await DJCoinNK7YKbt.onlyOwner.call({from: accounts[3]});
//		const addressyWgy5CX = await DJCoinNK7YKbt.validRecipient.call(addressvBAKGNJ, {from: accounts[4]});

		await expect(DJCoinNK7YKbt.validRecipient.call(addressJwgIIV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinzsYRciO = await DJCoin.new({from: accounts[2]});
		const uintBeuoUo5 = BigInt("254")
		const uintxWDbMCe = BigInt("367")
		const addressEu9CPBy = accounts[5]
		const addressBDzrO9B = accounts[4]
		const uintdUvUss6 = BigInt("1453")
		const uint256ubHjT71 = await DJCoinzsYRciO.burn.call(uintxWDbMCe, uintBeuoUo5, {from: accounts[2]});
//		const addressA3hqcIq = await DJCoinzsYRciO.validRecipient.call(addressEu9CPBy, {from: accounts[4]});
//		const uint25682qWCq = await DJCoinzsYRciO.balanceOf.call(addressBDzrO9B, {from: accounts[4]});
//		await DJCoinzsYRciO.renounceOwnership.call({from: accounts[2]});
//		const boolG3FLsfy = await DJCoinzsYRciO.changetokensPerBlock.call(uintdUvUss6, {from: accounts[5]});

		assert.equal(uint256ubHjT71, BigInt("2046660000000"))
		await expect(DJCoinzsYRciO.validRecipient.call(addressEu9CPBy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoina6aJP7G = await DJCoin.new({from: accounts[1]});
		const addressfmn43YQ = accounts[0]
		const uintohONjNl = BigInt("1851")
		const uintAm3rWDi = BigInt("568")
		const address7uNmkP = accounts[1]
		const uint256W0uNlLY = await DJCoina6aJP7G.totalSupply.call({from: accounts[1]});
		const uint25652NriY = await DJCoina6aJP7G.totalSupply.call({from: accounts[5]});
//		const addressOjIE2wV = await DJCoina6aJP7G.transferOwnership.call(addressfmn43YQ, {from: accounts[2]});
//		const uint256RloeGiW = await DJCoina6aJP7G.burn.call(uintAm3rWDi, uintohONjNl, {from: accounts[5]});
//		const addressZbWnYaA = await DJCoina6aJP7G.validRecipient.call(address7uNmkP, {from: accounts[0]});

		assert.equal(uint25652NriY, BigInt("2100000000000"))
		assert.equal(uint256W0uNlLY, BigInt("2100000000000"))
		await expect(DJCoina6aJP7G.transferOwnership.call(addressfmn43YQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinwafkGYK = await DJCoin.new({from: accounts[1]});
		const uintG5in2bL = BigInt("1131")
		const addressq06HJ06 = accounts[5]
		const uintA8xRUFq = BigInt("695")
		const addressV5c5DMZ = accounts[1]
		const addressVLeuNMJ = accounts[1]
		const uintNC1Hqgx = BigInt("1741")
		const addressSZsUqIF = accounts[0]
		const addressWWwFH3K = accounts[2]
		const uintoN47PB = BigInt("638")
		const addressl8a4mUJ = accounts[0]
		const uintA8bfCoV = BigInt("440")
		const addressA5Im9W3 = accounts[2]
		const uint256VskFEUF = await DJCoinwafkGYK.totalSupply.call({from: accounts[3]});
		const boolSDMUL3 = await DJCoinwafkGYK.decreaseAllowance.call(addressq06HJ06, uintG5in2bL, {from: accounts[1]});
//		const booluIMUYvU = await DJCoinwafkGYK.transferFrom.call(addressVLeuNMJ, addressV5c5DMZ, uintA8xRUFq, {from: accounts[1]});
//		const boolo21wB4H = await DJCoinwafkGYK.transferFrom.call(addressWWwFH3K, addressSZsUqIF, uintNC1Hqgx, {from: accounts[1]});
//		const boolZmx5Pak = await DJCoinwafkGYK.decreaseAllowance.call(addressl8a4mUJ, uintoN47PB, {from: accounts[4]});
//		const boolNk60lHX = await DJCoinwafkGYK.decreaseAllowance.call(addressA5Im9W3, uintA8bfCoV, {from: accounts[0]});

		assert.equal(boolSDMUL3, true)
		assert.equal(uint256VskFEUF, BigInt("2100000000000"))
		await expect(DJCoinwafkGYK.transferFrom.call(addressVLeuNMJ, addressV5c5DMZ, uintA8xRUFq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinPPlr1z7 = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgo6EhFY = accounts[4]
		const uintGGskUKy = BigInt("562")
		const addressTRYClWV = accounts[2]
		const addressc62X4N7 = accounts[0]
		const uintBElKCZr = BigInt("1531")
		const addressNhXQJx2 = accounts[4]
		const addressuKKORD3 = await DJCoinPPlr1z7.validRecipient.call(addressgo6EhFY, {from: accounts[2]});
		const boolDVdHwBr = await DJCoinPPlr1z7.decreaseAllowance.call(addressTRYClWV, uintGGskUKy, {from: accounts[2]});
		const addressNc63JDZ = await DJCoinPPlr1z7.validRecipient.call(addressc62X4N7, {from: accounts[0]});
		const boolxep54zg = await DJCoinPPlr1z7.decreaseAllowance.call(addressNhXQJx2, uintBElKCZr, {from: accounts[2]});
	});

	it('test for DJCoin', async () => {
		const DJCoinzsYRciO = await DJCoin.new({from: accounts[2]});
		const uintN1Fm85g = BigInt("254")
		const uinta5jTkwG = BigInt("367")
		const addressSOLTREk = accounts[4]
		const uintIutrff6 = BigInt("1453")
		const uintDszd8iA = BigInt("252")
		const addressQoYNf3b = accounts[3]
		const uint256ubHjT71 = await DJCoinzsYRciO.burn.call(uinta5jTkwG, uintN1Fm85g, {from: accounts[2]});
		const uint25682qWCq = await DJCoinzsYRciO.balanceOf.call(addressSOLTREk, {from: accounts[4]});
//		await DJCoinzsYRciO.renounceOwnership.call({from: accounts[2]});
//		const boolG3FLsfy = await DJCoinzsYRciO.changetokensPerBlock.call(uintIutrff6, {from: accounts[5]});
//		const boolkyW3Vo = await DJCoinzsYRciO.approve.call(addressQoYNf3b, uintDszd8iA, {from: accounts[3]});

		assert.equal(uint25682qWCq, BigInt("0"))
		assert.equal(uint256ubHjT71, BigInt("2046660000000"))
		await expect(DJCoinzsYRciO.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhDP2c3G = await DJCoin.new({from: accounts[4]});
		const addressOWup7eX = accounts[5]
		const addressR0IF2I0 = accounts[4]
		const uintaAmN0X = BigInt("1811")
		const addressO47niS = accounts[3]
		const uintg1bdzT3 = BigInt("192")
		const addresserAEfon = accounts[4]
		const addressQjwasEf = accounts[3]
		const addressVF2dhQ0 = accounts[4]
		const uint256G45CkNF = await DJCoinhDP2c3G.allowance.call(addressR0IF2I0, addressOWup7eX, {from: accounts[3]});
//		const boolRRFBRKy = await DJCoinhDP2c3G.transfer.call(addressO47niS, uintaAmN0X, {from: accounts[0]});
//		const boolXW5dJYD = await DJCoinhDP2c3G.increaseAllowance.call(addresserAEfon, uintg1bdzT3, {from: accounts[4]});
//		const uint256Lt5zaA6 = await DJCoinhDP2c3G.balanceOf.call(addressQjwasEf, {from: accounts[0]});
//		await DJCoinhDP2c3G.renounceOwnership.call({from: accounts[2]});
//		const addressCmrN2TJ = await DJCoinhDP2c3G.validRecipient.call(addressVF2dhQ0, {from: accounts[2]});

		assert.equal(uint256G45CkNF, BigInt("0"))
		await expect(DJCoinhDP2c3G.transfer.call(addressO47niS, uintaAmN0X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhPDVBh = await DJCoin.new({from: accounts[3]});
		const uintPCZjuhJ = BigInt("1335")
		const addressimjWlAc = accounts[0]
		const addressiuFu0AB = accounts[4]
		const uinthosyQlN = BigInt("137")
		const addressQsfqiPa = accounts[2]
		const uintaMhHNMb = BigInt("1368")
		const uintrR743ck = BigInt("1213")
		const boolicYhh6d = await DJCoinhPDVBh.increaseAllowance.call(addressimjWlAc, uintPCZjuhJ, {from: accounts[0]});
		const uint256DeRh1ll = await DJCoinhPDVBh.balanceOf.call(addressiuFu0AB, {from: accounts[3]});
		const boolRjnowq8 = await DJCoinhPDVBh.approve.call(addressQsfqiPa, uinthosyQlN, {from: accounts[2]});
//		const uint256dQU46vH = await DJCoinhPDVBh.burn.call(uintrR743ck, uintaMhHNMb, {from: accounts[2]});

		assert.equal(boolRjnowq8, true)
		assert.equal(boolicYhh6d, true)
		assert.equal(uint256DeRh1ll, BigInt("0"))
		await expect(DJCoinhPDVBh.burn.call(uintrR743ck, uintaMhHNMb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhPDVBh = await DJCoin.new({from: accounts[3]});
		const addressUmlriLW = accounts[0]
		const uintq2YAQdV = BigInt("74")
		const addressZeRfFbB = accounts[3]
		const uintzNp8zPg = BigInt("1335")
		const addressiuw0vj = accounts[1]
		const uintZt7rixF = BigInt("997")
		const addressoSV1b7U = accounts[2]
		const uintGk7lFgF = BigInt("1368")
		const uintdvXKgPx = BigInt("1213")
		const addressVw0hW7h = await DJCoinhPDVBh.transferOwnership.call(addressUmlriLW, {from: accounts[3]});
//		const boolvoX8e6Z = await DJCoinhPDVBh.transfer.call(addressZeRfFbB, uintq2YAQdV, {from: accounts[2]});
//		const boolicYhh6d = await DJCoinhPDVBh.increaseAllowance.call(addressiuw0vj, uintzNp8zPg, {from: accounts[0]});
//		const boolRjnowq8 = await DJCoinhPDVBh.approve.call(addressoSV1b7U, uintZt7rixF, {from: accounts[2]});
//		const uint256dQU46vH = await DJCoinhPDVBh.burn.call(uintdvXKgPx, uintGk7lFgF, {from: accounts[2]});
//		await DJCoinhPDVBh.onlyOwner.call({from: accounts[4]});

		await expect(DJCoinhPDVBh.transfer.call(addressZeRfFbB, uintq2YAQdV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhPDVBh = await DJCoin.new({from: accounts[3]});
		const uintewazO9S = BigInt("0")
		const addressi774JfR = accounts[3]
		const uintzSfBDWr = BigInt("3")
		const addressOsHESkc = "0x0000000000000000000000000000000000000001"
		const uintELL2GFe = BigInt("1009")
		const addressskX2z7K = accounts[0]
		const uintFLMnVgQ = BigInt("1363")
		const uintrGvkJqq = BigInt("1213")
		const boolvoX8e6Z = await DJCoinhPDVBh.transfer.call(addressi774JfR, uintewazO9S, {from: accounts[2]});
//		const booljuQ0Ljt = await DJCoinhPDVBh.transfer.call(addressOsHESkc, uintzSfBDWr, {from: accounts[1]});
//		const booltbABDL4 = await DJCoinhPDVBh.transfer.call(addressskX2z7K, uintELL2GFe, {from: accounts[2]});
//		const uint256dQU46vH = await DJCoinhPDVBh.burn.call(uintrGvkJqq, uintFLMnVgQ, {from: accounts[2]});

		assert.equal(boolvoX8e6Z, true)
		await expect(DJCoinhPDVBh.transfer.call(addressOsHESkc, uintzSfBDWr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
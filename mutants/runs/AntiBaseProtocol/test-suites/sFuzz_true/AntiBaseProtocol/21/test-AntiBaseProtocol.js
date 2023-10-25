const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringrLBiht7 = "ljx9swSpqFfk6Kz6aplwfU9"
		const stringPrXjI43 = "KhLHhUkVYUQobr"
		const uintfa7k44d = BigInt("101")
		const AntiBaseProtocolFxHZ9wp = await AntiBaseProtocol.new(stringrLBiht7, stringPrXjI43, uintfa7k44d, {from: accounts[0]});
		const addressikFpYy = accounts[3]
		const uintU4d4oVK = BigInt("1997")
		const addressNOJ1dhe = accounts[4]
		const addressg5vuYsC = accounts[3]
		const uintm0ZKXoN = BigInt("1379")
		const addressUBKkfhx = accounts[1]
		const addresspB9ylB3 = accounts[2]
		const uint256spqm1cA = await AntiBaseProtocolFxHZ9wp.totalSupply.call({from: accounts[2]});
		const addressBksqYBx = await AntiBaseProtocolFxHZ9wp.transferOwnership.call(addressikFpYy, {from: accounts[5]});
		const addressqXN8Wpk = await AntiBaseProtocolFxHZ9wp._approve.call(addressg5vuYsC, addressNOJ1dhe, uintU4d4oVK, {from: accounts[1]});
		await AntiBaseProtocolFxHZ9wp.requestGas.call({from: accounts[4]});
		const addressvzQaNof = await AntiBaseProtocolFxHZ9wp._burn.call(addressUBKkfhx, uintm0ZKXoN, {from: accounts[2]});
		const addressvkvHpO0 = await AntiBaseProtocolFxHZ9wp.transferOwnership.call(addresspB9ylB3, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolIfa7Vsx = await AntiBaseProtocol.new({from: accounts[1]});
		const uintZW9qU3a = BigInt("1359")
		const addressiJ9fVDZ = accounts[0]
		const uintxTcqcQw = BigInt("1849")
		const addressllPb4Gf = accounts[4]
		const addressU46jLwd = accounts[3]
		const addressI0y4Pv = accounts[2]
		const addressE43G2dS = accounts[0]
		const addressoq8XGdL = accounts[3]
		const addressfQ9h5qN = accounts[5]
		const addressgvbUcEu = await AntiBaseProtocolIfa7Vsx.burnFrom.call(addressiJ9fVDZ, uintZW9qU3a, {from: accounts[1]});
		const stringgYZL9Kd = await AntiBaseProtocolIfa7Vsx.name.call({from: accounts[1]});
		const boollHaoZnf = await AntiBaseProtocolIfa7Vsx.transferFrom.call(addressU46jLwd, addressllPb4Gf, uintxTcqcQw, {from: accounts[4]});
		const addressHV0xMB7 = await AntiBaseProtocolIfa7Vsx._transferOwnership.call(addressI0y4Pv, {from: accounts[3]});
		const uint256udkD2BG = await AntiBaseProtocolIfa7Vsx.allowance.call(addressoq8XGdL, addressE43G2dS, {from: accounts[0]});
		const addressHLEmTc3 = await AntiBaseProtocolIfa7Vsx._transferOwnership.call(addressfQ9h5qN, {from: accounts[4]});

		await expect(AntiBaseProtocolIfa7Vsx.burnFrom.call(addressiJ9fVDZ, uintZW9qU3a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintYymmG55 = BigInt("1591")
		const uintCevY3kb = BigInt("384")
		const addressRDmjPrm = accounts[0]
		const uintvof86Rq = BigInt("680")
		const addresspnsrYOq = accounts[3]
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintYymmG55, {from: accounts[2]});
		await AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addressRDmjPrm, uintCevY3kb, {from: accounts[3]});
		const addressyaDxqAO = await AntiBaseProtocolYVvifK._mint.call(addresspnsrYOq, uintvof86Rq, {from: accounts[2]});

		assert.equal(uint256CRDS4lg, BigInt("240"))
		await expect(AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolroentRR = await AntiBaseProtocol.new({from: accounts[1]});
		const uintMeXdzAO = BigInt("957")
		const addressYwXEQLH = accounts[1]
		const uintYwWc9H = BigInt("1806")
		const addressqy5Yx96 = accounts[3]
		const stringRTvaQvI = await AntiBaseProtocolroentRR.symbol.call({from: accounts[0]});
		const uint8UBEjOER = await AntiBaseProtocolroentRR.decimals.call({from: accounts[1]});
		const addresssyk9iMu = await AntiBaseProtocolroentRR._burn.call(addressYwXEQLH, uintMeXdzAO, {from: accounts[2]});
		await AntiBaseProtocolroentRR.renounceOwnership.call({from: accounts[0]});
		const boolB4OadJF = await AntiBaseProtocolroentRR.decreaseAllowance.call(addressqy5Yx96, uintYwWc9H, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringRTvaQvI, "ABASE")
		assert.equal(uint8UBEjOER, BigInt("18"))
		await expect(AntiBaseProtocolroentRR._burn.call(addressYwXEQLH, uintMeXdzAO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintIDSsxFF = BigInt("1591")
		const uintOprFIcx = BigInt("384")
		const addressCJ46kZL = accounts[0]
		const stringTe4n9S = await AntiBaseProtocolYVvifK.name.call({from: accounts[0]});
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintIDSsxFF, {from: accounts[2]});
		await AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addressCJ46kZL, uintOprFIcx, {from: accounts[3]});

		assert.equal(stringTe4n9S, "https://t.me/antibaseprotocol")
		assert.equal(uint256CRDS4lg, BigInt("240"))
		await expect(AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintCWye3Gd = BigInt("1591")
		const uintmKjbpCy = BigInt("684")
		const addresslj2aKaX = accounts[3]
		const uintgAIrN5k = BigInt("384")
		const addressySyUjFY = accounts[0]
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintCWye3Gd, {from: accounts[2]});
		const boolWoysPdv = await AntiBaseProtocolYVvifK.increaseAllowance.call(addresslj2aKaX, uintmKjbpCy, {from: accounts[0]});
		await AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]});
		const stringfb2ixV = await AntiBaseProtocolYVvifK.name.call({from: accounts[1]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addressySyUjFY, uintgAIrN5k, {from: accounts[3]});

		assert.equal(boolWoysPdv, true)
		assert.equal(uint256CRDS4lg, BigInt("240"))
		await expect(AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const addressybto8zp = accounts[4]
		const addressIvaLZ5s = accounts[4]
		const uintLkPKAg3 = BigInt("384")
		const addressQE86Xt1 = accounts[0]
		const uint256WHyX2w = await AntiBaseProtocolYVvifK.allowance.call(addressIvaLZ5s, addressybto8zp, {from: accounts[3]});
		await AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]});
		const boolapHb2i4 = await AntiBaseProtocolYVvifK.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addressQE86Xt1, uintLkPKAg3, {from: accounts[3]});

		assert.equal(uint256WHyX2w, BigInt("0"))
		await expect(AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintU6flaEM = BigInt("1591")
		const uintHdQIEgs = BigInt("1973")
		const addressjQjtPpy = accounts[4]
		const uintXKL3MNM = BigInt("382")
		const addressbPJMvQ = accounts[0]
		const uintdvqPYxE = BigInt("837")
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintU6flaEM, {from: accounts[2]});
		const stringtiOa5ZE = await AntiBaseProtocolYVvifK.symbol.call({from: accounts[5]});
		const boolM9z9HVE = await AntiBaseProtocolYVvifK.decreaseAllowance.call(addressjQjtPpy, uintHdQIEgs, {from: accounts[5]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addressbPJMvQ, uintXKL3MNM, {from: accounts[3]});
		const uint256YUnf43C = await AntiBaseProtocolYVvifK.findRewardFee.call(uintdvqPYxE, {from: accounts[1]});

		assert.equal(stringtiOa5ZE, "ABASE")
		assert.equal(uint256CRDS4lg, BigInt("240"))
		await expect(AntiBaseProtocolYVvifK.decreaseAllowance.call(addressjQjtPpy, uintHdQIEgs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintzUuijSd = BigInt("1591")
		const addressOVhsUay = accounts[4]
		const uintACokgMg = BigInt("385")
		const addressOnu0hk9 = accounts[0]
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintzUuijSd, {from: accounts[2]});
		const uint256FTdF5N = await AntiBaseProtocolYVvifK.balanceOf.call(addressOVhsUay, {from: accounts[2]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addressOnu0hk9, uintACokgMg, {from: accounts[3]});

		assert.equal(boolZUNCz5d, true)
		assert.equal(uint256CRDS4lg, BigInt("240"))
		assert.equal(uint256FTdF5N, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintNqdgBZ = BigInt("1267")
		const addressoJuYYS = accounts[0]
		const addressKFSOKKY = accounts[0]
		const uintKGB7o6h = BigInt("373")
		const addresszcxXZ7K = accounts[0]
		const uintsjcWzQS = BigInt("575")
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintNqdgBZ, {from: accounts[2]});
		const uint256gJCfJf8 = await AntiBaseProtocolYVvifK.allowance.call(addressKFSOKKY, addressoJuYYS, {from: accounts[3]});
		const uint256YvlpzM = await AntiBaseProtocolYVvifK.totalSupply.call({from: accounts[4]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addresszcxXZ7K, uintKGB7o6h, {from: accounts[3]});
		const uint256J8Xy0V = await AntiBaseProtocolYVvifK.burn.call(uintsjcWzQS, {from: accounts[4]});

		assert.equal(boolZUNCz5d, true)
		assert.equal(uint256CRDS4lg, BigInt("195"))
		assert.equal(uint256YvlpzM, BigInt("31250000000000000000"))
		assert.equal(uint256gJCfJf8, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintFBpGCP = BigInt("908")
		const addressdQ34Woc = accounts[0]
		const addressdYHd0d = accounts[0]
		const uintSmRZZMB = BigInt("373")
		const addresskSWLQHc = accounts[1]
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintFBpGCP, {from: accounts[2]});
		const addresse7WbmVY = await AntiBaseProtocolYVvifK.owner.call({from: accounts[4]});
		const uint256gJCfJf8 = await AntiBaseProtocolYVvifK.allowance.call(addressdYHd0d, addressdQ34Woc, {from: accounts[3]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addresskSWLQHc, uintSmRZZMB, {from: accounts[3]});

		assert.equal(addresse7WbmVY, 0xa4D867EaDc9A73b97345fe07e1e5097F3d4A389f)
		assert.equal(boolZUNCz5d, true)
		assert.equal(uint256CRDS4lg, BigInt("150"))
		assert.equal(uint256gJCfJf8, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcT5agP0 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintm9UBysU = BigInt("1038")
		const uintNiAlgC8 = BigInt("825")
		const addressRUyKAHW = accounts[4]
		const uintwdVQi0P = BigInt("1071")
		const addressK9teZ0I = accounts[1]
		const uint256iOcHgbw = await AntiBaseProtocolcT5agP0.findRewardFee.call(uintm9UBysU, {from: accounts[0]});
		const boolRmIalJJ = await AntiBaseProtocolcT5agP0.increaseAllowance.call(addressRUyKAHW, uintNiAlgC8, {from: accounts[0]});
		const stringMP1aByb = await AntiBaseProtocolcT5agP0.name.call({from: accounts[3]});
		const addressUbp7rM = await AntiBaseProtocolcT5agP0._burn.call(addressK9teZ0I, uintwdVQi0P, {from: accounts[3]});

		assert.equal(boolRmIalJJ, true)
		assert.equal(stringMP1aByb, "https://t.me/antibaseprotocol")
		assert.equal(uint256iOcHgbw, BigInt("55"))
		await expect(AntiBaseProtocolcT5agP0._burn.call(addressK9teZ0I, uintwdVQi0P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const addressBSgGhac = accounts[1]
		const addresspzKD3yR = "0x0000000000000000000000000000000000000001"
		const uintoAkQ0bH = BigInt("1367")
		const addressIiJPXyV = accounts[1]
		const uint256UuLLBhC = await AntiBaseProtocolYVvifK.allowance.call(addresspzKD3yR, addressBSgGhac, {from: accounts[3]});
		const boolAZ61cT = await AntiBaseProtocolYVvifK.approve.call(addressIiJPXyV, uintoAkQ0bH, {from: accounts[0]});
		await AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolAZ61cT, true)
		assert.equal(uint256UuLLBhC, BigInt("0"))
		await expect(AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolHduVSGc = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintI3tGg8Z = BigInt("726")
		const addressGYxmh8F = accounts[2]
		const uintlgBRYYE = BigInt("1595")
		const uintkQGABWv = BigInt("1250")
		const addressPAT3Isk = accounts[4]
		const uint256eNuP8Bx = await AntiBaseProtocolHduVSGc.burn.call(uintI3tGg8Z, {from: "0x0000000000000000000000000000000000000001"});
		const addressSegezxg = await AntiBaseProtocolHduVSGc._transferOwnership.call(addressGYxmh8F, {from: accounts[0]});
		await AntiBaseProtocolHduVSGc.renounceOwnership.call({from: accounts[4]});
		const stringyLKwlY = await AntiBaseProtocolHduVSGc.name.call({from: accounts[2]});
		const uint256REhRoUX = await AntiBaseProtocolHduVSGc.findRewardFee.call(uintlgBRYYE, {from: accounts[0]});
		const boolIcRsMn0 = await AntiBaseProtocolHduVSGc.approve.call(addressPAT3Isk, uintkQGABWv, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintNlZs4ta = BigInt("895")
		const uintfckrjBn = BigInt("373")
		const addressPqGcbWd = accounts[0]
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintNlZs4ta, {from: accounts[2]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(addressPqGcbWd, uintfckrjBn, {from: accounts[3]});
		await AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolZUNCz5d, true)
		assert.equal(uint256CRDS4lg, BigInt("135"))
		await expect(AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintbOFc9wk = BigInt("888")
		const uinti98vcv9 = BigInt("804")
		const addressVul4bA = accounts[4]
		const uintzMzKLeG = BigInt("373")
		const address5wPrz0 = accounts[0]
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintbOFc9wk, {from: accounts[2]});
		const addressGNh9cSe = await AntiBaseProtocolYVvifK.burnFrom.call(addressVul4bA, uinti98vcv9, {from: accounts[0]});
		const boolZUNCz5d = await AntiBaseProtocolYVvifK.increaseAllowance.call(address5wPrz0, uintzMzKLeG, {from: accounts[3]});

		assert.equal(uint256CRDS4lg, BigInt("135"))
		await expect(AntiBaseProtocolYVvifK.burnFrom.call(addressVul4bA, uinti98vcv9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintQ5yXooN = BigInt("313")
		const uintrQQxYZ1 = BigInt("1682")
		const addressfOMFD4D = accounts[4]
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintQ5yXooN, {from: accounts[2]});
		const boolIXz50Iq = await AntiBaseProtocolYVvifK.transfer.call(addressfOMFD4D, uintrQQxYZ1, {from: accounts[0]});
		const stringXzwZb5f = await AntiBaseProtocolYVvifK.name.call({from: accounts[3]});
		const uint256A5L2C0d = await AntiBaseProtocolYVvifK.totalSupply.call({from: accounts[1]});

		assert.equal(uint256CRDS4lg, BigInt("60"))
		await expect(AntiBaseProtocolYVvifK.transfer.call(addressfOMFD4D, uintrQQxYZ1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const addressLecgwvz = accounts[4]
		const uintTcW8Dhx = BigInt("293")
		const uint256mHjTbMg = await AntiBaseProtocolYVvifK.totalSupply.call({from: accounts[4]});
		const uint256rbfdWiR = await AntiBaseProtocolYVvifK.totalSupply.call({from: accounts[2]});
		const stringzN81ffb = await AntiBaseProtocolYVvifK.name.call({from: accounts[3]});
		const addressAgjsGUI = await AntiBaseProtocolYVvifK.transferOwnership.call(addressLecgwvz, {from: accounts[4]});
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintTcW8Dhx, {from: accounts[2]});

		assert.equal(stringzN81ffb, "https://t.me/antibaseprotocol")
		assert.equal(uint256CRDS4lg, BigInt("45"))
		assert.equal(uint256mHjTbMg, BigInt("31250000000000000000"))
		assert.equal(uint256rbfdWiR, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintsnehNtv = BigInt("891")
		const uintnF2yQvV = BigInt("345")
		const addressPu45AtX = accounts[3]
		const addressusSKVUI = accounts[5]
		const uintsOHOy4 = BigInt("1682")
		const addressCrT1jSJ = accounts[4]
		const stringEDcv6OP = await AntiBaseProtocolYVvifK.name.call({from: accounts[0]});
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintsnehNtv, {from: accounts[2]});
		const boolff5C6W = await AntiBaseProtocolYVvifK.transferFrom.call(addressusSKVUI, addressPu45AtX, uintnF2yQvV, {from: accounts[1]});
		const boolIXz50Iq = await AntiBaseProtocolYVvifK.transfer.call(addressCrT1jSJ, uintsOHOy4, {from: accounts[0]});
		const stringXzwZb5f = await AntiBaseProtocolYVvifK.name.call({from: accounts[3]});
		const uint256A5L2C0d = await AntiBaseProtocolYVvifK.totalSupply.call({from: accounts[1]});

		assert.equal(stringEDcv6OP, "https://t.me/antibaseprotocol")
		assert.equal(uint256CRDS4lg, BigInt("135"))
		await expect(AntiBaseProtocolYVvifK.transferFrom.call(addressusSKVUI, addressPu45AtX, uintnF2yQvV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintEQLGNHl = BigInt("0")
		const uintL4dWswp = BigInt("1246")
		const addressRK8IJb1 = accounts[4]
		const addresszn9OHBO = accounts[4]
		const uint8n7MkP = BigInt("1974")
		const addressZMNvp9s = accounts[0]
		const uint256CRDS4lg = await AntiBaseProtocolYVvifK.findBurnFee.call(uintEQLGNHl, {from: accounts[2]});
		const boolac31C2w = await AntiBaseProtocolYVvifK.decreaseAllowance.call(addressRK8IJb1, uintL4dWswp, {from: accounts[3]});
		const uint25641bu57 = await AntiBaseProtocolYVvifK.balanceOf.call(addresszn9OHBO, {from: accounts[1]});
		const addresscW1pPQK = await AntiBaseProtocolYVvifK._burn.call(addressZMNvp9s, uint8n7MkP, {from: accounts[3]});

		assert.equal(uint256CRDS4lg, BigInt("0"))
		await expect(AntiBaseProtocolYVvifK.decreaseAllowance.call(addressRK8IJb1, uintL4dWswp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintThIbCqR = BigInt("1024")
		const addressDAVb4Jy = accounts[0]
		const addressRvkK3qi = accounts[4]
		const stringxjNhdZd = await AntiBaseProtocolYVvifK.symbol.call({from: accounts[1]});
		const boolz5585SN = await AntiBaseProtocolYVvifK.transferFrom.call(addressRvkK3qi, addressDAVb4Jy, uintThIbCqR, {from: accounts[2]});
		await AntiBaseProtocolYVvifK.renounceOwnership.call({from: accounts[2]});

		assert.equal(stringxjNhdZd, "ABASE")
		await expect(AntiBaseProtocolYVvifK.transferFrom.call(addressRvkK3qi, addressDAVb4Jy, uintThIbCqR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintOFJgbE3 = BigInt("1259")
		const addressUaLivVR = "0x00000000000000000000000000000000000000-1"
		const uintqChzbUl = BigInt("474")
		const addressPqi7APR = accounts[2]
		const addressTbIGH2o = accounts[1]
		const uintvkJo2PC = BigInt("94")
		const addressnENz5EN = accounts[4]
		const boolpcGLJK6 = await AntiBaseProtocolYVvifK.transfer.call(addressUaLivVR, uintOFJgbE3, {from: accounts[2]});
		const booln3TsDrJ = await AntiBaseProtocolYVvifK.transferFrom.call(addressTbIGH2o, addressPqi7APR, uintqChzbUl, {from: accounts[4]});
		await AntiBaseProtocolYVvifK.requestGas.call({from: accounts[4]});
		const addresslL2XF8 = await AntiBaseProtocolYVvifK.owner.call({from: accounts[1]});
		const boolIXz50Iq = await AntiBaseProtocolYVvifK.transfer.call(addressnENz5EN, uintvkJo2PC, {from: accounts[0]});

		await expect(AntiBaseProtocolYVvifK.transfer.call(addressUaLivVR, uintOFJgbE3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYVvifK = await AntiBaseProtocol.new({from: accounts[4]});
		const uintPaugZUz = BigInt("0")
		const addressGAVhioJ = "0x0000000000000000000000000000000000000000"
		const boolpcGLJK6 = await AntiBaseProtocolYVvifK.transfer.call(addressGAVhioJ, uintPaugZUz, {from: accounts[2]});

		await expect(AntiBaseProtocolYVvifK.transfer.call(addressGAVhioJ, uintPaugZUz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
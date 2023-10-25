const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennEg0aXG = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintU70p3m = BigInt("332")
		const addressxOxchIT = accounts[1]
		const uintieqKfPL = BigInt("277")
		const addressTlpcEXi = accounts[0]
		const addressmHDB5KN = "0x0000000000000000000000000000000000000001"
		const addressa8McZ3H = accounts[4]
		const uintltkv4G4 = BigInt("951")
		const addressW0NscDM = accounts[3]
		const addressNUNIlRq = accounts[0]
		const boolVxVXtJq = await CryptoSecureBankTokennEg0aXG.approve.call(addressxOxchIT, uintU70p3m, {from: accounts[2]});
//		const boolIgPTqVz = await CryptoSecureBankTokennEg0aXG.transfer.call(addressTlpcEXi, uintieqKfPL, {from: accounts[0]});
//		await CryptoSecureBankTokennEg0aXG.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintvY5dcOu = await CryptoSecureBankTokennEg0aXG.allowance.call(addressa8McZ3H, addressmHDB5KN, {from: accounts[4]});
//		const booljHruEz7 = await CryptoSecureBankTokennEg0aXG.transferFrom.call(addressNUNIlRq, addressW0NscDM, uintltkv4G4, {from: accounts[4]});

		assert.equal(boolVxVXtJq, true)
		await expect(CryptoSecureBankTokennEg0aXG.transfer.call(addressTlpcEXi, uintieqKfPL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyfqCASo = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressRyhG4lm = accounts[1]
		const uintlmPAW93 = await CryptoSecureBankTokenyfqCASo.totalSupply.call({from: accounts[5]});
		const uintwqOq4jC = await CryptoSecureBankTokenyfqCASo.balanceOf.call(addressRyhG4lm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintlmPAW93, BigInt("100000000000000000000000000"))
		assert.equal(uintwqOq4jC, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKxaIuRR = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressf6pQqLQ = accounts[1]
		const addressUsKVHy8 = accounts[4]
		const addressGgc5j16 = accounts[2]
		const addressdCBobKh = accounts[1]
		const addressUZV1sG3 = accounts[5]
//		const addressB1w6uU3 = await CryptoSecureBankTokenKxaIuRR.addBlackList.call(addressf6pQqLQ, {from: accounts[4]});
//		const uintAkfz3SM = await CryptoSecureBankTokenKxaIuRR.totalSupply.call({from: accounts[1]});
//		const uintoHfst8W = await CryptoSecureBankTokenKxaIuRR.allowance.call(addressGgc5j16, addressUsKVHy8, {from: accounts[3]});
//		const addressEh0CQC5 = await CryptoSecureBankTokenKxaIuRR.destroyBlackFunds.call(addressdCBobKh, {from: accounts[3]});
//		await CryptoSecureBankTokenKxaIuRR.onlyOwner.call({from: accounts[2]});
//		const addressK7fbCg = await CryptoSecureBankTokenKxaIuRR.destroyBlackFunds.call(addressUZV1sG3, {from: accounts[1]});

		await expect(CryptoSecureBankTokenKxaIuRR.addBlackList.call(addressf6pQqLQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNbxxbT = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressq8e1RRL = accounts[0]
		const uintsKJi3y = BigInt("320")
		const addressT2xGzBx = "0x0000000000000000000000000000000000000001"
		const addresswh2YY9A = accounts[4]
		const addressIjw5BfP = accounts[0]
		const addressFUCoVaD = accounts[1]
		const addressWg0H4mH = await CryptoSecureBankTokenNbxxbT.transferOwnership.call(addressq8e1RRL, {from: accounts[0]});
//		const uintoF5dDFr = await CryptoSecureBankTokenNbxxbT.onlyPayloadSize.call(uintsKJi3y, {from: accounts[0]});
//		const addressO8mXGf = await CryptoSecureBankTokenNbxxbT.transferOwnership.call(addressT2xGzBx, {from: accounts[3]});
//		const addressVIK0Uhb = await CryptoSecureBankTokenNbxxbT.removeBlackList.call(addresswh2YY9A, {from: accounts[5]});
//		const uintItEN2Ow = await CryptoSecureBankTokenNbxxbT.balanceOf.call(addressIjw5BfP, {from: accounts[5]});
//		const addresslAklCds = await CryptoSecureBankTokenNbxxbT.removeBlackList.call(addressFUCoVaD, {from: accounts[3]});

		await expect(CryptoSecureBankTokenNbxxbT.onlyPayloadSize.call(uintsKJi3y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenq7DSsZm = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressQx0tcWI = accounts[3]
		const addressNysaQvI = accounts[2]
		const addressoqvC8qV = accounts[4]
		const uintJ5iEhhy = BigInt("1142")
		const addresszeV1LBq = accounts[0]
//		const address63HntZ = await CryptoSecureBankTokenq7DSsZm.destroyBlackFunds.call(addressQx0tcWI, {from: accounts[0]});
//		const addressIqUVBnQ = await CryptoSecureBankTokenq7DSsZm.transferOwnership.call(addressNysaQvI, {from: accounts[3]});
//		const addressMiFIknX = await CryptoSecureBankTokenq7DSsZm.removeBlackList.call(addressoqvC8qV, {from: accounts[5]});
//		const uintIgFkY9E = await CryptoSecureBankTokenq7DSsZm.onlyPayloadSize.call(uintJ5iEhhy, {from: accounts[3]});
//		const uintuyZEAVj = await CryptoSecureBankTokenq7DSsZm.balanceOf.call(addresszeV1LBq, {from: accounts[3]});

		await expect(CryptoSecureBankTokenq7DSsZm.destroyBlackFunds.call(addressQx0tcWI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKtZQxqZ = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressrYlzexV = accounts[1]
		const uintz9TgRbG = BigInt("195")
		const addressStgWQUk = "0x0000000000000000000000000000000000000001"
		const addressCK4zg0Y = accounts[2]
		const bool6tEov5 = await CryptoSecureBankTokenKtZQxqZ.getBlackListStatus.call(addressrYlzexV, {from: accounts[2]});
//		await CryptoSecureBankTokenKtZQxqZ.unpause.call({from: accounts[2]});
//		await CryptoSecureBankTokenKtZQxqZ.unpause.call({from: accounts[0]});
//		const boolIrGvgwK = await CryptoSecureBankTokenKtZQxqZ.transferFrom.call(addressCK4zg0Y, addressStgWQUk, uintz9TgRbG, {from: accounts[0]});

		assert.equal(bool6tEov5, false)
		await expect(CryptoSecureBankTokenKtZQxqZ.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennEg0aXG = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintpYsKyOG = BigInt("332")
		const addresshyonP3h = accounts[1]
		const uintDwUo6Kn = BigInt("848")
		const addressK60enH = accounts[2]
		const uintzu6ArJm = BigInt("298")
		const addressIpHZfID = accounts[0]
		const addressq3uTvS4 = "0x0000000000000000000000000000000000000001"
		const addresseyV0Elq = accounts[4]
		const uintPv56j6 = BigInt("951")
		const addressvDyDa5k = accounts[3]
		const addressGb43vC = accounts[0]
		const boolVxVXtJq = await CryptoSecureBankTokennEg0aXG.approve.call(addresshyonP3h, uintpYsKyOG, {from: accounts[2]});
		const boolsIFP82P = await CryptoSecureBankTokennEg0aXG.transfer.call(addressK60enH, uintDwUo6Kn, {from: accounts[2]});
//		await CryptoSecureBankTokennEg0aXG.pause.call({from: accounts[3]});
//		const boolIgPTqVz = await CryptoSecureBankTokennEg0aXG.transfer.call(addressIpHZfID, uintzu6ArJm, {from: accounts[0]});
//		await CryptoSecureBankTokennEg0aXG.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintvY5dcOu = await CryptoSecureBankTokennEg0aXG.allowance.call(addresseyV0Elq, addressq3uTvS4, {from: accounts[4]});
//		const booljHruEz7 = await CryptoSecureBankTokennEg0aXG.transferFrom.call(addressGb43vC, addressvDyDa5k, uintPv56j6, {from: accounts[4]});

		assert.equal(boolVxVXtJq, true)
		assert.equal(boolsIFP82P, true)
		await expect(CryptoSecureBankTokennEg0aXG.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenloaL6n5 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressekErkno = accounts[5]
		const uintRNNLHGG = BigInt("274")
		const addressxF8Bcn = accounts[4]
		const addresspS083LD = accounts[2]
		const addressbHaVad3 = accounts[2]
		const addressV33ZcQP = accounts[1]
		const addressuKYoot4 = accounts[5]
		const addressntU0JBQ = accounts[3]
		const addressET8p8G = await CryptoSecureBankTokenloaL6n5.removeBlackList.call(addressekErkno, {from: accounts[3]});
//		const boolO8JBoOZ = await CryptoSecureBankTokenloaL6n5.transferFrom.call(addresspS083LD, addressxF8Bcn, uintRNNLHGG, {from: accounts[4]});
//		const uintMVSSGV5 = await CryptoSecureBankTokenloaL6n5.allowance.call(addressV33ZcQP, addressbHaVad3, {from: accounts[0]});
//		const addressXvADMK = await CryptoSecureBankTokenloaL6n5.destroyBlackFunds.call(addressuKYoot4, {from: accounts[1]});
//		const boolRFXHGMZ = await CryptoSecureBankTokenloaL6n5.deprecate.call(addressntU0JBQ, {from: accounts[3]});

		await expect(CryptoSecureBankTokenloaL6n5.transferFrom.call(addresspS083LD, addressxF8Bcn, uintRNNLHGG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyfqCASo = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintlmPAW93 = await CryptoSecureBankTokenyfqCASo.totalSupply.call({from: accounts[5]});
		const addressPuMpweg = await CryptoSecureBankTokenyfqCASo.getOwner.call({from: accounts[2]});

		assert.equal(addressPuMpweg, 0x28D2DEb2415CcF7182d6f4C92abe87A82e8984a1)
		assert.equal(uintlmPAW93, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenloaL6n5 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressZVy9dJS = accounts[5]
		const addressNvVokhT = accounts[2]
		const address2N1lmP = accounts[2]
		const addressaqhgxk = accounts[5]
		const addressFNQETtJ = accounts[3]
		const addressET8p8G = await CryptoSecureBankTokenloaL6n5.removeBlackList.call(addressZVy9dJS, {from: accounts[3]});
		const uintMVSSGV5 = await CryptoSecureBankTokenloaL6n5.allowance.call(address2N1lmP, addressNvVokhT, {from: accounts[0]});
//		const addressXvADMK = await CryptoSecureBankTokenloaL6n5.destroyBlackFunds.call(addressaqhgxk, {from: accounts[1]});
//		const boolRFXHGMZ = await CryptoSecureBankTokenloaL6n5.deprecate.call(addressFNQETtJ, {from: accounts[3]});

		assert.equal(uintMVSSGV5, BigInt("0"))
		await expect(CryptoSecureBankTokenloaL6n5.destroyBlackFunds.call(addressaqhgxk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyfqCASo = await CryptoSecureBankToken.new({from: accounts[0]});
		const address2DndWR = accounts[2]
		const uintwMLpnan = BigInt("1568")
		const addressuMTtOHQ = accounts[1]
		const uintlmPAW93 = await CryptoSecureBankTokenyfqCASo.totalSupply.call({from: accounts[5]});
//		await CryptoSecureBankTokenyfqCASo.pause.call({from: accounts[0]});
//		const uintwqOq4jC = await CryptoSecureBankTokenyfqCASo.balanceOf.call(address2DndWR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRT6tUwg = await CryptoSecureBankTokenyfqCASo.approve.call(addressuMTtOHQ, uintwMLpnan, {from: accounts[2]});

		assert.equal(uintlmPAW93, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenyfqCASo.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken3xbWHv = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBsVuRHR = BigInt("1552")
		const addressagwAcA0 = accounts[1]
		const addressazqlt8y = accounts[1]
		const boolxhgMhj = await CryptoSecureBankToken3xbWHv.transferFrom.call(addressazqlt8y, addressagwAcA0, uintBsVuRHR, {from: accounts[0]});
		const addressnRxwT5e = await CryptoSecureBankToken3xbWHv.getOwner.call({from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennEg0aXG = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresshfYszc3 = accounts[2]
		const uintNr7AWm = BigInt("951")
		const addressPJW3r6g = accounts[3]
		const addresspWcdLRn = accounts[0]
		const boolMKZuQc9 = await CryptoSecureBankTokennEg0aXG.deprecate.call(addresshfYszc3, {from: accounts[2]});
//		const booljHruEz7 = await CryptoSecureBankTokennEg0aXG.transferFrom.call(addresspWcdLRn, addressPJW3r6g, uintNr7AWm, {from: accounts[4]});

		assert.equal(boolMKZuQc9, true)
		await expect(CryptoSecureBankTokennEg0aXG.transferFrom.call(addresspWcdLRn, addressPJW3r6g, uintNr7AWm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenloaL6n5 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresswtT76xc = accounts[5]
		const addressbGYGWF = accounts[4]
		const addressWFpb2qf = accounts[2]
		const addressTsnhEr = accounts[2]
		const addresspDuMaik = accounts[5]
		const addressET8p8G = await CryptoSecureBankTokenloaL6n5.removeBlackList.call(addresswtT76xc, {from: accounts[3]});
		const addressGYwDa9 = await CryptoSecureBankTokenloaL6n5.addBlackList.call(addressbGYGWF, {from: accounts[3]});
		const uintMVSSGV5 = await CryptoSecureBankTokenloaL6n5.allowance.call(addressTsnhEr, addressWFpb2qf, {from: accounts[0]});
//		const addressXvADMK = await CryptoSecureBankTokenloaL6n5.destroyBlackFunds.call(addresspDuMaik, {from: accounts[1]});

		assert.equal(uintMVSSGV5, BigInt("0"))
		await expect(CryptoSecureBankTokenloaL6n5.destroyBlackFunds.call(addresspDuMaik, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennEg0aXG = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintgDUrh2 = BigInt("327")
		const uintOwi8CCi = BigInt("17")
		const addressKDRPv4O = accounts[4]
		const addressdF0nf2Q = accounts[0]
		const booltaysoVl = await CryptoSecureBankTokennEg0aXG.redeem.call(uintgDUrh2, {from: accounts[2]});
//		const booljHruEz7 = await CryptoSecureBankTokennEg0aXG.transferFrom.call(addressdF0nf2Q, addressKDRPv4O, uintOwi8CCi, {from: accounts[4]});

		assert.equal(booltaysoVl, true)
		await expect(CryptoSecureBankTokennEg0aXG.transferFrom.call(addressdF0nf2Q, addressKDRPv4O, uintOwi8CCi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokena8t9Vzm = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresslLMZx14 = accounts[1]
		const uintFV2uJ2D = BigInt("686")
		const addressSeMqDS = "0x0000000000000000000000000000000000000001"
		const addressrVGHIWY = accounts[5]
		const addressjHIlLE5 = accounts[5]
		const addressFnMb7Rc = await CryptoSecureBankTokena8t9Vzm.setOwner2.call(addresslLMZx14, {from: accounts[1]});
//		const boolBXKSks = await CryptoSecureBankTokena8t9Vzm.transfer.call(addressSeMqDS, uintFV2uJ2D, {from: accounts[0]});
//		const uintnofKWMc = await CryptoSecureBankTokena8t9Vzm.allowance.call(addressjHIlLE5, addressrVGHIWY, {from: accounts[3]});

		await expect(CryptoSecureBankTokena8t9Vzm.transfer.call(addressSeMqDS, uintFV2uJ2D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyfqCASo = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintGe3m1e = BigInt("1699")
		const uintrJPC0ct = BigInt("1921")
		const addressrMFYuOn = accounts[0]
		const addressczi4wDM = accounts[2]
//		const uintqPgJLo = await CryptoSecureBankTokenyfqCASo.setParams.call(uintrJPC0ct, uintGe3m1e, {from: accounts[0]});
//		const uintan5VyX = await CryptoSecureBankTokenyfqCASo.balanceOf.call(addressrMFYuOn, {from: accounts[3]});
//		const uintwqOq4jC = await CryptoSecureBankTokenyfqCASo.balanceOf.call(addressczi4wDM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenyfqCASo.setParams.call(uintrJPC0ct, uintGe3m1e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennEg0aXG = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintYgW4v0h = BigInt("0")
		const addresskBwqVE0 = accounts[3]
		const addressQ3ORoZh = accounts[0]
		const booljHruEz7 = await CryptoSecureBankTokennEg0aXG.transferFrom.call(addressQ3ORoZh, addresskBwqVE0, uintYgW4v0h, {from: accounts[4]});

		assert.equal(booljHruEz7, true)
	});
})
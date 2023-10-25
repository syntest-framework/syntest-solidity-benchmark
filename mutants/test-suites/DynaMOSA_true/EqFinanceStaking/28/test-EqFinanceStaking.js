const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingTT5r9KP = await EqFinanceStaking.new({from: accounts[0]});
		const uintNUgwWTz = BigInt("537")
		const uintdQonNQT = BigInt("889")
		const addressoCHnHSQ = accounts[4]
		const uint6VlfDk = BigInt("228")
//		const uintXV0xABz = await EqFinanceStakingTT5r9KP.deposit.call(uintNUgwWTz, {from: accounts[1]});
//		const uintIEvSeV = await EqFinanceStakingTT5r9KP.deposit.call(uintdQonNQT, {from: accounts[3]});
//		await EqFinanceStakingTT5r9KP.onlyOwner.call({from: accounts[3]});
//		const addressbSjhga2 = await EqFinanceStakingTT5r9KP.transferOwnership.call(addressoCHnHSQ, {from: accounts[4]});
//		const uintrrqEcHo = await EqFinanceStakingTT5r9KP.deposit.call(uint6VlfDk, {from: accounts[5]});

		await expect(EqFinanceStakingTT5r9KP.deposit.call(uintNUgwWTz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingf8Jp5u = await EqFinanceStaking.new({from: accounts[4]});
		const addressZzNbraM = accounts[0]
		const addressZvU3IaG = accounts[3]
		const uintj77UTe7 = BigInt("716")
		const addressqVPZYtb = accounts[0]
		const uintL9WEOMQ = await EqFinanceStakingf8Jp5u.getPendingDivs.call(addressZzNbraM, {from: accounts[2]});
//		await EqFinanceStakingf8Jp5u.claimDivs.call({from: accounts[3]});
//		const uintChA5NlP = await EqFinanceStakingf8Jp5u.getPendingDivs.call(addressZvU3IaG, {from: accounts[2]});
//		const uintT0S2t30 = await EqFinanceStakingf8Jp5u.deposit.call(uintj77UTe7, {from: accounts[3]});
//		const uintHxacxy = await EqFinanceStakingf8Jp5u.getStakingAndDaoAmount.call({from: accounts[3]});
//		const addresslT1LYFY = await EqFinanceStakingf8Jp5u.transferOwnership.call(addressqVPZYtb, {from: accounts[0]});

		assert.equal(uintL9WEOMQ, BigInt("0"))
		await expect(EqFinanceStakingf8Jp5u.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinggtOXRQl = await EqFinanceStaking.new({from: accounts[3]});
		const uintcbbFnpH = BigInt("838")
		const addressYwxngyg = accounts[0]
		const addressdpQGOQZ = accounts[5]
		const uintHTs68T = await EqFinanceStakinggtOXRQl.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintbqyVLtw = await EqFinanceStakinggtOXRQl.getStakingAndDaoAmount.call({from: accounts[1]});
//		await EqFinanceStakinggtOXRQl.onlyOwner.call({from: accounts[4]});
//		const addressuKcEU4G = await EqFinanceStakinggtOXRQl.transferAnyERC20Tokens.call(addressdpQGOQZ, addressYwxngyg, uintcbbFnpH, {from: accounts[4]});
//		await EqFinanceStakinggtOXRQl.onlyOwner.call({from: accounts[5]});

		assert.equal(uintHTs68T, BigInt("3000000000000000000000000"))
		assert.equal(uintbqyVLtw, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakinggtOXRQl.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingisb6CmI = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintt0KspdH = BigInt("1871")
		const uintlMN0NjG = BigInt("1593")
		const addressDNvfCAC = accounts[2]
		const addressdSM9Bs3 = accounts[4]
		await EqFinanceStakingisb6CmI.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uintDbiIl04 = await EqFinanceStakingisb6CmI.withdraw.call(uintt0KspdH, {from: accounts[2]});
		await EqFinanceStakingisb6CmI.claimDivs.call({from: accounts[0]});
		const addressRYcmopx = await EqFinanceStakingisb6CmI.transferAnyERC20Tokens.call(addressdSM9Bs3, addressDNvfCAC, uintlMN0NjG, {from: accounts[0]});
		const uintWWJRKhB = await EqFinanceStakingisb6CmI.getNumberOfHolders.call({from: accounts[2]});
		await EqFinanceStakingisb6CmI.claimDivs.call({from: accounts[0]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwr54PuE = await EqFinanceStaking.new({from: accounts[5]});
		const uintxOWxeRQ = BigInt("702")
//		const uintMeT6tOT = await EqFinanceStakingwr54PuE.withdraw.call(uintxOWxeRQ, {from: accounts[4]});
//		await EqFinanceStakingwr54PuE.onlyOwner.call({from: accounts[0]});
//		const uintkqXCeC3 = await EqFinanceStakingwr54PuE.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(EqFinanceStakingwr54PuE.withdraw.call(uintxOWxeRQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingTq2yQc0 = await EqFinanceStaking.new({from: accounts[5]});
		const addressZmJVGo2 = "0x0000000000000000000000000000000000000001"
		const uintzVflc0e = BigInt("859")
		const addressSBRlKx = accounts[3]
		const addressmQLrJ0c = accounts[1]
		const uinteQjqeo7 = await EqFinanceStakingTq2yQc0.getNumberOfHolders.call({from: accounts[1]});
//		const addresstv1w8kL = await EqFinanceStakingTq2yQc0.transferOwnership.call(addressZmJVGo2, {from: accounts[0]});
//		await EqFinanceStakingTq2yQc0.claimDivs.call({from: accounts[0]});
//		const addressIfiR41f = await EqFinanceStakingTq2yQc0.transferAnyERC20Tokens.call(addressmQLrJ0c, addressSBRlKx, uintzVflc0e, {from: accounts[4]});

		assert.equal(uinteQjqeo7, BigInt("0"))
		await expect(EqFinanceStakingTq2yQc0.transferOwnership.call(addressZmJVGo2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingf8Jp5u = await EqFinanceStaking.new({from: accounts[4]});
		const address8fLG2h = accounts[0]
		const addressTlXW3Pc = accounts[3]
		const uintL9WEOMQ = await EqFinanceStakingf8Jp5u.getPendingDivs.call(address8fLG2h, {from: accounts[2]});
//		await EqFinanceStakingf8Jp5u.claimDivs.call({from: accounts[3]});
//		const addressVFQpFGn = await EqFinanceStakingf8Jp5u.transferOwnership.call(addressTlXW3Pc, {from: accounts[4]});
//		const uintlmITs7S = await EqFinanceStakingf8Jp5u.getNumberOfHolders.call({from: accounts[0]});
//		const uintHxacxy = await EqFinanceStakingf8Jp5u.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintiMvJ8UZ = await EqFinanceStakingf8Jp5u.getStakingAndDaoAmount.call({from: accounts[1]});

		assert.equal(uintL9WEOMQ, BigInt("0"))
		await expect(EqFinanceStakingf8Jp5u.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinggtOXRQl = await EqFinanceStaking.new({from: accounts[3]});
		const uinti4NWknN = BigInt("1814")
		const addressjZTRUvm = accounts[0]
		const addressEDuqqVz = accounts[4]
		const uintKFO0MhR = BigInt("1111")
		const addresshGJ7gW4 = accounts[4]
		const addressQLllGZ6 = accounts[4]
		const uinta5bsNWA = BigInt("838")
		const addressOHKL3X = accounts[0]
		const addressZt8Rwrf = accounts[6]
		const uintbqyVLtw = await EqFinanceStakinggtOXRQl.getStakingAndDaoAmount.call({from: accounts[1]});
//		await EqFinanceStakinggtOXRQl.claimDivs.call({from: accounts[1]});
//		const uintW0pp63W = await EqFinanceStakinggtOXRQl.getNumberOfHolders.call({from: accounts[0]});
//		const addresspobPeXR = await EqFinanceStakinggtOXRQl.transferAnyERC20Tokens.call(addressEDuqqVz, addressjZTRUvm, uinti4NWknN, {from: accounts[3]});
//		const uinto4KT9s7 = await EqFinanceStakinggtOXRQl.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintjGu75Mk = await EqFinanceStakinggtOXRQl.withdraw.call(uintKFO0MhR, {from: accounts[4]});
//		const uintMxQ5NaG = await EqFinanceStakinggtOXRQl.getPendingDivs.call(addresshGJ7gW4, {from: accounts[0]});
//		const addressDDcWmzf = await EqFinanceStakinggtOXRQl.transferOwnership.call(addressQLllGZ6, {from: accounts[4]});
//		await EqFinanceStakinggtOXRQl.onlyOwner.call({from: accounts[4]});
//		const addressuKcEU4G = await EqFinanceStakinggtOXRQl.transferAnyERC20Tokens.call(addressZt8Rwrf, addressOHKL3X, uinta5bsNWA, {from: accounts[4]});
//		await EqFinanceStakinggtOXRQl.onlyOwner.call({from: accounts[5]});

		assert.equal(uintbqyVLtw, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakinggtOXRQl.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingf8Jp5u = await EqFinanceStaking.new({from: accounts[4]});
		const address8PiA5O = accounts[0]
		const uintpWhk7Hi = BigInt("0")
		const uintL9WEOMQ = await EqFinanceStakingf8Jp5u.getPendingDivs.call(address8PiA5O, {from: accounts[2]});
//		const uintT0S2t30 = await EqFinanceStakingf8Jp5u.deposit.call(uintpWhk7Hi, {from: accounts[3]});
//		await EqFinanceStakingf8Jp5u.onlyOwner.call({from: accounts[0]});

		assert.equal(uintL9WEOMQ, BigInt("0"))
		await expect(EqFinanceStakingf8Jp5u.deposit.call(uintpWhk7Hi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
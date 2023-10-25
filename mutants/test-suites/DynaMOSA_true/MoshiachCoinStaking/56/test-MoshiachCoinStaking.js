const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakings4IXzNm = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintJII5Yib = BigInt("320")
		const addressy4Lw49n = accounts[4]
//		const uinttoyGh0P = await MoshiachCoinStakings4IXzNm.withdraw.call(uintJII5Yib, {from: "0x0000000000000000000000000000000000000001"});
//		const uintNaCnvjk = await MoshiachCoinStakings4IXzNm.getPendingDivs.call(addressy4Lw49n, {from: accounts[5]});
//		const uintSzGVuT = await MoshiachCoinStakings4IXzNm.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(MoshiachCoinStakings4IXzNm.withdraw.call(uintJII5Yib, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingEJxcoNS = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintg9Lf3vH = await MoshiachCoinStakingEJxcoNS.getStakingAndDaoAmount.call({from: accounts[4]});
//		await MoshiachCoinStakingEJxcoNS.onlyOwner.call({from: accounts[4]});

		assert.equal(uintg9Lf3vH, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingEJxcoNS.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingiLB3MzJ = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsEC3vtm = BigInt("456")
		const addressoxytCqX = accounts[5]
		const addressaqJbxS0 = accounts[5]
		const addressLf5HosZ = accounts[1]
		const uintUFOMOtn = BigInt("693")
		const addressqWqY51T = await MoshiachCoinStakingiLB3MzJ.transferAnyERC20Tokens.call(addressaqJbxS0, addressoxytCqX, uintsEC3vtm, {from: accounts[4]});
		const addressUnlWBr = await MoshiachCoinStakingiLB3MzJ.transferOwnership.call(addressLf5HosZ, {from: accounts[1]});
		const uintgxW3X5S = await MoshiachCoinStakingiLB3MzJ.withdraw.call(uintUFOMOtn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingJEZA01p = await MoshiachCoinStaking.new({from: accounts[1]});
		const uinto53nv4q = BigInt("429")
		const uintRp72YX = await MoshiachCoinStakingJEZA01p.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintjrP2o8r = await MoshiachCoinStakingJEZA01p.getNumberOfHolders.call({from: accounts[4]});
//		const uintFI7Y02y = await MoshiachCoinStakingJEZA01p.deposit.call(uinto53nv4q, {from: accounts[3]});
//		const uinttQYlx6U = await MoshiachCoinStakingJEZA01p.getNumberOfHolders.call({from: accounts[1]});

		assert.equal(uintRp72YX, BigInt("60000000000000000000000000"))
		assert.equal(uintjrP2o8r, BigInt("0"))
		await expect(MoshiachCoinStakingJEZA01p.deposit.call(uinto53nv4q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingMjx9eJz = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressb5W98b8 = "0x0000000000000000000000000000000000000001"
		const addressYsCDc1V = accounts[2]
		const uintePWMDl9 = await MoshiachCoinStakingMjx9eJz.getPendingDivs.call(addressb5W98b8, {from: accounts[1]});
		const uinta2muWHT = await MoshiachCoinStakingMjx9eJz.getPendingDivs.call(addressYsCDc1V, {from: accounts[4]});
//		await MoshiachCoinStakingMjx9eJz.claimDivs.call({from: accounts[1]});
//		const uintvLGo6fu = await MoshiachCoinStakingMjx9eJz.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintCe0V1U = await MoshiachCoinStakingMjx9eJz.getStakingAndDaoAmount.call({from: accounts[5]});

		assert.equal(uinta2muWHT, BigInt("0"))
		assert.equal(uintePWMDl9, BigInt("0"))
		await expect(MoshiachCoinStakingMjx9eJz.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingEJxcoNS = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintZ4NqcFM = BigInt("1844")
		const addresswlXZ7Dk = accounts[3]
		const addressIiU9VmV = accounts[4]
		const uintg9Lf3vH = await MoshiachCoinStakingEJxcoNS.getStakingAndDaoAmount.call({from: accounts[4]});
//		const addressieNcYPe = await MoshiachCoinStakingEJxcoNS.transferAnyERC20Tokens.call(addressIiU9VmV, addresswlXZ7Dk, uintZ4NqcFM, {from: accounts[4]});
//		await MoshiachCoinStakingEJxcoNS.onlyOwner.call({from: accounts[4]});

		assert.equal(uintg9Lf3vH, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingEJxcoNS.transferAnyERC20Tokens.call(addressIiU9VmV, addresswlXZ7Dk, uintZ4NqcFM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingpWLaK62 = await MoshiachCoinStaking.new({from: accounts[3]});
		const addresshieMrIU = accounts[1]
		const uintZIOadUY = BigInt("392")
		const uintoLpZhUN = BigInt("217")
		const uintu3Vvt0s = BigInt("1172")
		const uintZsAmZns = BigInt("257")
		const addressyrLd8c = accounts[5]
		const addressSKiD2nX = accounts[1]
		const addressTwEB85W = accounts[0]
		const addressXUcE2Qp = accounts[2]
		const addresspZzeZfF = await MoshiachCoinStakingpWLaK62.transferOwnership.call(addresshieMrIU, {from: accounts[3]});
		const uintPe9mcyM = await MoshiachCoinStakingpWLaK62.getStakingAndDaoAmount.call({from: accounts[4]});
//		const uintEWkqd1N = await MoshiachCoinStakingpWLaK62.deposit.call(uintZIOadUY, {from: accounts[4]});
//		const uintiMfuoNW = await MoshiachCoinStakingpWLaK62.deposit.call(uintoLpZhUN, {from: accounts[1]});
//		const uintSo7chiR = await MoshiachCoinStakingpWLaK62.withdraw.call(uintu3Vvt0s, {from: accounts[2]});
//		const addressJXxQ85x = await MoshiachCoinStakingpWLaK62.transferAnyERC20Tokens.call(addressSKiD2nX, addressyrLd8c, uintZsAmZns, {from: accounts[3]});
//		const addressoFgITvn = await MoshiachCoinStakingpWLaK62.transferOwnership.call(addressTwEB85W, {from: accounts[2]});
//		const uintIqEa21c = await MoshiachCoinStakingpWLaK62.getPendingDivs.call(addressXUcE2Qp, {from: "0x0000000000000000000000000000000000000001"});
//		const uintJPHfw0N = await MoshiachCoinStakingpWLaK62.getStakingAndDaoAmount.call({from: accounts[3]});

		assert.equal(uintPe9mcyM, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingpWLaK62.deposit.call(uintZIOadUY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingEJxcoNS = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintLF18HRr = BigInt("0")
		const addressEJJOAb = accounts[5]
//		const uintnJdD7H2 = await MoshiachCoinStakingEJxcoNS.deposit.call(uintLF18HRr, {from: accounts[4]});
//		const addresse0G6CGh = await MoshiachCoinStakingEJxcoNS.transferOwnership.call(addressEJJOAb, {from: accounts[0]});
//		await MoshiachCoinStakingEJxcoNS.claimDivs.call({from: accounts[1]});
//		const uintg9Lf3vH = await MoshiachCoinStakingEJxcoNS.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(MoshiachCoinStakingEJxcoNS.deposit.call(uintLF18HRr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingBpwTXq = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressIti9o5C = accounts[2]
		const uintktOGxot = await MoshiachCoinStakingBpwTXq.getNumberOfHolders.call({from: accounts[0]});
		await MoshiachCoinStakingBpwTXq.claimDivs.call({from: accounts[4]});
		const uintJVyJ0A1 = await MoshiachCoinStakingBpwTXq.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintQfnw6br = await MoshiachCoinStakingBpwTXq.getPendingDivs.call(addressIti9o5C, {from: accounts[2]});

		assert.equal(uintktOGxot, BigInt("0"))
		await expect(MoshiachCoinStakingBpwTXq.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingSe4SxG = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintgRYM9Tk = BigInt("914")
		const addressfTft7GD = accounts[0]
		const addressVnSSEJF = accounts[0]
		await MoshiachCoinStakingSe4SxG.onlyOwner.call({from: accounts[3]});
		await MoshiachCoinStakingSe4SxG.claimDivs.call({from: accounts[0]});
		const uintGmis8WP = await MoshiachCoinStakingSe4SxG.getNumberOfHolders.call({from: accounts[4]});
		const addressOOHDKUP = await MoshiachCoinStakingSe4SxG.transferAnyERC20Tokens.call(addressVnSSEJF, addressfTft7GD, uintgRYM9Tk, {from: accounts[1]});
		const uint2specl = await MoshiachCoinStakingSe4SxG.getStakingAndDaoAmount.call({from: accounts[4]});
		await MoshiachCoinStakingSe4SxG.claimDivs.call({from: accounts[0]});

		await expect(MoshiachCoinStakingSe4SxG.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking6LrlMy = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintNNSx3Es = BigInt("1387")
		const uintdr15hsL = BigInt("1845")
		const uintqRcW7cP = await MoshiachCoinStaking6LrlMy.withdraw.call(uintNNSx3Es, {from: accounts[0]});
		const uintw4mKb2N = await MoshiachCoinStaking6LrlMy.withdraw.call(uintdr15hsL, {from: accounts[2]});

		await expect(MoshiachCoinStaking6LrlMy.withdraw.call(uintNNSx3Es, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingPo78BYc = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWXamQG = BigInt("1799")
		const addresscH8jcZY = accounts[2]
		const uintwza9TrS = BigInt("82")
		const uintadvk2Qm = await MoshiachCoinStakingPo78BYc.withdraw.call(uintWXamQG, {from: accounts[4]});
		await MoshiachCoinStakingPo78BYc.onlyOwner.call({from: accounts[3]});
		const uintTEMZVp = await MoshiachCoinStakingPo78BYc.getPendingDivs.call(addresscH8jcZY, {from: accounts[5]});
		const uintKIXXs3p = await MoshiachCoinStakingPo78BYc.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintz031dn = await MoshiachCoinStakingPo78BYc.withdraw.call(uintwza9TrS, {from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingpPjkcM3 = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintLr5EgaG = BigInt("1629")
		const addresshxPeawx = accounts[0]
		const addressbkEjlxk = accounts[5]
		const uintHnkc6No = BigInt("1841")
		const uintLVD6mPC = BigInt("177")
		const addressxTmdgPm = accounts[0]
		const uintodX84o = await MoshiachCoinStakingpPjkcM3.getStakingAndDaoAmount.call({from: accounts[5]});
		const addressOYXjp4r = await MoshiachCoinStakingpPjkcM3.transferAnyERC20Tokens.call(addressbkEjlxk, addresshxPeawx, uintLr5EgaG, {from: accounts[0]});
		const uintnIXp1K = await MoshiachCoinStakingpPjkcM3.deposit.call(uintHnkc6No, {from: accounts[0]});
		const uintWL605RI = await MoshiachCoinStakingpPjkcM3.withdraw.call(uintLVD6mPC, {from: accounts[0]});
		const uintdWcOmrx = await MoshiachCoinStakingpPjkcM3.getPendingDivs.call(addressxTmdgPm, {from: accounts[1]});

		assert.equal(uintodX84o, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingpPjkcM3.transferAnyERC20Tokens.call(addressbkEjlxk, addresshxPeawx, uintLr5EgaG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingJPETpY1 = await MoshiachCoinStaking.new({from: accounts[5]});
		const addressSGawNQg = accounts[2]
		const uintgqqXilt = BigInt("1987")
		const uint64fhIW = await MoshiachCoinStakingJPETpY1.getPendingDivs.call(addressSGawNQg, {from: accounts[2]});
		const uintkIyqDK = await MoshiachCoinStakingJPETpY1.deposit.call(uintgqqXilt, {from: accounts[2]});
		const uintm2ipRGu = await MoshiachCoinStakingJPETpY1.getNumberOfHolders.call({from: accounts[5]});
		await MoshiachCoinStakingJPETpY1.claimDivs.call({from: accounts[3]});

		assert.equal(uint64fhIW, BigInt("0"))
		await expect(MoshiachCoinStakingJPETpY1.deposit.call(uintgqqXilt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingJPETpY1 = await MoshiachCoinStaking.new({from: accounts[5]});
		const addresszvgCCdo = accounts[2]
		const addressm7QzXnd = await MoshiachCoinStakingJPETpY1.transferOwnership.call(addresszvgCCdo, {from: accounts[5]});
		await MoshiachCoinStakingJPETpY1.claimDivs.call({from: accounts[3]});

		await expect(MoshiachCoinStakingJPETpY1.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
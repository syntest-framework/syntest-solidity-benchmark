const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinglcYJi7O = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintS5l2uXc = await MoshiachCoinStakinglcYJi7O.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakinglcYJi7O.claimDivs.call({from: accounts[2]});
		const uintGUBhV2q = await MoshiachCoinStakinglcYJi7O.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintJTLSTv = await MoshiachCoinStakinglcYJi7O.getNumberOfHolders.call({from: accounts[5]});
		await MoshiachCoinStakinglcYJi7O.claimDivs.call({from: accounts[5]});
		await MoshiachCoinStakinglcYJi7O.claimDivs.call({from: accounts[3]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingIsXWwG = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintT7O4KSi = BigInt("1815")
		const uintRMn4y4j = BigInt("875")
		const addressEmnlWR = "0x0000000000000000000000000000000000000001"
//		const uintfk6DBYn = await MoshiachCoinStakingIsXWwG.withdraw.call(uintT7O4KSi, {from: "0x0000000000000000000000000000000000000001"});
//		const uintBoMvZDw = await MoshiachCoinStakingIsXWwG.getNumberOfHolders.call({from: accounts[1]});
//		const uintSEWz4Zn = await MoshiachCoinStakingIsXWwG.withdraw.call(uintRMn4y4j, {from: accounts[1]});
//		const addressqtRREE8 = await MoshiachCoinStakingIsXWwG.transferOwnership.call(addressEmnlWR, {from: accounts[0]});
//		const uintgKijHy = await MoshiachCoinStakingIsXWwG.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingIsXWwG.withdraw.call(uintT7O4KSi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingneeVS36 = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressmGDj6sM = "0x0000000000000000000000000000000000000001"
		const addressCT5Qh6m = accounts[4]
		const addresscnZifDS = await MoshiachCoinStakingneeVS36.transferOwnership.call(addressmGDj6sM, {from: accounts[2]});
		const uintT0CwFnq = await MoshiachCoinStakingneeVS36.getNumberOfHolders.call({from: accounts[1]});
//		const addressz4p1TK5 = await MoshiachCoinStakingneeVS36.transferOwnership.call(addressCT5Qh6m, {from: accounts[1]});

		assert.equal(uintT0CwFnq, BigInt("0"))
		await expect(MoshiachCoinStakingneeVS36.transferOwnership.call(addressCT5Qh6m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingYUp4pW5 = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintVlplgDn = BigInt("1656")
		const addressYEubWFt = accounts[2]
//		const uintwvvdYy = await MoshiachCoinStakingYUp4pW5.deposit.call(uintVlplgDn, {from: "0x0000000000000000000000000000000000000001"});
//		await MoshiachCoinStakingYUp4pW5.onlyOwner.call({from: accounts[3]});
//		const addressT6HnE7R = await MoshiachCoinStakingYUp4pW5.transferOwnership.call(addressYEubWFt, {from: accounts[3]});
//		const uintpHYgYrf = await MoshiachCoinStakingYUp4pW5.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(MoshiachCoinStakingYUp4pW5.deposit.call(uintVlplgDn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingwTMyLhz = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressO7B8Ax1 = accounts[4]
		const addressolYYO6M = accounts[5]
		const addressEB85i8a = accounts[2]
		const uintf59fusA = await MoshiachCoinStakingwTMyLhz.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintulutQJQ = await MoshiachCoinStakingwTMyLhz.getPendingDivs.call(addressO7B8Ax1, {from: accounts[1]});
//		await MoshiachCoinStakingwTMyLhz.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintyHlvS6 = await MoshiachCoinStakingwTMyLhz.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintKZqpJ03 = await MoshiachCoinStakingwTMyLhz.getPendingDivs.call(addressolYYO6M, {from: accounts[4]});
//		const addressMLxRvEv = await MoshiachCoinStakingwTMyLhz.transferOwnership.call(addressEB85i8a, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintf59fusA, BigInt("60000000000000000000000000"))
		assert.equal(uintulutQJQ, BigInt("0"))
		await expect(MoshiachCoinStakingwTMyLhz.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking0CijED = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintUezdEJ4 = BigInt("326")
		const addressC3ZAc08 = accounts[4]
		const addressCrybAn = "0x0000000000000000000000000000000000000001"
		const uintPUSznH7 = BigInt("1928")
		const uintoAUKR7R = await MoshiachCoinStaking0CijED.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintegmNdSQ = await MoshiachCoinStaking0CijED.getStakingAndDaoAmount.call({from: accounts[0]});
//		const addressDBDUY8u = await MoshiachCoinStaking0CijED.transferAnyERC20Tokens.call(addressCrybAn, addressC3ZAc08, uintUezdEJ4, {from: accounts[0]});
//		const uintsNltVkq = await MoshiachCoinStaking0CijED.getNumberOfHolders.call({from: accounts[3]});
//		const uintKFILzDL = await MoshiachCoinStaking0CijED.getStakingAndDaoAmount.call({from: accounts[2]});
//		const uintvK13Ovr = await MoshiachCoinStaking0CijED.deposit.call(uintPUSznH7, {from: accounts[3]});

		assert.equal(uintegmNdSQ, BigInt("60000000000000000000000000"))
		assert.equal(uintoAUKR7R, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStaking0CijED.transferAnyERC20Tokens.call(addressCrybAn, addressC3ZAc08, uintUezdEJ4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingOqDJKMV = await MoshiachCoinStaking.new({from: accounts[5]});
		const addresskcJUPt = accounts[4]
//		await MoshiachCoinStakingOqDJKMV.onlyOwner.call({from: accounts[3]});
//		const uintBtDoXVl = await MoshiachCoinStakingOqDJKMV.getPendingDivs.call(addresskcJUPt, {from: accounts[1]});
//		const uintxUIFtE = await MoshiachCoinStakingOqDJKMV.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintLiQyoaW = await MoshiachCoinStakingOqDJKMV.getNumberOfHolders.call({from: accounts[2]});
//		await MoshiachCoinStakingOqDJKMV.claimDivs.call({from: accounts[1]});

		await expect(MoshiachCoinStakingOqDJKMV.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingIgI3oWc = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintt5FzTbm = BigInt("0")
		const addresshj78DFB = accounts[3]
//		const uintvaaE8nQ = await MoshiachCoinStakingIgI3oWc.deposit.call(uintt5FzTbm, {from: accounts[4]});
//		const addressqGEEIC = await MoshiachCoinStakingIgI3oWc.transferOwnership.call(addresshj78DFB, {from: accounts[3]});

		await expect(MoshiachCoinStakingIgI3oWc.deposit.call(uintt5FzTbm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
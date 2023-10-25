const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingRcmXrQx = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintxYVmzgY = BigInt("600")
		const uint8UT5SO = BigInt("981")
		const addressnSeA8N = accounts[4]
		const addressaaMHtCt = accounts[2]
		const uintAKyhYHx = await MoshiachCoinStakingRcmXrQx.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintjsXiTdy = await MoshiachCoinStakingRcmXrQx.getNumberOfHolders.call({from: accounts[1]});
//		const uintVnOnaUu = await MoshiachCoinStakingRcmXrQx.deposit.call(uintxYVmzgY, {from: accounts[2]});
//		const addressvyuDnLQ = await MoshiachCoinStakingRcmXrQx.transferAnyERC20Tokens.call(addressaaMHtCt, addressnSeA8N, uint8UT5SO, {from: accounts[4]});
//		const uintzPFO0GV = await MoshiachCoinStakingRcmXrQx.getNumberOfHolders.call({from: accounts[0]});

		assert.equal(uintAKyhYHx, BigInt("60000000000000000000000000"))
		assert.equal(uintjsXiTdy, BigInt("0"))
		await expect(MoshiachCoinStakingRcmXrQx.deposit.call(uintxYVmzgY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingnEu0Iro = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintMQBbXav = await MoshiachCoinStakingnEu0Iro.getStakingAndDaoAmount.call({from: accounts[1]});
//		await MoshiachCoinStakingnEu0Iro.onlyOwner.call({from: accounts[1]});
//		await MoshiachCoinStakingnEu0Iro.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintmtVaPK = await MoshiachCoinStakingnEu0Iro.getNumberOfHolders.call({from: accounts[2]});

		assert.equal(uintMQBbXav, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingnEu0Iro.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingeaX8g7B = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintDMfnQqB = await MoshiachCoinStakingeaX8g7B.getNumberOfHolders.call({from: accounts[1]});
//		await MoshiachCoinStakingeaX8g7B.claimDivs.call({from: accounts[0]});

		assert.equal(uintDMfnQqB, BigInt("0"))
		await expect(MoshiachCoinStakingeaX8g7B.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjwjAcX = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUbh4chb = BigInt("348")
		const uintLQkqcZh = BigInt("741")
		const uint5syTqA = await MoshiachCoinStakingjwjAcX.withdraw.call(uintUbh4chb, {from: accounts[2]});
		const uintlmNlCpw = await MoshiachCoinStakingjwjAcX.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintVTIuanY = await MoshiachCoinStakingjwjAcX.withdraw.call(uintLQkqcZh, {from: "0x0000000000000000000000000000000000000001"});
		const uintI71z8Ty = await MoshiachCoinStakingjwjAcX.getNumberOfHolders.call({from: accounts[3]});
		const uintvab0wzz = await MoshiachCoinStakingjwjAcX.getStakingAndDaoAmount.call({from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingiePXwtN = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintt1P0tfH = BigInt("1183")
//		const uintpEdeOX = await MoshiachCoinStakingiePXwtN.withdraw.call(uintt1P0tfH, {from: accounts[3]});
//		const uintpE3Muka = await MoshiachCoinStakingiePXwtN.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(MoshiachCoinStakingiePXwtN.withdraw.call(uintt1P0tfH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingwZoBidg = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressfsxKQao = accounts[4]
		const uintEzylVRx = BigInt("137")
		const addressrruGMB2 = "0x0000000000000000000000000000000000000001"
		const addresscoh9GQP = accounts[2]
		const uintW7974I = await MoshiachCoinStakingwZoBidg.getNumberOfHolders.call({from: accounts[2]});
//		await MoshiachCoinStakingwZoBidg.claimDivs.call({from: accounts[3]});
//		const addressN7shg4F = await MoshiachCoinStakingwZoBidg.transferOwnership.call(addressfsxKQao, {from: accounts[3]});
//		const addressziDflID = await MoshiachCoinStakingwZoBidg.transferAnyERC20Tokens.call(addresscoh9GQP, addressrruGMB2, uintEzylVRx, {from: accounts[4]});

		assert.equal(uintW7974I, BigInt("0"))
		await expect(MoshiachCoinStakingwZoBidg.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingeaX8g7B = await MoshiachCoinStaking.new({from: accounts[2]});
		const uint9oSomj = BigInt("522")
		const addressKauFEpV = accounts[0]
		const addressEXW9fD0 = accounts[4]
		const addressMyMboBP = accounts[5]
//		const addresshl04fpn = await MoshiachCoinStakingeaX8g7B.transferAnyERC20Tokens.call(addressEXW9fD0, addressKauFEpV, uint9oSomj, {from: accounts[2]});
//		const uintxdjEDt1 = await MoshiachCoinStakingeaX8g7B.getPendingDivs.call(addressMyMboBP, {from: accounts[1]});
//		await MoshiachCoinStakingeaX8g7B.claimDivs.call({from: accounts[0]});

		await expect(MoshiachCoinStakingeaX8g7B.transferAnyERC20Tokens.call(addressEXW9fD0, addressKauFEpV, uint9oSomj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
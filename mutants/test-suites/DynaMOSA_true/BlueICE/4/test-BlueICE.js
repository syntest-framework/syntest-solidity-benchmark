const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEglXZMRn = await BlueICE.new({from: accounts[5]});
		const addressZLLlAMz = accounts[5]
		const uintUZGk2TF = BigInt("1123")
		const addressItJ9LWR = accounts[1]
		const addressarrayWeRsa6j = await BlueICEglXZMRn.getCommunity.call({from: accounts[1]});
		const uint256Vhq9QO = await BlueICEglXZMRn.earned.call(addressZLLlAMz, {from: accounts[3]});
//		const uint256jfvTr2U = await BlueICEglXZMRn.stake.call(uintUZGk2TF, {from: accounts[0]});
//		const boolXzBMcb = await BlueICEglXZMRn.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressE0DvcYy = await BlueICEglXZMRn.transferOwnership.call(addressItJ9LWR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayWeRsa6j, )
		assert.equal(uint256Vhq9QO, BigInt("0"))
		await expect(BlueICEglXZMRn.stake.call(uintUZGk2TF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEud1h6J = await BlueICE.new({from: accounts[5]});
		const uintJVLLJYb = BigInt("1032")
		const uintcmmkflK = BigInt("1211")
//		await BlueICEud1h6J.onlyOwner.call({from: accounts[2]});
//		const uint256n31Mjm6 = await BlueICEud1h6J.unstake.call(uintJVLLJYb, {from: accounts[5]});
//		const uint256bma2kDJ = await BlueICEud1h6J.notifyRewardAmount.call(uintcmmkflK, {from: accounts[4]});

		await expect(BlueICEud1h6J.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOXJ7oN9 = await BlueICE.new({from: accounts[2]});
		const addressylCRkp = "0x0000000000000000000000000000000000000001"
//		const addressERppSPW = await BlueICEOXJ7oN9.transferOwnership.call(addressylCRkp, {from: accounts[0]});
//		await BlueICEOXJ7oN9.claimRewards.call({from: accounts[4]});
//		const boolQpmkhWp = await BlueICEOXJ7oN9.isOwner.call({from: accounts[1]});
//		const uint256GtgsuAg = await BlueICEOXJ7oN9.getCurrentRewardReserve.call({from: accounts[1]});
//		await BlueICEOXJ7oN9.exit.call({from: accounts[1]});

		await expect(BlueICEOXJ7oN9.transferOwnership.call(addressylCRkp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEud1h6J = await BlueICE.new({from: accounts[5]});
		const uintxUougMD = BigInt("1032")
		const uinty51NQ6i = BigInt("1211")
//		const uint256n31Mjm6 = await BlueICEud1h6J.unstake.call(uintxUougMD, {from: accounts[5]});
//		const uint256bma2kDJ = await BlueICEud1h6J.notifyRewardAmount.call(uinty51NQ6i, {from: accounts[4]});

		await expect(BlueICEud1h6J.unstake.call(uintxUougMD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKFNRRmS = await BlueICE.new({from: accounts[0]});
		const addresslhf449e = accounts[1]
		const uintZOm0kWi = BigInt("922")
		const uinttSG1cjB = BigInt("1974")
		const uint256I3BP9Qv = await BlueICEKFNRRmS.getCurrentRewardReserve.call({from: accounts[4]});
//		const addressBVk75s9 = await BlueICEKFNRRmS.transferOwnership.call(addresslhf449e, {from: accounts[3]});
//		const uint256a3oMfa = await BlueICEKFNRRmS.unstake.call(uintZOm0kWi, {from: accounts[0]});
//		await BlueICEKFNRRmS.onlyOwner.call({from: accounts[2]});
//		const uint256eERUJkN = await BlueICEKFNRRmS.stake.call(uinttSG1cjB, {from: accounts[0]});

		assert.equal(uint256I3BP9Qv, BigInt("500000000000000000000"))
		await expect(BlueICEKFNRRmS.transferOwnership.call(addresslhf449e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEzyTxJJy = await BlueICE.new({from: accounts[3]});
		const uintu27KYJv = BigInt("515")
		const addressrXB59eK = accounts[2]
		const addressWgIGAXm = await BlueICEzyTxJJy.owner.call({from: accounts[0]});
//		const uint256StCxNC = await BlueICEzyTxJJy.stake.call(uintu27KYJv, {from: accounts[3]});
//		const uint256jeIBkIR = await BlueICEzyTxJJy.rewardPerToken.call({from: accounts[3]});
//		const uint256BwP7yqX = await BlueICEzyTxJJy.lastTimeRewardApplicable.call({from: accounts[3]});
//		const addressmjiuG60 = await BlueICEzyTxJJy.transferOwnership.call(addressrXB59eK, {from: accounts[4]});
//		const uint256SBuSwQc = await BlueICEzyTxJJy.rewardPerToken.call({from: accounts[1]});

		assert.equal(addressWgIGAXm, 0x6214739773ee3bDacd1EDaCdC34442B9477E63B8)
		await expect(BlueICEzyTxJJy.stake.call(uintu27KYJv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEud1h6J = await BlueICE.new({from: accounts[5]});
		const uintOxfa3Ck = BigInt("343")
		const uint256qdMgryL = await BlueICEud1h6J.rewardPerToken.call({from: accounts[2]});
//		await BlueICEud1h6J.exit.call({from: accounts[3]});
//		const uint256NvjK3mp = await BlueICEud1h6J.rewardPerToken.call({from: accounts[5]});
//		const uint256n31Mjm6 = await BlueICEud1h6J.unstake.call(uintOxfa3Ck, {from: accounts[5]});

		assert.equal(uint256qdMgryL, BigInt("0"))
		await expect(BlueICEud1h6J.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEHz6AjWp = await BlueICE.new({from: accounts[2]});
		const addressscpKiXm = accounts[3]
		const uint256qL3dSWk = await BlueICEHz6AjWp.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEHz6AjWp.renounceOwnership.call({from: accounts[2]});
//		const addressK3VbxAv = await BlueICEHz6AjWp.transferOwnership.call(addressscpKiXm, {from: accounts[3]});

		assert.equal(uint256qL3dSWk, BigInt("0"))
		await expect(BlueICEHz6AjWp.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEud1h6J = await BlueICE.new({from: accounts[5]});
		const uintzzMrHKw = BigInt("338")
		const uint256qdMgryL = await BlueICEud1h6J.rewardPerToken.call({from: accounts[2]});
		const uint256NvjK3mp = await BlueICEud1h6J.rewardPerToken.call({from: accounts[5]});
//		await BlueICEud1h6J.claimRewards.call({from: accounts[2]});
//		const uint256n31Mjm6 = await BlueICEud1h6J.unstake.call(uintzzMrHKw, {from: accounts[5]});
//		const addressarrayjIt6dwe = await BlueICEud1h6J.getCommunity.call({from: accounts[0]});

		assert.equal(uint256NvjK3mp, BigInt("0"))
		assert.equal(uint256qdMgryL, BigInt("0"))
		await expect(BlueICEud1h6J.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEh8siYy8 = await BlueICE.new({from: accounts[1]});
		const uintKylOW6 = BigInt("726")
		const uinta5SE0Ok = BigInt("1869")
		const uintGa4u0sO = BigInt("1072")
		const uint256vsJT1ps = await BlueICEh8siYy8.rewardPerToken.call({from: accounts[4]});
//		const uint256qZCMXV = await BlueICEh8siYy8.notifyRewardAmount.call(uintKylOW6, {from: accounts[1]});
//		const uint256w5k0One = await BlueICEh8siYy8.unstake.call(uinta5SE0Ok, {from: accounts[1]});
//		const uint256SVmEp4 = await BlueICEh8siYy8.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256lnMoBR9 = await BlueICEh8siYy8.unstake.call(uintGa4u0sO, {from: accounts[5]});

		assert.equal(uint256vsJT1ps, BigInt("0"))
		await expect(BlueICEh8siYy8.notifyRewardAmount.call(uintKylOW6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEgg1sb0K = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayo8cdI3j = await BlueICEgg1sb0K.getCommunity.call({from: accounts[4]});
		const uint256xmDhgqB = await BlueICEgg1sb0K.rewardPerToken.call({from: accounts[5]});
	});

	it('test for BlueICE', async () => {
		const BlueICEuHh0Atf = await BlueICE.new({from: accounts[1]});
		const addressfLR52XV = accounts[1]
		const uintpHk60a8 = BigInt("1992")
		const addressV8GMtBT = await BlueICEuHh0Atf.transferOwnership.call(addressfLR52XV, {from: accounts[1]});
//		const uint256m32UNxM = await BlueICEuHh0Atf.notifyRewardAmount.call(uintpHk60a8, {from: accounts[2]});
//		const addressarrayeBhhFgX = await BlueICEuHh0Atf.getCommunity.call({from: accounts[4]});

		await expect(BlueICEuHh0Atf.notifyRewardAmount.call(uintpHk60a8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEyWPFEjw = await BlueICE.new({from: accounts[4]});
		const addressarraynR12dFo = await BlueICEyWPFEjw.getCommunity.call({from: accounts[4]});
		await BlueICEyWPFEjw.claimRewards.call({from: accounts[0]});
		await BlueICEyWPFEjw.renounceOwnership.call({from: accounts[0]});
		await BlueICEyWPFEjw.onlyOwner.call({from: accounts[1]});

		assert.equal(addressarraynR12dFo, )
		await expect(BlueICEyWPFEjw.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEz8OHRz2 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEz8OHRz2.onlyOwner.call({from: accounts[4]});
		const addressarrayPOpNLLj = await BlueICEz8OHRz2.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEz8OHRz2.exit.call({from: accounts[2]});
	});

	it('test for BlueICE', async () => {
		const BlueICENktwPWI = await BlueICE.new({from: accounts[4]});
		const uint256AazQTrW = await BlueICENktwPWI.rewardPerToken.call({from: accounts[1]});
		const uint256fe6YzWq = await BlueICENktwPWI.getCurrentRewardReserve.call({from: accounts[5]});

		assert.equal(uint256AazQTrW, BigInt("0"))
		assert.equal(uint256fe6YzWq, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEGaZGBaJ = await BlueICE.new({from: accounts[3]});
		const uintdBqS5C9 = BigInt("2029")
		const uint256U2A8XJa = await BlueICEGaZGBaJ.getCurrentRewardReserve.call({from: accounts[4]});
		await BlueICEGaZGBaJ.onlyOwner.call({from: accounts[4]});
		await BlueICEGaZGBaJ.renounceOwnership.call({from: accounts[4]});
		await BlueICEGaZGBaJ.onlyOwner.call({from: accounts[2]});
		const uint256n4fibfZ = await BlueICEGaZGBaJ.notifyRewardAmount.call(uintdBqS5C9, {from: accounts[4]});

		assert.equal(uint256U2A8XJa, BigInt("500000000000000000000"))
		await expect(BlueICEGaZGBaJ.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEaeGPqv6 = await BlueICE.new({from: accounts[3]});
		const addressjyfoGID = accounts[1]
		const uintk6oSGuV = BigInt("816")
		const addresszfcS091 = await BlueICEaeGPqv6.transferOwnership.call(addressjyfoGID, {from: accounts[4]});
		const uint256fPajOtP = await BlueICEaeGPqv6.notifyRewardAmount.call(uintk6oSGuV, {from: accounts[1]});

		await expect(BlueICEaeGPqv6.transferOwnership.call(addressjyfoGID, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICENktwPWI = await BlueICE.new({from: accounts[4]});
		const addressyGjEiy = await BlueICENktwPWI.owner.call({from: accounts[2]});
		const uint256AazQTrW = await BlueICENktwPWI.rewardPerToken.call({from: accounts[1]});
		const uint256fe6YzWq = await BlueICENktwPWI.getCurrentRewardReserve.call({from: accounts[5]});

		assert.equal(addressyGjEiy, 0x854b7249511Ba3949F44e8f082b1333a19fE7185)
		assert.equal(uint256AazQTrW, BigInt("0"))
		assert.equal(uint256fe6YzWq, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICENktwPWI = await BlueICE.new({from: accounts[4]});
		const uintjfuvZxt = BigInt("962")
		const uint256fe6YzWq = await BlueICENktwPWI.getCurrentRewardReserve.call({from: accounts[5]});
		const uint256nnARcQo = await BlueICENktwPWI.unstake.call(uintjfuvZxt, {from: accounts[2]});

		assert.equal(uint256fe6YzWq, BigInt("500000000000000000000"))
		await expect(BlueICENktwPWI.unstake.call(uintjfuvZxt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICENktwPWI = await BlueICE.new({from: accounts[4]});
		const addresspOVjveY = "0x0000000000000000000000000000000000000001"
		const uint256fe6YzWq = await BlueICENktwPWI.getCurrentRewardReserve.call({from: accounts[5]});
		await BlueICENktwPWI.exit.call({from: accounts[2]});
		const addressi4KEh5f = await BlueICENktwPWI.transferOwnership.call(addresspOVjveY, {from: accounts[4]});

		assert.equal(uint256fe6YzWq, BigInt("500000000000000000000"))
		await expect(BlueICENktwPWI.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICENktwPWI = await BlueICE.new({from: accounts[4]});
		const uintMxvcqll = BigInt("1038")
		const addressc5qYoAB = accounts[0]
		const uint256gKxv8H = await BlueICENktwPWI.stake.call(uintMxvcqll, {from: accounts[0]});
		const addressECILibg = await BlueICENktwPWI.updateReward.call(addressc5qYoAB, {from: accounts[3]});
		const uint256fe6YzWq = await BlueICENktwPWI.getCurrentRewardReserve.call({from: accounts[5]});
		const uint256M6qp4ut = await BlueICENktwPWI.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICENktwPWI.stake.call(uintMxvcqll, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICENktwPWI = await BlueICE.new({from: accounts[4]});
		const addressdfR3oMr = accounts[2]
		const addressdLbAAF = await BlueICENktwPWI.transferOwnership.call(addressdfR3oMr, {from: accounts[4]});
		const uint256AazQTrW = await BlueICENktwPWI.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256AazQTrW, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICENktwPWI = await BlueICE.new({from: accounts[4]});
		const uintLjysUI1 = BigInt("2000")
		const addressF8tTBGI = accounts[5]
		const uint256Bq6vVPp = await BlueICENktwPWI.notifyRewardAmount.call(uintLjysUI1, {from: accounts[4]});
		const addressUC4frte = await BlueICENktwPWI.updateReward.call(addressF8tTBGI, {from: accounts[3]});
		const uint256fe6YzWq = await BlueICENktwPWI.getCurrentRewardReserve.call({from: accounts[5]});

		await expect(BlueICENktwPWI.notifyRewardAmount.call(uintLjysUI1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICENktwPWI = await BlueICE.new({from: accounts[4]});
		const uint256fe6YzWq = await BlueICENktwPWI.getCurrentRewardReserve.call({from: accounts[5]});
		const addressDCVaka = await BlueICENktwPWI.owner.call({from: accounts[1]});
		await BlueICENktwPWI.renounceOwnership.call({from: accounts[4]});

		assert.equal(addressDCVaka, 0x854b7249511Ba3949F44e8f082b1333a19fE7185)
		assert.equal(uint256fe6YzWq, BigInt("500000000000000000000"))
		await expect(BlueICENktwPWI.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
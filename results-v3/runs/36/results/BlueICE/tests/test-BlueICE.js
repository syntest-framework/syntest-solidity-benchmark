const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEWymDeE = await BlueICE.new({from: accounts[4]});
		await BlueICEWymDeE.exit.call({from: accounts[5]});
		await BlueICEWymDeE.exit.call({from: accounts[3]});
		const addressarrayfcNTfMJ = await BlueICEWymDeE.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEWymDeE.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEgw4cTQ2 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEgw4cTQ2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressSEKmDhQ = await BlueICEgw4cTQ2.owner.call({from: accounts[1]});
		const uint256IwXvN8Q = await BlueICEgw4cTQ2.getCurrentRewardReserve.call({from: accounts[0]});
	});

	it('test for BlueICE', async () => {
		const BlueICEq6qBpWJ = await BlueICE.new({from: accounts[3]});
		const uint256MXttdOP = await BlueICEq6qBpWJ.rewardPerToken.call({from: accounts[3]});
		await BlueICEq6qBpWJ.onlyOwner.call({from: accounts[4]});
		const boolLBbz1E9 = await BlueICEq6qBpWJ.isOwner.call({from: accounts[1]});
		await BlueICEq6qBpWJ.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256MXttdOP, BigInt("0"))
		await expect(BlueICEq6qBpWJ.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEaIg1CJZ = await BlueICE.new({from: accounts[4]});
		await BlueICEaIg1CJZ.renounceOwnership.call({from: accounts[0]});
		const addressxfQRvyZ = await BlueICEaIg1CJZ.owner.call({from: accounts[0]});
		const uint256r26hC7J = await BlueICEaIg1CJZ.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(BlueICEaIg1CJZ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIsW5vUO = await BlueICE.new({from: accounts[0]});
		const addressJBl0BQJ = "0x0000000000000000000000000000000000000001"
		const booltZYtYfs = await BlueICEIsW5vUO.isOwner.call({from: accounts[4]});
		const addressarrayNgPfyU = await BlueICEIsW5vUO.getCommunity.call({from: accounts[5]});
		const addressarrayUkDdeEM = await BlueICEIsW5vUO.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEIsW5vUO.onlyOwner.call({from: accounts[4]});
		const addressdIKpHYX = await BlueICEIsW5vUO.transferOwnership.call(addressJBl0BQJ, {from: accounts[3]});
		const addressarrayatI0uFX = await BlueICEIsW5vUO.getCommunity.call({from: accounts[4]});

		assert.equal(addressarrayNgPfyU, )
		assert.equal(addressarrayUkDdeEM, )
		assert.equal(booltZYtYfs, false)
		await expect(BlueICEIsW5vUO.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEzM7Nuyt = await BlueICE.new({from: accounts[1]});
		const uintGKByBxM = BigInt("694")
		const addressmAbbKWO = accounts[0]
		const uint256H6MS8ze = await BlueICEzM7Nuyt.rewardPerToken.call({from: accounts[3]});
		const booldSrTOdX = await BlueICEzM7Nuyt.isOwner.call({from: accounts[0]});
		const uint256PStcaEM = await BlueICEzM7Nuyt.stake.call(uintGKByBxM, {from: accounts[0]});
		const uint256VDF85dt = await BlueICEzM7Nuyt.getCurrentRewardReserve.call({from: accounts[4]});
		const addresskLORh43 = await BlueICEzM7Nuyt.updateReward.call(addressmAbbKWO, {from: accounts[0]});
		const uint256V2pKiQG = await BlueICEzM7Nuyt.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(booldSrTOdX, false)
		assert.equal(uint256H6MS8ze, BigInt("0"))
		await expect(BlueICEzM7Nuyt.stake.call(uintGKByBxM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEntXDVmZ = await BlueICE.new({from: accounts[0]});
		const addressarrayVfTr89c = await BlueICEntXDVmZ.getCommunity.call({from: accounts[4]});
		const uint256GhA3Ys = await BlueICEntXDVmZ.getCurrentRewardReserve.call({from: accounts[5]});
		const uint256v7JQHsN = await BlueICEntXDVmZ.rewardPerToken.call({from: accounts[3]});

		assert.equal(addressarrayVfTr89c, )
		assert.equal(uint256GhA3Ys, BigInt("500000000000000000000"))
		assert.equal(uint256v7JQHsN, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEwmcxYI4 = await BlueICE.new({from: accounts[4]});
		await BlueICEwmcxYI4.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayyjz5yHn = await BlueICEwmcxYI4.getCommunity.call({from: accounts[4]});

		await expect(BlueICEwmcxYI4.claimRewards.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEC5KUXqt = await BlueICE.new({from: accounts[0]});
		const uintnGDC4pq = BigInt("1286")
		const uintJo48SsC = BigInt("1439")
		const uint256NEEkz1J = await BlueICEC5KUXqt.unstake.call(uintnGDC4pq, {from: accounts[3]});
		const uint2563wWlbY = await BlueICEC5KUXqt.unstake.call(uintJo48SsC, {from: accounts[4]});

		await expect(BlueICEC5KUXqt.unstake.call(uintnGDC4pq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEtpUr4G = await BlueICE.new({from: accounts[2]});
		const uintP3akec0 = BigInt("826")
		const uint256eXbN5FE = await BlueICEtpUr4G.notifyRewardAmount.call(uintP3akec0, {from: accounts[2]});
		const uint256VSeWitA = await BlueICEtpUr4G.rewardPerToken.call({from: accounts[2]});
		await BlueICEtpUr4G.onlyOwner.call({from: accounts[4]});

		await expect(BlueICEtpUr4G.notifyRewardAmount.call(uintP3akec0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEmur3DRL = await BlueICE.new({from: accounts[2]});
		const uint256hdCsB4j = await BlueICEmur3DRL.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256J9bmJS = await BlueICEmur3DRL.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressKYICX41 = await BlueICEmur3DRL.owner.call({from: accounts[2]});
		await BlueICEmur3DRL.claimRewards.call({from: accounts[3]});

		assert.equal(addressKYICX41, 0xEc0CB7caA2B4fe3d6515771aca1d994d217C15aa)
		assert.equal(uint256J9bmJS, BigInt("0"))
		assert.equal(uint256hdCsB4j, BigInt("500000000000000000000"))
		await expect(BlueICEmur3DRL.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICExKsQvT4 = await BlueICE.new({from: accounts[4]});
		const addressI9N81sX = accounts[2]
		const uintkKdJkhU = BigInt("7")
		const uint256IhW1p6f = await BlueICExKsQvT4.rewardPerToken.call({from: accounts[2]});
		const uint256nsAOBi1 = await BlueICExKsQvT4.getCurrentRewardReserve.call({from: accounts[3]});
		const boolsMBcgo0 = await BlueICExKsQvT4.isOwner.call({from: accounts[1]});
		const uint256th5Qy1I = await BlueICExKsQvT4.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressSaPnmdT = await BlueICExKsQvT4.transferOwnership.call(addressI9N81sX, {from: accounts[4]});
		const uint256GHl3nbB = await BlueICExKsQvT4.unstake.call(uintkKdJkhU, {from: accounts[4]});
		const addressarrayS2s3dQ = await BlueICExKsQvT4.getCommunity.call({from: accounts[5]});

		assert.equal(boolsMBcgo0, false)
		assert.equal(uint256IhW1p6f, BigInt("0"))
		assert.equal(uint256nsAOBi1, BigInt("500000000000000000000"))
		assert.equal(uint256th5Qy1I, BigInt("0"))
		await expect(BlueICExKsQvT4.unstake.call(uintkKdJkhU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEmur3DRL = await BlueICE.new({from: accounts[2]});
		await BlueICEmur3DRL.renounceOwnership.call({from: accounts[2]});
		await BlueICEmur3DRL.claimRewards.call({from: accounts[3]});

		await expect(BlueICEmur3DRL.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
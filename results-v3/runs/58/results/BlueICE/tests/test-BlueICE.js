const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEpvWIJfS = await BlueICE.new({from: accounts[5]});
		const uintcapA54M = BigInt("1865")
		const addressnebCW7h = accounts[0]
		const uint256Mpgjgvr = await BlueICEpvWIJfS.unstake.call(uintcapA54M, {from: "0x0000000000000000000000000000000000000001"});
		await BlueICEpvWIJfS.claimRewards.call({from: accounts[0]});
		const uint256UmBfYNe = await BlueICEpvWIJfS.earned.call(addressnebCW7h, {from: accounts[4]});
		const uint256oSLTWvg = await BlueICEpvWIJfS.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(BlueICEpvWIJfS.unstake.call(uintcapA54M, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEXT4RZc = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskC5remy = accounts[3]
		const addresskgob5N = accounts[0]
		const addressDkVTWa1 = await BlueICEXT4RZc.transferOwnership.call(addresskC5remy, {from: accounts[1]});
		const addressarrayjpjWiU = await BlueICEXT4RZc.getCommunity.call({from: accounts[4]});
		const addressarraySvTLdPy = await BlueICEXT4RZc.getCommunity.call({from: accounts[4]});
		const addressfVv0uga = await BlueICEXT4RZc.updateReward.call(addresskgob5N, {from: accounts[2]});
		const addressarrayFTqAjJk = await BlueICEXT4RZc.getCommunity.call({from: accounts[4]});
	});

	it('test for BlueICE', async () => {
		const BlueICEts8wrvP = await BlueICE.new({from: accounts[4]});
		const addressjQPYNMN = accounts[0]
		await BlueICEts8wrvP.onlyOwner.call({from: accounts[3]});
		await BlueICEts8wrvP.exit.call({from: accounts[3]});
		const addressuRsVrv = await BlueICEts8wrvP.updateReward.call(addressjQPYNMN, {from: accounts[0]});
		await BlueICEts8wrvP.claimRewards.call({from: accounts[2]});

		await expect(BlueICEts8wrvP.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEG0nwQpv = await BlueICE.new({from: accounts[0]});
		const uintDIxo9Rn = BigInt("1152")
		const uintBT9i5PC = BigInt("695")
		const uintWRcFgWy = BigInt("256")
		const uint256K6b5XT8 = await BlueICEG0nwQpv.notifyRewardAmount.call(uintDIxo9Rn, {from: accounts[3]});
		const booloMWTEaD = await BlueICEG0nwQpv.isOwner.call({from: accounts[1]});
		const uint256B7aJf4j = await BlueICEG0nwQpv.unstake.call(uintBT9i5PC, {from: accounts[4]});
		const boolK76Ta16 = await BlueICEG0nwQpv.isOwner.call({from: accounts[0]});
		await BlueICEG0nwQpv.exit.call({from: accounts[3]});
		const uint256sYgI8qn = await BlueICEG0nwQpv.unstake.call(uintWRcFgWy, {from: accounts[0]});

		await expect(BlueICEG0nwQpv.notifyRewardAmount.call(uintDIxo9Rn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKJSn9eN = await BlueICE.new({from: accounts[3]});
		const addresszxjutf6 = accounts[4]
		const uintgbdAfS = BigInt("1892")
		const addressK3b6Jlo = accounts[1]
		await BlueICEKJSn9eN.exit.call({from: accounts[0]});
		const uint256MbMREpL = await BlueICEKJSn9eN.earned.call(addresszxjutf6, {from: accounts[1]});
		const uint256xkdj5oE = await BlueICEKJSn9eN.notifyRewardAmount.call(uintgbdAfS, {from: accounts[0]});
		const address7f8Vme = await BlueICEKJSn9eN.transferOwnership.call(addressK3b6Jlo, {from: accounts[3]});

		await expect(BlueICEKJSn9eN.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnIexgtZ = await BlueICE.new({from: accounts[4]});
		await BlueICEnIexgtZ.claimRewards.call({from: accounts[4]});
		await BlueICEnIexgtZ.exit.call({from: accounts[0]});
		await BlueICEnIexgtZ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEnIexgtZ.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnIexgtZ = await BlueICE.new({from: accounts[4]});
		const addressczEmMwX = await BlueICEnIexgtZ.owner.call({from: accounts[5]});
		await BlueICEnIexgtZ.exit.call({from: accounts[0]});
		await BlueICEnIexgtZ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressczEmMwX, 0x1a64223aCdbfFdE287c46Fc7497C7C3129d6D8B3)
		await expect(BlueICEnIexgtZ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnIexgtZ = await BlueICE.new({from: accounts[4]});
		const uintgdJ0nDa = BigInt("860")
		const uint256SQWDmLP = await BlueICEnIexgtZ.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256Dv9fTFp = await BlueICEnIexgtZ.unstake.call(uintgdJ0nDa, {from: accounts[5]});
		await BlueICEnIexgtZ.exit.call({from: accounts[0]});
		await BlueICEnIexgtZ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256SQWDmLP, BigInt("500000000000000000000"))
		await expect(BlueICEnIexgtZ.unstake.call(uintgdJ0nDa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEpn08tqU = await BlueICE.new({from: accounts[2]});
		const uintwf8e8Mg = BigInt("332")
		const addressPTjsf0t = accounts[4]
		const addresshMfVQe = accounts[0]
		const uint256zXPcC8u = await BlueICEpn08tqU.stake.call(uintwf8e8Mg, {from: accounts[4]});
		const addressDhUSUTj = await BlueICEpn08tqU.updateReward.call(addressPTjsf0t, {from: accounts[1]});
		const addressarray9lQjn9 = await BlueICEpn08tqU.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const addresssoHTV5B = await BlueICEpn08tqU.updateReward.call(addresshMfVQe, {from: accounts[0]});

		await expect(BlueICEpn08tqU.stake.call(uintwf8e8Mg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEEGYNKTb = await BlueICE.new({from: accounts[4]});
		const addressl5lWK1b = accounts[4]
		const uint256ND3XzTw = await BlueICEEGYNKTb.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressNnMm6DW = await BlueICEEGYNKTb.transferOwnership.call(addressl5lWK1b, {from: accounts[4]});

		assert.equal(uint256ND3XzTw, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEnIexgtZ = await BlueICE.new({from: accounts[4]});
		const addressVQPDSI7 = accounts[0]
		await BlueICEnIexgtZ.renounceOwnership.call({from: accounts[4]});
		const addresslzjl2b1 = await BlueICEnIexgtZ.transferOwnership.call(addressVQPDSI7, {from: accounts[3]});

		await expect(BlueICEnIexgtZ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnIexgtZ = await BlueICE.new({from: accounts[4]});
		const addressmlrAbHm = accounts[4]
		const addressarraySKYWR9r = await BlueICEnIexgtZ.getCommunity.call({from: accounts[4]});
		const uint256TAgcIC = await BlueICEnIexgtZ.earned.call(addressmlrAbHm, {from: accounts[1]});
		await BlueICEnIexgtZ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarraySKYWR9r, )
		assert.equal(uint256TAgcIC, BigInt("0"))
		await expect(BlueICEnIexgtZ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnIexgtZ = await BlueICE.new({from: accounts[4]});
		const uintyJIia8e = BigInt("297")
		const uint256tW8xQdT = await BlueICEnIexgtZ.notifyRewardAmount.call(uintyJIia8e, {from: accounts[4]});
		await BlueICEnIexgtZ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEnIexgtZ.notifyRewardAmount.call(uintyJIia8e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
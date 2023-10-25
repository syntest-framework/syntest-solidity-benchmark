const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEVTK4Q1 = await BlueICE.new({from: accounts[3]});
		const uintRQ8qZxw = BigInt("1385")
//		await BlueICEVTK4Q1.exit.call({from: accounts[3]});
//		const uint256FqBgGRm = await BlueICEVTK4Q1.stake.call(uintRQ8qZxw, {from: accounts[2]});

		await expect(BlueICEVTK4Q1.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE1JuGUn = await BlueICE.new({from: accounts[3]});
		const addressbZuARc9 = accounts[1]
		const uint256EdkeaUG = await BlueICE1JuGUn.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256dtvosq4 = await BlueICE1JuGUn.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256Huv5IZ = await BlueICE1JuGUn.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressrGzz3dv = await BlueICE1JuGUn.transferOwnership.call(addressbZuARc9, {from: accounts[1]});

		assert.equal(uint256EdkeaUG, BigInt("500000000000000000000"))
		assert.equal(uint256Huv5IZ, BigInt("0"))
		assert.equal(uint256dtvosq4, BigInt("0"))
		await expect(BlueICE1JuGUn.transferOwnership.call(addressbZuARc9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEeVWcrxI = await BlueICE.new({from: accounts[5]});
		const addressSnKZO6A = accounts[0]
		const addressjFzHQJ7 = accounts[1]
		const uint256gYCoxb4 = await BlueICEeVWcrxI.earned.call(addressSnKZO6A, {from: accounts[0]});
		const boolO1IZk9G = await BlueICEeVWcrxI.isOwner.call({from: accounts[2]});
//		await BlueICEeVWcrxI.onlyOwner.call({from: accounts[1]});
//		const uint256WK0Eb7 = await BlueICEeVWcrxI.earned.call(addressjFzHQJ7, {from: accounts[4]});
//		await BlueICEeVWcrxI.onlyOwner.call({from: accounts[0]});

		assert.equal(boolO1IZk9G, false)
		assert.equal(uint256gYCoxb4, BigInt("0"))
		await expect(BlueICEeVWcrxI.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEC6hZRMh = await BlueICE.new({from: accounts[4]});
		const addressarrayK7WRf6T = await BlueICEC6hZRMh.getCommunity.call({from: accounts[2]});
//		await BlueICEC6hZRMh.exit.call({from: accounts[0]});

		assert.equal(addressarrayK7WRf6T, )
		await expect(BlueICEC6hZRMh.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEbSCEfk9 = await BlueICE.new({from: accounts[2]});
		const addressj1SRcaw = accounts[2]
		const uintHPwz1ld = BigInt("1474")
		const addressPXKmi60 = await BlueICEbSCEfk9.owner.call({from: accounts[1]});
		const uint256kOGLzwB = await BlueICEbSCEfk9.earned.call(addressj1SRcaw, {from: accounts[2]});
//		const uint256OPHaZQ = await BlueICEbSCEfk9.notifyRewardAmount.call(uintHPwz1ld, {from: accounts[0]});
//		const uint256E3PD8JE = await BlueICEbSCEfk9.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(addressPXKmi60, 0x8f8e7D4381911B5e4aDf5c130f32FD3a98A264F6)
		assert.equal(uint256kOGLzwB, BigInt("0"))
		await expect(BlueICEbSCEfk9.notifyRewardAmount.call(uintHPwz1ld, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEHSfe1r8 = await BlueICE.new({from: accounts[0]});
		const addressK4EIIjI = accounts[2]
		const addressEeihYTj = accounts[0]
		const addressJLx1Qhh = await BlueICEHSfe1r8.transferOwnership.call(addressK4EIIjI, {from: accounts[0]});
//		await BlueICEHSfe1r8.claimRewards.call({from: accounts[2]});
//		const uint256zTx24TW = await BlueICEHSfe1r8.earned.call(addressEeihYTj, {from: accounts[3]});
//		const addressarrayig5r30z = await BlueICEHSfe1r8.getCommunity.call({from: accounts[3]});
//		const booldoibQsX = await BlueICEHSfe1r8.isOwner.call({from: accounts[5]});

		await expect(BlueICEHSfe1r8.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEVTK4Q1 = await BlueICE.new({from: accounts[3]});
		const uinttrBTsew = BigInt("1385")
//		const uint256FqBgGRm = await BlueICEVTK4Q1.stake.call(uinttrBTsew, {from: accounts[2]});

		await expect(BlueICEVTK4Q1.stake.call(uinttrBTsew, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEVTK4Q1 = await BlueICE.new({from: accounts[3]});
		const uintTb2tR17 = BigInt("542")
		const uintDmGqHCP = BigInt("1404")
//		const uint256shFBNS2 = await BlueICEVTK4Q1.unstake.call(uintTb2tR17, {from: accounts[3]});
//		const uint256FqBgGRm = await BlueICEVTK4Q1.stake.call(uintDmGqHCP, {from: accounts[2]});

		await expect(BlueICEVTK4Q1.unstake.call(uintTb2tR17, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEVTK4Q1 = await BlueICE.new({from: accounts[3]});
		const uintJyJJNtC = BigInt("1639")
		const uintmMCP4w8 = BigInt("1385")
//		const uint256lyqQeqm = await BlueICEVTK4Q1.notifyRewardAmount.call(uintJyJJNtC, {from: accounts[3]});
//		const uint256FqBgGRm = await BlueICEVTK4Q1.stake.call(uintmMCP4w8, {from: accounts[2]});
//		await BlueICEVTK4Q1.onlyOwner.call({from: accounts[4]});
//		await BlueICEVTK4Q1.renounceOwnership.call({from: accounts[2]});

		await expect(BlueICEVTK4Q1.notifyRewardAmount.call(uintJyJJNtC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEVTK4Q1 = await BlueICE.new({from: accounts[3]});
		const addressWroD6dQ = "0x0000000000000000000000000000000000000001"
		const uintwXRcci7 = BigInt("1395")
//		await BlueICEVTK4Q1.renounceOwnership.call({from: accounts[3]});
//		const uint256Q6iySWV = await BlueICEVTK4Q1.earned.call(addressWroD6dQ, {from: accounts[0]});
//		const uint256FqBgGRm = await BlueICEVTK4Q1.stake.call(uintwXRcci7, {from: accounts[2]});

		await expect(BlueICEVTK4Q1.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOvjl9KU = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256p4jDVW = await BlueICEOvjl9KU.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEOvjl9KU.onlyOwner.call({from: accounts[2]});
		await BlueICEOvjl9KU.claimRewards.call({from: accounts[1]});
		await BlueICEOvjl9KU.exit.call({from: accounts[1]});
		const uint256APP81cP = await BlueICEOvjl9KU.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
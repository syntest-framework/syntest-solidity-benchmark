const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEjX1EY0y = await BlueICE.new({from: accounts[3]});
		const uintJKRPxON = BigInt("470")
//		const uint256zZArZPK = await BlueICEjX1EY0y.unstake.call(uintJKRPxON, {from: accounts[2]});
//		await BlueICEjX1EY0y.onlyOwner.call({from: accounts[4]});
//		const addressPLO3rvQ = await BlueICEjX1EY0y.owner.call({from: accounts[4]});

		await expect(BlueICEjX1EY0y.unstake.call(uintJKRPxON, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEVQceVgV = await BlueICE.new({from: accounts[3]});
		const uint256BOd2zxs = await BlueICEVQceVgV.rewardPerToken.call({from: accounts[0]});
//		await BlueICEVQceVgV.exit.call({from: accounts[1]});

		assert.equal(uint256BOd2zxs, BigInt("0"))
		await expect(BlueICEVQceVgV.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEACrv2tN = await BlueICE.new({from: accounts[3]});
		const addressCqNT3jr = accounts[2]
		const uint256U1bvqU = await BlueICEACrv2tN.getCurrentRewardReserve.call({from: accounts[5]});
//		const addressHYkkHI = await BlueICEACrv2tN.updateReward.call(addressCqNT3jr, {from: accounts[5]});
//		await BlueICEACrv2tN.renounceOwnership.call({from: accounts[5]});
//		await BlueICEACrv2tN.claimRewards.call({from: accounts[2]});
//		const uint256mo8YSTV = await BlueICEACrv2tN.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256U1bvqU, BigInt("500000000000000000000"))
		await expect(BlueICEACrv2tN.updateReward.call(addressCqNT3jr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEi4avmNV = await BlueICE.new({from: accounts[0]});
		const addressGbb4qER = accounts[5]
		const addressFBWLuCv = accounts[5]
		const uint2565rLTu0 = await BlueICEi4avmNV.earned.call(addressGbb4qER, {from: accounts[4]});
		const uint256L0TaPmE = await BlueICEi4avmNV.earned.call(addressFBWLuCv, {from: accounts[5]});
//		await BlueICEi4avmNV.claimRewards.call({from: accounts[1]});

		assert.equal(uint2565rLTu0, BigInt("0"))
		assert.equal(uint256L0TaPmE, BigInt("0"))
		await expect(BlueICEi4avmNV.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEjiOuId = await BlueICE.new({from: accounts[2]});
		const addressXXxaLgS = accounts[1]
		const uintnykqSf0 = BigInt("504")
		const addressjRMOQa6 = await BlueICEjiOuId.transferOwnership.call(addressXXxaLgS, {from: accounts[2]});
//		const uint256iNltXS = await BlueICEjiOuId.unstake.call(uintnykqSf0, {from: accounts[3]});
//		const addressarraylIcmJK4 = await BlueICEjiOuId.getCommunity.call({from: accounts[4]});

		await expect(BlueICEjiOuId.unstake.call(uintnykqSf0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEn6wo9VX = await BlueICE.new({from: accounts[4]});
		const uint8o5IEx = BigInt("569")
//		await BlueICEn6wo9VX.renounceOwnership.call({from: accounts[4]});
//		const boolzcEyDb = await BlueICEn6wo9VX.isOwner.call({from: accounts[4]});
//		const uint256R7E97Z8 = await BlueICEn6wo9VX.stake.call(uint8o5IEx, {from: accounts[1]});
//		const addressarraykOPlpao = await BlueICEn6wo9VX.getCommunity.call({from: accounts[4]});
//		await BlueICEn6wo9VX.onlyOwner.call({from: accounts[5]});

		await expect(BlueICEn6wo9VX.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEdVBNGOl = await BlueICE.new({from: accounts[4]});
		const uintf2kuXxe = BigInt("1206")
		const addressarrayBcqokeM = await BlueICEdVBNGOl.getCommunity.call({from: accounts[1]});
//		await BlueICEdVBNGOl.renounceOwnership.call({from: accounts[0]});
//		await BlueICEdVBNGOl.claimRewards.call({from: accounts[0]});
//		const uint256Ga4gbfG = await BlueICEdVBNGOl.notifyRewardAmount.call(uintf2kuXxe, {from: accounts[4]});
//		const uint256km1iB2 = await BlueICEdVBNGOl.getCurrentRewardReserve.call({from: accounts[4]});

		assert.equal(addressarrayBcqokeM, )
		await expect(BlueICEdVBNGOl.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEwpaXgn = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCTehutw = accounts[1]
		const addressrFcZgZZ = "0x0000000000000000000000000000000000000001"
		const addressspY8vSW = await BlueICEwpaXgn.updateReward.call(addressCTehutw, {from: accounts[1]});
		const uint256hksvui5 = await BlueICEwpaXgn.earned.call(addressrFcZgZZ, {from: accounts[5]});
		await BlueICEwpaXgn.onlyOwner.call({from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICEjX1EY0y = await BlueICE.new({from: accounts[3]});
		const uintQtxSKHF = BigInt("469")
		const addressarrayjDvC24L = await BlueICEjX1EY0y.getCommunity.call({from: accounts[4]});
		const uint256gvWJdRq = await BlueICEjX1EY0y.rewardPerToken.call({from: accounts[0]});
		const addressUrVXZO = await BlueICEjX1EY0y.owner.call({from: accounts[1]});
//		const uint256zZArZPK = await BlueICEjX1EY0y.unstake.call(uintQtxSKHF, {from: accounts[2]});

		assert.equal(addressUrVXZO, 0x1349a67d5240082f56fe2FA1b55aFBc105dCA2c8)
		assert.equal(addressarrayjDvC24L, )
		assert.equal(uint256gvWJdRq, BigInt("0"))
		await expect(BlueICEjX1EY0y.unstake.call(uintQtxSKHF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEi4avmNV = await BlueICE.new({from: accounts[0]});
		const uintUXRwXa = BigInt("1623")
//		const uint256fqZ9w0B = await BlueICEi4avmNV.notifyRewardAmount.call(uintUXRwXa, {from: accounts[0]});
//		await BlueICEi4avmNV.claimRewards.call({from: accounts[1]});

		await expect(BlueICEi4avmNV.notifyRewardAmount.call(uintUXRwXa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
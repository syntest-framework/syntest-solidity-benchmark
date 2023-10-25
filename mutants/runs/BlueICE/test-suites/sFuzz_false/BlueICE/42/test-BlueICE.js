const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICESaSLvI8 = await BlueICE.new({from: accounts[5]});
		await BlueICESaSLvI8.exit.call({from: accounts[1]});
		const addressarrayVmqWkJO = await BlueICESaSLvI8.getCommunity.call({from: accounts[5]});

		await expect(BlueICESaSLvI8.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEzWPn1Ji = await BlueICE.new({from: accounts[2]});
		await BlueICEzWPn1Ji.onlyOwner.call({from: accounts[2]});
		await BlueICEzWPn1Ji.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEzWPn1Ji.exit.call({from: accounts[2]});
		const addresssgag2I9 = await BlueICEzWPn1Ji.owner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEzWPn1Ji.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnhgSMaL = await BlueICE.new({from: accounts[0]});
		const uintpkyvOUo = BigInt("325")
		const uint256Koeq12i = await BlueICEnhgSMaL.stake.call(uintpkyvOUo, {from: accounts[3]});
		await BlueICEnhgSMaL.claimRewards.call({from: accounts[0]});
		const uint256knZfalD = await BlueICEnhgSMaL.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(BlueICEnhgSMaL.stake.call(uintpkyvOUo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEjdru6qq = await BlueICE.new({from: accounts[4]});
		const addressIeviE0 = accounts[2]
		const addressepB3TUj = accounts[0]
		const uintvPVC40z = BigInt("6")
		const uint256rnS3GkZ = await BlueICEjdru6qq.earned.call(addressIeviE0, {from: accounts[3]});
		const addressarray1OImmp = await BlueICEjdru6qq.getCommunity.call({from: accounts[2]});
		const uint256Kx54T94 = await BlueICEjdru6qq.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256pxdan5I = await BlueICEjdru6qq.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressmpp5Ojl = await BlueICEjdru6qq.transferOwnership.call(addressepB3TUj, {from: accounts[1]});
		const uint256IIBo0us = await BlueICEjdru6qq.notifyRewardAmount.call(uintvPVC40z, {from: accounts[0]});

		assert.equal(addressarray1OImmp, )
		assert.equal(uint256Kx54T94, BigInt("500000000000000000000"))
		assert.equal(uint256pxdan5I, BigInt("0"))
		assert.equal(uint256rnS3GkZ, BigInt("0"))
		await expect(BlueICEjdru6qq.transferOwnership.call(addressepB3TUj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICETKzyJZl = await BlueICE.new({from: accounts[5]});
		const uinteL2wZq4 = BigInt("899")
		const addressfK5R7bl = "0x0000000000000000000000000000000000000001"
		const uint256LpFXyOa = await BlueICETKzyJZl.unstake.call(uinteL2wZq4, {from: accounts[4]});
		const uint256nakwhj9 = await BlueICETKzyJZl.rewardPerToken.call({from: accounts[4]});
		const addressiAVtCHB = await BlueICETKzyJZl.updateReward.call(addressfK5R7bl, {from: accounts[5]});
		const boolhkpY4L9 = await BlueICETKzyJZl.isOwner.call({from: accounts[3]});
		await BlueICETKzyJZl.claimRewards.call({from: accounts[5]});

		await expect(BlueICETKzyJZl.unstake.call(uinteL2wZq4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICESaSLvI8 = await BlueICE.new({from: accounts[5]});
		await BlueICESaSLvI8.claimRewards.call({from: accounts[2]});
		const addressarrayVmqWkJO = await BlueICESaSLvI8.getCommunity.call({from: accounts[5]});

		await expect(BlueICESaSLvI8.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEbt52VvG = await BlueICE.new({from: accounts[1]});
		const addressFTj0rcB = accounts[0]
		const addresspFu11fH = await BlueICEbt52VvG.transferOwnership.call(addressFTj0rcB, {from: accounts[1]});
		const addressarrayKqx5JQC = await BlueICEbt52VvG.getCommunity.call({from: accounts[1]});
		await BlueICEbt52VvG.claimRewards.call({from: accounts[2]});

		assert.equal(addressarrayKqx5JQC, )
		await expect(BlueICEbt52VvG.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICESaSLvI8 = await BlueICE.new({from: accounts[5]});
		const addresskZqucIH = await BlueICESaSLvI8.owner.call({from: accounts[4]});
		const addressarrayVmqWkJO = await BlueICESaSLvI8.getCommunity.call({from: accounts[5]});

		assert.equal(addressarrayVmqWkJO, )
		assert.equal(addresskZqucIH, 0xB9a5e94266bd0e8D7f45F1982D0aBFEACF6b227B)
	});

	it('test for BlueICE', async () => {
		const BlueICEI1eBz2L = await BlueICE.new({from: accounts[5]});
		await BlueICEI1eBz2L.renounceOwnership.call({from: accounts[5]});
		const addressM899boC = await BlueICEI1eBz2L.owner.call({from: accounts[4]});

		await expect(BlueICEI1eBz2L.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICERHxfikD = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBUdRZYm = accounts[3]
		const addressZlCnihW = accounts[0]
		const uintURyc0Tf = BigInt("346")
		const addressxTe9xFT = accounts[2]
		const uint256v2W4fSu = await BlueICERHxfikD.earned.call(addressBUdRZYm, {from: accounts[3]});
		await BlueICERHxfikD.renounceOwnership.call({from: accounts[4]});
		const uint256MoNXBz = await BlueICERHxfikD.rewardPerToken.call({from: accounts[1]});
		const addressVGg4uTj = await BlueICERHxfikD.updateReward.call(addressZlCnihW, {from: accounts[4]});
		const uint256IkDCTtg = await BlueICERHxfikD.unstake.call(uintURyc0Tf, {from: accounts[1]});
		const addressEVvVRrj = await BlueICERHxfikD.transferOwnership.call(addressxTe9xFT, {from: accounts[3]});
	});

	it('test for BlueICE', async () => {
		const BlueICEQFfYXqj = await BlueICE.new({from: accounts[3]});
		const uintdtmllMV = BigInt("620")
		const uint256c8AILUg = await BlueICEQFfYXqj.notifyRewardAmount.call(uintdtmllMV, {from: accounts[3]});
		await BlueICEQFfYXqj.checkhalv.call({from: accounts[1]});
		const addressgSdoJdE = await BlueICEQFfYXqj.owner.call({from: accounts[3]});
		const uint256xrITKMU = await BlueICEQFfYXqj.getCurrentRewardReserve.call({from: accounts[5]});
		const uint256bYVzFJX = await BlueICEQFfYXqj.lastTimeRewardApplicable.call({from: accounts[4]});
		await BlueICEQFfYXqj.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEQFfYXqj.notifyRewardAmount.call(uintdtmllMV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
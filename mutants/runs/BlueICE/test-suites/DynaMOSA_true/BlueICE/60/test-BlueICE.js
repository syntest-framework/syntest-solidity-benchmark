const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEYhVLJyf = await BlueICE.new({from: accounts[2]});
		const addressarrayNoumRRu = await BlueICEYhVLJyf.getCommunity.call({from: accounts[0]});
		const uint256Hm7rsff = await BlueICEYhVLJyf.rewardPerToken.call({from: accounts[0]});
		const boolX7PZOJn = await BlueICEYhVLJyf.isOwner.call({from: accounts[3]});

		assert.equal(addressarrayNoumRRu, )
		assert.equal(boolX7PZOJn, false)
		assert.equal(uint256Hm7rsff, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEhDfIMzI = await BlueICE.new({from: accounts[4]});
		const uintOGYL6ip = BigInt("537")
		const addressqfsHmQ4 = accounts[3]
		const uint256JvCPvO7 = await BlueICEhDfIMzI.unstake.call(uintOGYL6ip, {from: accounts[1]});
		const uint256ofhOwZs = await BlueICEhDfIMzI.getCurrentRewardReserve.call({from: accounts[5]});
		const addressbppCsAb = await BlueICEhDfIMzI.updateReward.call(addressqfsHmQ4, {from: accounts[3]});
		const uint256R4pp21x = await BlueICEhDfIMzI.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(BlueICEhDfIMzI.unstake.call(uintOGYL6ip, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOs37wET = await BlueICE.new({from: accounts[0]});
		const uintcPfhjwi = BigInt("660")
		const uint256FZelab9 = await BlueICEOs37wET.stake.call(uintcPfhjwi, {from: accounts[0]});
		const uint256uxpqZRa = await BlueICEOs37wET.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(BlueICEOs37wET.stake.call(uintcPfhjwi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEiWilfbG = await BlueICE.new({from: accounts[0]});
		const addressIEAURd = accounts[0]
		const addressxCAByKp = accounts[0]
		const addressarrayRd1SLq7 = await BlueICEiWilfbG.getCommunity.call({from: accounts[2]});
		const addresscYmm1AU = await BlueICEiWilfbG.transferOwnership.call(addressIEAURd, {from: accounts[2]});
		const uint256jomTCuI = await BlueICEiWilfbG.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256AOOH59 = await BlueICEiWilfbG.earned.call(addressxCAByKp, {from: accounts[0]});
		await BlueICEiWilfbG.claimRewards.call({from: accounts[1]});

		assert.equal(addressarrayRd1SLq7, )
		await expect(BlueICEiWilfbG.transferOwnership.call(addressIEAURd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICETJigu7 = await BlueICE.new({from: accounts[5]});
		const addressCbdSLrp = accounts[1]
		await BlueICETJigu7.exit.call({from: accounts[3]});
		const addressVaWr8A = await BlueICETJigu7.owner.call({from: accounts[3]});
		await BlueICETJigu7.onlyOwner.call({from: accounts[1]});
		const uint256iKfxOsr = await BlueICETJigu7.earned.call(addressCbdSLrp, {from: accounts[0]});

		await expect(BlueICETJigu7.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEAkXjCjP = await BlueICE.new({from: accounts[2]});
		await BlueICEAkXjCjP.onlyOwner.call({from: accounts[0]});
		await BlueICEAkXjCjP.claimRewards.call({from: accounts[4]});
		await BlueICEAkXjCjP.onlyOwner.call({from: accounts[4]});

		await expect(BlueICEAkXjCjP.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKOiUkuO = await BlueICE.new({from: accounts[2]});
		const uintdBaN3dg = BigInt("1531")
		await BlueICEKOiUkuO.claimRewards.call({from: accounts[0]});
		const uint256tArEye = await BlueICEKOiUkuO.notifyRewardAmount.call(uintdBaN3dg, {from: accounts[3]});

		await expect(BlueICEKOiUkuO.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEhDfIMzI = await BlueICE.new({from: accounts[4]});
		const addressugKaZ6l = accounts[1]
		const uintbmmbtDD = BigInt("463")
		const uint256ofhOwZs = await BlueICEhDfIMzI.getCurrentRewardReserve.call({from: accounts[5]});
		const addressWQxkhdw = await BlueICEhDfIMzI.updateReward.call(addressugKaZ6l, {from: accounts[1]});
		const uint256idojTX = await BlueICEhDfIMzI.stake.call(uintbmmbtDD, {from: accounts[5]});
		const uint256R4pp21x = await BlueICEhDfIMzI.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256ofhOwZs, BigInt("500000000000000000000"))
		await expect(BlueICEhDfIMzI.updateReward.call(addressugKaZ6l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEbGPNeX2 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOFqvSeq = accounts[2]
		const booloG0whtR = await BlueICEbGPNeX2.isOwner.call({from: accounts[3]});
		const boolU4HSZg9 = await BlueICEbGPNeX2.isOwner.call({from: accounts[0]});
		const uint256aZ3Ki3S = await BlueICEbGPNeX2.earned.call(addressOFqvSeq, {from: accounts[3]});
		const uint2567Jz5YP = await BlueICEbGPNeX2.rewardPerToken.call({from: accounts[5]});
		const boolNZXMkvk = await BlueICEbGPNeX2.isOwner.call({from: accounts[0]});
	});

	it('test for BlueICE', async () => {
		const BlueICET4kvi9I = await BlueICE.new({from: accounts[3]});
		const addressszMoEys = accounts[4]
		const uintqcrDv4G = BigInt("152")
		const addressmf1WqWH = "0x0000000000000000000000000000000000000001"
		const uint256JRFGsgg = await BlueICET4kvi9I.earned.call(addressszMoEys, {from: accounts[1]});
		const addressr9wBXgF = await BlueICET4kvi9I.owner.call({from: accounts[3]});
		await BlueICET4kvi9I.onlyOwner.call({from: accounts[4]});
		const uint256AQ0Phfs = await BlueICET4kvi9I.unstake.call(uintqcrDv4G, {from: accounts[3]});
		const addressQ2fkGej = await BlueICET4kvi9I.updateReward.call(addressmf1WqWH, {from: accounts[0]});

		assert.equal(addressr9wBXgF, 0x2eD630df0A3cD149FaFADb5e787ABF219B4d94Eb)
		assert.equal(uint256JRFGsgg, BigInt("0"))
		await expect(BlueICET4kvi9I.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEYzfYxJn = await BlueICE.new({from: accounts[0]});
		const addressDBB1QFb = accounts[3]
		const addressHgbb7HO = await BlueICEYzfYxJn.transferOwnership.call(addressDBB1QFb, {from: accounts[0]});
		await BlueICEYzfYxJn.exit.call({from: accounts[4]});
		await BlueICEYzfYxJn.exit.call({from: accounts[5]});
		const addressarrayCRxzAtj = await BlueICEYzfYxJn.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEYzfYxJn.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKOiUkuO = await BlueICE.new({from: accounts[2]});
		const uintnldyRq6 = BigInt("705")
		const addresss49mrbJ = accounts[3]
		const uint256rwVsnz5 = await BlueICEKOiUkuO.notifyRewardAmount.call(uintnldyRq6, {from: accounts[2]});
		await BlueICEKOiUkuO.claimRewards.call({from: accounts[0]});
		const addressN3H0zN9 = await BlueICEKOiUkuO.transferOwnership.call(addresss49mrbJ, {from: accounts[3]});
		const boolWrU18hE = await BlueICEKOiUkuO.isOwner.call({from: accounts[1]});

		await expect(BlueICEKOiUkuO.notifyRewardAmount.call(uintnldyRq6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKOiUkuO = await BlueICE.new({from: accounts[2]});
		await BlueICEKOiUkuO.renounceOwnership.call({from: accounts[2]});
		await BlueICEKOiUkuO.claimRewards.call({from: accounts[0]});

		await expect(BlueICEKOiUkuO.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
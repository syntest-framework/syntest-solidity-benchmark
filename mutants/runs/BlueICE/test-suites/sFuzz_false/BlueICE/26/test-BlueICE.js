const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEyLVwn86 = await BlueICE.new({from: accounts[1]});
		const addressarrayeRA9Vx = await BlueICEyLVwn86.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhJD2W0D = await BlueICEyLVwn86.isOwner.call({from: accounts[5]});
		const boolXo2Lt5q = await BlueICEyLVwn86.isOwner.call({from: accounts[1]});
		await BlueICEyLVwn86.claimRewards.call({from: accounts[0]});

		assert.equal(addressarrayeRA9Vx, )
		assert.equal(boolXo2Lt5q, true)
		assert.equal(boolhJD2W0D, false)
		await expect(BlueICEyLVwn86.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEXQUkB8w = await BlueICE.new({from: accounts[3]});
		const uint256JI4YRjE = await BlueICEXQUkB8w.rewardPerToken.call({from: accounts[5]});
		const uint256iaoQCeZ = await BlueICEXQUkB8w.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256J1rS1si = await BlueICEXQUkB8w.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressS92M80P = await BlueICEXQUkB8w.owner.call({from: accounts[5]});
		await BlueICEXQUkB8w.claimRewards.call({from: accounts[5]});

		assert.equal(addressS92M80P, 0xB793CDca35ccC351B5e8955E0Ad9954A3Ee3D213)
		assert.equal(uint256J1rS1si, BigInt("0"))
		assert.equal(uint256JI4YRjE, BigInt("0"))
		assert.equal(uint256iaoQCeZ, BigInt("0"))
		await expect(BlueICEXQUkB8w.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICERIppD0X = await BlueICE.new({from: accounts[3]});
		const addressLaCANSo = accounts[2]
		const addressPwNn54K = accounts[3]
		const addressP5i2vEu = accounts[2]
		const addressnjpPsfG = await BlueICERIppD0X.transferOwnership.call(addressLaCANSo, {from: accounts[4]});
		await BlueICERIppD0X.onlyOwner.call({from: accounts[4]});
		const uint256b63AQve = await BlueICERIppD0X.earned.call(addressPwNn54K, {from: accounts[3]});
		const addressMuj2h6C = await BlueICERIppD0X.transferOwnership.call(addressP5i2vEu, {from: accounts[1]});

		await expect(BlueICERIppD0X.transferOwnership.call(addressLaCANSo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE6tF1cV = await BlueICE.new({from: accounts[4]});
		const uintIANKKDI = BigInt("1043")
		await BlueICE6tF1cV.onlyOwner.call({from: accounts[2]});
		const uint256mC8D7rD = await BlueICE6tF1cV.getCurrentRewardReserve.call({from: accounts[3]});
		await BlueICE6tF1cV.renounceOwnership.call({from: accounts[3]});
		const uint256JVi2k4p = await BlueICE6tF1cV.notifyRewardAmount.call(uintIANKKDI, {from: accounts[4]});

		await expect(BlueICE6tF1cV.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEp1e5BBB = await BlueICE.new({from: accounts[2]});
		const uintKrpDpsz = BigInt("1024")
		const uintJezWw38 = BigInt("1542")
		const uint256jN9zD9w = await BlueICEp1e5BBB.stake.call(uintKrpDpsz, {from: accounts[0]});
		const uint256sdKxES = await BlueICEp1e5BBB.unstake.call(uintJezWw38, {from: accounts[0]});
		await BlueICEp1e5BBB.exit.call({from: accounts[3]});

		await expect(BlueICEp1e5BBB.stake.call(uintKrpDpsz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKNKwGe = await BlueICE.new({from: accounts[1]});
		const uintJb494iS = BigInt("1916")
		const uint256LaaDOpO = await BlueICEKNKwGe.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256rAO6DH4 = await BlueICEKNKwGe.unstake.call(uintJb494iS, {from: accounts[1]});
		await BlueICEKNKwGe.claimRewards.call({from: accounts[0]});

		assert.equal(uint256LaaDOpO, BigInt("0"))
		await expect(BlueICEKNKwGe.unstake.call(uintJb494iS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEz4dWBk = await BlueICE.new({from: accounts[0]});
		const addresstK05LA9 = accounts[1]
		const boolMPUJd9 = await BlueICEz4dWBk.isOwner.call({from: accounts[4]});
		await BlueICEz4dWBk.exit.call({from: accounts[0]});
		const uint256Tk923eE = await BlueICEz4dWBk.earned.call(addresstK05LA9, {from: accounts[1]});
		const uint256iZr8UKN = await BlueICEz4dWBk.getCurrentRewardReserve.call({from: accounts[4]});

		assert.equal(boolMPUJd9, false)
		await expect(BlueICEz4dWBk.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEiV9bgc9 = await BlueICE.new({from: accounts[5]});
		const addressdw4NrpB = accounts[2]
		const uint256eJ5zePq = await BlueICEiV9bgc9.getCurrentRewardReserve.call({from: accounts[5]});
		await BlueICEiV9bgc9.claimRewards.call({from: accounts[2]});
		const uint256nTQf8wk = await BlueICEiV9bgc9.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressarraym2FcH5 = await BlueICEiV9bgc9.getCommunity.call({from: accounts[2]});
		const addressarrayh5nUKHR = await BlueICEiV9bgc9.getCommunity.call({from: accounts[2]});
		const uint256TTsZakf = await BlueICEiV9bgc9.earned.call(addressdw4NrpB, {from: accounts[5]});

		assert.equal(uint256eJ5zePq, BigInt("500000000000000000000"))
		await expect(BlueICEiV9bgc9.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEqHUXCBG = await BlueICE.new({from: accounts[3]});
		const uintUYCPaJ1 = BigInt("161")
		const uint256mpTU2oE = await BlueICEqHUXCBG.notifyRewardAmount.call(uintUYCPaJ1, {from: accounts[3]});
		await BlueICEqHUXCBG.exit.call({from: accounts[2]});

		await expect(BlueICEqHUXCBG.notifyRewardAmount.call(uintUYCPaJ1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEqHUXCBG = await BlueICE.new({from: accounts[3]});
		const uint256ndwAi0l = await BlueICEqHUXCBG.getCurrentRewardReserve.call({from: accounts[2]});
		await BlueICEqHUXCBG.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256ndwAi0l, BigInt("500000000000000000000"))
		await expect(BlueICEqHUXCBG.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEqHUXCBG = await BlueICE.new({from: accounts[3]});
		const addresssMhK8jn = accounts[3]
		const addressMEkaNNf = await BlueICEqHUXCBG.transferOwnership.call(addresssMhK8jn, {from: accounts[3]});
		const uint256ndwAi0l = await BlueICEqHUXCBG.getCurrentRewardReserve.call({from: accounts[2]});

		assert.equal(uint256ndwAi0l, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEO4SDjif = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaGWeNgR = accounts[1]
		await BlueICEO4SDjif.exit.call({from: accounts[3]});
		await BlueICEO4SDjif.onlyOwner.call({from: accounts[4]});
		await BlueICEO4SDjif.renounceOwnership.call({from: accounts[4]});
		const uint256akxztZe = await BlueICEO4SDjif.earned.call(addressaGWeNgR, {from: accounts[1]});
	});
})
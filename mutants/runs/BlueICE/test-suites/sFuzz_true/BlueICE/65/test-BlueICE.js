const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICElBiZkM2 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		await BlueICElBiZkM2.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICElBiZkM2.renounceOwnership.call({from: accounts[4]});
		await BlueICElBiZkM2.renounceOwnership.call({from: accounts[0]});
		await BlueICElBiZkM2.onlyOwner.call({from: accounts[3]});
	});

	it('test for BlueICE', async () => {
		const BlueICEXyoWKHa = await BlueICE.new({from: accounts[0]});
		const uintMB9uLz = BigInt("1254")
		const uint256qzsc8j5 = await BlueICEXyoWKHa.rewardPerToken.call({from: accounts[2]});
		await BlueICEXyoWKHa.onlyOwner.call({from: accounts[1]});
		const uint256PYtxbX = await BlueICEXyoWKHa.unstake.call(uintMB9uLz, {from: accounts[3]});

		assert.equal(uint256qzsc8j5, BigInt("0"))
		await expect(BlueICEXyoWKHa.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBI6jewd = await BlueICE.new({from: accounts[4]});
		const addresshV0r6UT = accounts[0]
		await BlueICEBI6jewd.exit.call({from: accounts[3]});
		await BlueICEBI6jewd.checkhalv.call({from: accounts[2]});
		await BlueICEBI6jewd.renounceOwnership.call({from: accounts[3]});
		const uint256oMZgNV = await BlueICEBI6jewd.lastTimeRewardApplicable.call({from: accounts[2]});
		await BlueICEBI6jewd.exit.call({from: accounts[1]});
		const uint256BeM1fiA = await BlueICEBI6jewd.earned.call(addresshV0r6UT, {from: accounts[1]});

		await expect(BlueICEBI6jewd.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICExqiuOKw = await BlueICE.new({from: accounts[2]});
		const uintWiE7CH1 = BigInt("1918")
		const uintz9cPyfe = BigInt("1639")
		const addressarrayBYKVHL4 = await BlueICExqiuOKw.getCommunity.call({from: accounts[4]});
		const uint256N5aTeev = await BlueICExqiuOKw.unstake.call(uintWiE7CH1, {from: accounts[3]});
		await BlueICExqiuOKw.renounceOwnership.call({from: accounts[3]});
		const boolYkCiI4K = await BlueICExqiuOKw.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LaikKSp = await BlueICExqiuOKw.stake.call(uintz9cPyfe, {from: accounts[0]});
		await BlueICExqiuOKw.claimRewards.call({from: accounts[1]});

		assert.equal(addressarrayBYKVHL4, )
		await expect(BlueICExqiuOKw.unstake.call(uintWiE7CH1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOV8uuEC = await BlueICE.new({from: accounts[4]});
		const boolAY8Jao0 = await BlueICEOV8uuEC.isOwner.call({from: accounts[3]});
		const uint256BeS6FPf = await BlueICEOV8uuEC.lastTimeRewardApplicable.call({from: accounts[2]});
		await BlueICEOV8uuEC.exit.call({from: accounts[0]});

		assert.equal(boolAY8Jao0, false)
		assert.equal(uint256BeS6FPf, BigInt("0"))
		await expect(BlueICEOV8uuEC.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEyRUiPL4 = await BlueICE.new({from: accounts[2]});
		const addressTccm0PJ = accounts[2]
		const addresskgqsq8A = accounts[4]
		const addressWekRMx = accounts[3]
		const addressD6l8LGP = await BlueICEyRUiPL4.transferOwnership.call(addressTccm0PJ, {from: accounts[0]});
		const uint256UBAlH97 = await BlueICEyRUiPL4.rewardPerToken.call({from: accounts[1]});
		const uint256oiEv3Aq = await BlueICEyRUiPL4.earned.call(addresskgqsq8A, {from: accounts[4]});
		const uint256x96Pvpp = await BlueICEyRUiPL4.earned.call(addressWekRMx, {from: accounts[2]});

		await expect(BlueICEyRUiPL4.transferOwnership.call(addressTccm0PJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEmb7Tk5C = await BlueICE.new({from: accounts[1]});
		const uintvTdIHZS = BigInt("191")
		const addressUfQOlmg = accounts[3]
		const addressoob1Nd5 = accounts[3]
		const uint256MbKQp3s = await BlueICEmb7Tk5C.stake.call(uintvTdIHZS, {from: accounts[0]});
		const addressrIIxrU6 = await BlueICEmb7Tk5C.transferOwnership.call(addressUfQOlmg, {from: accounts[4]});
		const uint256IDk91Qz = await BlueICEmb7Tk5C.rewardPerToken.call({from: accounts[2]});
		const addressTVlJxYB = await BlueICEmb7Tk5C.transferOwnership.call(addressoob1Nd5, {from: accounts[3]});

		await expect(BlueICEmb7Tk5C.stake.call(uintvTdIHZS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEmb7Tk5C = await BlueICE.new({from: accounts[1]});
		const addresscSsDP8 = accounts[4]
		const addressDzQrewf = accounts[4]
		await BlueICEmb7Tk5C.claimRewards.call({from: accounts[0]});
		const addressrdS4U21 = await BlueICEmb7Tk5C.transferOwnership.call(addresscSsDP8, {from: accounts[4]});
		const addressTVlJxYB = await BlueICEmb7Tk5C.transferOwnership.call(addressDzQrewf, {from: accounts[3]});

		await expect(BlueICEmb7Tk5C.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEUlg5zrf = await BlueICE.new({from: accounts[1]});
		const uintOG72M7H = BigInt("16")
		const addressLHOnYhC = accounts[1]
		const uintsRRF52a = BigInt("1523")
		const addressqzoicmM = accounts[3]
		const addressSIcJXgS = accounts[4]
		const uint256eGYgY2 = await BlueICEUlg5zrf.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256yj9r8jh = await BlueICEUlg5zrf.unstake.call(uintOG72M7H, {from: accounts[0]});
		const addressXlE9vyA = await BlueICEUlg5zrf.transferOwnership.call(addressLHOnYhC, {from: accounts[3]});
		const boolqQF8SRv = await BlueICEUlg5zrf.isOwner.call({from: accounts[2]});
		const uint256PmS1pcE = await BlueICEUlg5zrf.unstake.call(uintsRRF52a, {from: accounts[0]});
		const uint256kPQG7z = await BlueICEUlg5zrf.getCurrentRewardReserve.call({from: accounts[2]});
		const addressPxQtGY = await BlueICEUlg5zrf.transferOwnership.call(addressqzoicmM, {from: accounts[2]});
		const uint256NvqmEKy = await BlueICEUlg5zrf.earned.call(addressSIcJXgS, {from: accounts[3]});

		assert.equal(uint256eGYgY2, BigInt("500000000000000000000"))
		await expect(BlueICEUlg5zrf.unstake.call(uintOG72M7H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEtfOhyaE = await BlueICE.new({from: accounts[1]});
		const addressTU1eCu8 = accounts[4]
		const addressc2CDaDX = await BlueICEtfOhyaE.owner.call({from: accounts[4]});
		const addressmyO2XF = await BlueICEtfOhyaE.updateReward.call(addressTU1eCu8, {from: accounts[1]});

		assert.equal(addressc2CDaDX, 0xAb107980BD1Ba58bA6FB505E00C9E246E45f4D1F)
		await expect(BlueICEtfOhyaE.updateReward.call(addressTU1eCu8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEmb7Tk5C = await BlueICE.new({from: accounts[1]});
		const addressnUiUPyu = accounts[3]
		const addressh4bbf8 = await BlueICEmb7Tk5C.transferOwnership.call(addressnUiUPyu, {from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICEmb7Tk5C = await BlueICE.new({from: accounts[1]});
		const uintGMQ4CYZ = BigInt("725")
		const uint0vCL7c = BigInt("64")
		const addressZFHKw6Y = accounts[2]
		const uint256WCxxFo = await BlueICEmb7Tk5C.notifyRewardAmount.call(uintGMQ4CYZ, {from: accounts[1]});
		const uint256MbKQp3s = await BlueICEmb7Tk5C.stake.call(uint0vCL7c, {from: accounts[0]});
		await BlueICEmb7Tk5C.claimRewards.call({from: accounts[1]});
		const addressgys5S48 = await BlueICEmb7Tk5C.owner.call({from: accounts[4]});
		const addressh4bbf8 = await BlueICEmb7Tk5C.transferOwnership.call(addressZFHKw6Y, {from: accounts[1]});

		await expect(BlueICEmb7Tk5C.notifyRewardAmount.call(uintGMQ4CYZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEvYOtEMN = await BlueICE.new({from: accounts[3]});
		const uintRKXwAMp = BigInt("50")
		await BlueICEvYOtEMN.renounceOwnership.call({from: accounts[3]});
		const uint256v31vzJR = await BlueICEvYOtEMN.stake.call(uintRKXwAMp, {from: accounts[1]});
		const uint256Y4jNTEt = await BlueICEvYOtEMN.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(BlueICEvYOtEMN.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
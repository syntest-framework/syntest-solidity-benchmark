const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardsPUExmn = await SLTDETHlpReward.new({from: accounts[5]});
		const uintrfWSHDK = BigInt("1497")
		const uintWjRREg4 = BigInt("1564")
//		const uint256SzpuOEF = await SLTDETHlpRewardsPUExmn.stake.call(uintrfWSHDK, {from: accounts[1]});
//		const uint256I0oBhBj = await SLTDETHlpRewardsPUExmn.withdraw.call(uintWjRREg4, {from: accounts[2]});

		await expect(SLTDETHlpRewardsPUExmn.stake.call(uintrfWSHDK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardazI9zEJ = await SLTDETHlpReward.new({from: accounts[4]});
		const addressP2gZEfg = accounts[5]
		const addressvbkPQX = accounts[4]
//		const addressDDXHoWl = await SLTDETHlpRewardazI9zEJ.setStakeAddress.call(addressP2gZEfg, {from: accounts[5]});
//		await SLTDETHlpRewardazI9zEJ.getReward.call({from: accounts[2]});
//		const uint256sLAqIgG = await SLTDETHlpRewardazI9zEJ.remainingReward.call({from: accounts[4]});
//		const uint256DaFgypx = await SLTDETHlpRewardazI9zEJ.remainingReward.call({from: accounts[4]});
//		const uint256lLZfI4j = await SLTDETHlpRewardazI9zEJ.balanceOf.call(addressvbkPQX, {from: accounts[1]});

		await expect(SLTDETHlpRewardazI9zEJ.setStakeAddress.call(addressP2gZEfg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarddo7E5th = await SLTDETHlpReward.new({from: accounts[0]});
//		await SLTDETHlpRewarddo7E5th.onlyRewardDistribution.call({from: accounts[1]});
//		const boolUJUoNjM = await SLTDETHlpRewarddo7E5th.isOwner.call({from: accounts[4]});
//		await SLTDETHlpRewarddo7E5th.renounceOwnership.call({from: accounts[5]});
//		await SLTDETHlpRewarddo7E5th.onlyOwner.call({from: accounts[1]});
//		await SLTDETHlpRewarddo7E5th.exit.call({from: accounts[0]});

		await expect(SLTDETHlpRewarddo7E5th.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardkI69U2V = await SLTDETHlpReward.new({from: accounts[2]});
		const addressee0rTtl = accounts[4]
		const uintcFyvlte = BigInt("248")
		const addresszGVdqeS = accounts[4]
//		await SLTDETHlpRewardkI69U2V.exit.call({from: accounts[0]});
//		const addressczPx9E6 = await SLTDETHlpRewardkI69U2V.setRewardDistribution.call(addressee0rTtl, {from: accounts[0]});
//		await SLTDETHlpRewardkI69U2V.getReward.call({from: accounts[0]});
//		const uint256MPRXT9U = await SLTDETHlpRewardkI69U2V.setStartTime.call(uintcFyvlte, {from: accounts[2]});
//		const addressUpXMls = await SLTDETHlpRewardkI69U2V.setRewardDistribution.call(addresszGVdqeS, {from: accounts[0]});

		await expect(SLTDETHlpRewardkI69U2V.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardbftAyOt = await SLTDETHlpReward.new({from: accounts[5]});
		const uintJcBlnOn = BigInt("109")
		const addressqjYIR4H = accounts[4]
//		const uint256FY3v2mY = await SLTDETHlpRewardbftAyOt.notifyRewardAmount.call(uintJcBlnOn, {from: accounts[3]});
//		const addressmdnGc8H = await SLTDETHlpRewardbftAyOt.transferOwnership.call(addressqjYIR4H, {from: accounts[5]});
//		await SLTDETHlpRewardbftAyOt.checkStart.call({from: accounts[1]});
//		await SLTDETHlpRewardbftAyOt.checkStart.call({from: accounts[3]});
//		await SLTDETHlpRewardbftAyOt.onlyRewardDistribution.call({from: accounts[3]});

		await expect(SLTDETHlpRewardbftAyOt.notifyRewardAmount.call(uintJcBlnOn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQqn0y9O = await SLTDETHlpReward.new({from: accounts[4]});
		const uintU3BVAU = BigInt("1860")
		const uintFkkvKDt = BigInt("791")
		const addressM92caSH = accounts[0]
		const uintcvIT12h = BigInt("307")
//		const uint256AhioVAU = await SLTDETHlpRewardQqn0y9O.remainingReward.call({from: accounts[5]});
//		const uint256AS96dtb = await SLTDETHlpRewardQqn0y9O.notifyRewardAmount.call(uintU3BVAU, {from: accounts[5]});
//		const uint256fdcNOGw = await SLTDETHlpRewardQqn0y9O.withdraw.call(uintFkkvKDt, {from: accounts[1]});
//		const addressA2CxgJh = await SLTDETHlpRewardQqn0y9O.setStakeAddress.call(addressM92caSH, {from: accounts[1]});
//		const uint256RI9Llkf = await SLTDETHlpRewardQqn0y9O.withdraw.call(uintcvIT12h, {from: accounts[0]});

		await expect(SLTDETHlpRewardQqn0y9O.remainingReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardsPUExmn = await SLTDETHlpReward.new({from: accounts[5]});
		const uintWPe9MZ = BigInt("1564")
//		const uint256I0oBhBj = await SLTDETHlpRewardsPUExmn.withdraw.call(uintWPe9MZ, {from: accounts[2]});

		await expect(SLTDETHlpRewardsPUExmn.withdraw.call(uintWPe9MZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardq0tvuSu = await SLTDETHlpReward.new({from: accounts[1]});
		const addressx4nW8i = accounts[2]
		const addressr41hNPr = accounts[0]
		const addressg7TmFcn = await SLTDETHlpRewardq0tvuSu.setStakeAddress.call(addressx4nW8i, {from: accounts[1]});
//		const addressD9t0Rkd = await SLTDETHlpRewardq0tvuSu.setRewardDistribution.call(addressr41hNPr, {from: accounts[0]});
//		const uint256qVlLQ0M = await SLTDETHlpRewardq0tvuSu.totalSupply.call({from: accounts[3]});
//		await SLTDETHlpRewardq0tvuSu.onlyOwner.call({from: accounts[1]});

		await expect(SLTDETHlpRewardq0tvuSu.setRewardDistribution.call(addressr41hNPr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardxxwfixL = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardxxwfixL.onlyRewardDistribution.call({from: accounts[1]});
		const addressvUAsOcV = await SLTDETHlpRewardxxwfixL.owner.call({from: accounts[2]});
		const uint256yPw1bEN = await SLTDETHlpRewardxxwfixL.lastTimeRewardApplicable.call({from: accounts[0]});
		await SLTDETHlpRewardxxwfixL.exit.call({from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIspxLqW = await SLTDETHlpReward.new({from: accounts[1]});
		const addressBHC9VpC = accounts[3]
		const addresssjNUGKH = await SLTDETHlpRewardIspxLqW.transferOwnership.call(addressBHC9VpC, {from: accounts[1]});
		const uint256EcUgayT = await SLTDETHlpRewardIspxLqW.totalSupply.call({from: accounts[1]});
		const uint256pHka14 = await SLTDETHlpRewardIspxLqW.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256EcUgayT, BigInt("0"))
		assert.equal(uint256pHka14, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIspxLqW = await SLTDETHlpReward.new({from: accounts[1]});
		const addressUXofGdN = accounts[3]
		const uintgiIohQc = BigInt("1596")
		const addressSDrDMC = accounts[3]
//		await SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]});
//		const uint256noNJDcs = await SLTDETHlpRewardIspxLqW.balanceOf.call(addressUXofGdN, {from: accounts[2]});
//		const uint256wkONaFX = await SLTDETHlpRewardIspxLqW.stake.call(uintgiIohQc, {from: accounts[4]});
//		const addresssjNUGKH = await SLTDETHlpRewardIspxLqW.transferOwnership.call(addressSDrDMC, {from: accounts[1]});
//		const uint256EcUgayT = await SLTDETHlpRewardIspxLqW.totalSupply.call({from: accounts[1]});

		await expect(SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward5oX4wG = await SLTDETHlpReward.new({from: accounts[3]});
		const addresssTRTIy0 = accounts[1]
		const uintVXwjocB = BigInt("1381")
		const addresscrLG3hz = await SLTDETHlpReward5oX4wG.setRewardDistribution.call(addresssTRTIy0, {from: accounts[3]});
		const boolyr1iBZn = await SLTDETHlpReward5oX4wG.isOwner.call({from: accounts[4]});
//		const uint256JZr5ZW = await SLTDETHlpReward5oX4wG.stake.call(uintVXwjocB, {from: accounts[3]});
//		await SLTDETHlpReward5oX4wG.onlyOwner.call({from: accounts[0]});
//		await SLTDETHlpReward5oX4wG.exit.call({from: accounts[4]});
//		await SLTDETHlpReward5oX4wG.getReward.call({from: accounts[1]});

		assert.equal(boolyr1iBZn, false)
		await expect(SLTDETHlpReward5oX4wG.stake.call(uintVXwjocB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIspxLqW = await SLTDETHlpReward.new({from: accounts[1]});
		const addresshuCc384 = accounts[3]
		const uintPaDwwQt = BigInt("1622")
		const uintArolxJ = BigInt("1003")
		const addressblGcLWW = accounts[3]
//		await SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]});
//		await SLTDETHlpRewardIspxLqW.renounceOwnership.call({from: accounts[1]});
//		const uint256noNJDcs = await SLTDETHlpRewardIspxLqW.balanceOf.call(addresshuCc384, {from: accounts[2]});
//		const uint256tS5SAFa = await SLTDETHlpRewardIspxLqW.withdraw.call(uintPaDwwQt, {from: accounts[2]});
//		const uint256015F7U = await SLTDETHlpRewardIspxLqW.withdraw.call(uintArolxJ, {from: accounts[4]});
//		const addresssjNUGKH = await SLTDETHlpRewardIspxLqW.transferOwnership.call(addressblGcLWW, {from: accounts[1]});
//		const uint256EcUgayT = await SLTDETHlpRewardIspxLqW.totalSupply.call({from: accounts[1]});

		await expect(SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIspxLqW = await SLTDETHlpReward.new({from: accounts[1]});
		const addressrabnJnD = accounts[3]
		const uintpxNzYDq = BigInt("29")
		const address52EsZq = accounts[3]
//		await SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]});
//		const addressyfsS1iQ = await SLTDETHlpRewardIspxLqW.owner.call({from: accounts[4]});
//		const uint256CtJ586g = await SLTDETHlpRewardIspxLqW.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256noNJDcs = await SLTDETHlpRewardIspxLqW.balanceOf.call(addressrabnJnD, {from: accounts[2]});
//		const uint256015F7U = await SLTDETHlpRewardIspxLqW.withdraw.call(uintpxNzYDq, {from: accounts[4]});
//		const addresssjNUGKH = await SLTDETHlpRewardIspxLqW.transferOwnership.call(address52EsZq, {from: accounts[1]});
//		const uint256EcUgayT = await SLTDETHlpRewardIspxLqW.totalSupply.call({from: accounts[1]});

		await expect(SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIspxLqW = await SLTDETHlpReward.new({from: accounts[1]});
		const addressALejSU1 = accounts[3]
		const uintEgnsA6Z = BigInt("1398")
		const uintKFzONzg = BigInt("1543")
		const addressQUvysmj = accounts[4]
		const uintqaJmaG = BigInt("1013")
//		await SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]});
//		const uint256noNJDcs = await SLTDETHlpRewardIspxLqW.balanceOf.call(addressALejSU1, {from: accounts[2]});
//		const uint256c10DYug = await SLTDETHlpRewardIspxLqW.setStartTime.call(uintEgnsA6Z, {from: accounts[1]});
//		const uint256wkONaFX = await SLTDETHlpRewardIspxLqW.stake.call(uintKFzONzg, {from: accounts[4]});
//		const addresssjNUGKH = await SLTDETHlpRewardIspxLqW.transferOwnership.call(addressQUvysmj, {from: accounts[1]});
//		const uint256FglCPmy = await SLTDETHlpRewardIspxLqW.stake.call(uintqaJmaG, {from: accounts[5]});
//		const uint256EcUgayT = await SLTDETHlpRewardIspxLqW.totalSupply.call({from: accounts[1]});

		await expect(SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIspxLqW = await SLTDETHlpReward.new({from: accounts[1]});
		const uintqw1sspQ = BigInt("474")
		const addressfXN7gsG = accounts[3]
		const uintwlFXwAw = BigInt("1596")
		const addressKB44ayd = accounts[3]
		const uintMCnxSYZ = BigInt("1412")
		const uint256XgiUtmr = await SLTDETHlpRewardIspxLqW.notifyRewardAmount.call(uintqw1sspQ, {from: accounts[1]});
//		await SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]});
//		const uint256noNJDcs = await SLTDETHlpRewardIspxLqW.balanceOf.call(addressfXN7gsG, {from: accounts[2]});
//		const boolwVkHebw = await SLTDETHlpRewardIspxLqW.isOwner.call({from: accounts[1]});
//		const uint256wkONaFX = await SLTDETHlpRewardIspxLqW.stake.call(uintwlFXwAw, {from: accounts[4]});
//		const addresssjNUGKH = await SLTDETHlpRewardIspxLqW.transferOwnership.call(addressKB44ayd, {from: accounts[1]});
//		const uint256EcUgayT = await SLTDETHlpRewardIspxLqW.totalSupply.call({from: accounts[1]});
//		const uint256ojFqLiG = await SLTDETHlpRewardIspxLqW.withdraw.call(uintMCnxSYZ, {from: accounts[5]});

		await expect(SLTDETHlpRewardIspxLqW.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
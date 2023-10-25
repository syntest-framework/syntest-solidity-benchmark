const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsg8K0wCC = await DMONDETHRewards.new({from: accounts[2]});
		const uintqCLiVl7 = BigInt("1733")
		const addressKmJ4h0 = accounts[0]
		const uint256kjrdEJk = await DMONDETHRewardsg8K0wCC.withdraw.call(uintqCLiVl7, {from: accounts[0]});
		const boolfgRDSQ = await DMONDETHRewardsg8K0wCC.isOwner.call({from: accounts[1]});
		const uint256qxHMyv = await DMONDETHRewardsg8K0wCC.balanceOf.call(addressKmJ4h0, {from: accounts[4]});

		await expect(DMONDETHRewardsg8K0wCC.withdraw.call(uintqCLiVl7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszBzUGUg = await DMONDETHRewards.new({from: accounts[3]});
		const uintV3CIVgb = BigInt("319")
		const addressuNDsUTV = accounts[3]
		const uint256SvYLWYH = await DMONDETHRewardszBzUGUg.stake.call(uintV3CIVgb, {from: accounts[4]});
		const addressnl2QCx = await DMONDETHRewardszBzUGUg.setStakeAddress.call(addressuNDsUTV, {from: accounts[3]});
		await DMONDETHRewardszBzUGUg.checkStart.call({from: accounts[2]});

		await expect(DMONDETHRewardszBzUGUg.stake.call(uintV3CIVgb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCUrsbyv = await DMONDETHRewards.new({from: accounts[1]});
		const uintZZDzKT = BigInt("160")
		const addressTTQMjw = accounts[3]
		const uintodmjWul = BigInt("544")
		const uintAJNwsPS = BigInt("1878")
		const uint256E1gjZAy = await DMONDETHRewardsCUrsbyv.notifyRewardAmount.call(uintZZDzKT, {from: accounts[4]});
		const addressNSde6j = await DMONDETHRewardsCUrsbyv.updateReward.call(addressTTQMjw, {from: accounts[3]});
		const uint256VidKq7s = await DMONDETHRewardsCUrsbyv.stake.call(uintodmjWul, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tSWQHuy = await DMONDETHRewardsCUrsbyv.stake.call(uintAJNwsPS, {from: accounts[4]});

		await expect(DMONDETHRewardsCUrsbyv.notifyRewardAmount.call(uintZZDzKT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszrguJ98 = await DMONDETHRewards.new({from: accounts[4]});
		const addressIAfYEf = accounts[3]
		const uintqBhXXWk = BigInt("441")
		const addressgZCYavi = await DMONDETHRewardszrguJ98.setRewardDistribution.call(addressIAfYEf, {from: accounts[1]});
		const uint256iHjnsDd = await DMONDETHRewardszrguJ98.stake.call(uintqBhXXWk, {from: accounts[4]});

		await expect(DMONDETHRewardszrguJ98.setRewardDistribution.call(addressIAfYEf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsGZarVfC = await DMONDETHRewards.new({from: accounts[2]});
		const uintIJmu8px = BigInt("988")
		await DMONDETHRewardsGZarVfC.onlyOwner.call({from: accounts[1]});
		const uint256MgnqlrZ = await DMONDETHRewardsGZarVfC.withdraw.call(uintIJmu8px, {from: accounts[3]});

		await expect(DMONDETHRewardsGZarVfC.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscFeM8lQ = await DMONDETHRewards.new({from: accounts[0]});
		const uintIKcbRRs = BigInt("599")
		const addressXdoJGO = accounts[5]
		const uint256W8kbiBv = await DMONDETHRewardscFeM8lQ.remainingReward.call({from: accounts[2]});
		const uint256ufG2cpM = await DMONDETHRewardscFeM8lQ.notifyRewardAmount.call(uintIKcbRRs, {from: accounts[3]});
		const addressdWAkIZ = await DMONDETHRewardscFeM8lQ.owner.call({from: accounts[3]});
		const addressAyj6Xf = await DMONDETHRewardscFeM8lQ.transferOwnership.call(addressXdoJGO, {from: accounts[2]});

		await expect(DMONDETHRewardscFeM8lQ.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsNHjB5MS = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFEcEHVe = accounts[0]
		const uinteSAeg0u = BigInt("1221")
		const uintxks0H9S = BigInt("864")
		const uintDd4rAbo = BigInt("483")
		const addressRlluPJd = accounts[3]
		const addressNSysNLt = await DMONDETHRewardsNHjB5MS.transferOwnership.call(addressFEcEHVe, {from: accounts[0]});
		const uint256X2Geexy = await DMONDETHRewardsNHjB5MS.withdraw.call(uinteSAeg0u, {from: accounts[5]});
		const uint256pNqdd5K = await DMONDETHRewardsNHjB5MS.withdraw.call(uintxks0H9S, {from: accounts[1]});
		const uint256MvY0E0g = await DMONDETHRewardsNHjB5MS.withdraw.call(uintDd4rAbo, {from: accounts[2]});
		const uint256hTZmEJa = await DMONDETHRewardsNHjB5MS.balanceOf.call(addressRlluPJd, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszBzUGUg = await DMONDETHRewards.new({from: accounts[3]});
		const uintfpnvGbb = BigInt("319")
		const addressty81Odj = accounts[4]
		await DMONDETHRewardszBzUGUg.getReward.call({from: accounts[4]});
		const uint256SvYLWYH = await DMONDETHRewardszBzUGUg.stake.call(uintfpnvGbb, {from: accounts[4]});
		const addressnl2QCx = await DMONDETHRewardszBzUGUg.setStakeAddress.call(addressty81Odj, {from: accounts[3]});
		await DMONDETHRewardszBzUGUg.checkStart.call({from: accounts[2]});

		await expect(DMONDETHRewardszBzUGUg.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsy9tlrnR = await DMONDETHRewards.new({from: accounts[1]});
		const uintX5hZyH = BigInt("1737")
		const uint6pw4zP = BigInt("11")
		const uintvCx3JI4 = BigInt("1031")
		const addressOSpvbp8 = accounts[0]
		const uint256pFhL20 = await DMONDETHRewardsy9tlrnR.totalSupply.call({from: accounts[3]});
		const uint256S9morJ = await DMONDETHRewardsy9tlrnR.notifyRewardAmount.call(uintX5hZyH, {from: accounts[1]});
		const uint256h1Q3MdT = await DMONDETHRewardsy9tlrnR.withdraw.call(uint6pw4zP, {from: accounts[1]});
		const uint256hqcLYIy = await DMONDETHRewardsy9tlrnR.withdraw.call(uintvCx3JI4, {from: "0x0000000000000000000000000000000000000001"});
		const addressmT07rWg = await DMONDETHRewardsy9tlrnR.setRewardDistribution.call(addressOSpvbp8, {from: accounts[1]});

		assert.equal(uint256pFhL20, BigInt("0"))
		await expect(DMONDETHRewardsy9tlrnR.withdraw.call(uint6pw4zP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszBzUGUg = await DMONDETHRewards.new({from: accounts[3]});
		const addressiotGoh2 = accounts[3]
		const addressnl2QCx = await DMONDETHRewardszBzUGUg.setStakeAddress.call(addressiotGoh2, {from: accounts[3]});
		await DMONDETHRewardszBzUGUg.checkStart.call({from: accounts[2]});

		await expect(DMONDETHRewardszBzUGUg.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsy9tlrnR = await DMONDETHRewards.new({from: accounts[1]});
		const uintk97RkXN = BigInt("1737")
		const uintMVAGRXF = BigInt("27")
		const uintgKSrtob = BigInt("1031")
		const addressfw1nQ2u = accounts[0]
		const uint256pFhL20 = await DMONDETHRewardsy9tlrnR.totalSupply.call({from: accounts[3]});
		await DMONDETHRewardsy9tlrnR.exit.call({from: accounts[5]});
		const uint256S9morJ = await DMONDETHRewardsy9tlrnR.notifyRewardAmount.call(uintk97RkXN, {from: accounts[1]});
		const uint256h1Q3MdT = await DMONDETHRewardsy9tlrnR.withdraw.call(uintMVAGRXF, {from: accounts[1]});
		const uint256hqcLYIy = await DMONDETHRewardsy9tlrnR.withdraw.call(uintgKSrtob, {from: "0x0000000000000000000000000000000000000001"});
		const addressmT07rWg = await DMONDETHRewardsy9tlrnR.setRewardDistribution.call(addressfw1nQ2u, {from: accounts[1]});

		assert.equal(uint256pFhL20, BigInt("0"))
		await expect(DMONDETHRewardsy9tlrnR.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsy9tlrnR = await DMONDETHRewards.new({from: accounts[1]});
		const uinth890lwz = BigInt("1737")
		const addressaq5cnpK = accounts[0]
		const uint256pFhL20 = await DMONDETHRewardsy9tlrnR.totalSupply.call({from: accounts[3]});
		const uint256S9morJ = await DMONDETHRewardsy9tlrnR.notifyRewardAmount.call(uinth890lwz, {from: accounts[1]});
		const addressmT07rWg = await DMONDETHRewardsy9tlrnR.setRewardDistribution.call(addressaq5cnpK, {from: accounts[1]});

		assert.equal(uint256pFhL20, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszBzUGUg = await DMONDETHRewards.new({from: accounts[3]});
		const addressOmZCIEQ = accounts[3]
		const uintWGMJ20f = BigInt("320")
		const uintGYv6XZm = BigInt("1602")
		const uinteSZCAK9 = BigInt("1373")
		const addressoF4WOtm = accounts[4]
		const addresswpRGVAp = await DMONDETHRewardszBzUGUg.owner.call({from: accounts[0]});
		const uint256jPEhqw = await DMONDETHRewardszBzUGUg.balanceOf.call(addressOmZCIEQ, {from: accounts[3]});
		await DMONDETHRewardszBzUGUg.getReward.call({from: accounts[4]});
		await DMONDETHRewardszBzUGUg.onlyRewardDistribution.call({from: accounts[4]});
		const uint256SvYLWYH = await DMONDETHRewardszBzUGUg.stake.call(uintWGMJ20f, {from: accounts[4]});
		const uint256wUaRVt = await DMONDETHRewardszBzUGUg.withdraw.call(uintGYv6XZm, {from: accounts[1]});
		const uint256y1NfI5v = await DMONDETHRewardszBzUGUg.stake.call(uinteSZCAK9, {from: accounts[1]});
		const addressnl2QCx = await DMONDETHRewardszBzUGUg.setStakeAddress.call(addressoF4WOtm, {from: accounts[3]});
		await DMONDETHRewardszBzUGUg.checkStart.call({from: accounts[2]});
		const uint256dqyIqXD = await DMONDETHRewardszBzUGUg.totalSupply.call({from: accounts[0]});

		assert.equal(addresswpRGVAp, 0xd2281172dDFd74Ac7faeed12610D57e602A630C6)
		assert.equal(uint256jPEhqw, BigInt("0"))
		await expect(DMONDETHRewardszBzUGUg.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsy9tlrnR = await DMONDETHRewards.new({from: accounts[1]});
		const addressCGwsYQQ = accounts[0]
		const uintzhPK2VL = BigInt("708")
		const uintlljCIb = BigInt("1934")
		const uintLfBczM5 = BigInt("301")
		const uintyA4U8pQ = BigInt("6")
		const uint4WIUOJ = BigInt("1031")
		const addressRdFtr7e = accounts[0]
		const uint256pFhL20 = await DMONDETHRewardsy9tlrnR.totalSupply.call({from: accounts[3]});
		const address96R8Hm = await DMONDETHRewardsy9tlrnR.transferOwnership.call(addressCGwsYQQ, {from: accounts[1]});
		const addressQ2uINVu = await DMONDETHRewardsy9tlrnR.owner.call({from: accounts[1]});
		const uint256S9morJ = await DMONDETHRewardsy9tlrnR.notifyRewardAmount.call(uintzhPK2VL, {from: accounts[1]});
		const uint256oxe1m8p = await DMONDETHRewardsy9tlrnR.stake.call(uintlljCIb, {from: accounts[3]});
		const uint256GIWhkG = await DMONDETHRewardsy9tlrnR.setStartTime.call(uintLfBczM5, {from: accounts[2]});
		const uint256h1Q3MdT = await DMONDETHRewardsy9tlrnR.withdraw.call(uintyA4U8pQ, {from: accounts[1]});
		const uint256hqcLYIy = await DMONDETHRewardsy9tlrnR.withdraw.call(uint4WIUOJ, {from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsy9tlrnR.checkStart.call({from: accounts[2]});
		const addressmT07rWg = await DMONDETHRewardsy9tlrnR.setRewardDistribution.call(addressRdFtr7e, {from: accounts[1]});

		assert.equal(addressQ2uINVu, 0xAcD1E5326ec1FCf83b85c986b0cbdA6e87077F9f)
		assert.equal(uint256pFhL20, BigInt("0"))
		await expect(DMONDETHRewardsy9tlrnR.stake.call(uintlljCIb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsJJ88Kvv = await DMONDETHRewards.new({from: accounts[0]});
		const addresslDtAXbZ = accounts[0]
		const uint256f593hWy = await DMONDETHRewardsJJ88Kvv.earned.call(addresslDtAXbZ, {from: accounts[4]});
		const uint256WeX4FA7 = await DMONDETHRewardsJJ88Kvv.lastTimeRewardApplicable.call({from: accounts[0]});
		await DMONDETHRewardsJJ88Kvv.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256WeX4FA7, BigInt("0"))
		assert.equal(uint256f593hWy, BigInt("0"))
		await expect(DMONDETHRewardsJJ88Kvv.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
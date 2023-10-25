const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressBj8d1br = accounts[1]
		const addressyIiO840 = accounts[5]
		const addressUu4pMTM = accounts[4]
		const BACMARSLPTOKENPoolKzwsSwq = await BACMARSLPTOKENPool.new(addressBj8d1br, addressyIiO840, addressUu4pMTM, {from: accounts[4]});
		const byteNXVawZK = "0x0300191f03040c14140a1a1b100820191906121108030c1a1912111b1e1a111c"
		const byteFI8Iw8d = "0x01171520001217130419110a11061c18111c150b02180014171d051f0601051c"
		const uintXJVeDLo = BigInt("7")
		const uint8wLRmG = BigInt("1555")
		const uintvDAyq8 = BigInt("830")
		const uintMUQ00sN = BigInt("37")
		const uintVCmFjIa = BigInt("505")
		const addressy2EKbP2 = accounts[1]
//		const uint8I10580T = await BACMARSLPTOKENPoolKzwsSwq.decimals.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolKzwsSwq.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint256JHzjU3u = await BACMARSLPTOKENPoolKzwsSwq.stakeWithPermit.call(uintvDAyq8, uint8wLRmG, uintXJVeDLo, byteFI8Iw8d, byteNXVawZK, {from: accounts[0]});
//		const uint256ufoDxMt = await BACMARSLPTOKENPoolKzwsSwq.withdraw.call(uintMUQ00sN, {from: accounts[0]});
//		const uint256uBzSyJh = await BACMARSLPTOKENPoolKzwsSwq.notifyRewardAmount.call(uintVCmFjIa, {from: accounts[3]});
//		const uint2562iaLkb = await BACMARSLPTOKENPoolKzwsSwq.earned.call(addressy2EKbP2, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolKzwsSwq.decimals.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringk85ynt = "AOESNScgvLZrhRW9E2DL0MWkG9raLYFLW4BDH55b5wd5cFlt0YDX"
		const stringGl47HhD = "IHqDY1FmHTD73zl32enuMBq1t5i4J9GoNa8O8Lq80GnakQPMND9tr5auNSPYw13H"
		const uintoNlf1ag = BigInt("25")
		const BACMARSLPTOKENPoolbw2MM8J = await BACMARSLPTOKENPool.new(stringk85ynt, stringGl47HhD, uintoNlf1ag, {from: accounts[3]});
		const uint256g3M2le = await BACMARSLPTOKENPoolbw2MM8J.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPoolbw2MM8J.nonReentrant.call({from: accounts[2]});
		const uint256ypfuR6L = await BACMARSLPTOKENPoolbw2MM8J.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringp5MSoGu = "Ey4LbY4kKXy1z2hoblASWhhogoRZDLaTGttJ6XsTK1LfXhjsSCMmDAIDHnA6twBTpkS3isqlTlt0sw2"
		const stringIKM7Vjl = "ULQTDS1GSxkAjhOOkj7c95XUVH22C3n2sanaS446ThDmh5UnHvaxQtZ4P3JUIEn8FKaQyHh9D9NpGfH8yo94ihL7XuPG413P"
		const uintKCrRsz2 = BigInt("127")
		const BACMARSLPTOKENPoolvnk69q8 = await BACMARSLPTOKENPool.new(stringp5MSoGu, stringIKM7Vjl, uintKCrRsz2, {from: accounts[5]});
		const uint256XRKgcq9 = await BACMARSLPTOKENPoolvnk69q8.rewardPerToken.call({from: accounts[0]});
		const stringQQHGyt3 = await BACMARSLPTOKENPoolvnk69q8.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXBDjYcC = "0x0000000000000000000000000000000000000001"
		const addressXHKFm8 = accounts[1]
		const addresszt1gx0 = accounts[3]
		const BACMARSLPTOKENPoolRPE7y0D = await BACMARSLPTOKENPool.new(addressXBDjYcC, addressXHKFm8, addresszt1gx0, {from: accounts[1]});
		const addressvd5a87n = accounts[1]
//		await BACMARSLPTOKENPoolRPE7y0D.exit.call({from: accounts[5]});
//		const uint256dfIKsvg = await BACMARSLPTOKENPoolRPE7y0D.balanceOf.call(addressvd5a87n, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolRPE7y0D.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssCzDXgW = accounts[0]
		const addressWpqcggK = accounts[0]
		const addressiTkYcuY = accounts[0]
		const BACMARSLPTOKENPoolLz99omE = await BACMARSLPTOKENPool.new(addresssCzDXgW, addressWpqcggK, addressiTkYcuY, {from: accounts[2]});
		const addressrh35Dt2 = accounts[1]
		const addressBbX6U3q = accounts[5]
		const uint256pU9dT6e = await BACMARSLPTOKENPoolLz99omE.getRewardForDuration.call({from: accounts[0]});
		const uint256zdGXXTJ = await BACMARSLPTOKENPoolLz99omE.balanceOf.call(addressrh35Dt2, {from: accounts[1]});
//		await BACMARSLPTOKENPoolLz99omE.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zM3rw0F = await BACMARSLPTOKENPoolLz99omE.balanceOf.call(addressBbX6U3q, {from: accounts[4]});

		assert.equal(uint256pU9dT6e, BigInt("0"))
		assert.equal(uint256zdGXXTJ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolLz99omE.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqIFQalH = "w8g1QKdn4IiwgXqVCzaFSdzKUoTzwWbHvAB1pOQpN2TAyJEJwNgejy08pRFcPTt2p1mtqMY1H88YpGv"
		const stringMn9QSEM = "NuRI1MZf6Nhdarcnkdi8XhojA8w8TNUTsDlib8e4z2c99PPzK0qj6avZ52i4DwbsYuxOIAaW"
		const uintmzVJWud = BigInt("24")
		const BACMARSLPTOKENPooly8yEtKR = await BACMARSLPTOKENPool.new(stringqIFQalH, stringMn9QSEM, uintmzVJWud, {from: accounts[2]});
		const byteNWcN0ve = "0x180c0a171c1c0b121f190b19200316021c090d010c1d0e181b11020a1e081214"
		const bytevC8Aikv = "0x1d131009081d0b0406140c161b1c1d0a0f0b07071c1001141b0c0307070a0909"
		const uintO0FNMNM = BigInt("137")
		const uintzUCUnMU = BigInt("1875")
		const uintTRunMCK = BigInt("444")
		const uintCgGAgX4 = BigInt("201")
		const uint256ZkF10qM = await BACMARSLPTOKENPooly8yEtKR.stakeWithPermit.call(uintTRunMCK, uintzUCUnMU, uintO0FNMNM, bytevC8Aikv, byteNWcN0ve, {from: "0x0000000000000000000000000000000000000001"});
		const stringCYcsIqK = await BACMARSLPTOKENPooly8yEtKR.name.call({from: accounts[2]});
		const uint256Mcslaqu = await BACMARSLPTOKENPooly8yEtKR.stake.call(uintCgGAgX4, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressIFwlx1 = accounts[4]
		const addressNZVZcV = accounts[2]
		const addressrY1PIjJ = accounts[4]
		const BACMARSLPTOKENPoollxGYkmP = await BACMARSLPTOKENPool.new(addressIFwlx1, addressNZVZcV, addressrY1PIjJ, {from: accounts[0]});
		const uintTCuQErE = BigInt("294")
		const uint256MGbmrTs = await BACMARSLPTOKENPoollxGYkmP.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256nDoA4OP = await BACMARSLPTOKENPoollxGYkmP.rewardPerToken.call({from: accounts[4]});
//		const uint256oYEzq6G = await BACMARSLPTOKENPoollxGYkmP.withdraw.call(uintTCuQErE, {from: accounts[4]});

		assert.equal(uint256MGbmrTs, BigInt("0"))
		assert.equal(uint256nDoA4OP, BigInt("0"))
		await expect(BACMARSLPTOKENPoollxGYkmP.withdraw.call(uintTCuQErE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresskHP8BW = accounts[2]
		const addressZhHZ3EN = "0x0000000000000000000000000000000000000001"
		const addresssbGgTO = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addresskHP8BW, addressZhHZ3EN, addresssbGgTO, {from: accounts[5]});
		const uintLi521DT = BigInt("1458")
		const addressOykxc9o = accounts[1]
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintLi521DT, {from: accounts[2]});
//		const addressQUYFgqz = await BACMARSLPTOKENPoolfScR92V.updateReward.call(addressOykxc9o, {from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256QJlQ34v, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintLi521DT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringI69i7At = "TfCLLmTtYiKKBsURJxjpvIOqY8hbNyQ2oAySIKWviL1aUQ41wbEZ3eJp2"
		const stringmG2RenN = "xsW5gkmsEH4oUJYUQLvw7V4MNNJQoBfwP4xwXFPp4RwOlca"
		const uintJpxu5KU = BigInt("29")
		const BACMARSLPTOKENPoolifi1G8F = await BACMARSLPTOKENPool.new(stringI69i7At, stringmG2RenN, uintJpxu5KU, {from: accounts[1]});
		const uint8H8j2o = BigInt("883")
		const uintc3fVmBq = BigInt("1321")
		await BACMARSLPTOKENPoolifi1G8F.exit.call({from: accounts[1]});
		const uint256wFMvlId = await BACMARSLPTOKENPoolifi1G8F.rewardPerToken.call({from: accounts[4]});
		const uint256XIgfWmo = await BACMARSLPTOKENPoolifi1G8F.notifyRewardAmount.call(uint8H8j2o, {from: accounts[5]});
		const uint8Ykd9Uxg = await BACMARSLPTOKENPoolifi1G8F.decimals.call({from: accounts[3]});
		const uint256dN3zkZg = await BACMARSLPTOKENPoolifi1G8F.notifyRewardAmount.call(uintc3fVmBq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressvcpVDLv = accounts[2]
		const addressNYN2DA = "0x0000000000000000000000000000000000000001"
		const addresslo5JSvF = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addressvcpVDLv, addressNYN2DA, addresslo5JSvF, {from: accounts[5]});
		const addressfEUJtfb = accounts[2]
		const uint0Yhi1d = BigInt("1458")
		const addressQSoNNcd = "0x0000000000000000000000000000000000000001"
		const uint256NB56rrM = await BACMARSLPTOKENPoolfScR92V.earned.call(addressfEUJtfb, {from: accounts[3]});
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[0]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uint0Yhi1d, {from: accounts[2]});
//		const addressQUYFgqz = await BACMARSLPTOKENPoolfScR92V.updateReward.call(addressQSoNNcd, {from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256NB56rrM, BigInt("0"))
		assert.equal(uint256QJlQ34v, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOax5R2j = accounts[2]
		const addressr0sEGD = "0x0000000000000000000000000000000000000001"
		const addressb9pIbBR = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addressOax5R2j, addressr0sEGD, addressb9pIbBR, {from: accounts[5]});
		const uintS9XjvLw = BigInt("1852")
		const uintwYSgldZ = BigInt("1458")
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		const uint256CIl8Dxe = await BACMARSLPTOKENPoolfScR92V.withdraw.call(uintS9XjvLw, {from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolfScR92V.onlyRewardsDistribution.call({from: accounts[2]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintwYSgldZ, {from: accounts[2]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256QJlQ34v, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.withdraw.call(uintS9XjvLw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYOPyGKw = "C8sSHTRxLUu8jnbwFmAXI"
		const stringM6GbUh7 = "MMJavGrC2oEapYFX4m6tWI8JkE7Gxl6WlwLqTheB3gisFCuTMOp"
		const uintT08OP2f = BigInt("155")
		const BACMARSLPTOKENPoolr6RUYSO = await BACMARSLPTOKENPool.new(stringYOPyGKw, stringM6GbUh7, uintT08OP2f, {from: accounts[2]});
		const uintOh0tfLT = BigInt("742")
		const stringaVQ5IQ = await BACMARSLPTOKENPoolr6RUYSO.name.call({from: accounts[4]});
		const uint256ZOTvpY = await BACMARSLPTOKENPoolr6RUYSO.totalSupply.call({from: accounts[3]});
		const uint256hA9RVf8 = await BACMARSLPTOKENPoolr6RUYSO.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256kgcKPD6 = await BACMARSLPTOKENPoolr6RUYSO.withdraw.call(uintOh0tfLT, {from: accounts[0]});
		const stringJQds4Op = await BACMARSLPTOKENPoolr6RUYSO.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLSurc94 = "9x9Lsh4rQqFQG9feHRzFlUKJDDH5vS8JiyrD5tZVofl8NgQObd8uAmskN1omnMi"
		const stringwR8BoUh = "dAji42KXxVNrK73tGXlXUANBcUQyNef9b6uvQ6cbByDuCEzCb0VJQg3PSBzjvRMuH2kbC6wHQs3z92iTD2fvdnxE1"
		const uintmJRRYj = BigInt("249")
		const BACMARSLPTOKENPooluzfmGyP = await BACMARSLPTOKENPool.new(stringLSurc94, stringwR8BoUh, uintmJRRYj, {from: accounts[5]});
		const uintpgrtmZo = BigInt("1609")
		const uint256KA3ws6A = await BACMARSLPTOKENPooluzfmGyP.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPooluzfmGyP.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256w4stpHh = await BACMARSLPTOKENPooluzfmGyP.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPooluzfmGyP.getReward.call({from: accounts[3]});
		const uint256k4IZzPX = await BACMARSLPTOKENPooluzfmGyP.stake.call(uintpgrtmZo, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressgODug17 = accounts[2]
		const addressY0NuPT = "0x0000000000000000000000000000000000000001"
		const addressiEDiRQN = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addressgODug17, addressY0NuPT, addressiEDiRQN, {from: accounts[5]});
		const addressN7BR0fM = accounts[0]
		const byteYMgcjei = "0x080310140e1d030901101c170a1d0f11071f0f1e011707191f13000505030d10"
		const byterwzYq9g = "0x1a06001f171410061f070909201d180c0d0616141f11110a160d1112130f1e07"
		const uintEyzLX2w = BigInt("248")
		const uintRlTdGfA = BigInt("1435")
		const uintm9AHn5s = BigInt("2045")
		const addressSwc4I6p = accounts[1]
		const uintd4kMOY1 = BigInt("1458")
		const addressj3jnyMf = accounts[2]
		const addresswLAW332 = "0x0000000000000000000000000000000000000001"
		const uint256NB56rrM = await BACMARSLPTOKENPoolfScR92V.earned.call(addressN7BR0fM, {from: accounts[3]});
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
//		const uint256bn6q94v = await BACMARSLPTOKENPoolfScR92V.stakeWithPermit.call(uintm9AHn5s, uintRlTdGfA, uintEyzLX2w, byterwzYq9g, byteYMgcjei, {from: accounts[0]});
//		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		const uint256xw3htcb = await BACMARSLPTOKENPoolfScR92V.balanceOf.call(addressSwc4I6p, {from: accounts[2]});
//		await BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[0]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintd4kMOY1, {from: accounts[2]});
//		const uint256izB2rGD = await BACMARSLPTOKENPoolfScR92V.balanceOf.call(addressj3jnyMf, {from: accounts[1]});
//		await BACMARSLPTOKENPoolfScR92V.onlyRewardsDistribution.call({from: accounts[3]});
//		const addressQUYFgqz = await BACMARSLPTOKENPoolfScR92V.updateReward.call(addresswLAW332, {from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256NB56rrM, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.stakeWithPermit.call(uintm9AHn5s, uintRlTdGfA, uintEyzLX2w, byterwzYq9g, byteYMgcjei, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWnVGfV4 = accounts[2]
		const addresslgaYmw6 = "0x0000000000000000000000000000000000000001"
		const addressF2kI9RV = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addressWnVGfV4, addresslgaYmw6, addressF2kI9RV, {from: accounts[5]});
		const addressPOc7gUA = accounts[2]
		const uintaD7gEOg = BigInt("1458")
		const addressIIVDCSQ = accounts[2]
		const uint256NB56rrM = await BACMARSLPTOKENPoolfScR92V.earned.call(addressPOc7gUA, {from: accounts[3]});
		const uint256uQDGKA5 = await BACMARSLPTOKENPoolfScR92V.getRewardForDuration.call({from: accounts[0]});
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[0]});
//		const stringAwICdOS = await BACMARSLPTOKENPoolfScR92V.symbol.call({from: accounts[4]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintaD7gEOg, {from: accounts[2]});
//		const addressQUYFgqz = await BACMARSLPTOKENPoolfScR92V.updateReward.call(addressIIVDCSQ, {from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256NB56rrM, BigInt("0"))
		assert.equal(uint256QJlQ34v, BigInt("0"))
		assert.equal(uint256uQDGKA5, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXNQWSBX = accounts[2]
		const addressmDNybsC = "0x0000000000000000000000000000000000000001"
		const addressm4gwwkX = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addressXNQWSBX, addressmDNybsC, addressm4gwwkX, {from: accounts[5]});
		const addressqbvWWf3 = accounts[1]
		const uintrMTRjQR = BigInt("2015")
		const uintMxowmQx = BigInt("1218")
		const uintQoGwcn = BigInt("1444")
		const addressg4hl2tL = "0x0000000000000000000000000000000000000000"
		const uint256BOj50P0 = await BACMARSLPTOKENPoolfScR92V.rewardPerToken.call({from: accounts[5]});
		const uint256NB56rrM = await BACMARSLPTOKENPoolfScR92V.earned.call(addressqbvWWf3, {from: accounts[3]});
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		const uint256a9avxNM = await BACMARSLPTOKENPoolfScR92V.stake.call(uintrMTRjQR, {from: accounts[1]});
//		const uint256bwCEHCW = await BACMARSLPTOKENPoolfScR92V.stake.call(uintMxowmQx, {from: accounts[5]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintQoGwcn, {from: accounts[2]});
//		const addressQUYFgqz = await BACMARSLPTOKENPoolfScR92V.updateReward.call(addressg4hl2tL, {from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256BOj50P0, BigInt("0"))
		assert.equal(uint256NB56rrM, BigInt("0"))
		assert.equal(uint256QJlQ34v, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.stake.call(uintrMTRjQR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqXr9KWe = accounts[2]
		const addresso8bY5UY = "0x0000000000000000000000000000000000000001"
		const addressLA83dtp = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addressqXr9KWe, addresso8bY5UY, addressLA83dtp, {from: accounts[5]});
		const uintKpxuHBt = BigInt("1458")
		const addressXeZStYK = accounts[1]
		const uint256XZ5WmyS = await BACMARSLPTOKENPoolfScR92V.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
//		await BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[2]});
//		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintKpxuHBt, {from: accounts[2]});
//		const addressQUYFgqz = await BACMARSLPTOKENPoolfScR92V.updateReward.call(addressXeZStYK, {from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256XZ5WmyS, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv9Pmemo = "MewB4LyeuldqATUGoEAkDPxlY6hvQPnnzHsNLxwxfiPua4A67DOoDwlWD6GAVKpivfZ9rtIxyXb6As"
		const stringcG1XSwS = "FlAT4fQPIiBofmqFQ2JecaiO5O7NOmM5VL9K1l3S9MCfElqd322IPOByt31M"
		const uintQZKOKy = BigInt("34")
		const BACMARSLPTOKENPoolqay1A2n = await BACMARSLPTOKENPool.new(stringv9Pmemo, stringcG1XSwS, uintQZKOKy, {from: accounts[3]});
		const addressodjiLFg = accounts[0]
		const uint8mNfRhNi = await BACMARSLPTOKENPoolqay1A2n.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolqay1A2n.exit.call({from: accounts[1]});
		const uint256YZFrSFO = await BACMARSLPTOKENPoolqay1A2n.earned.call(addressodjiLFg, {from: accounts[5]});
		await BACMARSLPTOKENPoolqay1A2n.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWxsiZaa = accounts[2]
		const addresskanAxcP = "0x0000000000000000000000000000000000000001"
		const addressprTPfSf = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addressWxsiZaa, addresskanAxcP, addressprTPfSf, {from: accounts[5]});
		const uintBwJZGq7 = BigInt("1262")
		const uintujrfxkR = BigInt("1444")
		const addresskUONfI5 = "0x0000000000000000000000000000000000000001"
		const byteaR1ZaeH = "0x0b1214200e1c071a160e1f0116051c0f171d1a0c1f1e12041a111a0708181606"
		const byteWGav30M = "0x1a0a100a0f121f161215001f061f0d18200d1b030f0802010c0d1d1f1406030e"
		const uintRiZC0K0 = BigInt("176")
		const uintrqmbBMC = BigInt("554")
		const uintkPdR23q = BigInt("955")
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
		const uint256WrVMOpm = await BACMARSLPTOKENPoolfScR92V.getRewardForDuration.call({from: accounts[1]});
//		const uint256wUXymX2 = await BACMARSLPTOKENPoolfScR92V.stake.call(uintBwJZGq7, {from: accounts[3]});
//		const uint256VXqlxFH = await BACMARSLPTOKENPoolfScR92V.rewardPerToken.call({from: accounts[1]});
//		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		const stringH0nW4y6 = await BACMARSLPTOKENPoolfScR92V.name.call({from: accounts[4]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintujrfxkR, {from: accounts[2]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint8eZezV3Y = await BACMARSLPTOKENPoolfScR92V.decimals.call({from: accounts[2]});
//		const addressQUYFgqz = await BACMARSLPTOKENPoolfScR92V.updateReward.call(addresskUONfI5, {from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});
//		const uint256YLjD0t2 = await BACMARSLPTOKENPoolfScR92V.stakeWithPermit.call(uintkPdR23q, uintrqmbBMC, uintRiZC0K0, byteWGav30M, byteaR1ZaeH, {from: accounts[0]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256WrVMOpm, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.stake.call(uintBwJZGq7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXiRdDy = "epL3EyY"
		const stringLvrg0i = "n5Ydy9xQ4DmqLTilMIfZdMQmdhWrnbcMMtzjg9dLPqUhPjbIySeKTDDEAUoOgmWOJV7TKdAwwmnuxZGm6jT"
		const uintlOYItt = BigInt("58")
		const BACMARSLPTOKENPooloskLjzV = await BACMARSLPTOKENPool.new(stringXiRdDy, stringLvrg0i, uintlOYItt, {from: accounts[5]});
		const uint8UaqIUei = await BACMARSLPTOKENPooloskLjzV.decimals.call({from: accounts[2]});
		const uint256bIcCzMR = await BACMARSLPTOKENPooloskLjzV.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresshRawMra = accounts[2]
		const addressOJA0G9S = "0x0000000000000000000000000000000000000001"
		const addresswaobwdT = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addresshRawMra, addressOJA0G9S, addresswaobwdT, {from: accounts[5]});
		const addresse78Oagl = accounts[0]
		const byteLcW9qf = "0x080310140e1d030901101c170a1d0f11071f0f1e011707191f13000505030d10"
		const bytehB3VDT0 = "0x1a06001f171410061f070909201d180c0d0616141f11110a160d1112130f1e07"
		const uintAYcVVnG = BigInt("248")
		const uintDS6roDs = BigInt("1435")
		const uintPdscaY9 = BigInt("2045")
		const addressoEIxna9 = accounts[2]
		const uintjauQCW = BigInt("1458")
		const addressDNJmQr = accounts[2]
		const addressuoFfEJh = "0x0000000000000000000000000000000000000001"
		const uint256NB56rrM = await BACMARSLPTOKENPoolfScR92V.earned.call(addresse78Oagl, {from: accounts[3]});
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
//		const uint256bn6q94v = await BACMARSLPTOKENPoolfScR92V.stakeWithPermit.call(uintPdscaY9, uintDS6roDs, uintAYcVVnG, bytehB3VDT0, byteLcW9qf, {from: accounts[0]});
//		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		const uint256xw3htcb = await BACMARSLPTOKENPoolfScR92V.balanceOf.call(addressoEIxna9, {from: accounts[2]});
//		await BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[0]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintjauQCW, {from: accounts[2]});
//		const uint256izB2rGD = await BACMARSLPTOKENPoolfScR92V.balanceOf.call(addressDNJmQr, {from: accounts[1]});
//		await BACMARSLPTOKENPoolfScR92V.onlyRewardsDistribution.call({from: accounts[3]});
//		const addressQUYFgqz = await BACMARSLPTOKENPoolfScR92V.updateReward.call(addressuoFfEJh, {from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256NB56rrM, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.stakeWithPermit.call(uintPdscaY9, uintDS6roDs, uintAYcVVnG, bytehB3VDT0, byteLcW9qf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgmQrhDY = "zz9iEhkxqM4UJpL"
		const stringvdzpJCh = "X2fSPCVWDAh1utJIS8ewYuYoz1e4KVXkq4qYTOdWhP0SbXgYtNoWrsnEgzY7NMPCSbHuyaJ2Htos"
		const uintP1v8Ck1 = BigInt("49")
		const BACMARSLPTOKENPoolmyuOlgv = await BACMARSLPTOKENPool.new(stringgmQrhDY, stringvdzpJCh, uintP1v8Ck1, {from: accounts[2]});
		const uintUsUmKl1 = BigInt("39")
		await BACMARSLPTOKENPoolmyuOlgv.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256cJGJn3j = await BACMARSLPTOKENPoolmyuOlgv.notifyRewardAmount.call(uintUsUmKl1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jR7fuEb = await BACMARSLPTOKENPoolmyuOlgv.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressv3Ryegq = accounts[2]
		const addressdJtLs0E = "0x0000000000000000000000000000000000000001"
		const addressQxWuudO = accounts[0]
		const BACMARSLPTOKENPoolfScR92V = await BACMARSLPTOKENPool.new(addressv3Ryegq, addressdJtLs0E, addressQxWuudO, {from: accounts[5]});
		const addressqCz8dWX = accounts[3]
		const uintYTlgAyp = BigInt("4")
		const uintzmVfafq = BigInt("1458")
		const byter74AaPH = "0x111e111717040e171f1e0f1f1f150c16091c170a091d2010151809020c151808"
		const byteh4kqvUL = "0x121c1a0a140d081b08061c0f0c1e0d1b1b12161510121b151801080614011110"
		const uintCMtYYpL = BigInt("184")
		const uintwvHtSSN = BigInt("1879")
		const uintw5K0i2L = BigInt("536")
		const uint256NB56rrM = await BACMARSLPTOKENPoolfScR92V.earned.call(addressqCz8dWX, {from: accounts[3]});
		const uint2564k468D = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[5]});
		const uint256QJlQ34v = await BACMARSLPTOKENPoolfScR92V.totalSupply.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[0]});
//		const uint256HKsRWGq = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintYTlgAyp, {from: accounts[4]});
//		const uint256F5A6Uyx = await BACMARSLPTOKENPoolfScR92V.notifyRewardAmount.call(uintzmVfafq, {from: accounts[2]});
//		await BACMARSLPTOKENPoolfScR92V.nonReentrant.call({from: accounts[2]});
//		const uint256Z4AK0Gy = await BACMARSLPTOKENPoolfScR92V.stakeWithPermit.call(uintw5K0i2L, uintwvHtSSN, uintCMtYYpL, byteh4kqvUL, byter74AaPH, {from: accounts[4]});

		assert.equal(uint2564k468D, BigInt("0"))
		assert.equal(uint256NB56rrM, BigInt("0"))
		assert.equal(uint256QJlQ34v, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfScR92V.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAEvrzyn = "g3N9ne867yp4c3xL8ehY7YDXp"
		const stringp80ptuJ = "H"
		const uintD2KNdr1 = BigInt("192")
		const BACMARSLPTOKENPoolZcU4uUj = await BACMARSLPTOKENPool.new(stringAEvrzyn, stringp80ptuJ, uintD2KNdr1, {from: "0x0000000000000000000000000000000000000001"});
		const uintedrfzy = BigInt("1222")
		await BACMARSLPTOKENPoolZcU4uUj.onlyRewardsDistribution.call({from: accounts[3]});
		await BACMARSLPTOKENPoolZcU4uUj.getReward.call({from: accounts[4]});
		const uint256VkHY9iA = await BACMARSLPTOKENPoolZcU4uUj.stake.call(uintedrfzy, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringn0KoiDp = "Hsj"
		const stringF3ZCFz7 = "xz1ZNFtt8JiWUy68wn8ERAuY7UgrsH9BOaSJ8GULbFp"
		const uintpF1B0ZT = BigInt("37")
		const BACMARSLPTOKENPooluLUKX2 = await BACMARSLPTOKENPool.new(stringn0KoiDp, stringF3ZCFz7, uintpF1B0ZT, {from: "0x0000000000000000000000000000000000000001"});
		const uintO6QdYH0 = BigInt("1024")
		const uintpxlE49h = BigInt("2019")
		const uintzmC3y5a = BigInt("322")
		const uint2565ccogG = await BACMARSLPTOKENPooluLUKX2.rewardPerToken.call({from: accounts[1]});
		const uint256ZEew84m = await BACMARSLPTOKENPooluLUKX2.notifyRewardAmount.call(uintO6QdYH0, {from: accounts[1]});
		await BACMARSLPTOKENPooluLUKX2.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256QCxB8Pk = await BACMARSLPTOKENPooluLUKX2.stake.call(uintpxlE49h, {from: accounts[5]});
		const uint2565iMNoH = await BACMARSLPTOKENPooluLUKX2.stake.call(uintzmC3y5a, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRuPv0Xs = "qq1rMNSTA90FIBdGgC"
		const stringT7M5QUk = "MPC0b0pKr6p5WsNwdBBGNJdMoRbDjemc"
		const uintPO2Dvcc = BigInt("170")
		const BACMARSLPTOKENPoolzoXQQgd = await BACMARSLPTOKENPool.new(stringRuPv0Xs, stringT7M5QUk, uintPO2Dvcc, {from: accounts[0]});
		const byteb5CgduB = "0x1a1100040808040a1904021c1d0a1403190a021d0a0801021e0714090a200809"
		const byte6vvBrY = "0x1005151a0b16140d1a20150b010b0504140f0d1b0309002011120a111e1d0210"
		const uintSKn9aL = BigInt("87")
		const uintj5IwaR9 = BigInt("1068")
		const uintqkm30yo = BigInt("870")
		const uint256pb57ijS = await BACMARSLPTOKENPoolzoXQQgd.totalSupply.call({from: accounts[1]});
		const stringbeLm955 = await BACMARSLPTOKENPoolzoXQQgd.symbol.call({from: accounts[3]});
		const stringwji7cXo = await BACMARSLPTOKENPoolzoXQQgd.symbol.call({from: accounts[4]});
		const uint256E9k8jOa = await BACMARSLPTOKENPoolzoXQQgd.stakeWithPermit.call(uintqkm30yo, uintj5IwaR9, uintSKn9aL, byte6vvBrY, byteb5CgduB, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTsPRUJO = "tDxUTi5D9sPTvselfLINsgPU7ahg3zNpn8lHdTmTAgTGa"
		const stringwjierbI = "kzevsPHq5JYwrfTQgek5HYghrxqqjcFjOCapozm7vZzfu3nFogejFZ8ldi5SGctnz4mJkqIbleirTjiyDs"
		const uintlRJQKMX = BigInt("184")
		const BACMARSLPTOKENPoolhaLYk59 = await BACMARSLPTOKENPool.new(stringTsPRUJO, stringwjierbI, uintlRJQKMX, {from: accounts[2]});
		const uintPq3broh = BigInt("1351")
		const uinteJFy4OS = BigInt("1990")
		const uint256FVdz1MD = await BACMARSLPTOKENPoolhaLYk59.getRewardForDuration.call({from: accounts[0]});
		const uint256WvnyrCR = await BACMARSLPTOKENPoolhaLYk59.notifyRewardAmount.call(uintPq3broh, {from: accounts[2]});
		const uint256PKfzFO = await BACMARSLPTOKENPoolhaLYk59.withdraw.call(uinteJFy4OS, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvIYFeZt = "w5gpYOvkdAYX87TOyHtQyjaN2jxMN3BK"
		const stringV1evapI = "QLWQpgKAtMKLZQbukpSSQYvO8OBDYtbltf8ROw2ofqlYEH5Sqcx6xIO21IE4dm5v5M"
		const uintu0pqKyW = BigInt("29")
		const BACMARSLPTOKENPoolDzGILCX = await BACMARSLPTOKENPool.new(stringvIYFeZt, stringV1evapI, uintu0pqKyW, {from: accounts[2]});
		const uint256ob4qiQ = await BACMARSLPTOKENPoolDzGILCX.totalSupply.call({from: accounts[2]});
		const uint256FEsRx1y = await BACMARSLPTOKENPoolDzGILCX.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolDzGILCX.getReward.call({from: accounts[5]});
		const stringZI044RN = await BACMARSLPTOKENPoolDzGILCX.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd7no6xN = "6krQqOZTN6ADuuGxmMS46KVZTh7QoXYPsJPbq5fTB3CB2OkaIcR1UyPLaXSFo9bT6NTtQxYxCJhLSjno5gn5hYkAUO"
		const stringXzVctIU = "V6QtGJPQfrrGRRcWGhDgElg2DfPvPyG2Z9HZgWSbDobOrHM9tjgfWud7u4ueJurt59SyRCuNR35Oi1S"
		const uintGYR5Pe = BigInt("114")
		const BACMARSLPTOKENPoolVtmyshs = await BACMARSLPTOKENPool.new(stringd7no6xN, stringXzVctIU, uintGYR5Pe, {from: accounts[5]});
		const uintouRKCcw = BigInt("1198")
		const uint256uhF3PPi = await BACMARSLPTOKENPoolVtmyshs.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolVtmyshs.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256lkmiKJH = await BACMARSLPTOKENPoolVtmyshs.stake.call(uintouRKCcw, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNUFsLk7 = "gnVuD5D1YlLn8rg0xj2FNWyftQatBMP8JXVrEeIF6wWxXJoXTFJbhatO3FuTJSXHIW92iigpmGjoWRBErz4LmKx5"
		const stringArYfoo6 = "r4JZAV9JWnL4ajrE1gG4kcJdVCiQFgevFlDDL7zo0R8IyM6KDt7IbumLEXwDHl2NVDpjHvtDTL2Odil5hLOn"
		const uintcQyesiI = BigInt("22")
		const BACMARSLPTOKENPoolpDzLzKH = await BACMARSLPTOKENPool.new(stringNUFsLk7, stringArYfoo6, uintcQyesiI, {from: accounts[3]});
		const byteNb7dVeP = "0x051516161713111315000b0f1c1b06080b18140a15181e171c0a051f0c070911"
		const byteZoeQncw = "0x071c0c1c1605000c1f1b011f170114071e13130c0a03031d0e010f0e03021e16"
		const uintHF4ppmr = BigInt("133")
		const uintWl1mjEa = BigInt("1153")
		const uinthTJ1cyw = BigInt("125")
		const uintXSwEHJ8 = BigInt("1638")
		const uint256sBJe7Rm = await BACMARSLPTOKENPoolpDzLzKH.stakeWithPermit.call(uinthTJ1cyw, uintWl1mjEa, uintHF4ppmr, byteZoeQncw, byteNb7dVeP, {from: accounts[5]});
		const uint256iKDsQi = await BACMARSLPTOKENPoolpDzLzKH.stake.call(uintXSwEHJ8, {from: accounts[3]});
		await BACMARSLPTOKENPoolpDzLzKH.nonReentrant.call({from: accounts[4]});
		const stringVo4tj5T = await BACMARSLPTOKENPoolpDzLzKH.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolpDzLzKH.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT4QHZhJ = "mxUGMFWn6uCUuC51Q24QjvYrHW6rsj0bLGepykaVde1mSUnpwT2MBWGCGUQiUbrLnsmLd"
		const stringoblwd3n = "LSdL5cFRRp8SuLJjjBbPBJXXYbAGz5NwmupYRK49cE2u"
		const uintwllm5Zf = BigInt("174")
		const BACMARSLPTOKENPoolnF88aYW = await BACMARSLPTOKENPool.new(stringT4QHZhJ, stringoblwd3n, uintwllm5Zf, {from: accounts[0]});
		const addressYB7ff2 = accounts[4]
		const uintmLQ7NnV = BigInt("249")
		const addresskYfttDV = accounts[0]
		const uint256dZAUxjQ = await BACMARSLPTOKENPoolnF88aYW.balanceOf.call(addressYB7ff2, {from: accounts[3]});
		const uint256DHRtqfp = await BACMARSLPTOKENPoolnF88aYW.notifyRewardAmount.call(uintmLQ7NnV, {from: accounts[1]});
		const uint256lmgz44t = await BACMARSLPTOKENPoolnF88aYW.balanceOf.call(addresskYfttDV, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLIwmpB = "yJnu3j4z7cvY7RCGrVoBDj"
		const stringJPvNiqf = "KfwsV1UgXGvSLEyCxY68T4BcTDAwMjKdefP2S97yaEinrS"
		const uintWCLPPS8 = BigInt("246")
		const BACMARSLPTOKENPoolhTBVoWN = await BACMARSLPTOKENPool.new(stringLIwmpB, stringJPvNiqf, uintWCLPPS8, {from: accounts[1]});
		const uintvdox5Cr = BigInt("487")
		const uintgz4xe8 = BigInt("720")
		const uint256rXbKFX2 = await BACMARSLPTOKENPoolhTBVoWN.totalSupply.call({from: accounts[4]});
		const uint256qGtSXt = await BACMARSLPTOKENPoolhTBVoWN.withdraw.call(uintvdox5Cr, {from: accounts[3]});
		const uint256ZXCcINW = await BACMARSLPTOKENPoolhTBVoWN.stake.call(uintgz4xe8, {from: accounts[4]});
		await BACMARSLPTOKENPoolhTBVoWN.nonReentrant.call({from: accounts[3]});
		const uint256ma4WWcl = await BACMARSLPTOKENPoolhTBVoWN.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string7ZQtTC = "WXiWhroHzeIGSHswFdrbeqtdxCVC8ZpYXBL"
		const stringjN65Yiw = "WxPLmD8to25TtHt8guEb2cYfVC5k8IbXOtUG23W7r"
		const uintNIToFBT = BigInt("86")
		const BACMARSLPTOKENPooldGraNX = await BACMARSLPTOKENPool.new(string7ZQtTC, stringjN65Yiw, uintNIToFBT, {from: accounts[1]});
		const uintMLIAxEQ = BigInt("2009")
		await BACMARSLPTOKENPooldGraNX.exit.call({from: accounts[5]});
		const uint256QNE1irY = await BACMARSLPTOKENPooldGraNX.stake.call(uintMLIAxEQ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAU9NhxE = "PjtThPSITbgfJ3pAGJ"
		const stringBnzsEVD = "MHbAaquwA6POziBaoSKq2T2Xgz5V7R6wX5h9f2oMl9IouFluI9o"
		const uint77Mqit = BigInt("140")
		const BACMARSLPTOKENPoolPvVJmZL = await BACMARSLPTOKENPool.new(stringAU9NhxE, stringBnzsEVD, uint77Mqit, {from: accounts[2]});
		await BACMARSLPTOKENPoolPvVJmZL.getReward.call({from: accounts[4]});
		const uint8R9Gq2Qc = await BACMARSLPTOKENPoolPvVJmZL.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLZFBDmM = "MQmyn73MfOwdIjueSjIScmHMSzHFyaE"
		const string9JejjK = "yG5sy"
		const uintCygCktC = BigInt("165")
		const BACMARSLPTOKENPoolebnpnTK = await BACMARSLPTOKENPool.new(stringLZFBDmM, string9JejjK, uintCygCktC, {from: accounts[0]});
		await BACMARSLPTOKENPoolebnpnTK.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolebnpnTK.getReward.call({from: accounts[2]});
		const stringgd8lLAA = await BACMARSLPTOKENPoolebnpnTK.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolebnpnTK.onlyRewardsDistribution.call({from: accounts[5]});
		await BACMARSLPTOKENPoolebnpnTK.getReward.call({from: accounts[1]});
		const uint256Ncf09Hv = await BACMARSLPTOKENPoolebnpnTK.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBtcQBe1 = "hPwFukxYFlVYomgXWfMVLO1TdPDtiFlBjE9Kg36lySWfK9Ne2rDVzatBZM9Apn2F7qyhdM4j6q44MdtiGjn6KXKbdO2u"
		const stringCvEzdd7 = "MyWdAtXF8ovtaXKcGHaST9Yw1E3hmiCo8nmNGebe7fzzPwJqHGr2rDIpwCYtfBps57XDOr3ffT1OtUFSTo8cqIrKR19tIKH"
		const uintOgX1wY9 = BigInt("128")
		const BACMARSLPTOKENPoolGymFEG = await BACMARSLPTOKENPool.new(stringBtcQBe1, stringCvEzdd7, uintOgX1wY9, {from: accounts[2]});
		const addressTVGNYOM = accounts[0]
		const uintcoyercT = BigInt("809")
		const uint256dw8WrKr = await BACMARSLPTOKENPoolGymFEG.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringTCCR1bC = await BACMARSLPTOKENPoolGymFEG.symbol.call({from: accounts[1]});
		const uint256nKeslDB = await BACMARSLPTOKENPoolGymFEG.balanceOf.call(addressTVGNYOM, {from: accounts[5]});
		const uint256QIZjiA9 = await BACMARSLPTOKENPoolGymFEG.stake.call(uintcoyercT, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKGxGbzz = "4XE6qF36cYaWi3wYGBMrKhUGVeXaM0N5OpWSxyJXw"
		const stringaZM4hMH = "METJBnjOG4Q1kLbFgdV4MrSoZwrA5dtFFW798HHQBsCPSb5iNw"
		const uintfwV1ysp = BigInt("186")
		const BACMARSLPTOKENPoolZPry6c = await BACMARSLPTOKENPool.new(stringKGxGbzz, stringaZM4hMH, uintfwV1ysp, {from: accounts[2]});
		const addressjHzc6te = "0x0000000000000000000000000000000000000001"
		const addressZrVg4Hy = accounts[4]
		const stringXXbCOiU = await BACMARSLPTOKENPoolZPry6c.symbol.call({from: accounts[3]});
		const addressXLn9oQ = await BACMARSLPTOKENPoolZPry6c.updateReward.call(addressjHzc6te, {from: accounts[1]});
		const uint8vZKTFKD = await BACMARSLPTOKENPoolZPry6c.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolZPry6c.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HFaNDFE = await BACMARSLPTOKENPoolZPry6c.earned.call(addressZrVg4Hy, {from: accounts[5]});
		const uint256ToOFMly = await BACMARSLPTOKENPoolZPry6c.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringovDeLLN = "IIYT2bgKhEq873yrDlu3FyZQBQMOxphxlTRWL2iBmzE"
		const string3JEkwJ = "CP57QhI9gf9ssSjNfpmVs4nOiD8jdC"
		const uintHYnA3T9 = BigInt("216")
		const BACMARSLPTOKENPoolhIi19aR = await BACMARSLPTOKENPool.new(stringovDeLLN, string3JEkwJ, uintHYnA3T9, {from: accounts[2]});
		const uintvYuW94d = BigInt("709")
		const addressoVmZ78 = "0x0000000000000000000000000000000000000001"
		const uint256UVzfNMe = await BACMARSLPTOKENPoolhIi19aR.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolhIi19aR.nonReentrant.call({from: accounts[3]});
		const uint256ZKvLbf = await BACMARSLPTOKENPoolhIi19aR.stake.call(uintvYuW94d, {from: accounts[1]});
		const uint256K8phsLc = await BACMARSLPTOKENPoolhIi19aR.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ghziK3 = await BACMARSLPTOKENPoolhIi19aR.earned.call(addressoVmZ78, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfvScsgP = "2HNWRUVklNU64eADfdnMpAPrudnmB271N3yDmgfMVlPVNkHTMqX85G8V4HtXg24nOOqpq62T5hfBGoEfWFI7shb2EBL69d"
		const stringIJr9zow = "p5pAJQitNznU7UxgJrPJPo"
		const uintGAEQClu = BigInt("242")
		const BACMARSLPTOKENPoolEqfKiB = await BACMARSLPTOKENPool.new(stringfvScsgP, stringIJr9zow, uintGAEQClu, {from: accounts[1]});
		const uintMKAef8W = BigInt("1813")
		const addressYtriyk = accounts[1]
		const uint256ohf6ZwR = await BACMARSLPTOKENPoolEqfKiB.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EbT1MO = await BACMARSLPTOKENPoolEqfKiB.withdraw.call(uintMKAef8W, {from: accounts[1]});
		const uint256p7cDVP2 = await BACMARSLPTOKENPoolEqfKiB.earned.call(addressYtriyk, {from: accounts[3]});
		await BACMARSLPTOKENPoolEqfKiB.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringq9A0wJ = "ePUCjrxPp2ydQMr8yWytcvPxp6"
		const stringvlfVf6a = "LcKdxslvowGfwoVYiqAkigBBpbCyMgQUVfI5Kiz0qiWl9amRH3YWUpaDDeqlmKtPSBWA4jzqkCBFvKc5cmNoGWSYsuk"
		const uintfp31k9 = BigInt("193")
		const BACMARSLPTOKENPoolNEQjNK = await BACMARSLPTOKENPool.new(stringq9A0wJ, stringvlfVf6a, uintfp31k9, {from: accounts[5]});
		const uintJ8Igx6C = BigInt("282")
		const addressQClqKe5 = accounts[4]
		await BACMARSLPTOKENPoolNEQjNK.nonReentrant.call({from: accounts[1]});
		const uint256jC4KSTY = await BACMARSLPTOKENPoolNEQjNK.stake.call(uintJ8Igx6C, {from: accounts[2]});
		const uint256SZTpaH5 = await BACMARSLPTOKENPoolNEQjNK.balanceOf.call(addressQClqKe5, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUh3rnhH = "EIicDqxwPubEiNDwe6ug0WXSaRxnTFkiJkTVf3g0qBNqeHcK5KPhWmFE"
		const stringcI9DQfD = "RGm8G1nXjOoB6ITLumBKybun7DrpoHEApIy7xMjmSTSD6co6giVwt"
		const uinta0xdYXu = BigInt("111")
		const BACMARSLPTOKENPoolyfwOiha = await BACMARSLPTOKENPool.new(stringUh3rnhH, stringcI9DQfD, uinta0xdYXu, {from: accounts[2]});
		const uintZVZN3U = BigInt("1210")
		const uint256HrNbWdB = await BACMARSLPTOKENPoolyfwOiha.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256wXcMHa0 = await BACMARSLPTOKENPoolyfwOiha.stake.call(uintZVZN3U, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgZhHuo2 = "Iqz9XnfZzCpn452S8rRcIHA9P5P6m8tX4bXUCQ94nri9bBiBtupOn8odjwEeM1o4fs"
		const stringNaE5Xz = "Nf8Ci94nBJeyuPSojD3U24eeErHbS2YjSVBS5p3iZNkfeu3IfR1O8XUtDAUxz0aj9GMP3h9QbQ8E"
		const uintFSRxeC3 = BigInt("47")
		const BACMARSLPTOKENPoolEjrETK = await BACMARSLPTOKENPool.new(stringgZhHuo2, stringNaE5Xz, uintFSRxeC3, {from: "0x0000000000000000000000000000000000000001"});
		const uintpEoDEAO = BigInt("1745")
		const uintn4vvSdp = BigInt("889")
		const uinthSaadU = BigInt("975")
		const uint8kUKTUlf = await BACMARSLPTOKENPoolEjrETK.decimals.call({from: accounts[0]});
		const uint256B1afCGv = await BACMARSLPTOKENPoolEjrETK.notifyRewardAmount.call(uintpEoDEAO, {from: accounts[3]});
		const uint256Djy5Rj7 = await BACMARSLPTOKENPoolEjrETK.notifyRewardAmount.call(uintn4vvSdp, {from: accounts[2]});
		const uint256uCOo2GC = await BACMARSLPTOKENPoolEjrETK.notifyRewardAmount.call(uinthSaadU, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT6sGoL = "pwYZXr3EOJSU9vO4exm5ETQW1UdfWSsID"
		const stringNI3Vv4r = "yAbgpd2VRvfwt2fGGZy99AGIlg2zg4sZlpHTd45wMDDVaPNecidS9Iw5HJOF4uAurPVMgkW8xwBOfw0UP"
		const uintjak8jeC = BigInt("28")
		const BACMARSLPTOKENPooltN2W8Zg = await BACMARSLPTOKENPool.new(stringT6sGoL, stringNI3Vv4r, uintjak8jeC, {from: accounts[4]});
		const uintF0vrPtN = BigInt("261")
		const string6U9GHR = await BACMARSLPTOKENPooltN2W8Zg.name.call({from: accounts[4]});
		await BACMARSLPTOKENPooltN2W8Zg.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPooltN2W8Zg.getReward.call({from: accounts[0]});
		const stringAhHzuQ2 = await BACMARSLPTOKENPooltN2W8Zg.name.call({from: accounts[1]});
		const uint256jQLrD6F = await BACMARSLPTOKENPooltN2W8Zg.withdraw.call(uintF0vrPtN, {from: accounts[2]});
		const uint256QakkpIL = await BACMARSLPTOKENPooltN2W8Zg.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressfwfTQ9i = accounts[0]
		const addressIUidI4s = accounts[2]
		const addressC5vx5f5 = accounts[5]
		const BACMARSLPTOKENPoolilOrX3Y = await BACMARSLPTOKENPool.new(addressfwfTQ9i, addressIUidI4s, addressC5vx5f5, {from: "0x0000000000000000000000000000000000000001"});
		const bytelWBv1em = "0x0a0d1c011e130e0e0f0b1a1a04171203161d19061615061815160d050a130b19"
		const byteBGY0aJ6 = "0x080403151b09141d070f0a1a190906020a06041600161709200f14091f031413"
		const uintPsiC72V = BigInt("30")
		const uintN47UhrK = BigInt("1829")
		const uintK0KHnAC = BigInt("1399")
		const uintJwhWD9t = BigInt("1296")
		const addressHPypadQ = accounts[1]
		const uint256RBSWpaI = await BACMARSLPTOKENPoolilOrX3Y.stakeWithPermit.call(uintK0KHnAC, uintN47UhrK, uintPsiC72V, byteBGY0aJ6, bytelWBv1em, {from: accounts[5]});
		const uint256ihfawhu = await BACMARSLPTOKENPoolilOrX3Y.notifyRewardAmount.call(uintJwhWD9t, {from: accounts[4]});
		const uint256iABYmV7 = await BACMARSLPTOKENPoolilOrX3Y.earned.call(addressHPypadQ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG5idJTS = "tlDQenhItr6fIWox2k4YjssIIyzBCuhzc0UJmAAtgVhR3DInyxsAS5IKLaqKdRJPAWf"
		const stringDDQH39J = "DEpZtNg38ZIrMPr8u8QuOcSzpDri39eIpjqcPsRY18PmXhodLQKQ9as6bUuOxs8k3965Kl0P8a2FLGBXdmdQMutyqlTL"
		const uintlmTSvcH = BigInt("75")
		const BACMARSLPTOKENPoolQCp64Pu = await BACMARSLPTOKENPool.new(stringG5idJTS, stringDDQH39J, uintlmTSvcH, {from: accounts[0]});
		const byteiNYS2hO = "0x020e040a1b1a0c0a1520061a0f031d1f0f03110b0f1d1f0d150c0310111f0d04"
		const bytetSRkfQ = "0x1b1e090e1219111e0c1f0b1608021c13160a120a112003050e0e122005120809"
		const uintbs7CJGv = BigInt("94")
		const uinti4g00B = BigInt("1748")
		const uintSootnev = BigInt("876")
		const uint256KZtJu3c = await BACMARSLPTOKENPoolQCp64Pu.getRewardForDuration.call({from: accounts[4]});
		const uint256L25a37p = await BACMARSLPTOKENPoolQCp64Pu.stakeWithPermit.call(uintSootnev, uinti4g00B, uintbs7CJGv, bytetSRkfQ, byteiNYS2hO, {from: accounts[1]});
		const uint256vBvNPdh = await BACMARSLPTOKENPoolQCp64Pu.totalSupply.call({from: accounts[4]});
		const uint8mvPgZ9N = await BACMARSLPTOKENPoolQCp64Pu.decimals.call({from: accounts[3]});
		const stringtIvtZ8l = await BACMARSLPTOKENPoolQCp64Pu.symbol.call({from: accounts[1]});
		const stringg0jlvt = await BACMARSLPTOKENPoolQCp64Pu.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringz4PI6GY = "6nhsEAFSbZbebGKSf"
		const stringgviGyyF = "2aHnhcuPX6mscwB0Yp0gNVjx8nuzYk4uVv3Sl6mltbpHETJdX1q3vlT7LdSebRx"
		const uinttTtRd0x = BigInt("119")
		const BACMARSLPTOKENPoolQUPnGPa = await BACMARSLPTOKENPool.new(stringz4PI6GY, stringgviGyyF, uinttTtRd0x, {from: accounts[4]});
		const addressXyzTE4S = accounts[1]
		const bytejfRIMTi = "0x2001081c031b120a130d00140217050e161805130c1403170d151e1a0a041d0a"
		const bytew674e7S = "0x0e1b011d0e0d1019031d071c061117071c061317141907020f130f07201e0e10"
		const uintvC9VkzI = BigInt("203")
		const uintDWE3kcb = BigInt("599")
		const uintcrLn7Mu = BigInt("2032")
		const byteEnhyXah = "0x0d000d1f07000f1a151d13131e101f0b1b181f101618161d0b041d110011101d"
		const bytea7ZYaO = "0x11161a1e1b001219021e051b1a1e0418140e1d031f07170d1a1c1f10130a0908"
		const uintoxbUHD = BigInt("179")
		const uintThhCUe = BigInt("1015")
		const uintOLC5rM8 = BigInt("1749")
		await BACMARSLPTOKENPoolQUPnGPa.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256e9ql1pn = await BACMARSLPTOKENPoolQUPnGPa.earned.call(addressXyzTE4S, {from: accounts[1]});
		const uint256QLfCi3q = await BACMARSLPTOKENPoolQUPnGPa.stakeWithPermit.call(uintcrLn7Mu, uintDWE3kcb, uintvC9VkzI, bytew674e7S, bytejfRIMTi, {from: accounts[3]});
		const uint256fWMoNeR = await BACMARSLPTOKENPoolQUPnGPa.stakeWithPermit.call(uintOLC5rM8, uintThhCUe, uintoxbUHD, bytea7ZYaO, byteEnhyXah, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNsZj4Kx = "xjv8CzvvdjPk1GufxX0ezyb8p4SETn1FMaOztLnqnnsYMGYGk1dJF9LV8S5rbv12UNagrPfkVJydScpMAkycc23XC6FLrzw8"
		const stringLGAhZTc = "SFdPqynW7G96OqCM7ZpxbO4UKAnDDb1UaGbBFlchfAgfAqdA6xr1KELFs9WVD54tZ"
		const uintDi4fNBz = BigInt("16")
		const BACMARSLPTOKENPoolpMh3daf = await BACMARSLPTOKENPool.new(stringNsZj4Kx, stringLGAhZTc, uintDi4fNBz, {from: accounts[0]});
		const uintY2qOCR7 = BigInt("218")
		const uint256x0RGjfD = await BACMARSLPTOKENPoolpMh3daf.notifyRewardAmount.call(uintY2qOCR7, {from: accounts[4]});
		const uint256uJhw7m = await BACMARSLPTOKENPoolpMh3daf.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolpMh3daf.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAlhO7OU = "WfTETkP5zUTUgTjANv9HYJO5"
		const stringvJCQPQJ = "AXXbLl7TY1nXB1Y7mg9pmPMvvkKASDVRtB5WtFYPuJ3gELYjoorR1xg58WQQ"
		const uintXEr0zvO = BigInt("93")
		const BACMARSLPTOKENPoolbAjIF3k = await BACMARSLPTOKENPool.new(stringAlhO7OU, stringvJCQPQJ, uintXEr0zvO, {from: accounts[3]});
		const bytePHqZF1e = "0x0c0b1a1d0e1612121d150a09080a140710091e1b0c18011f1a12031310101e03"
		const byteuvWqKM = "0x1d181e06061f0d0e121d1d0c0f1e0b121b061c0f161e0a0c0e2001161b16200a"
		const uintJ2go6Kw = BigInt("114")
		const uintLDT8HL0 = BigInt("490")
		const uintmbwurko = BigInt("1218")
		const uintUB3rmwC = BigInt("448")
		const uint256n1Ky8su = await BACMARSLPTOKENPoolbAjIF3k.lastTimeRewardApplicable.call({from: accounts[0]});
		await BACMARSLPTOKENPoolbAjIF3k.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zSpps1 = await BACMARSLPTOKENPoolbAjIF3k.stakeWithPermit.call(uintmbwurko, uintLDT8HL0, uintJ2go6Kw, byteuvWqKM, bytePHqZF1e, {from: accounts[4]});
		const uint256GASRmWw = await BACMARSLPTOKENPoolbAjIF3k.notifyRewardAmount.call(uintUB3rmwC, {from: accounts[4]});
		const uint256AhRjbP = await BACMARSLPTOKENPoolbAjIF3k.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringap4DctE = "trAbtX5UEmP5ngl2aYihxDHs1IkASB7Ouej"
		const stringU1w2ml = "e3lKS57cCJgW1iMqXT"
		const uintO18YBf = BigInt("157")
		const BACMARSLPTOKENPoolVkX0UC = await BACMARSLPTOKENPool.new(stringap4DctE, stringU1w2ml, uintO18YBf, {from: accounts[3]});
		const uintA2Yzud9 = BigInt("1338")
		const addressd56NPlW = "0x0000000000000000000000000000000000000001"
		const uint256th3hvkG = await BACMARSLPTOKENPoolVkX0UC.notifyRewardAmount.call(uintA2Yzud9, {from: accounts[3]});
		const stringwqiJ1sb = await BACMARSLPTOKENPoolVkX0UC.name.call({from: accounts[1]});
		const stringrSlaGP5 = await BACMARSLPTOKENPoolVkX0UC.name.call({from: accounts[2]});
		await BACMARSLPTOKENPoolVkX0UC.exit.call({from: accounts[0]});
		const uint256bRUIlna = await BACMARSLPTOKENPoolVkX0UC.getRewardForDuration.call({from: accounts[2]});
		const uint256OzXWdyG = await BACMARSLPTOKENPoolVkX0UC.earned.call(addressd56NPlW, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUkEMkWX = "z14EhvwdoQUk6bcOOHUY8f6xBHhUyPYf15S9Y5XfuNTrVQ5bRTbADJ414b1Sk7mJNEFKuJNr3TkXAyL2NOINmJf9YFb"
		const stringhrwwm3d = "ciDl4AYzRzmhfvmca"
		const uintFY4Sbf = BigInt("109")
		const BACMARSLPTOKENPoolJtgSNpy = await BACMARSLPTOKENPool.new(stringUkEMkWX, stringhrwwm3d, uintFY4Sbf, {from: accounts[0]});
		const addressyG0flv2 = accounts[3]
		const uintE454XJ8 = BigInt("1756")
		const uintBO4SAjE = BigInt("514")
		const addressIiqtCoh = await BACMARSLPTOKENPoolJtgSNpy.updateReward.call(addressyG0flv2, {from: accounts[2]});
		const uint256cE3QP4I = await BACMARSLPTOKENPoolJtgSNpy.stake.call(uintE454XJ8, {from: accounts[2]});
		await BACMARSLPTOKENPoolJtgSNpy.nonReentrant.call({from: accounts[3]});
		const uint256gLjd8xV = await BACMARSLPTOKENPoolJtgSNpy.withdraw.call(uintBO4SAjE, {from: accounts[5]});
		const uint256pckWOFQ = await BACMARSLPTOKENPoolJtgSNpy.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeouAPSw = "eUuLpK3gKw7UoA20strgSSxRzblO8Ktz1R5gAJYEkvzyv2d2RBQ1I4iM0QSggct"
		const stringyavwLwn = "beRt6YobQdSPsk4Dqb2wQZvTAi3SCmPtF0Qw5IKqBQTY"
		const uinti2EfDEM = BigInt("202")
		const BACMARSLPTOKENPoolQSscX3f = await BACMARSLPTOKENPool.new(stringeouAPSw, stringyavwLwn, uinti2EfDEM, {from: accounts[1]});
		await BACMARSLPTOKENPoolQSscX3f.getReward.call({from: accounts[4]});
		await BACMARSLPTOKENPoolQSscX3f.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringP0piP50 = "SBg9ZALS0kJi1pYXFDoyatTN5EIsBbKHRgNxHFFbrREmtzbe6vgb4o9GCshvusTB6"
		const stringDuv2juW = "aTW4eyXEYUTC5nVE0B0M9FrmfWO1St4c4cP68qHURtBjoqnOUT9yIqJ6bb0xxxJFsxGKsd5A5B108Gm"
		const uintrmZta7 = BigInt("40")
		const BACMARSLPTOKENPoolEOOm8cq = await BACMARSLPTOKENPool.new(stringP0piP50, stringDuv2juW, uintrmZta7, {from: accounts[3]});
		const addressfeiD85D = accounts[3]
		const addressQUkum5B = accounts[3]
		await BACMARSLPTOKENPoolEOOm8cq.getReward.call({from: accounts[4]});
		const uint256LBnmOKW = await BACMARSLPTOKENPoolEOOm8cq.earned.call(addressfeiD85D, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CKrYNIh = await BACMARSLPTOKENPoolEOOm8cq.balanceOf.call(addressQUkum5B, {from: accounts[1]});
		await BACMARSLPTOKENPoolEOOm8cq.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmGMx2qP = "OPocJCnbVXtUPekxM7RSbWmvmiZKzUR5P3NtzOTRWwJbhNym7Q5vPze02mbQ1uoAHPKJB1TMqafRfVKwDIf7N6G"
		const stringm6UuGZ9 = "qps5n5WPc9ydj5LseJCQbF6udzDNiGHFzz6DHLR8wDZpx0G9ej5E2G9NKVOjL36sHsgtDgIkF728FV3WRGJn5OXqKV"
		const uintxxWbtBp = BigInt("129")
		const BACMARSLPTOKENPoolTzyIn7k = await BACMARSLPTOKENPool.new(stringmGMx2qP, stringm6UuGZ9, uintxxWbtBp, {from: accounts[4]});
		const uintRxwOGYe = BigInt("1911")
		const uintcW80hzp = BigInt("859")
		const uint256wFjPKMt = await BACMARSLPTOKENPoolTzyIn7k.notifyRewardAmount.call(uintRxwOGYe, {from: accounts[5]});
		const uint256aR0wdVw = await BACMARSLPTOKENPoolTzyIn7k.stake.call(uintcW80hzp, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRG1oowM = "TcdOPpyGv2tjzJCggbZLnRNqBOocK4TIzPHEE8DRkw"
		const stringfwez6UQ = "xj1iAV2QfNLxLsEiMLvVHauuGwzIyNro"
		const uint7xEIRx = BigInt("251")
		const BACMARSLPTOKENPoolddRzKqF = await BACMARSLPTOKENPool.new(stringRG1oowM, stringfwez6UQ, uint7xEIRx, {from: accounts[0]});
		const uintc6YATP6 = BigInt("1491")
		const uintu3XEy2y = BigInt("75")
		const stringEYpFrPW = await BACMARSLPTOKENPoolddRzKqF.symbol.call({from: accounts[3]});
		const uint256SZi0MQC = await BACMARSLPTOKENPoolddRzKqF.stake.call(uintc6YATP6, {from: accounts[3]});
		await BACMARSLPTOKENPoolddRzKqF.exit.call({from: accounts[4]});
		const uint256rJtsP4N = await BACMARSLPTOKENPoolddRzKqF.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolddRzKqF.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256z1bLGz5 = await BACMARSLPTOKENPoolddRzKqF.stake.call(uintu3XEy2y, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyBPWLXS = "KJOzgoIhFT"
		const stringvg909RM = "hhfFrSx54XAOZkdNaxbnW"
		const uintyIMDArd = BigInt("181")
		const BACMARSLPTOKENPoolRtuSy8v = await BACMARSLPTOKENPool.new(stringyBPWLXS, stringvg909RM, uintyIMDArd, {from: accounts[3]});
		const addressk0sGuyI = accounts[2]
		const addresscQiTjF5 = accounts[4]
		const uint256rYHNrld = await BACMARSLPTOKENPoolRtuSy8v.balanceOf.call(addressk0sGuyI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kScazCe = await BACMARSLPTOKENPoolRtuSy8v.lastTimeRewardApplicable.call({from: accounts[4]});
		const stringLVhjyg7 = await BACMARSLPTOKENPoolRtuSy8v.name.call({from: accounts[3]});
		const uint256UlXJZoq = await BACMARSLPTOKENPoolRtuSy8v.balanceOf.call(addresscQiTjF5, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDMSpWyS = "T"
		const stringrWhPB12 = "qeZLJAlouyjvDWNQn4lQ1arV"
		const uintjfA9mkD = BigInt("134")
		const BACMARSLPTOKENPoolft2t8cI = await BACMARSLPTOKENPool.new(stringDMSpWyS, stringrWhPB12, uintjfA9mkD, {from: accounts[2]});
		const address3ZUxMp = accounts[5]
		const bytevLv9RN = "0x041f0e0614130c1609050f18091f081f0e070b10080b1c1619000216140f1a16"
		const byteU3FLAZ5 = "0x08161d0c17081b1a0b100f191e17161a050a0e1c1101180e0e0c0f0218181916"
		const uintdjwaCMg = BigInt("103")
		const uintWiCme3X = BigInt("1139")
		const uintzCWbxfl = BigInt("2033")
		const uint256L2ICt5v = await BACMARSLPTOKENPoolft2t8cI.earned.call(address3ZUxMp, {from: accounts[4]});
		const uint256weiD5Oy = await BACMARSLPTOKENPoolft2t8cI.totalSupply.call({from: accounts[3]});
		const uint256kLfYmG5 = await BACMARSLPTOKENPoolft2t8cI.stakeWithPermit.call(uintzCWbxfl, uintWiCme3X, uintdjwaCMg, byteU3FLAZ5, bytevLv9RN, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWQfXUmp = "LkOmChY9E2QpH1D"
		const stringuPB5Om = "bcGfT5Q4nuJf7W"
		const uinteq2AgcF = BigInt("235")
		const BACMARSLPTOKENPoolMVaS6it = await BACMARSLPTOKENPool.new(stringWQfXUmp, stringuPB5Om, uinteq2AgcF, {from: accounts[1]});
		const uintuKxGdgX = BigInt("1190")
		const bytelN65Jtg = "0x0b13071508141c0b01111c121d0904031b16151906171f0f1e0f010109001920"
		const byteJYRapgv = "0x1a071a1e06071d020a09171b1817050e0d0e02191616160904101c161a0c1d0b"
		const uintEnY7DFD = BigInt("71")
		const uintoQs1ktN = BigInt("730")
		const uinteW55jc2 = BigInt("1520")
		const uint256jlNa8OJ = await BACMARSLPTOKENPoolMVaS6it.notifyRewardAmount.call(uintuKxGdgX, {from: accounts[2]});
		const uint256DT9XyLO = await BACMARSLPTOKENPoolMVaS6it.stakeWithPermit.call(uinteW55jc2, uintoQs1ktN, uintEnY7DFD, byteJYRapgv, bytelN65Jtg, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqvhcL9j = "XLXM7tRo8OXsyFcz5mOJFjP5jHXDNY6Olc1asb9tPCDQnowbYgTkY2d8q43cU8uDgei"
		const stringqpDh4CZ = "Glzx33v47HKvkGw6v1cUsciLWxR"
		const uintEYf2yZF = BigInt("84")
		const BACMARSLPTOKENPoolyHBFAzY = await BACMARSLPTOKENPool.new(stringqvhcL9j, stringqpDh4CZ, uintEYf2yZF, {from: accounts[4]});
		const uint256pBXPWH5 = await BACMARSLPTOKENPoolyHBFAzY.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPoolyHBFAzY.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolyHBFAzY.getReward.call({from: accounts[0]});
		const uint256uDdNHfz = await BACMARSLPTOKENPoolyHBFAzY.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256cV0hP0 = await BACMARSLPTOKENPoolyHBFAzY.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256vO70hyf = await BACMARSLPTOKENPoolyHBFAzY.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVUMEMru = "cnTn25sjiNzwrNocA6syL53PMhoQ1c9j1Y4XZSpmjFJ5yV08M"
		const stringpNX5dJJ = "cN7JJ0S8Uy5ldOrij57l8EBfefl6mdLMzPJHoYL3FPX1VlbnvmA8RwZjrV07VMIqGQotHLK3CFRMsLhH1aYudzfpPvU3Whz7r"
		const uintLZWg3eI = BigInt("156")
		const BACMARSLPTOKENPoolEusRDiL = await BACMARSLPTOKENPool.new(stringVUMEMru, stringpNX5dJJ, uintLZWg3eI, {from: accounts[2]});
		const uintfTyhQG6 = BigInt("1594")
		const uintVOaAyav = BigInt("842")
		const uint256E5UEZGc = await BACMARSLPTOKENPoolEusRDiL.stake.call(uintfTyhQG6, {from: accounts[0]});
		const uint256BOIVCss = await BACMARSLPTOKENPoolEusRDiL.notifyRewardAmount.call(uintVOaAyav, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDbxeOSH = "HjzkB5llzv9KADY4MwtwxJUkFisnTj1Khr9YntoHyxFBh6BN6ScXWFAjPIN95N9LH4fFUOnwItbbQa"
		const stringsf8W36W = "MSbnpoxzuJ7pMtCEL37G3VcK0sothAnlQqCPaPBASFC3dXqCoXKsnFknOnsDSQ"
		const uintsl6FvWG = BigInt("172")
		const BACMARSLPTOKENPoolzWjuAhN = await BACMARSLPTOKENPool.new(stringDbxeOSH, stringsf8W36W, uintsl6FvWG, {from: accounts[2]});
		const uintbWfb52f = BigInt("744")
		const byteizsgmL3 = "0x0c100d191d1800100a110f1e1305061f121701170f160d0008160d030f180405"
		const byteAP8Vki = "0x1a151f13031d0a0f0e17091d131e0b0c0717060c19051c0c13120d0d1d11070e"
		const uintZyj02Yt = BigInt("217")
		const uinti97MBf = BigInt("1462")
		const uinterx3q98 = BigInt("1324")
		const uintgRN8bo = BigInt("1215")
		const uint256lL4OZ2K = await BACMARSLPTOKENPoolzWjuAhN.withdraw.call(uintbWfb52f, {from: accounts[0]});
		const uint256IK7FYhv = await BACMARSLPTOKENPoolzWjuAhN.stakeWithPermit.call(uinterx3q98, uinti97MBf, uintZyj02Yt, byteAP8Vki, byteizsgmL3, {from: accounts[4]});
		await BACMARSLPTOKENPoolzWjuAhN.getReward.call({from: accounts[4]});
		const uint256Njq33B = await BACMARSLPTOKENPoolzWjuAhN.notifyRewardAmount.call(uintgRN8bo, {from: accounts[3]});
		const stringCKhaOld = await BACMARSLPTOKENPoolzWjuAhN.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT7hC0LX = "2YdM8hwrEehV4Oj3"
		const strings3fA2g = "bl3Ku4FdUnr2KSuuzVVJaJSJamG9eTw5Bisz68vC7XK3FI1heG8Cx6a2jBrDPlhEXhe"
		const uintC77KrYV = BigInt("149")
		const BACMARSLPTOKENPooltkSEr6B = await BACMARSLPTOKENPool.new(stringT7hC0LX, strings3fA2g, uintC77KrYV, {from: accounts[2]});
		const address358mej = accounts[2]
		const stringzlFY6dR = await BACMARSLPTOKENPooltkSEr6B.symbol.call({from: accounts[3]});
		const uint256mHVGmYp = await BACMARSLPTOKENPooltkSEr6B.totalSupply.call({from: accounts[0]});
		const uint8sag02Jp = await BACMARSLPTOKENPooltkSEr6B.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringRoqH1DP = await BACMARSLPTOKENPooltkSEr6B.symbol.call({from: accounts[3]});
		const uint256NQDgsFc = await BACMARSLPTOKENPooltkSEr6B.earned.call(address358mej, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNfhWXl = "qqcgV3c3Kh3xUgXSmof1Sg5gtvp6vx0BimKQ3leYVyxkugSRjCIHTHsfLDspB0hXm9UJAt165iYJ35V98KFVOesyr3v3"
		const string0rR8BS = "ZoRNYGw8PlcSbCcl6hf6vwdOdYbMRHo0rlw3pRYxCsBnaOxNrfe6hUQyfXBrIwfrKLDmPEPRfAe7XTHTSp"
		const uintESv1H8I = BigInt("187")
		const BACMARSLPTOKENPoolG0h8bDH = await BACMARSLPTOKENPool.new(stringNfhWXl, string0rR8BS, uintESv1H8I, {from: accounts[3]});
		const addressuoWllwV = accounts[4]
		await BACMARSLPTOKENPoolG0h8bDH.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolG0h8bDH.nonReentrant.call({from: accounts[2]});
		const uint256NFT9Yql = await BACMARSLPTOKENPoolG0h8bDH.earned.call(addressuoWllwV, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqna1Vwg = "nT8rts29ny0YqCnT4MWpdOyVLJV2iBzzoe3Xw6uJuDsbCy0bwF9spGl3FI7nTXZ2Z"
		const stringbw5kVS6 = "dqtEu2myfY9W2EzEJEYKEtmZEHRNxjxjyjVGe6qjYOkAgMA6dFWbOyfHS79TqqivonDsUw9RJ94Fb4JJW"
		const uintkUxfURC = BigInt("231")
		const BACMARSLPTOKENPoolSBeM5WI = await BACMARSLPTOKENPool.new(stringqna1Vwg, stringbw5kVS6, uintkUxfURC, {from: accounts[3]});
		const byteQkkQapL = "0x0a090f070406071a1d0507141c0a08070e08030e180612160b041d1d07181708"
		const byteocJHyP = "0x151c1f0b1e090c10030c0f0e0a0e010e0d201a022004200c101d1114120c0507"
		const uintNZZGMR = BigInt("119")
		const uintahQv08p = BigInt("768")
		const uintJh0Oogx = BigInt("258")
		const uint8riqM7TQ = await BACMARSLPTOKENPoolSBeM5WI.decimals.call({from: accounts[3]});
		const stringsbpOre = await BACMARSLPTOKENPoolSBeM5WI.symbol.call({from: accounts[0]});
		const uint8EZ64yTp = await BACMARSLPTOKENPoolSBeM5WI.decimals.call({from: accounts[1]});
		const uint256pBmamnE = await BACMARSLPTOKENPoolSBeM5WI.stakeWithPermit.call(uintJh0Oogx, uintahQv08p, uintNZZGMR, byteocJHyP, byteQkkQapL, {from: accounts[1]});
	});
})
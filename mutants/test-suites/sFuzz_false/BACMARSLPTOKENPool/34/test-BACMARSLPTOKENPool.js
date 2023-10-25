const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringQLATGYv = "LyeHnvUXo0ziGyRZcBI3mYF7ftqpTVyhbGlwmXn1qawC9g5SkBItKDf71zXw1NBLzwrBhcnR4XAX9BCVx"
		const stringZK4Vw5V = "Yxv4Tbkd0iqQmjZcVAnCDE2z9YfqPiPOwhV"
		const uintLXWbJs = BigInt("118")
		const BACMARSLPTOKENPoolBko3Dyk = await BACMARSLPTOKENPool.new(stringQLATGYv, stringZK4Vw5V, uintLXWbJs, {from: accounts[1]});
		const addressUC5HQIF = accounts[2]
		const uint256vnDn5qf = await BACMARSLPTOKENPoolBko3Dyk.rewardPerToken.call({from: accounts[0]});
		const uint256xA74X3P = await BACMARSLPTOKENPoolBko3Dyk.earned.call(addressUC5HQIF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eqvqMx = await BACMARSLPTOKENPoolBko3Dyk.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm2HEu9P = "y"
		const stringHjahLDo = "ZHO5KKxDpuqy7G66dmqSdEamgRDYMnPJ56PkLJ6ElsS6RpWYYNNiUXEcW6TBl2aiMXHDacgClG5cX6TQm8byprcj2KPyKpsRo"
		const uintNtlNTUT = BigInt("59")
		const BACMARSLPTOKENPoolLYixXR = await BACMARSLPTOKENPool.new(stringm2HEu9P, stringHjahLDo, uintNtlNTUT, {from: accounts[3]});
		const addresst6i0qCY = accounts[5]
		const addressMl85h3P = "0x0000000000000000000000000000000000000001"
		const uint256efadFmN = await BACMARSLPTOKENPoolLYixXR.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256qkTx5jE = await BACMARSLPTOKENPoolLYixXR.balanceOf.call(addresst6i0qCY, {from: accounts[2]});
		await BACMARSLPTOKENPoolLYixXR.nonReentrant.call({from: accounts[4]});
		const uint256qOdMkeD = await BACMARSLPTOKENPoolLYixXR.balanceOf.call(addressMl85h3P, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqm8emS = accounts[4]
		const addressJTOCBv = accounts[4]
		const addressR61CKEs = accounts[4]
		const BACMARSLPTOKENPoolpIaD1gP = await BACMARSLPTOKENPool.new(addressqm8emS, addressJTOCBv, addressR61CKEs, {from: accounts[4]});
		const uint6st0wo = BigInt("581")
		const uintLJQEd2c = BigInt("1361")
		const uintTownLa0 = BigInt("795")
//		const uint8bl6fgDW = await BACMARSLPTOKENPoolpIaD1gP.decimals.call({from: accounts[4]});
//		const uint256LzTJ2lW = await BACMARSLPTOKENPoolpIaD1gP.withdraw.call(uint6st0wo, {from: accounts[0]});
//		await BACMARSLPTOKENPoolpIaD1gP.nonReentrant.call({from: accounts[3]});
//		const uint256dmn9On = await BACMARSLPTOKENPoolpIaD1gP.withdraw.call(uintLJQEd2c, {from: accounts[1]});
//		const uint256uYvXGG5 = await BACMARSLPTOKENPoolpIaD1gP.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256tyBc1ry = await BACMARSLPTOKENPoolpIaD1gP.notifyRewardAmount.call(uintTownLa0, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolpIaD1gP.decimals.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxzy7I3G = "xdBluHJ3ixD6WzYq7MZx55OFWoChwXIrFgqe3AH5RDk8liivQ9roEesiOXqGxfGWQNfXSH"
		const stringpY9O5B = "vDL"
		const uintm8lIqQL = BigInt("190")
		const BACMARSLPTOKENPoolPkK3frN = await BACMARSLPTOKENPool.new(stringxzy7I3G, stringpY9O5B, uintm8lIqQL, {from: accounts[2]});
		const addressOOuJx89 = accounts[0]
		const addressjGQUzw = await BACMARSLPTOKENPoolPkK3frN.updateReward.call(addressOOuJx89, {from: accounts[4]});
		await BACMARSLPTOKENPoolPkK3frN.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwSxxWL = "OIN7FpSPd5IMTwbkNop0b4At4VCVORo236fsJm5iQuLJxZLR00PFlwmwgh5q"
		const stringFEYRZoj = "kfyzDEmHwWNZQTJKaIT7qS93TrixEVm2zAkdQ7a1C86m1MYjxVoUK6"
		const uintdOoNk2Q = BigInt("26")
		const BACMARSLPTOKENPoolyvIZYPH = await BACMARSLPTOKENPool.new(stringwSxxWL, stringFEYRZoj, uintdOoNk2Q, {from: accounts[3]});
		const stringKmA7BF5 = await BACMARSLPTOKENPoolyvIZYPH.symbol.call({from: accounts[4]});
		const uint256jOppDtn = await BACMARSLPTOKENPoolyvIZYPH.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssCmXdgR = accounts[0]
		const addressTBL4uev = accounts[0]
		const addressqm7VOLs = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addresssCmXdgR, addressTBL4uev, addressqm7VOLs, {from: accounts[4]});
		const addressBmhD4yc = accounts[5]
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressBmhD4yc, {from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlfVowkd = "ln9IXKJrdX966mpBQI5vfJheYQDFYBIC7azYM"
		const stringMmI21i0 = "qH"
		const uintkRMlNC = BigInt("120")
		const BACMARSLPTOKENPoolB2lxboV = await BACMARSLPTOKENPool.new(stringlfVowkd, stringMmI21i0, uintkRMlNC, {from: accounts[1]});
		const uintI4kogHa = BigInt("1028")
		const bytejsuZM3m = "0x16020919171f02031e1e130a201c1f0c0f1b0b03021a180613131c0d1d1a0510"
		const byteMOxuhJv = "0x0c0d1311041e13080f1b0a121e00170b110201171916121302040612140a0001"
		const uint6SzoCH = BigInt("108")
		const uintagB11mo = BigInt("1318")
		const uintzTPA3HR = BigInt("792")
		const uintQMfide1 = BigInt("1333")
		const uintd5s6Kim = BigInt("1444")
		const addressu6KMkx = accounts[4]
		const uint8S2Bdv8 = await BACMARSLPTOKENPoolB2lxboV.decimals.call({from: accounts[1]});
		const uint256vEdHPrY = await BACMARSLPTOKENPoolB2lxboV.withdraw.call(uintI4kogHa, {from: accounts[2]});
		const uint256xHkiFZ = await BACMARSLPTOKENPoolB2lxboV.stakeWithPermit.call(uintzTPA3HR, uintagB11mo, uint6SzoCH, byteMOxuhJv, bytejsuZM3m, {from: accounts[3]});
		const uint256Y7Lj6Rl = await BACMARSLPTOKENPoolB2lxboV.notifyRewardAmount.call(uintQMfide1, {from: accounts[1]});
		const uint256YnrXmQe = await BACMARSLPTOKENPoolB2lxboV.withdraw.call(uintd5s6Kim, {from: accounts[3]});
		const uint256zjxVe06 = await BACMARSLPTOKENPoolB2lxboV.earned.call(addressu6KMkx, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZwTdPZD = "QWj98sGO499357gC3aVLjWtyBL5UUCeLTfyaMwXse7W7c8bMtU4p3x0"
		const stringAlfU3RY = "AkDQ3J"
		const uintHTtKi8O = BigInt("213")
		const BACMARSLPTOKENPoolj0LzHQm = await BACMARSLPTOKENPool.new(stringZwTdPZD, stringAlfU3RY, uintHTtKi8O, {from: accounts[4]});
		const uintszmJjfg = BigInt("485")
		const addressvxmo8mW = accounts[0]
		const uint256Zd1T9Mo = await BACMARSLPTOKENPoolj0LzHQm.getRewardForDuration.call({from: accounts[3]});
		const uint256UqzgmYO = await BACMARSLPTOKENPoolj0LzHQm.stake.call(uintszmJjfg, {from: accounts[0]});
		const uint256orO0mZt = await BACMARSLPTOKENPoolj0LzHQm.earned.call(addressvxmo8mW, {from: accounts[3]});
		const uint256rV3SPnL = await BACMARSLPTOKENPoolj0LzHQm.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPoolj0LzHQm.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressDZNTaeK = accounts[0]
		const addressQluFTyU = accounts[0]
		const addressqRZI1RM = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressDZNTaeK, addressQluFTyU, addressqRZI1RM, {from: accounts[4]});
		const addressQOuY4x4 = accounts[5]
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256QPPwmIv = await BACMARSLPTOKENPoolVvuVJ9t.getRewardForDuration.call({from: accounts[1]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressQOuY4x4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8tJrMKsw = await BACMARSLPTOKENPoolVvuVJ9t.decimals.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256QPPwmIv, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.decimals.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressePArQCk = accounts[0]
		const addressiDkMD10 = accounts[0]
		const addressxLBF0AD = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressePArQCk, addressiDkMD10, addressxLBF0AD, {from: accounts[4]});
		const addressB9STjZ = accounts[5]
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
//		await BACMARSLPTOKENPoolVvuVJ9t.getReward.call({from: accounts[2]});
//		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressB9STjZ, {from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});
//		const uint8GOOAxS7 = await BACMARSLPTOKENPoolVvuVJ9t.decimals.call({from: accounts[5]});

		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuMps3io = "zBt6di1udgpY42vVYLhszLNiVUeyrZR7wcd9AvNR4oeIbgTTDVQ0xc5g6yDTStI8pXWr2Ql"
		const stringuJqY1Gb = "AyRNBfF9WGdGnGwfOTZKs4D6Eqczu9mPzhH0EF9pLDg4MsWjEjmv"
		const uintBnC9m9E = BigInt("223")
		const BACMARSLPTOKENPoolzJQ0aMS = await BACMARSLPTOKENPool.new(stringuMps3io, stringuJqY1Gb, uintBnC9m9E, {from: accounts[1]});
		const addressjcSbTiE = accounts[0]
		const uint256bAe7Ay8 = await BACMARSLPTOKENPoolzJQ0aMS.balanceOf.call(addressjcSbTiE, {from: accounts[3]});
		await BACMARSLPTOKENPoolzJQ0aMS.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQF466KZ = accounts[0]
		const addresskYkFjWX = accounts[0]
		const addressl9YlCUP = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressQF466KZ, addresskYkFjWX, addressl9YlCUP, {from: accounts[4]});
		const addressVlKhBDU = accounts[0]
		const byteh2Vhf0 = "0x0213060612090f07031f1d11161209120d150c160d0414110504160d20070519"
		const byteMHldHin = "0x0c15100e1b04150c141208081e1e0e201f09100a14151a1e110602191718101f"
		const uinthX3lu7 = BigInt("11")
		const uinttJo8mrO = BigInt("180")
		const uintLlu2zCy = BigInt("1803")
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressVlKhBDU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vIMTiqd = await BACMARSLPTOKENPoolVvuVJ9t.stakeWithPermit.call(uintLlu2zCy, uinttJo8mrO, uinthX3lu7, byteMHldHin, byteh2Vhf0, {from: accounts[3]});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.stakeWithPermit.call(uintLlu2zCy, uinttJo8mrO, uinthX3lu7, byteMHldHin, byteh2Vhf0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressAeisWY6 = accounts[0]
		const addressUUw0WdG = accounts[0]
		const addressYjZ3zW = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressAeisWY6, addressUUw0WdG, addressYjZ3zW, {from: accounts[4]});
		const addressps9i8aU = accounts[5]
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256CwyjTQT = await BACMARSLPTOKENPoolVvuVJ9t.totalSupply.call({from: accounts[0]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressps9i8aU, {from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256CwyjTQT, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringr1BS2Lj = "OvPcPQ"
		const stringOWuCKk = "eO3BTzxoIvy9x7mEGAOhiIjP6zFnT3uc7Kx2IvweuxLlAy3YvWuqELBY8HaNzUTz40GL2NUQlEjFrlSJsWvVbcruEGP7aMjvBH"
		const uintHVJgwFi = BigInt("49")
		const BACMARSLPTOKENPoolNzC2K8W = await BACMARSLPTOKENPool.new(stringr1BS2Lj, stringOWuCKk, uintHVJgwFi, {from: "0x0000000000000000000000000000000000000001"});
		const addresskQBf9Y = accounts[2]
		const stringmBYE96Z = await BACMARSLPTOKENPoolNzC2K8W.name.call({from: accounts[5]});
		const uint256hxeTv0G = await BACMARSLPTOKENPoolNzC2K8W.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256L5pLgJt = await BACMARSLPTOKENPoolNzC2K8W.earned.call(addresskQBf9Y, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolNzC2K8W.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresspVI4xON = accounts[0]
		const addressK0u9B6T = accounts[0]
		const addressGgKURij = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addresspVI4xON, addressK0u9B6T, addressGgKURij, {from: accounts[4]});
		const addressPvTcHLR = accounts[0]
		const uintMYr65e7 = BigInt("683")
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressPvTcHLR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ry0AIn = await BACMARSLPTOKENPoolVvuVJ9t.stake.call(uintMYr65e7, {from: accounts[4]});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.stake.call(uintMYr65e7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXTQPTUh = "eSL2Jw2qJi8LhBmboCROln0uMlyLaXI7kmYw4F0AYz4kI9qUVNvkIZbI4IYKuuKjiSVHIL1y7gfDIn56hDa0FiCqXRrw"
		const stringxbuZ93d = "PZkIleHnazNVWZV"
		const uintlnyYsJA = BigInt("162")
		const BACMARSLPTOKENPooliZezei = await BACMARSLPTOKENPool.new(stringXTQPTUh, stringxbuZ93d, uintlnyYsJA, {from: accounts[2]});
		const uintNh4ACiX = BigInt("132")
		const uintgjClqnK = BigInt("1260")
		const uint256jysZvPZ = await BACMARSLPTOKENPooliZezei.withdraw.call(uintNh4ACiX, {from: accounts[0]});
		const uint256wjYhbaC = await BACMARSLPTOKENPooliZezei.notifyRewardAmount.call(uintgjClqnK, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPooliZezei.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCTpr5bo = "wKFWb"
		const stringQ7RsfLP = "kjQhnEnLcsEa6Ju3lPMTQ11IUwEi55EiDhn6NnitS722f75u"
		const uintt33AfRu = BigInt("66")
		const BACMARSLPTOKENPoolJrT1jn = await BACMARSLPTOKENPool.new(stringCTpr5bo, stringQ7RsfLP, uintt33AfRu, {from: accounts[4]});
		const addressjCyxVZ4 = accounts[1]
		const byteij0j6re = "0x070f081a0d07041b181a1a1e081110100f051312130f160e08090c0014171f17"
		const bytegLWhsbm = "0x151c1c100a0c201c1c0b07130c1e18110f08011b0d0f0f0e160e050d12200f03"
		const uintHnvep3J = BigInt("118")
		const uintlaoZ0hD = BigInt("1850")
		const uintLuxDNA = BigInt("657")
		const uint256ecjC72n = await BACMARSLPTOKENPoolJrT1jn.getRewardForDuration.call({from: accounts[3]});
		const uint82WGWYo = await BACMARSLPTOKENPoolJrT1jn.decimals.call({from: accounts[1]});
		const uint256nxlf1AA = await BACMARSLPTOKENPoolJrT1jn.balanceOf.call(addressjCyxVZ4, {from: accounts[0]});
		await BACMARSLPTOKENPoolJrT1jn.nonReentrant.call({from: accounts[1]});
		const uint256D3zYVu2 = await BACMARSLPTOKENPoolJrT1jn.stakeWithPermit.call(uintLuxDNA, uintlaoZ0hD, uintHnvep3J, bytegLWhsbm, byteij0j6re, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwTDOkpv = "I28lKo4Pmqq27qVofeWqsR6g5L37wlW1Ewnc0qUErcFraBwPUpy3IgXQI9birdTsNGh"
		const stringJsUR2vr = "ln0CvrYE44QDeGSpk1bGeyFRNvUKM0H6WzT4SzdkHJ98dWR7mmR4VTAqa9nTA4bZ2T33NWgGNtbX"
		const uintAUGMke6 = BigInt("6")
		const BACMARSLPTOKENPoolQB8z3LN = await BACMARSLPTOKENPool.new(stringwTDOkpv, stringJsUR2vr, uintAUGMke6, {from: accounts[2]});
		const addressILTalyQ = accounts[4]
		const addresseefKGu8 = "0x0000000000000000000000000000000000000001"
		const stringDdpjQ2X = await BACMARSLPTOKENPoolQB8z3LN.symbol.call({from: accounts[2]});
		const uint256gLNgja1 = await BACMARSLPTOKENPoolQB8z3LN.earned.call(addressILTalyQ, {from: accounts[3]});
		const uint256NQd8FwU = await BACMARSLPTOKENPoolQB8z3LN.balanceOf.call(addresseefKGu8, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmpKpm9L = accounts[0]
		const addresslmrrV0n = accounts[0]
		const addresshFqhnif = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressmpKpm9L, addresslmrrV0n, addresshFqhnif, {from: accounts[4]});
		const uintR6zp2a7 = BigInt("1498")
//		const uint256zxio3ui = await BACMARSLPTOKENPoolVvuVJ9t.notifyRewardAmount.call(uintR6zp2a7, {from: accounts[1]});
//		const uint256cXebtsb = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolVvuVJ9t.notifyRewardAmount.call(uintR6zp2a7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTSbGxG = accounts[0]
		const addressh7DOPGm = accounts[0]
		const addressNCETJAm = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressTSbGxG, addressh7DOPGm, addressNCETJAm, {from: accounts[4]});
		const uintytHRen = BigInt("2028")
		const addresspnp63QJ = accounts[4]
//		const uint256mXhnYu3 = await BACMARSLPTOKENPoolVvuVJ9t.notifyRewardAmount.call(uintytHRen, {from: accounts[0]});
//		const uint256y52m4jS = await BACMARSLPTOKENPoolVvuVJ9t.earned.call(addresspnp63QJ, {from: accounts[2]});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolVvuVJ9t.notifyRewardAmount.call(uintytHRen, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringB1jYBiK = "VrxlB4AYSmd9Cd6PuwyOZ0VQhc4BXL"
		const stringhFppMPQ = "YdejbUBxeDpUAiFOEpvL829kfJgX493VokIsZp2rXmLVwDRmdabv72m"
		const uintNVoxlZ4 = BigInt("154")
		const BACMARSLPTOKENPoolyiSPyLF = await BACMARSLPTOKENPool.new(stringB1jYBiK, stringhFppMPQ, uintNVoxlZ4, {from: accounts[1]});
		const uint8gPHesU = await BACMARSLPTOKENPoolyiSPyLF.decimals.call({from: accounts[1]});
		const uint256rZT6ld0 = await BACMARSLPTOKENPoolyiSPyLF.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolyiSPyLF.getReward.call({from: accounts[2]});
		const uint256RmY63oU = await BACMARSLPTOKENPoolyiSPyLF.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringchfuZAc = "7mUw7mK5uEO39yMW1EvWZWWEQbT6K6fB0i0XHPSHldDTWt3bzLINWpfK"
		const stringQop79V9 = "fl0Tp2gziWcMvfBYeL0MjyvHgPV3rjbL1"
		const uintDoT6K9N = BigInt("102")
		const BACMARSLPTOKENPoolpUZhGfT = await BACMARSLPTOKENPool.new(stringchfuZAc, stringQop79V9, uintDoT6K9N, {from: accounts[2]});
		const addressUckZL8K = accounts[0]
		const addressDVyuqm6 = accounts[0]
		const uint256dHxMpN8 = await BACMARSLPTOKENPoolpUZhGfT.rewardPerToken.call({from: accounts[2]});
		const uint256QeretOd = await BACMARSLPTOKENPoolpUZhGfT.earned.call(addressUckZL8K, {from: accounts[0]});
		const uint8vgmKQcl = await BACMARSLPTOKENPoolpUZhGfT.decimals.call({from: accounts[0]});
		const stringMi9OtVR = await BACMARSLPTOKENPoolpUZhGfT.symbol.call({from: accounts[1]});
		const uint256iP0l8ky = await BACMARSLPTOKENPoolpUZhGfT.earned.call(addressDVyuqm6, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDCvAVDs = "6DnG8JW19Nw35ao1hfVajhFTVa2Qo7nPvBDStgmx1HwffeWW6TJ"
		const stringaBDQoFa = "pnh2nmUVvgjrfcI"
		const uintVUALO1f = BigInt("139")
		const BACMARSLPTOKENPoolJvwSas2 = await BACMARSLPTOKENPool.new(stringDCvAVDs, stringaBDQoFa, uintVUALO1f, {from: accounts[3]});
		const byteYl7gFqJ = "0x1a1b1d1d1b1e00171b0b03070f091f0103090d07111618010f1a0a2006111912"
		const byteV6bmEST = "0x1f04050d1e191c121207181b1c0d0c14151c0c111206181f170e1d0d17151f1f"
		const uintNCgtNm7 = BigInt("251")
		const uintHSWx4rT = BigInt("1248")
		const uintTEF96BG = BigInt("1909")
		const uintekBdn6G = BigInt("1928")
		const uintLnOeMJx = BigInt("1138")
		const uintS8Nsl52 = BigInt("329")
		await BACMARSLPTOKENPoolJvwSas2.nonReentrant.call({from: accounts[4]});
		const uint256tnMCJbG = await BACMARSLPTOKENPoolJvwSas2.stakeWithPermit.call(uintTEF96BG, uintHSWx4rT, uintNCgtNm7, byteV6bmEST, byteYl7gFqJ, {from: accounts[0]});
		const uint256eFQrK31 = await BACMARSLPTOKENPoolJvwSas2.stake.call(uintekBdn6G, {from: accounts[4]});
		const uint256kVbdeAD = await BACMARSLPTOKENPoolJvwSas2.withdraw.call(uintLnOeMJx, {from: accounts[1]});
		const uint256gNcDGz4 = await BACMARSLPTOKENPoolJvwSas2.notifyRewardAmount.call(uintS8Nsl52, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressvqbkBP = accounts[0]
		const addressMnyqgIu = accounts[0]
		const addressTwxBNkh = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressvqbkBP, addressMnyqgIu, addressTwxBNkh, {from: accounts[4]});
		const uintGN9AyvR = BigInt("43")
		const uintdYRAmKG = BigInt("1644")
//		const uint256XU0ksGn = await BACMARSLPTOKENPoolVvuVJ9t.withdraw.call(uintGN9AyvR, {from: accounts[2]});
//		await BACMARSLPTOKENPoolVvuVJ9t.getReward.call({from: accounts[3]});
//		const uint256cISSKR5 = await BACMARSLPTOKENPoolVvuVJ9t.stake.call(uintdYRAmKG, {from: accounts[4]});
//		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolVvuVJ9t.withdraw.call(uintGN9AyvR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHdGmIJg = "nIowR9IOb6diTPIkjScEzM1HhKd7QZEqiAqRYTTbsjNjxPdSiXOF3LdAsshLigGPJ3rKz4jadua"
		const stringd6gRR1r = "y2rYduM3C7k"
		const uinthV8lNIo = BigInt("42")
		const BACMARSLPTOKENPoolLOJBWwK = await BACMARSLPTOKENPool.new(stringHdGmIJg, stringd6gRR1r, uinthV8lNIo, {from: accounts[0]});
		const addressVHTmWVZ = accounts[0]
		const uint256cd1jBu3 = await BACMARSLPTOKENPoolLOJBWwK.earned.call(addressVHTmWVZ, {from: accounts[5]});
		await BACMARSLPTOKENPoolLOJBWwK.onlyRewardsDistribution.call({from: accounts[3]});
		const uint8vESFOT2 = await BACMARSLPTOKENPoolLOJBWwK.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolLOJBWwK.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpiFcALm = "wXkjfUybPv2k4XrFDxBPzLAHPTCD6PlfszQPlFhuC7R1PQTIKq3"
		const stringnsl45s = "eVcgTIllfD20RaT86lPJVw9K6HEbkLDJ2j4q7dlkhSCcbWkvlvjqcDFRAmzaI94c4Z6iLiml3"
		const uintRN4lbOU = BigInt("223")
		const BACMARSLPTOKENPoolI3tRj5K = await BACMARSLPTOKENPool.new(stringpiFcALm, stringnsl45s, uintRN4lbOU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LZRdp9 = await BACMARSLPTOKENPoolI3tRj5K.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const stringzgCEh9R = await BACMARSLPTOKENPoolI3tRj5K.name.call({from: accounts[2]});
		const uint256psewka = await BACMARSLPTOKENPoolI3tRj5K.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolI3tRj5K.getReward.call({from: accounts[1]});
		const uint256BaizK6A = await BACMARSLPTOKENPoolI3tRj5K.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQnvG510 = "7FKPGRBInhtwZsHfpQIOQ7j4mtuh413u15RnLlwPtjk3pOHO"
		const stringJyKbrYW = "Pip9s4rswGggkE9qd5Cr43bnXKulVjn89nDgG7wcirzdHXAOfiXbJXc3TDqhi5THTs1aE032XnM8hcewLlfvwdgaJZs1p"
		const uintjkalWUz = BigInt("251")
		const BACMARSLPTOKENPoolnEejIki = await BACMARSLPTOKENPool.new(stringQnvG510, stringJyKbrYW, uintjkalWUz, {from: accounts[5]});
		const byterH8zPAy = "0x1f1c031b150a1e021804020d19090e130b010f1614001819191904050d180803"
		const byteEwrKBhB = "0x0909010d0a13011305101b0811191a171f130e070708131a08040603071e1d07"
		const uintImLP20Z = BigInt("160")
		const uintX9M9vQf = BigInt("720")
		const uintijXmUdg = BigInt("331")
		const uintO4kaVT5 = BigInt("1883")
		const uint256YCO1i3H = await BACMARSLPTOKENPoolnEejIki.stakeWithPermit.call(uintijXmUdg, uintX9M9vQf, uintImLP20Z, byteEwrKBhB, byterH8zPAy, {from: accounts[2]});
		const uint256yjbc30h = await BACMARSLPTOKENPoolnEejIki.withdraw.call(uintO4kaVT5, {from: accounts[0]});
		await BACMARSLPTOKENPoolnEejIki.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYtk92Tz = "WSo3SHiJaB9zThHOhbSi7RaDLBItBByZSaW7fkkoEyTTpjFvJaIaDGnhkyQRy6uffkwOWcw55UdGRuDwu9uf0oFeoNYzfzWjQJ9"
		const stringKHRDrVJ = "h7oTzHlFo4x2XvzMdJvbAKIhzzSP6eXk82z"
		const uintFoSTCWC = BigInt("85")
		const BACMARSLPTOKENPool09Etb2 = await BACMARSLPTOKENPool.new(stringYtk92Tz, stringKHRDrVJ, uintFoSTCWC, {from: accounts[3]});
		await BACMARSLPTOKENPool09Etb2.exit.call({from: accounts[0]});
		const uint256IgNCl0M = await BACMARSLPTOKENPool09Etb2.getRewardForDuration.call({from: accounts[1]});
		const uint256kA9gZL = await BACMARSLPTOKENPool09Etb2.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint8eLBVHAi = await BACMARSLPTOKENPool09Etb2.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPool09Etb2.getReward.call({from: accounts[0]});
		const stringDGBD4Rf = await BACMARSLPTOKENPool09Etb2.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsmt2rT = "xJag2hGEfyWi7OirHX9lGREhvPSoOkH7UMgwtdwylMs5s3SrOGPG0RuOJCgVAKe7iUz3er4wweJHEEHYAaCVAAMQqr3"
		const stringFgd6whh = "tg2igHFiH9QJMJSbgCNj5rwcvmu4j56J0mA7tnkr8rfk7yVKdkNyljxK"
		const uintJCbgMSB = BigInt("244")
		const BACMARSLPTOKENPoolaH0e4Dx = await BACMARSLPTOKENPool.new(stringsmt2rT, stringFgd6whh, uintJCbgMSB, {from: accounts[2]});
		const uint256zqSGCu = await BACMARSLPTOKENPoolaH0e4Dx.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256PYtaIpN = await BACMARSLPTOKENPoolaH0e4Dx.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolaH0e4Dx.onlyRewardsDistribution.call({from: accounts[5]});
		const stringftTQPM0 = await BACMARSLPTOKENPoolaH0e4Dx.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPoolaH0e4Dx.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWKurXJE = "25KuQRJ6eEoNJrTeQhPaYxrQtXVvr2jnEC2CV6Ah2yZHDcd92uCLELcimYsnovK5D5nPXhzrKckoTq"
		const stringnSpA5pp = "FiuHQwHVlz7VSkY1UTLVwbhXsUbD68AAkaAKwtkvR2gNMwBr59suu8uIAVvaVmzlqGyUwIIbhgoRs0KoVeGch3kaTADX7T2s8"
		const uintEe8lDOv = BigInt("179")
		const BACMARSLPTOKENPooll6TYBLS = await BACMARSLPTOKENPool.new(stringWKurXJE, stringnSpA5pp, uintEe8lDOv, {from: accounts[3]});
		await BACMARSLPTOKENPooll6TYBLS.nonReentrant.call({from: accounts[0]});
		const stringuAhNgSE = await BACMARSLPTOKENPooll6TYBLS.symbol.call({from: accounts[0]});
		const uint256j8dMWXh = await BACMARSLPTOKENPooll6TYBLS.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMgtksq = "RX24lmJHuMbzOg4sHDhFer8MvnrWr89mmXbnNSi8MveNqPNyUM5gzdKTLfcjsNthhGM8kI"
		const stringpWSenJj = "kcCfPM52gFRGKaLEmNrdbb0"
		const uintIgfs5ck = BigInt("23")
		const BACMARSLPTOKENPoolVNaM9xM = await BACMARSLPTOKENPool.new(stringMgtksq, stringpWSenJj, uintIgfs5ck, {from: accounts[3]});
		const uinttBibtBn = BigInt("1542")
		const uintHjO2s95 = BigInt("644")
		const addressIwimuxm = accounts[4]
		const uint256rGrSDyR = await BACMARSLPTOKENPoolVNaM9xM.notifyRewardAmount.call(uinttBibtBn, {from: accounts[0]});
		const uint256D34Qvzz = await BACMARSLPTOKENPoolVNaM9xM.withdraw.call(uintHjO2s95, {from: accounts[3]});
		const uint256kO7FOZt = await BACMARSLPTOKENPoolVNaM9xM.earned.call(addressIwimuxm, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgd0BOYu = "zU8wQSRTFQLxElKnPt"
		const stringeTMSEXX = "VxyqwU6YZHCDkjW0YWYmRNLiT6muO0"
		const uintcyveYMw = BigInt("188")
		const BACMARSLPTOKENPoolWSvcecV = await BACMARSLPTOKENPool.new(stringgd0BOYu, stringeTMSEXX, uintcyveYMw, {from: accounts[1]});
		const stringGGTrd41 = await BACMARSLPTOKENPoolWSvcecV.symbol.call({from: accounts[5]});
		const uint256CXQvgs = await BACMARSLPTOKENPoolWSvcecV.rewardPerToken.call({from: accounts[4]});
		const uint256wHU1qyk = await BACMARSLPTOKENPoolWSvcecV.totalSupply.call({from: accounts[0]});
		const uint256h6jjJ2t = await BACMARSLPTOKENPoolWSvcecV.lastTimeRewardApplicable.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringraHcGvR = "oVUMINhSRf2dhVGEEhPCB"
		const stringQB9fBbh = "9HSLjPi8LsNyKldmTL8m8X2lgKSZrSS3kmNg3deznoUoGXdOXFm1hnJQ8QCmEhpArqcvWQdD3U5GSUC3"
		const uinttqSzv6a = BigInt("40")
		const BACMARSLPTOKENPoolszoKqts = await BACMARSLPTOKENPool.new(stringraHcGvR, stringQB9fBbh, uinttqSzv6a, {from: accounts[0]});
		const addressEep09ch = accounts[2]
		const byteSDIjxeu = "0x010610011f090b0303080f0f111c09090b0e1d0f110e070f20040f0220151706"
		const byteejrtMog = "0x151a1b1f0d0808101d01120b09091d191b0b1a13021b1e170f0a0f120a11151e"
		const uintiLfWFZj = BigInt("211")
		const uintX42nGy5 = BigInt("969")
		const uintWbrYKrV = BigInt("1556")
		await BACMARSLPTOKENPoolszoKqts.exit.call({from: accounts[5]});
		const uint256wekULSR = await BACMARSLPTOKENPoolszoKqts.balanceOf.call(addressEep09ch, {from: accounts[4]});
		const uint2562tNTnb = await BACMARSLPTOKENPoolszoKqts.stakeWithPermit.call(uintWbrYKrV, uintX42nGy5, uintiLfWFZj, byteejrtMog, byteSDIjxeu, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZgszBXM = "TwO8TdxDB2Wj2llH"
		const stringRZretIP = "ofud2xfjgXgfjhi0dV7JlyAV85Ewx69j13AqtzkZiTpCl7vXFSllXEC1xzKxuE7L6ulA9E95L1"
		const uintPHqDJD5 = BigInt("160")
		const BACMARSLPTOKENPoolUJfUWBZ = await BACMARSLPTOKENPool.new(stringZgszBXM, stringRZretIP, uintPHqDJD5, {from: accounts[0]});
		const uintsI8ryrc = BigInt("1151")
		const uint256JkioF3c = await BACMARSLPTOKENPoolUJfUWBZ.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256iG6Lc0 = await BACMARSLPTOKENPoolUJfUWBZ.notifyRewardAmount.call(uintsI8ryrc, {from: accounts[3]});
		await BACMARSLPTOKENPoolUJfUWBZ.getReward.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd5glN2o = "QRrIPfTTpQaMq4Uu5utYiIuzhkqa7XjKuK1D646BJMsxmlwXaPK68oSXyIulg1kxaNIGkDjdHcgQM7RmhyhW5wBxfAmaunON50I"
		const stringYIKMHMb = "RQqdFwPz99SBbvQ40we4HkA5hOCaK6XtpP1I64vXFQgkfDky5bAOmcjEuWIYX"
		const uintA2CnFKe = BigInt("24")
		const BACMARSLPTOKENPoolqdbTQIF = await BACMARSLPTOKENPool.new(stringd5glN2o, stringYIKMHMb, uintA2CnFKe, {from: accounts[5]});
		const uintolqQeVS = BigInt("1691")
		const addressZnAQXO = accounts[4]
		const addressxBOBS40 = accounts[1]
		const uint256PPs1d4o = await BACMARSLPTOKENPoolqdbTQIF.withdraw.call(uintolqQeVS, {from: accounts[0]});
		await BACMARSLPTOKENPoolqdbTQIF.nonReentrant.call({from: accounts[2]});
		const uint256FlzbqD = await BACMARSLPTOKENPoolqdbTQIF.balanceOf.call(addressZnAQXO, {from: accounts[1]});
		await BACMARSLPTOKENPoolqdbTQIF.nonReentrant.call({from: accounts[2]});
		const addressXPL4UZJ = await BACMARSLPTOKENPoolqdbTQIF.updateReward.call(addressxBOBS40, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTYBFLzo = "9zLmyoNGM2Ue4tSiVsIiItgkj2hJchpR68zynQeaAboLmj2sdn9x7TO7WRboJejsJ6N2dLBkB6JyqRq3b7eeB4vU0IFlNfJABK0"
		const stringzMTgjo3 = "CTvuXzZ52UQCgtYsrxSXoo8kkqrFHmWjS4ctcyAqMI5IVqLLCRH7a4i2y4d6zXt9WaVySO"
		const uintEjSDDUq = BigInt("248")
		const BACMARSLPTOKENPoolT107wVd = await BACMARSLPTOKENPool.new(stringTYBFLzo, stringzMTgjo3, uintEjSDDUq, {from: accounts[4]});
		await BACMARSLPTOKENPoolT107wVd.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPoolT107wVd.nonReentrant.call({from: accounts[4]});
		const stringgzLQpke = await BACMARSLPTOKENPoolT107wVd.symbol.call({from: accounts[1]});
		const uint8L0Pctxi = await BACMARSLPTOKENPoolT107wVd.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresst8QM5qX = accounts[2]
		const addressy2OOZYC = accounts[2]
		const addressvFEm9rY = accounts[2]
		const BACMARSLPTOKENPoolAAdVzvc = await BACMARSLPTOKENPool.new(addresst8QM5qX, addressy2OOZYC, addressvFEm9rY, {from: "0x0000000000000000000000000000000000000001"});
		const stringhnNi6HA = await BACMARSLPTOKENPoolAAdVzvc.symbol.call({from: accounts[4]});
		const uint256pGFK9X1 = await BACMARSLPTOKENPoolAAdVzvc.totalSupply.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZmaMuFa = "kjb5B2OL0fA440XaXdXYWbU5u5Nvmqj7FKrQ"
		const stringcztfw4P = "JGJsVa2fKyziPYI"
		const uintjtKOoCg = BigInt("192")
		const BACMARSLPTOKENPoold0R1yGQ = await BACMARSLPTOKENPool.new(stringZmaMuFa, stringcztfw4P, uintjtKOoCg, {from: accounts[4]});
		const addressRFoc3uz = accounts[0]
		const addressSIQoxPl = accounts[5]
		const uintdlurUwp = BigInt("129")
		const uint256Wy4NC0r = await BACMARSLPTOKENPoold0R1yGQ.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoold0R1yGQ.getReward.call({from: accounts[5]});
		const uint256wANYLt = await BACMARSLPTOKENPoold0R1yGQ.earned.call(addressRFoc3uz, {from: accounts[1]});
		const uint256rxQWgnk = await BACMARSLPTOKENPoold0R1yGQ.earned.call(addressSIQoxPl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZNzADj = await BACMARSLPTOKENPoold0R1yGQ.stake.call(uintdlurUwp, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdfyh5Wu = "NDehOG668pCSEq9hxL"
		const stringLM6XnCP = "2lMPvwHN5OhRYUSq7qBXHirMLXsX8oTyTiCvmgikdjfC5DyURFanKHgouoeScWWX00xfxS8mHCK4E8h0rej8gjF"
		const uintorvlm3K = BigInt("192")
		const BACMARSLPTOKENPoolpyDxaR = await BACMARSLPTOKENPool.new(stringdfyh5Wu, stringLM6XnCP, uintorvlm3K, {from: accounts[1]});
		const addressduMXLBP = accounts[3]
		const addressXiQHcJ0 = "0x0000000000000000000000000000000000000001"
		await BACMARSLPTOKENPoolpyDxaR.exit.call({from: accounts[2]});
		const addressZUbYOqB = await BACMARSLPTOKENPoolpyDxaR.updateReward.call(addressduMXLBP, {from: accounts[1]});
		const addressPMZDCpz = await BACMARSLPTOKENPoolpyDxaR.updateReward.call(addressXiQHcJ0, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiS7azD = "VFz5xpAMoouPggmONc8z8M2WXNdwYWYbhx9nndiMwydNU6FdPRsDPohzIxq83GvlYEa12mvqDxksaEwRDgmltAV7aEF7iMtRk"
		const stringWCNYAtc = "AUnJbcxogqMTTONB5P7Yt3TEr8UVgjSTavz"
		const uintiVEp5um = BigInt("242")
		const BACMARSLPTOKENPoolGB6DyN2 = await BACMARSLPTOKENPool.new(stringiS7azD, stringWCNYAtc, uintiVEp5um, {from: accounts[5]});
		const uintOTEHvvd = BigInt("1121")
		const uintUTJ82LU = BigInt("86")
		const uint256TdWWtsn = await BACMARSLPTOKENPoolGB6DyN2.withdraw.call(uintOTEHvvd, {from: accounts[4]});
		const stringR0lSi8N = await BACMARSLPTOKENPoolGB6DyN2.name.call({from: accounts[2]});
		const uint256kOrGLHq = await BACMARSLPTOKENPoolGB6DyN2.stake.call(uintUTJ82LU, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZ9NZELA = "5mMeQQK54c2U34fx45Q3cUG2KKe2M0iDetSTt4VYPM312d"
		const stringuoFE5AD = "6VXM8llquLUw912SwhObsu8WEiwUiUUdEPksEA"
		const uintAybVFTx = BigInt("124")
		const BACMARSLPTOKENPoolRFWZwnQ = await BACMARSLPTOKENPool.new(stringZ9NZELA, stringuoFE5AD, uintAybVFTx, {from: accounts[4]});
		const uinttkCPMwH = BigInt("1093")
		await BACMARSLPTOKENPoolRFWZwnQ.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const stringhkvfPQt = await BACMARSLPTOKENPoolRFWZwnQ.symbol.call({from: accounts[4]});
		const stringwz8J6OA = await BACMARSLPTOKENPoolRFWZwnQ.symbol.call({from: accounts[1]});
		const uint256iRWtjK8 = await BACMARSLPTOKENPoolRFWZwnQ.notifyRewardAmount.call(uinttkCPMwH, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfqEcDss = "fbT2KrGOZvQyWIPkj2Khee3XOHjJgpdUmGih4Lmp4oHDE74EG7blUxSTltnHFj1JAIrNm9HirEecr"
		const stringrtOHSa = "I1Lc65U0uZ72EBXB6nLoFjFfJapUhh7Aym45erS6B5LGo2FfKUMC"
		const uint8Wnxsu = BigInt("88")
		const BACMARSLPTOKENPoolQCL1JEA = await BACMARSLPTOKENPool.new(stringfqEcDss, stringrtOHSa, uint8Wnxsu, {from: accounts[1]});
		const addressRTxEi5 = accounts[0]
		const addresss6Ij9bZ = accounts[3]
		const uint256Yv6L7x = await BACMARSLPTOKENPoolQCL1JEA.balanceOf.call(addressRTxEi5, {from: accounts[2]});
		const stringT8YDOLc = await BACMARSLPTOKENPoolQCL1JEA.symbol.call({from: accounts[0]});
		const uint256k6njxQK = await BACMARSLPTOKENPoolQCL1JEA.totalSupply.call({from: accounts[3]});
		const uint256BNfOP6b = await BACMARSLPTOKENPoolQCL1JEA.getRewardForDuration.call({from: accounts[0]});
		const addressK4aqMnM = await BACMARSLPTOKENPoolQCL1JEA.updateReward.call(addresss6Ij9bZ, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXat2MdU = "JFX3we4Ec6uT2vdVRG2qhLjCbsQ8a1fFuZftZclIKpKnvFgGpK7yAOh1RVgCQm5D"
		const stringIBu8rYn = "5tG4F1BpsJPsUCWA8sFuSLdkEqonW643QtxDcbB5QcI3sL8HSUsrwc9VlAOwWQiSgqje3f3JofpEISSWjyeMkr"
		const uintcA00Okp = BigInt("40")
		const BACMARSLPTOKENPoolSqnV2V6 = await BACMARSLPTOKENPool.new(stringXat2MdU, stringIBu8rYn, uintcA00Okp, {from: accounts[0]});
		const byteGFrsFvk = "0x0801000610080e0f100b1910171719062007091d1c1217090f041a08150c111e"
		const bytefPlTJ1Q = "0x1c101b130a140d1b09121d0515110d1a0b051511192006041507050702201201"
		const uintlHXR53X = BigInt("53")
		const uinthYjXPo4 = BigInt("1758")
		const uintTrHnSyS = BigInt("1829")
		const addressp4lWuI = accounts[5]
		const addressalBbE6d = "0x0000000000000000000000000000000000000001"
		const uint256GTBuuYZ = await BACMARSLPTOKENPoolSqnV2V6.stakeWithPermit.call(uintTrHnSyS, uinthYjXPo4, uintlHXR53X, bytefPlTJ1Q, byteGFrsFvk, {from: accounts[3]});
		const uint256YpDR15M = await BACMARSLPTOKENPoolSqnV2V6.earned.call(addressp4lWuI, {from: accounts[0]});
		const uint256fR3az4z = await BACMARSLPTOKENPoolSqnV2V6.totalSupply.call({from: accounts[4]});
		const uint8N4h1ebv = await BACMARSLPTOKENPoolSqnV2V6.decimals.call({from: accounts[2]});
		const uint256YhwyVMd = await BACMARSLPTOKENPoolSqnV2V6.balanceOf.call(addressalBbE6d, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpkOtKlY = "LTEeDdVQm98yfRSaUsG8"
		const stringpqJ6Prp = "UxlHjHjI3H1huOPupqpjlIOD5UbmmtmanHZQWpCLta4HM6tr7mmKOkJ9yJlvAgNVu3Iyibaf7pi"
		const uintkbJyAzO = BigInt("153")
		const BACMARSLPTOKENPoolKfRsrtO = await BACMARSLPTOKENPool.new(stringpkOtKlY, stringpqJ6Prp, uintkbJyAzO, {from: "0x0000000000000000000000000000000000000001"});
		const addresseHaLe5 = accounts[2]
		const uint256xl8hV4m = await BACMARSLPTOKENPoolKfRsrtO.earned.call(addresseHaLe5, {from: "0x0000000000000000000000000000000000000001"});
		const uint8Rqq3K62 = await BACMARSLPTOKENPoolKfRsrtO.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolKfRsrtO.nonReentrant.call({from: accounts[2]});
		const stringMIlEkxs = await BACMARSLPTOKENPoolKfRsrtO.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm710O8M = "0SbcCEuFkh2anauQnbNBpz9PAmoRGkG23oAL6FBdf48c7MsdQh8t3K3k2W8v5ipMmOQnnq"
		const stringksvk3zb = "Byk"
		const uintk2V0ALU = BigInt("128")
		const BACMARSLPTOKENPoolIIXWU5A = await BACMARSLPTOKENPool.new(stringm710O8M, stringksvk3zb, uintk2V0ALU, {from: accounts[2]});
		const uint1I7q3S = BigInt("481")
		const uint256BffiQ7A = await BACMARSLPTOKENPoolIIXWU5A.rewardPerToken.call({from: accounts[1]});
		const uint256WXnteXb = await BACMARSLPTOKENPoolIIXWU5A.withdraw.call(uint1I7q3S, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpzN7lUz = "RzDO65kXnmUMnhvq8Yg9arT1ylxsDjaMsnZBTzyoMoDTxmwT5RARpJlKMCeJj"
		const stringt9QLoTF = "62UopBoZzwcn1rVVgifXd9KWknjrMwKpIjyg4dO7pKiNKJPcjvfvGBfHaujkpMxABQ"
		const uinttFCuulc = BigInt("11")
		const BACMARSLPTOKENPool42Ph1b = await BACMARSLPTOKENPool.new(stringpzN7lUz, stringt9QLoTF, uinttFCuulc, {from: accounts[2]});
		const uintNU8TdzI = BigInt("1155")
		const uint256CbyrUFU = await BACMARSLPTOKENPool42Ph1b.withdraw.call(uintNU8TdzI, {from: accounts[4]});
		await BACMARSLPTOKENPool42Ph1b.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPool42Ph1b.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256qLvMSSA = await BACMARSLPTOKENPool42Ph1b.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPool42Ph1b.nonReentrant.call({from: accounts[2]});
		const uint256jVJsjcd = await BACMARSLPTOKENPool42Ph1b.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringriNogSW = "XkfUMbXtRnmMLo8FhpmGd198uE4yvpXjOPlKBWSnst3k"
		const stringLNtuGMs = "jCzkleSGLIwYImoiUOzUSIZks4S1mWEgvXueXadx5663Q3RKlIwgiWnB9AMIo3PmI1hJkQVI1iaTkdl6f6P"
		const uintm1kaQGc = BigInt("209")
		const BACMARSLPTOKENPoolKMQcLBD = await BACMARSLPTOKENPool.new(stringriNogSW, stringLNtuGMs, uintm1kaQGc, {from: accounts[0]});
		const uintZRoEhGN = BigInt("571")
		const uint256N5uYk1V = await BACMARSLPTOKENPoolKMQcLBD.rewardPerToken.call({from: accounts[2]});
		const uint256nnNbY92 = await BACMARSLPTOKENPoolKMQcLBD.stake.call(uintZRoEhGN, {from: accounts[3]});
		await BACMARSLPTOKENPoolKMQcLBD.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlu9Igh = "IUU2H2TCo1dFFVR5vicJCX6xXofOwj4ydKPpcwP8lb1QIYbmfOrbWRSUvbM2HEqXSodbTKT"
		const stringeere2AW = "XZeqkvJ6cbY3W9M7BtAGH"
		const uintrGRyKz3 = BigInt("76")
		const BACMARSLPTOKENPooltLRwhx = await BACMARSLPTOKENPool.new(stringlu9Igh, stringeere2AW, uintrGRyKz3, {from: accounts[4]});
		const uintcyWtMV4 = BigInt("1234")
		const uintdEnQYPy = BigInt("678")
		const uintVY2Zwin = BigInt("829")
		const uint256wq2br5k = await BACMARSLPTOKENPooltLRwhx.withdraw.call(uintcyWtMV4, {from: accounts[4]});
		const uint8AidJuOr = await BACMARSLPTOKENPooltLRwhx.decimals.call({from: accounts[5]});
		const uint256c7DRh8c = await BACMARSLPTOKENPooltLRwhx.stake.call(uintdEnQYPy, {from: accounts[2]});
		const uint256rrt0pgA = await BACMARSLPTOKENPooltLRwhx.stake.call(uintVY2Zwin, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv9nrli = "w"
		const stringwBQeS0V = "tVB9cRlmHJQeptKpYuvsVxer8MXnzBdabtV1egsvl2vLbQXsui8"
		const uintnHO60cN = BigInt("248")
		const BACMARSLPTOKENPoolCy3V9UO = await BACMARSLPTOKENPool.new(stringv9nrli, stringwBQeS0V, uintnHO60cN, {from: accounts[2]});
		const addressqwZxl9t = accounts[1]
		const byteQbWMulE = "0x0c100609020609071e1d061b16041c0c1c150f1103160b070a1e011212181a1a"
		const byteLifgLeZ = "0x030f1b0d031f081606051f030318101a0509091b171a140e12151c1c0a1a1713"
		const uintuaAXwaO = BigInt("13")
		const uintl37fllZ = BigInt("363")
		const uintD4zaQ0 = BigInt("1371")
		const uint256yVt3TVn = await BACMARSLPTOKENPoolCy3V9UO.balanceOf.call(addressqwZxl9t, {from: accounts[1]});
		await BACMARSLPTOKENPoolCy3V9UO.onlyRewardsDistribution.call({from: accounts[1]});
		const stringmdqDvlz = await BACMARSLPTOKENPoolCy3V9UO.name.call({from: accounts[2]});
		await BACMARSLPTOKENPoolCy3V9UO.getReward.call({from: accounts[0]});
		const uint256Nog9irs = await BACMARSLPTOKENPoolCy3V9UO.stakeWithPermit.call(uintD4zaQ0, uintl37fllZ, uintuaAXwaO, byteLifgLeZ, byteQbWMulE, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgTE7SHB = "r"
		const stringCBKBfWs = "W0tRgGB2CnswCgLMMeovYldHhVR"
		const uintUDrqVEb = BigInt("228")
		const BACMARSLPTOKENPooli8vSl3o = await BACMARSLPTOKENPool.new(stringgTE7SHB, stringCBKBfWs, uintUDrqVEb, {from: accounts[0]});
		const addressAhJYtWT = accounts[0]
		const addressXnV21QP = accounts[1]
		const addressHK0YOT0 = accounts[0]
		const uint2563tpWHs = await BACMARSLPTOKENPooli8vSl3o.earned.call(addressAhJYtWT, {from: accounts[3]});
		const uint256Q8xWXEI = await BACMARSLPTOKENPooli8vSl3o.earned.call(addressXnV21QP, {from: accounts[0]});
		const uint256VpA2LCq = await BACMARSLPTOKENPooli8vSl3o.balanceOf.call(addressHK0YOT0, {from: accounts[0]});
		const uint256jQSDdgO = await BACMARSLPTOKENPooli8vSl3o.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPooli8vSl3o.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringabQT3d6 = "uovyVwf3TM8dgLkGIenNnYh2drrl85BaR0ILk1iKaFx28EzJdpk"
		const stringakEchAv = "aXpSHaAgQKWJMFGz5pg2W25knR7t4anxAlxDbg9GSbihmKXfCZ6VPyi9fehOGN1DdLe1T746ywHzUkO7q7KQYcAM6NwI"
		const uintXPnYHxx = BigInt("223")
		const BACMARSLPTOKENPoolVwVLjfU = await BACMARSLPTOKENPool.new(stringabQT3d6, stringakEchAv, uintXPnYHxx, {from: accounts[3]});
		const uintydtyz8k = BigInt("674")
		const addressOzBMdx0 = accounts[5]
		const uintxhZtiwS = BigInt("1028")
		const stringot4c4kI = await BACMARSLPTOKENPoolVwVLjfU.symbol.call({from: accounts[4]});
		const uint256aDkhO7g = await BACMARSLPTOKENPoolVwVLjfU.notifyRewardAmount.call(uintydtyz8k, {from: accounts[4]});
		const uint256lvMfHgN = await BACMARSLPTOKENPoolVwVLjfU.totalSupply.call({from: accounts[4]});
		const uint256Pmbk1H0 = await BACMARSLPTOKENPoolVwVLjfU.balanceOf.call(addressOzBMdx0, {from: accounts[1]});
		const uint256ai3IcwA = await BACMARSLPTOKENPoolVwVLjfU.withdraw.call(uintxhZtiwS, {from: accounts[0]});
		await BACMARSLPTOKENPoolVwVLjfU.getReward.call({from: accounts[2]});
	});
})
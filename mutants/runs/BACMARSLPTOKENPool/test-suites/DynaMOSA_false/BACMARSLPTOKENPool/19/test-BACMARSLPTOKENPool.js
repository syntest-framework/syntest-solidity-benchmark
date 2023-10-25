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
		const uint8bl6fgDW = await BACMARSLPTOKENPoolpIaD1gP.decimals.call({from: accounts[4]});
		const uint256LzTJ2lW = await BACMARSLPTOKENPoolpIaD1gP.withdraw.call(uint6st0wo, {from: accounts[0]});
		await BACMARSLPTOKENPoolpIaD1gP.nonReentrant.call({from: accounts[3]});
		const uint256dmn9On = await BACMARSLPTOKENPoolpIaD1gP.withdraw.call(uintLJQEd2c, {from: accounts[1]});
		const uint256uYvXGG5 = await BACMARSLPTOKENPoolpIaD1gP.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256tyBc1ry = await BACMARSLPTOKENPoolpIaD1gP.notifyRewardAmount.call(uintTownLa0, {from: accounts[2]});

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
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

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
		const stringWezmNOw = "phjEMADnLPcY0IrH"
		const stringzDHA4cu = "Jh9ash1H8pErIz8q47P2W1PuOz97cs83"
		const uintA3oxeQ1 = BigInt("60")
		const BACMARSLPTOKENPoolfnhpCdf = await BACMARSLPTOKENPool.new(stringWezmNOw, stringzDHA4cu, uintA3oxeQ1, {from: accounts[5]});
		const addressCy9EOlW = accounts[4]
		await BACMARSLPTOKENPoolfnhpCdf.exit.call({from: accounts[3]});
		const uint256Thknj4D = await BACMARSLPTOKENPoolfnhpCdf.balanceOf.call(addressCy9EOlW, {from: accounts[1]});
		const uint256fuK2gRe = await BACMARSLPTOKENPoolfnhpCdf.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressEn2aJb3 = accounts[0]
		const addressKRckKBY = accounts[0]
		const addressmxFr7CM = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressEn2aJb3, addressKRckKBY, addressmxFr7CM, {from: accounts[4]});
		const address7jKK0W = accounts[6]
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256GJXVDj7 = await BACMARSLPTOKENPoolVvuVJ9t.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(address7jKK0W, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});
		const stringwehgkMk = await BACMARSLPTOKENPoolVvuVJ9t.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256GJXVDj7, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWoqkyR = "wPHVWGiOTY2ipo2LVqP3fSONbFWB94OvPcPQRR1iRcyYeO3BTzxoIvy9x"
		const stringUapvm8H = "IjP6zFnT3uc7Kx2IvweuxLlAy3YvW"
		const uinthKyj53j = BigInt("16")
		const BACMARSLPTOKENPoolqvCy51 = await BACMARSLPTOKENPool.new(stringWoqkyR, stringUapvm8H, uinthKyj53j, {from: accounts[1]});
		const uintFft8o84 = BigInt("1028")
		const uintV6LMbeo = BigInt("1420")
		const uint256VGkQBf9 = await BACMARSLPTOKENPoolqvCy51.stake.call(uintFft8o84, {from: accounts[1]});
		const uint256aauI2dm = await BACMARSLPTOKENPoolqvCy51.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256LJgwFiM = await BACMARSLPTOKENPoolqvCy51.totalSupply.call({from: accounts[1]});
		const uint256pHKwTfl = await BACMARSLPTOKENPoolqvCy51.notifyRewardAmount.call(uintV6LMbeo, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressUS3HlHz = accounts[0]
		const addressOQKq3at = accounts[0]
		const addresstvJUPJD = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressUS3HlHz, addressOQKq3at, addresstvJUPJD, {from: accounts[4]});
		const address0RU05h = accounts[2]
		const addressUiW7IJQ = accounts[6]
		const addressmVS0GKj = accounts[4]
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256qioi4g0 = await BACMARSLPTOKENPoolVvuVJ9t.totalSupply.call({from: accounts[3]});
		const uint256HUeIEc4 = await BACMARSLPTOKENPoolVvuVJ9t.earned.call(address0RU05h, {from: accounts[3]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressUiW7IJQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DagOLz9 = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressmVS0GKj, {from: accounts[1]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});
		const stringwehgkMk = await BACMARSLPTOKENPoolVvuVJ9t.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256DagOLz9, BigInt("0"))
		assert.equal(uint256HUeIEc4, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256qioi4g0, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresskIQrgTO = accounts[0]
		const addressHCJIFOG = accounts[0]
		const addressQp5yWHW = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addresskIQrgTO, addressHCJIFOG, addressQp5yWHW, {from: accounts[4]});
		const addresshRwVqiW = accounts[1]
		const uintspfIK80 = BigInt("2029")
		const bytetXJM0hs = "0x1115180c1d1d0d08000b0b1c1b0d060412090c0b1f17082014020600070b150f"
		const byterLTzfb9 = "0x081f1c0b011613070e1e051a1d120a1e1b1914180e101d0715011f1b0e03061b"
		const uintO4431dy = BigInt("228")
		const uintHyh5iw2 = BigInt("1304")
		const uintE9ZB6lu = BigInt("223")
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256lAaeAkb = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addresshRwVqiW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256p7wUlZ8 = await BACMARSLPTOKENPoolVvuVJ9t.notifyRewardAmount.call(uintspfIK80, {from: accounts[5]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});
		const uint256xX6bkzB = await BACMARSLPTOKENPoolVvuVJ9t.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256s0XuRSg = await BACMARSLPTOKENPoolVvuVJ9t.stakeWithPermit.call(uintE9ZB6lu, uintHyh5iw2, uintO4431dy, byterLTzfb9, bytetXJM0hs, {from: accounts[0]});
		const uint256jXSdBIy = await BACMARSLPTOKENPoolVvuVJ9t.totalSupply.call({from: accounts[1]});

		assert.equal(uint256lAaeAkb, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.notifyRewardAmount.call(uintspfIK80, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringn75IL4P = "WIrpNHa4nVXG5ktFCAxcrzR"
		const stringCgseBwb = "hXdSCYajh4ttrH"
		const uinthRNLlNK = BigInt("139")
		const BACMARSLPTOKENPoolfyALuKm = await BACMARSLPTOKENPool.new(stringn75IL4P, stringCgseBwb, uinthRNLlNK, {from: accounts[4]});
		const uintDODgkiM = BigInt("657")
		const uintuPoTCzR = BigInt("753")
		const uint256llSueq = await BACMARSLPTOKENPoolfyALuKm.stake.call(uintDODgkiM, {from: accounts[4]});
		const uint256Yy7WjJp = await BACMARSLPTOKENPoolfyALuKm.getRewardForDuration.call({from: accounts[4]});
		const uint256w1zku4 = await BACMARSLPTOKENPoolfyALuKm.totalSupply.call({from: accounts[2]});
		const uint256bwqw06H = await BACMARSLPTOKENPoolfyALuKm.withdraw.call(uintuPoTCzR, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNx2luRj = accounts[0]
		const addressRpLokMd = accounts[0]
		const addressIjjOVWd = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressNx2luRj, addressRpLokMd, addressIjjOVWd, {from: accounts[4]});
		const addressmQBtNa7 = accounts[3]
		const addressfLvZPEY = accounts[1]
		const byteKvdTgf5 = "0x131c0c100701151a1c10190a07170f1b131418090b1a1c0e151d021211031c0a"
		const byteVPzunxC = "0x17130612111602090b0d13070110191e16110d1b1e171b0609061917090a140a"
		const uintsal0EvQ = BigInt("35")
		const uintpogPNzE = BigInt("1294")
		const uintMS9nveP = BigInt("976")
		const uint256dFMbBK1 = await BACMARSLPTOKENPoolVvuVJ9t.getRewardForDuration.call({from: accounts[2]});
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressmQBtNa7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JszdcVw = await BACMARSLPTOKENPoolVvuVJ9t.earned.call(addressfLvZPEY, {from: accounts[2]});
		const uint256nHdPF7A = await BACMARSLPTOKENPoolVvuVJ9t.stakeWithPermit.call(uintMS9nveP, uintpogPNzE, uintsal0EvQ, byteVPzunxC, byteKvdTgf5, {from: accounts[1]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256JszdcVw, BigInt("0"))
		assert.equal(uint256dFMbBK1, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.stakeWithPermit.call(uintMS9nveP, uintpogPNzE, uintsal0EvQ, byteVPzunxC, byteKvdTgf5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscv4pBrd = accounts[0]
		const addresslxqLG0C = accounts[0]
		const addressVzXgnr = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addresscv4pBrd, addresslxqLG0C, addressVzXgnr, {from: accounts[4]});
		const addressftYrccm = accounts[3]
		const addressl0QpTI3 = accounts[1]
		const uintZUMmfz2 = BigInt("389")
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressftYrccm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JszdcVw = await BACMARSLPTOKENPoolVvuVJ9t.earned.call(addressl0QpTI3, {from: accounts[2]});
		const uint256LCDB2fe = await BACMARSLPTOKENPoolVvuVJ9t.stake.call(uintZUMmfz2, {from: accounts[1]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256JszdcVw, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.stake.call(uintZUMmfz2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHTX53Tm = "b3tHZ1ypfvBjCv5Sa1lMR"
		const stringavQaeL5 = "i8viooTz"
		const uint40uev4 = BigInt("36")
		const BACMARSLPTOKENPoolTZMuIBN = await BACMARSLPTOKENPool.new(stringHTX53Tm, stringavQaeL5, uint40uev4, {from: accounts[1]});
		const byteXSPvtr3 = "0x18090c1f141e190c0b061a1b020d15030d02021f030616110a01200a121c1e15"
		const bytefSK97Tj = "0x100f1f041301170a0205030215141809141c1007071d1a001f0910061b011e0c"
		const uintAcIn1hh = BigInt("125")
		const uintVmYM57F = BigInt("1108")
		const uinty3ygDrw = BigInt("51")
		const uintG64r7gg = BigInt("618")
		const uintZD5vS8 = BigInt("244")
		const uint256JbHnxy = await BACMARSLPTOKENPoolTZMuIBN.stakeWithPermit.call(uinty3ygDrw, uintVmYM57F, uintAcIn1hh, bytefSK97Tj, byteXSPvtr3, {from: accounts[0]});
		const uint256IU2ParG = await BACMARSLPTOKENPoolTZMuIBN.stake.call(uintG64r7gg, {from: accounts[0]});
		const uint256yZ5Cqu8 = await BACMARSLPTOKENPoolTZMuIBN.notifyRewardAmount.call(uintZD5vS8, {from: accounts[3]});
		await BACMARSLPTOKENPoolTZMuIBN.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNebtsbw = accounts[0]
		const addressgd028IC = accounts[0]
		const addressD5jXZNI = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressNebtsbw, addressgd028IC, addressD5jXZNI, {from: accounts[4]});
		const addressc1834CE = accounts[3]
		const address4e8BYV = accounts[0]
		const uintGalXT65 = BigInt("1203")
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressc1834CE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JszdcVw = await BACMARSLPTOKENPoolVvuVJ9t.earned.call(address4e8BYV, {from: accounts[2]});
		const uint256S9xuDeJ = await BACMARSLPTOKENPoolVvuVJ9t.notifyRewardAmount.call(uintGalXT65, {from: accounts[0]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256JszdcVw, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.notifyRewardAmount.call(uintGalXT65, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressnnZFRkW = accounts[0]
		const addressEMk8xLd = accounts[0]
		const addressPv0EelD = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressnnZFRkW, addressEMk8xLd, addressPv0EelD, {from: accounts[4]});
		const addressjprjx0Q = accounts[3]
		const addresstHXJJO = accounts[2]
		await BACMARSLPTOKENPoolVvuVJ9t.getReward.call({from: accounts[3]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressjprjx0Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JszdcVw = await BACMARSLPTOKENPoolVvuVJ9t.earned.call(addresstHXJJO, {from: accounts[2]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolVvuVJ9t.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRQ9ug9R = "VFJDm6KAYcWPv8DTthUFlhr9VJQ7yztZ9"
		const stringR7CbzfC = "izpTdBGdsw4QQsWhBUhQyZz99BQAJM7YIdDTT1LbHl2IMSmesIDubfk4YofJyAUalfUV7bmGgGBrgBv2Sk"
		const uintOefkzp0 = BigInt("19")
		const BACMARSLPTOKENPoolqtvOKEj = await BACMARSLPTOKENPool.new(stringRQ9ug9R, stringR7CbzfC, uintOefkzp0, {from: "0x0000000000000000000000000000000000000001"});
		const addressUN2vFV2 = accounts[1]
		await BACMARSLPTOKENPoolqtvOKEj.getReward.call({from: accounts[4]});
		const uint256ncLCcft = await BACMARSLPTOKENPoolqtvOKEj.earned.call(addressUN2vFV2, {from: accounts[3]});
		await BACMARSLPTOKENPoolqtvOKEj.getReward.call({from: accounts[0]});
		const stringLXho3hE = await BACMARSLPTOKENPoolqtvOKEj.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmyjzCbL = ""
		const stringxNXwWVG = "nARpV8w"
		const uintmOsvs6K = BigInt("148")
		const BACMARSLPTOKENPoolWxnpBb = await BACMARSLPTOKENPool.new(stringmyjzCbL, stringxNXwWVG, uintmOsvs6K, {from: "0x0000000000000000000000000000000000000001"});
		const uintvbX3DmC = BigInt("1169")
		const uintUQqFCcv = BigInt("1471")
		const uintipMP4Nf = BigInt("580")
		const uint256v56ZG1s = await BACMARSLPTOKENPoolWxnpBb.withdraw.call(uintvbX3DmC, {from: accounts[0]});
		const uint8uwq4Eqa = await BACMARSLPTOKENPoolWxnpBb.decimals.call({from: accounts[2]});
		const uint256lA09f3T = await BACMARSLPTOKENPoolWxnpBb.withdraw.call(uintUQqFCcv, {from: accounts[4]});
		const uint256DUaTEjW = await BACMARSLPTOKENPoolWxnpBb.withdraw.call(uintipMP4Nf, {from: accounts[1]});
		await BACMARSLPTOKENPoolWxnpBb.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringplaXdCP = "SGIIb6wUkwKmDoaLkEty"
		const stringFPa8x2X = "t"
		const uintzPCljw = BigInt("159")
		const BACMARSLPTOKENPoolZwaDRiR = await BACMARSLPTOKENPool.new(stringplaXdCP, stringFPa8x2X, uintzPCljw, {from: accounts[1]});
		const addressQNOUHWU = accounts[4]
		const uint8uTNqEP3 = await BACMARSLPTOKENPoolZwaDRiR.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolZwaDRiR.onlyRewardsDistribution.call({from: accounts[4]});
		const addressv88YOOL = await BACMARSLPTOKENPoolZwaDRiR.updateReward.call(addressQNOUHWU, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUoBSNtW = "jrXUzmJO7Bzv2IVNF1CnTd863OCEQx7N"
		const stringpje35bp = "F9"
		const uintInsccBf = BigInt("213")
		const BACMARSLPTOKENPooltpSw59F = await BACMARSLPTOKENPool.new(stringUoBSNtW, stringpje35bp, uintInsccBf, {from: accounts[5]});
		const uintERR6OVH = BigInt("1915")
		const addressTS5hemO = accounts[2]
		const uint256Qi2J6Xx = await BACMARSLPTOKENPooltpSw59F.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPooltpSw59F.getReward.call({from: accounts[2]});
		const uint256hszOKHo = await BACMARSLPTOKENPooltpSw59F.stake.call(uintERR6OVH, {from: accounts[4]});
		const uint256ROULzuD = await BACMARSLPTOKENPooltpSw59F.balanceOf.call(addressTS5hemO, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringW49TCUj = "s9K6TTthRDunTKf9OJbNRITBR2WUbjRxlAH4TwNXKCf4bHYXDp87rCmjDDwJicDpEKYfnyb7nHufopXESv"
		const stringOx1ChM = "dusVsMRVDnpsCNTd4xNy4lkBYl8JOdwFEbqN4fTkZ7CAGgtG5zRxm6JYmIzRJuBOrvQQC3kPbwjXtCvNMkaU"
		const uintzCzQiUc = BigInt("222")
		const BACMARSLPTOKENPoolDvHAG39 = await BACMARSLPTOKENPool.new(stringW49TCUj, stringOx1ChM, uintzCzQiUc, {from: accounts[0]});
		const bytebI8kLOR = "0x11171d1f150f150e060108011a03010b151e03140719100e1c09180f0704060f"
		const bytemSOgtSD = "0x141a1905170416090119031f1412180c010e201700101d1015101f0f04090614"
		const uintuFgLEaB = BigInt("167")
		const uintzFQ3YsQ = BigInt("767")
		const uintiyeg6AY = BigInt("963")
		await BACMARSLPTOKENPoolDvHAG39.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256HtgjdhA = await BACMARSLPTOKENPoolDvHAG39.stakeWithPermit.call(uintiyeg6AY, uintzFQ3YsQ, uintuFgLEaB, bytemSOgtSD, bytebI8kLOR, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYPwfxds = "oJJTunpMH4VRsuO7rRRRTxhzqu9gy9Mq1hBUKeA9eALby8"
		const stringyFkxkxM = "XgdtggnZSkhikKSMQSlg9ZbjNF7x5sYFgSjKTOhuch1DXttYQgQcbu6scWxvzm8UCC1TCMFRSnJKbx1XiHgHj"
		const uintikHsdMX = BigInt("94")
		const BACMARSLPTOKENPoolnbgMO9S = await BACMARSLPTOKENPool.new(stringYPwfxds, stringyFkxkxM, uintikHsdMX, {from: accounts[4]});
		const uinth6Q3dDr = BigInt("1231")
		const bytezmA9zj3 = "0x0d0e0110061e08040e0e1d17151b16060a030302181d1f0a0e19100506110e1a"
		const byteNCXxwCO = "0x010a061d041c1d121e0e0f1a01040508131c1e0a031617130205010701091714"
		const uintzFPNjLK = BigInt("58")
		const uints0NAnIe = BigInt("2031")
		const uintHuy8QVB = BigInt("114")
		const addressdx1JOPQ = accounts[1]
		const uint256TvzSVH = await BACMARSLPTOKENPoolnbgMO9S.withdraw.call(uinth6Q3dDr, {from: accounts[5]});
		const uint256gneiMB3 = await BACMARSLPTOKENPoolnbgMO9S.stakeWithPermit.call(uintHuy8QVB, uints0NAnIe, uintzFPNjLK, byteNCXxwCO, bytezmA9zj3, {from: accounts[2]});
		await BACMARSLPTOKENPoolnbgMO9S.getReward.call({from: accounts[0]});
		const uint256WElbrYR = await BACMARSLPTOKENPoolnbgMO9S.earned.call(addressdx1JOPQ, {from: accounts[0]});
		await BACMARSLPTOKENPoolnbgMO9S.exit.call({from: accounts[4]});
		const uint2568Vr1jZ = await BACMARSLPTOKENPoolnbgMO9S.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjYzvy9S = accounts[0]
		const addressd50zkRF = accounts[0]
		const addressGezOuCK = accounts[3]
		const BACMARSLPTOKENPoolVvuVJ9t = await BACMARSLPTOKENPool.new(addressjYzvy9S, addressd50zkRF, addressGezOuCK, {from: accounts[4]});
		const addressmcrJDrs = accounts[4]
		const uintjAFfksC = BigInt("111")
		const uintQqV6oHq = BigInt("389")
		const uint256vlC1pQ = await BACMARSLPTOKENPoolVvuVJ9t.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256oguWdKf = await BACMARSLPTOKENPoolVvuVJ9t.balanceOf.call(addressmcrJDrs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MolhFlE = await BACMARSLPTOKENPoolVvuVJ9t.rewardPerToken.call({from: accounts[4]});
		const uint256sVzlPhd = await BACMARSLPTOKENPoolVvuVJ9t.withdraw.call(uintjAFfksC, {from: accounts[0]});
		const uint256LCDB2fe = await BACMARSLPTOKENPoolVvuVJ9t.stake.call(uintQqV6oHq, {from: accounts[1]});
		await BACMARSLPTOKENPoolVvuVJ9t.exit.call({from: accounts[3]});

		assert.equal(uint256MolhFlE, BigInt("0"))
		assert.equal(uint256oguWdKf, BigInt("0"))
		assert.equal(uint256vlC1pQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolVvuVJ9t.withdraw.call(uintjAFfksC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressLaJujGg = accounts[0]
		const addresstgsszX1 = accounts[0]
		const addressjC0dDEN = accounts[0]
		const BACMARSLPTOKENPoolVt7NLt0 = await BACMARSLPTOKENPool.new(addressLaJujGg, addresstgsszX1, addressjC0dDEN, {from: "0x0000000000000000000000000000000000000001"});
		const uintd8Judo = BigInt("321")
		const addressm8lWfM = accounts[2]
		const byteIPzHLf6 = "0x000c021e04111c101f0e0e141c08081d0b0e170b03010b0e160a180f020a1d12"
		const bytekWdKjOT = "0x0e080b190f1c1e1309121308101e091f1e0f130f1c1302051819170b1913101f"
		const uintWUOain1 = BigInt("35")
		const uintHXJYEtv = BigInt("953")
		const uintQ15eOBa = BigInt("934")
		const uint256zQTFl2F = await BACMARSLPTOKENPoolVt7NLt0.withdraw.call(uintd8Judo, {from: accounts[3]});
		const uint256Dkiqu40 = await BACMARSLPTOKENPoolVt7NLt0.balanceOf.call(addressm8lWfM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aqqpWe9 = await BACMARSLPTOKENPoolVt7NLt0.stakeWithPermit.call(uintQ15eOBa, uintHXJYEtv, uintWUOain1, bytekWdKjOT, byteIPzHLf6, {from: accounts[0]});
		const uint256pGft2Xv = await BACMARSLPTOKENPoolVt7NLt0.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolVt7NLt0.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG00qhex = "N6VYNU4xnmpZtLhnYcXfSUEDPovOtiRHBzjDTNguIvpxOEzQdUwECpbbWN"
		const stringSf0FxKQ = "T4cY9YxePg1OtzRYqJ7j3IM68HwlixxCRetv9d"
		const uintiGMuj1Z = BigInt("32")
		const BACMARSLPTOKENPoolKJcUqLR = await BACMARSLPTOKENPool.new(stringG00qhex, stringSf0FxKQ, uintiGMuj1Z, {from: accounts[1]});
		const bytetVP910l = "0x10191c120b110901170911011f1c0d05011402090a0d0a0e0c011916060c0811"
		const byteex1Gd8Z = "0x1c100b19130409010c1619171109131d1a011a191b1f0c0c060b020418180701"
		const uintaJYI6ui = BigInt("171")
		const uintvg9tAKF = BigInt("738")
		const uintpELN6L7 = BigInt("1019")
		await BACMARSLPTOKENPoolKJcUqLR.getReward.call({from: accounts[3]});
		const uint256X8nGo05 = await BACMARSLPTOKENPoolKJcUqLR.stakeWithPermit.call(uintpELN6L7, uintvg9tAKF, uintaJYI6ui, byteex1Gd8Z, bytetVP910l, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbpmVhjJ = "mIgflJR"
		const stringULN389h = "op9DSaGWprOFYoC4kJyRoSlyT9JnItCjgX0lgMvz2fVJtiMK9bz5r5"
		const uintoy0MJ0Y = BigInt("194")
		const BACMARSLPTOKENPooltZRyI5V = await BACMARSLPTOKENPool.new(stringbpmVhjJ, stringULN389h, uintoy0MJ0Y, {from: accounts[0]});
		const byteXS8Laz = "0x1f1518070c1b0a0b020f01061b0802041017161a13010c0b1712170a041f0217"
		const bytetquKHCP = "0x07120b140d0e101e131d05171f1f19191c1a04021113090e0512121a15101305"
		const uintgcsj1dD = BigInt("171")
		const uintGo9vgQ = BigInt("60")
		const uintUIRJ0HJ = BigInt("1733")
		const addressIziUECG = accounts[1]
		const uint256ybtCgaZ = await BACMARSLPTOKENPooltZRyI5V.totalSupply.call({from: accounts[0]});
		const uint256xJEmp9O = await BACMARSLPTOKENPooltZRyI5V.getRewardForDuration.call({from: accounts[4]});
		const uint256P9hAtlA = await BACMARSLPTOKENPooltZRyI5V.stakeWithPermit.call(uintUIRJ0HJ, uintGo9vgQ, uintgcsj1dD, bytetquKHCP, byteXS8Laz, {from: accounts[2]});
		await BACMARSLPTOKENPooltZRyI5V.getReward.call({from: accounts[2]});
		const uint256Q385gf9 = await BACMARSLPTOKENPooltZRyI5V.balanceOf.call(addressIziUECG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringteNZGy9 = "3I9B6Qb"
		const stringQpel1X = "xsHXDdxVVqW"
		const uintlzhF3Yu = BigInt("156")
		const BACMARSLPTOKENPooli9xIuJ = await BACMARSLPTOKENPool.new(stringteNZGy9, stringQpel1X, uintlzhF3Yu, {from: "0x0000000000000000000000000000000000000001"});
		const addressGyOyBBy = accounts[4]
		const uint256IcvOPz6 = await BACMARSLPTOKENPooli9xIuJ.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ILm1vkF = await BACMARSLPTOKENPooli9xIuJ.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint8X6OJaLj = await BACMARSLPTOKENPooli9xIuJ.decimals.call({from: accounts[3]});
		const uint256Bw4FbLt = await BACMARSLPTOKENPooli9xIuJ.earned.call(addressGyOyBBy, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEr41Vqy = "SCXIdJaPCmvvn6rGSufpY2JPHqtHuckczNVHuJn9W4UnnYEqYUKmY94KV2LNcUAvbLD3pVcPHypscD"
		const stringeHz0oP8 = "yA7NkoTx5dL0Xv3"
		const uintQJuTmj = BigInt("100")
		const BACMARSLPTOKENPoolRYphRxC = await BACMARSLPTOKENPool.new(stringEr41Vqy, stringeHz0oP8, uintQJuTmj, {from: accounts[2]});
		const addresswUlzzd = accounts[1]
		const uintzOSvjo = BigInt("962")
		const uint256EBwa8wh = await BACMARSLPTOKENPoolRYphRxC.earned.call(addresswUlzzd, {from: accounts[2]});
		const uint256Oh7ovbY = await BACMARSLPTOKENPoolRYphRxC.withdraw.call(uintzOSvjo, {from: accounts[0]});
		const uint256u65ipIY = await BACMARSLPTOKENPoolRYphRxC.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNQvgszt = "jcj4nnCOLuodMJwiLsuslfs85ff5sqqHWzz9SJVcx13RoljW7kRGOA6qYu9C84u72"
		const stringkmhR3CI = "g8fFo5g7kHtUQVQJwEc8XN6g1CQA5"
		const uintyUNUPk0 = BigInt("138")
		const BACMARSLPTOKENPoolcXQSTwJ = await BACMARSLPTOKENPool.new(stringNQvgszt, stringkmhR3CI, uintyUNUPk0, {from: accounts[0]});
		const uintLfgFDYr = BigInt("1192")
		const uintvfwnS8b = BigInt("617")
		const uint256ihG4WeG = await BACMARSLPTOKENPoolcXQSTwJ.notifyRewardAmount.call(uintLfgFDYr, {from: accounts[3]});
		await BACMARSLPTOKENPoolcXQSTwJ.nonReentrant.call({from: accounts[0]});
		const uint256HsvzzDC = await BACMARSLPTOKENPoolcXQSTwJ.rewardPerToken.call({from: accounts[3]});
		const uint256mCpSoMr = await BACMARSLPTOKENPoolcXQSTwJ.stake.call(uintvfwnS8b, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbsvzjCx = "LCjNLlrzjrijRpMy5LGH63UrS9x4DB7zdOflSrna"
		const stringnhl7J0i = "Bn59HhmDKEwOD7wqoOZZAiJVeRWhrVrcwfSYopJosk8KolPesAbEDgJ8ljMh9AN"
		const uintR0rWz5 = BigInt("90")
		const BACMARSLPTOKENPoolymEa996 = await BACMARSLPTOKENPool.new(stringbsvzjCx, stringnhl7J0i, uintR0rWz5, {from: accounts[2]});
		const uintvrXlaze = BigInt("1552")
		const addressuqhkMUK = accounts[3]
		const uintnT0uU56 = BigInt("1952")
		const uintXHCHpxp = BigInt("1304")
		const uint256WdNW8Ln = await BACMARSLPTOKENPoolymEa996.notifyRewardAmount.call(uintvrXlaze, {from: accounts[2]});
		const uint256L3FB5Q0 = await BACMARSLPTOKENPoolymEa996.balanceOf.call(addressuqhkMUK, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolymEa996.exit.call({from: accounts[0]});
		const uint256A29h5Zg = await BACMARSLPTOKENPoolymEa996.stake.call(uintnT0uU56, {from: accounts[1]});
		const uint256cqDtVnp = await BACMARSLPTOKENPoolymEa996.getRewardForDuration.call({from: accounts[1]});
		const uint256c3uoB5t = await BACMARSLPTOKENPoolymEa996.notifyRewardAmount.call(uintXHCHpxp, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZOl5HTB = "3zUnygRPtAQ8zaZjF"
		const stringqkSQGqG = "6mutKYhn3SRhurV"
		const uintq0tLs4e = BigInt("81")
		const BACMARSLPTOKENPoolA0tjGeD = await BACMARSLPTOKENPool.new(stringZOl5HTB, stringqkSQGqG, uintq0tLs4e, {from: accounts[1]});
		const uint256Kr9lhaJ = await BACMARSLPTOKENPoolA0tjGeD.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolA0tjGeD.nonReentrant.call({from: accounts[1]});
		const uint256hJ586cz = await BACMARSLPTOKENPoolA0tjGeD.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhuls1jL = "DYhjuA0a9rBkNWFM8J"
		const stringUgncNJz = "tFf3n2TWjiOLQ1cPY9OfBJAdFilEvGnaa"
		const uintrvTOaQ = BigInt("91")
		const BACMARSLPTOKENPoolRIWX3n8 = await BACMARSLPTOKENPool.new(stringhuls1jL, stringUgncNJz, uintrvTOaQ, {from: accounts[5]});
		const uintzdI6OUT = BigInt("92")
		const addressjAFaRr5 = accounts[1]
		const uintcBcg1ZR = BigInt("1893")
		await BACMARSLPTOKENPoolRIWX3n8.getReward.call({from: accounts[2]});
		const uint256U8DNle = await BACMARSLPTOKENPoolRIWX3n8.stake.call(uintzdI6OUT, {from: accounts[2]});
		const addressRrVEz22 = await BACMARSLPTOKENPoolRIWX3n8.updateReward.call(addressjAFaRr5, {from: accounts[1]});
		const uint256e28nQ8z = await BACMARSLPTOKENPoolRIWX3n8.totalSupply.call({from: accounts[0]});
		const uint256gEztscb = await BACMARSLPTOKENPoolRIWX3n8.notifyRewardAmount.call(uintcBcg1ZR, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEh3zhRG = "stG2nvXij9w8Ah6LYrpeVt9r2KOQJGn"
		const stringVuRLIAK = "tJf6aaJLHlIvFiqh3D88KgTzNoI2OTFhgZPwpsTRDxaiUvYwCa6X16pBvn9vMpfZ"
		const uintSLhw77w = BigInt("166")
		const BACMARSLPTOKENPoolAeheW9J = await BACMARSLPTOKENPool.new(stringEh3zhRG, stringVuRLIAK, uintSLhw77w, {from: accounts[5]});
		const bytezuuxnMS = "0x1a181106051007101118050e160214191b0811061f130b1f110a1217081f1d0c"
		const byteYIeej0n = "0x171e160e0f0e0e1c1a0c0e07200515161c14141a1f1a071a0412130a1b121b1f"
		const uintWfbN8s = BigInt("152")
		const uintfRo9v0Q = BigInt("111")
		const uintXw9x4A = BigInt("1944")
		const uint8tQApILD = await BACMARSLPTOKENPoolAeheW9J.decimals.call({from: accounts[5]});
		const uint256WzuClzh = await BACMARSLPTOKENPoolAeheW9J.stakeWithPermit.call(uintXw9x4A, uintfRo9v0Q, uintWfbN8s, byteYIeej0n, bytezuuxnMS, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUD982b4 = "MePaVDyTL5fUJBUzAIa4PDksSdbKtuwTO7HbdrfiT81QFSzthyUsC6V2FvB6g7a4xUjYnaMPNjtB3oH3QU53Cxktb4GcJwOe"
		const stringb7mlGrK = "DDxdbeRsRVa8g8q0DCap8xOWVe"
		const uintU26N0hV = BigInt("62")
		const BACMARSLPTOKENPoolNa8LkhP = await BACMARSLPTOKENPool.new(stringUD982b4, stringb7mlGrK, uintU26N0hV, {from: accounts[1]});
		const addressaEOPBim = accounts[0]
		const addressvAkq3Vq = accounts[0]
		const addressFrYwYRs = accounts[4]
		const byteBN3qaQ0 = "0x170a1401111e181e081c0c071f140d021d0e15180002050f021018011e0b0b16"
		const byteRuRhgWR = "0x1018011811131a09041b0e20110d0a1b0d08111b1e10021314141f04171b1804"
		const uintVrAXcSJ = BigInt("216")
		const uint7vsN5M = BigInt("466")
		const uintERx0MEH = BigInt("881")
		const uint256gykWZv5 = await BACMARSLPTOKENPoolNa8LkhP.balanceOf.call(addressaEOPBim, {from: accounts[4]});
		const uint256Fe59NfW = await BACMARSLPTOKENPoolNa8LkhP.balanceOf.call(addressvAkq3Vq, {from: accounts[1]});
		const addressQP1X1cU = await BACMARSLPTOKENPoolNa8LkhP.updateReward.call(addressFrYwYRs, {from: accounts[1]});
		const uint256k6VpF67 = await BACMARSLPTOKENPoolNa8LkhP.stakeWithPermit.call(uintERx0MEH, uint7vsN5M, uintVrAXcSJ, byteRuRhgWR, byteBN3qaQ0, {from: accounts[4]});
		await BACMARSLPTOKENPoolNa8LkhP.getReward.call({from: accounts[4]});
		const stringxyE0tWS = await BACMARSLPTOKENPoolNa8LkhP.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringb9SyEf8 = "66ebUIzw1qdirjCpHQxRb7PQkYe1dB6ONb3vhuRwdJ5LiAmEoC7OPjxfPl8"
		const stringZxMYLg = "EVmL7iHMnAE3V2XOn86VmEi5fBiF2iqly4f5adwE5FIemLbMJVYo5z3riBg2Hn16S"
		const uintWObgcPz = BigInt("226")
		const BACMARSLPTOKENPoolnAZX20h = await BACMARSLPTOKENPool.new(stringb9SyEf8, stringZxMYLg, uintWObgcPz, {from: "0x0000000000000000000000000000000000000001"});
		const addressJUOe5DB = accounts[1]
		const uintzum8mp1 = BigInt("1026")
		const uintcA7Y6dG = BigInt("863")
		const uint256rv39qnV = await BACMARSLPTOKENPoolnAZX20h.earned.call(addressJUOe5DB, {from: accounts[3]});
		const uint256imQK1WP = await BACMARSLPTOKENPoolnAZX20h.withdraw.call(uintzum8mp1, {from: accounts[2]});
		const uint256gozuRry = await BACMARSLPTOKENPoolnAZX20h.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SiRYXn = await BACMARSLPTOKENPoolnAZX20h.notifyRewardAmount.call(uintcA7Y6dG, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcUKmtJO = "pmMpfGpii3PEKdlcA5I8qwTssMM7CuznGP79f4LrGMjCA"
		const stringPqqrYZ5 = "AUJU8Bv6AgNlDp8TruvJVTGOxqaIkrzEt0xHluf8XJAphg7YlzF4eIm2om8B3T4mZ5kRkrf"
		const uintDWfw6IZ = BigInt("119")
		const BACMARSLPTOKENPoolsZ9owY = await BACMARSLPTOKENPool.new(stringcUKmtJO, stringPqqrYZ5, uintDWfw6IZ, {from: accounts[1]});
		const uintIedSKyq = BigInt("1378")
		const addressLhulTZL = accounts[5]
		const uint256yzU2Fz5 = await BACMARSLPTOKENPoolsZ9owY.totalSupply.call({from: accounts[3]});
		const uint256eiXXz9b = await BACMARSLPTOKENPoolsZ9owY.withdraw.call(uintIedSKyq, {from: accounts[1]});
		const uint256qsokaDn = await BACMARSLPTOKENPoolsZ9owY.balanceOf.call(addressLhulTZL, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvtQqv5m = "F2NK1AD0YQwZLkwh"
		const stringIav1NLN = "mjg8HU1R4gEdZyceMyFdOS2PJnNHhGhDdYozhRnOkvRIW98FDOhbX6cVvGIBDPdgbukx83ttK7ePut52z53eUXvqadwAfroD"
		const uintAA8ACnP = BigInt("166")
		const BACMARSLPTOKENPooldCBf8eu = await BACMARSLPTOKENPool.new(stringvtQqv5m, stringIav1NLN, uintAA8ACnP, {from: "0x0000000000000000000000000000000000000001"});
		const byteevyFo0L = "0x0a0f071f1d0f06130b130e030e1f151c16091f071d1b01050912011a1c000f07"
		const byteXhSkixf = "0x12140c111014151610061a190119050f1814011c1f16190b0c1e170220021218"
		const uintxGVR68a = BigInt("76")
		const uintSmegct = BigInt("7")
		const uintMC8x1sN = BigInt("950")
		const uint256hpX13N = await BACMARSLPTOKENPooldCBf8eu.stakeWithPermit.call(uintMC8x1sN, uintSmegct, uintxGVR68a, byteXhSkixf, byteevyFo0L, {from: accounts[2]});
		const uint8yVFstgi = await BACMARSLPTOKENPooldCBf8eu.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPmj9pTT = "BSvBZ5X"
		const stringF3GaxN = "WHMPomnjskFdPM4SUYOuLofrMl7JgAcaBJC1aIXjUJ1CxFca9jDcXHLk7lOKl8lOIVnt8uB"
		const uintdC80puj = BigInt("41")
		const BACMARSLPTOKENPoolvcgNWj = await BACMARSLPTOKENPool.new(stringPmj9pTT, stringF3GaxN, uintdC80puj, {from: accounts[1]});
		const addressAqM2Qmy = accounts[3]
		const byteWyeRB2y = "0x0e20071b0a04111d200e161d13090b0808070b1c161b120c01051b031c101919"
		const byteoObFWIC = "0x1002070e13190118001d0a140d0a031e0b09111c090901110e041e0213180719"
		const uintWhdXEM3 = BigInt("39")
		const uinthSaWaN = BigInt("1783")
		const uintGNqP5tz = BigInt("1394")
		const uint256h1A2z26 = await BACMARSLPTOKENPoolvcgNWj.balanceOf.call(addressAqM2Qmy, {from: accounts[1]});
		const uint2568GbbWf = await BACMARSLPTOKENPoolvcgNWj.stakeWithPermit.call(uintGNqP5tz, uinthSaWaN, uintWhdXEM3, byteoObFWIC, byteWyeRB2y, {from: accounts[1]});
		const stringGZ4D7fZ = await BACMARSLPTOKENPoolvcgNWj.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringO8jGNa5 = "k5K8J9FTOp"
		const stringiz8qyJi = "17KJtxtefOhmGnyhOnvEv0droWyOkEvdHEL4EKCv7yLR5fOw7l4i8T8DOPOkgQjGGjAl1AFv"
		const uintUAnr3UR = BigInt("235")
		const BACMARSLPTOKENPoolGbdval = await BACMARSLPTOKENPool.new(stringO8jGNa5, stringiz8qyJi, uintUAnr3UR, {from: accounts[1]});
		const uintPi1xiSh = BigInt("926")
		await BACMARSLPTOKENPoolGbdval.onlyRewardsDistribution.call({from: accounts[1]});
		const stringpTBrFAV = await BACMARSLPTOKENPoolGbdval.name.call({from: accounts[5]});
		await BACMARSLPTOKENPoolGbdval.exit.call({from: accounts[1]});
		const uint8ufkgEZ = await BACMARSLPTOKENPoolGbdval.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolGbdval.getReward.call({from: accounts[0]});
		const uint256x2Cosqw = await BACMARSLPTOKENPoolGbdval.notifyRewardAmount.call(uintPi1xiSh, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRZPbEnW = "UkF8KVV9i1HqYj5LWUW9DEj0cK7oYmMPSE8V8T328kINOuiO2jq1mH3Ou85jpTc7"
		const stringiq5Xskl = "eJ6V1ZEsTpPsc3X7lhaWbQa1rfC84NVMpSS5aKkybAeiQyjklIVRuoi0Lsdgi1LCSxRDrajT66UAaXnR4RL4ukc"
		const uintAuPKag = BigInt("19")
		const BACMARSLPTOKENPoolG7QhnI0 = await BACMARSLPTOKENPool.new(stringRZPbEnW, stringiq5Xskl, uintAuPKag, {from: accounts[0]});
		const uintZYTLCMW = BigInt("145")
		const addressKAQaR08 = accounts[2]
		const uint256CHBUYnn = await BACMARSLPTOKENPoolG7QhnI0.withdraw.call(uintZYTLCMW, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolG7QhnI0.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256XLegUxV = await BACMARSLPTOKENPoolG7QhnI0.earned.call(addressKAQaR08, {from: "0x0000000000000000000000000000000000000001"});
		const uint256H0Bxhck = await BACMARSLPTOKENPoolG7QhnI0.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmzF4wLU = "BcYQDfdDo40GdFvs9szfCrLR22I30UlL5mYn7gO1i7WgB6LkC6PN2uuVFrdkMRj"
		const stringe45pRV = "TgWbDKcNztOp3iM7EpEaqCn8DyW3nuuFv5lNN0JBb"
		const uintzVOwOtA = BigInt("149")
		const BACMARSLPTOKENPoolQ5M4j93 = await BACMARSLPTOKENPool.new(stringmzF4wLU, stringe45pRV, uintzVOwOtA, {from: accounts[4]});
		const uint256Q4GVTX9 = await BACMARSLPTOKENPoolQ5M4j93.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolQ5M4j93.nonReentrant.call({from: accounts[0]});
		const uint256RARgg2q = await BACMARSLPTOKENPoolQ5M4j93.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolQ5M4j93.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDarN3qX = "Kvu9mGEPiz9rHDfWOnzywoLS4cojp2HCpaBQ3zHGZQe8o6UptmW3MhH6dal7hqWhc8"
		const stringrMfWXWH = "xw1ZyLqvqPchehfiJCLtUFeC7J6nHeeyPnV7SDvjWMFljU0Uk7jt7zSvs43x4zUuLjFbBV"
		const uintrF5VbPf = BigInt("70")
		const BACMARSLPTOKENPoolPdFvBbd = await BACMARSLPTOKENPool.new(stringDarN3qX, stringrMfWXWH, uintrF5VbPf, {from: accounts[2]});
		const uint5CkPkA = BigInt("1629")
		const uintMw5bec = BigInt("1014")
		const uint256ZhNw20b = await BACMARSLPTOKENPoolPdFvBbd.getRewardForDuration.call({from: accounts[0]});
		const uint256VEW7p7j = await BACMARSLPTOKENPoolPdFvBbd.notifyRewardAmount.call(uint5CkPkA, {from: accounts[2]});
		const uint256QXmBFC = await BACMARSLPTOKENPoolPdFvBbd.stake.call(uintMw5bec, {from: accounts[1]});
		await BACMARSLPTOKENPoolPdFvBbd.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFdXZkb = "JEimbzx88idoWENKESwr5r26u1jH0"
		const stringt75IAF8 = "aRUHu31dpe4xOqIKv1favCtORonSCqGkjIofeIA8vCojPAWMmsQy54JqpO1ejAThjHQKhSYs9n47"
		const uintLYkQy8J = BigInt("72")
		const BACMARSLPTOKENPoolir2WVgY = await BACMARSLPTOKENPool.new(stringFdXZkb, stringt75IAF8, uintLYkQy8J, {from: "0x0000000000000000000000000000000000000001"});
		const stringQTfuyRk = await BACMARSLPTOKENPoolir2WVgY.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolir2WVgY.nonReentrant.call({from: accounts[2]});
		const stringuPb721e = await BACMARSLPTOKENPoolir2WVgY.name.call({from: accounts[1]});
		await BACMARSLPTOKENPoolir2WVgY.exit.call({from: accounts[4]});
		const uint8fXkvRfU = await BACMARSLPTOKENPoolir2WVgY.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringp1t3pJI = "gPT6FslE9tKKSlNTikWwgMEJAAilKM25pk47NsNDqfQNdDF92T4XmJ91h87Do8oYLF1VGpEG2XxSZpXM32NbBymBeA3B"
		const stringvEgDIK8 = "SxcgbvvsdphYaHP"
		const uinth4T7yD = BigInt("202")
		const BACMARSLPTOKENPoolTmjdaks = await BACMARSLPTOKENPool.new(stringp1t3pJI, stringvEgDIK8, uinth4T7yD, {from: accounts[3]});
		const uinttoOnN60 = BigInt("744")
		const uint256p0eZaZT = await BACMARSLPTOKENPoolTmjdaks.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolTmjdaks.nonReentrant.call({from: accounts[1]});
		const uint256HiO12K = await BACMARSLPTOKENPoolTmjdaks.withdraw.call(uinttoOnN60, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuWAHKDU = "YHqoeElVoD577994qnICFBoocflPi5Hi37ke2FlWpwPFsj8hZuQ7"
		const stringXQc1gaJ = "E33MdGYipD7kk4f26QUfEnL3QrIeoRDND8tyqRCUp5sgYJnG766U7BYX4wvR7P5xhK0qjhIOFawDkcjxddxXRS2EkFllWMX4yjk"
		const uintnbhXnao = BigInt("66")
		const BACMARSLPTOKENPoolAUTZBKO = await BACMARSLPTOKENPool.new(stringuWAHKDU, stringXQc1gaJ, uintnbhXnao, {from: accounts[0]});
		const uintgxg6Zpz = BigInt("1120")
		await BACMARSLPTOKENPoolAUTZBKO.nonReentrant.call({from: accounts[3]});
		const uint8N9oXZx = await BACMARSLPTOKENPoolAUTZBKO.decimals.call({from: accounts[5]});
		const uint256vLPEITv = await BACMARSLPTOKENPoolAUTZBKO.withdraw.call(uintgxg6Zpz, {from: accounts[2]});
		await BACMARSLPTOKENPoolAUTZBKO.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcSa84U = "DczSVJ4V3QJiqSXQ5kUEWEou2sf1GAZaIsHy4QGabJwHcFZsvP2BsJNFHmnLBYgUTK"
		const stringu3mlSuu = "bx8FXPY5k9AVjyCpcOujDvKzzleEM748rpklnW6SqThoyj3qDGoM5TIQzd2ZGc4tYrjleweWv9vE"
		const uintpXtQS08 = BigInt("253")
		const BACMARSLPTOKENPoolzgNIRRq = await BACMARSLPTOKENPool.new(stringcSa84U, stringu3mlSuu, uintpXtQS08, {from: accounts[2]});
		const addressbMcQdIH = accounts[1]
		await BACMARSLPTOKENPoolzgNIRRq.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256KlO52nT = await BACMARSLPTOKENPoolzgNIRRq.lastTimeRewardApplicable.call({from: accounts[2]});
		const stringu6x4sXo = await BACMARSLPTOKENPoolzgNIRRq.symbol.call({from: accounts[3]});
		const uint256fM64MDD = await BACMARSLPTOKENPoolzgNIRRq.rewardPerToken.call({from: accounts[1]});
		const addressXuy2mmB = await BACMARSLPTOKENPoolzgNIRRq.updateReward.call(addressbMcQdIH, {from: accounts[3]});
		await BACMARSLPTOKENPoolzgNIRRq.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUysk8Ih = "I9MmCSO4SwxLVeJRROxb9Znc9sNPuKjS9LFeTKF4opNorNH3ThX2xOar21koqdRZbG63"
		const stringidbbURk = "DPxvC9ibs6SX9aaccPzUXtFl3mvNVEvLKJmsodL8HzxITGoCxjtfUDDw02oNjRddMonI5Sc"
		const uintpRc781r = BigInt("19")
		const BACMARSLPTOKENPoolKotZacy = await BACMARSLPTOKENPool.new(stringUysk8Ih, stringidbbURk, uintpRc781r, {from: accounts[3]});
		const addressFu2qRp7 = accounts[3]
		const stringwPh3VM = await BACMARSLPTOKENPoolKotZacy.symbol.call({from: accounts[2]});
		const uint256O2ohju0 = await BACMARSLPTOKENPoolKotZacy.earned.call(addressFu2qRp7, {from: accounts[1]});
		const stringhu8n0xx = await BACMARSLPTOKENPoolKotZacy.name.call({from: accounts[0]});
		const uint2567eUs2H = await BACMARSLPTOKENPoolKotZacy.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvn5URIU = "VUE7yk9ak"
		const stringWEhwXl1 = "6QKVgub1NJbrrh9ycXrsvT2pyg6tuJ"
		const uintylIsTb = BigInt("82")
		const BACMARSLPTOKENPoolo3i3iEe = await BACMARSLPTOKENPool.new(stringvn5URIU, stringWEhwXl1, uintylIsTb, {from: accounts[0]});
		const uintYGp1r7l = BigInt("1054")
		const uintBYns49e = BigInt("1785")
		const uint256X8YIPp9 = await BACMARSLPTOKENPoolo3i3iEe.notifyRewardAmount.call(uintYGp1r7l, {from: accounts[3]});
		const uint256SQAYWw6 = await BACMARSLPTOKENPoolo3i3iEe.withdraw.call(uintBYns49e, {from: accounts[2]});
		const stringHeNwggN = await BACMARSLPTOKENPoolo3i3iEe.name.call({from: accounts[2]});
		const uint256hHHIYaV = await BACMARSLPTOKENPoolo3i3iEe.totalSupply.call({from: accounts[1]});
		const uint256GdOk1hA = await BACMARSLPTOKENPoolo3i3iEe.totalSupply.call({from: accounts[4]});
		const uint8gzoC4K9 = await BACMARSLPTOKENPoolo3i3iEe.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeXaV6h7 = "ubQQdlkMDyoif0teSiq2ViteIPC5Nah8KMdBaCIMciRPcYuoQxEI8ikEwAVDKbiXslHeyNf29UhwwU5wYu4Oxfriu5kQlR"
		const stringZEuh83K = "A3jVIOjIWlVpzUhwl21umUnwW2CLglJxNHU1NFbN3wBe4KxIAN2EKm9YvqMM0pR8iWwEtJ8NQL2VZU7XQIwHYTArkNu7krfw5Y"
		const uintdB1axL5 = BigInt("107")
		const BACMARSLPTOKENPoolnENw9fO = await BACMARSLPTOKENPool.new(stringeXaV6h7, stringZEuh83K, uintdB1axL5, {from: accounts[4]});
		const uintrDjKt24 = BigInt("1867")
		const addresswacm43 = accounts[2]
		await BACMARSLPTOKENPoolnENw9fO.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NNPVrd = await BACMARSLPTOKENPoolnENw9fO.withdraw.call(uintrDjKt24, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xM1D6z = await BACMARSLPTOKENPoolnENw9fO.balanceOf.call(addresswacm43, {from: accounts[4]});
		const stringadvE3zO = await BACMARSLPTOKENPoolnENw9fO.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNTbNwB = "qm1lNugrssDg0ENgpFbzTYvbW91UQWTU5QbhsNquaXjX2Rr"
		const stringaXLQehQ = "WSfpSs4WHx1UFxTCN608LvfL21zyHdxFWOBBJJO4eQxo2yfzgKN4"
		const uintP46R7k = BigInt("83")
		const BACMARSLPTOKENPooleUk2cga = await BACMARSLPTOKENPool.new(stringNTbNwB, stringaXLQehQ, uintP46R7k, {from: accounts[5]});
		const addresso6l9g1O = accounts[3]
		const uintILm4d4 = BigInt("634")
		const uinthp8HxW8 = BigInt("1003")
		const uintXMBbphS = BigInt("1631")
		const bytewB8ymx = "0x1217020411120616161c0b0b0a0d0d0c1b19030e20090e0120090d0b1f0c1c01"
		const byteRDCv9HR = "0x03131e130119121204091e09021b141f1d080c1e1b0c121c18090d0e09041113"
		const uintoh69yXL = BigInt("114")
		const uintqx4qc5H = BigInt("1311")
		const uintalokn7h = BigInt("1988")
		const uint256My0f7I = await BACMARSLPTOKENPooleUk2cga.balanceOf.call(addresso6l9g1O, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ugmx3wy = await BACMARSLPTOKENPooleUk2cga.notifyRewardAmount.call(uintILm4d4, {from: accounts[0]});
		const uint256UfUyCpX = await BACMARSLPTOKENPooleUk2cga.notifyRewardAmount.call(uinthp8HxW8, {from: accounts[4]});
		const uint256pdi8WRV = await BACMARSLPTOKENPooleUk2cga.stake.call(uintXMBbphS, {from: accounts[0]});
		const uint256LZQwyMv = await BACMARSLPTOKENPooleUk2cga.stakeWithPermit.call(uintalokn7h, uintqx4qc5H, uintoh69yXL, byteRDCv9HR, bytewB8ymx, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoX1mVhd = "Qv8L5djhGqdmB8oCnSC"
		const string6camLp = "mMYjah3Ybm1VNDeVQeHTxwoYArp1oK4RqSBWr8exE0XSgILdgwW92"
		const uintOqj7h3 = BigInt("148")
		const BACMARSLPTOKENPoolaDcHZEO = await BACMARSLPTOKENPool.new(stringoX1mVhd, string6camLp, uintOqj7h3, {from: accounts[4]});
		const addressklzapJb = accounts[3]
		const addressLT2on3 = accounts[4]
		const uint8WJQQtbP = await BACMARSLPTOKENPoolaDcHZEO.decimals.call({from: accounts[4]});
		const uint256Jp46uqV = await BACMARSLPTOKENPoolaDcHZEO.earned.call(addressklzapJb, {from: accounts[5]});
		await BACMARSLPTOKENPoolaDcHZEO.getReward.call({from: accounts[4]});
		const uint256et3nj4V = await BACMARSLPTOKENPoolaDcHZEO.rewardPerToken.call({from: accounts[1]});
		const uint256HcmJNZM = await BACMARSLPTOKENPoolaDcHZEO.totalSupply.call({from: accounts[1]});
		const addressgZx2l1l = await BACMARSLPTOKENPoolaDcHZEO.updateReward.call(addressLT2on3, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQxr08WT = "hGQYSEMbmofS3NAPloxvn5pmtI386qWrnSfye5u9GIfbEzap1xvT2O2KTOXIQCioCCXcXlQ7qrS9mgFG58M2Tj7a"
		const stringGm5ahO7 = "SrLjrcowUbmnL26dhsKKSgbbn2c3LgEpduGI6oVVKe1"
		const uintBjtFJ1D = BigInt("220")
		const BACMARSLPTOKENPoolRAxDYlV = await BACMARSLPTOKENPool.new(stringQxr08WT, stringGm5ahO7, uintBjtFJ1D, {from: accounts[3]});
		const addressmm97RB = accounts[3]
		const uintvHnHp83 = BigInt("1024")
		await BACMARSLPTOKENPoolRAxDYlV.exit.call({from: accounts[0]});
		const uint256mIN4WVe = await BACMARSLPTOKENPoolRAxDYlV.balanceOf.call(addressmm97RB, {from: accounts[5]});
		await BACMARSLPTOKENPoolRAxDYlV.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolRAxDYlV.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256mgOvBo5 = await BACMARSLPTOKENPoolRAxDYlV.stake.call(uintvHnHp83, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaHGoQeJ = "TaG0dayxKwlZh9AlS9RIYRuAKXNxC59BVdZJSJR0d6Vs72MLBlVnnl9ytCevbT"
		const stringyi3NMQ5 = "Sa"
		const uintGvjwXi0 = BigInt("117")
		const BACMARSLPTOKENPoolDElxCMO = await BACMARSLPTOKENPool.new(stringaHGoQeJ, stringyi3NMQ5, uintGvjwXi0, {from: accounts[3]});
		const addressJDOXNnY = accounts[4]
		const uintKiCOlQb = BigInt("1749")
		const uint256tR1AAcO = await BACMARSLPTOKENPoolDElxCMO.balanceOf.call(addressJDOXNnY, {from: accounts[4]});
		const uint256MLAC3Gw = await BACMARSLPTOKENPoolDElxCMO.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256ear2ZKa = await BACMARSLPTOKENPoolDElxCMO.notifyRewardAmount.call(uintKiCOlQb, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNB5w35Z = "Y6qNksztjN4ehdKm2rfY2CarumDXC"
		const stringjLoxc41 = "4BF3Fkn457YKjk2zjJHutiOkOWkMfqqPoWBqQCQv7NzsyNyxYcYtO7hVSMeidLs1lnlt33VB8aHM"
		const uintWs8Jl7E = BigInt("20")
		const BACMARSLPTOKENPoolXGrB10A = await BACMARSLPTOKENPool.new(stringNB5w35Z, stringjLoxc41, uintWs8Jl7E, {from: accounts[2]});
		const uintVpO24b9 = BigInt("1165")
		const uint8YYnkg83 = await BACMARSLPTOKENPoolXGrB10A.decimals.call({from: accounts[0]});
		const stringhqMZL7W = await BACMARSLPTOKENPoolXGrB10A.symbol.call({from: accounts[4]});
		const uint256bW1ZFZ = await BACMARSLPTOKENPoolXGrB10A.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolXGrB10A.exit.call({from: accounts[3]});
		const uint256mNLq521 = await BACMARSLPTOKENPoolXGrB10A.stake.call(uintVpO24b9, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeAFQUp9 = "B41hHl3l2gMqEXbvnGuSmAY6UqhyYzIkGoyPOjgn7z5KzqES7EtCzgSac"
		const stringvZucPP8 = "TfgPVuDM4R25qJpicQGmmkS476q"
		const uinti1wiy9v = BigInt("163")
		const BACMARSLPTOKENPoolxxP28tR = await BACMARSLPTOKENPool.new(stringeAFQUp9, stringvZucPP8, uinti1wiy9v, {from: accounts[4]});
		const addressA9hyGk1 = "0x0000000000000000000000000000000000000001"
		const addresseyeg7jz = accounts[5]
		const uint256aI7lLEJ = await BACMARSLPTOKENPoolxxP28tR.balanceOf.call(addressA9hyGk1, {from: accounts[0]});
		const uint256pN2Wuc4 = await BACMARSLPTOKENPoolxxP28tR.earned.call(addresseyeg7jz, {from: accounts[4]});
		const stringkZ7IWij = await BACMARSLPTOKENPoolxxP28tR.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEp62ONM = "y3RMFa7HCAJok12jO4IgnHXdtnTG5Y6JwJ6mXimoG3seONUfbHNzSJyuJuqIUqYaqdS7IkV3yyt8"
		const stringw6sf40w = "MsgcGu2w4B3zybMyXNKhhck5RjbVGQRUTeB4lxioAd4EHrOIlfS32RTNDuLlGMF9"
		const uinthO9fc6O = BigInt("71")
		const BACMARSLPTOKENPoollz8cvyX = await BACMARSLPTOKENPool.new(stringEp62ONM, stringw6sf40w, uinthO9fc6O, {from: accounts[2]});
		const uint256Y4OoT7l = await BACMARSLPTOKENPoollz8cvyX.totalSupply.call({from: accounts[1]});
		const stringXIMphdy = await BACMARSLPTOKENPoollz8cvyX.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string2tYNVl = "9xiy7ebYcijVERDhr6zQZs1vwNnblwHbn5cMHraTX6wLAeJIJBojhI1VHdBCBRvvVQM6Q"
		const stringHnhqOJv = "A5RUeshRsd7pDxiYZon9UJwmgdItRVrAy5PyxYVfUKxf24YThe9oizxps76wkdcpD9zQVMJPcgbUB7IKU"
		const uintxTTP2wW = BigInt("107")
		const BACMARSLPTOKENPoolhpgd6ch = await BACMARSLPTOKENPool.new(string2tYNVl, stringHnhqOJv, uintxTTP2wW, {from: accounts[2]});
		const uintxZCQVV0 = BigInt("351")
		const uint256hElwj8q = await BACMARSLPTOKENPoolhpgd6ch.withdraw.call(uintxZCQVV0, {from: accounts[3]});
		const uint8VeTQyet = await BACMARSLPTOKENPoolhpgd6ch.decimals.call({from: accounts[1]});
		const uint256TvcmCIS = await BACMARSLPTOKENPoolhpgd6ch.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVbbVtY = "xVaJJqpJSuWHmBkYezlLTqIfEUYuPQXXQ3GbKpPxPvLjBQzPg7zM26tHp8hdLL6ftGzun3ES"
		const stringo5cEm0 = "UMsCMgWYJUdR3iStfCltORi4XyPw2PyDCYOje8zRGUBrhrRQHT6BIzbAFqEvABmPmYJm9Zh2eaxT1C"
		const uintAWfOJjc = BigInt("127")
		const BACMARSLPTOKENPoolVT9J0J4 = await BACMARSLPTOKENPool.new(stringVbbVtY, stringo5cEm0, uintAWfOJjc, {from: accounts[1]});
		const addressQ3ZpPG9 = accounts[4]
		const addressCpz3EbL = "0x0000000000000000000000000000000000000001"
		const uint256r5BQwrG = await BACMARSLPTOKENPoolVT9J0J4.earned.call(addressQ3ZpPG9, {from: accounts[4]});
		const uint256OXatNE = await BACMARSLPTOKENPoolVT9J0J4.balanceOf.call(addressCpz3EbL, {from: accounts[0]});
		const uint256LnFiqXx = await BACMARSLPTOKENPoolVT9J0J4.totalSupply.call({from: accounts[0]});
		const stringULLcMXK = await BACMARSLPTOKENPoolVT9J0J4.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRMEhHSt = "9m9HeVAVwt60o0BbbWz1NWIpw92mouYPyH6o6wmgA23ABOpx134RxylNGGWGIoc3i9cCKWWCB1"
		const stringaKDhnr6 = "dvVk26u"
		const uintyouYVh = BigInt("32")
		const BACMARSLPTOKENPoolud6a6mO = await BACMARSLPTOKENPool.new(stringRMEhHSt, stringaKDhnr6, uintyouYVh, {from: accounts[2]});
		const addresse4UkfvT = accounts[1]
		const uintsaW2PZL = BigInt("2004")
		const uint256VZaJGED = await BACMARSLPTOKENPoolud6a6mO.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressQdHGFEp = await BACMARSLPTOKENPoolud6a6mO.updateReward.call(addresse4UkfvT, {from: accounts[4]});
		const uint256xIYQJDK = await BACMARSLPTOKENPoolud6a6mO.stake.call(uintsaW2PZL, {from: accounts[0]});
		const stringz0E8t6r = await BACMARSLPTOKENPoolud6a6mO.name.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
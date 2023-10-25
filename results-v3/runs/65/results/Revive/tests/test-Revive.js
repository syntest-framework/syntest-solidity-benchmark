const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const Revivehn6TpT6 = await Revive.new({from: accounts[0]});
		const uintdIinBWy = BigInt("1206")
		const addressDkSnVo = accounts[0]
		const addressBkQxzOi = accounts[5]
		const uint5ARwdW = BigInt("1638")
		const addressfKiy7xY = accounts[1]
		const uintHOgXZt = BigInt("1343")
		const uintfcGn26m = BigInt("987")
		const byteTcicaa = "0x071e120013051f040d0817150819151e170601180f0d1d04051c0c201d00131e"
		const addresscvloas = accounts[0]
		const boolMqJrQQ2 = await Revivehn6TpT6.decreaseAllowance.call(addressDkSnVo, uintdIinBWy, {from: accounts[1]});
		const uint256TbEJtMR = await Revivehn6TpT6.getUnlockableTokens.call(addressBkQxzOi, {from: accounts[4]});
		const boolu1aPA7E = await Revivehn6TpT6.approve.call(addressfKiy7xY, uint5ARwdW, {from: accounts[3]});
		const boolKJaCvwl = await Revivehn6TpT6.lock.call(byteTcicaa, uintfcGn26m, uintHOgXZt, {from: accounts[5]});
		const addresswLtqguJ = await Revivehn6TpT6.transferOwnership.call(addresscvloas, {from: accounts[3]});

		await expect(Revivehn6TpT6.decreaseAllowance.call(addressDkSnVo, uintdIinBWy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTpSFmrY = await Revive.new({from: accounts[3]});
		const uintnBw5JsU = BigInt("1448")
		const addressFE6sM3 = accounts[4]
		const uintGHkkDLi = BigInt("1062")
		const addressA9pCJHd = accounts[4]
		const addressxoX5PV = accounts[1]
		const boolziThDvx = await ReviveTpSFmrY.approve.call(addressFE6sM3, uintnBw5JsU, {from: accounts[1]});
		const booliR5HKjA = await ReviveTpSFmrY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressUPkEGyI = await ReviveTpSFmrY.recoverERC20.call(addressA9pCJHd, uintGHkkDLi, {from: accounts[3]});
		const addresslwIJGtV = await ReviveTpSFmrY.transferOwnership.call(addressxoX5PV, {from: accounts[4]});

		assert.equal(booliR5HKjA, false)
		assert.equal(boolziThDvx, true)
		await expect(ReviveTpSFmrY.recoverERC20.call(addressA9pCJHd, uintGHkkDLi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const addressW51jEzW = accounts[1]
		const addressx3JRsd = accounts[2]
		const uintWjOQ1DK = BigInt("551")
		const addressH6hYVA2 = accounts[0]
		const uint256KmWL3nN = await Reviveot2lp6p.totalBalanceOf.call(addressW51jEzW, {from: accounts[5]});
		const addresstuEmxEL = await Reviveot2lp6p.owner.call({from: accounts[1]});
		const uint256F1mQcEv = await Reviveot2lp6p.getUnlockableTokens.call(addressx3JRsd, {from: accounts[5]});
		const boolBzQkr9 = await Reviveot2lp6p.approve.call(addressH6hYVA2, uintWjOQ1DK, {from: accounts[0]});

		assert.equal(addresstuEmxEL, 0xF20FBC5d8e8e2A5828B07F2e17AC9990E5358f38)
		assert.equal(boolBzQkr9, true)
		assert.equal(uint256F1mQcEv, BigInt("0"))
		assert.equal(uint256KmWL3nN, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivegQa0foZ = await Revive.new({from: accounts[1]});
		const addresskpATYy = accounts[1]
		const uintJ1FsMkD = BigInt("1788")
		const addressdyehCbc = accounts[1]
		const addressRgZQ8ly = accounts[4]
		const addresstUScOyB = accounts[1]
		const addresstQ4dblf = await RevivegQa0foZ.owner.call({from: accounts[2]});
		const uint256CQrXS7s = await RevivegQa0foZ.totalBalanceOf.call(addresskpATYy, {from: accounts[5]});
		const boolQQv8AZF = await RevivegQa0foZ.transferFrom.call(addressRgZQ8ly, addressdyehCbc, uintJ1FsMkD, {from: accounts[3]});
		const addresshFf7DK = await RevivegQa0foZ.transferOwnership.call(addresstUScOyB, {from: accounts[2]});
		await RevivegQa0foZ.renounceOwnership.call({from: accounts[4]});

		assert.equal(addresstQ4dblf, 0x983e070B3FbfeB49cdc19b70553Df4A3f293f535)
		assert.equal(uint256CQrXS7s, BigInt("3000000000000000000000000000"))
		await expect(RevivegQa0foZ.transferFrom.call(addressRgZQ8ly, addressdyehCbc, uintJ1FsMkD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveuly8Pbg = await Revive.new({from: accounts[4]});
		const addressALGEUSC = accounts[1]
		const addressawQSSdi = accounts[2]
		const byteUmPezch = "0x0d07181f01091a0f080b080913070d1e1e0b1b11040e18151f13091e13092004"
		const addressrG8sTNF = accounts[4]
		const uint256irIX4K3 = await Reviveuly8Pbg.totalSupply.call({from: accounts[5]});
		const uint256P2RsuhG = await Reviveuly8Pbg.allowance.call(addressawQSSdi, addressALGEUSC, {from: accounts[3]});
		const uint256gXl86pa = await Reviveuly8Pbg.tokensUnlockable.call(addressrG8sTNF, byteUmPezch, {from: accounts[3]});

		assert.equal(uint256P2RsuhG, BigInt("0"))
		assert.equal(uint256gXl86pa, BigInt("0"))
		assert.equal(uint256irIX4K3, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const uint2zTDkU = BigInt("957")
		const uinteY3lWSn = BigInt("1813")
		const bytez3iTJn1 = "0x1b1f141605100e0217190c1819181112131d2004170a19080b191511111b1305"
		const addressgLdQEBA = accounts[4]
		const bytesWCwx3p = "0x1c06111004080605071b0d091a0108141706020d1f10120e201f0b1b1b1e1105"
		const addressKIOPlKS = accounts[3]
		const uintBJeVJzs = BigInt("463")
		const byteCerHL8 = "0x0c041c18170a120e171a170d0b141e0300141f0700071201030808080111070e"
		const boolyU7hUFB = await ReviveVnzT8yS.transferWithLock.call(addressgLdQEBA, bytez3iTJn1, uinteY3lWSn, uint2zTDkU, {from: accounts[2]});
		const uint256UwDA38 = await ReviveVnzT8yS.tokensUnlockable.call(addressKIOPlKS, bytesWCwx3p, {from: accounts[5]});
		const boolfgug9vQ = await ReviveVnzT8yS.extendLock.call(byteCerHL8, uintBJeVJzs, {from: accounts[1]});

		assert.equal(boolyU7hUFB, true)
		assert.equal(uint256UwDA38, BigInt("0"))
		await expect(ReviveVnzT8yS.extendLock.call(byteCerHL8, uintBJeVJzs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivet7uUup = await Revive.new({from: accounts[3]});
		const byteelDdMU = "0x01070400190d0c061e04011f0410090e0713160d10151c141515200f0b0b1b0a"
		const addressRrkABrc = accounts[3]
		const uintbYBFFE4 = BigInt("1250")
		const bytenb8WqnU = "0x130e0917191601160a10050e110d1a1e130e0e101a07091e100f1c191716130c"
		const addressUkXz4Gz = accounts[2]
		const uint256BVuy8Gn = await Revivet7uUup.tokensUnlockable.call(addressRrkABrc, byteelDdMU, {from: accounts[1]});
		const booll7sDVdD = await Revivet7uUup.increaseLockAmount.call(bytenb8WqnU, uintbYBFFE4, {from: accounts[0]});
		const uint256oYRyXZV = await Revivet7uUup.totalBalanceOf.call(addressUkXz4Gz, {from: accounts[2]});
		const boolUm1Nvdk = await Revivet7uUup.isOwner.call({from: accounts[4]});

		assert.equal(uint256BVuy8Gn, BigInt("0"))
		await expect(Revivet7uUup.increaseLockAmount.call(bytenb8WqnU, uintbYBFFE4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const addressBiAHUUQ = accounts[2]
		const uintv4Njiy7 = BigInt("85")
		const bytezfNvHkC = "0x201c0c05130513080a100d100e131210100b0b0b0f130501190e11000f1c151c"
		const addressjYuI6nA = accounts[2]
		const uintRgoxG3 = BigInt("551")
		const addressYY8l2gY = accounts[0]
		const addresstuEmxEL = await Reviveot2lp6p.owner.call({from: accounts[1]});
		const uint256F1mQcEv = await Reviveot2lp6p.getUnlockableTokens.call(addressBiAHUUQ, {from: accounts[5]});
		const uint256X5CFjt3 = await Reviveot2lp6p.tokensLockedAtTime.call(addressjYuI6nA, bytezfNvHkC, uintv4Njiy7, {from: accounts[4]});
		const boolBzQkr9 = await Reviveot2lp6p.approve.call(addressYY8l2gY, uintRgoxG3, {from: accounts[0]});
		await Reviveot2lp6p.onlyOwner.call({from: accounts[2]});

		assert.equal(addresstuEmxEL, 0xF20FBC5d8e8e2A5828B07F2e17AC9990E5358f38)
		assert.equal(boolBzQkr9, true)
		assert.equal(uint256F1mQcEv, BigInt("0"))
		assert.equal(uint256X5CFjt3, BigInt("0"))
		await expect(Reviveot2lp6p.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveo4NPRsD = await Revive.new({from: accounts[3]});
		const uintRPIcSHl = BigInt("270")
		const uintWWr93fw = BigInt("1658")
		const uintqpOJKdn = BigInt("517")
		const byteGWF9Z3I = "0x081d051a121406001d021f011b191e0e111317121a152008181c180d04080608"
		const uint2564paoxu = await Reviveo4NPRsD.recoverERC20.call(uintRPIcSHl, {from: accounts[1]});
		const boolkxyalP = await Reviveo4NPRsD.lock.call(byteGWF9Z3I, uintqpOJKdn, uintWWr93fw, {from: accounts[3]});

		await expect(Reviveo4NPRsD.recoverERC20.call(uintRPIcSHl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const byteMcX0t7F = "0x1c06111004080605071b0d091a0108141706020d1f10120e201f0b1b1b1e1105"
		const addressfIQdohh = accounts[4]
		const uintLOKfREL = BigInt("337")
		const uintyjzfORS = BigInt("470")
		const byteTGwqmim = "0x0c041c18170a120e171a170d0b141e0300141f0700071201030808080111070e"
		const uint256UwDA38 = await ReviveVnzT8yS.tokensUnlockable.call(addressfIQdohh, byteMcX0t7F, {from: accounts[5]});
		const uint256gGdmbLN = await ReviveVnzT8yS.recoverERC20.call(uintLOKfREL, {from: accounts[2]});
		const boolfgug9vQ = await ReviveVnzT8yS.extendLock.call(byteTGwqmim, uintyjzfORS, {from: accounts[1]});

		assert.equal(uint256UwDA38, BigInt("0"))
		await expect(ReviveVnzT8yS.recoverERC20.call(uintLOKfREL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const uintyCbzzIE = BigInt("1582")
		const addressG0WCTQk = accounts[0]
		const uintZcDuRPK = BigInt("58")
		const addressZjmahP = accounts[2]
		const bytefLwh0q5 = "0x1c06111004080605071b0d091a0108141706020d1f10120e201f0b1b1b1e1105"
		const addressA5hdaYB = accounts[3]
		const boolL6OGA0N = await ReviveVnzT8yS.approve.call(addressG0WCTQk, uintyCbzzIE, {from: accounts[0]});
		const boolWTdTzg = await ReviveVnzT8yS.increaseAllowance.call(addressZjmahP, uintZcDuRPK, {from: accounts[1]});
		const uint256UwDA38 = await ReviveVnzT8yS.tokensUnlockable.call(addressA5hdaYB, bytefLwh0q5, {from: accounts[5]});

		assert.equal(boolL6OGA0N, true)
		assert.equal(boolWTdTzg, true)
		assert.equal(uint256UwDA38, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveyExkdFT = await Revive.new({from: accounts[4]});
		const uintHYgNTNd = BigInt("1677")
		const addressh8WUCLb = accounts[3]
		const addresshhJTR0Y = accounts[2]
		const addressVTEidJk = accounts[3]
		const boolF0OfTCD = await ReviveyExkdFT.increaseAllowance.call(addressh8WUCLb, uintHYgNTNd, {from: accounts[5]});
		const uint2563G8vJe = await ReviveyExkdFT.unlock.call(addresshhJTR0Y, {from: accounts[3]});
		const uint256kEyYRac = await ReviveyExkdFT.getUnlockableTokens.call(addressVTEidJk, {from: accounts[2]});
		await ReviveyExkdFT.onlyOwner.call({from: accounts[4]});
		const uint256ta9WO7W = await ReviveyExkdFT.totalSupply.call({from: accounts[2]});

		assert.equal(boolF0OfTCD, true)
		assert.equal(uint2563G8vJe, BigInt("0"))
		assert.equal(uint256kEyYRac, BigInt("0"))
		await expect(ReviveyExkdFT.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const addressx2NGYRt = accounts[4]
		const addressJ0ADgl = accounts[0]
		const uintj1FyRmV = BigInt("679")
		const uintevPu42e = BigInt("531")
		const addressalV9JEF = accounts[0]
		const uint256F1mQcEv = await Reviveot2lp6p.getUnlockableTokens.call(addressx2NGYRt, {from: accounts[5]});
		const uint256LfSjyvW = await Reviveot2lp6p.totalBalanceOf.call(addressJ0ADgl, {from: accounts[5]});
		const uint256rIDoM8 = await Reviveot2lp6p.recoverERC20.call(uintj1FyRmV, {from: accounts[3]});
		const boolBzQkr9 = await Reviveot2lp6p.approve.call(addressalV9JEF, uintevPu42e, {from: accounts[0]});

		assert.equal(uint256F1mQcEv, BigInt("0"))
		assert.equal(uint256LfSjyvW, BigInt("3000000000000000000000000000"))
		await expect(Reviveot2lp6p.recoverERC20.call(uintj1FyRmV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveIZcdi86 = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZQ7pJKF = BigInt("65")
		const addressoqSJiv8 = accounts[4]
		const addressJKk3ET = accounts[3]
		const addressWOIRJ4H = accounts[5]
		const bytekINLEfs = "0x01180d11060806091f060c090e1f0f07160c080d0f1b17031e0f04151d1b0e09"
		const addressvhDOJgb = accounts[2]
		const boolZUtPLs = await ReviveIZcdi86.increaseAllowance.call(addressoqSJiv8, uintZQ7pJKF, {from: accounts[0]});
		const uint256i2JNtGe = await ReviveIZcdi86.allowance.call(addressWOIRJ4H, addressJKk3ET, {from: accounts[0]});
		const boolRgJ5kJ = await ReviveIZcdi86.isOwner.call({from: accounts[0]});
		const uint256gVLx8C = await ReviveIZcdi86.tokensUnlockable.call(addressvhDOJgb, bytekINLEfs, {from: accounts[1]});
		const addressEndDcN2 = await ReviveIZcdi86.owner.call({from: accounts[1]});
	});

	it('test for Revive', async () => {
		const ReviveyXzXMTY = await Revive.new({from: accounts[3]});
		const addressKNLFAR = accounts[4]
		const addressW79w3UD = accounts[3]
		const addressOSvf7FO = accounts[1]
		const addressDbztQoG = accounts[3]
		const addressh18xH5m = accounts[3]
		const addresslWIT3TG = accounts[1]
		const uintjQQlygg = BigInt("636")
		const addressI5EeBtp = accounts[0]
		const uint256UHdQSUY = await ReviveyXzXMTY.allowance.call(addressW79w3UD, addressKNLFAR, {from: accounts[1]});
		const addresswq0YF5r = await ReviveyXzXMTY.transferOwnership.call(addressOSvf7FO, {from: accounts[3]});
		const uint256pnbnu2Y = await ReviveyXzXMTY.unlock.call(addressDbztQoG, {from: accounts[1]});
		const uint256SSSOpi6 = await ReviveyXzXMTY.allowance.call(addresslWIT3TG, addressh18xH5m, {from: accounts[4]});
		const boolplNxcIM = await ReviveyXzXMTY.decreaseAllowance.call(addressI5EeBtp, uintjQQlygg, {from: accounts[2]});

		assert.equal(uint256SSSOpi6, BigInt("0"))
		assert.equal(uint256UHdQSUY, BigInt("0"))
		assert.equal(uint256pnbnu2Y, BigInt("0"))
		await expect(ReviveyXzXMTY.decreaseAllowance.call(addressI5EeBtp, uintjQQlygg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const uintNSf9jPL = BigInt("863")
		const byteFwrqENV = "0x1f1b010e1c02070b181a13010a1b100d1c1310201b160119090e1f1607140808"
		const addressg7oM9tO = accounts[1]
		const uintyIWtpkQ = BigInt("471")
		const addressF378843 = accounts[2]
		const uintEdYT7d6 = BigInt("513")
		const addressEJNwdPf = accounts[0]
		const uint256iczJkUc = await Reviveot2lp6p.tokensLockedAtTime.call(addressg7oM9tO, byteFwrqENV, uintNSf9jPL, {from: accounts[0]});
		const uint256XFGXA3D = await Reviveot2lp6p.recoverERC20.call(uintyIWtpkQ, {from: accounts[2]});
		const addresstuEmxEL = await Reviveot2lp6p.owner.call({from: accounts[1]});
		const uint256F1mQcEv = await Reviveot2lp6p.getUnlockableTokens.call(addressF378843, {from: accounts[5]});
		const boolBzQkr9 = await Reviveot2lp6p.approve.call(addressEJNwdPf, uintEdYT7d6, {from: accounts[0]});
		await Reviveot2lp6p.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256iczJkUc, BigInt("0"))
		await expect(Reviveot2lp6p.recoverERC20.call(uintyIWtpkQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const uintlovrFdO = BigInt("68")
		const uintzznmAta = BigInt("1778")
		const byteqOxvY36 = "0x1e1b0d090a12050e101f16130c1f1a070e1c0f1d0104141d021814130d0a030b"
		const uintiK623FM = BigInt("463")
		const bytewYmpmrR = "0x1e1d1f160d14180e191114101a2020120309180b1d1413201f10111d0e0f020c"
		const boolh5shJeZ = await ReviveVnzT8yS.lock.call(byteqOxvY36, uintzznmAta, uintlovrFdO, {from: "0x0000000000000000000000000000000000000001"});
		const boolfgug9vQ = await ReviveVnzT8yS.extendLock.call(bytewYmpmrR, uintiK623FM, {from: accounts[1]});

		await expect(ReviveVnzT8yS.lock.call(byteqOxvY36, uintzznmAta, uintlovrFdO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveezhEccK = await Revive.new({from: accounts[2]});
		const uintO7KKkOO = BigInt("731")
		const uintzYwl3fo = BigInt("869")
		const byteQUsMHRc = "0x0210101a1f0d201b07201f061102111c1d20111f0514080e1d0b0f150c1b1819"
		const uint256zH5c5Ox = await ReviveezhEccK.recoverERC20.call(uintO7KKkOO, {from: accounts[2]});
		const boolMpUfQSn = await ReviveezhEccK.increaseLockAmount.call(byteQUsMHRc, uintzYwl3fo, {from: accounts[1]});

		await expect(ReviveezhEccK.recoverERC20.call(uintO7KKkOO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const uintebEedVi = BigInt("1634")
		const addressMcuYB9 = accounts[1]
		const uint256ZEVxnco = await ReviveVnzT8yS.recoverERC20.call(uintebEedVi, {from: accounts[5]});
		const uint256rua1ijp = await ReviveVnzT8yS.unlock.call(addressMcuYB9, {from: accounts[2]});

		await expect(ReviveVnzT8yS.recoverERC20.call(uintebEedVi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const addressDDjGiV = accounts[4]
		const uintWk5a9U2 = BigInt("310")
		const uint256F1mQcEv = await Reviveot2lp6p.getUnlockableTokens.call(addressDDjGiV, {from: accounts[5]});
		const uint256nilPgDo = await Reviveot2lp6p.recoverERC20.call(uintWk5a9U2, {from: accounts[0]});

		assert.equal(uint256F1mQcEv, BigInt("0"))
		await expect(Reviveot2lp6p.recoverERC20.call(uintWk5a9U2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const addressqjlsZb9 = accounts[3]
		const uintIGbVHO = BigInt("85")
		const byteF0e5L9v = "0x201c0c05130513080a100d100e131210100b0b0b0f130501190e11000f1c151c"
		const addressiNpw5zS = accounts[2]
		const addresstuEmxEL = await Reviveot2lp6p.owner.call({from: accounts[1]});
		const uint256F1mQcEv = await Reviveot2lp6p.getUnlockableTokens.call(addressqjlsZb9, {from: accounts[5]});
		const uint256X5CFjt3 = await Reviveot2lp6p.tokensLockedAtTime.call(addressiNpw5zS, byteF0e5L9v, uintIGbVHO, {from: accounts[4]});
		await Reviveot2lp6p.renounceOwnership.call({from: accounts[0]});
		await Reviveot2lp6p.onlyOwner.call({from: accounts[2]});

		assert.equal(addresstuEmxEL, 0xF20FBC5d8e8e2A5828B07F2e17AC9990E5358f38)
		assert.equal(uint256F1mQcEv, BigInt("0"))
		assert.equal(uint256X5CFjt3, BigInt("0"))
		await expect(Reviveot2lp6p.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGufHExX = await Revive.new({from: accounts[3]});
		const uintotcxnMx = BigInt("1157")
		const uintIVQqtpv = BigInt("997")
		const addressQ9FfC6 = accounts[2]
		const addresswBOhNJT = accounts[1]
		const addressExUE7G = accounts[2]
		const uintisQjrhD = BigInt("895")
		const addresswW7X5JB = accounts[2]
		const uint256hS0Q0nK = await ReviveGufHExX.recoverERC20.call(uintotcxnMx, {from: accounts[3]});
		const boolwZ5OIu5 = await ReviveGufHExX.increaseAllowance.call(addressQ9FfC6, uintIVQqtpv, {from: accounts[0]});
		const uint256y1zh9B = await ReviveGufHExX.allowance.call(addressExUE7G, addresswBOhNJT, {from: "0x0000000000000000000000000000000000000001"});
		const boollHZbPZP = await ReviveGufHExX.decreaseAllowance.call(addresswW7X5JB, uintisQjrhD, {from: accounts[0]});

		await expect(ReviveGufHExX.recoverERC20.call(uintotcxnMx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveezhEccK = await Revive.new({from: accounts[2]});
		const uintScPzDUA = BigInt("1160")
		const byteDm2Qumt = "0x0b05121c180a12171e15201719001f1a130104031c0c011a170609111dffffffff0200"
		const addresssQtHcnw = accounts[4]
		const uintHnooX4A = BigInt("1118")
		const addressc7zOO7w = accounts[0]
		const uint256iRnaZoZ = await ReviveezhEccK.tokensLockedAtTime.call(addresssQtHcnw, byteDm2Qumt, uintScPzDUA, {from: accounts[0]});
		const bool0GaJD7 = await ReviveezhEccK.decreaseAllowance.call(addressc7zOO7w, uintHnooX4A, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveezhEccK.tokensLockedAtTime.call(addresssQtHcnw, byteDm2Qumt, uintScPzDUA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const uintZPHgGp = BigInt("671")
		const uintaxVIQGd = BigInt("231")
		const byteHQs7Lqk = "0x14070b011d0d171f1e12151f151e1e1901051419101a0c13191d040a181c1d17"
		const addressRt6Q4DJ = accounts[3]
		const addressFiBj7aT = accounts[4]
		const uint256PaqtUNS = await Reviveot2lp6p.recoverERC20.call(uintZPHgGp, {from: accounts[3]});
		const uint256mAvoqcz = await Reviveot2lp6p.tokensLockedAtTime.call(addressRt6Q4DJ, byteHQs7Lqk, uintaxVIQGd, {from: accounts[2]});
		const uint256F1mQcEv = await Reviveot2lp6p.getUnlockableTokens.call(addressFiBj7aT, {from: accounts[5]});

		await expect(Reviveot2lp6p.recoverERC20.call(uintZPHgGp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivek0A4VrG = await Revive.new({from: accounts[4]});
		const uintfo3GZIh = BigInt("956")
		const addressJdgERVJ = accounts[4]
		const addressLP3OpVu = accounts[1]
		const addressxuv4zlm = accounts[3]
		const uintg2Wd76y = BigInt("1743")
		const uintLVIUdZm = BigInt("1994")
		const addressswEyruH = accounts[5]
		const uintzi0ymxI = BigInt("1929")
		const bytesZ33Cc = "0x0e04171f18171b02021e1d191f0114061b1d120a0b1d080c19011e0b0d1d1d02"
		const boolTVcFXwd = await Revivek0A4VrG.approve.call(addressJdgERVJ, uintfo3GZIh, {from: accounts[4]});
		const uint256szEHUr7 = await Revivek0A4VrG.allowance.call(addressxuv4zlm, addressLP3OpVu, {from: accounts[1]});
		const uint256USUnlHt = await Revivek0A4VrG.recoverERC20.call(uintg2Wd76y, {from: accounts[3]});
		const boolP6yLIwA = await Revivek0A4VrG.increaseAllowance.call(addressswEyruH, uintLVIUdZm, {from: accounts[3]});
		const boolEvrMMwr = await Revivek0A4VrG.increaseLockAmount.call(bytesZ33Cc, uintzi0ymxI, {from: accounts[1]});

		assert.equal(boolTVcFXwd, true)
		assert.equal(uint256szEHUr7, BigInt("0"))
		await expect(Revivek0A4VrG.recoverERC20.call(uintg2Wd76y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const uintfA7KmZu = BigInt("1069")
		const uintbyDsTrl = BigInt("248")
		const addresswduSMNE = accounts[4]
		const addressd2Mjnf = accounts[1]
		const uint256UMVpenV = await Reviveot2lp6p.recoverERC20.call(uintfA7KmZu, {from: accounts[2]});
		const addresszxvE7ZG = await Reviveot2lp6p.recoverERC20.call(addresswduSMNE, uintbyDsTrl, {from: accounts[4]});
		const uint256LfSjyvW = await Reviveot2lp6p.totalBalanceOf.call(addressd2Mjnf, {from: accounts[5]});

		await expect(Reviveot2lp6p.recoverERC20.call(uintfA7KmZu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const uintwkYL88F = BigInt("957")
		const uintbkGBnnt = BigInt("1813")
		const bytegw9M8Sd = "0x1b1f141605100e0217190c1919181112131d2004170a19080b191511111b1305"
		const addressW662FDd = accounts[4]
		const addressZtYHfrs = accounts[0]
		const byteiRFOjhX = "0x150f1f0f130f110818151f0a121e1402011d2016081d131a1700131d06151a1f"
		const addressmxoq2wp = accounts[0]
		const uintd13BR2c = BigInt("534")
		const byteveT0bAF = "0x0613200c0b100c020110061d06120f1d0208021a09161703031e001a191c0f08"
		const addressVX0mw2V = accounts[4]
		const uintq4GGHKe = BigInt("1754")
		const boolyU7hUFB = await ReviveVnzT8yS.transferWithLock.call(addressW662FDd, bytegw9M8Sd, uintbkGBnnt, uintwkYL88F, {from: accounts[2]});
		const uint256XIfG6B = await ReviveVnzT8yS.unlock.call(addressZtYHfrs, {from: accounts[4]});
		const uint256Oo75ldb = await ReviveVnzT8yS.tokensLocked.call(addressmxoq2wp, byteiRFOjhX, {from: accounts[0]});
		const uint256uzSJC6J = await ReviveVnzT8yS.tokensLockedAtTime.call(addressVX0mw2V, byteveT0bAF, uintd13BR2c, {from: accounts[1]});
		const uint256XanTHJ0 = await ReviveVnzT8yS.recoverERC20.call(uintq4GGHKe, {from: accounts[2]});

		assert.equal(boolyU7hUFB, true)
		assert.equal(uint256Oo75ldb, BigInt("0"))
		assert.equal(uint256XIfG6B, BigInt("0"))
		assert.equal(uint256uzSJC6J, BigInt("0"))
		await expect(ReviveVnzT8yS.recoverERC20.call(uintq4GGHKe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const uintzJgINbD = BigInt("785")
		const uintOBzqcJA = BigInt("27")
		const bytexWP6k4 = "0x201c0c05130513080a100d100e13121010080b0b0f130501190e11000f1c151c"
		const addressNwWWpuJ = accounts[2]
		const uint256kbB9UZa = await Reviveot2lp6p.recoverERC20.call(uintzJgINbD, {from: accounts[1]});
		const uint256X5CFjt3 = await Reviveot2lp6p.tokensLockedAtTime.call(addressNwWWpuJ, bytexWP6k4, uintOBzqcJA, {from: accounts[4]});

		await expect(Reviveot2lp6p.recoverERC20.call(uintzJgINbD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const bytencOcEHs = "0x140b1d080614050f1d1e040709200b181b1a0a1d061912190d0c1313130a1411"
		const addressXopGLf = accounts[4]
		const uintXZpQo1z = BigInt("463")
		const byteNm5BvK7 = "0x0c041c18170a120e171a170d0b141e0300141f07000712ffffffff030808080111070e"
		const uint256vYRzFS9 = await ReviveVnzT8yS.tokensUnlockable.call(addressXopGLf, bytencOcEHs, {from: accounts[0]});
		const boolfgug9vQ = await ReviveVnzT8yS.extendLock.call(byteNm5BvK7, uintXZpQo1z, {from: accounts[1]});

		assert.equal(uint256vYRzFS9, BigInt("0"))
		await expect(ReviveVnzT8yS.extendLock.call(byteNm5BvK7, uintXZpQo1z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const uintETBlMKd = BigInt("27")
		const bytef1ZXnFK = "0x201c0c05130513080a100d100e13121010080b0b0f130501190e11000f1c151c"
		const addresstyNQZ1D = accounts[2]
		const uintkUzJ5pF = BigInt("468")
		const uint256X5CFjt3 = await Reviveot2lp6p.tokensLockedAtTime.call(addresstyNQZ1D, bytef1ZXnFK, uintETBlMKd, {from: accounts[4]});
		const uint256kwzbcW = await Reviveot2lp6p.recoverERC20.call(uintkUzJ5pF, {from: accounts[2]});

		assert.equal(uint256X5CFjt3, BigInt("0"))
		await expect(Reviveot2lp6p.recoverERC20.call(uintkUzJ5pF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF2H2Fmw = await Revive.new({from: accounts[5]});
		const uintBVxeAmG = BigInt("1655")
		const uintsPaeUwi = BigInt("1278")
		const byteaKCWBbK = "0x080e111d0409171e0d01001d180a0e0f031a08181c0f131507200f091c171103"
		const uintl03tvte = BigInt("520")
		const addressabTEHIz = accounts[3]
		const byteFC47kmC = "0x0b091b1402180f180f0812010d010e1d0b12050c1e1b0e0f020f0805111e1d17"
		const addressgs6o0M3 = accounts[0]
		const uint256DxFZQgc = await ReviveF2H2Fmw.recoverERC20.call(uintBVxeAmG, {from: "0x0000000000000000000000000000000000000001"});
		const boolUw9tLrc = await ReviveF2H2Fmw.extendLock.call(byteaKCWBbK, uintsPaeUwi, {from: accounts[3]});
		const booltfL8AC = await ReviveF2H2Fmw.transfer.call(addressabTEHIz, uintl03tvte, {from: accounts[3]});
		const bool3sarrD = await ReviveF2H2Fmw.isOwner.call({from: accounts[2]});
		const uint256hoO2pnp = await ReviveF2H2Fmw.tokensLocked.call(addressgs6o0M3, byteFC47kmC, {from: accounts[2]});

		await expect(ReviveF2H2Fmw.recoverERC20.call(uintBVxeAmG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRj5tltF = await Revive.new({from: accounts[2]});
		const uintdsHmCR8 = BigInt("1608")
		const uintc4SX6pA = BigInt("1930")
		const uintRS0Q9cT = BigInt("328")
		const byteT3LIv2P = "0x0a1e101d1e1c070d1a150c11031e161c191d071e1f0f0b071613160d090d0a06"
		const uintPf62XtR = BigInt("1312")
		const addressr3EU1ME = "0x0000000000000000000000000000000000000001"
		const uint256RP6gozr = await ReviveRj5tltF.recoverERC20.call(uintdsHmCR8, {from: accounts[0]});
		const boolBF1k2SS = await ReviveRj5tltF.lock.call(byteT3LIv2P, uintRS0Q9cT, uintc4SX6pA, {from: accounts[0]});
		const boolkkLeA7l = await ReviveRj5tltF.isOwner.call({from: accounts[1]});
		const boolRnYuKea = await ReviveRj5tltF.increaseAllowance.call(addressr3EU1ME, uintPf62XtR, {from: accounts[4]});

		await expect(ReviveRj5tltF.recoverERC20.call(uintdsHmCR8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivefoe1nvs = await Revive.new({from: accounts[2]});
		const uintpxyAWIb = BigInt("65")
		const byteeSt0y6p = "0x0a0d031514190f0b07080608060e16130e021b1b1f10150d1717081c1d0d1903"
		const addressU0JBXc = accounts[3]
		const uintuIoYofS = BigInt("243")
		const uintlpAkqH8 = BigInt("147")
		const addressqda0I3 = accounts[1]
		const uint256NwRaUVm = await Revivefoe1nvs.tokensLockedAtTime.call(addressU0JBXc, byteeSt0y6p, uintpxyAWIb, {from: accounts[2]});
		const uint256nW3Wt1 = await Revivefoe1nvs.recoverERC20.call(uintuIoYofS, {from: accounts[1]});
		await Revivefoe1nvs.onlyOwner.call({from: accounts[2]});
		const boolBrJKxaq = await Revivefoe1nvs.transfer.call(addressqda0I3, uintlpAkqH8, {from: accounts[1]});

		assert.equal(uint256NwRaUVm, BigInt("0"))
		await expect(Revivefoe1nvs.recoverERC20.call(uintuIoYofS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const uintjgJorpU = BigInt("463")
		const byted2I8Jny = "0x0c041c18170a120e171a170d0b141e0300141f070007120103080808ffffffff11070e"
		const boolfgug9vQ = await ReviveVnzT8yS.extendLock.call(byted2I8Jny, uintjgJorpU, {from: accounts[1]});

		await expect(ReviveVnzT8yS.extendLock.call(byted2I8Jny, uintjgJorpU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const uintr4w35gv = BigInt("2009")
		const byteeKH9J75 = "0x15061e040918201d071b071c1d1315161401191a09061b11110a07050f201e16"
		const addressQYKOzxT = accounts[1]
		const addressAkyebId = accounts[2]
		const addressWG4ZuO8 = accounts[1]
		const uint256EDFTJwL = await ReviveVnzT8yS.recoverERC20.call(uintr4w35gv, {from: accounts[3]});
		const uint256imQyEex = await ReviveVnzT8yS.tokensUnlockable.call(addressQYKOzxT, byteeKH9J75, {from: accounts[0]});
		const uint256oWR7LN = await ReviveVnzT8yS.unlock.call(addressAkyebId, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rua1ijp = await ReviveVnzT8yS.unlock.call(addressWG4ZuO8, {from: accounts[2]});

		await expect(ReviveVnzT8yS.recoverERC20.call(uintr4w35gv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVnzT8yS = await Revive.new({from: accounts[2]});
		const uintpVg2D5i = BigInt("860")
		const uintE1G5fGf = BigInt("957")
		const uintP8RPaYS = BigInt("1813")
		const byteiFBKoUp = "0x1b1f141605100e0217190c1919181112131b2004170a19080b191511111b1305"
		const addresspW8Brh = accounts[4]
		const uint256oYDUsCA = await ReviveVnzT8yS.recoverERC20.call(uintpVg2D5i, {from: accounts[2]});
		const boolRrkk58D = await ReviveVnzT8yS.isOwner.call({from: accounts[0]});
		const boolyU7hUFB = await ReviveVnzT8yS.transferWithLock.call(addresspW8Brh, byteiFBKoUp, uintP8RPaYS, uintE1G5fGf, {from: accounts[2]});

		await expect(ReviveVnzT8yS.recoverERC20.call(uintpVg2D5i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveot2lp6p = await Revive.new({from: accounts[0]});
		const addressMeMT4M8 = accounts[3]
		const uintWlmZJdb = BigInt("525")
		const uint256F1mQcEv = await Reviveot2lp6p.getUnlockableTokens.call(addressMeMT4M8, {from: accounts[5]});
		const uint25611Sd6M = await Reviveot2lp6p.recoverERC20.call(uintWlmZJdb, {from: accounts[4]});

		assert.equal(uint256F1mQcEv, BigInt("0"))
		await expect(Reviveot2lp6p.recoverERC20.call(uintWlmZJdb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
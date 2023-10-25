const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
//		await DSPDeUzal.pause.call({from: accounts[1]});
//		await DSPDeUzal.f.call({from: accounts[5]});

		await expect(DSPDeUzal.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringzrphaPI = "ASs77p"
		const stringrTMVK0 = "D4VMCnW7sOUnqIUvo9lMDx1KZGMV71kKZOmWlpohePh9vpgN3eMsW"
		const uintSaZvSOJ = BigInt("12")
		const DSPYPGzomY = await DSP.new(stringzrphaPI, stringrTMVK0, uintSaZvSOJ, {from: accounts[0]});
		const uintyURF0cw = BigInt("588")
		const addressc3HA0CO = accounts[4]
		const addressoAiYjff = accounts[5]
		const addressm2EiB6o = accounts[1]
		const addressMarBLjg = accounts[3]
		const addressrdtYkeu = accounts[5]
		const uintzEhcRZd = BigInt("1673")
		const addressH3iwtiv = "0x0000000000000000000000000000000000000001"
		const boolImFSnFH = await DSPYPGzomY.transferFrom.call(addressoAiYjff, addressc3HA0CO, uintyURF0cw, {from: accounts[3]});
		const bool53pquT = await DSPYPGzomY.isPauser.call(addressm2EiB6o, {from: accounts[1]});
		const uint256b2YYPvZ = await DSPYPGzomY.balanceOf.call(addressMarBLjg, {from: accounts[1]});
		const boolkTSGsJV = await DSPYPGzomY.unfreezeAccount.call(addressrdtYkeu, {from: accounts[4]});
		const boolADPnqf6 = await DSPYPGzomY.unlock.call(addressH3iwtiv, uintzEhcRZd, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPfGbnmAo = await DSP.new({from: accounts[1]});
		const uinty56PBlJ = BigInt("984")
		const uintkKJdtWV = BigInt("1384")
		const addressDDiwFv1 = accounts[2]
		const addressWpdYn0I = accounts[1]
		const uintAxqbTZ1 = BigInt("521")
		const addressyBsQ7Hc = accounts[2]
//		await DSPfGbnmAo.onlyPauser.call({from: accounts[2]});
//		const boolpvUHoQg = await DSPfGbnmAo.transferWithLock.call(addressDDiwFv1, uintkKJdtWV, uinty56PBlJ, {from: accounts[2]});
//		const addresswIaTbqP = await DSPfGbnmAo.addPauser.call(addressWpdYn0I, {from: accounts[1]});
//		const boolaJ18fqL = await DSPfGbnmAo.transfer.call(addressyBsQ7Hc, uintAxqbTZ1, {from: accounts[4]});

		await expect(DSPfGbnmAo.onlyPauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
//		await DSPDeUzal.f.call({from: accounts[5]});

		await expect(DSPDeUzal.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPLnOMXJ2 = await DSP.new({from: accounts[1]});
		const uintag1vDP = BigInt("1056")
		const addressqfpKLmM = accounts[4]
		const addressinGwPIO = accounts[1]
		const addressRcRWcl6 = accounts[0]
		const addressHdn00nz = accounts[1]
		const uintfJvHkMf = BigInt("1193")
		const addressemJYurt = accounts[4]
		const boolOEwoEr = await DSPLnOMXJ2.increaseAllowance.call(addressqfpKLmM, uintag1vDP, {from: accounts[4]});
		const uint256zdHSrTo = await DSPLnOMXJ2.allowance.call(addressRcRWcl6, addressinGwPIO, {from: accounts[1]});
//		const boolgh5fFuJ = await DSPLnOMXJ2.unfreezeAccount.call(addressHdn00nz, {from: accounts[4]});
//		const boolKrp2a2W = await DSPLnOMXJ2.approve.call(addressemJYurt, uintfJvHkMf, {from: accounts[2]});
//		const stringVsA7DXR = await DSPLnOMXJ2.symbol.call({from: accounts[5]});

		assert.equal(boolOEwoEr, true)
		assert.equal(uint256zdHSrTo, BigInt("0"))
		await expect(DSPLnOMXJ2.unfreezeAccount.call(addressHdn00nz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const uinto5umgkh = BigInt("1699")
		const addressGXQKZz = accounts[5]
		const addressJbL2ZLI = accounts[3]
		const boolLJl0kmE = await DSPDeUzal.paused.call({from: accounts[2]});
		const boolUDq1SU0 = await DSPDeUzal.approve.call(addressGXQKZz, uinto5umgkh, {from: accounts[0]});
		const uint256JxPSPKS = await DSPDeUzal.totalSupply.call({from: accounts[2]});
//		const addressmU0p4O = await DSPDeUzal.removePauser.call(addressJbL2ZLI, {from: accounts[1]});
//		await DSPDeUzal.f.call({from: accounts[5]});

		assert.equal(boolLJl0kmE, false)
		assert.equal(boolUDq1SU0, true)
		assert.equal(uint256JxPSPKS, BigInt("100000000000000000000000000000"))
		await expect(DSPDeUzal.removePauser.call(addressJbL2ZLI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressJKnlFIA = "0x0000000000000000000000000000000000000001"
		const uint256ax0c5UH = await DSPDeUzal.balanceOf.call(addressJKnlFIA, {from: accounts[3]});
		const boolFpW2LN3 = await DSPDeUzal.paused.call({from: accounts[0]});
//		await DSPDeUzal.f.call({from: accounts[5]});

		assert.equal(boolFpW2LN3, false)
		assert.equal(uint256ax0c5UH, BigInt("0"))
		await expect(DSPDeUzal.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfGbnmAo = await DSP.new({from: accounts[1]});
		const addressFSiGH3N = accounts[0]
		const uint340wQF = BigInt("521")
		const addressCclbXH = accounts[2]
		const addresswIaTbqP = await DSPfGbnmAo.addPauser.call(addressFSiGH3N, {from: accounts[1]});
//		const boolaJ18fqL = await DSPfGbnmAo.transfer.call(addressCclbXH, uint340wQF, {from: accounts[4]});

		await expect(DSPfGbnmAo.transfer.call(addressCclbXH, uint340wQF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfGbnmAo = await DSP.new({from: accounts[1]});
		const addressL4Lyl54 = accounts[1]
		const stringHZkIq6D = await DSPfGbnmAo.symbol.call({from: accounts[1]});
//		const addresswIaTbqP = await DSPfGbnmAo.addPauser.call(addressL4Lyl54, {from: accounts[1]});
//		await DSPfGbnmAo.whenNotPaused.call({from: accounts[5]});

		assert.equal(stringHZkIq6D, "DSP")
		await expect(DSPfGbnmAo.addPauser.call(addressL4Lyl54, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const stringbKloOaA = await DSPDeUzal.name.call({from: accounts[3]});
//		await DSPDeUzal.pause.call({from: accounts[1]});
//		await DSPDeUzal.f.call({from: accounts[5]});

		assert.equal(stringbKloOaA, "DSP")
		await expect(DSPDeUzal.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressz9R71P = accounts[3]
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressz9R71P, {from: accounts[1]});
//		await DSPDeUzal.pause.call({from: accounts[0]});
//		const stringME9f8Ru = await DSPDeUzal.symbol.call({from: accounts[2]});
//		await DSPDeUzal.f.call({from: accounts[5]});

		assert.equal(uint256WkrxZUU, BigInt("0"))
		await expect(DSPDeUzal.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuJCPejg = await DSP.new({from: accounts[0]});
		const uintMaWpZe0 = BigInt("310")
		const addressndFmHf9 = accounts[2]
		const addressuo7Ae6 = accounts[4]
		const addressbL95hFN = accounts[5]
		const uintkmJ2s8K = BigInt("631")
		const addressLdJPRcd = accounts[4]
//		const boolwjVwg8x = await DSPuJCPejg.transferFrom.call(addressuo7Ae6, addressndFmHf9, uintMaWpZe0, {from: accounts[4]});
//		const addressXEWwkuf = await DSPuJCPejg.notFrozen.call(addressbL95hFN, {from: accounts[4]});
//		const boolsuK0gkn = await DSPuJCPejg.acceptOwnership.call({from: accounts[4]});
//		const boolDXDXVp = await DSPuJCPejg.increaseAllowance.call(addressLdJPRcd, uintkmJ2s8K, {from: accounts[4]});

		await expect(DSPuJCPejg.transferFrom.call(addressuo7Ae6, addressndFmHf9, uintMaWpZe0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfGbnmAo = await DSP.new({from: accounts[1]});
		const addressWG1HhjI = accounts[0]
		const uintLKfrRv = BigInt("621")
		const addressNQXNLBX = accounts[3]
		const uintvMGag1g = BigInt("521")
		const addressVVvI16 = accounts[3]
		const addresswIaTbqP = await DSPfGbnmAo.addPauser.call(addressWG1HhjI, {from: accounts[1]});
//		const boolqdJG6BJ = await DSPfGbnmAo.decreaseAllowance.call(addressNQXNLBX, uintLKfrRv, {from: accounts[4]});
//		const boolaJ18fqL = await DSPfGbnmAo.transfer.call(addressVVvI16, uintvMGag1g, {from: accounts[4]});

		await expect(DSPfGbnmAo.decreaseAllowance.call(addressNQXNLBX, uintLKfrRv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxo8GNsk = await DSP.new({from: accounts[2]});
		const addressV2hJrjs = accounts[1]
		const uintDNTeGe0 = BigInt("1299")
		const addressWXEmE8z = accounts[1]
		const addressJ2F3yP = accounts[3]
		const uint8Wy3BzXJ = await DSPxo8GNsk.decimals.call({from: accounts[5]});
//		const addressejSLPjf = await DSPxo8GNsk.upgradeTo.call(addressV2hJrjs, {from: accounts[1]});
//		const boolM69Yh1J = await DSPxo8GNsk.approve.call(addressWXEmE8z, uintDNTeGe0, {from: accounts[1]});
//		const boolOCqVzew = await DSPxo8GNsk.unfreezeAccount.call(addressJ2F3yP, {from: accounts[3]});

		assert.equal(uint8Wy3BzXJ, BigInt("18"))
		await expect(DSPxo8GNsk.upgradeTo.call(addressV2hJrjs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressqYD3Mkp = accounts[3]
		const addressBYgnlMY = accounts[3]
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressqYD3Mkp, {from: accounts[1]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[1]});
//		const boolzCYHhjm = await DSPDeUzal.unfreezeAccount.call(addressBYgnlMY, {from: accounts[4]});

		assert.equal(uint256WkrxZUU, BigInt("0"))
		await expect(DSPDeUzal.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressydNGU5Y = accounts[4]
		const addresskZMu33L = accounts[0]
		const addresseh6rdv = accounts[3]
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressydNGU5Y, {from: accounts[1]});
		const addressv3fRrt = await DSPDeUzal.transferOwnership.call(addresskZMu33L, {from: accounts[0]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[1]});
//		const boolzCYHhjm = await DSPDeUzal.unfreezeAccount.call(addresseh6rdv, {from: accounts[4]});

		assert.equal(uint256WkrxZUU, BigInt("0"))
		await expect(DSPDeUzal.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressTJgByW9 = accounts[4]
		const uint7AAm2j = BigInt("1495")
		const uinti7odDSk = BigInt("879")
		const addressc7PMMrw = "0x0000000000000000000000000000000000000001"
		const addressfvtglZ = accounts[0]
		const addressJv0qv0j = accounts[3]
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressTJgByW9, {from: accounts[1]});
//		const boolrdWkY5v = await DSPDeUzal.lock.call(addressc7PMMrw, uinti7odDSk, uint7AAm2j, {from: accounts[0]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[4]});
//		const addressv3fRrt = await DSPDeUzal.transferOwnership.call(addressfvtglZ, {from: accounts[0]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[1]});
//		const boolzCYHhjm = await DSPDeUzal.unfreezeAccount.call(addressJv0qv0j, {from: accounts[4]});

		assert.equal(uint256WkrxZUU, BigInt("0"))
		await expect(DSPDeUzal.lock.call(addressc7PMMrw, uinti7odDSk, uint7AAm2j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhIHbIzN = await DSP.new({from: accounts[1]});
		const uint0yX9ID = BigInt("2032")
		const addressF3xPybL = accounts[1]
		const uintLafvEzo = BigInt("1025")
		const addressVMmhcw = accounts[3]
		const boolaPAqmK = await DSPhIHbIzN.transfer.call(addressF3xPybL, uint0yX9ID, {from: accounts[1]});
		const boolmd1QfBv = await DSPhIHbIzN.approve.call(addressVMmhcw, uintLafvEzo, {from: accounts[3]});

		assert.equal(boolaPAqmK, true)
		assert.equal(boolmd1QfBv, true)
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressZnIlLN3 = accounts[4]
		const uintk4joh1 = BigInt("33")
		const addressHGoF0eo = accounts[2]
		const uintoKBlAIz = BigInt("1519")
		const uintY18N0ri = BigInt("879")
		const addressZporaRP = "0x0000000000000000000000000000000000000001"
		const addressbvcGP9 = accounts[3]
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressZnIlLN3, {from: accounts[1]});
		const boolo9L62oG = await DSPDeUzal.mint.call(addressHGoF0eo, uintk4joh1, {from: accounts[0]});
//		const boolrdWkY5v = await DSPDeUzal.lock.call(addressZporaRP, uintY18N0ri, uintoKBlAIz, {from: accounts[0]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[4]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[1]});
//		const boolzCYHhjm = await DSPDeUzal.unfreezeAccount.call(addressbvcGP9, {from: accounts[4]});

		assert.equal(boolo9L62oG, true)
		assert.equal(uint256WkrxZUU, BigInt("0"))
		await expect(DSPDeUzal.lock.call(addressZporaRP, uintY18N0ri, uintoKBlAIz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const uintyV0Eew = BigInt("15")
		const addresstTUZx28 = accounts[3]
		const addressCwVDL58 = accounts[3]
		const addressOxPFSUf = accounts[3]
//		const boolyg8SBr5 = await DSPDeUzal.unlock.call(addresstTUZx28, uintyV0Eew, {from: accounts[0]});
//		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressCwVDL58, {from: accounts[1]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[1]});
//		const boolzCYHhjm = await DSPDeUzal.unfreezeAccount.call(addressOxPFSUf, {from: accounts[4]});

		await expect(DSPDeUzal.unlock.call(addresstTUZx28, uintyV0Eew, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPRTTtB4g = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUhAt4pD = BigInt("1754")
		const addressqdtqQv5 = accounts[3]
		const addressVm1uZzE = accounts[2]
		const uintLFvHfON = BigInt("858")
		const addressbi0ns47 = accounts[2]
		const addressC5Nu3M = accounts[1]
		const uintGPg915 = BigInt("183")
		const uinttiUUKRE = BigInt("1650")
		const addressFYJiaXw = accounts[2]
		const booldYVBm4b = await DSPRTTtB4g.transferFrom.call(addressVm1uZzE, addressqdtqQv5, uintUhAt4pD, {from: accounts[0]});
		const boolIcZ10mM = await DSPRTTtB4g.transferFrom.call(addressC5Nu3M, addressbi0ns47, uintLFvHfON, {from: "0x0000000000000000000000000000000000000001"});
		const boolGaXg3Eo = await DSPRTTtB4g.lock.call(addressFYJiaXw, uinttiUUKRE, uintGPg915, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressIIUGavk = accounts[4]
		const addressUCJt0n = accounts[5]
		const addressxwxhqqN = accounts[0]
		const uintBmWD6s = BigInt("2001")
		const addressyrwu7mE = accounts[2]
		const addressHpNLiZs = accounts[0]
		const uintVgdWSlV = BigInt("1495")
		const uintilCXvjl = BigInt("879")
		const addressPOmLERY = "0x0000000000000000000000000000000000000001"
		const addressFbQjmp3 = accounts[3]
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressIIUGavk, {from: accounts[1]});
		const boolivvfAtG = await DSPDeUzal.isOwner.call(addressUCJt0n, {from: accounts[1]});
		const boolNZ66PDB = await DSPDeUzal.isOwner.call(addressxwxhqqN, {from: accounts[0]});
//		const boolFNc7Ixj = await DSPDeUzal.transferFrom.call(addressHpNLiZs, addressyrwu7mE, uintBmWD6s, {from: accounts[1]});
//		const boolrdWkY5v = await DSPDeUzal.lock.call(addressPOmLERY, uintilCXvjl, uintVgdWSlV, {from: accounts[0]});
//		const addressZKxE46 = await DSPDeUzal.upgradeTo.call(addressFbQjmp3, {from: accounts[5]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[1]});

		assert.equal(boolNZ66PDB, true)
		assert.equal(boolivvfAtG, false)
		assert.equal(uint256WkrxZUU, BigInt("0"))
		await expect(DSPDeUzal.transferFrom.call(addressHpNLiZs, addressyrwu7mE, uintBmWD6s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const address5xWLF8 = accounts[4]
		const uintOKMTsQ = BigInt("1261")
		const addressyF5z0qX = accounts[4]
		const uintaBqkhaC = BigInt("943")
		const addressiU4cuHl = accounts[5]
		const boolUNxNBbQ = await DSPDeUzal.freezeAccount.call(address5xWLF8, {from: accounts[0]});
//		const boolJSc4UMf = await DSPDeUzal.transfer.call(addressyF5z0qX, uintOKMTsQ, {from: accounts[4]});
//		const boolijkHGKZ = await DSPDeUzal.transfer.call(addressiU4cuHl, uintaBqkhaC, {from: accounts[4]});
//		await DSPDeUzal.pause.call({from: accounts[1]});

		assert.equal(boolUNxNBbQ, true)
		await expect(DSPDeUzal.transfer.call(addressyF5z0qX, uintOKMTsQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addresspEiXpnx = accounts[5]
		const addressP1Wsxkc = accounts[4]
		const addressdpxlarW = accounts[5]
		const addressojboSDv = accounts[4]
		const uintOZnmfqH = BigInt("1495")
		const uinttI5wIlB = BigInt("879")
		const addressSqtWVKX = "0x0000000000000000000000000000000000000002"
		const address775sGB = accounts[2]
		const addressOIlFtwC = await DSPDeUzal.upgradeTo.call(addresspEiXpnx, {from: accounts[0]});
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressP1Wsxkc, {from: accounts[1]});
		const boolivvfAtG = await DSPDeUzal.isOwner.call(addressdpxlarW, {from: accounts[1]});
//		const boolsMdHOsE = await DSPDeUzal.freezeAccount.call(addressojboSDv, {from: accounts[1]});
//		const boolrdWkY5v = await DSPDeUzal.lock.call(addressSqtWVKX, uinttI5wIlB, uintOZnmfqH, {from: accounts[0]});
//		const boolouovo4B = await DSPDeUzal.isPauser.call(address775sGB, {from: accounts[0]});
//		await DSPDeUzal.renouncePauser.call({from: accounts[1]});

		assert.equal(boolivvfAtG, false)
		assert.equal(uint256WkrxZUU, BigInt("0"))
		await expect(DSPDeUzal.freezeAccount.call(addressojboSDv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressFNBlEX = accounts[4]
		const addressuTCDEuG = "0x0000000000000000000000000000000000000001"
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressFNBlEX, {from: accounts[1]});
//		const boolH7MiJM9 = await DSPDeUzal.unfreezeAccount.call(addressuTCDEuG, {from: accounts[0]});

		assert.equal(uint256WkrxZUU, BigInt("0"))
		await expect(DSPDeUzal.unfreezeAccount.call(addressuTCDEuG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressVDDSHkU = accounts[4]
		const uints0vbONy = BigInt("579")
		const uintsWwkwv3 = BigInt("1840")
		const addressqYCRu8I = accounts[0]
		const uint256WkrxZUU = await DSPDeUzal.balanceOf.call(addressVDDSHkU, {from: accounts[1]});
		const boolOOD4MDv = await DSPDeUzal.lock.call(addressqYCRu8I, uintsWwkwv3, uints0vbONy, {from: accounts[0]});
		const uint256H8ADnYB = await DSPDeUzal.totalSupply.call({from: accounts[0]});

		assert.equal(boolOOD4MDv, true)
		assert.equal(uint256H8ADnYB, BigInt("100000000000000000000000000000"))
		assert.equal(uint256WkrxZUU, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPDeUzal = await DSP.new({from: accounts[0]});
		const addressjU7yupo = accounts[3]
		const uintuhN7j0 = BigInt("1463")
		const addressGMCpeyM = accounts[3]
		const addressZAGFzHd = accounts[4]
//		const addressSL8Vr2L = await DSPDeUzal.removePauser.call(addressjU7yupo, {from: accounts[0]});
//		const boolytzO119 = await DSPDeUzal.transferFrom.call(addressZAGFzHd, addressGMCpeyM, uintuhN7j0, {from: accounts[0]});

		await expect(DSPDeUzal.removePauser.call(addressjU7yupo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
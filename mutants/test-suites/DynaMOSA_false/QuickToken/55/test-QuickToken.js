const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressTz3ZNbQ = accounts[3]
		const addressklgRS1m = accounts[3]
		const QuickTokenlfIs59 = await QuickToken.new(addressTz3ZNbQ, addressklgRS1m, {from: accounts[2]});
		const uintkrZEMCH = BigInt("1604")
		const addressBYu50ZD = accounts[0]
		const uintLRuhPkU = BigInt("10")
		const addresshCy81M2 = accounts[3]
		const boolK6VKfR4 = await QuickTokenlfIs59.approve.call(addressBYu50ZD, uintkrZEMCH, {from: accounts[3]});
		const boolytUNoxQ = await QuickTokenlfIs59.approve.call(addresshCy81M2, uintLRuhPkU, {from: accounts[5]});

		assert.equal(boolK6VKfR4, true)
		assert.equal(boolytUNoxQ, true)
	});

	it('test for QuickToken', async () => {
		const addressrqyCJ4i = accounts[4]
		const addressjUmfDJO = accounts[2]
		const QuickTokenjEaomBR = await QuickToken.new(addressrqyCJ4i, addressjUmfDJO, {from: accounts[0]});
		const addressIP6W0Yi = accounts[2]
		const addressY26dkh2 = accounts[2]
		const addressJ5HYgA = accounts[1]
		const uinttryHtcG = BigInt("160")
		const addressQsPANZu = accounts[1]
		const addressCPVlqYV = accounts[3]
		const uintuwS5wyg = BigInt("1733")
		const addressfiAlbx = accounts[1]
		const uintfis8Kh = BigInt("1706")
		const addressgkT0IVV = accounts[4]
		const uintw6sC6Px = await QuickTokenjEaomBR.allowance.call(addressY26dkh2, addressIP6W0Yi, {from: accounts[2]});
		const uintA58948a = await QuickTokenjEaomBR.balanceOf.call(addressJ5HYgA, {from: accounts[0]});
		const boolzQP1e4Z = await QuickTokenjEaomBR.approve.call(addressQsPANZu, uinttryHtcG, {from: accounts[4]});
		const uintPQfga4D = await QuickTokenjEaomBR.balanceOf.call(addressCPVlqYV, {from: accounts[1]});
//		const addressvwz5VQP = await QuickTokenjEaomBR.mint.call(addressfiAlbx, uintuwS5wyg, {from: accounts[3]});
//		const boolUCT5H7r = await QuickTokenjEaomBR.approve.call(addressgkT0IVV, uintfis8Kh, {from: accounts[4]});

		assert.equal(boolzQP1e4Z, true)
		assert.equal(uintA58948a, BigInt("0"))
		assert.equal(uintPQfga4D, BigInt("0"))
		assert.equal(uintw6sC6Px, BigInt("0"))
		await expect(QuickTokenjEaomBR.mint.call(addressfiAlbx, uintuwS5wyg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressv8IS6xK = accounts[0]
		const addresst5GXkH3 = accounts[4]
		const QuickTokenivEOPaL = await QuickToken.new(addressv8IS6xK, addresst5GXkH3, {from: accounts[4]});
		const addressAEfmdo4 = accounts[0]
		const uintY37ZPCZ = BigInt("77")
		const addressdHaFjKM = accounts[2]
		const addressbN4MM99 = await QuickTokenivEOPaL.setMinter.call(addressAEfmdo4, {from: accounts[4]});
//		const addressHhGuT1B = await QuickTokenivEOPaL.mint.call(addressdHaFjKM, uintY37ZPCZ, {from: accounts[1]});

		await expect(QuickTokenivEOPaL.mint.call(addressdHaFjKM, uintY37ZPCZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressD4Rzwud = accounts[0]
		const addressr27KSXh = accounts[2]
		const QuickTokenNS36Mj = await QuickToken.new(addressD4Rzwud, addressr27KSXh, {from: accounts[3]});
		const uintCzhP5o = BigInt("166")
		const addressMqXtIQS = accounts[1]
		const addressvZVlqc5 = "0x0000000000000000000000000000000000000001"
		const addresslR9cbBP = accounts[3]
//		const boolr8sc6pQ = await QuickTokenNS36Mj.transfer.call(addressMqXtIQS, uintCzhP5o, {from: accounts[2]});
//		const uintdwX3tww = await QuickTokenNS36Mj.balanceOf.call(addressvZVlqc5, {from: accounts[4]});
//		const uintMIFwZmf = await QuickTokenNS36Mj.balanceOf.call(addresslR9cbBP, {from: accounts[3]});

		await expect(QuickTokenNS36Mj.transfer.call(addressMqXtIQS, uintCzhP5o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressUEt3CRG = accounts[2]
		const addressveznSrU = accounts[1]
		const QuickTokenFuKlqju = await QuickToken.new(addressUEt3CRG, addressveznSrU, {from: accounts[1]});
		const uintDU5hwwT = BigInt("1594")
		const addressH5uGH2y = accounts[1]
		const uintujaNdVB = BigInt("587")
		const addressQ6W4c9b = accounts[1]
		const addressgpAWKNL = accounts[2]
		const uintkI8rdHO = BigInt("1300")
		const addressycWMpkN = accounts[5]
		const addressXcV7l8 = await QuickTokenFuKlqju.mint.call(addressH5uGH2y, uintDU5hwwT, {from: accounts[1]});
		const boolnQ1kIJ8 = await QuickTokenFuKlqju.transfer.call(addressQ6W4c9b, uintujaNdVB, {from: accounts[2]});
		const uintIYPcnvU = await QuickTokenFuKlqju.balanceOf.call(addressgpAWKNL, {from: accounts[2]});
		const boolXuVwu1E = await QuickTokenFuKlqju.approve.call(addressycWMpkN, uintkI8rdHO, {from: accounts[2]});

		assert.equal(boolXuVwu1E, true)
		assert.equal(boolnQ1kIJ8, true)
		assert.equal(uintIYPcnvU, BigInt("2000000000000"))
	});

	it('test for QuickToken', async () => {
		const addressJqKcrVO = "0x0000000000000000000000000000000000000001"
		const addressCePwl33 = accounts[3]
		const QuickTokenCpMvvKH = await QuickToken.new(addressJqKcrVO, addressCePwl33, {from: accounts[3]});
		const addressEEC46NM = accounts[0]
		const addressDW8cc0x = accounts[1]
		const uintYJHCZ8Q = BigInt("1816")
		const addressMbp7zHH = accounts[4]
//		const addressOpF0h4Y = await QuickTokenCpMvvKH.setMinter.call(addressEEC46NM, {from: accounts[5]});
//		const uintBQubv67 = await QuickTokenCpMvvKH.balanceOf.call(addressDW8cc0x, {from: accounts[3]});
//		const boolEDKhEML = await QuickTokenCpMvvKH.approve.call(addressMbp7zHH, uintYJHCZ8Q, {from: "0x0000000000000000000000000000000000000001"});

		await expect(QuickTokenCpMvvKH.setMinter.call(addressEEC46NM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressGi4BPE9 = accounts[0]
		const addressPIBKTzW = accounts[4]
		const QuickTokenivEOPaL = await QuickToken.new(addressGi4BPE9, addressPIBKTzW, {from: accounts[4]});
		const addressZFl7ge = accounts[2]
		const uintxgGht3m = BigInt("1963")
		const addressWxzpg6L = accounts[4]
		const addressMuAJlis = "0x0000000000000000000000000000000000000001"
		const addressDWReO3l = accounts[4]
		const addressKRGnlT8 = accounts[4]
		const addressbN4MM99 = await QuickTokenivEOPaL.setMinter.call(addressZFl7ge, {from: accounts[4]});
//		const boolDm9PGtd = await QuickTokenivEOPaL.transferFrom.call(addressMuAJlis, addressWxzpg6L, uintxgGht3m, {from: accounts[4]});
//		const uintMJdgSeF = await QuickTokenivEOPaL.allowance.call(addressKRGnlT8, addressDWReO3l, {from: accounts[4]});

		await expect(QuickTokenivEOPaL.transferFrom.call(addressMuAJlis, addressWxzpg6L, uintxgGht3m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressSMamja = accounts[1]
		const addressYkvR2vf = accounts[1]
		const QuickTokenYEHVZ99 = await QuickToken.new(addressSMamja, addressYkvR2vf, {from: "0x0000000000000000000000000000000000000001"});
		const uintKD0WrtF = BigInt("1700")
		const addressuErD0Y6 = accounts[0]
		const addressKSDKc2n = accounts[5]
		const uintz7rARMA = BigInt("904")
		const addresspzh37sQ = accounts[3]
		const boolehdh0Oj = await QuickTokenYEHVZ99.transferFrom.call(addressKSDKc2n, addressuErD0Y6, uintKD0WrtF, {from: accounts[3]});
		const addressbEdCcI = await QuickTokenYEHVZ99.mint.call(addresspzh37sQ, uintz7rARMA, {from: accounts[2]});
	});
})
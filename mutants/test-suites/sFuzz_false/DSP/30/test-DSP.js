const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringntURnbX = "YuAQv5zBPKLzAoqwiqGMwON8uNPP5ox"
		const stringry6lwSQ = "yaJD3IBaWhnET5TNO7NftMuTttLDkyyow7sKJFWqcQqIpih8mzXQYS4klzRNhxSf5xhccvSgVPhCWnFusO3qbFqkhEWt"
		const uintQaEd5EE = BigInt("228")
		const DSPapsXxCo = await DSP.new(stringntURnbX, stringry6lwSQ, uintQaEd5EE, {from: accounts[0]});
		const addresskeD5Fy = accounts[1]
		const boolLlSHkSk = await DSPapsXxCo.acceptOwnership.call({from: accounts[0]});
		const addresscm23UNi = await DSPapsXxCo.notFrozen.call(addresskeD5Fy, {from: accounts[3]});
		await DSPapsXxCo.whenPaused.call({from: accounts[5]});
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressfgulfC = accounts[2]
		const uintIZFaEJj = BigInt("1231")
		const address7H0oU4 = accounts[0]
		const addressQoM15fA = accounts[2]
		const addressGsIPGQ = accounts[2]
		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressfgulfC, {from: accounts[5]});
//		const booln5I7FUE = await DSPNuxSq4D.transferFrom.call(addressQoM15fA, address7H0oU4, uintIZFaEJj, {from: accounts[1]});
//		const uint256vmSV7jI = await DSPNuxSq4D.balanceOf.call(addressGsIPGQ, {from: accounts[5]});

		assert.equal(uint256MaOjeR4, BigInt("0"))
		await expect(DSPNuxSq4D.transferFrom.call(addressQoM15fA, address7H0oU4, uintIZFaEJj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPTEh939r = await DSP.new({from: accounts[2]});
		const uintyyitPqU = BigInt("1341")
		const addressgBRqw1k = accounts[5]
		const uintZsrvMJD = BigInt("665")
		const addressIrUtQ0k = accounts[3]
//		const boolekVrJ1R = await DSPTEh939r.transfer.call(addressgBRqw1k, uintyyitPqU, {from: accounts[5]});
//		const boolmCXmVSr = await DSPTEh939r.approve.call(addressIrUtQ0k, uintZsrvMJD, {from: accounts[0]});
//		await DSPTEh939r.unpause.call({from: accounts[3]});
//		const boolm4TTOrC = await DSPTEh939r.paused.call({from: accounts[0]});

		await expect(DSPTEh939r.transfer.call(addressgBRqw1k, uintyyitPqU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPTgl6LTF = await DSP.new({from: accounts[1]});
		const uint256NRquLpz = await DSPTgl6LTF.totalSupply.call({from: accounts[1]});
		const boolSzCW1rF = await DSPTgl6LTF.paused.call({from: accounts[2]});

		assert.equal(boolSzCW1rF, false)
		assert.equal(uint256NRquLpz, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPTEh939r = await DSP.new({from: accounts[2]});
		const uint4lxzTN = BigInt("1727")
		const addressNHOnjlF = accounts[3]
		const uintuOtNes = BigInt("1341")
		const addressfaHp0SI = accounts[5]
		const uintR23bCL = BigInt("665")
		const addressqfpBs3h = accounts[3]
//		await DSPTEh939r.pause.call({from: accounts[0]});
//		const boolWn0oMIv = await DSPTEh939r.transfer.call(addressNHOnjlF, uint4lxzTN, {from: accounts[5]});
//		const boolekVrJ1R = await DSPTEh939r.transfer.call(addressfaHp0SI, uintuOtNes, {from: accounts[5]});
//		const boolmCXmVSr = await DSPTEh939r.approve.call(addressqfpBs3h, uintR23bCL, {from: accounts[0]});
//		const boolm4TTOrC = await DSPTEh939r.paused.call({from: accounts[0]});

		await expect(DSPTEh939r.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFvEA2BF = await DSP.new({from: accounts[4]});
		const uintF1BJR59 = BigInt("1239")
		const addressWF6BNbb = accounts[4]
		const addressEOUL77n = accounts[4]
//		const boolxqoa5MC = await DSPFvEA2BF.decreaseAllowance.call(addressWF6BNbb, uintF1BJR59, {from: accounts[0]});
//		const uint256FUqLQH = await DSPFvEA2BF.balanceOf.call(addressEOUL77n, {from: accounts[5]});
//		await DSPFvEA2BF.whenPaused.call({from: accounts[1]});

		await expect(DSPFvEA2BF.decreaseAllowance.call(addressWF6BNbb, uintF1BJR59, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPF5E448T = await DSP.new({from: accounts[4]});
		const addressW2myOMC = accounts[4]
		const addressVTCMYqx = accounts[4]
		const uintsAGubZp = BigInt("1287")
		const addressmyz4Xe = "0x0000000000000000000000000000000000000001"
		const uint256ony82nZ = await DSPF5E448T.allowance.call(addressVTCMYqx, addressW2myOMC, {from: accounts[1]});
		const boolCZqfsjD = await DSPF5E448T.paused.call({from: accounts[1]});
		const boolCM5lBE6 = await DSPF5E448T.transfer.call(addressmyz4Xe, uintsAGubZp, {from: accounts[4]});
		const uint256hdj9Mdt = await DSPF5E448T.totalSupply.call({from: accounts[0]});
//		const bool9LEbUX = await DSPF5E448T.acceptOwnership.call({from: accounts[0]});
//		const uint256yd8R9q6 = await DSPF5E448T.totalSupply.call({from: accounts[0]});

		assert.equal(boolCM5lBE6, true)
		assert.equal(boolCZqfsjD, false)
		assert.equal(uint256hdj9Mdt, BigInt("100000000000000000000000000000"))
		assert.equal(uint256ony82nZ, BigInt("0"))
		await expect(DSPF5E448T.acceptOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const uintVqAzE1k = BigInt("1231")
		const addressVh5Hhxy = accounts[0]
		const addressAaw9vHY = accounts[2]
//		await DSPNuxSq4D.f.call({from: accounts[1]});
//		const booln5I7FUE = await DSPNuxSq4D.transferFrom.call(addressAaw9vHY, addressVh5Hhxy, uintVqAzE1k, {from: accounts[1]});
//		const stringL63kK3s = await DSPNuxSq4D.symbol.call({from: accounts[4]});

		await expect(DSPNuxSq4D.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrgyKW7 = await DSP.new({from: accounts[2]});
		const uintrytIgRd = BigInt("228")
		const addressSXvOZZB = "0x0000000000000000000000000000000000000001"
		const addressZdxHsTm = accounts[4]
		const addressEaQl8m3 = accounts[1]
//		await DSPrgyKW7.onlyNewOwner.call({from: accounts[5]});
//		const uint8ZQgDqO3 = await DSPrgyKW7.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolak9iqE2 = await DSPrgyKW7.transfer.call(addressSXvOZZB, uintrytIgRd, {from: accounts[3]});
//		const boolX3QEg4G = await DSPrgyKW7.unfreezeAccount.call(addressZdxHsTm, {from: accounts[2]});
//		await DSPrgyKW7.renouncePauser.call({from: accounts[5]});
//		const boolZHvqu4C = await DSPrgyKW7.isOwner.call(addressEaQl8m3, {from: accounts[2]});

		await expect(DSPrgyKW7.onlyNewOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZU7MRv8 = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRWPP5PL = BigInt("1784")
		const addressMoUZOEO = accounts[2]
		const addressAgOg80j = accounts[3]
		const addressUdHWox2 = accounts[1]
		const addressQKw81D = accounts[2]
		const address2v5qdu = accounts[0]
		const uintpuLRi7I = BigInt("1975")
		const addressSDmDtuA = accounts[3]
		const boolGDv6DlR = await DSPZU7MRv8.burnFrombyOwner.call(addressMoUZOEO, uintRWPP5PL, {from: accounts[1]});
		const addressCbp7gmg = await DSPZU7MRv8.transferOwnership.call(addressAgOg80j, {from: accounts[1]});
		const addressbKD6xQU = await DSPZU7MRv8.upgradeTo.call(addressUdHWox2, {from: accounts[1]});
		const uint256DukC6hY = await DSPZU7MRv8.allowance.call(address2v5qdu, addressQKw81D, {from: accounts[2]});
		const boolwkR4T6q = await DSPZU7MRv8.unlock.call(addressSDmDtuA, uintpuLRi7I, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const uintsocLJs8 = BigInt("1231")
		const addresswQXh0DB = accounts[0]
		const addressyHgczMg = accounts[2]
		const uint8rAeTLHz = await DSPNuxSq4D.decimals.call({from: accounts[3]});
//		await DSPNuxSq4D.whenPaused.call({from: accounts[3]});
//		await DSPNuxSq4D.f.call({from: accounts[4]});
//		const booln5I7FUE = await DSPNuxSq4D.transferFrom.call(addressyHgczMg, addresswQXh0DB, uintsocLJs8, {from: accounts[1]});

		assert.equal(uint8rAeTLHz, BigInt("18"))
		await expect(DSPNuxSq4D.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const uintAKRVmlW = BigInt("1915")
		const addressTn2bLxJ = accounts[5]
		const uint7OhiQS = BigInt("1218")
		const addressZxsqYxU = accounts[0]
		const addressTT1BBbS = accounts[2]
		const boolMRblhIN = await DSPNuxSq4D.approve.call(addressTn2bLxJ, uintAKRVmlW, {from: "0x0000000000000000000000000000000000000001"});
//		const booln5I7FUE = await DSPNuxSq4D.transferFrom.call(addressTT1BBbS, addressZxsqYxU, uint7OhiQS, {from: accounts[1]});

		assert.equal(boolMRblhIN, true)
		await expect(DSPNuxSq4D.transferFrom.call(addressTT1BBbS, addressZxsqYxU, uint7OhiQS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const uintWYU54t = BigInt("247")
		const addressjnsbfqB = accounts[4]
		const addressVbsENKm = accounts[4]
//		const boolAcrwmnv = await DSPNuxSq4D.unlock.call(addressjnsbfqB, uintWYU54t, {from: accounts[4]});
//		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressVbsENKm, {from: accounts[5]});

		await expect(DSPNuxSq4D.unlock.call(addressjnsbfqB, uintWYU54t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const uintt90wsl = BigInt("1231")
		const addressP1tCwJr = accounts[1]
		const addressIISVlZg = accounts[2]
		const stringTY8N082 = await DSPNuxSq4D.symbol.call({from: accounts[1]});
//		const booln5I7FUE = await DSPNuxSq4D.transferFrom.call(addressIISVlZg, addressP1tCwJr, uintt90wsl, {from: accounts[1]});

		assert.equal(stringTY8N082, "DSP")
		await expect(DSPNuxSq4D.transferFrom.call(addressIISVlZg, addressP1tCwJr, uintt90wsl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXw6SOeU = await DSP.new({from: accounts[4]});
		const uintZBOOFdn = BigInt("494")
		const addresszhIHTlC = accounts[0]
		const addressm7HFMy = accounts[0]
		const boolbY9h33W = await DSPXw6SOeU.increaseAllowance.call(addresszhIHTlC, uintZBOOFdn, {from: accounts[3]});
//		await DSPXw6SOeU.onlyPauser.call({from: accounts[1]});
//		const boolc9bAzZW = await DSPXw6SOeU.isPauser.call(addressm7HFMy, {from: accounts[2]});

		assert.equal(boolbY9h33W, true)
		await expect(DSPXw6SOeU.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressvYGudZP = accounts[5]
		const addressWpywtHV = accounts[5]
		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressvYGudZP, {from: accounts[5]});
		const addressxz6GDGe = await DSPNuxSq4D.transferOwnership.call(addressWpywtHV, {from: accounts[4]});

		assert.equal(uint256MaOjeR4, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressNwtIcX = accounts[0]
		const addressIA00YLw = accounts[5]
		const uintVFATBh = BigInt("219")
		const addresseHYy7bg = accounts[1]
		const boolb9GR2cN = await DSPNuxSq4D.isPauser.call(addressNwtIcX, {from: accounts[0]});
//		await DSPNuxSq4D.renouncePauser.call({from: accounts[0]});
//		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressIA00YLw, {from: accounts[5]});
//		const boolzvOSypB = await DSPNuxSq4D.transfer.call(addresseHYy7bg, uintVFATBh, {from: accounts[2]});

		assert.equal(boolb9GR2cN, false)
		await expect(DSPNuxSq4D.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressHtlJNH0 = accounts[5]
		const addressNcLsMx = accounts[4]
		const addressO7lZMz = accounts[5]
		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressHtlJNH0, {from: accounts[5]});
		const uint256Lf6vLP2 = await DSPNuxSq4D.balanceOf.call(addressNcLsMx, {from: accounts[5]});
		const addressdS4DEIM = await DSPNuxSq4D.addPauser.call(addressO7lZMz, {from: accounts[4]});

		assert.equal(uint256Lf6vLP2, BigInt("100000000000000000000000000000"))
		assert.equal(uint256MaOjeR4, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressAdsw9SU = accounts[5]
		const uintDOY4tvF = BigInt("1296")
		const uinthtT5tco = BigInt("1224")
		const addressIe7KXM3 = accounts[5]
		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressAdsw9SU, {from: accounts[5]});
		const boolhGepcTX = await DSPNuxSq4D.transferWithLock.call(addressIe7KXM3, uinthtT5tco, uintDOY4tvF, {from: accounts[4]});

		assert.equal(boolhGepcTX, true)
		assert.equal(uint256MaOjeR4, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPOmuJVoF = await DSP.new({from: accounts[3]});
		const addresstSj7az = accounts[5]
		const addresskkh37F = await DSPOmuJVoF.upgradeTo.call(addresstSj7az, {from: accounts[3]});
//		await DSPOmuJVoF.onlyPauser.call({from: accounts[2]});
//		await DSPOmuJVoF.whenNotPaused.call({from: accounts[2]});
//		await DSPOmuJVoF.onlyOwner.call({from: accounts[4]});
//		const stringbdrNJoA = await DSPOmuJVoF.symbol.call({from: accounts[2]});

		await expect(DSPOmuJVoF.onlyPauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressOC24rbw = accounts[4]
		const addresscRFwjNW = accounts[0]
		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressOC24rbw, {from: accounts[5]});
		const boolrImqmNq = await DSPNuxSq4D.isOwner.call(addresscRFwjNW, {from: "0x0000000000000000000000000000000000000001"});
		const stringr9aidZD = await DSPNuxSq4D.name.call({from: accounts[1]});

		assert.equal(boolrImqmNq, false)
		assert.equal(stringr9aidZD, "DSP")
		assert.equal(uint256MaOjeR4, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressBkCnekN = accounts[0]
		const addressqf9SLmZ = accounts[5]
//		const addressZUHkyZz = await DSPNuxSq4D.removePauser.call(addressBkCnekN, {from: accounts[4]});
//		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressqf9SLmZ, {from: accounts[5]});

		await expect(DSPNuxSq4D.removePauser.call(addressBkCnekN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressAJ3SStc = accounts[4]
		const uintpkUzwnh = BigInt("483")
		const addresstE026jz = accounts[1]
		const addressiAl4g8V = accounts[4]
		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressAJ3SStc, {from: accounts[5]});
		const boolv3YyHtn = await DSPNuxSq4D.transfer.call(addresstE026jz, uintpkUzwnh, {from: accounts[4]});
		const boolRdUBDpc = await DSPNuxSq4D.isOwner.call(addressiAl4g8V, {from: accounts[2]});
		const uint256tTIdUiV = await DSPNuxSq4D.totalSupply.call({from: accounts[4]});

		assert.equal(boolRdUBDpc, true)
		assert.equal(boolv3YyHtn, true)
		assert.equal(uint256MaOjeR4, BigInt("100000000000000000000000000000"))
		assert.equal(uint256tTIdUiV, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const uinthWiDsUb = BigInt("1917")
		const addressnh7uiVH = "0x0000000000000000000000000000000000000001"
		const uintkEBvhw2 = BigInt("1231")
		const addresseEwWfP2 = accounts[0]
		const addressoopMbl = accounts[3]
		const boolP9ekQlV = await DSPNuxSq4D.paused.call({from: accounts[5]});
//		const boolnISJmkf = await DSPNuxSq4D.burnFrombyOwner.call(addressnh7uiVH, uinthWiDsUb, {from: accounts[4]});
//		const booln5I7FUE = await DSPNuxSq4D.transferFrom.call(addressoopMbl, addresseEwWfP2, uintkEBvhw2, {from: accounts[1]});

		assert.equal(boolP9ekQlV, false)
		await expect(DSPNuxSq4D.burnFrombyOwner.call(addressnh7uiVH, uinthWiDsUb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNuxSq4D = await DSP.new({from: accounts[4]});
		const addressBBEmw2g = accounts[0]
		const addressfcteZdR = accounts[5]
		const boolxGbJqVq = await DSPNuxSq4D.freezeAccount.call(addressBBEmw2g, {from: accounts[4]});
		const uint256MaOjeR4 = await DSPNuxSq4D.balanceOf.call(addressfcteZdR, {from: accounts[5]});

		assert.equal(boolxGbJqVq, true)
		assert.equal(uint256MaOjeR4, BigInt("0"))
	});
})
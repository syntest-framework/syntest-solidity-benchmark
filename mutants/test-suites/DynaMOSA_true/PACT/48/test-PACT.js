const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTQFaniRK = await PACT.new({from: accounts[1]});
		const uintQKHEkYO = BigInt("215")
		const address2lqQDX = "0x0000000000000000000000000000000000000001"
		const uintIFq8DZW = BigInt("564")
		const addressAROxXPG = accounts[3]
		const addressAGmvknh = accounts[0]
//		const boolMgmO1uS = await PACTQFaniRK.burn.call(address2lqQDX, uintQKHEkYO, {from: accounts[0]});
//		const boolhOQ2WPo = await PACTQFaniRK.transfer.call(addressAROxXPG, uintIFq8DZW, {from: accounts[0]});
//		const boolTi5Ri1Q = await PACTQFaniRK.setupTeam.call(addressAGmvknh, {from: accounts[1]});

		await expect(PACTQFaniRK.burn.call(address2lqQDX, uintQKHEkYO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTy2Kx4Or = await PACT.new({from: accounts[0]});
		const uintaAxOQGn = BigInt("1137")
		const addressa97fb4h = accounts[4]
		const addressaqbl9kk = accounts[4]
//		const booldCUE8tu = await PACTy2Kx4Or.transfer.call(addressa97fb4h, uintaAxOQGn, {from: accounts[2]});
//		const boolWVzmNZI = await PACTy2Kx4Or.setupBasePool.call(addressaqbl9kk, {from: accounts[3]});

		await expect(PACTy2Kx4Or.transfer.call(addressa97fb4h, uintaAxOQGn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTmg4uEmn = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslf9VIk = accounts[2]
		const uintrNWqBfL = BigInt("1477")
		const addressPVGcmt7 = "0x0000000000000000000000000000000000000001"
		const uinte23iqf1 = BigInt("293")
		const addressx0NzhAp = accounts[0]
		const boolYNt8vEG = await PACTmg4uEmn.setupTeam.call(addresslf9VIk, {from: accounts[1]});
		const booli0aj5sO = await PACTmg4uEmn.transfer.call(addressPVGcmt7, uintrNWqBfL, {from: "0x0000000000000000000000000000000000000001"});
		const boolte7nz1z = await PACTmg4uEmn.transfer.call(addressx0NzhAp, uinte23iqf1, {from: accounts[4]});
	});

	it('test for PACT', async () => {
		const PACTYhnXBxW = await PACT.new({from: accounts[2]});
		const addressVOoLhBy = accounts[1]
		const addressx0muOIw = accounts[5]
//		const boolkXf8ker = await PACTYhnXBxW.setupReserve.call(addressVOoLhBy, {from: accounts[4]});
//		const uintyyNJ6C = await PACTYhnXBxW.balanceOf.call(addressx0muOIw, {from: accounts[2]});
//		const uint8T96Vm8 = await PACTYhnXBxW.decimals.call({from: accounts[3]});

		await expect(PACTYhnXBxW.setupReserve.call(addressVOoLhBy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTk1uGsyo = await PACT.new({from: accounts[3]});
		const addresseWiriqS = accounts[1]
		const addressPGiOCIj = accounts[0]
		const addressy2ZKzXi = accounts[2]
		const uintwPBEzM3 = BigInt("1473")
		const addressH0I2BU = accounts[2]
//		const boold1W7Rg = await PACTk1uGsyo.setupRewards.call(addresseWiriqS, {from: accounts[3]});
//		const uintekxlhet = await PACTk1uGsyo.allowance.call(addressy2ZKzXi, addressPGiOCIj, {from: accounts[2]});
//		const uint8ZIDpso9 = await PACTk1uGsyo.decimals.call({from: accounts[0]});
//		const boolwPZADM = await PACTk1uGsyo.burn.call(addressH0I2BU, uintwPBEzM3, {from: accounts[2]});

		await expect(PACTk1uGsyo.setupRewards.call(addresseWiriqS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLqaFpum = await PACT.new({from: accounts[3]});
		const addressA3J3Ej = accounts[4]
		const addressrYHclJB = accounts[4]
		const addresslzNgsSH = accounts[2]
		const addressHD9YwRA = accounts[2]
//		const bool4ce8Db = await PACTLqaFpum.setupBasePool.call(addressA3J3Ej, {from: accounts[1]});
//		const stringOowcwAG = await PACTLqaFpum.symbol.call({from: accounts[4]});
//		const uintVoVu5XL = await PACTLqaFpum.totalSupply.call({from: accounts[2]});
//		const boolOmfz1wi = await PACTLqaFpum.setupTeam.call(addressrYHclJB, {from: accounts[2]});
//		const boolM7FvPFV = await PACTLqaFpum.setupReserve.call(addresslzNgsSH, {from: accounts[4]});
//		const boolK7Fcy6h = await PACTLqaFpum.setupRewards.call(addressHD9YwRA, {from: accounts[5]});

		await expect(PACTLqaFpum.setupBasePool.call(addressA3J3Ej, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTp9eisCt = await PACT.new({from: accounts[1]});
		const addressLtpz0yd = accounts[4]
		const uintbcL0f2H = BigInt("1599")
		const addresspeATq3b = accounts[1]
		const uintkMhgnFZ = BigInt("951")
		const address9oKWFn = accounts[4]
		const addressRZifNjt = accounts[4]
//		const boolNfLzdtk = await PACTp9eisCt.setupFarming.call(addressLtpz0yd, {from: accounts[2]});
//		const uintZuC6W71 = await PACTp9eisCt.totalSupply.call({from: accounts[0]});
//		const boolE7zh3DK = await PACTp9eisCt.approve.call(addresspeATq3b, uintbcL0f2H, {from: accounts[1]});
//		const boolm1LX4Nr = await PACTp9eisCt.transferFrom.call(addressRZifNjt, address9oKWFn, uintkMhgnFZ, {from: accounts[2]});
//		const stringjZKAtWR = await PACTp9eisCt.name.call({from: accounts[2]});

		await expect(PACTp9eisCt.setupFarming.call(addressLtpz0yd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfF1ShGC = await PACT.new({from: accounts[1]});
		const uintVwnVgc3 = BigInt("223")
		const addressVV1KJ1 = accounts[3]
		const uintrJkOC7r = await PACTfF1ShGC.totalSupply.call({from: accounts[4]});
//		const boolcfTpkpj = await PACTfF1ShGC.transfer.call(addressVV1KJ1, uintVwnVgc3, {from: accounts[2]});

		assert.equal(uintrJkOC7r, BigInt("1000000000000000000000000000"))
		await expect(PACTfF1ShGC.transfer.call(addressVV1KJ1, uintVwnVgc3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLgXClwg = await PACT.new({from: accounts[1]});
		const addressX77uONt = accounts[2]
		const uint8y1Utomi = await PACTLgXClwg.decimals.call({from: accounts[1]});
//		const boolsln0bJ6 = await PACTLgXClwg.setupReserve.call(addressX77uONt, {from: accounts[2]});

		assert.equal(uint8y1Utomi, BigInt("18"))
		await expect(PACTLgXClwg.setupReserve.call(addressX77uONt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTSGsHrg9 = await PACT.new({from: accounts[2]});
		const addressa0dwvW4 = accounts[0]
		const addressQ9oVcc7 = accounts[5]
		const uintK8pFvV = BigInt("1033")
		const addressQmDo7KQ = accounts[5]
		const addressQnCV7WX = accounts[3]
		const uintFYYXkC2 = await PACTSGsHrg9.totalSupply.call({from: accounts[5]});
		const uintG7IbJYm = await PACTSGsHrg9.allowance.call(addressQ9oVcc7, addressa0dwvW4, {from: accounts[1]});
//		const boolvv4unCa = await PACTSGsHrg9.transfer.call(addressQmDo7KQ, uintK8pFvV, {from: accounts[1]});
//		const stringczPiv1F = await PACTSGsHrg9.name.call({from: accounts[2]});
//		const boolK9bF86P = await PACTSGsHrg9.setupBasePool.call(addressQnCV7WX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8L8S529v = await PACTSGsHrg9.decimals.call({from: accounts[0]});
//		const stringantvIc6 = await PACTSGsHrg9.name.call({from: accounts[1]});

		assert.equal(uintFYYXkC2, BigInt("1000000000000000000000000000"))
		assert.equal(uintG7IbJYm, BigInt("0"))
		await expect(PACTSGsHrg9.transfer.call(addressQmDo7KQ, uintK8pFvV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfF1ShGC = await PACT.new({from: accounts[1]});
		const uintDRiqmVE = BigInt("223")
		const addressyHf7nwq = accounts[3]
		const address80jatE = accounts[4]
		const stringdJw08c9 = await PACTfF1ShGC.name.call({from: accounts[3]});
		const uintrJkOC7r = await PACTfF1ShGC.totalSupply.call({from: accounts[4]});
//		const boolcfTpkpj = await PACTfF1ShGC.transfer.call(addressyHf7nwq, uintDRiqmVE, {from: accounts[2]});
//		const uintUfhhvT5 = await PACTfF1ShGC.totalSupply.call({from: accounts[0]});
//		const boolZa7ult2 = await PACTfF1ShGC.setupTeam.call(address80jatE, {from: accounts[5]});

		assert.equal(stringdJw08c9, "P2PB2B community token")
		assert.equal(uintrJkOC7r, BigInt("1000000000000000000000000000"))
		await expect(PACTfF1ShGC.transfer.call(addressyHf7nwq, uintDRiqmVE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTQFaniRK = await PACT.new({from: accounts[1]});
		const uintbGgivT = BigInt("834")
		const addressMe6JQLa = accounts[0]
		const addressdlg1HS5 = accounts[0]
		const uintTuimQW0 = BigInt("215")
		const addressUgRitqY = "0x0000000000000000000000000000000000000000"
		const uintCbyCDeX = BigInt("564")
		const addressizrfrgn = accounts[3]
		const addressBEToiLU = accounts[0]
//		const boolqLS8kpF = await PACTQFaniRK.transferFrom.call(addressdlg1HS5, addressMe6JQLa, uintbGgivT, {from: accounts[4]});
//		const uinttawn88o = await PACTQFaniRK.totalSupply.call({from: accounts[3]});
//		const boolMgmO1uS = await PACTQFaniRK.burn.call(addressUgRitqY, uintTuimQW0, {from: accounts[0]});
//		const boolhOQ2WPo = await PACTQFaniRK.transfer.call(addressizrfrgn, uintCbyCDeX, {from: accounts[0]});
//		const boolTi5Ri1Q = await PACTQFaniRK.setupTeam.call(addressBEToiLU, {from: accounts[1]});

		await expect(PACTQFaniRK.transferFrom.call(addressdlg1HS5, addressMe6JQLa, uintbGgivT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTToUun9n = await PACT.new({from: accounts[1]});
		const stringPE8Rj6 = await PACTToUun9n.symbol.call({from: accounts[0]});
		const stringIGv0AwY = await PACTToUun9n.name.call({from: accounts[1]});

		assert.equal(stringIGv0AwY, "P2PB2B community token")
		assert.equal(stringPE8Rj6, "PACT")
	});

	it('test for PACT', async () => {
		const PACTLgXClwg = await PACT.new({from: accounts[1]});
		const uintRGwuUGM = BigInt("1433")
		const addressbQjkhe = accounts[4]
		const addressPUzFTaH = accounts[3]
		const addressfJHSw4B = accounts[2]
		const addressDRJqq2R = accounts[1]
		const boolalovwXj = await PACTLgXClwg.approve.call(addressbQjkhe, uintRGwuUGM, {from: accounts[1]});
//		const boolajxNfQN = await PACTLgXClwg.setupReserve.call(addressPUzFTaH, {from: accounts[1]});
//		const uintN1gbHNe = await PACTLgXClwg.balanceOf.call(addressfJHSw4B, {from: accounts[1]});
//		const boolHQRsoG7 = await PACTLgXClwg.setupBasePool.call(addressDRJqq2R, {from: accounts[2]});

		assert.equal(boolalovwXj, true)
		await expect(PACTLgXClwg.setupReserve.call(addressPUzFTaH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTp9eisCt = await PACT.new({from: accounts[1]});
		const addressPoXnMhx = accounts[5]
		const addressCSCZEvU = accounts[4]
		const addressa2YxoV0 = accounts[5]
		const uintV0CSak = BigInt("1599")
		const addressKn6t7vF = accounts[2]
		const uintN4MtMH = BigInt("951")
		const addressAu4Olq8 = accounts[4]
		const addressMkgKprm = accounts[4]
		const stringHMTcSTV = await PACTp9eisCt.name.call({from: accounts[1]});
		const uintIn6dp6m = await PACTp9eisCt.balanceOf.call(addressPoXnMhx, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNfLzdtk = await PACTp9eisCt.setupFarming.call(addressCSCZEvU, {from: accounts[2]});
//		const stringpzTkfJ7 = await PACTp9eisCt.name.call({from: accounts[1]});
//		const boolvnBzs72 = await PACTp9eisCt.setupBasePool.call(addressa2YxoV0, {from: accounts[0]});
//		const uintZuC6W71 = await PACTp9eisCt.totalSupply.call({from: accounts[0]});
//		const uint8vYeQtrc = await PACTp9eisCt.decimals.call({from: accounts[1]});
//		const boolE7zh3DK = await PACTp9eisCt.approve.call(addressKn6t7vF, uintV0CSak, {from: accounts[1]});
//		const boolm1LX4Nr = await PACTp9eisCt.transferFrom.call(addressMkgKprm, addressAu4Olq8, uintN4MtMH, {from: accounts[2]});
//		const stringjZKAtWR = await PACTp9eisCt.name.call({from: accounts[2]});

		assert.equal(stringHMTcSTV, "P2PB2B community token")
		assert.equal(uintIn6dp6m, BigInt("0"))
		await expect(PACTp9eisCt.setupFarming.call(addressCSCZEvU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTRwAUd3Y = await PACT.new({from: accounts[0]});
		const addressw8dGk9P = accounts[4]
		const addressXdZVCap = accounts[3]
//		const boolZViZsE = await PACTRwAUd3Y.setupTeam.call(addressw8dGk9P, {from: accounts[2]});
//		const boolUpEYUYE = await PACTRwAUd3Y.setupReserve.call(addressXdZVCap, {from: accounts[2]});

		await expect(PACTRwAUd3Y.setupTeam.call(addressw8dGk9P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
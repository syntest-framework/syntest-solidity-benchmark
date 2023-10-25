const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressAGet5tq = accounts[1]
		const addresss9Xiy6A = "0x0000000000000000000000000000000000000001"
		const QuickTokenah5NgPl = await QuickToken.new(addressAGet5tq, addresss9Xiy6A, {from: accounts[1]});
		const uintguuSVFG = BigInt("1707")
		const addresstK48bak = accounts[5]
		const uintlFJ7ppW = BigInt("1127")
		const addressVoTjN7 = accounts[3]
		const uintEjIaTvV = BigInt("1275")
		const addressHszWj71 = accounts[1]
		const uintQ8SQlWK = BigInt("386")
		const addressNOFltF = accounts[0]
		const booln3vgCqp = await QuickTokenah5NgPl.transfer.call(addresstK48bak, uintguuSVFG, {from: accounts[2]});
		const boolvOBjZuz = await QuickTokenah5NgPl.approve.call(addressVoTjN7, uintlFJ7ppW, {from: accounts[4]});
		const addressZwuqhUr = await QuickTokenah5NgPl.mint.call(addressHszWj71, uintEjIaTvV, {from: accounts[3]});
		const addressKnDaC7g = await QuickTokenah5NgPl.mint.call(addressNOFltF, uintQ8SQlWK, {from: accounts[1]});

		await expect(QuickTokenah5NgPl.transfer.call(addresstK48bak, uintguuSVFG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressLgCA1Er = accounts[4]
		const addressW5b5xY5 = accounts[3]
		const QuickTokenUkdaesd = await QuickToken.new(addressLgCA1Er, addressW5b5xY5, {from: accounts[5]});
		const uint1xV78y = BigInt("726")
		const addressBdZwZd = accounts[2]
		const addressVoFS00W = accounts[5]
		const addressL4kHpgm = accounts[4]
		const addressfxlqQzz = accounts[3]
		const addressIOth54v = accounts[5]
		const addressnGzOtJy = accounts[1]
		const addressXTYakVH = accounts[0]
		const addressDAAvNZl = accounts[4]
		const addressGoCKpJm = accounts[2]
		const addressT02EFr = "0x0000000000000000000000000000000000000001"
		const boolmgV2Y0N = await QuickTokenUkdaesd.approve.call(addressBdZwZd, uint1xV78y, {from: accounts[1]});
		const uintAuNAGFa = await QuickTokenUkdaesd.allowance.call(addressL4kHpgm, addressVoFS00W, {from: accounts[0]});
		const addresseBfdy4T = await QuickTokenUkdaesd.setMinter.call(addressfxlqQzz, {from: accounts[0]});
		const uintlfv8aSR = await QuickTokenUkdaesd.allowance.call(addressnGzOtJy, addressIOth54v, {from: accounts[3]});
		const uintlKPLVFT = await QuickTokenUkdaesd.allowance.call(addressDAAvNZl, addressXTYakVH, {from: accounts[1]});
		const uintBe1tur9 = await QuickTokenUkdaesd.allowance.call(addressT02EFr, addressGoCKpJm, {from: accounts[3]});

		assert.equal(boolmgV2Y0N, true)
		assert.equal(uintAuNAGFa, BigInt("0"))
		await expect(QuickTokenUkdaesd.setMinter.call(addressfxlqQzz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressoJbG1l4 = accounts[5]
		const addressyOzpWBd = accounts[2]
		const QuickTokenYvFTIgJ = await QuickToken.new(addressoJbG1l4, addressyOzpWBd, {from: accounts[5]});
		const addressEtttib3 = accounts[3]
		const uintbi3VtJj = BigInt("1475")
		const addressMQxu5Kh = accounts[4]
		const addressLLMTvjO = accounts[3]
		const addressP0PDtAa = accounts[3]
		const uintKn81X5i = await QuickTokenYvFTIgJ.balanceOf.call(addressEtttib3, {from: accounts[0]});
		const boollWYY2Jc = await QuickTokenYvFTIgJ.transferFrom.call(addressLLMTvjO, addressMQxu5Kh, uintbi3VtJj, {from: accounts[3]});
		const uintoYonWBO = await QuickTokenYvFTIgJ.balanceOf.call(addressP0PDtAa, {from: accounts[0]});

		assert.equal(uintKn81X5i, BigInt("0"))
		await expect(QuickTokenYvFTIgJ.transferFrom.call(addressLLMTvjO, addressMQxu5Kh, uintbi3VtJj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressKTyfqGz = accounts[2]
		const addresstSKJYcT = accounts[0]
		const QuickTokenHmRMODH = await QuickToken.new(addressKTyfqGz, addresstSKJYcT, {from: accounts[5]});
		const uintxpvUreO = BigInt("793")
		const addressdtIu7S7 = accounts[4]
		const addressSJ2HFoU = accounts[4]
		const uintgMarseD = BigInt("28")
		const addresszTiaW5G = accounts[2]
		const uintNCl5uwm = BigInt("1936")
		const addressvp171Vm = accounts[3]
		const boolLt9ekOS = await QuickTokenHmRMODH.transferFrom.call(addressSJ2HFoU, addressdtIu7S7, uintxpvUreO, {from: accounts[3]});
		const addresstbNDTXF = await QuickTokenHmRMODH.mint.call(addresszTiaW5G, uintgMarseD, {from: accounts[0]});
		const boolaIAa6fI = await QuickTokenHmRMODH.transfer.call(addressvp171Vm, uintNCl5uwm, {from: accounts[5]});

		await expect(QuickTokenHmRMODH.transferFrom.call(addressSJ2HFoU, addressdtIu7S7, uintxpvUreO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressq0TtCHW = accounts[4]
		const addressOfNmT9r = accounts[1]
		const QuickTokenAETJSPv = await QuickToken.new(addressq0TtCHW, addressOfNmT9r, {from: accounts[4]});
		const addresswkIzOCD = accounts[2]
		const uintRc5GpZ9 = BigInt("1533")
		const addressauOvL7l = accounts[0]
		const addressssmSQyD = "0x0000000000000000000000000000000000000001"
		const addresscBhjHEE = accounts[4]
		const addressRsI4NsO = accounts[2]
		const addressLqLqBE = accounts[0]
		const uintsY6sHpc = BigInt("1307")
		const addresskSd6rHM = accounts[0]
		const addressejEUum = accounts[3]
		const addressBiwKam = accounts[4]
		const uintnBAeON4 = await QuickTokenAETJSPv.balanceOf.call(addresswkIzOCD, {from: accounts[4]});
		const boolY9V1L1e = await QuickTokenAETJSPv.approve.call(addressauOvL7l, uintRc5GpZ9, {from: "0x0000000000000000000000000000000000000001"});
		const uintNcJFJc = await QuickTokenAETJSPv.allowance.call(addresscBhjHEE, addressssmSQyD, {from: accounts[4]});
		const uintRFFcgtG = await QuickTokenAETJSPv.allowance.call(addressLqLqBE, addressRsI4NsO, {from: accounts[4]});
		const boolMT808i = await QuickTokenAETJSPv.transfer.call(addresskSd6rHM, uintsY6sHpc, {from: accounts[4]});
		const uintAmcEq79 = await QuickTokenAETJSPv.allowance.call(addressBiwKam, addressejEUum, {from: accounts[2]});

		assert.equal(boolMT808i, true)
		assert.equal(boolY9V1L1e, true)
		assert.equal(uintAmcEq79, BigInt("0"))
		assert.equal(uintNcJFJc, BigInt("0"))
		assert.equal(uintRFFcgtG, BigInt("0"))
		assert.equal(uintnBAeON4, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressOy5Ivb9 = accounts[4]
		const addressTPAinHK = accounts[3]
		const QuickTokenUkdaesd = await QuickToken.new(addressOy5Ivb9, addressTPAinHK, {from: accounts[5]});
		const uinthRHsT6m = BigInt("583")
		const addressCNzq3OV = accounts[1]
		const uintRSeOHoQ = BigInt("726")
		const addressS5bD2wZ = accounts[2]
		const addressAqj145H = accounts[5]
		const addressWxXdj4 = accounts[4]
		const addresshhaCRsk = accounts[4]
		const addressxHktyJ = accounts[5]
		const addressu48j5dP = accounts[1]
		const addressbfhYpG = accounts[0]
		const addresscoEaspD = accounts[4]
		const address200Gqr = accounts[2]
		const addressgrhabrT = "0x0000000000000000000000000000000000000001"
		const addressga7r0JU = await QuickTokenUkdaesd.mint.call(addressCNzq3OV, uinthRHsT6m, {from: accounts[3]});
		const boolmgV2Y0N = await QuickTokenUkdaesd.approve.call(addressS5bD2wZ, uintRSeOHoQ, {from: accounts[1]});
		const uintAuNAGFa = await QuickTokenUkdaesd.allowance.call(addressWxXdj4, addressAqj145H, {from: accounts[0]});
		const addresseBfdy4T = await QuickTokenUkdaesd.setMinter.call(addresshhaCRsk, {from: accounts[0]});
		const uintlfv8aSR = await QuickTokenUkdaesd.allowance.call(addressu48j5dP, addressxHktyJ, {from: accounts[3]});
		const uintlKPLVFT = await QuickTokenUkdaesd.allowance.call(addresscoEaspD, addressbfhYpG, {from: accounts[1]});
		const uintBe1tur9 = await QuickTokenUkdaesd.allowance.call(addressgrhabrT, address200Gqr, {from: accounts[3]});

		assert.equal(boolmgV2Y0N, true)
		assert.equal(uintAuNAGFa, BigInt("0"))
		await expect(QuickTokenUkdaesd.setMinter.call(addresshhaCRsk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressTFzHHRc = accounts[4]
		const addressfRV4nsW = accounts[1]
		const QuickTokenAETJSPv = await QuickToken.new(addressTFzHHRc, addressfRV4nsW, {from: accounts[4]});
		const addressgJOitVy = accounts[2]
		const uintAKsasHs = BigInt("1533")
		const addressB2KTWNV = accounts[0]
		const uintmoV9ofR = BigInt("1849")
		const addressFh45PoA = accounts[0]
		const addresssKoDQUt = "0x0000000000000000000000000000000000000000"
		const addressX8B1UEt = accounts[4]
		const addressXa2VF9V = accounts[2]
		const addressBz48DR = accounts[0]
		const addressp63CxQl = accounts[2]
		const addressuzEnrLN = accounts[0]
		const uintPqKVHUw = BigInt("1307")
		const addresstAKykxY = accounts[0]
		const addresscgIoMhF = accounts[3]
		const addressOCTw8X = accounts[4]
		const uintnBAeON4 = await QuickTokenAETJSPv.balanceOf.call(addressgJOitVy, {from: accounts[4]});
		const boolY9V1L1e = await QuickTokenAETJSPv.approve.call(addressB2KTWNV, uintAKsasHs, {from: "0x0000000000000000000000000000000000000001"});
		const addressALhGFia = await QuickTokenAETJSPv.mint.call(addressFh45PoA, uintmoV9ofR, {from: accounts[3]});
		const uintNcJFJc = await QuickTokenAETJSPv.allowance.call(addressX8B1UEt, addresssKoDQUt, {from: accounts[4]});
		const uintRFFcgtG = await QuickTokenAETJSPv.allowance.call(addressBz48DR, addressXa2VF9V, {from: accounts[4]});
		const uintVdGqDj3 = await QuickTokenAETJSPv.allowance.call(addressuzEnrLN, addressp63CxQl, {from: "0x0000000000000000000000000000000000000001"});
		const boolMT808i = await QuickTokenAETJSPv.transfer.call(addresstAKykxY, uintPqKVHUw, {from: accounts[4]});
		const uintAmcEq79 = await QuickTokenAETJSPv.allowance.call(addressOCTw8X, addresscgIoMhF, {from: accounts[2]});

		assert.equal(boolY9V1L1e, true)
		assert.equal(uintnBAeON4, BigInt("0"))
		await expect(QuickTokenAETJSPv.mint.call(addressFh45PoA, uintmoV9ofR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressh82Cxm = accounts[1]
		const addressejvan0s = accounts[4]
		const QuickTokenuBhM5iu = await QuickToken.new(addressh82Cxm, addressejvan0s, {from: "0x0000000000000000000000000000000000000001"});
		const uintFoLL8i = BigInt("1463")
		const addressSczspR = accounts[1]
		const addresss1AXkzn = accounts[3]
		const addressfxGxM7 = accounts[0]
		const boolUUF1uT3 = await QuickTokenuBhM5iu.transferFrom.call(addresss1AXkzn, addressSczspR, uintFoLL8i, {from: accounts[5]});
		const uintLNcnTDX = await QuickTokenuBhM5iu.balanceOf.call(addressfxGxM7, {from: accounts[3]});
	});

	it('test for QuickToken', async () => {
		const addresspjGyKNJ = accounts[5]
		const addresstTbu9df = accounts[1]
		const QuickTokenlO7VRY = await QuickToken.new(addresspjGyKNJ, addresstTbu9df, {from: accounts[5]});
		const uintwp6LatX = BigInt("41")
		const addressQ20fTnK = accounts[5]
		const uintSrZnAoa = BigInt("551")
		const addressumbOHWA = "0x00000000000000000000000000000000000000-1"
		const uintmdp6kt3 = BigInt("859")
		const addressm83qle = accounts[5]
		const addresstAFo7kC = accounts[0]
		const uintWCZnLt = BigInt("485")
		const addressTbaOEEN = accounts[5]
		const uintn369Gap = BigInt("109")
		const addressEQmcqX6 = accounts[5]
		const uintu2cnR4H = BigInt("720")
		const addressZKlGaIq = accounts[5]
		const addressAYwb7PY = accounts[0]
		const boolUJkaXC = await QuickTokenlO7VRY.approve.call(addressQ20fTnK, uintwp6LatX, {from: accounts[1]});
		const boolNx3iGv = await QuickTokenlO7VRY.approve.call(addressumbOHWA, uintSrZnAoa, {from: accounts[4]});
		const boolYKVaxyf = await QuickTokenlO7VRY.approve.call(addressm83qle, uintmdp6kt3, {from: accounts[0]});
		const uintMXo71bD = await QuickTokenlO7VRY.balanceOf.call(addresstAFo7kC, {from: accounts[1]});
		const addressdX6U22C = await QuickTokenlO7VRY.mint.call(addressTbaOEEN, uintWCZnLt, {from: accounts[1]});
		const boolsqbTu3T = await QuickTokenlO7VRY.approve.call(addressEQmcqX6, uintn369Gap, {from: accounts[1]});
		const boolbe2ysE1 = await QuickTokenlO7VRY.transferFrom.call(addressAYwb7PY, addressZKlGaIq, uintu2cnR4H, {from: accounts[3]});

		assert.equal(boolUJkaXC, true)
		await expect(QuickTokenlO7VRY.approve.call(addressumbOHWA, uintSrZnAoa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
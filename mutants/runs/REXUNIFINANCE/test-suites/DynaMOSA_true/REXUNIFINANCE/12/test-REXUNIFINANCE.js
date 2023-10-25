const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEYkxuB4 = await REXUNIFINANCE.new({from: accounts[4]});
		const uintFZerqay = BigInt("972")
		const addressHJJ5LZM = accounts[4]
		const uintuqvU2MP = BigInt("381")
		const addressObOfmtN = accounts[0]
		const uintT3cik8n = BigInt("1685")
		const addressDbi9K0C = accounts[3]
		const uintTtE9GJh = BigInt("48")
		const addressSyY2F6P = accounts[0]
		const addressY6cAiTH = accounts[2]
		const boolwyKrX9z = await REXUNIFINANCEYkxuB4.transfer.call(addressHJJ5LZM, uintFZerqay, {from: accounts[2]});
		const boolkn7Pk8M = await REXUNIFINANCEYkxuB4.transfer.call(addressObOfmtN, uintuqvU2MP, {from: accounts[3]});
		const boolWM60iB9 = await REXUNIFINANCEYkxuB4.decreaseApproval.call(addressDbi9K0C, uintT3cik8n, {from: accounts[2]});
		const boolSjdAd9J = await REXUNIFINANCEYkxuB4.decreaseApproval.call(addressSyY2F6P, uintTtE9GJh, {from: accounts[1]});
		const uint256rsoCZ4Y = await REXUNIFINANCEYkxuB4.transferableTokens.call(addressY6cAiTH, {from: accounts[4]});

		await expect(REXUNIFINANCEYkxuB4.transfer.call(addressHJJ5LZM, uintFZerqay, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEtxFq7Ca = await REXUNIFINANCE.new({from: accounts[4]});
		const addressdowo4Rl = accounts[3]
		const addressYDEzUxr = accounts[2]
		const uintmYxTvHi = BigInt("436")
		const address0ZrSRs = accounts[0]
		const addressJIFxqzy = accounts[3]
		const uintmIl97PE = BigInt("1594")
		const addresssSdRTp = "0x0000000000000000000000000000000000000001"
		const uintkOdSjlE = BigInt("230")
		const addressvhIo3gL = accounts[1]
		const uint256MOsFIy3 = await REXUNIFINANCEtxFq7Ca.allowance.call(addressYDEzUxr, addressdowo4Rl, {from: accounts[3]});
		const boolZkM6mGl = await REXUNIFINANCEtxFq7Ca.approve.call(address0ZrSRs, uintmYxTvHi, {from: "0x0000000000000000000000000000000000000001"});
		const address3xv255 = await REXUNIFINANCEtxFq7Ca.transferOwnership.call(addressJIFxqzy, {from: accounts[2]});
		const boolSdNmtsC = await REXUNIFINANCEtxFq7Ca.approve.call(addresssSdRTp, uintmIl97PE, {from: accounts[1]});
		const boolu95UFsk = await REXUNIFINANCEtxFq7Ca.decreaseApproval.call(addressvhIo3gL, uintkOdSjlE, {from: accounts[2]});

		assert.equal(boolZkM6mGl, true)
		assert.equal(uint256MOsFIy3, BigInt("0"))
		await expect(REXUNIFINANCEtxFq7Ca.transferOwnership.call(addressJIFxqzy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyRs2ygK = await REXUNIFINANCE.new({from: accounts[1]});
		const addressaAExJw9 = accounts[4]
		const uintjpORsNe = BigInt("778")
		const addressCEg2GnF = accounts[4]
		const uintvdluNh = BigInt("91")
		const addressmzx1893 = accounts[0]
		const addressxSqU8Ug = accounts[3]
		const uintLyMUGnt = BigInt("1394")
		const addressADyimSB = accounts[1]
		const uintEk4jo0c = BigInt("233")
		const addressnyNH5ed = accounts[0]
		const uint256VKRsALE = await REXUNIFINANCEyRs2ygK.balanceOf.call(addressaAExJw9, {from: accounts[0]});
		const boolABzugFc = await REXUNIFINANCEyRs2ygK.approve.call(addressCEg2GnF, uintjpORsNe, {from: accounts[5]});
		const boolFtVSbS = await REXUNIFINANCEyRs2ygK.transferFrom.call(addressxSqU8Ug, addressmzx1893, uintvdluNh, {from: "0x0000000000000000000000000000000000000001"});
		const boolv5gJQmM = await REXUNIFINANCEyRs2ygK.increaseApproval.call(addressADyimSB, uintLyMUGnt, {from: accounts[4]});
		const boolE9hBF3K = await REXUNIFINANCEyRs2ygK.decreaseApproval.call(addressnyNH5ed, uintEk4jo0c, {from: accounts[0]});

		assert.equal(boolABzugFc, true)
		assert.equal(uint256VKRsALE, BigInt("0"))
		await expect(REXUNIFINANCEyRs2ygK.transferFrom.call(addressxSqU8Ug, addressmzx1893, uintvdluNh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEkyxLB6B = await REXUNIFINANCE.new({from: accounts[5]});
		const uintNkDqt9Q = BigInt("1106")
		const addressAHl3lf5 = accounts[2]
		const addressHeA3DNI = accounts[3]
		const address2BW5DH = accounts[5]
		const uintkynFTVz = BigInt("731")
		const addresszcMKjM7 = accounts[4]
		const addressUPAG6It = accounts[3]
		const uintX4pCgIM = BigInt("408")
		const addressd1jcb2a = accounts[1]
		const boolGRY4sb = await REXUNIFINANCEkyxLB6B.increaseApproval.call(addressAHl3lf5, uintNkDqt9Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Hg6KjQq = await REXUNIFINANCEkyxLB6B.allowance.call(address2BW5DH, addressHeA3DNI, {from: accounts[4]});
		const boolOCnWq4K = await REXUNIFINANCEkyxLB6B.transferFrom.call(addressUPAG6It, addresszcMKjM7, uintkynFTVz, {from: accounts[1]});
		const boolQj9KNz0 = await REXUNIFINANCEkyxLB6B.approve.call(addressd1jcb2a, uintX4pCgIM, {from: accounts[3]});

		assert.equal(boolGRY4sb, true)
		assert.equal(uint256Hg6KjQq, BigInt("0"))
		await expect(REXUNIFINANCEkyxLB6B.transferFrom.call(addressUPAG6It, addresszcMKjM7, uintkynFTVz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEg9lURe9 = await REXUNIFINANCE.new({from: accounts[1]});
		const uintwJmlE6K = BigInt("1185")
		const addressG5fW8eZ = "0x0000000000000000000000000000000000000001"
		const uintkeMsbDA = BigInt("465")
		const addresslpDvpWq = accounts[1]
		const uintP1Gjs6 = BigInt("1637")
		const addressiQ6mCLR = accounts[1]
		const uintukHF4yM = BigInt("149")
		const addressH5uOks = accounts[2]
		const addressb1cbMGi = "0x0000000000000000000000000000000000000001"
		const uint3RbSas = BigInt("1804")
		const addressqkIvdO = accounts[1]
		const addressEjzo5Hi = accounts[4]
		const boolKqlzAKW = await REXUNIFINANCEg9lURe9.decreaseApproval.call(addressG5fW8eZ, uintwJmlE6K, {from: accounts[5]});
		const boolhF73Vpm = await REXUNIFINANCEg9lURe9.increaseApproval.call(addresslpDvpWq, uintkeMsbDA, {from: accounts[2]});
		const boolaEBFU1W = await REXUNIFINANCEg9lURe9.increaseApproval.call(addressiQ6mCLR, uintP1Gjs6, {from: accounts[1]});
		const boolo688M8n = await REXUNIFINANCEg9lURe9.transferFrom.call(addressb1cbMGi, addressH5uOks, uintukHF4yM, {from: accounts[3]});
		const boolEqekVvq = await REXUNIFINANCEg9lURe9.transferFrom.call(addressEjzo5Hi, addressqkIvdO, uint3RbSas, {from: accounts[0]});

		assert.equal(boolKqlzAKW, true)
		assert.equal(boolhF73Vpm, true)
		await expect(REXUNIFINANCEg9lURe9.increaseApproval.call(addressiQ6mCLR, uintP1Gjs6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEtxFq7Ca = await REXUNIFINANCE.new({from: accounts[4]});
		const addressMsefsIn = accounts[3]
		const addressCo2EEll = accounts[2]
		const addressLn4igGL = accounts[1]
		const uintDDQ1kuE = BigInt("436")
		const addresso5vtHc1 = accounts[0]
		const addressnjRAZbe = accounts[4]
		const uintwSyAdO6 = BigInt("230")
		const addressXSuPHVg = accounts[1]
		const uint256MOsFIy3 = await REXUNIFINANCEtxFq7Ca.allowance.call(addressCo2EEll, addressMsefsIn, {from: accounts[3]});
		const addressXR8WxFy = await REXUNIFINANCEtxFq7Ca.transferOwnership.call(addressLn4igGL, {from: accounts[4]});
		const boolZkM6mGl = await REXUNIFINANCEtxFq7Ca.approve.call(addresso5vtHc1, uintDDQ1kuE, {from: "0x0000000000000000000000000000000000000001"});
		const address3xv255 = await REXUNIFINANCEtxFq7Ca.transferOwnership.call(addressnjRAZbe, {from: accounts[2]});
		const boolu95UFsk = await REXUNIFINANCEtxFq7Ca.decreaseApproval.call(addressXSuPHVg, uintwSyAdO6, {from: accounts[2]});

		assert.equal(boolZkM6mGl, true)
		assert.equal(uint256MOsFIy3, BigInt("0"))
		await expect(REXUNIFINANCEtxFq7Ca.transferOwnership.call(addressnjRAZbe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEJ9kXyXk = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdwc8H97 = accounts[4]
		const addressAf86K2q = accounts[0]
		const uintHB3p0Xo = BigInt("1452")
		const addressH74r1C = accounts[1]
		const uint1cYwks = BigInt("1197")
		const addressEDmOlPg = accounts[1]
		const uint256oxVSLq1 = await REXUNIFINANCEJ9kXyXk.allowance.call(addressAf86K2q, addressdwc8H97, {from: accounts[1]});
		const boolhfsFt35 = await REXUNIFINANCEJ9kXyXk.transfer.call(addressH74r1C, uintHB3p0Xo, {from: accounts[4]});
		const boolECRiA0N = await REXUNIFINANCEJ9kXyXk.transfer.call(addressEDmOlPg, uint1cYwks, {from: accounts[1]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEkyxLB6B = await REXUNIFINANCE.new({from: accounts[5]});
		const addressEHo0fiD = "0x00000000000000000000000000000000000000-1"
		const uintNPCbJlW = BigInt("1150")
		const addressopIMf4 = accounts[3]
		const uintUc7cgxc = BigInt("715")
		const addresshFWuVF7 = accounts[5]
		const addressRaydQMW = accounts[3]
		const uint256jQIIafX = await REXUNIFINANCEkyxLB6B.balanceOf.call(addressEHo0fiD, {from: accounts[3]});
		const boolspYxYax = await REXUNIFINANCEkyxLB6B.approve.call(addressopIMf4, uintNPCbJlW, {from: accounts[1]});
		const boolOCnWq4K = await REXUNIFINANCEkyxLB6B.transferFrom.call(addressRaydQMW, addresshFWuVF7, uintUc7cgxc, {from: accounts[1]});

		await expect(REXUNIFINANCEkyxLB6B.balanceOf.call(addressEHo0fiD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
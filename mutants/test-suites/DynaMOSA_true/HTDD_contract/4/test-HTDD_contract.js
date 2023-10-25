const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractXX5wenr = await HTDD_contract.new({from: accounts[2]});
		const uintMOOcba5 = BigInt("2030")
		const addressgUO5otU = accounts[5]
		const addressI2RDI6N = "0x0000000000000000000000000000000000000001"
		const uintFSmqKXS = BigInt("1246")
		const addressmV7lqMd = accounts[5]
		const addressiUg3a1T = accounts[3]
		const addressFA9sDNG = accounts[3]
		const uintGeUX3YL = BigInt("1585")
		const addresscwznot = accounts[3]
//		const boolp0wDa0J = await HTDD_contractXX5wenr.transferFrom.call(addressI2RDI6N, addressgUO5otU, uintMOOcba5, {from: accounts[0]});
//		const boolB3N2RiX = await HTDD_contractXX5wenr.transfer.call(addressmV7lqMd, uintFSmqKXS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VsyfQSO = await HTDD_contractXX5wenr.allowance.call(addressFA9sDNG, addressiUg3a1T, {from: accounts[4]});
//		const boolIsiCvc = await HTDD_contractXX5wenr.transfer.call(addresscwznot, uintGeUX3YL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractXX5wenr.transferFrom.call(addressI2RDI6N, addressgUO5otU, uintMOOcba5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contracttpKohlJ = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnts6amO = BigInt("1853")
		const addressEMU0g5H = accounts[5]
		const addressOcWlijN = accounts[2]
		const addressaY93PWS = accounts[5]
		const uintWuLKJ3I = BigInt("712")
		const addressTUWxDp = accounts[5]
		const addressY0kS8E4 = accounts[2]
		const addressOnI8LlM = accounts[4]
		const boolxJ7yWTn = await HTDD_contracttpKohlJ.approve.call(addressEMU0g5H, uintnts6amO, {from: accounts[3]});
		const uint256LOMWgz0 = await HTDD_contracttpKohlJ.allowance.call(addressaY93PWS, addressOcWlijN, {from: accounts[2]});
		const boolgpRFaGA = await HTDD_contracttpKohlJ.transfer.call(addressTUWxDp, uintWuLKJ3I, {from: accounts[5]});
		const uint2562FZkvQ = await HTDD_contracttpKohlJ.allowance.call(addressOnI8LlM, addressY0kS8E4, {from: accounts[4]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractkTeGHGL = await HTDD_contract.new({from: accounts[3]});
		const uinthg9cleY = BigInt("1030")
		const addressMC0QPBa = accounts[4]
		const addresslVbJhej = accounts[3]
		const addressvF4DQPJ = accounts[1]
		const addresscZ1udLi = accounts[2]
		const uintIGq2R7 = BigInt("690")
		const addressErSB4U2 = accounts[2]
		const addressWwDip3K = accounts[5]
//		const boolVGBDCCi = await HTDD_contractkTeGHGL.transferFrom.call(addresslVbJhej, addressMC0QPBa, uinthg9cleY, {from: accounts[0]});
//		const uint256LIkXQWv = await HTDD_contractkTeGHGL.allowance.call(addresscZ1udLi, addressvF4DQPJ, {from: accounts[4]});
//		const booldLdjlJm = await HTDD_contractkTeGHGL.transferFrom.call(addressWwDip3K, addressErSB4U2, uintIGq2R7, {from: accounts[1]});

		await expect(HTDD_contractkTeGHGL.transferFrom.call(addresslVbJhej, addressMC0QPBa, uinthg9cleY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractua1C9mW = await HTDD_contract.new({from: accounts[1]});
		const uintrrdHHgr = BigInt("1912")
		const addressmf0iyLp = accounts[0]
		const uintBT4hIHv = BigInt("1063")
		const addressrRr3bOW = accounts[1]
		const addressdbVCMCe = "0x0000000000000000000000000000000000000001"
		const uintQFavFY6 = BigInt("2038")
		const addressmxUQe3a = accounts[5]
		const uintP936NqW = BigInt("797")
		const addressiRhQznU = accounts[0]
		const boolHCgcDN = await HTDD_contractua1C9mW.transfer.call(addressmf0iyLp, uintrrdHHgr, {from: accounts[1]});
//		const booldpjSKCV = await HTDD_contractua1C9mW.transferFrom.call(addressdbVCMCe, addressrRr3bOW, uintBT4hIHv, {from: accounts[0]});
//		const boolHlvQb4Q = await HTDD_contractua1C9mW.approve.call(addressmxUQe3a, uintQFavFY6, {from: accounts[0]});
//		const boolOuTTBOR = await HTDD_contractua1C9mW.approve.call(addressiRhQznU, uintP936NqW, {from: accounts[3]});

		assert.equal(boolHCgcDN, true)
		await expect(HTDD_contractua1C9mW.transferFrom.call(addressdbVCMCe, addressrRr3bOW, uintBT4hIHv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractki1aY4 = await HTDD_contract.new({from: accounts[3]});
		const uintcI1yt1u = BigInt("734")
		const addressXKilzUJ = accounts[4]
		const uintItQRdOH = BigInt("566")
		const addressfaqZ5V = accounts[1]
		const uintunYkQ2e = BigInt("621")
		const addressWcPekw = accounts[3]
		const boolyLCk9oF = await HTDD_contractki1aY4.approve.call(addressXKilzUJ, uintcI1yt1u, {from: accounts[0]});
		const boolH0BpTDR = await HTDD_contractki1aY4.approve.call(addressfaqZ5V, uintItQRdOH, {from: accounts[0]});
		const boolGmKDLX = await HTDD_contractki1aY4.approve.call(addressWcPekw, uintunYkQ2e, {from: accounts[0]});

		assert.equal(boolGmKDLX, true)
		assert.equal(boolH0BpTDR, true)
		assert.equal(boolyLCk9oF, true)
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractyDtkZV = await HTDD_contract.new({from: accounts[0]});
		const addressyy9QnVV = accounts[0]
		const addresspaVzx9P = accounts[4]
		const uintIgwvYCs = BigInt("8")
		const addressMjEuhOX = accounts[0]
		const addressVgI13f4 = "0x0000000000000000000000000000000000000001"
		const addressEytpPnj = "0x0000000000000000000000000000000000000001"
		const addressEVVwTpx = accounts[2]
		const uintmdsVm3H = BigInt("1260")
		const addressyki7yZG = accounts[1]
		const uint256DYKvide = await HTDD_contractyDtkZV.allowance.call(addresspaVzx9P, addressyy9QnVV, {from: accounts[2]});
//		const boolKKxRbVD = await HTDD_contractyDtkZV.transferFrom.call(addressVgI13f4, addressMjEuhOX, uintIgwvYCs, {from: accounts[0]});
//		const uint256GG0YKum = await HTDD_contractyDtkZV.allowance.call(addressEVVwTpx, addressEytpPnj, {from: accounts[4]});
//		const boolkRSxAPK = await HTDD_contractyDtkZV.approve.call(addressyki7yZG, uintmdsVm3H, {from: accounts[0]});

		assert.equal(uint256DYKvide, BigInt("0"))
		await expect(HTDD_contractyDtkZV.transferFrom.call(addressVgI13f4, addressMjEuhOX, uintIgwvYCs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinp3gHyZQ = await EdenCoin.new({from: accounts[0]});
		const uintJMmxqZ7 = BigInt("1642")
		const addressBPIFrNi = accounts[4]
		const addressoVldnAs = accounts[4]
		const addressEQAuu1K = accounts[3]
		const boolYedcoXm = await EdenCoinp3gHyZQ.increaseApproval.call(addressBPIFrNi, uintJMmxqZ7, {from: accounts[3]});
		const uint256n8ghGKY = await EdenCoinp3gHyZQ.allowance.call(addressEQAuu1K, addressoVldnAs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYedcoXm, true)
		assert.equal(uint256n8ghGKY, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinsWquQiO = await EdenCoin.new({from: accounts[1]});
		const uintK216CTk = BigInt("724")
		const addressUtwk5px = accounts[4]
		const uintKuWhgQ = BigInt("1331")
		const addressBOULyg = "0x0000000000000000000000000000000000000001"
		const addressaoyxl0r = accounts[4]
		const uintzi9LM9j = BigInt("1943")
		const addressX1QD46R = accounts[2]
		const addressSaSWsXo = accounts[5]
		const booluUKIEYy = await EdenCoinsWquQiO.approve.call(addressUtwk5px, uintK216CTk, {from: accounts[2]});
		const boolmwmaRYf = await EdenCoinsWquQiO.transferFrom.call(addressaoyxl0r, addressBOULyg, uintKuWhgQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolD8jnOce = await EdenCoinsWquQiO.transferFrom.call(addressSaSWsXo, addressX1QD46R, uintzi9LM9j, {from: accounts[3]});

		assert.equal(booluUKIEYy, true)
		await expect(EdenCoinsWquQiO.transferFrom.call(addressaoyxl0r, addressBOULyg, uintKuWhgQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinupM3UEQ = await EdenCoin.new({from: accounts[4]});
		const uintY9AZ8UN = BigInt("55")
		const addressynic7c3 = accounts[0]
		const uint9QZVvw = BigInt("1502")
		const addressIHJpcqB = accounts[3]
		const addresshzmMkRv = accounts[0]
		const uintuHEMski = BigInt("1111")
		const addressrXdhes = accounts[0]
		const addressWon3sJX = accounts[1]
		const uintIkOgwXS = BigInt("1071")
		const addresspc6O0a9 = accounts[1]
		const boolPazWJv6 = await EdenCoinupM3UEQ.decreaseApproval.call(addressynic7c3, uintY9AZ8UN, {from: accounts[2]});
		const boolj7DJaC8 = await EdenCoinupM3UEQ.transferFrom.call(addresshzmMkRv, addressIHJpcqB, uint9QZVvw, {from: "0x0000000000000000000000000000000000000001"});
		const boolOzhVmtw = await EdenCoinupM3UEQ.transferFrom.call(addressWon3sJX, addressrXdhes, uintuHEMski, {from: accounts[0]});
		const boolFs4e8w = await EdenCoinupM3UEQ.transfer.call(addresspc6O0a9, uintIkOgwXS, {from: accounts[3]});

		assert.equal(boolPazWJv6, true)
		await expect(EdenCoinupM3UEQ.transferFrom.call(addresshzmMkRv, addressIHJpcqB, uint9QZVvw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZ3UnQC3 = await EdenCoin.new({from: accounts[0]});
		const addressR1gb0Lu = accounts[5]
		const addressgsbQI2a = "0x0000000000000000000000000000000000000001"
		const uintZOzZRid = BigInt("138")
		const addresseOv56Zh = accounts[1]
		const uintOMpvmWE = BigInt("1843")
		const addressoSRBtot = accounts[1]
		const uintAturFs2 = BigInt("1008")
		const addressjSHksmE = accounts[1]
		const addresstArYdL4 = accounts[0]
		const addressaI8AqVX = accounts[1]
		const uint256jvxPe0B = await EdenCoinZ3UnQC3.allowance.call(addressgsbQI2a, addressR1gb0Lu, {from: accounts[5]});
		const boolqDIGezC = await EdenCoinZ3UnQC3.transfer.call(addresseOv56Zh, uintZOzZRid, {from: "0x0000000000000000000000000000000000000001"});
		const boolJdD3WNB = await EdenCoinZ3UnQC3.increaseApproval.call(addressoSRBtot, uintOMpvmWE, {from: accounts[0]});
		const boolQNd6gWF = await EdenCoinZ3UnQC3.decreaseApproval.call(addressjSHksmE, uintAturFs2, {from: accounts[5]});
		const uint256t93O5wn = await EdenCoinZ3UnQC3.allowance.call(addressaI8AqVX, addresstArYdL4, {from: accounts[0]});

		assert.equal(uint256jvxPe0B, BigInt("0"))
		await expect(EdenCoinZ3UnQC3.transfer.call(addresseOv56Zh, uintZOzZRid, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinXxqXX7 = await EdenCoin.new({from: accounts[0]});
		const addressyV3wMYh = accounts[5]
		const uintYNg6yaU = BigInt("1683")
		const addressux0bXc5 = accounts[3]
		const addressq8Hph5k = accounts[3]
		const addressKFp7hxv = accounts[3]
		const addressdLCF8Qs = accounts[0]
		const uint256I09aokt = await EdenCoinXxqXX7.balanceOf.call(addressyV3wMYh, {from: accounts[4]});
		const boolfEElBJf = await EdenCoinXxqXX7.transferFrom.call(addressq8Hph5k, addressux0bXc5, uintYNg6yaU, {from: accounts[4]});
		const uint256CuogBPE = await EdenCoinXxqXX7.allowance.call(addressdLCF8Qs, addressKFp7hxv, {from: accounts[1]});

		assert.equal(uint256I09aokt, BigInt("0"))
		await expect(EdenCoinXxqXX7.transferFrom.call(addressq8Hph5k, addressux0bXc5, uintYNg6yaU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinupM3UEQ = await EdenCoin.new({from: accounts[4]});
		const uintuKdigky = BigInt("55")
		const addressxe8sxXx = accounts[1]
		const address1nFjay = accounts[1]
		const addressGyArS9A = accounts[0]
		const uinttCCCbdX = BigInt("85")
		const addressFM6zkW = "0x0000000000000000000000000000000000000001"
		const uintphntVGg = BigInt("1111")
		const addressZO2oH3G = accounts[0]
		const address160iV0 = accounts[1]
		const uintAUPoJ9w = BigInt("1525")
		const addressEwgUYf0 = accounts[3]
		const addresspHujJoq = accounts[2]
		const uintxfZol9V = BigInt("1683")
		const addresst1D2pYf = accounts[1]
		const uint4m5vjl = BigInt("896")
		const addressLWYx8Pt = accounts[2]
		const boolPazWJv6 = await EdenCoinupM3UEQ.decreaseApproval.call(addressxe8sxXx, uintuKdigky, {from: accounts[2]});
		const uint256YVV0KH7 = await EdenCoinupM3UEQ.allowance.call(addressGyArS9A, address1nFjay, {from: accounts[1]});
		const boolsyRYdP = await EdenCoinupM3UEQ.transfer.call(addressFM6zkW, uinttCCCbdX, {from: accounts[4]});
		const boolOzhVmtw = await EdenCoinupM3UEQ.transferFrom.call(address160iV0, addressZO2oH3G, uintphntVGg, {from: accounts[0]});
		const boolEsIBVem = await EdenCoinupM3UEQ.transferFrom.call(addresspHujJoq, addressEwgUYf0, uintAUPoJ9w, {from: accounts[2]});
		const boolFs4e8w = await EdenCoinupM3UEQ.transfer.call(addresst1D2pYf, uintxfZol9V, {from: accounts[3]});
		const boolkg1tVWL = await EdenCoinupM3UEQ.transfer.call(addressLWYx8Pt, uint4m5vjl, {from: accounts[2]});

		assert.equal(boolPazWJv6, true)
		assert.equal(boolsyRYdP, true)
		assert.equal(uint256YVV0KH7, BigInt("0"))
		await expect(EdenCoinupM3UEQ.transferFrom.call(address160iV0, addressZO2oH3G, uintphntVGg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinupM3UEQ = await EdenCoin.new({from: accounts[4]});
		const uintYU91vOS = BigInt("571")
		const addressBy0dolL = accounts[0]
		const addressRKIp7vz = accounts[4]
		const uintlPsBNiC = BigInt("63")
		const addressK3uUVao = accounts[1]
		const uintBAF3JWM = BigInt("1111")
		const addressh4rb16T = accounts[1]
		const address3xMwx7 = accounts[1]
		const boolStU6eWB = await EdenCoinupM3UEQ.transferFrom.call(addressRKIp7vz, addressBy0dolL, uintYU91vOS, {from: accounts[2]});
		const boolPazWJv6 = await EdenCoinupM3UEQ.decreaseApproval.call(addressK3uUVao, uintlPsBNiC, {from: accounts[2]});
		const boolOzhVmtw = await EdenCoinupM3UEQ.transferFrom.call(address3xMwx7, addressh4rb16T, uintBAF3JWM, {from: accounts[0]});

		await expect(EdenCoinupM3UEQ.transferFrom.call(addressRKIp7vz, addressBy0dolL, uintYU91vOS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinHdCPTVx = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthviyfPg = BigInt("974")
		const addressQX4uj6X = accounts[1]
		const uintT7oaWor = BigInt("1538")
		const addresskTa1Qg8 = accounts[3]
		const uintHCuTAZn = BigInt("1038")
		const addressCbDf4L7 = accounts[5]
		const uintDT1Nlgt = BigInt("81")
		const addressXPjGWj4 = accounts[5]
		const uintgQ4VeTU = BigInt("232")
		const addressxwqDCvb = accounts[1]
		const booldUrT9Gd = await EdenCoinHdCPTVx.increaseApproval.call(addressQX4uj6X, uinthviyfPg, {from: accounts[0]});
		const boolCBK8IHV = await EdenCoinHdCPTVx.increaseApproval.call(addresskTa1Qg8, uintT7oaWor, {from: accounts[3]});
		const booliZMxS4Q = await EdenCoinHdCPTVx.increaseApproval.call(addressCbDf4L7, uintHCuTAZn, {from: "0x0000000000000000000000000000000000000001"});
		const boollqPL8E2 = await EdenCoinHdCPTVx.increaseApproval.call(addressXPjGWj4, uintDT1Nlgt, {from: accounts[3]});
		const boolNezI2Jc = await EdenCoinHdCPTVx.decreaseApproval.call(addressxwqDCvb, uintgQ4VeTU, {from: accounts[3]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinupM3UEQ = await EdenCoin.new({from: accounts[4]});
		const addressUyGYe6 = accounts[1]
		const addressSNU5ZEZ = accounts[4]
		const uintrw3aiJ = BigInt("0")
		const addressVzQuomE = accounts[2]
		const uintSPBsM6W = BigInt("2041")
		const addressRdlJXg2 = accounts[4]
		const uintBWKASsw = BigInt("1246")
		const addressAEoePVm = accounts[3]
		const uintwTPNoXq = BigInt("1086")
		const addresspyB6Xqe = accounts[1]
		const addressYqXI9fg = accounts[1]
		const uintUzsBhWD = BigInt("1726")
		const addressnbgxeh = accounts[5]
		const addresshwBd7JA = accounts[3]
		const addressSq7qcuo = accounts[4]
		const uint256rpEA1GL = await EdenCoinupM3UEQ.allowance.call(addressSNU5ZEZ, addressUyGYe6, {from: accounts[0]});
		const boolPazWJv6 = await EdenCoinupM3UEQ.decreaseApproval.call(addressVzQuomE, uintrw3aiJ, {from: accounts[2]});
		const boolIVVw48 = await EdenCoinupM3UEQ.decreaseApproval.call(addressRdlJXg2, uintSPBsM6W, {from: accounts[3]});
		const boolDfLkQIT = await EdenCoinupM3UEQ.increaseApproval.call(addressAEoePVm, uintBWKASsw, {from: accounts[2]});
		const boolOzhVmtw = await EdenCoinupM3UEQ.transferFrom.call(addressYqXI9fg, addresspyB6Xqe, uintwTPNoXq, {from: accounts[0]});
		const bool7Jjpl6 = await EdenCoinupM3UEQ.transfer.call(addressnbgxeh, uintUzsBhWD, {from: accounts[5]});
		const uint256vUBrU8r = await EdenCoinupM3UEQ.allowance.call(addressSq7qcuo, addresshwBd7JA, {from: accounts[4]});

		assert.equal(boolDfLkQIT, true)
		assert.equal(boolIVVw48, true)
		assert.equal(boolPazWJv6, true)
		assert.equal(uint256rpEA1GL, BigInt("0"))
		await expect(EdenCoinupM3UEQ.transferFrom.call(addressYqXI9fg, addresspyB6Xqe, uintwTPNoXq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
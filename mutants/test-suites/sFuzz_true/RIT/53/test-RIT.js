const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITDqyASL6 = await RIT.new({from: accounts[5]});
		const uintcyUwIj6 = BigInt("472")
		const addressACb2bID = accounts[1]
		const addressUc9xPmM = accounts[3]
		const uintyNm4XdK = BigInt("1403")
		const addressCrNhwgh = accounts[3]
//		const boolmQuVhGD = await RITDqyASL6.transferFrom.call(addressUc9xPmM, addressACb2bID, uintcyUwIj6, {from: accounts[2]});
//		const boolPHgyOcR = await RITDqyASL6.approve.call(addressCrNhwgh, uintyNm4XdK, {from: accounts[0]});

		await expect(RITDqyASL6.transferFrom.call(addressUc9xPmM, addressACb2bID, uintcyUwIj6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITNIv02Nj = await RIT.new({from: accounts[3]});
		const uintwRwmX52 = BigInt("128")
		const addressBI5O8L9 = accounts[0]
		const addressS2pT3qN = accounts[3]
		const addressfLqt0S4 = accounts[0]
		const uintAduh7K = BigInt("1246")
		const addressB5kgSAD = accounts[1]
		const uintmaHGbfd = BigInt("48")
		const addressfcaHT1u = accounts[4]
//		const boolWJdq6ai = await RITNIv02Nj.decreaseAllowance.call(addressBI5O8L9, uintwRwmX52, {from: accounts[1]});
//		const uint256vgQyqnS = await RITNIv02Nj.allowance.call(addressfLqt0S4, addressS2pT3qN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrPSJ452 = await RITNIv02Nj.decreaseAllowance.call(addressB5kgSAD, uintAduh7K, {from: accounts[0]});
//		const uint8YtxCMl = await RITNIv02Nj.decimals.call({from: accounts[1]});
//		const boolvdGb8Um = await RITNIv02Nj.increaseAllowance.call(addressfcaHT1u, uintmaHGbfd, {from: accounts[3]});

		await expect(RITNIv02Nj.decreaseAllowance.call(addressBI5O8L9, uintwRwmX52, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITqTeFTu = await RIT.new({from: accounts[1]});
		const addressCLOPm8a = accounts[2]
		const uinto98o9eV = BigInt("1681")
		const addressMqnzUHG = accounts[1]
		const addressMFNSbka = accounts[0]
		const uintjOIiXoB = BigInt("1477")
		const addressQbBFxaq = accounts[0]
		const uint256lPNAzwg = await RITqTeFTu.balanceOf.call(addressCLOPm8a, {from: accounts[2]});
//		const boolJAM9kQH = await RITqTeFTu.transferFrom.call(addressMFNSbka, addressMqnzUHG, uinto98o9eV, {from: accounts[1]});
//		const stringVdiHKc = await RITqTeFTu.name.call({from: accounts[1]});
//		const boolYw4u99X = await RITqTeFTu.decreaseAllowance.call(addressQbBFxaq, uintjOIiXoB, {from: accounts[3]});

		assert.equal(uint256lPNAzwg, BigInt("0"))
		await expect(RITqTeFTu.transferFrom.call(addressMFNSbka, addressMqnzUHG, uinto98o9eV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITmZtY83R = await RIT.new({from: accounts[4]});
		const uintEgGnxPg = BigInt("686")
		const addressfOGs4AL = accounts[3]
		const uintKrDQ0oS = BigInt("1269")
		const uintdxPlZO = BigInt("17")
		const addressEDcBdSv = accounts[4]
		const addresshf7Lohp = accounts[2]
		const addressSxnWiNi = accounts[2]
		const addressys9yb6g = accounts[0]
		const uintx0WqCzP = BigInt("1306")
		const addressgUEIR8i = accounts[4]
		const addressqtBqyLN = accounts[4]
		const boolCjO7rvh = await RITmZtY83R.approve.call(addressfOGs4AL, uintEgGnxPg, {from: accounts[5]});
//		const uint256uC8ZXb = await RITmZtY83R._burn.call(uintKrDQ0oS, {from: accounts[0]});
//		const boolNW7DuFS = await RITmZtY83R.transferFrom.call(addresshf7Lohp, addressEDcBdSv, uintdxPlZO, {from: accounts[4]});
//		const uint256wFEeo2m = await RITmZtY83R.allowance.call(addressys9yb6g, addressSxnWiNi, {from: accounts[2]});
//		const boolMAr45EE = await RITmZtY83R.transferFrom.call(addressqtBqyLN, addressgUEIR8i, uintx0WqCzP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCjO7rvh, true)
		await expect(RITmZtY83R._burn.call(uintKrDQ0oS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITuMd5519 = await RIT.new({from: accounts[4]});
		const uintlGd5emT = BigInt("1316")
		const addressbEDrCjJ = "0x0000000000000000000000000000000000000001"
		const uintLT60zYW = BigInt("1804")
		const addressDZJqDSz = accounts[1]
//		const booldVIpWGb = await RITuMd5519.transfer.call(addressbEDrCjJ, uintlGd5emT, {from: accounts[1]});
//		const uint8yFxUFDL = await RITuMd5519.decimals.call({from: accounts[5]});
//		const boolbBxKov5 = await RITuMd5519.transfer.call(addressDZJqDSz, uintLT60zYW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RITuMd5519.transfer.call(addressbEDrCjJ, uintlGd5emT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITj8x3txH = await RIT.new({from: accounts[4]});
		const uintaTEGL30 = BigInt("698")
		const addressIvzrOm = accounts[0]
		const uint9IU4qq = BigInt("250")
		const uintIeD22Bq = BigInt("45")
		const addressnNeeLbg = accounts[0]
		const addressR5dN0Z8 = accounts[0]
		const addressnQ80E4Y = accounts[4]
		const addressNpKmfcH = accounts[0]
		const boolsLmuRy9 = await RITj8x3txH.increaseAllowance.call(addressIvzrOm, uintaTEGL30, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PQwXwL = await RITj8x3txH._burn.call(uint9IU4qq, {from: accounts[3]});
//		const boolVtxk1QC = await RITj8x3txH.decreaseAllowance.call(addressnNeeLbg, uintIeD22Bq, {from: accounts[0]});
//		const uint256NwjuRR = await RITj8x3txH.allowance.call(addressnQ80E4Y, addressR5dN0Z8, {from: accounts[4]});
//		const uint256szUKWYS = await RITj8x3txH.balanceOf.call(addressNpKmfcH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolsLmuRy9, true)
		await expect(RITj8x3txH._burn.call(uint9IU4qq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITYdyjFNO = await RIT.new({from: accounts[2]});
		const addressNwAo9QI = accounts[1]
		const addressk150axq = accounts[2]
		const uintiq1eSNU = BigInt("23")
		const addressVw7wGMA = "0x0000000000000000000000000000000000000001"
		const uint8zNt5ERU = await RITYdyjFNO.decimals.call({from: accounts[4]});
		const uint256iPoG59Z = await RITYdyjFNO.balanceOf.call(addressNwAo9QI, {from: accounts[0]});
		const uint256IlISscH = await RITYdyjFNO.balanceOf.call(addressk150axq, {from: accounts[4]});
		const uint256ojtG1bR = await RITYdyjFNO.totalSupply.call({from: accounts[5]});
//		const boolGqYt9Z = await RITYdyjFNO.decreaseAllowance.call(addressVw7wGMA, uintiq1eSNU, {from: accounts[1]});

		assert.equal(uint256IlISscH, BigInt("0"))
		assert.equal(uint256iPoG59Z, BigInt("0"))
		assert.equal(uint256ojtG1bR, BigInt("500000000000000000000000000"))
		assert.equal(uint8zNt5ERU, BigInt("18"))
		await expect(RITYdyjFNO.decreaseAllowance.call(addressVw7wGMA, uintiq1eSNU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITuMd5519 = await RIT.new({from: accounts[4]});
		const uintPwKlQwm = BigInt("1316")
		const addresssaQ5WR3 = "0x0000000000000000000000000000000000000000"
		const uintFjk5eLZ = BigInt("1803")
		const uintLEQu4s = BigInt("1804")
		const addressft6nXP4 = accounts[1]
//		const booldVIpWGb = await RITuMd5519.transfer.call(addresssaQ5WR3, uintPwKlQwm, {from: accounts[1]});
//		const uint256QfKcqby = await RITuMd5519._burn.call(uintFjk5eLZ, {from: accounts[4]});
//		const uint8yFxUFDL = await RITuMd5519.decimals.call({from: accounts[5]});
//		const boolbBxKov5 = await RITuMd5519.transfer.call(addressft6nXP4, uintLEQu4s, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RITuMd5519.transfer.call(addresssaQ5WR3, uintPwKlQwm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITuMd5519 = await RIT.new({from: accounts[4]});
		const address1IJNnf = accounts[4]
		const address1WPoZy = accounts[0]
		const uintaMKhDuC = BigInt("469")
		const addressO4uMM2S = "0x0000000000000000000000000000000000000001"
		const uint256iwE0Epw = await RITuMd5519.allowance.call(address1WPoZy, address1IJNnf, {from: accounts[3]});
//		const booldVIpWGb = await RITuMd5519.transfer.call(addressO4uMM2S, uintaMKhDuC, {from: accounts[1]});
//		const uint8yFxUFDL = await RITuMd5519.decimals.call({from: accounts[5]});

		assert.equal(uint256iwE0Epw, BigInt("0"))
		await expect(RITuMd5519.transfer.call(addressO4uMM2S, uintaMKhDuC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITuMd5519 = await RIT.new({from: accounts[4]});
		const stringGoSOaU = await RITuMd5519.symbol.call({from: accounts[5]});
		const uint8yFxUFDL = await RITuMd5519.decimals.call({from: accounts[5]});

		assert.equal(stringGoSOaU, "RIT 2.0")
		assert.equal(uint8yFxUFDL, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITuMd5519 = await RIT.new({from: accounts[4]});
		const uintftAQHra = BigInt("0")
		const addresssfxVlaN = accounts[3]
		const uintaTjG9xc = BigInt("469")
		const addressN7n6sC0 = "0x0000000000000000000000000000000000000002"
		const addressWBajOfe = accounts[4]
		const addressLqJOPNX = accounts[4]
		const boolBQVndJK = await RITuMd5519.decreaseAllowance.call(addresssfxVlaN, uintftAQHra, {from: accounts[3]});
//		const booldVIpWGb = await RITuMd5519.transfer.call(addressN7n6sC0, uintaTjG9xc, {from: accounts[1]});
//		const uint256xu1ecz = await RITuMd5519.allowance.call(addressLqJOPNX, addressWBajOfe, {from: accounts[3]});
//		const uint8yFxUFDL = await RITuMd5519.decimals.call({from: accounts[5]});

		assert.equal(boolBQVndJK, true)
		await expect(RITuMd5519.transfer.call(addressN7n6sC0, uintaTjG9xc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITDqyASL6 = await RIT.new({from: accounts[5]});
		const uintoDacK4s = BigInt("1403")
		const addressBZH5p9y = accounts[4]
		const uintwQuFfhU = BigInt("106")
		const addressmEbbA5B = accounts[3]
		const stringgBKctzl = await RITDqyASL6.name.call({from: accounts[4]});
		const boolPHgyOcR = await RITDqyASL6.approve.call(addressBZH5p9y, uintoDacK4s, {from: accounts[0]});
//		const boolKgKGvay = await RITDqyASL6.transfer.call(addressmEbbA5B, uintwQuFfhU, {from: accounts[4]});

		assert.equal(boolPHgyOcR, true)
		assert.equal(stringgBKctzl, "Real Estate Investment Token")
		await expect(RITDqyASL6.transfer.call(addressmEbbA5B, uintwQuFfhU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITmf3Bpnf = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbHz9RAt = "0x0000000000000000000000000000000000000001"
		const addresswR7SIoZ = accounts[1]
		const uintusBbVGW = BigInt("1728")
		const addressZU2oJRI = accounts[3]
		const uintPvTXv1B = BigInt("1686")
		const addressWhhQHQf = accounts[2]
		const uint256cuJv5t = await RITmf3Bpnf.allowance.call(addresswR7SIoZ, addressbHz9RAt, {from: accounts[4]});
		const bools6x1JE = await RITmf3Bpnf.decreaseAllowance.call(addressZU2oJRI, uintusBbVGW, {from: "0x0000000000000000000000000000000000000001"});
		const booldR3rjca = await RITmf3Bpnf.approve.call(addressWhhQHQf, uintPvTXv1B, {from: accounts[4]});
		const uint8kgXSW49 = await RITmf3Bpnf.decimals.call({from: accounts[1]});
	});
})
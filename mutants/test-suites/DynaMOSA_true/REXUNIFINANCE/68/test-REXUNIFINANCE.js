const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEf10MPJC = await REXUNIFINANCE.new({from: accounts[4]});
		const addressswJJNqT = accounts[2]
		const addressqAenqm = accounts[5]
		const addressJkjKbMA = accounts[5]
		const uintEwAitDv = BigInt("2020")
		const addressUmfXbsO = accounts[0]
		const addressoWZa7Qm = accounts[4]
		const uint256NVtTah = await REXUNIFINANCEf10MPJC.balanceOf.call(addressswJJNqT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Tv1rWsf = await REXUNIFINANCEf10MPJC.allowance.call(addressJkjKbMA, addressqAenqm, {from: accounts[3]});
//		const boollU75Xsb = await REXUNIFINANCEf10MPJC.transferFrom.call(addressoWZa7Qm, addressUmfXbsO, uintEwAitDv, {from: accounts[2]});

		assert.equal(uint256NVtTah, BigInt("0"))
		assert.equal(uint256Tv1rWsf, BigInt("0"))
		await expect(REXUNIFINANCEf10MPJC.transferFrom.call(addressoWZa7Qm, addressUmfXbsO, uintEwAitDv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEwDikV9 = await REXUNIFINANCE.new({from: accounts[1]});
		const uintKmxFjyG = BigInt("1108")
		const addresso8w2rAu = accounts[2]
		const addressAinKJpM = accounts[4]
		const addresstnzV6oJ = accounts[3]
		const uintvPRM9CZ = BigInt("1225")
		const addressJz5ufLP = accounts[3]
//		const boolecJEcN = await REXUNIFINANCEwDikV9.transfer.call(addresso8w2rAu, uintKmxFjyG, {from: accounts[1]});
//		const uint256FSt1goo = await REXUNIFINANCEwDikV9.balanceOf.call(addressAinKJpM, {from: accounts[1]});
//		const uint256vJMvdD = await REXUNIFINANCEwDikV9.transferableTokens.call(addresstnzV6oJ, {from: accounts[2]});
//		const boollPPjP3e = await REXUNIFINANCEwDikV9.increaseApproval.call(addressJz5ufLP, uintvPRM9CZ, {from: accounts[3]});

		await expect(REXUNIFINANCEwDikV9.transfer.call(addresso8w2rAu, uintKmxFjyG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEqWviBOM = await REXUNIFINANCE.new({from: accounts[2]});
		const uintdgQ3LtK = BigInt("1934")
		const addressGERQ74z = accounts[3]
		const uintN2rsted = BigInt("1205")
		const addressXgmegTD = accounts[2]
		const addressimOLjBS = accounts[5]
		const uintynnVGYa = BigInt("427")
		const addressci7ef90 = accounts[1]
		const uintZYz2Cnf = BigInt("154")
		const addressXL0gMTq = accounts[4]
		const boolKpVObFP = await REXUNIFINANCEqWviBOM.increaseApproval.call(addressGERQ74z, uintdgQ3LtK, {from: accounts[0]});
		const boolZYU407e = await REXUNIFINANCEqWviBOM.increaseApproval.call(addressXgmegTD, uintN2rsted, {from: accounts[3]});
//		const addressW2vJEw2 = await REXUNIFINANCEqWviBOM.transferOwnership.call(addressimOLjBS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZBEfY2Z = await REXUNIFINANCEqWviBOM.decreaseApproval.call(addressci7ef90, uintynnVGYa, {from: accounts[3]});
//		const boolhikN5sv = await REXUNIFINANCEqWviBOM.approve.call(addressXL0gMTq, uintZYz2Cnf, {from: accounts[0]});

		assert.equal(boolKpVObFP, true)
		assert.equal(boolZYU407e, true)
		await expect(REXUNIFINANCEqWviBOM.transferOwnership.call(addressimOLjBS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEklFK9Li = await REXUNIFINANCE.new({from: accounts[3]});
		const addresstMjn2Mj = accounts[2]
		const addresscTxWuwr = accounts[4]
		const uintD5ZT4eU = BigInt("1809")
		const addressQBCA7ol = accounts[4]
		const uintdZaVfw7 = BigInt("1580")
		const addressIF5tO07 = accounts[5]
		const uintP77U1gQ = BigInt("1105")
		const addressZXRqXYs = accounts[4]
		const uint256QTe0UTw = await REXUNIFINANCEklFK9Li.allowance.call(addresscTxWuwr, addresstMjn2Mj, {from: accounts[4]});
		const boolM7ntBer = await REXUNIFINANCEklFK9Li.decreaseApproval.call(addressQBCA7ol, uintD5ZT4eU, {from: accounts[1]});
		const boolAt9gaY = await REXUNIFINANCEklFK9Li.decreaseApproval.call(addressIF5tO07, uintdZaVfw7, {from: accounts[3]});
//		const boolvYYWETt = await REXUNIFINANCEklFK9Li.increaseApproval.call(addressZXRqXYs, uintP77U1gQ, {from: accounts[4]});

		assert.equal(boolAt9gaY, true)
		assert.equal(boolM7ntBer, true)
		assert.equal(uint256QTe0UTw, BigInt("0"))
		await expect(REXUNIFINANCEklFK9Li.increaseApproval.call(addressZXRqXYs, uintP77U1gQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEqWviBOM = await REXUNIFINANCE.new({from: accounts[2]});
		const uintF2c9Hw9 = BigInt("1934")
		const addressFZ2j3F4 = accounts[3]
		const uintkWic1zP = BigInt("859")
		const addressI0qOXn5 = "0x0000000000000000000000000000000000000001"
		const uintxtIQPD6 = BigInt("24")
		const addressWHoKUSg = accounts[4]
		const uintVBFQA99 = BigInt("1205")
		const addressS9tvqI9 = accounts[2]
		const addressLFwx7Aa = accounts[5]
		const uintMif8b3B = BigInt("136")
		const addressjnn3AjO = accounts[3]
		const addressWtModB4 = accounts[0]
		const uintg9Yhusb = BigInt("427")
		const addressQVdNUHS = accounts[1]
		const uintlqF599C = BigInt("119")
		const addressKSUhPP = accounts[4]
		const boolKpVObFP = await REXUNIFINANCEqWviBOM.increaseApproval.call(addressFZ2j3F4, uintF2c9Hw9, {from: accounts[0]});
		const boolYqoveU1 = await REXUNIFINANCEqWviBOM.increaseApproval.call(addressI0qOXn5, uintkWic1zP, {from: accounts[0]});
		const booleG6Ze9Q = await REXUNIFINANCEqWviBOM.approve.call(addressWHoKUSg, uintxtIQPD6, {from: accounts[3]});
		const boolZYU407e = await REXUNIFINANCEqWviBOM.increaseApproval.call(addressS9tvqI9, uintVBFQA99, {from: accounts[3]});
//		const addressW2vJEw2 = await REXUNIFINANCEqWviBOM.transferOwnership.call(addressLFwx7Aa, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMsaD36A = await REXUNIFINANCEqWviBOM.transferFrom.call(addressWtModB4, addressjnn3AjO, uintMif8b3B, {from: accounts[4]});
//		const boolZBEfY2Z = await REXUNIFINANCEqWviBOM.decreaseApproval.call(addressQVdNUHS, uintg9Yhusb, {from: accounts[3]});
//		const boolhikN5sv = await REXUNIFINANCEqWviBOM.approve.call(addressKSUhPP, uintlqF599C, {from: accounts[0]});

		assert.equal(boolKpVObFP, true)
		assert.equal(boolYqoveU1, true)
		assert.equal(boolZYU407e, true)
		assert.equal(booleG6Ze9Q, true)
		await expect(REXUNIFINANCEqWviBOM.transferOwnership.call(addressLFwx7Aa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEcKRKBot = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDrL1lrJ = BigInt("1351")
		const addressD1Ue7a = accounts[1]
		const uintVp8JzCI = BigInt("1200")
		const addressRTqu4Cq = accounts[3]
		const addressHdLeKgm = accounts[1]
		const boolFUE1gup = await REXUNIFINANCEcKRKBot.transfer.call(addressD1Ue7a, uintDrL1lrJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolRqkEW4Z = await REXUNIFINANCEcKRKBot.increaseApproval.call(addressRTqu4Cq, uintVp8JzCI, {from: "0x0000000000000000000000000000000000000001"});
		const addressuNmGGH = await REXUNIFINANCEcKRKBot.transferOwnership.call(addressHdLeKgm, {from: accounts[1]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEf10MPJC = await REXUNIFINANCE.new({from: accounts[4]});
		const addresspi6zp6s = accounts[0]
		const uintyWChkxl = BigInt("2020")
		const addresssRwxBht = accounts[1]
		const addressp9hEqcf = accounts[5]
		const addressI6xosX7 = await REXUNIFINANCEf10MPJC.transferOwnership.call(addresspi6zp6s, {from: accounts[4]});
//		const boollU75Xsb = await REXUNIFINANCEf10MPJC.transferFrom.call(addressp9hEqcf, addresssRwxBht, uintyWChkxl, {from: accounts[2]});

		await expect(REXUNIFINANCEf10MPJC.transferFrom.call(addressp9hEqcf, addresssRwxBht, uintyWChkxl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEMqFvLe = await REXUNIFINANCE.new({from: accounts[2]});
		const addressJKdLXxW = accounts[5]
		const uintveKMJkQ = BigInt("0")
		const address8agW55 = accounts[0]
		const addresstdPEdJS = accounts[4]
		const uinthsy9RrD = BigInt("652")
		const addressyrLN7W6 = accounts[0]
		const uintgvETimw = BigInt("184")
		const addresshq9C06q = accounts[2]
		const addressy17nHem = accounts[1]
		const uintxwt5Yy = BigInt("409")
		const addressA9VZj95 = accounts[0]
		const uint256MtOP1t1 = await REXUNIFINANCEMqFvLe.balanceOf.call(addressJKdLXxW, {from: "0x0000000000000000000000000000000000000001"});
		const boolukVsEwd = await REXUNIFINANCEMqFvLe.transferFrom.call(addresstdPEdJS, address8agW55, uintveKMJkQ, {from: accounts[2]});
//		const boolU5Vs5em = await REXUNIFINANCEMqFvLe.decreaseApproval.call(addressyrLN7W6, uinthsy9RrD, {from: accounts[0]});
//		const boolSdaJLEk = await REXUNIFINANCEMqFvLe.transferFrom.call(addressy17nHem, addresshq9C06q, uintgvETimw, {from: accounts[2]});
//		const boolxl5pKQS = await REXUNIFINANCEMqFvLe.increaseApproval.call(addressA9VZj95, uintxwt5Yy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolukVsEwd, true)
		assert.equal(uint256MtOP1t1, BigInt("0"))
		await expect(REXUNIFINANCEMqFvLe.decreaseApproval.call(addressyrLN7W6, uinthsy9RrD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
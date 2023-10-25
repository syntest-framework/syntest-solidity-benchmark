const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancewbawV7 = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintzmwjoxv = BigInt("757")
		const addressL9SpPeI = accounts[0]
		const uintKmJ7koD = BigInt("368")
		const addressql70Sky = "0x0000000000000000000000000000000000000001"
		const uintTx2gAa5 = BigInt("1145")
		const addressHiop68t = accounts[0]
		const booluAEhJd = await Straight_Fire_FinancewbawV7.transfer.call(addressL9SpPeI, uintzmwjoxv, {from: accounts[3]});
		const boolmirDBRM = await Straight_Fire_FinancewbawV7.transfer.call(addressql70Sky, uintKmJ7koD, {from: accounts[3]});
		const uint256dzdV0aZ = await Straight_Fire_FinancewbawV7.totalSupply.call({from: accounts[1]});
		const boolK3uowNQ = await Straight_Fire_FinancewbawV7.approve.call(addressHiop68t, uintTx2gAa5, {from: accounts[1]});

		assert.equal(boolK3uowNQ, true)
		assert.equal(boolmirDBRM, true)
		assert.equal(booluAEhJd, true)
		assert.equal(uint256dzdV0aZ, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancetYlPMI2 = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIQ9vPV = BigInt("503")
		const addressUPdiVM1 = accounts[4]
		const uintiPyU1go = BigInt("1674")
		const addressptGqaJS = accounts[3]
		const uintZRb12J9 = BigInt("1402")
		const addressneeYkuP = accounts[2]
		const uintV4Fhvme = BigInt("1067")
		const addressIQrdyeA = accounts[5]
		const boolc3FYZ4 = await Straight_Fire_FinancetYlPMI2.approve.call(addressUPdiVM1, uintIQ9vPV, {from: accounts[0]});
		const boolKafk6hf = await Straight_Fire_FinancetYlPMI2.transfer.call(addressptGqaJS, uintiPyU1go, {from: accounts[0]});
		const uint256HuNXdM3 = await Straight_Fire_FinancetYlPMI2.totalSupply.call({from: accounts[5]});
		const boolYYAIW3e = await Straight_Fire_FinancetYlPMI2.transfer.call(addressneeYkuP, uintZRb12J9, {from: accounts[1]});
		const boolECNrD9s = await Straight_Fire_FinancetYlPMI2.approve.call(addressIQrdyeA, uintV4Fhvme, {from: accounts[1]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceDxjClr = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintSOL3I1 = BigInt("2017")
		const addressDFz4fon = "0x0000000000000000000000000000000000000001"
		const addressu7Ilg8r = accounts[0]
		const addressMQAZZiZ = accounts[5]
		const uintzCUOJYJ = BigInt("977")
		const addressH22RgE2 = accounts[0]
		const uintiGa5AgM = BigInt("1320")
		const addressZkcZdbb = accounts[2]
		const addressGx0K7T = accounts[3]
		const addressZSJHDJF = accounts[2]
		const addressXqOpVit = accounts[0]
		const boolv2HjJsX = await Straight_Fire_FinanceDxjClr.transferFrom.call(addressu7Ilg8r, addressDFz4fon, uintSOL3I1, {from: accounts[3]});
		const uint256uaeJUUS = await Straight_Fire_FinanceDxjClr.balanceOf.call(addressMQAZZiZ, {from: accounts[4]});
		const uint256K0s8FOp = await Straight_Fire_FinanceDxjClr.totalSupply.call({from: accounts[0]});
		const boolNlsv7q7 = await Straight_Fire_FinanceDxjClr.approve.call(addressH22RgE2, uintzCUOJYJ, {from: accounts[4]});
		const boolQozaC8o = await Straight_Fire_FinanceDxjClr.transferFrom.call(addressGx0K7T, addressZkcZdbb, uintiGa5AgM, {from: accounts[4]});
		const uintJUsWlOI = await Straight_Fire_FinanceDxjClr.allowance.call(addressXqOpVit, addressZSJHDJF, {from: accounts[4]});

		assert.equal(boolNlsv7q7, true)
		assert.equal(boolQozaC8o, false)
		assert.equal(boolv2HjJsX, false)
		assert.equal(uint256K0s8FOp, BigInt("80000000000000000000000"))
		assert.equal(uint256uaeJUUS, BigInt("0"))
		assert.equal(uintJUsWlOI, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancexUW0TQ0 = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintzJdZSbi = BigInt("551")
		const addressvIQdbp8 = accounts[2]
		const uintgLcs735 = BigInt("537")
		const addressqPhK80c = accounts[1]
		const addresssPPznf = accounts[1]
		const addressg1eJ6KE = accounts[3]
		const addresso7sFp1 = accounts[0]
		const boolw9kopQw = await Straight_Fire_FinancexUW0TQ0.transfer.call(addressvIQdbp8, uintzJdZSbi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YESLJT = await Straight_Fire_FinancexUW0TQ0.totalSupply.call({from: accounts[0]});
		const booljY3aD0h = await Straight_Fire_FinancexUW0TQ0.transfer.call(addressqPhK80c, uintgLcs735, {from: "0x0000000000000000000000000000000000000001"});
		const uint256n2nte9p = await Straight_Fire_FinancexUW0TQ0.balanceOf.call(addresssPPznf, {from: "0x0000000000000000000000000000000000000001"});
		const uinttRd1vq8 = await Straight_Fire_FinancexUW0TQ0.allowance.call(addresso7sFp1, addressg1eJ6KE, {from: accounts[5]});

		assert.equal(booljY3aD0h, false)
		assert.equal(boolw9kopQw, false)
		assert.equal(uint256YESLJT, BigInt("80000000000000000000000"))
		assert.equal(uint256n2nte9p, BigInt("0"))
		assert.equal(uinttRd1vq8, BigInt("0"))
	});
})
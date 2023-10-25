const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractSUFNmG = await HTDD_contract.new({from: accounts[4]});
		const uintdXJ3VuR = BigInt("1248")
		const addressGXG3oMd = accounts[0]
		const addressGYJlvLL = accounts[4]
		const uintF7UCUWc = BigInt("1192")
		const addressoqBgiO8 = accounts[4]
		const addressPTq1Dq9 = accounts[1]
		const uintJgW3gJl = BigInt("1310")
		const addressJrGvmiC = accounts[3]
		const addresstivX8NT = accounts[1]
		const uintMjzazY3 = BigInt("946")
		const address3Vz1oS = accounts[2]
		const addressAAbqEuZ = accounts[4]
//		const booleYIEdVR = await HTDD_contractSUFNmG.transferFrom.call(addressGYJlvLL, addressGXG3oMd, uintdXJ3VuR, {from: accounts[0]});
//		const boollL18tRi = await HTDD_contractSUFNmG.transferFrom.call(addressPTq1Dq9, addressoqBgiO8, uintF7UCUWc, {from: accounts[1]});
//		const booluPLpzZ = await HTDD_contractSUFNmG.transferFrom.call(addresstivX8NT, addressJrGvmiC, uintJgW3gJl, {from: accounts[5]});
//		const boolLWsDoqD = await HTDD_contractSUFNmG.transferFrom.call(addressAAbqEuZ, address3Vz1oS, uintMjzazY3, {from: accounts[3]});

		await expect(HTDD_contractSUFNmG.transferFrom.call(addressGYJlvLL, addressGXG3oMd, uintdXJ3VuR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractj1OP91x = await HTDD_contract.new({from: accounts[2]});
		const uintNqN3h1b = BigInt("310")
		const addressaYFXBrQ = accounts[3]
		const uintiL2wFFV = BigInt("1736")
		const addresslJbuz3O = "0x0000000000000000000000000000000000000001"
		const addresse7fAkG6 = accounts[4]
		const boollZilYMc = await HTDD_contractj1OP91x.approve.call(addressaYFXBrQ, uintNqN3h1b, {from: accounts[4]});
//		const booluP8QYop = await HTDD_contractj1OP91x.transferFrom.call(addresse7fAkG6, addresslJbuz3O, uintiL2wFFV, {from: accounts[3]});

		assert.equal(boollZilYMc, true)
		await expect(HTDD_contractj1OP91x.transferFrom.call(addresse7fAkG6, addresslJbuz3O, uintiL2wFFV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractGQRUxt9 = await HTDD_contract.new({from: accounts[0]});
		const uintSncqbex = BigInt("519")
		const addressroofSgc = accounts[1]
		const uintbwcWfla = BigInt("1008")
		const addressd7mwyce = accounts[2]
		const uinteAtpl7R = BigInt("1900")
		const addresshcZtv51 = accounts[2]
		const uintFwqboV = BigInt("466")
		const addressnXYBErU = accounts[2]
		const addressAhCob5 = accounts[0]
		const addressPh1qXbo = accounts[2]
		const boolEzjGe8n = await HTDD_contractGQRUxt9.approve.call(addressroofSgc, uintSncqbex, {from: accounts[0]});
		const boolTUGmrCc = await HTDD_contractGQRUxt9.approve.call(addressd7mwyce, uintbwcWfla, {from: accounts[3]});
//		const boolZgqsAu5 = await HTDD_contractGQRUxt9.transfer.call(addresshcZtv51, uinteAtpl7R, {from: accounts[2]});
//		const boolfbupoP = await HTDD_contractGQRUxt9.transfer.call(addressnXYBErU, uintFwqboV, {from: accounts[2]});
//		const uint256OnQoY9h = await HTDD_contractGQRUxt9.allowance.call(addressPh1qXbo, addressAhCob5, {from: accounts[5]});

		assert.equal(boolEzjGe8n, true)
		assert.equal(boolTUGmrCc, true)
		await expect(HTDD_contractGQRUxt9.transfer.call(addresshcZtv51, uinteAtpl7R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractVlbMkAs = await HTDD_contract.new({from: accounts[3]});
		const addressUUqeMq2 = accounts[0]
		const addressQgei9bN = accounts[0]
		const uintfLkzSBJ = BigInt("299")
		const addressQKrqA5s = accounts[3]
		const addresslJ89Rx3 = accounts[1]
		const uintwr4JT3i = BigInt("1417")
		const addressqWnmvvm = accounts[2]
		const uint256uNItbMu = await HTDD_contractVlbMkAs.allowance.call(addressQgei9bN, addressUUqeMq2, {from: accounts[4]});
//		const boola3VEt64 = await HTDD_contractVlbMkAs.transferFrom.call(addresslJ89Rx3, addressQKrqA5s, uintfLkzSBJ, {from: accounts[2]});
//		const boolCkC7rFT = await HTDD_contractVlbMkAs.approve.call(addressqWnmvvm, uintwr4JT3i, {from: accounts[5]});

		assert.equal(uint256uNItbMu, BigInt("0"))
		await expect(HTDD_contractVlbMkAs.transferFrom.call(addresslJ89Rx3, addressQKrqA5s, uintfLkzSBJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractHEYoElB = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUIk43FD = BigInt("91")
		const addressFJ0AZBm = accounts[2]
		const addressP8bzBts = accounts[1]
		const addresspPZnQGV = accounts[3]
		const uintAAzjfc3 = BigInt("1395")
		const addressb3tAkLe = accounts[4]
		const boolm2rPF6c = await HTDD_contractHEYoElB.approve.call(addressFJ0AZBm, uintUIk43FD, {from: accounts[5]});
		const uint256bD0p1Gx = await HTDD_contractHEYoElB.allowance.call(addresspPZnQGV, addressP8bzBts, {from: accounts[4]});
		const boolGNNOzDg = await HTDD_contractHEYoElB.approve.call(addressb3tAkLe, uintAAzjfc3, {from: accounts[3]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractj1OP91x = await HTDD_contract.new({from: accounts[2]});
		const uintvoOCTl = BigInt("291")
		const addressMfUqo2c = accounts[3]
		const uint7dfvbu = BigInt("1418")
		const addressJo4Z9xD = accounts[3]
		const uintRYDd1Qe = BigInt("670")
		const addressFY9G75E = accounts[3]
		const addresstpTyQr9 = accounts[4]
		const boollZilYMc = await HTDD_contractj1OP91x.approve.call(addressMfUqo2c, uintvoOCTl, {from: accounts[4]});
		const bool44vejK = await HTDD_contractj1OP91x.transfer.call(addressJo4Z9xD, uint7dfvbu, {from: accounts[2]});
//		const boolHoYkJLr = await HTDD_contractj1OP91x.transferFrom.call(addresstpTyQr9, addressFY9G75E, uintRYDd1Qe, {from: accounts[0]});

		assert.equal(bool44vejK, true)
		assert.equal(boollZilYMc, true)
		await expect(HTDD_contractj1OP91x.transferFrom.call(addresstpTyQr9, addressFY9G75E, uintRYDd1Qe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
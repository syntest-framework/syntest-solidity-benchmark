const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinREY37Ye = await EdenCoin.new({from: accounts[1]});
		const uintAO4YXfz = BigInt("736")
		const addressGG0ixUO = accounts[0]
		const uintnoij4EX = BigInt("317")
		const addresstKpXAq2 = "0x0000000000000000000000000000000000000001"
		const addressCme6X2U = accounts[0]
		const addressZNqeVDz = accounts[0]
		const uintse11oc6 = BigInt("1095")
		const addressnxyHMQC = accounts[0]
		const uint8c5xkS = BigInt("1648")
		const addressPjvVCRx = accounts[3]
		const boolqbN7UNq = await EdenCoinREY37Ye.approve.call(addressGG0ixUO, uintAO4YXfz, {from: accounts[0]});
//		const boolG8skqAd = await EdenCoinREY37Ye.transferFrom.call(addressCme6X2U, addresstKpXAq2, uintnoij4EX, {from: accounts[1]});
//		const uint256ecDJEfT = await EdenCoinREY37Ye.balanceOf.call(addressZNqeVDz, {from: accounts[5]});
//		const booljqEkvDB = await EdenCoinREY37Ye.increaseApproval.call(addressnxyHMQC, uintse11oc6, {from: accounts[4]});
//		const boolo6DHGl = await EdenCoinREY37Ye.decreaseApproval.call(addressPjvVCRx, uint8c5xkS, {from: accounts[0]});

		assert.equal(boolqbN7UNq, true)
		await expect(EdenCoinREY37Ye.transferFrom.call(addressCme6X2U, addresstKpXAq2, uintnoij4EX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinWjuv4c = await EdenCoin.new({from: accounts[4]});
		const uintKIp18u = BigInt("496")
		const addresseiOwQiI = accounts[4]
		const address6wtj3q = accounts[3]
		const boolLJoa5LW = await EdenCoinWjuv4c.transfer.call(addresseiOwQiI, uintKIp18u, {from: accounts[4]});
		const uint256DQkr0n = await EdenCoinWjuv4c.balanceOf.call(address6wtj3q, {from: accounts[0]});

		assert.equal(boolLJoa5LW, true)
		assert.equal(uint256DQkr0n, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCointVJBLfD = await EdenCoin.new({from: accounts[3]});
		const uintthxSY0c = BigInt("1022")
		const addresshnF7tgY = accounts[5]
		const addressktweJS8 = accounts[2]
		const addressrA4CbNr = "0x0000000000000000000000000000000000000001"
		const boolDkhUMQ5 = await EdenCointVJBLfD.increaseApproval.call(addresshnF7tgY, uintthxSY0c, {from: accounts[3]});
		const uint256BHui9Os = await EdenCointVJBLfD.allowance.call(addressrA4CbNr, addressktweJS8, {from: accounts[3]});

		assert.equal(boolDkhUMQ5, true)
		assert.equal(uint256BHui9Os, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinBWriUYy = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsxiMhAV = BigInt("926")
		const addressSCYhCsc = "0x0000000000000000000000000000000000000001"
		const uintyefieDJ = BigInt("959")
		const addressNYMQFpJ = accounts[4]
		const uintM51i1fm = BigInt("484")
		const addressTFkJ4oN = accounts[1]
		const uintxBj3afd = BigInt("1648")
		const addressRzwsz0x = accounts[3]
		const uintbb0M1h = BigInt("2008")
		const addressl2PTJu = accounts[0]
		const addressqJHBMQe = accounts[4]
		const uintcwiDE1T = BigInt("539")
		const addressUqRHKZi = accounts[1]
		const bool8713qh = await EdenCoinBWriUYy.increaseApproval.call(addressSCYhCsc, uintsxiMhAV, {from: accounts[0]});
		const boolwut9yvF = await EdenCoinBWriUYy.increaseApproval.call(addressNYMQFpJ, uintyefieDJ, {from: accounts[2]});
		const boolGyfeH8 = await EdenCoinBWriUYy.transfer.call(addressTFkJ4oN, uintM51i1fm, {from: accounts[2]});
		const bool9qtVCM = await EdenCoinBWriUYy.transfer.call(addressRzwsz0x, uintxBj3afd, {from: accounts[4]});
		const boolwGqEjxZ = await EdenCoinBWriUYy.transferFrom.call(addressqJHBMQe, addressl2PTJu, uintbb0M1h, {from: accounts[5]});
		const boolkvkVrIK = await EdenCoinBWriUYy.approve.call(addressUqRHKZi, uintcwiDE1T, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinkmoGaiL = await EdenCoin.new({from: accounts[4]});
		const uint4ba9b4 = BigInt("980")
		const addressq9J54Dq = accounts[0]
		const addressOEHtTWf = accounts[4]
		const uintdu7myY8 = BigInt("768")
		const addressBABaY8O = accounts[2]
		const addressVVzBCtB = accounts[0]
		const uinttD0yeOW = BigInt("1682")
		const addresscIvz4s2 = "0x0000000000000000000000000000000000000001"
		const address0nEHHv = accounts[3]
//		const boolDqQWqcQ = await EdenCoinkmoGaiL.transferFrom.call(addressOEHtTWf, addressq9J54Dq, uint4ba9b4, {from: accounts[4]});
//		const boolNxzHuFc = await EdenCoinkmoGaiL.transferFrom.call(addressVVzBCtB, addressBABaY8O, uintdu7myY8, {from: accounts[1]});
//		const boolwZaf5qg = await EdenCoinkmoGaiL.transfer.call(addresscIvz4s2, uinttD0yeOW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vu9Urc = await EdenCoinkmoGaiL.balanceOf.call(address0nEHHv, {from: accounts[4]});

		await expect(EdenCoinkmoGaiL.transferFrom.call(addressOEHtTWf, addressq9J54Dq, uint4ba9b4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinWjuv4c = await EdenCoin.new({from: accounts[4]});
		const addressbO6JNX4 = accounts[4]
		const uintN8n2d37 = BigInt("927")
		const addressq2HZsS6 = "0x0000000000000000000000000000000000000001"
		const uint256DQkr0n = await EdenCoinWjuv4c.balanceOf.call(addressbO6JNX4, {from: accounts[0]});
		const boolZdHjbKW = await EdenCoinWjuv4c.decreaseApproval.call(addressq2HZsS6, uintN8n2d37, {from: accounts[1]});

		assert.equal(boolZdHjbKW, true)
		assert.equal(uint256DQkr0n, BigInt("1000000000000000000000000000"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinF6YBScF = await EdenCoin.new({from: accounts[2]});
		const uintWZygiLE = BigInt("0")
		const addresshBARdum = accounts[1]
		const uintBXVOE9F = BigInt("724")
		const addressqW3HF61 = accounts[2]
		const uintgbvcLQr = BigInt("666")
		const addressK4eQuvl = accounts[0]
		const uintMUiFHcc = BigInt("1909")
		const addressh8u2tg1 = accounts[3]
		const addressntHNCCq = accounts[1]
		const addressczEkAyh = accounts[1]
		const uintEF1BChD = BigInt("841")
		const addressTqNmVfq = accounts[4]
		const uintlbsCWcD = BigInt("1742")
		const addressDApjbe = accounts[0]
		const addressKWQp5hW = accounts[2]
		const uintRKauqDB = BigInt("925")
		const addressjeX4FPp = accounts[4]
		const uintYHx52bA = BigInt("827")
		const addressXk1aawp = accounts[1]
		const uintdXdsLC6 = BigInt("1429")
		const addressicebmKi = accounts[2]
		const addressu6lQYU9 = accounts[4]
		const uintMmORo0a = BigInt("351")
		const addressdBsLHXv = accounts[0]
		const boolgohngot = await EdenCoinF6YBScF.decreaseApproval.call(addresshBARdum, uintWZygiLE, {from: accounts[1]});
		const boolHSmtyZ9 = await EdenCoinF6YBScF.decreaseApproval.call(addressqW3HF61, uintBXVOE9F, {from: accounts[1]});
		const boolpWTSUIQ = await EdenCoinF6YBScF.approve.call(addressK4eQuvl, uintgbvcLQr, {from: accounts[2]});
		const boolgSnSzC = await EdenCoinF6YBScF.approve.call(addressh8u2tg1, uintMUiFHcc, {from: accounts[4]});
		const uint256g5Xph0A = await EdenCoinF6YBScF.allowance.call(addressczEkAyh, addressntHNCCq, {from: accounts[1]});
		const boolOmpTPYs = await EdenCoinF6YBScF.increaseApproval.call(addressTqNmVfq, uintEF1BChD, {from: accounts[4]});
//		const boolpqqo1J2 = await EdenCoinF6YBScF.transferFrom.call(addressKWQp5hW, addressDApjbe, uintlbsCWcD, {from: accounts[1]});
//		const boolAgeddH2 = await EdenCoinF6YBScF.increaseApproval.call(addressjeX4FPp, uintRKauqDB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrNfSi4k = await EdenCoinF6YBScF.approve.call(addressXk1aawp, uintYHx52bA, {from: accounts[3]});
//		const boolpAnL8Mg = await EdenCoinF6YBScF.transferFrom.call(addressu6lQYU9, addressicebmKi, uintdXdsLC6, {from: accounts[3]});
//		const boolQXPVcQ = await EdenCoinF6YBScF.decreaseApproval.call(addressdBsLHXv, uintMmORo0a, {from: accounts[3]});

		assert.equal(boolHSmtyZ9, true)
		assert.equal(boolOmpTPYs, true)
		assert.equal(boolgSnSzC, true)
		assert.equal(boolgohngot, true)
		assert.equal(boolpWTSUIQ, true)
		assert.equal(uint256g5Xph0A, BigInt("0"))
		await expect(EdenCoinF6YBScF.transferFrom.call(addressKWQp5hW, addressDApjbe, uintlbsCWcD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
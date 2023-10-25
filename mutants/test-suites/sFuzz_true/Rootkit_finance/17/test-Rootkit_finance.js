const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeWqqUwTe = await Rootkit_finance.new({from: accounts[3]});
		const addressMXYIRgS = accounts[5]
		const uintpbxlk9F = BigInt("1599")
		const addressUt1fWrx = accounts[0]
		const addressHXeGtpL = accounts[4]
		const addressOHaAhA1 = accounts[4]
		const addressdVnBPsY = accounts[4]
		const addressqC0KmfV = accounts[0]
		const addressHkkumWq = accounts[4]
		const uint256Kv1yNfP = await Rootkit_financeWqqUwTe.balanceOf.call(addressMXYIRgS, {from: accounts[0]});
		const boolarL8Dvi = await Rootkit_financeWqqUwTe.transfer.call(addressUt1fWrx, uintpbxlk9F, {from: accounts[0]});
		const uintWGg5Kjn = await Rootkit_financeWqqUwTe.allowance.call(addressOHaAhA1, addressHXeGtpL, {from: accounts[1]});
		const uint256iZMovo = await Rootkit_financeWqqUwTe.balanceOf.call(addressdVnBPsY, {from: accounts[1]});
		const uintKLTWef = await Rootkit_financeWqqUwTe.allowance.call(addressHkkumWq, addressqC0KmfV, {from: accounts[0]});

		assert.equal(boolarL8Dvi, false)
		assert.equal(uint256Kv1yNfP, BigInt("0"))
		assert.equal(uint256iZMovo, BigInt("0"))
		assert.equal(uintKLTWef, BigInt("0"))
		assert.equal(uintWGg5Kjn, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeQIiFK4c = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintk0EhJTz = BigInt("1904")
		const addressIxO0WK = accounts[3]
		const addressjfSM9dW = "0x0000000000000000000000000000000000000001"
		const uintrawSMSy = BigInt("372")
		const addressLh0D3cT = accounts[2]
		const uint256URfIj5s = await Rootkit_financeQIiFK4c.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const bool0oxsFG = await Rootkit_financeQIiFK4c.approve.call(addressIxO0WK, uintk0EhJTz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xD1fB8w = await Rootkit_financeQIiFK4c.balanceOf.call(addressjfSM9dW, {from: accounts[3]});
		const boolEcn20BB = await Rootkit_financeQIiFK4c.transfer.call(addressLh0D3cT, uintrawSMSy, {from: accounts[0]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeFTgPI3T = await Rootkit_finance.new({from: accounts[4]});
		const addressjdsUN1w = accounts[0]
		const addressoREGC8R = accounts[2]
		const addresst7tYoUF = accounts[4]
		const addressqX1hXUC = accounts[1]
		const addressrEbHTcI = accounts[5]
		const addressUo9FrsT = accounts[0]
		const uintZ7tzy4n = BigInt("1529")
		const addressdvi4Jqd = accounts[0]
		const uint256XauAXWf = await Rootkit_financeFTgPI3T.balanceOf.call(addressjdsUN1w, {from: accounts[5]});
		const uintPiuhl7P = await Rootkit_financeFTgPI3T.allowance.call(addresst7tYoUF, addressoREGC8R, {from: accounts[5]});
		const uint256K2XxRU = await Rootkit_financeFTgPI3T.balanceOf.call(addressqX1hXUC, {from: accounts[0]});
		const uintsAwbqTm = await Rootkit_financeFTgPI3T.allowance.call(addressUo9FrsT, addressrEbHTcI, {from: accounts[3]});
		const boolng8CJEg = await Rootkit_financeFTgPI3T.approve.call(addressdvi4Jqd, uintZ7tzy4n, {from: accounts[5]});

		assert.equal(boolng8CJEg, true)
		assert.equal(uint256K2XxRU, BigInt("0"))
		assert.equal(uint256XauAXWf, BigInt("0"))
		assert.equal(uintPiuhl7P, BigInt("0"))
		assert.equal(uintsAwbqTm, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeO6Jjal9 = await Rootkit_finance.new({from: accounts[5]});
		const uintm1dbDTs = BigInt("213")
		const addresscdDJzTd = accounts[1]
		const addressSk1k3g2 = accounts[1]
		const addressKDKQtWq = accounts[1]
		const addressga4A6UU = "0x0000000000000000000000000000000000000001"
		const uintdhlHOW = BigInt("1997")
		const addressQq3PAHQ = accounts[4]
		const uinto5aobTW = BigInt("1226")
		const addressAgeJcf = accounts[2]
		const addressoU9fI7a = accounts[1]
		const addressWTtPFc5 = accounts[4]
		const boolC6uXuXm = await Rootkit_financeO6Jjal9.transferFrom.call(addressSk1k3g2, addresscdDJzTd, uintm1dbDTs, {from: accounts[5]});
		const uintIJnlAH0 = await Rootkit_financeO6Jjal9.allowance.call(addressga4A6UU, addressKDKQtWq, {from: accounts[2]});
		const booldJzr1TC = await Rootkit_financeO6Jjal9.approve.call(addressQq3PAHQ, uintdhlHOW, {from: accounts[0]});
		const boolVkDJqLk = await Rootkit_financeO6Jjal9.transfer.call(addressAgeJcf, uinto5aobTW, {from: accounts[1]});
		const uintj4YAiir = await Rootkit_financeO6Jjal9.allowance.call(addressWTtPFc5, addressoU9fI7a, {from: accounts[5]});

		assert.equal(boolC6uXuXm, false)
		assert.equal(boolVkDJqLk, false)
		assert.equal(booldJzr1TC, true)
		assert.equal(uintIJnlAH0, BigInt("0"))
		assert.equal(uintj4YAiir, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeTh0uCTP = await Rootkit_finance.new({from: accounts[4]});
		const addressLgqo4Bf = accounts[2]
		const uintpvTPRkG = BigInt("876")
		const addresshjjydTa = accounts[4]
		const addressOeRojHa = accounts[1]
		const addressIc8mylf = "0x0000000000000000000000000000000000000001"
		const uint256lLuBG8b = await Rootkit_financeTh0uCTP.totalSupply.call({from: accounts[2]});
		const uint256Ta3KBD4 = await Rootkit_financeTh0uCTP.totalSupply.call({from: accounts[5]});
		const uint256YnnWrCa = await Rootkit_financeTh0uCTP.balanceOf.call(addressLgqo4Bf, {from: accounts[3]});
		const boolOwj90z = await Rootkit_financeTh0uCTP.transfer.call(addresshjjydTa, uintpvTPRkG, {from: accounts[3]});
		const uintRPpesu = await Rootkit_financeTh0uCTP.allowance.call(addressIc8mylf, addressOeRojHa, {from: accounts[0]});

		assert.equal(boolOwj90z, false)
		assert.equal(uint256Ta3KBD4, BigInt("10000000000000000000000"))
		assert.equal(uint256YnnWrCa, BigInt("0"))
		assert.equal(uint256lLuBG8b, BigInt("10000000000000000000000"))
		assert.equal(uintRPpesu, BigInt("0"))
	});
})
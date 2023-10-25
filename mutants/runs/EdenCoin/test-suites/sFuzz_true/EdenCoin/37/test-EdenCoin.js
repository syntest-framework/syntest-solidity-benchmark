const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinGIgqjNQ = await EdenCoin.new({from: accounts[5]});
		const uintZmA6pyQ = BigInt("1482")
		const addressKBGRMYo = accounts[2]
		const addressGBxx0K = accounts[4]
		const addressYCUaFtp = accounts[0]
		const boolHBB8ut = await EdenCoinGIgqjNQ.approve.call(addressKBGRMYo, uintZmA6pyQ, {from: accounts[1]});
		const uint256LePjjQ = await EdenCoinGIgqjNQ.allowance.call(addressYCUaFtp, addressGBxx0K, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHBB8ut, true)
		assert.equal(uint256LePjjQ, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOAxYtrs = await EdenCoin.new({from: accounts[2]});
		const addressREuoMz1 = accounts[0]
		const addressKTqGjyq = accounts[5]
		const addressjFpkKu5 = "0x0000000000000000000000000000000000000001"
		const uintgYF400b = BigInt("485")
		const addressUwpRv10 = "0x0000000000000000000000000000000000000001"
		const uint256OMqCedR = await EdenCoinOAxYtrs.balanceOf.call(addressREuoMz1, {from: accounts[5]});
		const uint256abrjLrT = await EdenCoinOAxYtrs.allowance.call(addressjFpkKu5, addressKTqGjyq, {from: accounts[0]});
		const boolM3Ad4f = await EdenCoinOAxYtrs.increaseApproval.call(addressUwpRv10, uintgYF400b, {from: accounts[0]});

		assert.equal(boolM3Ad4f, true)
		assert.equal(uint256OMqCedR, BigInt("0"))
		assert.equal(uint256abrjLrT, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinJ8n9x7q = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshiLMQAn = accounts[4]
		const addressFGlc9JM = accounts[1]
		const addressiJLOP8 = accounts[0]
		const uintX4I8Afz = BigInt("637")
		const addressUvG9Vlg = accounts[0]
		const uintxYJUUY = BigInt("1866")
		const addressUMfHIi1 = accounts[0]
		const uint256ZoE0q9M = await EdenCoinJ8n9x7q.allowance.call(addressFGlc9JM, addresshiLMQAn, {from: accounts[4]});
		const uint256yYf3twS = await EdenCoinJ8n9x7q.balanceOf.call(addressiJLOP8, {from: accounts[3]});
		const boolwWaRqp8 = await EdenCoinJ8n9x7q.increaseApproval.call(addressUvG9Vlg, uintX4I8Afz, {from: accounts[3]});
		const boolvZrjpNr = await EdenCoinJ8n9x7q.increaseApproval.call(addressUMfHIi1, uintxYJUUY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for EdenCoin', async () => {
		const EdenCoin88M2X6 = await EdenCoin.new({from: accounts[1]});
		const uintqHY2ci = BigInt("464")
		const addressortThf3 = accounts[3]
		const addressvjQQG0I = accounts[4]
		const addressECXODRo = accounts[2]
		const uintSfPbIiu = BigInt("1947")
		const addressilok39O = accounts[5]
		const addresskJQblh3 = accounts[2]
		const addressT2zshXU = "0x0000000000000000000000000000000000000001"
		const uintyfKtCpL = BigInt("1316")
		const addressddufsuD = accounts[4]
		const addresskkzwpMl = "0x0000000000000000000000000000000000000001"
		const uintxJdXDuJ = BigInt("29")
		const addresspOVseHg = accounts[0]
		const boolIX1OA9Q = await EdenCoin88M2X6.increaseApproval.call(addressortThf3, uintqHY2ci, {from: accounts[4]});
		const uint256BOpsfMN = await EdenCoin88M2X6.allowance.call(addressECXODRo, addressvjQQG0I, {from: accounts[0]});
		const boolnxh2Ury = await EdenCoin88M2X6.transfer.call(addressilok39O, uintSfPbIiu, {from: accounts[4]});
		const uint256KCxaoW6 = await EdenCoin88M2X6.allowance.call(addressT2zshXU, addresskJQblh3, {from: accounts[3]});
		const boolmgSteIh = await EdenCoin88M2X6.transferFrom.call(addresskkzwpMl, addressddufsuD, uintyfKtCpL, {from: accounts[0]});
		const boolXeIB952 = await EdenCoin88M2X6.approve.call(addresspOVseHg, uintxJdXDuJ, {from: accounts[1]});

		assert.equal(boolIX1OA9Q, true)
		assert.equal(uint256BOpsfMN, BigInt("0"))
		await expect(EdenCoin88M2X6.transfer.call(addressilok39O, uintSfPbIiu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinQKh00HV = await EdenCoin.new({from: accounts[4]});
		const uintPdtfmbs = BigInt("1583")
		const addressz2V2L7D = accounts[2]
		const uintZnUFkYR = BigInt("65")
		const addressHy2vtP = accounts[4]
		const addresslqtK4CS = accounts[1]
		const uintJ9UDnQq = BigInt("559")
		const addressi0IleUu = accounts[0]
		const uintQfyb44M = BigInt("131")
		const addressnEurmZv = accounts[5]
		const boolQ1A5kZy = await EdenCoinQKh00HV.decreaseApproval.call(addressz2V2L7D, uintPdtfmbs, {from: accounts[4]});
		const booleXcNDa7 = await EdenCoinQKh00HV.transferFrom.call(addresslqtK4CS, addressHy2vtP, uintZnUFkYR, {from: "0x0000000000000000000000000000000000000001"});
		const boolKbsTbJ1 = await EdenCoinQKh00HV.approve.call(addressi0IleUu, uintJ9UDnQq, {from: accounts[2]});
		const bool07Ey2n = await EdenCoinQKh00HV.increaseApproval.call(addressnEurmZv, uintQfyb44M, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQ1A5kZy, true)
		await expect(EdenCoinQKh00HV.transferFrom.call(addresslqtK4CS, addressHy2vtP, uintZnUFkYR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinft79Hb9 = await EdenCoin.new({from: accounts[1]});
		const uintgwC80jv = BigInt("970")
		const addressw5ldut = accounts[0]
		const uintf1sMYkw = BigInt("905")
		const addressS2Am6dm = accounts[4]
		const addressBxibS6 = accounts[2]
		const uintbNkeBmH = BigInt("26")
		const addressEwH5LQX = "0x0000000000000000000000000000000000000001"
		const uintY30o7DG = BigInt("684")
		const addressm3QVfH4 = accounts[2]
		const boolgoMlHuc = await EdenCoinft79Hb9.transfer.call(addressw5ldut, uintgwC80jv, {from: accounts[1]});
		const boolvWM1Hzs = await EdenCoinft79Hb9.transferFrom.call(addressBxibS6, addressS2Am6dm, uintf1sMYkw, {from: accounts[3]});
		const booluWOAt1H = await EdenCoinft79Hb9.decreaseApproval.call(addressEwH5LQX, uintbNkeBmH, {from: "0x0000000000000000000000000000000000000001"});
		const boolVsLO8RF = await EdenCoinft79Hb9.increaseApproval.call(addressm3QVfH4, uintY30o7DG, {from: accounts[1]});

		assert.equal(boolgoMlHuc, true)
		await expect(EdenCoinft79Hb9.transferFrom.call(addressBxibS6, addressS2Am6dm, uintf1sMYkw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinS91YLos = await EdenCoin.new({from: accounts[4]});
		const uintjVPr010 = BigInt("1546")
		const addressxRX5IDI = accounts[5]
		const uintCOZT79m = BigInt("1671")
		const addressrG8kvG = "0x0000000000000000000000000000000000000001"
		const addressCuyZsu = accounts[4]
		const uintKPVhlgp = BigInt("705")
		const addressYvdskW = "0x0000000000000000000000000000000000000001"
		const addressJOsAVa3 = "0x0000000000000000000000000000000000000001"
		const boololLJdNb = await EdenCoinS91YLos.approve.call(addressxRX5IDI, uintjVPr010, {from: accounts[3]});
		const boolt7RVf3M = await EdenCoinS91YLos.transferFrom.call(addressCuyZsu, addressrG8kvG, uintCOZT79m, {from: accounts[2]});
		const boolTShDPHX = await EdenCoinS91YLos.transferFrom.call(addressJOsAVa3, addressYvdskW, uintKPVhlgp, {from: accounts[3]});

		assert.equal(boololLJdNb, true)
		await expect(EdenCoinS91YLos.transferFrom.call(addressCuyZsu, addressrG8kvG, uintCOZT79m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinS91YLos = await EdenCoin.new({from: accounts[4]});
		const uintAaHMLW = BigInt("1249")
		const addressfNwgoJF = accounts[0]
		const addressQRDB3TQ = accounts[2]
		const addressICDI812 = accounts[2]
		const uintyusBZy = BigInt("0")
		const addressYTamICn = accounts[3]
		const boolqiwNgVJ = await EdenCoinS91YLos.approve.call(addressfNwgoJF, uintAaHMLW, {from: accounts[1]});
		const uint256f4GFw8 = await EdenCoinS91YLos.allowance.call(addressICDI812, addressQRDB3TQ, {from: accounts[0]});
		const boolp7ntUA = await EdenCoinS91YLos.decreaseApproval.call(addressYTamICn, uintyusBZy, {from: accounts[5]});

		assert.equal(boolp7ntUA, true)
		assert.equal(boolqiwNgVJ, true)
		assert.equal(uint256f4GFw8, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinS91YLos = await EdenCoin.new({from: accounts[4]});
		const uintJx5hbB5 = BigInt("1116")
		const addressmFZUuyn = accounts[2]
		const uintZwqd4Ar = BigInt("0")
		const addressmFdcN4Z = accounts[2]
		const addressyCUwWQb = accounts[0]
		const uintE2nKzi5 = BigInt("17")
		const addressye8vb8L = accounts[3]
		const uintHOWTFlk = BigInt("2016")
		const addressCTcfHYF = accounts[3]
		const boolyLsuFr = await EdenCoinS91YLos.approve.call(addressmFZUuyn, uintJx5hbB5, {from: accounts[4]});
		const boolvUSBL1 = await EdenCoinS91YLos.transferFrom.call(addressyCUwWQb, addressmFdcN4Z, uintZwqd4Ar, {from: accounts[3]});
		const boolp7ntUA = await EdenCoinS91YLos.decreaseApproval.call(addressye8vb8L, uintE2nKzi5, {from: accounts[5]});
		const boolin5AuVv = await EdenCoinS91YLos.increaseApproval.call(addressCTcfHYF, uintHOWTFlk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolin5AuVv, true)
		assert.equal(boolp7ntUA, true)
		assert.equal(boolvUSBL1, true)
		assert.equal(boolyLsuFr, true)
	});
})
const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEqewRcJf = await REXUNIFINANCE.new({from: accounts[2]});
		const addressE8nN5v = accounts[1]
		const addressuDRPFrG = accounts[2]
		const addresseFkteMv = accounts[1]
		const addressTXMDjrk = await REXUNIFINANCEqewRcJf.transferOwnership.call(addressE8nN5v, {from: accounts[4]});
		const addressNLlVDK7 = await REXUNIFINANCEqewRcJf.transferOwnership.call(addressuDRPFrG, {from: accounts[0]});
		const uint256PjePeqD = await REXUNIFINANCEqewRcJf.transferableTokens.call(addresseFkteMv, {from: accounts[2]});

		await expect(REXUNIFINANCEqewRcJf.transferOwnership.call(addressE8nN5v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEs7ELixh = await REXUNIFINANCE.new({from: accounts[3]});
		const addressTrjTyXw = accounts[4]
		const addresszRuF6ze = accounts[3]
		const addressmZh8Gvn = accounts[0]
		const addressqqyZ51 = accounts[1]
		const addressg2QSjCA = await REXUNIFINANCEs7ELixh.transferOwnership.call(addressTrjTyXw, {from: accounts[3]});
		const uint256fWnADuK = await REXUNIFINANCEs7ELixh.balanceOf.call(addresszRuF6ze, {from: accounts[4]});
		const uint256AeYbePp = await REXUNIFINANCEs7ELixh.transferableTokens.call(addressmZh8Gvn, {from: accounts[5]});
		const addresskfVZB2g = await REXUNIFINANCEs7ELixh.transferOwnership.call(addressqqyZ51, {from: accounts[3]});

		assert.equal(uint256AeYbePp, BigInt("0"))
		assert.equal(uint256fWnADuK, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEOTW7ECx = await REXUNIFINANCE.new({from: accounts[1]});
		const uintRmQF5a3 = BigInt("811")
		const addressr5ok7Dk = accounts[4]
		const addressWFYnC0a = accounts[3]
		const uintPH7moT = BigInt("976")
		const addressW0n7ua = accounts[4]
		const uintbQNtHgf = BigInt("1063")
		const addressBkpbfEl = accounts[5]
		const uintjrA52k8 = BigInt("1444")
		const addressIz4iO2C = accounts[4]
		const uintYutpVel = BigInt("873")
		const addressrzblkGC = accounts[2]
		const boolR52aTsx = await REXUNIFINANCEOTW7ECx.transferFrom.call(addressWFYnC0a, addressr5ok7Dk, uintRmQF5a3, {from: "0x0000000000000000000000000000000000000001"});
		const boolDFJD4dz = await REXUNIFINANCEOTW7ECx.increaseApproval.call(addressW0n7ua, uintPH7moT, {from: accounts[5]});
		const boolb0eaZg4 = await REXUNIFINANCEOTW7ECx.transfer.call(addressBkpbfEl, uintbQNtHgf, {from: accounts[3]});
		const boolPhPI9l = await REXUNIFINANCEOTW7ECx.approve.call(addressIz4iO2C, uintjrA52k8, {from: accounts[2]});
		const boolhIbNUZN = await REXUNIFINANCEOTW7ECx.transfer.call(addressrzblkGC, uintYutpVel, {from: accounts[0]});

		await expect(REXUNIFINANCEOTW7ECx.transferFrom.call(addressWFYnC0a, addressr5ok7Dk, uintRmQF5a3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEZ78skP8 = await REXUNIFINANCE.new({from: accounts[0]});
		const uintQs8InQV = BigInt("1279")
		const addressgEbYW3c = accounts[4]
		const uintvrcyLLp = BigInt("357")
		const addressj3sgWX = "0x0000000000000000000000000000000000000001"
		const addresszVmw1Ht = accounts[5]
		const uintTM91Tte = BigInt("388")
		const addressKiIHOxQ = accounts[0]
		const uintVyGPyDm = BigInt("1372")
		const addressVavzc0u = accounts[0]
		const boolCmOZQKT = await REXUNIFINANCEZ78skP8.decreaseApproval.call(addressgEbYW3c, uintQs8InQV, {from: accounts[3]});
		const booli4qYdT9 = await REXUNIFINANCEZ78skP8.transferFrom.call(addresszVmw1Ht, addressj3sgWX, uintvrcyLLp, {from: accounts[5]});
		const boolGmrMyTi = await REXUNIFINANCEZ78skP8.transfer.call(addressKiIHOxQ, uintTM91Tte, {from: "0x0000000000000000000000000000000000000001"});
		const boolSEDpCBU = await REXUNIFINANCEZ78skP8.decreaseApproval.call(addressVavzc0u, uintVyGPyDm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCmOZQKT, true)
		await expect(REXUNIFINANCEZ78skP8.transferFrom.call(addresszVmw1Ht, addressj3sgWX, uintvrcyLLp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCERzwGQv = await REXUNIFINANCE.new({from: accounts[5]});
		const uintQXA4Ov9 = BigInt("1375")
		const addressm3A3MY = accounts[0]
		const addressSrC1LQ1 = accounts[1]
		const addressasgSUFl = accounts[1]
		const addressDN2pD57 = accounts[5]
		const uinthL8UlY4 = BigInt("1530")
		const addresszrpBnB5 = accounts[4]
		const bool6TM3nB = await REXUNIFINANCERzwGQv.increaseApproval.call(addressm3A3MY, uintQXA4Ov9, {from: accounts[1]});
		const addressMu5WpxH = await REXUNIFINANCERzwGQv.transferOwnership.call(addressSrC1LQ1, {from: accounts[4]});
		const uint256cXmmFQY = await REXUNIFINANCERzwGQv.allowance.call(addressDN2pD57, addressasgSUFl, {from: accounts[1]});
		const boolAmFIRB4 = await REXUNIFINANCERzwGQv.approve.call(addresszrpBnB5, uinthL8UlY4, {from: accounts[5]});

		assert.equal(bool6TM3nB, true)
		await expect(REXUNIFINANCERzwGQv.transferOwnership.call(addressSrC1LQ1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCETD6RMyx = await REXUNIFINANCE.new({from: accounts[1]});
		const uintUgwnO6h = BigInt("926")
		const addressIlvYH1B = accounts[1]
		const addressuNOVdNf = accounts[3]
		const uintPJN7QTb = BigInt("568")
		const addressiPFXebr = accounts[2]
		const uintAjKyj44 = BigInt("571")
		const addressFgsB6qn = "0x0000000000000000000000000000000000000001"
		const uintolljajc = BigInt("11")
		const addressVBo67s = accounts[1]
		const uintBY2NvS = BigInt("1416")
		const addressCbC1CO3 = accounts[0]
		const boolzAYWs5 = await REXUNIFINANCETD6RMyx.approve.call(addressIlvYH1B, uintUgwnO6h, {from: accounts[5]});
		const uint256XA5FiHp = await REXUNIFINANCETD6RMyx.balanceOf.call(addressuNOVdNf, {from: accounts[2]});
		const boollXuj4w9 = await REXUNIFINANCETD6RMyx.decreaseApproval.call(addressiPFXebr, uintPJN7QTb, {from: accounts[5]});
		const boolzOKMqPG = await REXUNIFINANCETD6RMyx.decreaseApproval.call(addressFgsB6qn, uintAjKyj44, {from: accounts[4]});
		const booln2btzi0 = await REXUNIFINANCETD6RMyx.decreaseApproval.call(addressVBo67s, uintolljajc, {from: accounts[0]});
		const boolnm5HR3v = await REXUNIFINANCETD6RMyx.transfer.call(addressCbC1CO3, uintBY2NvS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boollXuj4w9, true)
		assert.equal(booln2btzi0, true)
		assert.equal(boolzAYWs5, true)
		assert.equal(boolzOKMqPG, true)
		assert.equal(uint256XA5FiHp, BigInt("0"))
		await expect(REXUNIFINANCETD6RMyx.transfer.call(addressCbC1CO3, uintBY2NvS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCENYyEIW6 = await REXUNIFINANCE.new({from: accounts[3]});
		const addressPXFNBVw = accounts[1]
		const addressHD6RQE = "0x0000000000000000000000000000000000000001"
		const uinttSvpenM = BigInt("1257")
		const addresseMVLGeI = accounts[4]
		const addressahDXaa = accounts[5]
		const uint256NnLwEAw = await REXUNIFINANCENYyEIW6.allowance.call(addressHD6RQE, addressPXFNBVw, {from: accounts[0]});
		const boolW0PNEv2 = await REXUNIFINANCENYyEIW6.transfer.call(addresseMVLGeI, uinttSvpenM, {from: accounts[0]});
		const addresso4lgl6 = await REXUNIFINANCENYyEIW6.transferOwnership.call(addressahDXaa, {from: accounts[0]});

		assert.equal(uint256NnLwEAw, BigInt("0"))
		await expect(REXUNIFINANCENYyEIW6.transfer.call(addresseMVLGeI, uinttSvpenM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCELqsKJMt = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskGhSpp = accounts[4]
		const addressXHRU4nl = "0x0000000000000000000000000000000000000001"
		const addressdvUBsox = accounts[2]
		const uintSeBlQAx = BigInt("1773")
		const addressJuN7zyQ = "0x0000000000000000000000000000000000000001"
		const uint256A1uGxfI = await REXUNIFINANCELqsKJMt.balanceOf.call(addresskGhSpp, {from: accounts[0]});
		const addressqDgzjY0 = await REXUNIFINANCELqsKJMt.transferOwnership.call(addressXHRU4nl, {from: accounts[4]});
		const uint2563Epel3 = await REXUNIFINANCELqsKJMt.transferableTokens.call(addressdvUBsox, {from: accounts[0]});
		const boolQKQnktY = await REXUNIFINANCELqsKJMt.transfer.call(addressJuN7zyQ, uintSeBlQAx, {from: accounts[1]});
	});
})